import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Button from "@/components/ui/Button";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import FAQPlaceholder from "@/components/ui/FAQPlaceholder";
import {
  NEW_CLIENT_STEPS,
  INTAKE_FORMS_NOTE,
  EMERGENCY_DISCLAIMER,
  FIRST_APPOINTMENT,
  INSURANCE_PROVIDERS,
  PRIVATE_PAY_TITLE,
  SELF_PAY_RATE_SECTIONS,
  PAYMENT_POLICIES,
  TELEHEALTH_NOTE,
  SITE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Clients",
  description:
    "Information for new clients — scheduling, insurance, self-pay rates, and what to expect at your first appointment.",
};

export default function NewClientsPage() {
  return (
    <>
      <PageTitle
        title="New Clients"
        subtitle="Welcome! We're glad you're here. Here's what you need to know to get started."
      />

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Welcome, New Clients
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            Taking the first step toward mental health support is a meaningful
            decision. At Brilliant Minds Mental Health and Wellness, PLLC, we
            strive to make your experience as welcoming and straightforward as
            possible.
          </p>
          <div className="mt-6">
            <DisclaimerBox variant="info">
              <p>{TELEHEALTH_NOTE}</p>
            </DisclaimerBox>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-10">
            What to Expect
          </h2>
          <div className="space-y-6">
            {NEW_CLIENT_STEPS.map((step) => (
              <div
                key={step.step}
                className="flex gap-5 items-start rounded-2xl bg-white p-6 shadow-sm border border-border"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-soft-blue text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>
                  <p className="mt-1 text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Your First Appointment
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            {FIRST_APPOINTMENT}
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper background="beige">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            How to Schedule
          </h2>
          <p className="mt-6 text-lg text-muted leading-relaxed">
            New clients can book appointments in two ways: by clicking the link
            below to request an appointment, or by calling our office at{" "}
            <a
              href={`tel:${SITE.phone.replace(/\D/g, "")}`}
              className="text-soft-blue font-medium hover:underline"
            >
              {SITE.phone}
            </a>
            . An online booking link and client portal are coming soon.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="primary">
              Request an Appointment
            </Button>
            <Button
              href={`tel:${SITE.phone.replace(/\D/g, "")}`}
              variant="outline"
            >
              Call the Office
            </Button>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Insurance
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              We accept the following insurance providers. Additional plans may
              be added — contact our office for the most current information.
            </p>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {INSURANCE_PROVIDERS.map((provider) => (
                <li
                  key={provider}
                  className="flex items-center gap-2 rounded-lg bg-gray-section px-4 py-3 text-navy"
                >
                  <svg
                    className="h-4 w-4 text-soft-blue shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                  {provider}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-muted italic">
              More insurance panels to come.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              {PRIVATE_PAY_TITLE}
            </h2>
            <p className="mt-4 text-muted leading-relaxed">
              Private pay options are available for telepsychiatry and
              face-to-face services. Current rates are listed below.
            </p>

            <div className="mt-6 space-y-8">
              {SELF_PAY_RATE_SECTIONS.map((section) => (
                <div key={section.category}>
                  <h3 className="text-lg font-bold text-navy mb-3">
                    {section.category}
                  </h3>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gray-section">
                          <th className="px-5 py-3 text-sm font-semibold text-navy">
                            Service
                          </th>
                          <th className="px-5 py-3 text-sm font-semibold text-navy hidden sm:table-cell">
                            Duration / Notes
                          </th>
                          <th className="px-5 py-3 text-sm font-semibold text-navy">
                            Rate
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {section.rates.map((rate) => (
                          <tr key={rate.service} className="bg-white">
                            <td className="px-5 py-4 text-sm text-navy font-medium">
                              {rate.service}
                              {rate.duration && (
                                <span className="block sm:hidden text-xs text-muted font-normal mt-0.5">
                                  {rate.duration}
                                </span>
                              )}
                            </td>
                            <td className="px-5 py-4 text-sm text-muted hidden sm:table-cell">
                              {rate.duration || "—"}
                            </td>
                            <td className="px-5 py-4 text-sm text-navy font-semibold">
                              {rate.price}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-navy">
              Payment Policies
            </h2>
            <ul className="mt-4 space-y-3">
              {PAYMENT_POLICIES.map((policy) => (
                <li key={policy} className="flex items-start gap-3 text-muted">
                  <svg
                    className="h-5 w-5 text-soft-blue shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                  {policy}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Intake Forms & Client Portal
          </h2>
          <DisclaimerBox variant="warning" title="Important Information">
            <p>{INTAKE_FORMS_NOTE}</p>
          </DisclaimerBox>
        </div>
      </SectionWrapper>

      <SectionWrapper background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-navy text-center mb-8">
            Frequently Asked Questions
          </h2>
          <FAQPlaceholder />
        </div>
      </SectionWrapper>

      <SectionWrapper background="white" className="!pt-0">
        <div className="max-w-3xl mx-auto">
          <DisclaimerBox variant="emergency" title="Emergency Notice">
            <p>{EMERGENCY_DISCLAIMER}</p>
          </DisclaimerBox>
        </div>
      </SectionWrapper>

      <SectionWrapper background="sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-muted leading-relaxed">
            We look forward to welcoming you. Request an appointment today to
            begin your wellness journey.
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
