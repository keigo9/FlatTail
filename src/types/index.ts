export interface FormData {
  // step1
  energyType: EnergyType | null;

  // step2
  feelAboutEnergyFee: FeelAboutEnergyFee | null;

  // step3
  electricityBill: ElectricityBillValue | null;

  // step4
  propertyType: PropertyType | null;
  buildingOld: BuildingOld | null;
  people: number | null;

  // step5
  name: string;
  phone: string;
  email: string;
}

export type FormStep = 1 | 2 | 3 | 4 | 5;

export interface StepProps {
  data: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  setIsButtonDisabled: (isDisabled: boolean) => void;
}

export enum EnergyType {
  GAS = "gas", // ガス
  ALL_ELECTRIC = "all_electric", // オール電化
  UNKNOWN = "unknown", // わからない
}

export enum FeelAboutEnergyFee {
  VERY_HIGH = "very_high", // すごく高くなったと感じる
  A_BIT_CONCERNED = "a_bit_concerned", // ちょっと気になる
  NOT_CONCERNED = "not_concerned", // 特に気にしていない
}

export enum ElectricityBillValue {
  LESS_THAN_10000 = "less_than_10000",
  BETWEEN_10000_AND_15000 = "between_10000_and_15000",
  BETWEEN_15000_AND_20000 = "between_15000_and_20000",
  OVER_20000 = "over_20000",
  UNKNOWN = "unknown",
}

export const ElectricityBillLabel: Record<ElectricityBillValue, string> = {
  [ElectricityBillValue.LESS_THAN_10000]: " 〜10,000",
  [ElectricityBillValue.BETWEEN_10000_AND_15000]: "10,000〜15,000",
  [ElectricityBillValue.BETWEEN_15000_AND_20000]: "15,000〜20,000",
  [ElectricityBillValue.OVER_20000]: "20,000〜",
  [ElectricityBillValue.UNKNOWN]: "わからない",
};

export enum PropertyType {
  DETACHED_HOUSE = "detached_house", // 持ち家（戸建て）
  BUYING_PLANNED = "buying_planned", // 購入予定(建築中を含む)
  RENTAL = "rental", // 賃貸
}

export const PropertyTypeLabel: Record<PropertyType, string> = {
  [PropertyType.DETACHED_HOUSE]: "持ち家（戸建て）",
  [PropertyType.BUYING_PLANNED]: "購入予定(建築中を含む)",
  [PropertyType.RENTAL]: "賃貸",
};

export enum BuildingOld {
  LESS_THAN_5 = "less_than_5", // 5年未満
  BETWEEN_5_AND_10 = "between_5_and_10", // 5~10年
  BETWEEN_10_AND_15 = "between_10_and_15", // 10~15年
  BETWEEN_15_AND_20 = "between_15_and_20", // 15~20年
  OVER_20 = "over_20", // 20年以上
  UNKNOWN = "unknown", // わからない
}

export const BuildingOldLabel: Record<BuildingOld, string> = {
  [BuildingOld.LESS_THAN_5]: "5年未満",
  [BuildingOld.BETWEEN_5_AND_10]: "5〜10年",
  [BuildingOld.BETWEEN_10_AND_15]: "10〜15年",
  [BuildingOld.BETWEEN_15_AND_20]: "15〜20年",
  [BuildingOld.OVER_20]: "20年以上",
  [BuildingOld.UNKNOWN]: "わからない",
};
