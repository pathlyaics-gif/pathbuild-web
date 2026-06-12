import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Landing (dark) palette — matches the iOS app.
        night: {
          DEFAULT: "#0B0B0C",
          panel: "#121214",
          raise: "#1A1A1D",
        },
        ember: {
          DEFAULT: "#C1502A",
          bright: "#E68A52",
        },
        bone: {
          DEFAULT: "#F2EFEA",
          dim: "#B7B2AA",
          mute: "#8A857D",
        },
        cream: {
          DEFAULT: "#FBF7F0",
          dark: "#F5EDE0",
          mid: "#F0E8D8",
        },
        coral: {
          DEFAULT: "#E8734A",
          light: "#F09070",
          dark: "#D45A30",
        },
        ebony: "#2C2218",
        wood: {
          DEFAULT: "#3D3028",
          mid: "#6B5D50",
          light: "#9A8B7A",
        },
        ink: {
          DEFAULT: "#1A1410",
          secondary: "#5C5047",
          muted: "#8A7D72",
        },
        background: {
          DEFAULT: "#FBF7F0",
          alt: "#F5EDE0",
        },
        card: "#FFFFFF",
        accent: {
          DEFAULT: "#E8734A",
          light: "#F09070",
          dark: "#D45A30",
        },
        navy: {
          900: "#1A1410",
          850: "#2C2218",
          800: "#3D3028",
          700: "#5C5047",
          600: "#6B5D50",
          500: "#8A7D72",
          400: "#9A8B7A",
          300: "#F0E8D8",
        },
        warm: {
          100: "#FBF7F0",
          200: "#F0E8D8",
          300: "#E8DDC8",
        },
        sunrise: {
          from: "#FBF7F0",
          to: "#F5EDE0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-instrument)",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        serif: ["var(--font-dm-serif)", "Georgia", "serif"],
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        xl: "28px",
        pill: "100px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        "pb-sm": "0 1px 3px rgba(44, 34, 24, 0.06)",
        "pb-md": "0 4px 16px rgba(44, 34, 24, 0.08)",
        "pb-lg": "0 8px 32px rgba(44, 34, 24, 0.10)",
        "pb-xl": "0 16px 48px rgba(44, 34, 24, 0.12)",
        warm: "0 4px 16px rgba(44, 34, 24, 0.08)",
        "warm-lg": "0 8px 32px rgba(44, 34, 24, 0.10)",
        glow: "0 8px 24px rgba(232, 115, 74, 0.3)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
