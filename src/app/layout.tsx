import type { Metadata } from "next";
import { DM_Sans, Source_Sans_3 } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: {
    default: "Brilliant Minds Mental Health and Wellness, PLLC",
    template: "%s | Brilliant Minds Mental Health and Wellness",
  },
  description:
    "Telehealth psychiatric care including medication management and supportive therapy for individuals aged 15 to 64.",
  metadataBase: new URL("https://brilliantmindsmhw.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sourceSans.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased text-foreground bg-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
