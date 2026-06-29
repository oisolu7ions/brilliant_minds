import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import { ALL_SERVICES, CONDITIONS_TREATED, TELEHEALTH_NOTE, AGE_RANGE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Psychiatric evaluations, medication management, supportive therapy, and lifestyle modification via telehealth.",
};

export default function ServicesPage() {
  return (
    <>
      <PageTitle
        title="Our Services"
        subtitle="Comprehensive telehealth psychiatric care including medication management and supportive therapy."
      />

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-muted leading-relaxed text-center">
            At Brilliant Minds Mental Health and Wellness, PLLC, we offer
            evidence-based psychiatric services delivered with compassion and
            professionalism. {AGE_RANGE} Individual treatment approaches are
            determined collaboratively — we do not guarantee specific outcomes.
          </p>
          <DisclaimerBox variant="info">
            <p>{TELEHEALTH_NOTE}</p>
          </DisclaimerBox>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {ALL_SERVICES.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              showCta
              ctaLabel="Request Appointment"
              ctaHref="/contact"
            />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">
            Conditions We Treat
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CONDITIONS_TREATED.map((condition) => (
              <li
                key={condition}
                className="flex items-start gap-2 rounded-lg bg-gray-section px-4 py-3 text-sm text-navy"
              >
                <svg
                  className="h-4 w-4 text-sage shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {condition}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper background="beige">
        <DisclaimerBox variant="info">
          <p>
            The services listed above are provided for informational purposes.
            Specific treatment approaches are determined collaboratively between
            you and your provider based on your individual needs. Brilliant
            Minds does not guarantee specific outcomes or results from any
            service.
          </p>
        </DisclaimerBox>
      </SectionWrapper>

      <SectionWrapper background="blue">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Interested in Our Services?
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Contact us to learn more or request an appointment. We&apos;re happy
            to answer your general questions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Request an Appointment
            </Button>
            <Button href="/new-clients" variant="outline">
              New Client Information
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
