import { FormData } from "../types";
import { KintoneRestAPIClient } from "@kintone/rest-api-client";

const API_KEY = import.meta.env.VITE_KINTONE_API_KEY;
const DOMAIN = import.meta.env.VITE_KINTONE_DOMAIN;
const APP_ID = import.meta.env.VITE_KINTONE_APP_ID;

// クライアントの初期化
const client = new KintoneRestAPIClient({
  baseUrl: `https://${DOMAIN}`,
  auth: { apiToken: API_KEY },
});

export const submitToKintone = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  try {
    const record = {
      お客様名: { value: formData.name },
      メールアドレス: { value: formData.email },
      電話番号: { value: formData.phone },
      文字列__複数行_: { value: "API連携テスト送信" },
      // energyType: { value: formData.energyType },
      // propertyType: { value: formData.propertyType },
      // propertyStatus: { value: formData.propertyStatus },
      // postalCode: { value: formData.postalCode },
      // prefecture: { value: formData.prefecture },
      // address: { value: formData.address },
      // usageStatus: { value: formData.usageStatus },
      // name: { value: formData.name },
      // email: { value: formData.email },
      // phone: { value: formData.phone },
    };

    const response = await client.record.addRecord({
      app: APP_ID,
      record: record,
    });

    console.log("Kintone response:", response);
    return { success: true, message: "送信が完了しました！" };
  } catch (error) {
    console.error("Error submitting to Kintone:", error);
    return {
      success: false,
      message: "エラーが発生しました。後でもう一度お試しください。",
    };
  }
};
