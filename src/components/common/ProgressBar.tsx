interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "使用種別",
  "物件種別",
  "物件状況",
  "使用場所",
  "使用状況",
  "連絡先",
];

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div>
      <PcProgressBar currentStep={currentStep} totalSteps={totalSteps} />
      <MobileProgressBar currentStep={currentStep} totalSteps={totalSteps} />
    </div>
  );
};

const PcProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full hidden sm:block">
      <div className="flex justify-center items-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div key={index} className="relative flex flex-col items-center">
            <div className="flex items-center">
              <div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  index + 1 === currentStep
                    ? "bg-gradation-200"
                    : "bg-token-main-600"
                }`}
              >
                <span className="text-[18px] font-bold text-white">
                  {index + 1}
                </span>
              </div>
              {index < totalSteps - 1 && (
                <div
                  className={`h-1.5 w-16 ${
                    index + 1 < currentStep
                      ? "bg-token-main-600"
                      : "bg-token-main-200"
                  }`}
                />
              )}
            </div>
            <div className="absolute top-10 -translate-x-1/2 left-5 whitespace-nowrap">
              <span className="text-[12px] font-bold text-token-mono-700">
                {stepLabels[index]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full block sm:hidden">
      <div className="flex items-center w-full">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div
            key={index}
            className={`relative flex items-center gap-0 ${
              index === totalSteps - 1 ? "" : "flex-1"
            }`}
          >
            <div
              className={`flex items-center justify-center rounded-full shrink-0 ${
                index + 1 === currentStep
                  ? "bg-gradation-200 w-8 h-8"
                  : "bg-token-main-600 w-4 h-4"
              }`}
            >
              {index + 1 === currentStep && (
                <span className="text-[14px] font-bold text-white">
                  {index + 1}
                </span>
              )}
            </div>
            {index < totalSteps - 1 && (
              <div className="relative flex-1 flex items-center min-w-[24px]">
                <div
                  className={`absolute top-1/2 -translate-y-1/2 left-0 h-1 w-full bg-token-main-200`}
                />
                <div
                  className={`absolute top-1/2 -translate-y-1/2 left-0 h-1 bg-token-main-600 ${
                    index + 1 < currentStep
                      ? "w-full"
                      : index + 1 === 1 && currentStep === 1
                      ? "w-[20%] rounded-r-full"
                      : "w-0"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
