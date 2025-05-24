import { StepProps } from "../../types";
import { Card } from "../ui/card";
import { Home, Building2, Store } from "lucide-react";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";

const Step2PropertyType = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  useEffect(() => {
    if (data.propertyType) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.propertyType, setIsButtonDisabled]);

  const handlePropertyTypeSelect = (
    type: "detached_house" | "apartment" | "store"
  ) => {
    updateFields({ propertyType: type });
  };

  return (
    <div className="w-full">
      <QuestionHeader
        question={
          <>
            電気の料金比較をしたい物件は
            <br className="sm:hidden" />
            どちらですか？
          </>
        }
      />

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
