import { FormData } from '../types';

const API_KEY = import.meta.env.VITE_KINTONE_API_KEY;
const DOMAIN = import.meta.env.VITE_KINTONE_DOMAIN;
const APP_ID = import.meta.env.VITE_KINTONE_APP_ID;

export const submitToKintone = async (formData: FormData): Promise<{ success: boolean; message: string }> => {
  try {
    const record = {
      energyType: { value: formData.energyType },
      propertyType: { value: formData.propertyType },
      propertyStatus: { value: formData.propertyStatus },
      postalCode: { value: formData.postalCode },
      prefecture: { value: formData.prefecture },
      address: { value: formData.address },
      usageStatus: { value: formData.usageStatus },
      name: { value: formData.name },
      email: { value: formData.email },
      phone: { value: formData.phone },
    };

    console.log('Submitting to Kintone:', {
      API_KEY,
      DOMAIN,
      APP_ID,
      record
    });


    return { success: true, message: '送信が完了しました！' };
  } catch (error) {
    console.error('Error submitting to Kintone:', error);
    return { success: false, message: 'エラーが発生しました。後でもう一度お試しください。' };
  }
};
