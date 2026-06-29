import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ProviderCard from "@/components/ui/ProviderCard";
import Button from "@/components/ui/Button";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import {
  PROVIDERS,
  VALUES,
  SITE,
  MISSION_STATEMENT,
  APPROACH_TO_CARE,
  BUSINESS_DESCRIPTION,
  TELEHEALTH_NOTE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Brilliant Minds Mental Health and Wellness, PLLC, Dr. Nikki Batts, and our approach to telehealth psychiatric care.",
};

export default function AboutPage() {
  return (
    <>
      <PageTitle
        title="About Us"
        subtitle="Learn about our mission, values, and approach to mental health and wellness care."
      />

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            About {SITE.name}
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {BUSINESS_DESCRIPTION}
          </p>
          <div className="mt-6">
            <DisclaimerBox variant="info">
              <p>{TELEHEALTH_NOTE}</p>
            </DisclaimerBox>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Our Mission</h2>
          <p className="mt-6 text-lg text-muted leading-relaxed italic">
            &ldquo;{MISSION_STATEMENT}&rdquo;
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Our Approach to Care
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {APPROACH_TO_CARE}
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Collaborative, client-centered psychiatric care",
              "Evidence-based medication management",
              "Supportive therapy integrated into treatment",
              "Direct provider contact in a confidential environment",
              "Tailored treatment plans for each individual",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-muted">
                <svg
                  className="h-5 w-5 text-sage shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      <SectionWrapper background="blue">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Our Values</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            These core values guide everything we do at Brilliant Minds.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl bg-white p-6 md:p-8 shadow-sm"
            >
              <h3 className="text-lg font-bold text-navy">{value.title}</h3>
              <p className="mt-2 text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">Our Provider</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Meet the provider dedicated to supporting your wellness journey.
          </p>
        </div>
        <div className="max-w-lg mx-auto">
          {PROVIDERS.map((provider) => (
            <ProviderCard key={provider.name} {...provider} />
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Begin Your Journey With Us
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            We&apos;d be honored to support you. Reach out to learn more or
            schedule your first appointment.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary">
              Request an Appointment
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
