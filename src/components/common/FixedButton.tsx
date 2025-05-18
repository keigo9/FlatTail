import { ArrowLeftIcon } from "@/assets/ArrowLeftIcon";
import { ArrowRightIcon } from "@/assets/ArrowRightIcon";
import { GlassIcon } from "@/assets/GlassIcon";
import { ReactNode } from "react";

interface FixedButtonProps {
  onClick: () => void;
  onBackClick?: () => void;
  disabled?: boolean;
  showGlassIcon?: boolean;
  showArrowLeftIcon?: boolean;
  showArrowRightIcon?: boolean;
  children: ReactNode;
}

const FixedButton = ({
  onClick,
  onBackClick,
  disabled = false,
  showGlassIcon = false,
  showArrowLeftIcon = false,
  showArrowRightIcon = false,
  children,
}: FixedButtonProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 p-4 flex gap-2 items-center justify-center bg-white">
      {showArrowLeftIcon && <BackButton onClick={onBackClick} />}
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-full max-w-[352px] mx-auto h-[48px] rounded-full text-white font-bold flex flex-1 items-center justify-center
          ${
            disabled
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-gradation-100 hover:opacity-90"
          }`}
      >
        <span
          className={`flex items-center gap-2 px-4 w-full ${
            showArrowRightIcon ? "justify-between" : "justify-center"
          }`}
        >
          {showGlassIcon && <GlassIcon size={24} />}
          {showArrowRightIcon && <span />}
          {children}
          {showArrowRightIcon && <ArrowRightIcon size={17} />}
        </span>
      </button>
    </div>
  );
};

const BackButton = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="w-[40px] h-[40px] rounded-full border-2 border-token-main-600 flex items-center justify-center"
  >
    <ArrowLeftIcon size={17} className="text-token-main-600" />
  </button>
);

export default FixedButton;
