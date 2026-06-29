import Link from "next/link";
import {
  NAV_LINKS,
  SITE,
  FOOTER_EMERGENCY,
  BUSINESS_DESCRIPTION,
  TELEHEALTH_NOTE,
} from "@/lib/constants";
import { SiteLogo } from "@/components/layout/SiteLogo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <SiteLogo variant="footer" />
            <p className="text-sm text-white/60 mt-4 leading-relaxed line-clamp-4">
              {BUSINESS_DESCRIPTION.slice(0, 160)}…
            </p>
            <p className="text-xs text-white/50 mt-3 leading-relaxed">
              {TELEHEALTH_NOTE}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Navigation
            </h2>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Contact
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="pt-2 leading-relaxed">{SITE.address.street}</li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white/80 mb-4">
              Business Hours
            </h2>
            <ul className="space-y-2 text-sm text-white/70">
              {SITE.hours.map((h) => (
                <li key={h.days}>
                  <span className="font-medium text-white/80">{h.days}:</span>{" "}
                  {h.time}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs text-white/50 leading-relaxed">
            {FOOTER_EMERGENCY}
          </p>
          <p className="text-xs text-white/50 leading-relaxed">
            This website is a public informational resource and does not collect
            or store protected health information. Secure client features may be
            added through a HIPAA-compliant platform in the future.
          </p>
          <p className="text-xs text-white/40">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
