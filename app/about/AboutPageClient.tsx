import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title:
    "About Dr. Yethindra Vityala | Physician, Researcher & Global Innovator",
  description:
    "Learn about Dr. Yethindra Vityala, MBBS MD MPH MBA — physician, researcher, and global innovator with 100+ peer-reviewed publications, 12 world records, and impact across 10+ countries in clinical practice, research, and public health advocacy.",
  keywords: [
    "Dr. Yethindra Vityala",
    "Physician",
    "Researcher",
    "Global Innovator",
    "Medical Researcher",
    "Public Health Advocate",
    "Endocrinology",
    "Neurology",
    "Oncology",
    "Infectious Diseases",
    "Public Health",
    "100+ peer-reviewed publications",
    "12 world records",
  ],
  openGraph: {
    title:
      "About Dr. Yethindra Vityala | Physician, Researcher & Global Innovator",
    description:
      "Explore the journey of Dr. Yethindra Vityala — physician, researcher, and public health advocate with 100+ peer-reviewed publications, 12 world records, and international impact across 10+ countries.",
    url: "/about",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Dr. Yethindra Vityala | Physician, Researcher & Global Innovator",
    description:
      "Physician, researcher, and public health advocate with 100+ publications, 12 world records, and global impact across 10+ countries.",
  },
  alternates: {
    canonical: "/about",
  },
};

export default function Page() {
  return <AboutPageClient />;
}