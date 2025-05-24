import { StepProps } from "../../types";
import { Card } from "../ui/card";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";

const Step1EnergyType = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  useEffect(() => {
    if (data.energyType) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.energyType, setIsButtonDisabled]);

  const handleEnergyTypeSelect = (
    type: "electric_and_city_gas" | "electric_and_propane_gas" | "all_electric"
  ) => {
    updateFields({ energyType: type });
  };

  return (
    <div className="w-full">
      <QuestionHeader
        question={
          <>
            利用しているエネルギーは
            <br className="sm:hidden" />
            どちらですか？
          </>
        }
      />

      <div className="mt-8 space-y-4">
        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.energyType === "electric_and_city_gas"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handleEnergyTypeSelect("electric_and_city_gas")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">電気 &amp; 都市ガス</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.energyType === "electric_and_propane_gas"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handleEnergyTypeSelect("electric_and_propane_gas")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">電気 &amp; プロパンガス</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.energyType === "all_electric"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handleEnergyTypeSelect("all_electric")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">オール電化</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Step1EnergyType;
