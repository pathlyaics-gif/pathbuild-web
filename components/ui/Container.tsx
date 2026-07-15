import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

/**
 * Centered page-width wrapper. Caps content at `max-w-content` (1280px) and
 * applies the site's responsive horizontal padding. Use it for every band of
 * content that should align to the global grid.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag className={`mx-auto w-full max-w-content px-5 sm:px-8 ${className}`.trim()}>
      {children}
    </Tag>
  );
}
