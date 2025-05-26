import { CheckIcon } from "@/assets/CheckIcon";
import FixedButton from "../common/FixedButton";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Main({
  setStartDiagnosis,
}: {
  setStartDiagnosis: (startDiagnosis: boolean) => void;
}) {
  return (
    <div className="pb-[80px]">
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
          <h2 className="text-center text-token-mono-100 font-bold text-[18px] mb-4 lg:text-[24px]">
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
            <CarouselContent className="sm:justify-center ml-[10px] mr-[25px]">
              {[
                {
                  title: "愛知県名古屋市で",
                  value: "20,000",
                  desc: "月間",
                  sub: "削減のご提案",
                },
                {
                  title: "愛知県豊田市で",
                  value: "2,400",
                  desc: "ひと月",
                  sub: "まで削減！",
                },
                {
                  title: "愛知県安城市で",
                  value: "16,000",
                  desc: "月間",
                  sub: "削減のご提案",
                },
                {
                  title: "愛知県一宮市で",
                  value: "5,000",
                  desc: "ひと月",
                  sub: "まで削減！",
                },
              ].map((item, idx) => (
                <CarouselItem
                  key={idx}
                  className="mt-[20px] basis-auto pl-5 lg:pl-8"
                >
                  <div className="bg-white rounded-md shadow p-4 w-[154px] aspect-ratio-[154/100] flex flex-col items-center h-full transition-all duration-300 relative lg:w-[170px] lg:aspect-ratio-[170/111]">
                    <div className="bg-token-main-200 text-token-main-600 font-bold rounded-full text-[11px] w-[40px] h-[40px] absolute top-[-15px] left-[-15px] flex items-center justify-center">
                      実績
                      <span className="text-[16px] font-ibm ml-[2px]">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="text-center text-token-mono-700 font-bold text-[12px] lg:text-[14px]">
                      {item.title}
                      <br />
                      {item.desc}{" "}
                      <span className="bg-gradation-200 font-ibm bg-clip-text text-transparent mr-[1px] text-[20px] lg:text-[24px]">
                        {item.value}
                      </span>
                      <span className="bg-gradation-200 bg-clip-text text-transparent text-[14px] lg:text-[16px]">
                        円
                      </span>
                      <br />
                      <span className="text-[14px] lg:text-[18px]">
                        {item.sub}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
      <section className="bg-token-main-100 py-6">
        <h2 className="text-center text-token-mono-700 font-bold mb-6">
          <span className="text-[20px] font-bold text-token-mono-700 z-10 relative text-stroke-white-8">
            フラットTAILが
          </span>
          <br />
          <span className="relative inline-block">
            <span className="text-[32px] font-black bg-lp-reason-title-gradation bg-clip-text text-transparent z-10 relative leading-[29px]">
              選ばれる理由
            </span>
            <span className="text-[32px] absolute top-0 left-0 text-stroke-gradation-white-8 leading-[29px]">
              選ばれる理由
            </span>
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 items-center max-w-[1200px] mx-auto lg:px-4 lg:gap-4">
          {[
            {
              num: `${import.meta.env.BASE_URL}LP/01.png`,
              img: `${import.meta.env.BASE_URL}LP/reason1.png`,
              alt: "理由1",
              main: (
                <p className="font-bold">
                  <span className="text-[14px]">販売実績が豊富なので</span>
                  <br />
                  <span className="text-[20px] bg-gradation-200 bg-clip-text text-transparent">
                    メーカーから安く
                  </span>
                  <span className="text-[16px]">仕入れられる！</span>
                </p>
              ),
            },
            {
              num: `${import.meta.env.BASE_URL}LP/02.png`,
              img: `${import.meta.env.BASE_URL}LP/reason2.png`,
              alt: "理由2",
              main: (
                <p className="font-bold">
                  <span className="text-[16px]">安心・安全の</span>
                  <span className="text-[30px] bg-gradation-200 bg-clip-text text-transparent">
                    30
                  </span>
                  <span className="text-[18px] bg-gradation-200 bg-clip-text text-transparent">
                    年保証
                  </span>
                </p>
              ),
            },
            {
              num: `${import.meta.env.BASE_URL}LP/03.png`,
              img: `${import.meta.env.BASE_URL}LP/reason3.png`,
              alt: "理由3",
              main: (
                <p className="font-bold">
                  <span className="text-[14px]">AI機能で素早い故障検知</span>
                  <br />
                  <span className="text-[16px]">メンテナンス・出張費</span>
                  <span className="text-[30px] bg-gradation-200 bg-clip-text text-transparent">
                    0
                  </span>
                  <span className="text-[18px] bg-gradation-200 bg-clip-text text-transparent">
                    円
                  </span>
                </p>
              ),
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-4 w-[90%] max-w-[500px] flex flex-col items-center relative lg:w-auto lg:flex-1"
            >
              <div className="absolute top-[-22px] left-[-10px]">
                <img
                  src={item.num}
                  alt={item.alt}
                  className="w-[48px] h-[52px] object-contain"
                />
              </div>
              <img
                src={item.img}
                alt={item.alt}
                className="rounded-md w-full object-cover mb-2"
              />
              <div className="text-center mt-2">{item.main}</div>
            </div>
          ))}
        </div>
        <p className="flex flex-wrap items-center justify-center mt-6">
          <span className="relative inline-block">
            <span className="text-[24px] font-black bg-lp-reason-title-gradation bg-clip-text text-transparent z-10 relative">
              安心
            </span>
            <span className="text-[24px] absolute top-0 left-0 text-stroke-gradation-white-6">
              安心
            </span>
          </span>
          <span className="text-[16px] font-bold text-token-mono-700 z-10 relative text-stroke-white-6">
            して
          </span>
          <span className="relative inline-block">
            <span className="text-[24px] font-black bg-lp-reason-title-gradation bg-clip-text text-transparent z-10 relative">
              導入
            </span>
            <span className="text-[24px] absolute top-0 left-0 text-stroke-gradation-white-6">
              導入
            </span>
          </span>
          <span className="text-[16px] font-bold text-token-mono-700 z-10 relative text-stroke-white-6">
            していただけます！
          </span>
        </p>
      </section>
      <section className="bg-gradation-200 px-4 py-8">
        <div className="max-w-[1200px] mx-auto bg-token-mono-100 rounded-md px-4 py-8 lg:px-8">
          <h2 className="text-center font-bold text-[20px] text-token-mono-700 mb-6">
            フラットTAILの
            <span className="block text-[32px] text-transparent bg-lp-feature-title-gradation bg-clip-text">
              特徴
            </span>
          </h2>
          <div className="flex flex-col gap-6 sm:max-w-lg mx-auto lg:max-w-none lg:flex-row lg:gap-10">
            {[
              {
                img: `${import.meta.env.BASE_URL}LP/feat1.png`,
                tags: ["愛知県", "三重県", "岐阜県"],
                tagAfter: "に",
                title: "特化したサービス提供",
                desc: "地域に特化した知識と経験が豊富なため、専門的な対応することができます。",
              },
              {
                img: `${import.meta.env.BASE_URL}LP/feat2.png`,
                tags: ["現金", "カードローン", "借り換え"],
                title: "豊富な支払い方法",
                desc: "支払い方法が豊富なため、導入の障壁が低く、ご家族の同意も得られやすいです。",
              },
              {
                img: `${import.meta.env.BASE_URL}LP/feat3.png`,
                tags: ["外壁", "外構", "エクステリア"],
                tagAfter: "など",
                title: "総合的なサービスを提供",
                desc: "地域特化で他の工事業者さまとも繋がりがあるため、総合的なサポートをすることができます。",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 lg:flex-col lg:flex-1"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[64px] h-[64px] object-contain lg:w-[80px] lg:h-[80px]"
                  />
                </div>
                <div className="flex-1 lg:text-center">
                  <div className="flex flex-wrap items-center gap-2 mb-2 lg:justify-center">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-token-main-100 text-token-main-700 rounded-full px-2 py-1 text-[13px] font-bold lg:text-[16px]"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="text-[12px] font-bold text-token-mono-700 lg:text-[14px]">
                      {item.tagAfter}
                    </span>
                  </div>
                  <div className="font-bold text-[16px] mb-2 text-token-mono-700 lg:text-[18px]">
                    {item.title}
                  </div>
                  <div className="text-[12px] text-token-mono-700 lg:text-[16px]">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-token-main-100">
        <div
          className="relative w-full flex flex-col items-center justify-center max-w-[1000px] mx-auto"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}LP/bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="px-4 pt-8">
            <h2 className="text-center font-bold mb-2">
              <span className="block text-[20px] text-token-mono-700 flex justify-center text-stroke-white-6">
                ご自宅で
              </span>
              <span className="relative inline-block">
                <span className="block text-[32px] flex flex-col items-center bg-lp-diagnosis-title-gradation bg-clip-text text-transparent z-10 relative leading-[32px]">
                  補助金活用診断を
                  <br />
                  受けると
                </span>
                <span className="absolute text-[32px] top-0 left-0 text-stroke-gradation-white-6 z-0 leading-[32px]">
                  補助金活用診断を
                  <br />
                  受けると
                </span>
              </span>
            </h2>
            <img
              src={`${import.meta.env.BASE_URL}LP/amazon.png`}
              alt="Amazonギフト券プレゼント"
              className="max-w-[420px] w-full h-auto"
            />
          </div>
        </div>
        <div className="px-4 pb-8">
          <div className="flex justify-center gap-4 lg:gap-8 mt-4">
            <div className="flex gap-2">
              <CheckIcon />
              <p className="text-token-mono-700 text-[12px] font-bold lg:text-[14px] relative top-[-2px]">
                面倒な外出不要
              </p>
            </div>
            <div className="flex gap-2">
              <CheckIcon />
              <p className="text-token-mono-700 text-[12px] font-bold lg:text-[14px] relative top-[-3px]">
                Amazonギフト券1万円分で
                <br />
                お好きなものを購入できる！
              </p>
            </div>
          </div>
          <p className="text-token-mono-700 text-[16px] font-medium mt-4 lg:text-center">
            この機会に専門スタッフがご自宅に伺い、お客様にぴったりのプランをご提案させていただきます。
            <br className="hidden lg:block" />
            おうちのこと、何でもお気軽にご相談ください。
          </p>
        </div>
      </section>
      <FixedButton onClick={() => setStartDiagnosis(true)} showGlassIcon>
        診断スタート
      </FixedButton>
    </div>
  );
}
