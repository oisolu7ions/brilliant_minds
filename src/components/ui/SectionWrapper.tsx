import { type ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "gray" | "beige" | "blue" | "sage";
}

const backgroundStyles = {
  white: "bg-white",
  gray: "bg-gray-section",
  beige: "bg-beige",
  blue: "bg-soft-blue-light",
  sage: "bg-sage-light",
};

export default function SectionWrapper({
  children,
  className = "",
  id,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`py-16 md:py-20 lg:py-24 ${backgroundStyles[background]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
