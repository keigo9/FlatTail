import * as React from "react";

import { cn } from "@/lib/utils";
import { AlertTriangle } from "lucide-react";

interface InputProps extends React.ComponentProps<"input"> {
  error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, type, ...props }, ref) => {
    return (
      <div>
        <div className="relative w-full">
          <input
            type={type}
            className={cn(
              "peer flex h-9 w-full rounded-sm border border-token-mono-400 bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-zinc-950 placeholder:text-token-mono-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-token-mono-300 md:text-sm dark:border-zinc-800 dark:file:text-zinc-50 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300",
              className
            )}
            ref={ref}
            {...props}
          />
          <span
            className={cn(
              "absolute bottom-0 left-0 right-0 h-[2px] w-[calc(100%-2px)] mx-auto",
              error
                ? "bg-token-critical-200"
                : "peer-focus:bg-border-gradation peer-hover:bg-token-main-300"
            )}
          ></span>
        </div>
        {error && (
          <div className="flex items-center gap-1 mt-1">
            <AlertTriangle className="w-4 h-4 text-token-critical-200" />
            <p className="text-token-critical-200 text-sm">{error}</p>
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
