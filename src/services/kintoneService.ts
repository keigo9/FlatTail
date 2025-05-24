import { FormData } from "../types";

const ENVIRONMENT = import.meta.env.VITE_ENVIRONMENT ?? "development";
const FIREBASE_FUNCTION_URL = import.meta.env.VITE_FIREBASE_FUNCTION_URL;

interface KintoneResponse {
  success: boolean;
  message: string;
  record?: {
    id: string;
    revision: string;
  };
}

export const submitToKintone = async (
  formData: FormData
): Promise<{ success: boolean; message: string }> => {
  if (ENVIRONMENT === "local") {
    return {
      success: true,
      message: "デバッグモードでは送信できません",
    };
  }

  try {
    const response = await fetch(FIREBASE_FUNCTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = (await response.json()) as KintoneResponse;

    if (!response.ok) {
      throw new Error(data.message || "エラーが発生しました");
    }

    return {
      success: data.success,
      message: data.message,
    };
  } catch (error) {
    console.error("Error submitting to Firebase Function:", error);
    return {
      success: false,
      message: "エラーが発生しました。後でもう一度お試しください。",
    };
  }
};
