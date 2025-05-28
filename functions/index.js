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

      // 必須フィールドのバリデーション
      if (
        // !formData.energyType ||
        // !formData.propertyType ||
        // !formData.propertyStatus ||
        !formData.postalCode ||
        !formData.prefecture ||
        !formData.address ||
        !formData.name ||
        // !formData.nameKana ||
        !formData.phone ||
        !formData.email
      ) {
        logger.warn("Missing required fields", { formData });
        throw new Error("必須フィールドが不足しています");
      }
      // todo: 型のバリデーション

      // todo: formDataをKintoneのカラムに合わせて変換する
      const record = {
        // step1
        // ガスオール電化: { value: formData.energyType },
        // step2
        // 比較物件: { value: formData.propertyType },
        // step3
        // 利用先: { value: formData.propertyStatus },
        // step4
        郵便番号: { value: formData.postalCode },
        都道府県: { value: formData.prefecture },
        それ以降の住所: { value: formData.address },
        // step5
        // 利用月: { value: formData.month }, // Optional
        // 電気代: { value: formData.electricityBill }, // Optional
        // 使用量: { value: formData.usage }, // Optional
        世帯人数: { value: formData.people }, // Optional
        // 使用電力会社: { value: formData.company }, // Optional
        // step6
        お客様名: { value: formData.name },
        // ふりがな: { value: formData.nameKana },
        電話番号: { value: formData.phone },
        メールアドレス: { value: formData.email },

        文字列__複数行_: { value: "API連携テスト送信" },
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
