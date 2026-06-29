import Link from "next/link";
import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "sage";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  children: ReactNode;
  className?: string;
  external?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-soft-blue text-white hover:bg-[#5a89b3] shadow-sm hover:shadow-md",
  secondary:
    "bg-sage text-white hover:bg-[#7d947c] shadow-sm hover:shadow-md",
  outline:
    "border-2 border-soft-blue text-soft-blue hover:bg-soft-blue-light",
  sage:
    "border-2 border-sage text-sage hover:bg-sage-light",
};

export default function Button({
  href,
  onClick,
  type = "button",
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-blue";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    const isNativeLink =
      external || href.startsWith("tel:") || href.startsWith("mailto:");

    if (isNativeLink) {
      return (
        <a
          href={href}
          className={combinedStyles}
          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}
