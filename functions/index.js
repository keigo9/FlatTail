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
  energyType: z.enum(["gas", "all_electric"]),
  propertyType: z.enum(["detached_house", "apartment", "store"]),
  propertyStatus: z.enum(["current_residence", "moving_location"]),
  postalCode: z.string(),
  prefecture: z.string(),
  address: z.string(),
  electricityBill: z
    .enum([
      "less_than_10000",
      "between_10000_and_15000",
      "between_15000_and_20000",
      "between_20000_and_25000",
      "between_25000_and_30000",
      "between_30000_and_35000",
      "between_35000_and_40000",
      "over_40000",
    ])
    .optional(),
  usage: z.number().optional(),
  people: z.number().optional(),
  company: z.string().optional(),
  name: z.string(),
  phone: z.string(),
  email: z.string(),
});

// Kintoneのselectのvalueにenumのvalueを設定する
const kintoneSelectValue = {
  energyType: {
    gas: "ガス",
    all_electric: "オール電化",
  },
  propertyType: {
    detached_house: "戸建て",
    apartment: "マンション・アパート",
    store: "店舗",
  },
  propertyStatus: {
    current_residence: "現在のお住まい",
    moving_location: "引越し先",
  },
  electricityBill: {
    less_than_10000: "~10,000円",
    between_10000_and_15000: "10,000円~",
    between_15000_and_20000: "15,000円~",
    between_20000_and_25000: "20,000円~",
    between_25000_and_30000: "25,000円~",
    between_30000_and_35000: "30,000円~",
    between_35000_and_40000: "35,000円~",
    over_40000: "40,000円~",
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
        比較物件: {
          value: kintoneSelectValue.propertyType[formData.propertyType],
        },
        // step3
        利用先: {
          value: kintoneSelectValue.propertyStatus[formData.propertyStatus],
        },
        // step4
        郵便番号: { value: formData.postalCode },
        都道府県: { value: formData.prefecture },
        それ以降の住所: { value: formData.address },
        // step5
        電気代: {
          value: kintoneSelectValue.electricityBill[formData.electricityBill],
        }, // Optional
        使用量: { value: formData.usage }, // Optional
        世帯人数: { value: formData.people }, // Optional
        使用電力会社: { value: formData.company }, // Optional
        // step6
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
