import { useState, useEffect } from "react";

export const ScrollDownButton = () => {
  const [canShow, setCanShow] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const checkCanShow = () => {
      const root = document.documentElement;
      const headerHeight =
        parseInt(
          getComputedStyle(root).getPropertyValue("--header-height-mobile")
        ) || 0;
      const main = document.querySelector("main");
      const mainHeight = main ? main.getBoundingClientRect().height : 0;
      const contentHeight = headerHeight + mainHeight;
      setCanShow(contentHeight > window.innerHeight);
    };

    checkCanShow();
    window.addEventListener("resize", checkCanShow);
    return () => window.removeEventListener("resize", checkCanShow);
  }, []);

  useEffect(() => {
    if (!canShow) {
      setShow(false);
      return;
    }
    const handleScroll = () => {
      setShow(window.scrollY < 10);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [canShow]);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
      }
      className="sm:hidden fixed text-[12px] px-[12px] py-[9px] left-1/2 bottom-[154px] -translate-x-1/2 z-50 bg-token-accent-200 text-white font-bold rounded-full flex items-center gap-1 transition-all"
    >
      下にスクロール
      <span className="text-[12px]">↓</span>
    </button>
  );
};
