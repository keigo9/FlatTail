import { useEffect, useState } from "react";
import { StepProps } from "../../types";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { QuestionHeader } from "./QuestionHeader";
import { toHalfWidth } from "@/lib/stringUtil";
import { cn } from "@/lib/utils";
import { ScrollDownButton } from "../common/ScrollDownButton";

const Step5 = ({ data, updateFields, setIsButtonDisabled }: StepProps) => {
  const [emailError, setEmailError] = useState("");
  const [isTermsChecked, setIsTermsChecked] = useState(false);

  function validateEmail(email: string) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  useEffect(() => {
    if (
      data.name &&
      data.phone &&
      data.email &&
      validateEmail(data.email) &&
      isTermsChecked
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [data.name, data.phone, data.email, isTermsChecked, setIsButtonDisabled]);

  return (
    <div className="w-full">
      <QuestionHeader
        question={<>ご連絡先を教えてください</>}
        description="※お客様の情報が一般に公開されることはありません"
      />

      <form className="mt-8 space-y-6 sm:flex sm:flex-wrap sm:flex-start sm:gap-4 sm:space-y-0">
        <div className="space-y-2 sm:w-[calc(50%-0.5rem)]">
          <Label htmlFor="name">お名前</Label>
          <Input
            id="name"
            placeholder="(例) 田中太郎"
            value={data.name}
            onChange={(e) => updateFields({ name: e.target.value })}
            required
          />
        </div>

        <div className="space-y-2 sm:w-[calc(50%-0.5rem)]">
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

        <div className="space-y-2 sm:w-[calc(50%-0.5rem)]">
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

        <div className="flex items-center sm:w-full sm:justify-center">
          <label className="flex items-center cursor-pointer relative gap-4 mt-4 sm:mt-8">
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

      <ScrollDownButton />
    </div>
  );
};

export default Step5;
