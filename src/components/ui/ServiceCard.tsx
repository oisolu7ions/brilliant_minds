import Button from "./Button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  showCta?: boolean;
  ctaLabel?: string;
  ctaHref?: string;
}

function DefaultIcon() {
  return (
    <svg
      className="w-7 h-7 text-soft-blue"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
      />
    </svg>
  );
}

export default function ServiceCard({
  title,
  description,
  icon,
  showCta = false,
  ctaLabel = "Request Appointment",
  ctaHref = "/contact",
}: ServiceCardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-white p-6 md:p-8 shadow-sm hover:shadow-md hover:border-soft-blue/30 transition-all duration-300">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-soft-blue-light mb-5">
        {icon || <DefaultIcon />}
      </div>
      <h3 className="text-xl font-bold text-navy mb-3">{title}</h3>
      <p className="text-muted leading-relaxed flex-grow">{description}</p>
      {showCta && (
        <div className="mt-6">
          <Button href={ctaHref} variant="outline" className="text-sm px-4 py-2">
            {ctaLabel}
          </Button>
        </div>
      )}
    </article>
  );
}
