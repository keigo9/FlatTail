export interface FormData {
  energyType:
    | "electric_and_city_gas"
    | "electric_and_propane_gas"
    | "all_electric"
    | null;

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
