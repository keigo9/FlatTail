import { ReactNode } from "react";

interface QuestionHeaderProps {
  question: ReactNode;
  description?: string;
}

export const QuestionHeader = ({
  question,
  description,
}: QuestionHeaderProps) => {
  return (
    <div className="text-center">
      <div className="flex justify-center gap-4">
        <span className="text-[32px] font-bold line-height-[100%] bg-gradation-100 bg-clip-text text-transparent mt-[-12px]">
          Q
        </span>
        <h2 className="text-[16px] sm:text-[20px] font-bold text-token-mono-700 text-left">
          {question}
        </h2>
      </div>
      {description && (
        <span className="text-[12px] sm:text-[14px] text-gray-500">
          {description}
        </span>
      )}
    </div>
  );
};
