interface PageTitleProps {
  title: string;
  subtitle?: string;
}

export default function PageTitle({ title, subtitle }: PageTitleProps) {
  return (
    <div className="bg-soft-blue-light py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
