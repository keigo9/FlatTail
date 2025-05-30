import { EnergyType, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
// import { ClipIcon } from "@/assets/ClipIcon";
import { RightIcon } from "@/assets/RightIcon";
import { SelectCard } from "./SelectCard";
import { GusIcon } from "@/assets/GusIcon";
import { QuestionIcon } from "@/assets/QuestionIcon";
import { cn } from "@/lib/utils";

const Step1 = ({ data, updateFields, setIsButtonDisabled }: StepProps) => {
  useEffect(() => {
    if (data.energyType) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.energyType, setIsButtonDisabled]);

  const handleEnergyTypeSelect = (type: EnergyType) => {
    updateFields({ energyType: type });
  };

  const cardData = [
    {
      icon: (
        <div className="flex items-center gap-2">
          <RightIcon />
          <GusIcon />
        </div>
      ),
      title: "電気＆ガス",
      type: EnergyType.GAS,
    },
    {
      icon: (
        <>
          <RightIcon />
        </>
      ),
      title: "オール電化",
      type: EnergyType.ALL_ELECTRIC,
    },
    {
      icon: (
        <>
          <QuestionIcon
            className={cn(
              data.energyType === EnergyType.UNKNOWN
                ? "text-token-main-800"
                : "text-token-main-600"
            )}
          />
        </>
      ),
      title: "わからない",
      type: EnergyType.UNKNOWN,
      isWhite: true,
    },
  ];

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

      <SelectCard
        cardData={cardData}
        handleTypeSelect={handleEnergyTypeSelect}
        currentType={data.energyType}
      />
    </div>
  );
};

export default Step1;
