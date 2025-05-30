/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Updated to use process.env for Cloud Run compatibility
const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const { z } = require("zod");
// const functions = require("firebase-functions"); // No longer needed

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const allowedOrigins = [
  // "http://localhost:5173", // ローカルでの開発時に使用
  "https://keigo9.github.io", // テスト環境
  // "https://keigo9.github.io", // 本番環境
];

const formDataSchema = z.object({
  // step1
  energyType: z.enum(["gas", "all_electric", "unknown"]),
  // step2
  feelAboutEnergyFee: z.enum(["very_high", "a_bit_concerned", "not_concerned"]),
  // step3
  electricityBill: z.enum([
    "less_than_10000",
    "between_10000_and_15000",
    "between_15000_and_20000",
    "over_20000",
    "unknown",
  ]),
  // step4
  propertyType: z.enum(["detached_house", "buying_planned", "rental"]),
  buildingOld: z.enum([
    "less_than_5",
    "between_5_and_10",
    "between_10_and_15",
    "between_15_and_20",
    "over_20",
    "unknown",
  ]),
  people: z.number().optional(),
  // step5
  name: z.string(),
  phone: z.string(),
  email: z.string(),
});

// Kintoneのselectのvalueにenumのvalueを設定する
const kintoneSelectValue = {
  energyType: {
    gas: "ガス",
    all_electric: "オール電化",
    unknown: "わからない",
  },
  feelAboutEnergyFee: {
    very_high: "すごく高くなったと感じる",
    a_bit_concerned: "ちょっと気になる",
    not_concerned: "特に気にしていない",
  },
  electricityBill: {
    less_than_10000: "〜10,000円",
    between_10000_and_15000: "10,000〜15,000円",
    between_15000_and_20000: "15,000〜20,000円",
    over_20000: "20,000〜円",
    unknown: "わからない(顧客回答)",
  },
  propertyType: {
    detached_house: "持ち家（戸建て）",
    buying_planned: "購入予定（建築中含む）",
    rental: "賃貸",
  },
  buildingOld: {
    less_than_5: "～5年",
    between_5_and_10: "5〜10年",
    between_10_and_15: "10〜15年",
    between_15_and_20: "15〜20年",
    over_20: "20年以上",
    unknown: "わからない",
  },
};

exports.submitToKintone = onRequest(
  { region: "asia-northeast1" }, // 東京リージョンでデプロイ
  async (request, response) => {
    // CORSヘッダーの設定
    const origin = request.headers.origin;

    if (allowedOrigins.includes(origin)) {
      response.set("Access-Control-Allow-Origin", origin);
    } else {
      response.set("Access-Control-Allow-Origin", "null");
    }
    response.set("Access-Control-Allow-Methods", "POST, OPTIONS");
    response.set("Access-Control-Allow-Headers", "Content-Type");

    // OPTIONSリクエストの処理
    if (request.method === "OPTIONS") {
      response.status(200).send("CORS preflight request successful");
      return;
    }

    try {
      logger.info("Function started", {
        structuredData: true,
        body: request.body,
        headers: request.headers,
      });

      // 環境変数の取得（Cloud Run用に修正）
      const API_KEY = process.env.KINTONE_API_KEY;
      const DOMAIN = process.env.KINTONE_DOMAIN;
      const APP_ID = process.env.KINTONE_APP_ID;

      logger.info("Environment variables loaded", {
        hasApiKey: !!API_KEY,
        hasDomain: !!DOMAIN,
        hasAppId: !!APP_ID,
      });

      // 環境変数のバリデーション
      if (!API_KEY || !DOMAIN || !APP_ID) {
        logger.error("Missing required environment variables", {
          hasApiKey: !!API_KEY,
          hasDomain: !!DOMAIN,
          hasAppId: !!APP_ID,
        });
        response.status(500).json({
          success: false,
          message: "サーバーの設定が不完全です。環境変数を確認してください。",
        });
        return;
      }

      const formData = request.body;

      // バリデーション
      const parseResult = formDataSchema.safeParse(request.body);
      if (!parseResult.success) {
        // parseResult.error で詳細なエラーが取れる
        response.status(400).json({
          success: false,
          message: "入力値が不正です",
          errors: parseResult.error.errors,
        });
        return;
      }

      const record = {
        // step1
        ガスオール電化: {
          value: kintoneSelectValue.energyType[formData.energyType],
        },
        // step2
        光熱費所感: {
          value:
            kintoneSelectValue.feelAboutEnergyFee[formData.feelAboutEnergyFee],
        },
        // step3
        電気代: {
          value: kintoneSelectValue.electricityBill[formData.electricityBill],
        },
        // step4
        物件情報: {
          value: kintoneSelectValue.propertyType[formData.propertyType],
        },
        世帯人数: { value: formData.people }, // Optional
        築年数: { value: kintoneSelectValue.buildingOld[formData.buildingOld] },
        // step5
        お客様名: { value: formData.name },
        電話番号: { value: formData.phone },
        メールアドレス: { value: formData.email },
      };

      logger.info("Sending to Kintone", {
        url: `https://${DOMAIN}/k/v1/record.json`,
        app: APP_ID,
        record: record,
      });

      const kintoneResponse = await fetch(
        `https://${DOMAIN}/k/v1/record.json`,
        {
          method: "POST",
          headers: {
            "X-Cybozu-API-Token": API_KEY,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            app: APP_ID,
            record: record,
          }),
        }
      );

      const data = await kintoneResponse.json();
      logger.info("Kintone response received", {
        status: kintoneResponse.status,
        data: data,
      });

      if (!kintoneResponse.ok) {
        logger.error("Kintone API error", {
          status: kintoneResponse.status,
          data: data,
        });

        if (data.errors) {
          const errorMessages = Object.entries(data.errors)
            .map(([field, error]) => `${field}: ${error.messages.join(", ")}`)
            .join("\n");
          throw new Error(`Kintoneエラー:\n${errorMessages}`);
        }
        throw new Error(data.message || "Kintoneへの送信に失敗しました");
      }

      logger.info("Function completed successfully", { data });
      response.json({
        success: true,
        message: "送信が完了しました！",
        data: data,
      });
    } catch (error) {
      logger.error("Error details", {
        name: error.name,
        message: error.message,
        stack: error.stack,
        body: request.body,
      });

      response
        .status(error.message.includes("必須フィールド") ? 400 : 500)
        .json({
          success: false,
          message: error.message.includes("Kintoneエラー")
            ? error.message
            : "エラーが発生しました。後でもう一度お試しください。",
          error: error.message,
        });
    }
  }
);
