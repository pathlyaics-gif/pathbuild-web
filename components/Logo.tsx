import Image from "next/image";

interface LogoProps {
  size?: number;
  variant?: "default" | "light";
}

export function Logo({ size = 32, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/icon.png"
        alt=""
        width={size}
        height={size}
        className="rounded-lg"
        style={{ width: size, height: size }}
        priority
      />
      <span
        className={`text-lg font-bold tracking-tight ${textColor}`}
        style={{ lineHeight: 1 }}
      >
        PathBuild
      </span>
    </span>
  );
}
