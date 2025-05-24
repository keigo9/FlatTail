export interface FormData {
  energyType: EnergyType | null;

  propertyType: PropertyType | null;

  propertyStatus: PropertyStatus | null;

  postalCode: string;
  prefecture: string;
  address: string;

  usageStatus: string;

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
