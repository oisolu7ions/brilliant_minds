import Button from "./Button";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}

export default function Hero({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-soft-blue-light via-white to-sage-light">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-soft-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight tracking-tight">
            {headline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-2xl">
            {subheadline}
          </p>
          {(primaryCta || secondaryCta) && (
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              {primaryCta && (
                <Button href={primaryCta.href} variant="primary">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button href={secondaryCta.href} variant="outline">
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
