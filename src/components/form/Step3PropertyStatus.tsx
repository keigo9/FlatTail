import { StepProps } from "../../types";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ProgressBar } from "../common/ProgressBar";
import { Home, MoveRight } from "lucide-react";

const Step3PropertyStatus = ({
  data,
  updateFields,
  onNext,
  onPrev,
}: StepProps) => {
  const handlePropertyStatusSelect = (
    status: "current_residence" | "moving_location"
  ) => {
    updateFields({ propertyStatus: status });
    onNext();
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ProgressBar currentStep={3} totalSteps={6} />

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          どちらで電気を利用しますか？
        </h2>
      </div>

      <div className="mt-8 space-y-4">
        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.propertyStatus === "current_residence"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handlePropertyStatusSelect("current_residence")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <Home className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">現在のお住まい</p>
            </div>
          </div>
        </Card>

        <Card
          className={`p-6 cursor-pointer border-2 hover:border-orange-500 ${
            data.propertyStatus === "moving_location"
              ? "border-orange-500 bg-orange-50"
              : "border-gray-200"
          }`}
          onClick={() => handlePropertyStatusSelect("moving_location")}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="bg-orange-500 p-4 rounded-lg">
              <MoveRight className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium">引越し先</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onPrev} className="rounded-full">
          戻る
        </Button>
      </div>
    </div>
  );
};

export default Step3PropertyStatus;
