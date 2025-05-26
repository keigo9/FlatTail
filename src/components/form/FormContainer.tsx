import { useState } from "react";
import { FormData, FormStep } from "../../types";
import Step1EnergyType from "./Step1EnergyType";
import Step2PropertyType from "./Step2PropertyType";
import Step3PropertyStatus from "./Step3PropertyStatus";
import Step4Location from "./Step4Location";
import Step5UsageStatus from "./Step5UsageStatus";
import Step6ContactInfo from "./Step6ContactInfo";
import FormSuccess from "./FormSuccess";
import { submitToKintone } from "../../services/kintoneService";
import FixedButton from "../common/FixedButton";
import { ProgressBar } from "../common/ProgressBar";

const INITIAL_DATA: FormData = {
  energyType: null,
  propertyType: null,
  propertyStatus: null,
  postalCode: "",
  prefecture: "",
  address: "",
  month: null,
  electricityBill: null,
  usage: null,
  people: null,
  company: null,
  name: "",
  nameKana: "",
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
  // const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const goToNext = () => {
    if (currentStep === 6) {
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

  return <FormSuccess />;

  const steps = [
    <Step1EnergyType
      key="step1"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step2PropertyType
      key="step2"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step3PropertyStatus
      key="step3"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step4Location
      key="step4"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step5UsageStatus
      key="step5"
      data={data}
      updateFields={updateFields}
      setIsButtonDisabled={setIsButtonDisabled}
    />,
    <Step6ContactInfo
      key="step6"
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
        <ProgressBar currentStep={currentStep} totalSteps={6} />
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
