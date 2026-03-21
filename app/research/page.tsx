import Image from "next/image";
import "./research-publications.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Yethindra Vityala",
  description:
    "Explore 100+ peer-reviewed publications, books, and global research contributions by Dr. Yethindra Vityala across cardiology, neurology, infectious diseases, and public health, driving evidence-based healthcare innovation.",
  keywords: [
    "Dr. Yethindra Vityala research",
    "medical publications",
    "peer-reviewed articles",
    "medical research papers",
    "research publications",
    "cardiology research",
    "neurology research",
    "infectious diseases research",
    "public health research",
    "translational research",
    "drug repurposing",
    "pharmacovigilance",
    "global collaborations",
    "medical books",
  ],
  openGraph: {
    title: "Research & Publications | Dr. Yethindra Vityala",
    description:
      "Discover 100+ peer-reviewed publications, books, and impactful medical research by Dr. Yethindra Vityala across multiple disciplines and global collaborations.",
    url: "/research-publications",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Publications | Dr. Yethindra Vityala",
    description:
      "100+ publications, books, and global research contributions in cardiology, neurology, infectious diseases, and public health.",
  },
  alternates: {
    canonical: "/research-publications",
  },
};
import ResearchPageClient from "./ResearchPageClient";

export default function ResearchPublications() {
  return <ResearchPageClient />;
}