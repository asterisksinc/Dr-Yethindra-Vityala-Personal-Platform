import type { Metadata } from "next";
import "./research-publications.css";
import ResearchPageClient from "./ResearchPageClient";

export const metadata: Metadata = {
  title:
    "Research & Publications by Dr. Yethindra Vityala | PMC, Oncology, TB",
  description:
    "Browse 100+ peer-reviewed publications by Dr. Yethindra Vityala, including Naegleria fowleri vaccine research, COVID-19 heparin studies, Hodgkin lymphoma toxicity, and DOI-linked work across PMC, Scopus, and Google Scholar.",
  keywords: [
    "Yethindra Vityala publications",
    "Naegleria vaccine research",
    "oncology case reports PubMed",
    "TB neonate studies",
    "Dr. Yethindra Vityala research",
    "medical publications",
    "peer-reviewed articles",
    "research publications",
    "PMC oncology",
    "Scopus",
    "Google Scholar",
    "100+ publications",
  ],
  openGraph: {
    title:
      "Research & Publications by Dr. Yethindra Vityala | PMC, Oncology, TB",
    description:
      "Discover 100+ peer-reviewed publications, books, and impactful medical research by Dr. Yethindra Vityala across multiple disciplines and global collaborations.",
    url: "/research-publications",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Research & Publications by Dr. Yethindra Vityala | PMC, Oncology, TB",
    description:
      "100+ publications, books, and global research contributions in oncology, infectious diseases, and public health.",
  },
  alternates: {
    canonical: "/research-publications",
  },
};

export default function ResearchPublications() {
  return <ResearchPageClient />;
}
