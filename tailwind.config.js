/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        token: {
          mono: {
            100: "#FFFFFF",
            200: "#F8F8F8",
            300: "#EFF1F1",
            400: "#CACECE",
            500: "#888B8D",
            600: "#46494A",
            700: "#191C1D",
            1000: "#222",
          },
          critical: {
            100: "#FFE9E9",
            200: "#C82222",
          },
          main: {
            100: "#FFE9D2",
            200: "#FFD8AF",
            300: "#FFB970",
            400: "#FFA65D",
            500: "#FF9035",
            600: "#FF6F21",
            700: "#FF5721",
            800: "#EB3900",
          },
          accent: {
            100: "#E2FFF3",
            200: "#00B576",
          },
        },
        button: {
          primary: {
            disabled: "#EFF1F1",
          },
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      backgroundImage: {
        "gradation-100":
          "linear-gradient(47.29deg, #FFD825 5.08%, #FF9035 57.04%, #FF5721 100.09%)",
        "gradation-200":
          "linear-gradient(40.05deg, #FEB970 -0.92%, #FF6F21 45%, #FF5721 101.13%)",
        "gradation-300":
          "linear-gradient(47.29deg, #F7CB6B 5.08%, #FAB37A 57.04%, #FBA980 100.09%)",
        "lp-slider-gradation":
          " linear-gradient(36.96deg, #FFD825 -5.85%, #FF9035 57.84%, #FF5721 110.62%)",
        "lp-reason-title-gradation":
          " linear-gradient(51.64deg, #FEB970 -2.78%, #FF6F21 50.39%, #FF5721 78.18%)",
        "lp-feature-title-gradation":
          "linear-gradient(53.88deg, #FEB970 22.1%, #FF6F21 48.32%, #FF5721 62.03%)",
        "border-gradation":
          "linear-gradient(256.69deg, #FFD825 -12.54%, #FC9F2C 7.07%, #FC8800 23.33%)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif"],
        din: ["DIN 2014 Narrow", "sans-serif"],
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
