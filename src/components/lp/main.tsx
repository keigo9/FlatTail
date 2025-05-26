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
                      実績<span className="text-[16px]">{idx + 1}</span>
                    </div>
                    <div className="text-center text-token-mono-700 font-bold text-[12px] lg:text-[14px]">
                      {item.title}
                      <br />
                      {item.desc}{" "}
                      <span className="bg-gradation-200 bg-clip-text text-transparent mr-1 text-[20px] lg:text-[24px]">
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
          <span className="relative inline-block align-middle">
            <svg width="150" height="26" viewBox="0 0 150 26">
              <text
                x="75"
                y="20"
                fontSize="20"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="6"
                paintOrder="stroke"
                fill="#191C1D"
                textAnchor="middle"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                フラットTAILが
              </text>
            </svg>
          </span>
          <br />
          <span className="relative inline-block">
            <svg width="200" height="40" viewBox="0 0 200 40">
              <defs>
                <linearGradient id="orange-grad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#FEB970" />
                  <stop offset="50%" stopColor="#FF6F21" />
                  <stop offset="100%" stopColor="#FF5721" />
                </linearGradient>
              </defs>
              <text
                x="100"
                y="32"
                fontSize="32"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="6"
                paintOrder="stroke"
                fill="url(#orange-grad)"
                textAnchor="middle"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                選ばれる理由
              </text>
            </svg>
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-8 items-center max-w-[1200px] mx-auto lg:px-4 lg:gap-4">
          {[
            {
              num: "01",
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
              num: "02",
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
              num: "03",
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
                <svg width="60" height="54" viewBox="0 0 60 54">
                  <defs>
                    <linearGradient
                      id={`num-grad-${idx}`}
                      x1="0"
                      y1="1"
                      x2="1"
                      y2="0"
                    >
                      <stop offset="5.08%" stopColor="#FFD825" />
                      <stop offset="57.04%" stopColor="#FF9035" />
                      <stop offset="100.09%" stopColor="#FF5721" />
                    </linearGradient>
                  </defs>
                  <text
                    x="50%"
                    y="75%"
                    textAnchor="middle"
                    fontSize="48"
                    fontWeight="bold"
                    stroke="#fff"
                    strokeWidth="6"
                    paintOrder="stroke"
                    fill={`url(#num-grad-${idx})`}
                    style={{ fontFamily: "Noto Sans JP, sans-serif" }}
                  >
                    {item.num}
                  </text>
                </svg>
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
          <span
            className="relative inline-block align-middle"
            style={{ lineHeight: 1 }}
          >
            <svg
              width="48"
              height="32"
              viewBox="0 0 48 32"
              style={{ display: "block" }}
            >
              <text
                x="0"
                y="24"
                fontSize="24"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="8"
                paintOrder="stroke"
                fill="#FF6F21"
                textAnchor="start"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                安心
              </text>
            </svg>
          </span>
          <span
            className="relative inline-block align-middle"
            style={{ lineHeight: 1 }}
          >
            <svg
              width="32"
              height="24"
              viewBox="0 0 32 24"
              style={{ display: "block" }}
            >
              <text
                x="0"
                y="18"
                fontSize="16"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="6"
                paintOrder="stroke"
                fill="#191C1D"
                textAnchor="start"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                して
              </text>
            </svg>
          </span>
          <span
            className="relative inline-block align-middle"
            style={{ lineHeight: 1 }}
          >
            <svg
              width="50"
              height="32"
              viewBox="0 0 50 32"
              style={{ display: "block" }}
            >
              <text
                x="0"
                y="24"
                fontSize="24"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="8"
                paintOrder="stroke"
                fill="#FF6F21"
                textAnchor="start"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                導入
              </text>
            </svg>
          </span>
          <span
            className="relative inline-block align-middle relative left-[-2px]"
            style={{ lineHeight: 1 }}
          >
            <svg
              width="140"
              height="24"
              viewBox="0 0 140 24"
              style={{ display: "block" }}
            >
              <text
                x="0"
                y="18"
                fontSize="16"
                fontWeight="bold"
                stroke="#fff"
                strokeWidth="6"
                paintOrder="stroke"
                fill="#191C1D"
                textAnchor="start"
                style={{ fontFamily: "Noto Sans JP, sans-serif" }}
              >
                していただけます！
              </text>
            </svg>
          </span>
        </p>
      </section>
      <section className="bg-gradation-200 px-4 py-8">
        <div className="max-w-[1200px] mx-auto bg-token-mono-100 rounded-md px-4 py-8">
          <h2 className="text-center font-bold text-[28px] text-token-main-600 mb-2">
            フラットTAILの
            <span className="block text-[36px] text-transparent bg-gradation-200 bg-clip-text leading-tight">
              特徴
            </span>
          </h2>
          <div className="flex flex-col gap-8 mt-8">
            {[
              {
                img: `${import.meta.env.BASE_URL}LP/feat1.png`,
                tags: ["愛知県", "三重県", "岐阜県"],
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
                title: "総合的なサービスを提供",
                desc: "地域特化で他の工事業者さまとも繋がりがあるため、総合的なサポートをすることができます。",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-center gap-6 bg-token-main-100 rounded-lg p-6 shadow-sm"
              >
                <div className="flex-shrink-0 mb-4 sm:mb-0">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-[90px] h-[90px] object-contain"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-token-main-200 text-token-main-600 rounded-full px-3 py-1 text-[15px] font-bold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="font-bold text-[20px] mb-1 text-token-mono-700">
                    {item.title}
                  </div>
                  <div className="text-[16px] text-token-mono-700">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-token-main-100 py-10">
        <div
          className="relative w-full flex flex-col items-center justify-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}LP/bg.png)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h2 className="text-center text-token-mono-700 font-bold text-[28px] mb-2">
            <span className="block text-[36px] text-transparent bg-gradation-200 bg-clip-text leading-tight">
              ご自宅で
            </span>
            <br />
            <span className="block text-[36px] text-transparent bg-gradation-200 bg-clip-text leading-tight">
              補助金活用診断を
              <br />
              受けると
            </span>
          </h2>
          <img
            src={`${import.meta.env.BASE_URL}LP/amazon.png`}
            alt="Amazonギフト券プレゼント"
            className="max-w-[420px] w-full h-auto drop-shadow-lg"
          />
        </div>
        <p className="text-center text-token-mono-700 text-[16px] mt-6">
          この機会に専門スタッフがご自宅に伺い、お客様にぴったりのプランをご提案させていただきます。
          <br />
          おうちのこと、何でもお気軽にご相談ください。
        </p>
      </section>
      <FixedButton onClick={() => setStartDiagnosis(true)} showGlassIcon>
        診断スタート
      </FixedButton>
    </div>
  );
}
