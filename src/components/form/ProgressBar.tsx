interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = [
  "使用種別",
  "物件種別",
  "物件状況",
  "場所",
  "使用状況",
  "連絡先"
];

export const ProgressBar = ({ currentStep, totalSteps }: ProgressBarProps) => {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center"
          >
            <div 
              className={`flex items-center justify-center w-10 h-10 rounded-full ${
                index + 1 === currentStep 
                  ? 'bg-orange-500 text-white' 
                  : index + 1 < currentStep 
                    ? 'bg-orange-300 text-white' 
                    : 'bg-gray-200 text-gray-500'
              }`}
            >
              <span className="text-sm font-medium">{index + 1}</span>
            </div>
            {index < totalSteps - 1 && (
              <div className={`h-1 w-16 ${
                index + 1 < currentStep ? 'bg-orange-300' : 'bg-gray-200'
              }`} />
            )}
            <span className="text-xs mt-1">{stepLabels[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
