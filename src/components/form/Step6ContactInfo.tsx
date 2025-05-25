import { useEffect, useState } from "react";
import { StepProps } from "../../types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { QuestionHeader } from "./QuestionHeader";
import { toHalfWidth } from "@/lib/stringUtil";

const Step6ContactInfo = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  const [emailError, setEmailError] = useState("");
  const [emailAgain, setEmailAgain] = useState("");
  const [emailAgainError, setEmailAgainError] = useState("");

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  useEffect(() => {
    if (
      data.name &&
      data.nameKana &&
      data.phone &&
      data.email &&
      validateEmail(data.email) &&
      emailAgain === data.email
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [
    data.name,
    data.nameKana,
    data.phone,
    data.email,
    emailAgain,
    setIsButtonDisabled,
  ]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>ご連絡先を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            placeholder="(例) 田中太郎"
            value={data.name}
            onChange={(e) => updateFields({ name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="nameKana">ふりがな</Label>
          <Input
            id="nameKana"
            placeholder="(例) たなかたろう"
            value={data.nameKana}
            onChange={(e) => updateFields({ nameKana: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">電話番号</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(例) 0801234567"
            value={data.phone}
            onChange={(e) => {
              const formattedPhone = toHalfWidth(e.target.value);
              updateFields({ phone: formattedPhone });
            }}
            description="半角数字、ハイフンなしでご入力ください"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">メールアドレス</Label>
          <Input
            id="email"
            type="email"
            placeholder="(例) info@flat-tail.com.jp"
            value={data.email}
            onChange={(e) => {
              const formattedEmail = toHalfWidth(e.target.value);
              updateFields({ email: formattedEmail });
            }}
            required
            onBlur={() => {
              if (data.email === "") {
                setEmailError("");
                return;
              }
              if (!validateEmail(data.email)) {
                setEmailError("有効なメールアドレスを入力してください");
              } else {
                setEmailError("");
              }
            }}
            description="半角英数字でご入力ください"
            error={emailError}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="emailAgain">メールアドレス再入力</Label>
          <Input
            id="emailAgain"
            type="email"
            placeholder="(例) info@flat-tail.com.jp"
            value={emailAgain}
            onChange={(e) => {
              const formattedEmail = toHalfWidth(e.target.value);
              setEmailAgain(formattedEmail);
            }}
            onBlur={() => {
              if (emailAgain === "") {
                setEmailAgainError("");
                return;
              }
              if (emailAgain !== data.email) {
                setEmailAgainError("メールアドレスが一致しません");
              } else {
                setEmailAgainError("");
              }
            }}
            required
            error={emailAgainError}
          />
        </div>
      </form>
    </div>
  );
};

export default Step6ContactInfo;
