import { PropertyStatus, StepProps } from "../../types";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { HomeIcon } from "@/assets/HomeIcon";
import { SelectCard } from "./SelectCard";

const Step3PropertyStatus = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  useEffect(() => {
    if (data.propertyStatus) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.propertyStatus, setIsButtonDisabled]);

  const handlePropertyStatusSelect = (status: PropertyStatus) => {
    updateFields({ propertyStatus: status });
  };

  const cardData = [
    {
      icon: <HomeIcon />,
      title: (
        <>
          現在の
          <br className="sm:hidden" />
          お住まい
        </>
      ),
      type: PropertyStatus.CURRENT_RESIDENCE,
    },
    {
      icon: <div className="w-[48px] h-[48px] bg-token-mono-100"></div>,
      title: "引越し先",
      type: PropertyStatus.MOVING_LOCATION,
    },
  ];

  return (
    <div className="w-full">
      <QuestionHeader question={<>どちらで電気を利用しますか？</>} />

      <SelectCard
        cardData={cardData}
        handleTypeSelect={handlePropertyStatusSelect}
        currentType={data.propertyStatus}
      />
    </div>
  );
};

export default Step3PropertyStatus;
