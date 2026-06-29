"use client";

import { useState, type FormEvent } from "react";
import Button from "./Button";
import DisclaimerBox from "./DisclaimerBox";
import { CONTACT_FORM_DISCLAIMER, EMERGENCY_DISCLAIMER } from "@/lib/constants";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end only — no data is stored or transmitted.
    // TODO: Connect to a secure form handler or email service when ready.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage-light p-8 text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-sage/20">
          <svg
            className="h-7 w-7 text-sage"
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
        </div>
        <h3 className="text-xl font-bold text-navy">Thank You</h3>
        <p className="mt-2 text-muted leading-relaxed">
          Your message has been received. Our team will respond to your inquiry
          as soon as possible. Please note: this form does not store your
          information — connect a backend handler to process submissions.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 text-soft-blue font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-blue"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <DisclaimerBox variant="warning" title="Important Notice">
        <p>{CONTACT_FORM_DISCLAIMER}</p>
        <p className="mt-3 font-medium">{EMERGENCY_DISCLAIMER}</p>
      </DisclaimerBox>

      <form onSubmit={handleSubmit} className="space-y-5" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
              Name <span className="text-soft-blue">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              autoComplete="name"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20 transition-colors"
              placeholder="Your full name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
              Email <span className="text-soft-blue">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20 transition-colors"
              placeholder="(555) 123-4567"
            />
          </div>
          <div>
            <label htmlFor="contact-method" className="block text-sm font-semibold text-navy mb-1.5">
              Preferred Contact Method
            </label>
            <select
              id="contact-method"
              name="contact-method"
              className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20 transition-colors"
              defaultValue=""
            >
              <option value="" disabled>
                Select a method
              </option>
              <option value="email">Email</option>
              <option value="phone">Phone</option>
              <option value="either">Either</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
            General Message <span className="text-soft-blue">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            className="w-full rounded-lg border border-border bg-white px-4 py-3 text-foreground placeholder:text-muted/60 focus:border-soft-blue focus:ring-2 focus:ring-soft-blue/20 transition-colors resize-y"
            placeholder="How can we help you? Please keep your message general — do not include medical details."
          />
        </div>

        <Button type="submit" variant="primary" className="w-full sm:w-auto">
          Send Message
        </Button>
      </form>
    </div>
  );
}
