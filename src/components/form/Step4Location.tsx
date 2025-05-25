import { useEffect, useState } from "react";
import { StepProps } from "../../types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { QuestionHeader } from "./QuestionHeader";
import { getAddress } from "jposta";
import { toHalfWidth } from "@/lib/stringUtil";

const Step4Location = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  const prefectures = [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県",
  ];

  const [postalCodeError, setPostalCodeError] = useState<string | null>(null);

  useEffect(() => {
    if (
      data.postalCode &&
      data.prefecture &&
      data.address &&
      postalCodeError === null
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    data.postalCode,
    data.prefecture,
    data.address,
    setIsButtonDisabled,
    postalCodeError,
  ]);

  // 郵便番号が入力されたとき
  const handlePostalCodeChange = async (postalCode: string) => {
    // 全角を半角に変換
    const halfWidthPostalCode = toHalfWidth(postalCode);

    updateFields({ postalCode: halfWidthPostalCode });
    if (halfWidthPostalCode === "" || halfWidthPostalCode.length < 7) {
      setPostalCodeError("");
      return;
    }

    const address = await getAddress(halfWidthPostalCode);
    if (!address) {
      setPostalCodeError("郵便番号が正しくありません");
      return;
    }
    setPostalCodeError(null);
    const { pref, city, area } = address;
    updateFields({ prefecture: pref, address: city + area });
  };

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>電気の利用先住所を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="postalCode">郵便番号</Label>
          <Input
            id="postalCode"
            placeholder="(例) 1234567"
            value={data.postalCode}
            onChange={(e) => handlePostalCodeChange(e.target.value)}
            required
            error={postalCodeError ?? undefined}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="prefecture">都道府県</Label>
          <Select
            value={data.prefecture}
            onValueChange={(value) => updateFields({ prefecture: value })}
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              {prefectures.map((prefecture) => (
                <SelectItem key={prefecture} value={prefecture}>
                  {prefecture}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="address">住所</Label>
          <Input
            id="address"
            placeholder="(例) 名古屋市中区"
            value={data.address}
            onChange={(e) => updateFields({ address: e.target.value })}
            required
          />
        </div>
      </form>
    </div>
  );
};

export default Step4Location;
