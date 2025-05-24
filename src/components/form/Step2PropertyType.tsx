import { PropertyType, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { SelectCard } from "./SelectCard";
import { HomeIcon } from "@/assets/HomeIcon";
import { BuildingIcon } from "@/assets/BuildingIcon";
import { StoreIcon } from "@/assets/StoreIcon";
import { cn } from "@/lib/utils";

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

  const handlePropertyTypeSelect = (type: PropertyType) => {
    updateFields({ propertyType: type });
  };

  const cardData = [
    {
      icon: <HomeIcon />,
      title: "戸建て",
      type: PropertyType.DETACHED_HOUSE,
    },
    {
      icon: <BuildingIcon />,
      title: (
        <>
          マンション・
          <br className="sm:hidden" />
          アパート
        </>
      ),
      type: PropertyType.APARTMENT,
    },
    {
      icon: (
        <StoreIcon
          className={cn(
            data.propertyType === PropertyType.STORE
              ? "text-token-main-800"
              : "text-token-main-600"
          )}
        />
      ),
      title: "店舗",
      type: PropertyType.STORE,
      isWhite: true,
    },
  ];

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

      <SelectCard
        cardData={cardData}
        handleTypeSelect={handlePropertyTypeSelect}
        currentType={data.propertyType}
      />
    </div>
  );
};

export default Step2PropertyType;
