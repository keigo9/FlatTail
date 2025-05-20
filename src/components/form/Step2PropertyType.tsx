import { StepProps } from "../../types";
import { Card } from "../ui/card";
import { ProgressBar } from "../common/ProgressBar";
import { Home, Building2, Store } from "lucide-react";

const Step2PropertyType = ({ data, updateFields }: StepProps) => {
  const handlePropertyTypeSelect = (
    type: "detached_house" | "apartment" | "store"
  ) => {
    updateFields({ propertyType: type });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ProgressBar currentStep={2} totalSteps={6} />

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          電気の料金比較をしたい物件は
          <br />
          どちらですか？
        </h2>
      </div>

      <div className="mt-8 space-y-4">
        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.propertyType === "detached_house"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handlePropertyTypeSelect("detached_house")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">戸建て</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.propertyType === "apartment"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handlePropertyTypeSelect("apartment")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <Building2 className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">マンション・アパート</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.propertyType === "store"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handlePropertyTypeSelect("store")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <Store className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">店舗</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Step2PropertyType;
