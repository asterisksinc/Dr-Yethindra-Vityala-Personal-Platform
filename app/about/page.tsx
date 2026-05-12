import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title:
    "About Dr. Yethindra Vityala | Physician, Researcher, 100+ Publications",
  description:
    "Learn about Dr. Yethindra Vityala: MBBS MD MPH MBA, Associate Professor, founder Scivyt Research, 100 PhD mentored, global health innovator from Warangal to Bishkek.",
  keywords: [
    "Dr. Yethindra Vityala",
    "Dr Yethindra Vityala biography",
    "physician researcher Kyrgyzstan",
    "medical professor awards",
    "MBBS MD MPH MBA",
    "Associate Professor",
    "Scivyt Research",
    "100 PhD mentored",
    "global health innovator",
    "Oncology",
    "Infectious Diseases",
    "100+ peer-reviewed publications",
  ],
  openGraph: {
    title:
      "About Dr. Yethindra Vityala | Physician, Researcher, 100+ Publications",
    description:
      "Explore the journey of Dr. Yethindra Vityala, a physician-researcher with 100+ publications, global awards, and international academic impact.",
    url: "/about",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Dr. Yethindra Vityala | Physician, Researcher, 100+ Publications",
    description:
      "Physician, researcher, founder, and Associate Professor with 100+ publications and global recognition.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPageClient />;
}
