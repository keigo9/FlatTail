import { StepProps } from "../../types";
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

const Step5UsageStatus = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  const usageOptions = [
    { value: "low", label: "少ない (月に5,000円以下)" },
    { value: "medium", label: "普通 (月に5,000円〜10,000円)" },
    { value: "high", label: "多い (月に10,000円以上)" },
  ];

  useEffect(() => {
    if (data.usageStatus) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.usageStatus, setIsButtonDisabled]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>電気の使用状況を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="usageStatus">電気使用量</Label>
          <Select
            value={data.usageStatus}
            onValueChange={(value) => updateFields({ usageStatus: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              {usageOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  );
};

export default Step5UsageStatus;
