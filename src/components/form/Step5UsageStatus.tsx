import { StepProps } from "../../types";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { ProgressBar } from "../custom-ui/ProgressBar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const Step5UsageStatus = ({
  data,
  updateFields,
  onNext,
  onPrev,
}: StepProps) => {
  const usageOptions = [
    { value: "low", label: "少ない (月に5,000円以下)" },
    { value: "medium", label: "普通 (月に5,000円〜10,000円)" },
    { value: "high", label: "多い (月に10,000円以上)" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (data.usageStatus) {
      onNext();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <ProgressBar currentStep={5} totalSteps={6} />

      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          現在の電気使用量を教えてください
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
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

        <div className="mt-8 flex justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onPrev}
            className="rounded-full"
          >
            戻る
          </Button>

          <Button
            type="submit"
            className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white rounded-full"
          >
            次へ
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Step5UsageStatus;
