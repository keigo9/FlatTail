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
  month: number | null;
  electricityBill: ElectricityBill | null;
  usage: number | null;
  people: number | null;
  company: string | null;

  // step6
  name: string;
  nameKana: string;
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
  ELECTRIC_AND_CITY_GAS = "electric_and_city_gas", // 電気 & 都市ガス
  ELECTRIC_AND_PROPANE_GAS = "electric_and_propane_gas", // 電気 & プロパンガス
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

export enum ElectricityBill {
  LESS_THAN_10000 = "~10,000円",
  BETWEEN_10000_AND_15000 = "10,000円~", // 10,000円~15,000円
  BETWEEN_15000_AND_20000 = "15,000円~", // 15,000円~20,000円
  BETWEEN_20000_AND_25000 = "20,000円~", // 20,000円~25,000円
  BETWEEN_25000_AND_30000 = "25,000円~", // 25,000円~30,000円
  BETWEEN_30000_AND_35000 = "30,000円~", // 30,000円~35,000円
  BETWEEN_35000_AND_40000 = "35,000円~", // 35,000円~40,000円
  OVER_40000 = "40,000円~",
}
