import Image from "next/image";
import Link from "next/link";

type NavLogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function NavLogo({ variant = "dark", className = "" }: NavLogoProps) {
  const textClass = variant === "light" ? "text-white/90" : "text-ink";

  return (
    <Link
      href="/"
      className={`flex items-center gap-2.5 no-underline shrink-0 ${className}`}
    >
      {/* Decorative: the wordmark text beside it names the link. */}
      <Image
        src="/star-summit-icon.png"
        alt=""
        aria-hidden
        width={655}
        height={650}
        className="h-9 w-9 shrink-0 rounded-[9px] object-cover"
        priority
      />
      <span className={`font-serif text-[22px] tracking-[-0.02em] ${textClass}`}>
        PathBuild
      </span>
    </Link>
  );
}
