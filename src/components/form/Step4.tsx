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
import {
  StepProps,
  PropertyType,
  PropertyTypeLabel,
  BuildingOld,
  BuildingOldLabel,
} from "@/types";

const Step4 = ({ data, updateFields, setIsButtonDisabled }: StepProps) => {
  useEffect(() => {
    if (data.propertyType && data.buildingOld) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.propertyType, data.buildingOld, setIsButtonDisabled]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>お住まいの状況を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6 md:ml-[100px]">
        <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-6">
          <Label htmlFor="electricityBilling" className="sm:mb-0 sm:gap-[21px]">
            今のお住まい
          </Label>
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <div className="w-full sm:w-[248px]">
              <Select
                value={data.propertyType ?? ""}
                onValueChange={(value) =>
                  updateFields({
                    propertyType: value as PropertyType,
                  })
                }
              >
                <SelectTrigger className="text-[16px]">
                  <SelectValue placeholder="選択してください" />
                </SelectTrigger>
                <SelectContent className="!text-[16px]">
                  {Object.values(PropertyType).map((value) => (
                    <SelectItem key={value} value={value}>
                      {PropertyTypeLabel[value]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between sm:justify-start sm:gap-6">
            <div className="space-y-2 sm:space-y-0 sm:flex sm:gap-6">
              <Label
                htmlFor="electricityBilling"
                className="mb-[15px] sm:mb-0 sm:gap-[21px]"
              >
                築年数
              </Label>
              <div className="flex items-center justify-between sm:justify-start sm:gap-6">
                <div className="w-[130px]">
                  <Select
                    value={data.buildingOld ?? ""}
                    onValueChange={(value) =>
                      updateFields({
                        buildingOld: value as BuildingOld,
                      })
                    }
                  >
                    <SelectTrigger className="text-[16px]">
                      <SelectValue placeholder="--" />
                    </SelectTrigger>
                    <SelectContent className="!text-[16px]">
                      {Object.values(BuildingOld).map((value) => (
                        <SelectItem key={value} value={value}>
                          {BuildingOldLabel[value]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="sm:flex sm:gap-6">
              <Label htmlFor="people" isOptional className="sm:mb-0 sm:gap-4">
                世帯人数
              </Label>
              <div className="flex items-center gap-2">
                <div className="w-[90px]">
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
      </form>
    </div>
  );
};

export default Step4;
