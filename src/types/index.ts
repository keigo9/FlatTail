export interface FormData {
  // step1
  energyType: EnergyType | null;

  // step2
  propertyType: PropertyType | null;

  // step3
  propertyStatus: PropertyStatus | null;

  // step4
  postalCode: string;
  prefecture: string;
  address: string;

  // step5
  electricityBill: ElectricityBillValue | null;
  usage: number | null;
  people: number | null;
  company: string | null;

  // step6
  name: string;
  phone: string;
  email: string;
}

export type FormStep = 1 | 2 | 3 | 4 | 5 | 6;

export interface StepProps {
  data: FormData;
  updateFields: (fields: Partial<FormData>) => void;
  setIsButtonDisabled: (isDisabled: boolean) => void;
}

export enum EnergyType {
  GAS = "gas", // ガス
  ALL_ELECTRIC = "all_electric", // オール電化
}

export enum PropertyType {
  DETACHED_HOUSE = "detached_house", // 戸建て
  APARTMENT = "apartment", // マンション・アパート
  STORE = "store", // 店舗
}

export enum PropertyStatus {
  CURRENT_RESIDENCE = "current_residence", // 現在のお住まい
  MOVING_LOCATION = "moving_location", // 引越し先
}

export enum ElectricityBillValue {
  LESS_THAN_10000 = "less_than_10000",
  BETWEEN_10000_AND_15000 = "between_10000_and_15000",
  BETWEEN_15000_AND_20000 = "between_15000_and_20000",
  BETWEEN_20000_AND_25000 = "between_20000_and_25000",
  BETWEEN_25000_AND_30000 = "between_25000_and_30000",
  BETWEEN_30000_AND_35000 = "between_30000_and_35000",
  BETWEEN_35000_AND_40000 = "between_35000_and_40000",
  OVER_40000 = "over_40000",
}

export const ElectricityBillLabel: Record<ElectricityBillValue, string> = {
  [ElectricityBillValue.LESS_THAN_10000]: "~10,000円",
  [ElectricityBillValue.BETWEEN_10000_AND_15000]: "10,000円~",
  [ElectricityBillValue.BETWEEN_15000_AND_20000]: "15,000円~",
  [ElectricityBillValue.BETWEEN_20000_AND_25000]: "20,000円~",
  [ElectricityBillValue.BETWEEN_25000_AND_30000]: "25,000円~",
  [ElectricityBillValue.BETWEEN_30000_AND_35000]: "30,000円~",
  [ElectricityBillValue.BETWEEN_35000_AND_40000]: "35,000円~",
  [ElectricityBillValue.OVER_40000]: "40,000円~",
};
