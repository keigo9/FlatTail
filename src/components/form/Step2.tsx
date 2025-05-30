import { FeelAboutEnergyFee, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { SelectCard } from "./SelectCard";
import { HomeIcon } from "@/assets/HomeIcon";
import { BuildingIcon } from "@/assets/BuildingIcon";
import { StoreIcon } from "@/assets/StoreIcon";
import { cn } from "@/lib/utils";

const Step2 = ({ data, updateFields, setIsButtonDisabled }: StepProps) => {
  useEffect(() => {
    if (data.feelAboutEnergyFee) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.feelAboutEnergyFee, setIsButtonDisabled]);

  const handlePropertyTypeSelect = (type: FeelAboutEnergyFee) => {
    updateFields({ feelAboutEnergyFee: type });
  };

  const cardData = [
    {
      icon: <HomeIcon />,
      title: (
        <>
          すごく高く
          <br className="sm:hidden" />
          なったと感じる
        </>
      ),
      type: FeelAboutEnergyFee.VERY_HIGH,
    },
    {
      icon: <BuildingIcon />,
      title: (
        <>
          ちょっと
          <br className="sm:hidden" />
          気になる
        </>
      ),
      type: FeelAboutEnergyFee.A_BIT_CONCERNED,
    },
    {
      icon: (
        <StoreIcon
          className={cn(
            data.feelAboutEnergyFee === FeelAboutEnergyFee.NOT_CONCERNED
              ? "text-token-main-800"
              : "text-token-main-600"
          )}
        />
      ),
      title: "特に気にしていない",
      type: FeelAboutEnergyFee.NOT_CONCERNED,
      isWhite: true,
    },
  ];

  return (
    <div className="w-full">
      <QuestionHeader
        question={
          <>
            最近の光熱費についてどう
            <br className="sm:hidden" />
            感じていますか？
          </>
        }
      />

      <SelectCard
        cardData={cardData}
        handleTypeSelect={handlePropertyTypeSelect}
        currentType={data.feelAboutEnergyFee}
      />
    </div>
  );
};

export default Step2;
