import { EnergyType, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { ClipIcon } from "@/assets/ClipIcon";
import { RightIcon } from "@/assets/RightIcon";
import { SelectCard } from "./SelectCard";
import { GusIcon } from "@/assets/GusIcon";
import { cn } from "@/lib/utils";

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

  const handleEnergyTypeSelect = (type: EnergyType) => {
    updateFields({ energyType: type });
  };

  const cardData = [
    {
      icon: (
        <div className="flex items-center justify-center">
          <RightIcon />
          <ClipIcon />
        </div>
      ),
      title: (
        <>
          電気 &amp;
          <br className="sm:hidden" /> 都市ガス
        </>
      ),
      type: EnergyType.ELECTRIC_AND_CITY_GAS,
    },
    {
      icon: (
        <div className="flex items-center justify-center">
          <RightIcon />
          <GusIcon />
        </div>
      ),
      title: (
        <>
          電気 &amp;
          <br className="sm:hidden" /> プロパンガス
        </>
      ),
      type: EnergyType.ELECTRIC_AND_PROPANE_GAS,
    },
    {
      icon: (
        <>
          <RightIcon
            className={cn(
              data.energyType === EnergyType.ALL_ELECTRIC
                ? "text-token-main-800"
                : "text-token-main-600"
            )}
          />
        </>
      ),
      title: "オール電化",
      type: EnergyType.ALL_ELECTRIC,
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

export default Step1EnergyType;
