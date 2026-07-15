import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";

type ProductScreenshotProps = {
  src: string;
  /** Descriptive alt text — required for every screenshot. */
  alt: string;
  priority?: boolean;
  className?: string;
};

/**
 * A real product screenshot rendered inside a PhoneFrame. The image is clipped
 * to the frame's screen, so no extra rounding is needed on the source asset.
 */
export function ProductScreenshot({
  src,
  alt,
  priority = false,
  className = "",
}: ProductScreenshotProps) {
  return (
    <PhoneFrame className={className}>
      <Image
        src={src}
        alt={alt}
        width={390}
        height={844}
        priority={priority}
        sizes="(max-width: 640px) 66vw, 300px"
        className="h-full w-full object-cover"
      />
    </PhoneFrame>
  );
}
