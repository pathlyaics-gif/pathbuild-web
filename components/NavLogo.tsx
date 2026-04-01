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
      className={`flex items-center gap-2.5 no-underline shrink-0 ${className}`}
    >
      <div
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-gradient-to-br from-coral via-coral-light to-coral font-serif text-lg text-white shadow-[0_2px_8px_rgba(232,115,74,0.3)]"
        aria-hidden
      >
        P
      </div>
      <span
        className={`font-serif text-[22px] tracking-[-0.02em] ${textClass}`}
      >
        PathBuild
      </span>
    </Link>
  );
}
