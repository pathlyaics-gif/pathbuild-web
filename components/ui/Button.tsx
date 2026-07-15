import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "md" | "lg";

type ButtonBaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps | "href"> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps | "href"> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const BASE =
  "inline-flex items-center justify-center gap-2 rounded-pill font-semibold whitespace-nowrap transition duration-standard ease-smooth disabled:pointer-events-none disabled:opacity-50";

const SIZES: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[15px]",
  lg: "h-14 px-8 text-base",
};

const VARIANTS: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-accent-fg shadow-glow hover:bg-accent-hover active:translate-y-px",
  secondary: "bg-surface border border-divider text-ink hover:border-accent-border",
  ghost: "text-accent-strong underline-offset-4 hover:underline",
};

/**
 * The site's single button. Renders an <a> when `href` is provided, otherwise a
 * <button>. Visible focus styling is inherited from the global focus-visible rule.
 */
export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim();

  if (rest.href !== undefined) {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
