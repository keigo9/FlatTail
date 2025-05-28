import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect } from "react";
import { QuestionHeader } from "./QuestionHeader";
import { Input } from "../ui/input";
import { StepProps, ElectricityBillValue, ElectricityBillLabel } from "@/types";

const Step5UsageStatus = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  useEffect(() => {
    setIsButtonDisabled(false);
  }, [setIsButtonDisabled]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>電気の使用状況を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6 md:ml-[50px]">
        <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-6">
          <Label
            htmlFor="electricityBilling"
            isOptional
            className="sm:mb-0 sm:gap-[21px]"
          >
            電気料金
          </Label>
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-bold">約</p>
                <div className="w-[131px]">
                  <Select
                    value={data.electricityBill ?? ""}
                    onValueChange={(value) =>
                      updateFields({
                        electricityBill: value as ElectricityBillValue,
                      })
                    }
                  >
                    <SelectTrigger className="text-[16px]">
                      <SelectValue placeholder="--" />
                    </SelectTrigger>
                    <SelectContent className="!text-[16px]">
                      {Object.values(ElectricityBillValue).map((value) => (
                        <SelectItem key={value} value={value}>
                          {ElectricityBillLabel[value]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <div className="sm:flex sm:gap-6">
              <Label
                htmlFor="usage"
                isOptional
                className="sm:mb-0 sm:gap-[35px]"
              >
                使用量
              </Label>
              <div className="flex items-center gap-2">
                <div className="w-[78px]">
                  <Input
                    id="usage"
                    placeholder="---"
                    value={data.usage ? String(data.usage) : ""}
                    onChange={(e) =>
                      updateFields({ usage: Number(e.target.value) })
                    }
                    required
                    type="number"
                  />
                </div>
                <p className="text-[14px] font-bold">kwh</p>
              </div>
            </div>
            <div>
              <p className="text-[12px] font-medium text-token-mono-500 mt-[32px] sm:mt-0">
                または
              </p>
            </div>
            <div className="sm:flex sm:gap-6">
              <Label htmlFor="people" isOptional className="sm:mb-0 sm:gap-4">
                世帯人数
              </Label>
              <div className="flex items-center gap-2">
                <div className="w-[78px]">
                  <Input
                    id="people"
                    placeholder="---"
                    value={data.people ? String(data.people) : ""}
                    onChange={(e) =>
                      updateFields({ people: Number(e.target.value) })
                    }
                    required
                    type="number"
                  />
                </div>
                <p className="text-[14px] font-bold">人</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-6">
          <Label htmlFor="company" isOptional className="sm:mb-0 sm:gap-[8px]">
            電力会社名
          </Label>
          <Input
            id="company"
            placeholder="(例) 株式会社フラットTAIL"
            value={data.company ?? ""}
            onChange={(e) => updateFields({ company: e.target.value })}
            className="sm:w-[248px]"
          />
        </div>
      </form>
    </div>
  );
};

export default Step5UsageStatus;
