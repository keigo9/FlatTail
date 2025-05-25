import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div
      className={cn(
        "flex-1 py-10 px-4 bg-token-main-100 flex flex-col items-center",
        "min-h-[calc(100vh-var(--header-height-mobile))] sm:min-h-[calc(100vh-var(--header-height-pc))]"
      )}
    >
      <div className="bg-token-mono-100 p-4 rounded-lg w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="text-lg">ページが見つかりません</p>
      </div>
    </div>
  );
}
