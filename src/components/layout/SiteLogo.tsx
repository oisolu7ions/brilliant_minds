"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";

const LOGO = {
  src: "/logo.png",
  width: 440,
  height: 445,
} as const;

export function SiteLogo({ variant = "header" }: { variant?: "header" | "footer" }) {
  const isFooter = variant === "footer";

  return (
    <Link
      href="/"
      className="flex items-center shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-blue rounded-sm"
    >
      <Image
        src={LOGO.src}
        alt={`${SITE.name} logo`}
        width={LOGO.width}
        height={LOGO.height}
        className={`object-contain shrink-0 max-w-[140px] sm:max-w-none ${
          isFooter ? "h-14 md:h-16 w-auto" : "h-14 sm:h-16 md:h-[88px] lg:h-24 w-auto"
        }`}
        priority={!isFooter}
      />
    </Link>
  );
}
