"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/lib/constants";
import Button from "@/components/ui/Button";
import { SiteLogo } from "@/components/layout/SiteLogo";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Header bar — always above mobile menu layers */}
      <div className="relative z-[60] bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 md:h-24 items-center justify-between gap-3">
            <SiteLogo />

            <nav
              className="hidden lg:flex items-center gap-2"
              aria-label="Main navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-3 rounded-lg text-base font-semibold transition-colors ${
                      isActive
                        ? "text-soft-blue bg-soft-blue-light"
                        : "text-foreground hover:text-soft-blue hover:bg-gray-light"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden lg:block shrink-0">
              <Button
                href="/contact"
                variant="primary"
                className="text-base px-6 py-3"
              >
                Request Appointment
              </Button>
            </div>

            <button
              type="button"
              className="lg:hidden relative z-[61] shrink-0 inline-flex items-center justify-center rounded-lg min-h-11 min-w-11 p-2 text-navy hover:bg-gray-light active:bg-gray-section touch-manipulation cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-blue"
              onClick={() => setMobileOpen((open) => !open)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? (
                <svg
                  className="h-6 w-6 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 pointer-events-none"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — rendered below header bar, never over the hamburger */}
      {mobileOpen && (
        <>
          <button
            type="button"
            className="lg:hidden fixed inset-0 top-20 md:top-24 z-[55] bg-navy/20 cursor-default"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
          <div
            id="mobile-menu"
            className="lg:hidden fixed inset-x-0 top-20 md:top-24 z-[58] max-h-[calc(100dvh-5rem)] md:max-h-[calc(100dvh-6rem)] overflow-y-auto bg-white border-b border-border shadow-lg"
          >
            <nav className="px-4 py-6 space-y-1" aria-label="Mobile navigation">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-5 py-4 rounded-lg text-lg font-semibold transition-colors ${
                      isActive
                        ? "text-soft-blue bg-soft-blue-light"
                        : "text-foreground hover:bg-gray-light active:bg-gray-section"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-4 px-4">
                <Button href="/contact" variant="primary" className="w-full">
                  Request Appointment
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
