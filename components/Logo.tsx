import Image from "next/image";

/** Squircle app icon only — transparent canvas (`public/logo-full.png`). */
const LOGO_WIDTH = 534;
const LOGO_HEIGHT = 566;

interface LogoProps {
  /** Display height in CSS pixels; width scales with aspect ratio. */
  size?: number;
  variant?: "default" | "light";
}

export function Logo({ size = 40, variant = "default" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center shrink-0 ${
        variant === "light" ? "drop-shadow-sm" : ""
      }`}
    >
      <Image
        src="/logo-full.png"
        alt="PathBuild"
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        className="w-auto object-contain object-left"
        style={{ height: size, width: "auto", maxWidth: "min(220px, 70vw)" }}
        priority
      />
    </span>
  );
}
