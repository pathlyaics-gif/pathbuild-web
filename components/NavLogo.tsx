import Image from "next/image";
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
      <Image
        src="/logo-mark.png"
        alt=""
        width={40}
        height={40}
        className="h-9 w-9 shrink-0 object-contain"
        priority
      />
      <span
        className={`font-serif text-[22px] tracking-[-0.02em] ${textClass}`}
      >
        PathBuild
      </span>
    </Link>
  );
}
