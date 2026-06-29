interface DisclaimerBoxProps {
  children: React.ReactNode;
  variant?: "info" | "warning" | "emergency";
  title?: string;
}

const variantStyles = {
  info: "bg-soft-blue-light border-soft-blue/30 text-navy",
  warning: "bg-beige border-sage/40 text-navy",
  emergency: "bg-red-50 border-red-200 text-red-900",
};

export default function DisclaimerBox({
  children,
  variant = "info",
  title,
}: DisclaimerBoxProps) {
  return (
    <div
      className={`rounded-xl border p-5 md:p-6 ${variantStyles[variant]}`}
      role="note"
    >
      {title && (
        <p className="font-semibold text-sm uppercase tracking-wide mb-2">
          {title}
        </p>
      )}
      <div className="text-sm md:text-base leading-relaxed">{children}</div>
    </div>
  );
}
