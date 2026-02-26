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
          DEFAULT: "#FDF8ED",
          alt: "#FBF4E6",
        },
        card: "#FEFAF3",
        accent: {
          DEFAULT: "#FF8A6C",
          light: "#FFB09A",
          dark: "#E86B4A",
        },
        secondary: {
          DEFAULT: "#F4978E",
          light: "#FCCEC7",
        },
        gold: {
          DEFAULT: "#F5C67A",
          light: "#FCEABB",
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
          200: "#F0E0D0",
          300: "#E8D5C5",
        },
        sunrise: {
          from: "#FFECD2",
          to: "#FCB69F",
        },
      },
      fontFamily: {
        sans: [
          "Nunito",
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
