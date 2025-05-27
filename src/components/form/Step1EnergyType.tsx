import { EnergyType, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
// import { ClipIcon } from "@/assets/ClipIcon";
import { RightIcon } from "@/assets/RightIcon";
import { SelectCard } from "./SelectCard";
import { GusIcon } from "@/assets/GusIcon";

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
        <>
          <GusIcon />
        </>
      ),
      title: "ガス",
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
