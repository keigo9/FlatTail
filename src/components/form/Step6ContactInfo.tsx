import { useEffect } from "react";
import { StepProps } from "../../types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const Step6ContactInfo = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  useEffect(() => {
    if (data.name && data.email && data.phone) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.name, data.email, data.phone, setIsButtonDisabled]);

  return (
    <div className="w-full">
      <div className="mt-8 text-center">
        <h2 className="text-2xl font-bold text-gray-800">
          お客様の情報を入力してください
        </h2>
        <p className="text-sm text-gray-500 mt-2">
          ※お客様の情報が一般に公開されることはありません
        </p>
      </div>

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            placeholder="山田 太郎"
            value={data.name}
            onChange={(e) => updateFields({ name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            type="email"
            placeholder="example@example.com"
            value={data.email}
            onChange={(e) => updateFields({ email: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">電話番号</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="090-1234-5678"
            value={data.phone}
            onChange={(e) => updateFields({ phone: e.target.value })}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step6ContactInfo;
