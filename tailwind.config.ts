import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#FFF6EF",
          alt: "#FFF3EA",
        },
        card: "#FFFFFF",
        accent: {
          DEFAULT: "#FF8A6C",
          light: "#FFB09A",
          dark: "#E86B4A",
        },
        blush: {
          DEFAULT: "#FFE8DF",
          light: "#FFF0EA",
        },
        navy: {
          900: "#3D3029",
          850: "#453830",
          800: "#4A3D35",
          700: "#5C4E44",
          600: "#7A5C4F",
          500: "#8E8480",
          400: "#B5AFA8",
          300: "#D4C8C0",
        },
        warm: {
          100: "#FFF3EA",
          200: "#F2DDD0",
          300: "#EDCFBE",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        warm: "0 4px 12px rgba(212, 169, 138, 0.12)",
        "warm-lg": "0 8px 20px rgba(212, 169, 138, 0.20)",
        glow: "0 4px 12px rgba(255, 138, 108, 0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
