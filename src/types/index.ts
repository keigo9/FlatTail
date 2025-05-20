export interface FormData {
  energyType:
    | "electric_and_city_gas"
    | "electric_and_propane_gas"
    | "all_electric";

  propertyType: "detached_house" | "apartment" | "store";

  propertyStatus: "current_residence" | "moving_location";

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
  onNext: () => void;
}
