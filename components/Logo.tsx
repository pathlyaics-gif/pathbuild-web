import Image from "next/image";

interface LogoProps {
  size?: number;
  variant?: "default" | "light";
}

export function Logo({ size = 44, variant = "default" }: LogoProps) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";

  return (
    <span className="inline-flex items-center gap-3">
      <span
        className="overflow-hidden rounded-[22%] shrink-0"
        style={{ width: size, height: size }}
      >
        <Image
          src="/icon.png"
          alt=""
          width={size}
          height={size}
          className="block"
          style={{ width: size, height: size }}
          priority
        />
      </span>
      <span
        className={`text-2xl font-bold tracking-tight ${textColor}`}
        style={{ lineHeight: 1 }}
      >
        PathBuild
      </span>
    </span>
  );
}
