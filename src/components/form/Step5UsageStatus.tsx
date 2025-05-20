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
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          現在の電気使用量を教えてください
        </h2>
      </div>

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
