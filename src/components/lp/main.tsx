import FixedButton from "../common/FixedButton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Main({
  setStartDiagnosis,
}: {
  setStartDiagnosis: (startDiagnosis: boolean) => void;
}) {
  return (
    <>
      <section className="w-full aspect-[393/281] sm:aspect-[1280/315]">
        <img
          src={`${import.meta.env.BASE_URL}LP/FV_PC.png`}
          alt="LP"
          className="w-full h-full object-cover hidden sm:block"
        />
        <img
          src={`${import.meta.env.BASE_URL}LP/FV_SP.png`}
          alt="LP"
          className="w-full h-full object-cover sm:hidden"
        />
      </section>
      <section className="w-full pt-6 pb-8 bg-lp-slider-gradation">
        <div className="flex justify-center items-center">
          <span className="bg-token-mono-100 w-[16px] h-[3px] rounded-sm mr-2 rotate-[45deg] mb-2" />
          <h2 className="text-center text-token-mono-100 font-bold text-[18px] mb-4">
            多くの料金削減実績があります
          </h2>
          <span className="bg-token-mono-100 w-[16px] h-[3px] rounded-sm mr-2 rotate-[-45deg] mb-2" />
        </div>
        <div className="w-full max-w-full overflow-hidden">
          <Carousel
            opts={{
              // loop: true,
              containScroll: "trimSnaps",
              align: "start",
              startIndex: 1, // 2番目のスライド（index: 1）から開始
            }}
            plugins={[Autoplay({ delay: 3000 })]}
          >
            <CarouselContent className="justify-center ml-[10px] mr-[25px]">
              {[
                {
                  title: "愛知県名古屋市で",
                  value: "20,000円",
                  desc: "月間",
                  sub: "削減のご提案",
                },
                {
                  title: "愛知県豊田市で",
                  value: "2,400円",
                  desc: "ひと月",
                  sub: "まで削減！",
                },
                {
                  title: "愛知県安城市で",
                  value: "16,000円",
                  desc: "月間",
                  sub: "削減のご提案",
                },
                {
                  title: "愛知県一宮市で",
                  value: "5,000円",
                  desc: "ひと月",
                  sub: "まで削減！",
                },
              ].map((item, idx) => (
                <CarouselItem key={idx} className="mt-[20px] basis-auto pl-5">
                  <div className="bg-white rounded-md shadow p-4 w-[154px] aspect-ratio-[154/100] flex flex-col items-center h-full transition-all duration-300 relative">
                    <div className="bg-token-main-200 text-token-main-600 font-bold rounded-full text-[11px] w-[40px] h-[40px] absolute top-[-15px] left-[-15px] flex items-center justify-center">
                      実績<span className="text-[16px]">{idx + 1}</span>
                    </div>
                    <div className="text-center text-token-mono-700 font-bold text-[12px]">
                      {item.title}
                      <br />
                      {item.desc}{" "}
                      <span className="bg-gradation-200 bg-clip-text text-transparent text-[20px]">
                        {item.value}
                      </span>
                      <br />
                      <span className="text-[14px]">{item.sub}</span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <FixedButton onClick={() => setStartDiagnosis(true)} showGlassIcon>
        診断スタート
      </FixedButton>
    </>
  );
}
