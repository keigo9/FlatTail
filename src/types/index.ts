export interface FormData {
  energyType: EnergyType | null;

  propertyType: "detached_house" | "apartment" | "store" | null;

  propertyStatus: "current_residence" | "moving_location" | null;

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
  ELECTRIC_AND_CITY_GAS = "electric_and_city_gas",
  ELECTRIC_AND_PROPANE_GAS = "electric_and_propane_gas",
  ALL_ELECTRIC = "all_electric",
}
