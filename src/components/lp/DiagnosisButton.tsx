export const DiagnosisButton = () => {
  return (
    <div className="animate-floating-y fixed px-[12px] py-[8px] left-1/2 bottom-[95px] -translate-x-1/2 z-[40] bg-token-accent-200 text-white rounded-full flex items-end transition-all shadow-lg sm:px-[37.5px] whitespace-nowrap">
      <span className="text-[14px] font-medium tracking-[0.28px]">たった</span>
      <span className="text-[18px] font-bold tracking-[0.36px] leading-[25px]">
        1分
      </span>
      <span className="text-[12px] font-medium tracking-[0.24px]">、</span>
      <span className="text-[18px] font-bold tracking-[0.36px] leading-[25px]">
        簡単入力
      </span>
      <span className="text-[14px] font-medium tracking-[0.28px]">で診断</span>
      <span className="absolute bottom-[-7px] left-[50%] translate-x-[-50% block w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-token-accent-200 mx-auto shadow-lg"></span>
    </div>
  );
};
