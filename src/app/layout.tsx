import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: SITE.title,
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  keywords: [
    "Papa Amadou Fall",
    "IT Support Specialist",
    "Help Desk Analyst",
    "Technical Support Representative",
    "Bilingual IT Support Specialist",
    "Bilingual Technical Support Representative",
    "Customer De-escalation",
    "IT Support",
    "Help Desk",
    "Microsoft 365 Support",
    "Windows Support",
    "Level 1 Level 2 Support",
    "SaaS Support",
    "French English Support",
    "TCF Canada French",
    "Francophone Technical Support",
    "React Next.js Web Support",
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  openGraph: {
    type: "profile",
    url: SITE.url,
    title: SITE.title,
    description: SITE.description,
    siteName: SITE.name,
    locale: "en_CA",
    images: [
      {
        url: `${SITE.url}assets/papa-amadou-fall-profile-logo.svg`,
        width: 512,
        height: 512,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary",
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}assets/papa-amadou-fall-profile-logo.svg`],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Papa Amadou Fall",
  url: SITE.url,
  email: SITE.email,
  jobTitle: "Bilingual IT Support Specialist",
  telephone: SITE.phone,
  knowsLanguage: [
    { "@type": "Language", name: "French", alternateName: "fr" },
    { "@type": "Language", name: "English", alternateName: "en" },
    { "@type": "Language", name: "Wolof", alternateName: "wo" },
  ],
  sameAs: [SITE.github, SITE.linkedin],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Campbell River",
    addressRegion: "BC",
    addressCountry: "CA",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  );
}
