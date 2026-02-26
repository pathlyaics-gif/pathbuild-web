import Image from "next/image";

export function Logo({ size = 36 }: { size?: number }) {
  return (
    <Image
      src="/logo.png"
      alt="PathBuild"
      width={size * 4}
      height={size}
      className="object-contain"
      style={{ height: size, width: "auto" }}
      priority
    />
  );
}
