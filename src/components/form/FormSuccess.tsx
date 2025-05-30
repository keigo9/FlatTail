import { Button } from "../ui/button";

const FormSuccess = () => {
  return (
    <div
      className={`min-h-[calc(100dvh-var(--header-height-mobile)-5rem)] sm:min-h-[calc(100dvh-var(--header-height-pc)-10rem)]`}
    >
      <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg text-center">
        <div className="my-8 flex flex-col items-center gap-4">
          <div>
            <svg
              width="43"
              height="30"
              viewBox="0 0 43 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9667 23.4L37.5667 0.8C38.1 0.266667 38.7334 0 39.4667 0C40.2 0 40.8334 0.266667 41.3667 0.8C41.9 1.33333 42.1667 1.96667 42.1667 2.7C42.1667 3.43333 41.9 4.06667 41.3667 4.6L16.8334 29.1333C16.3 29.6667 15.6778 29.9333 14.9667 29.9333C14.2556 29.9333 13.6334 29.6667 13.1 29.1333L1.63336 17.6667C1.10002 17.1333 0.844468 16.5 0.86669 15.7667C0.888912 15.0333 1.16669 14.4 1.70002 13.8667C2.23336 13.3333 2.86669 13.0667 3.60002 13.0667C4.33336 13.0667 4.96669 13.3333 5.50002 13.8667L14.9667 23.4Z"
                fill="url(#paint0_linear_481_4951)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_481_4951"
                  x1="-1.61272"
                  y1="24.8197"
                  x2="27.1642"
                  y2="-11.8344"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFD825" />
                  <stop offset="0.54686" stopColor="#FF9035" />
                  <stop offset="1" stopColor="#FF5721" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <h2 className="text-xl font-bold">診断完了</h2>
          <p>
            ご回答いただきありがとうございました。
            <br />
            3営業日以内にメールまたは
            <br className="sm:hidden" />
            電話でお見積もり結果をご連絡します
          </p>
        </div>

        <Button
          className="border-2 border-token-main-600 text-token-main-600 bg-white rounded-full px-[24px] py-[14px] text-[16px] h-[44px] hover:bg-token-main-100"
          onClick={() => window.location.reload()}
        >
          診断トップに戻る
        </Button>
      </div>
    </div>
  );
};

export default FormSuccess;
