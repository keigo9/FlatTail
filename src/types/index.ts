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
  electricityBill: string | null;
  usage: number | null;
  people: number | null;
  company: string | null;

  // step6
  name: string;
  email: string;
  phone: string;
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
