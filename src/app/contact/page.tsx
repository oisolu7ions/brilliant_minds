import type { Metadata } from "next";
import PageTitle from "@/components/ui/PageTitle";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ContactForm from "@/components/ui/ContactForm";
import DisclaimerBox from "@/components/ui/DisclaimerBox";
import {
  SITE,
  EMERGENCY_DISCLAIMER,
  TELEHEALTH_NOTE,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Brilliant Minds Mental Health and Wellness, PLLC to request a telehealth appointment or ask general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageTitle
        title="Contact Us"
        subtitle="Request a telehealth appointment or reach out with general inquiries. We're here to help you get started."
      />

      <SectionWrapper background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">
              Get in Touch
            </h2>
            <div className="mb-6">
              <DisclaimerBox variant="info">
                <p>{TELEHEALTH_NOTE}</p>
              </DisclaimerBox>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft-blue-light">
                  <svg
                    className="h-6 w-6 text-soft-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-soft-blue hover:underline mt-1 block"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft-blue-light">
                  <svg
                    className="h-6 w-6 text-soft-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <a
                    href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                    className="text-soft-blue hover:underline mt-1 block"
                  >
                    {SITE.phone}
                  </a>
                  <p className="text-sm text-muted mt-1">
                    Call to request an appointment
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft-blue-light">
                  <svg
                    className="h-6 w-6 text-soft-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-1.64 1.64a6 6 0 01-1.676 2.257l-.319 1.913M6.115 5.19A14.5 14.5 0 0112 3c3.042 0 5.824 1.135 7.885 3.19M6.115 5.19l-2.28 2.28M17.885 18.81A14.5 14.5 0 0112 21c-3.042 0-5.824-1.135-7.885-3.19M17.885 18.81l2.28 2.28M17.885 18.81l-2.28-2.28M6.115 5.19l2.28 2.28"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Service Delivery</h3>
                  <p className="text-muted mt-1 leading-relaxed">
                    {SITE.address.street}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-soft-blue-light">
                  <svg
                    className="h-6 w-6 text-soft-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Business Hours</h3>
                  <ul className="text-muted mt-1 space-y-1">
                    {SITE.hours.map((h) => (
                      <li key={h.days}>
                        <span className="font-medium">{h.days}:</span> {h.time}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-2">
              Request an Appointment
            </h2>
            <p className="text-muted mb-6 leading-relaxed">
              Use the form below to request an appointment or send a general
              inquiry. An online booking link and client portal are coming soon.
            </p>
            <ContactForm />
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper background="gray">
        <div className="max-w-3xl mx-auto">
          <DisclaimerBox variant="emergency" title="Emergency Notice">
            <p>{EMERGENCY_DISCLAIMER}</p>
          </DisclaimerBox>
        </div>
      </SectionWrapper>
    </>
  );
}
