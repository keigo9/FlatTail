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
          main: {
            100: "#FFE9D2",
            200: "#FFD8AF",
            600: "#FF6F21",
            700: "#FF5721",
          },
          mono: {
            400: "#CACECE",
            700: "#191C1D",
            1000: "#222",
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
      },
    },
  },
  plugins: [import("tailwindcss-animate")],
};
