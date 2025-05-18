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

const INITIAL_DATA: FormData = {
  energyType: "electric_and_city_gas",
  propertyType: "detached_house",
  propertyStatus: "current_residence",
  postalCode: "",
  prefecture: "",
  address: "",
  usageStatus: "",
  name: "",
  email: "",
  phone: "",
};

const FormContainer = () => {
  const [data, setData] = useState<FormData>(INITIAL_DATA);
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => ({ ...prev, ...fields }));
  };

  const goToNext = () => {
    setCurrentStep((prev) => (prev < 6 ? ((prev + 1) as FormStep) : prev));
  };

  const goToPrev = () => {
    setCurrentStep((prev) => (prev > 1 ? ((prev - 1) as FormStep) : prev));
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
    <Step1EnergyType
      key="step1"
      data={data}
      updateFields={updateFields}
      onNext={goToNext}
      onPrev={goToPrev}
    />,
    <Step2PropertyType
      key="step2"
      data={data}
      updateFields={updateFields}
      onNext={goToNext}
      onPrev={goToPrev}
    />,
    <Step3PropertyStatus
      key="step3"
      data={data}
      updateFields={updateFields}
      onNext={goToNext}
      onPrev={goToPrev}
    />,
    <Step4Location
      key="step4"
      data={data}
      updateFields={updateFields}
      onNext={goToNext}
      onPrev={goToPrev}
    />,
    <Step5UsageStatus
      key="step5"
      data={data}
      updateFields={updateFields}
      onNext={goToNext}
      onPrev={goToPrev}
    />,
    <Step6ContactInfo
      key="step6"
      data={data}
      updateFields={updateFields}
      onNext={handleSubmit}
      onPrev={goToPrev}
      isSubmitting={isSubmitting}
      error={error}
    />,
  ];

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      {steps[currentStep - 1]}
    </div>
  );
};

export default FormContainer;
