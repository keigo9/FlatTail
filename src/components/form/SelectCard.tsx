import { cn } from "@/lib/utils";
import { EnergyType } from "@/types";

type Type = EnergyType;

interface SelectCardProps {
  cardData: {
    icon: React.ReactNode;
    title: React.ReactNode;
    type: Type;
    isWhite?: boolean;
  }[];
  currentType: Type | null;
  handleEnergyTypeSelect: (type: Type) => void;
}

export const SelectCard = ({
  cardData,
  handleEnergyTypeSelect,
  currentType,
}: SelectCardProps) => {
  return (
    <div className="mt-6 flex flex-wrap gap-[16px]">
      {cardData.map((item, idx) =>
        item.isWhite ? (
          <div
            key={idx}
            className={cn(
              "p-4 cursor-pointer border-2 border-token-main-600 flex-1 rounded-lg",
              item.type === currentType
                ? "bg-token-main-200 text-token-main-800 border-token-main-800"
                : "hover:bg-token-main-100"
            )}
            onClick={() => handleEnergyTypeSelect(item.type)}
          >
            <div className="flex items-center justify-center gap-4">
              <div>{item.icon}</div>
              <div className="text-center">
                <p
                  className={cn(
                    "text-lg font-medium",
                    item.type === currentType
                      ? "text-token-main-800"
                      : "text-token-main-600"
                  )}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            key={idx}
            className={cn(
              "p-4 cursor-pointer w-[calc(50%-8px)] bg-token-main-600 text-white border-none shadow-none rounded-lg",
              item.type === currentType
                ? "bg-token-main-800"
                : "hover:bg-token-main-500"
            )}
            onClick={() => handleEnergyTypeSelect(item.type)}
          >
            <div className="flex flex-col items-center justify-center gap-4">
              <div>{item.icon}</div>
              <div className="text-center">
                <p className="text-[16px] sm:text-[18px] font-bold">
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};
