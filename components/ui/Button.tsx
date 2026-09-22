import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
}

/* Si tiene href → <Link>, si no → <button> */
type ButtonAsLink = ButtonBaseProps & {
  href: string;
  target?: string;
  rel?: string;
  onClick?: never;
  type?: never;
};

type ButtonAsButton = ButtonBaseProps & {
  href?: never;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

/* ─── Estilos ───────────────────────────────────────────── */
const baseStyles = `
  inline-flex items-center justify-center gap-2
  font-semibold whitespace-nowrap
  transition-all duration-[160ms]
  focus-visible:outline-2 focus-visible:outline-offset-2
  active:scale-[0.97]
  disabled:opacity-40 disabled:pointer-events-none
  select-none
`;

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[#FF3EA5] text-white
    shadow-[0_0_24px_rgba(255,62,165,0.35)]
    hover:bg-[#ff69b9] hover:shadow-[0_0_36px_rgba(255,62,165,0.5)]
    focus-visible:outline-[#FF3EA5]
  `,
  secondary: `
    bg-[#FFC542] text-[#0B0014]
    shadow-[0_0_20px_rgba(255,197,66,0.25)]
    hover:bg-[#ffd06e] hover:shadow-[0_0_32px_rgba(255,197,66,0.4)]
    focus-visible:outline-[#FFC542]
  `,
  ghost: `
    bg-transparent text-[#C9B8E8]
    border border-[rgba(201,184,232,0.2)]
    hover:border-[rgba(255,62,165,0.5)] hover:text-white
    focus-visible:outline-[#C9B8E8]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-[8px]",
  md: "px-6 py-3 text-base rounded-[10px]",
  lg: "px-8 py-4 text-lg rounded-[12px]",
};

function buildClassName(
  variant: ButtonVariant,
  size: ButtonSize,
  className = ""
) {
  return [baseStyles, variantStyles[variant], sizeStyles[size], className]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/* ─── Componente ────────────────────────────────────────── */
export default function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    disabled,
  } = props;

  const cls = buildClassName(variant, size, className);

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link
        href={href}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
        className={cls}
        aria-disabled={disabled}
      >
        {children}
      </Link>
    );
  }

  const { onClick, type = "button" } = props as ButtonAsButton;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cls}
    >
      {children}
    </button>
  );
}
