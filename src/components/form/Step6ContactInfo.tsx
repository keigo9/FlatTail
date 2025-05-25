import { useEffect, useState } from "react";
import { StepProps } from "../../types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { QuestionHeader } from "./QuestionHeader";
import { toHalfWidth } from "@/lib/stringUtil";
import { cn } from "@/lib/utils";

const Step6ContactInfo = ({
  data,
  updateFields,
  setIsButtonDisabled,
}: StepProps) => {
  const [emailError, setEmailError] = useState("");
  const [emailAgain, setEmailAgain] = useState("");
  const [emailAgainError, setEmailAgainError] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

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
      emailAgain === data.email &&
      isTermsChecked
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
    isTermsChecked,
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

        <div className="flex items-center mt-10">
          <label className="flex items-center cursor-pointer relative gap-2">
            <div
              className={cn(
                "w-[15px] h-[15px] border-2 rounded-sm relative",
                isTermsChecked
                  ? "bg-gradation-100 border-none"
                  : "border-token-mono-500 hover:border-token-main-500"
              )}
            >
              <input
                type="checkbox"
                className="peer appearance-none"
                onChange={(e) => {
                  setIsTermsChecked(e.target.checked);
                }}
              />
              <svg
                className="absolute left-[50%] top-[calc(50%+1px)] translate-x-[-50%] translate-y-[-50%] w-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <p className="text-[12px]">
              <a
                href="/FlatTail/term-of-use"
                className="underline text-token-main-700"
                target="_blank"
              >
                ご利用規約
              </a>
              <span>、</span>
              <a
                href="/FlatTail/privacy-policy"
                className="underline text-token-main-700"
                target="_blank"
              >
                プライバシーポリシー
              </a>
              <span>に同意します。</span>
            </p>
          </label>
        </div>
      </form>
    </div>
  );
};

export default Step6ContactInfo;
