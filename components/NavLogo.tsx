import Link from "next/link";

type NavLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function NavLogo({ variant = "dark", className = "" }: NavLogoProps) {
  const textClass =
    variant === "light" ? "text-white/80" : "text-ink";

  return (
    <Link
      href="/"
      className={`flex items-center no-underline shrink-0 ${className}`}
    >
      <span
        className={`font-serif text-[22px] tracking-[-0.02em] ${textClass}`}
      >
        PathBuild
      </span>
    </Link>
  );
}
