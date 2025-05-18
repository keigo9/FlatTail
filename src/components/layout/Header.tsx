import { PhoneIcon } from "@/assets/PhoneIcon";
import { Button } from "../ui/button";

const Header = () => {
  const PhoneNumber = "052-211-9290";
  const handlePhoneClick = () => {
    window.location.href = `tel:${PhoneNumber}`;
  };

  return (
    <header className="w-full flex justify-between items-center py-2 px-4">
      <div className="logo">
        <img
          src="/logo.png"
          alt="FlatTail"
          className="object-contain w-[75px]"
        />
      </div>
      {/* PCの場合はテキスト表示 */}
      <div className="hidden md:flex flex-col items-center">
        <Button
          variant="ghost"
          onClick={handlePhoneClick}
          className="flex items-center gap-2 "
        >
          <PhoneIcon className="text-token-main-700" size={18} />
          <span className="text-token-main-700 text-2xl font-bold">
            {PhoneNumber}
          </span>
        </Button>
        <span className="text-mono-1000 text-sm font-bold">
          平日 00:00〜00:00 対応受付
        </span>
      </div>
      {/* モバイルの場合はボタン表示 */}
      <Button
        onClick={handlePhoneClick}
        className="md:hidden bg-gradation-100 text-white flex items-center gap-2 rounded-full px-6"
      >
        <PhoneIcon />
        <span>電話で相談</span>
      </Button>
    </header>
  );
};

export default Header;
