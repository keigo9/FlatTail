import { useState } from "react";
import { FormData, FormStep } from "../../types";
import FormSuccess from "./FormSuccess";
import { submitToKintone } from "../../services/kintoneService";
import FixedButton from "../common/FixedButton";
import { ProgressBar } from "../common/ProgressBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const INITIAL_DATA: FormData = {
  energyType: null,
  feelAboutEnergyFee: null,
  electricityBill: null,
  propertyType: null,
  people: null,
  buildingOld: null,
  name: "",
  email: "",
  phone: "",
};

const FormContainer = ({
  setStartDiagnosis,
}: {
  setStartDiagnosis: (startDiagnosis: boolean) => void;
}) => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const goToNext = () => {
    if (currentStep === 5) {
      handleSubmit();
      return;
    }
    setCurrentStep((prev) => (prev + 1) as FormStep);
  };

  const goToPrev = () => {
    if (currentStep === 1) {
      setStartDiagnosis(false);
      return;
    }
    setCurrentStep((prev) => (prev - 1) as FormStep);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setError(null);

    try {
      const result = await submitToKintone(data);
      if (result.success) {
        setIsComplete(true);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error(err);
      setError("予期せぬエラーが発生しました。後でもう一度お試しください。");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isComplete) {
    return <FormSuccess />;
  }

  const steps = [
    <Step1
      key="step1"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step2
      key="step2"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step3
      key="step3"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step4
      key="step4"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step5
      key="step5"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
  ];

  return (
    <>
      {error && (
        <div className="p-3 bg-red-100 text-red-700 rounded-md">{error}</div>
      )}
      <div className="w-full max-w-2xl mx-auto pb-[80px]">
        <ProgressBar currentStep={currentStep} totalSteps={5} />
        <div className="mt-6 sm:mt-12 bg-white rounded-lg p-6">
          {steps[currentStep - 1]}
        </div>
      </div>
      <FixedButton
        onClick={goToNext}
        onBackClick={goToPrev}
        showArrowLeftIcon
        showArrowRightIcon
        isSubmitting={isSubmitting}
        disabled={isButtonDisabled}
      >
        次へ
      </FixedButton>
    </>
  );
};

export default FormContainer;
