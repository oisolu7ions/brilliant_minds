import type { Metadata } from "next";
import Hero from "@/components/ui/Hero";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import {
  HOME_SERVICES,
  WHO_WE_HELP,
  WHY_CHOOSE,
  CONDITIONS_TREATED,
  EMERGENCY_DISCLAIMER,
  BUSINESS_DESCRIPTION,
  TELEHEALTH_NOTE,
  AGE_RANGE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Brilliant Minds Mental Health and Wellness, PLLC",
  description:
    "Telehealth psychiatric care including medication management and supportive therapy for individuals aged 15 to 64.",
};

export default function HomePage() {
  return (
    <>
      <Hero
        headline="Compassionate Mental Health & Wellness Support"
        subheadline={BUSINESS_DESCRIPTION}
        primaryCta={{ label: "Request an Appointment", href: "/contact" }}
        secondaryCta={{ label: "View Services", href: "/services" }}
      />

      <SectionWrapper background="white" className="!py-8">
        <DisclaimerBox variant="info" title="Telehealth Services">
          <p>{TELEHEALTH_NOTE}</p>
        </DisclaimerBox>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Welcome to Brilliant Minds
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            We provide comprehensive medication management and supportive therapy
            through accessible telehealth services. Our goal is to deliver
            personalized care that promotes mental well-being and resilience for
            every client we serve.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray" id="services-preview">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Our Services</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Evidence-based psychiatric care designed to support your mental health
            and overall wellness.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {HOME_SERVICES.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <Button href="/services" variant="outline">
            View All Services
          </Button>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Who We Help</h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">{AGE_RANGE}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {WHO_WE_HELP.map((group) => (
            <div
              key={group.title}
              className="text-center rounded-2xl border border-border bg-white p-6 shadow-sm"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage-light">
                <svg
                  className="h-7 w-7 text-sage"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy">{group.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">
                {group.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="beige">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Conditions We Treat
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            We provide care for a range of common mental health conditions. Individual
            treatment plans are developed collaboratively with each client.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {CONDITIONS_TREATED.map((condition) => (
            <li
              key={condition}
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-3 text-sm text-navy shadow-sm border border-border"
            >
              <svg
                className="h-4 w-4 text-sage shrink-0"
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
      </SectionWrapper>

      <SectionWrapper background="blue">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Why Choose Brilliant Minds
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {WHY_CHOOSE.map((item) => (
            <div key={item.title} className="flex gap-4 items-start">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm">
                <svg
                  className="h-5 w-5 text-soft-blue"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-1 text-muted leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper background="sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">
            Ready to Take the First Step?
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            Starting your wellness journey is a courageous decision. Request an
            appointment online or call our office — we&apos;re here to help you
            get started.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary">
              Request an Appointment
            </Button>
            <Button href="/new-clients" variant="sage">
              New Client Information
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="!py-10">
        <DisclaimerBox variant="emergency" title="Emergency Notice">
          <p>{EMERGENCY_DISCLAIMER}</p>
        </DisclaimerBox>
      </SectionWrapper>
    </>
  );
}
