import type { Config } from "tailwindcss";

/**
 * PathBuild Web — one light design system.
 * Semantic tokens resolve to the CSS variables defined in app/globals.css.
 * Prefer the semantic names (bg, surface, ink, accent…) in new work.
 */
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Semantic (single source of truth → CSS vars) ──────────────────
        bg: {
          DEFAULT: "var(--background-primary)",
          alt: "var(--background-secondary)",
        },
        surface: {
          DEFAULT: "var(--surface-primary)",
          elevated: "var(--surface-elevated)",
          peach: "var(--surface-peach)",
        },
        ink: {
          DEFAULT: "var(--text-primary)",
          secondary: "var(--text-secondary)",
          muted: "var(--text-tertiary)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          strong: "var(--accent-strong)",
          soft: "var(--accent-soft)",
          border: "var(--accent-border)",
          fg: "var(--text-on-accent)",
        },
        success: "var(--success)",
        warning: "var(--warning)",
        error: "var(--error)",
        divider: "var(--divider)",

        // ── Warm-white background scale (kept for existing pages) ──────────
        cream: { DEFAULT: "#FBF8F3", dark: "#F5EFE6", mid: "#F0E8D8" },
        ebony: "#2C2218",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "SF Pro Text",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        content: "1280px",
        prose: "760px",
      },
      borderRadius: {
        sm: "12px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "40px",
        pill: "100px",
      },
      boxShadow: {
        "pb-sm": "0 1px 3px rgba(44, 34, 24, 0.06)",
        "pb-md": "0 6px 20px rgba(44, 34, 24, 0.08)",
        "pb-lg": "0 14px 40px rgba(44, 34, 24, 0.10)",
        "pb-xl": "0 24px 60px rgba(44, 34, 24, 0.12)",
        glow: "0 12px 32px rgba(193, 80, 42, 0.22)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      transitionDuration: {
        fast: "150ms",
        standard: "260ms",
        slow: "560ms",
        editorial: "900ms",
      },
    },
  },
  plugins: [],
};

export default config;
