import { useState, useEffect } from "react";

export const ScrollDownButton = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const checkShouldShow = () => {
      // CSSカスタムプロパティの値を取得
      const root = document.documentElement;
      const headerHeight =
        parseInt(
          getComputedStyle(root).getPropertyValue("--header-height-mobile")
        ) || 0;
      const footerHeight =
        parseInt(getComputedStyle(root).getPropertyValue("--footer-height")) ||
        0;
      const minH = window.innerHeight - headerHeight - footerHeight;
      // 100dvhはwindow.innerHeightと同等
      setShow(minH > window.innerHeight);
    };

    checkShouldShow();
    window.addEventListener("resize", checkShouldShow);
    return () => window.removeEventListener("resize", checkShouldShow);
  }, []);

  // スクロール位置による表示制御
  useEffect(() => {
    const handleScroll = () => {
      setShow((prev) => prev && window.scrollY < 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      className="sm:hidden fixed text-[12px] px-[12px] py-[9px] left-1/2 bottom-[154px] -translate-x-1/2 z-50 bg-token-accent-200 text-white font-bold rounded-full flex items-center gap-1 transition-all"
    >
      下にスクロール
      <span className="text-[12px]">↓</span>
    </button>
  );
};
