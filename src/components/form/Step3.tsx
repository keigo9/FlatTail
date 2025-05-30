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
import { StepProps, ElectricityBillValue, ElectricityBillLabel } from "@/types";

const Step3 = ({ data, updateFields, setIsButtonDisabled }: StepProps) => {
  useEffect(() => {
    if (data.electricityBill) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.electricityBill, setIsButtonDisabled]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={
          <>
            毎月の電気代はいくらですか？
            <br />
            （だいだいでOK）
          </>
        }
      />

      <form className="mt-8 space-y-6 md:ml-[50px]">
        <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-6 sm:justify-center">
          <Label htmlFor="electricityBilling" className="sm:mb-0 sm:gap-[21px]">
            電気料金
          </Label>
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <div>
              <div className="flex items-center gap-2">
                <p className="text-[14px] font-bold">約</p>
                <div className="w-[196px]">
                  <Select
                    value={data.electricityBill ?? ""}
                    onValueChange={(value) =>
                      updateFields({
                        electricityBill: value as ElectricityBillValue,
                      })
                    }
                  >
                    <SelectTrigger className="text-[16px] px-5">
                      <SelectValue placeholder="選択してください" />
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
                <p className="text-[14px] font-bold">円</p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step3;
