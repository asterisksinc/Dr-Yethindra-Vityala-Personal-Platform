import { notFound } from "next/navigation";
import LegalDocumentPage from "../../components/LegalDocumentPage";

type LegalSection = {
  heading: string;
  paragraphs: string[];
  items?: string[];
};

type LegalDocument = {
  title: string;
  lastUpdated: string;
  intro: string;
  contactEmail: string;
  contactName: string;
  sections: LegalSection[];
};

const documents: Record<string, LegalDocument> = {
  "privacy-policy": {
    title: "Privacy Policy",
    lastUpdated: "Effective Date: May 4, 2026",
    intro:
      "This policy explains what we collect, how we use it, and the protections in place for professional contact and collaboration data.",
    contactEmail: "yethindravityala10@gmail.com",
    contactName: "Dr. Yethindra Vityala",
    sections: [
      {
        heading: "Our Commitment",
        paragraphs: [
          'Dr. Yethindra Vityala’s portfolio platform ("we," "us," "our") is dedicated to transparency, integrity, and the rigorous protection of data entrusted to us. As a medical researcher, I recognize that privacy is foundational to scientific trust and professional collaboration.',
        ],
      },
      {
        heading: "Information We Collect",
        paragraphs: [
          "We collect minimal information necessary for professional engagement and research development:",
        ],
        items: [
          "Contact Information: Name, email, and affiliation provided via contact or collaboration forms.",
          "Engagement Data: Analytics on site traffic and research resource interaction to improve platform utility.",
          "Professional Inquiries: Information shared for mentorship, speaking, or research inquiry purposes.",
        ],
      },
      {
        heading: "How We Use Your Data",
        paragraphs: ["Data is processed lawfully for:"],
        items: [
          "Communication: Responding to professional inquiries, collaboration requests, and mentorship applications.",
          "Platform Optimization: Enhancing information architecture and access to research publications.",
          "Security: Maintaining site integrity and protecting against unauthorized access.",
        ],
      },
      {
        heading: "Data Protection Standards",
        paragraphs: [
          "Adhering to medical and institutional research best practices, we implement:",
        ],
        items: [
          "Secure Infrastructure: Standard encryption for data transmission and storage.",
          "Minimalism: Limiting data retention to what is necessary for the stated purpose.",
          "Integrity: Ensuring the accuracy and consistency of professional data shared on this platform.",
        ],
      },
      {
        heading: "Third-Party Sharing",
        paragraphs: [
          "We do not sell, trade, or rent personal identification information. We may share information only when:",
        ],
        items: [
          "Required by mandatory professional or legal standards.",
          "Required to enforce our terms of use or protect our rights.",
          "You have provided explicit consent for a specific collaboration or referral.",
        ],
      },
      {
        heading: "Security Limitations",
        paragraphs: [
          "While we utilize industry-standard measures (SSL, firewalls, secure hosting), no digital transmission is 100% secure. By using this site, you acknowledge that information voluntarily displayed or distributed may be subject to unauthorized third-party collection, for which we are not responsible.",
        ],
      },
      {
        heading: "Your Rights",
        paragraphs: [
          "You retain the right to access the information we hold about you, request correction or deletion of your professional contact data, and withdraw consent for newsletters or future engagement communications.",
        ],
      },
    ],
  },
  "terms-of-service": {
    title: "Terms of Service",
    lastUpdated: "Last Updated: May 4, 2026",
    intro: "Please read these terms carefully before using the platform.",
    contactEmail: "yethindravityala10@gmail.com",
    contactName: "Dr. Yethindra Vityala",
    sections: [
      {
        heading: "Acceptance of Terms",
        paragraphs: [
          "By accessing or using this website (dryethindravityala.com and any subdomains), you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of this platform immediately.",
        ],
      },
      {
        heading: "Platform Purpose",
        paragraphs: [
          "This website is a professional portfolio intended to provide information about Dr. Yethindra Vityala’s medical research, academic background, and professional initiatives. Content is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment.",
        ],
      },
      {
        heading: "Intellectual Property",
        paragraphs: [
          "All content, including research papers, design architecture, and written text, is owned by Dr. Yethindra Vityala. You may view and share content for non-commercial, educational purposes with appropriate attribution, but you are strictly prohibited from reproducing, distributing, or commercializing any content without express written consent.",
        ],
      },
      {
        heading: "User Conduct",
        paragraphs: [
          "By using this platform, you agree not to use the site for any unlawful or unauthorized purpose, attempt to bypass or interfere with site security, engage in data scraping or automated collection, or post any threatening, harassing, or defamatory content.",
        ],
      },
      {
        heading: "Limitation of Liability",
        paragraphs: [
          'The information provided on this platform is provided "as-is" without warranties of any kind, either express or implied. Dr. Yethindra Vityala is not liable for any damages including direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on the information contained herein.',
        ],
      },
      {
        heading: "External Links",
        paragraphs: [
          "This platform may contain links to external third-party sites such as medical journals or news archives. We have no control over the content or practices of these external sites and accept no responsibility for them.",
        ],
      },
      {
        heading: "Modifications",
        paragraphs: [
          "We reserve the right to modify these terms at any time. Your continued use of the platform following any changes constitutes your acceptance of the updated Terms of Service.",
        ],
      },
      {
        heading: "Governing Law",
        paragraphs: [
          "These terms are governed by the laws of India. Any disputes arising from the use of this platform shall be subject to the exclusive jurisdiction of the courts located in Hyderabad, Telangana.",
        ],
      },
    ],
  },
  "copyright-policy": {
    title: "Copyright & Intellectual Property Policy",
    lastUpdated: "Last Updated: May 4, 2026",
    intro:
      "This policy sets the rules for how the platform's original work may be accessed, shared, and reused.",
    contactEmail: "yethindravityala10@gmail.com",
    contactName: "Office of Dr. Yethindra Vityala",
    sections: [
      {
        heading: "Ownership of Content",
        paragraphs: [
          "All content presented on this platform including, but not limited to, research manuscripts, medical data analysis, awards, campaigns, photographic assets, written articles, and audiovisual materials is the exclusive intellectual property of Dr. Yethindra Vityala, unless explicitly stated otherwise.",
        ],
      },
      {
        heading: "Intellectual Property Rights",
        paragraphs: [
          "As the creator and author, Dr. Yethindra Vityala retains all rights to the intellectual property displayed on this site. This protection is afforded under international copyright laws, including but not limited to the Copyright Act, 1957 (India), and relevant global treaties.",
        ],
      },
      {
        heading: "Permitted Usage",
        paragraphs: [
          "Visitors may access and view the content on this platform for personal, non-commercial, and educational purposes. You are granted a limited, revocable, non-exclusive license to link to this site or share links provided that clear attribution is given to the author, Dr. Yethindra Vityala, and the content is not altered, modified, or presented in a misleading context.",
        ],
      },
      {
        heading: "Prohibited Acts",
        paragraphs: [
          "Without the express written permission of Dr. Yethindra Vityala, you are strictly prohibited from reproducing or republishing content for commercial gain, modifying or creating derivative works based on the platform's proprietary design or research archives, or using automated scripts, scrapers, or bots to harvest data or content from this platform.",
        ],
      },
      {
        heading: "Third-Party Content and Citations",
        paragraphs: [
          "While most original research is owned by Dr. Vityala, this platform may contain references to third-party publications or academic studies. All such materials are properly cited in accordance with academic integrity standards. Rights to these third-party materials remain with their respective original creators or publishers.",
        ],
      },
      {
        heading: "Requests for Permissions",
        paragraphs: [
          "For inquiries regarding the licensing, reproduction, or use of any intellectual property found on this platform, please contact us directly.",
        ],
      },
    ],
  },
};

type LegalSlug = keyof typeof documents;

export function generateStaticParams() {
  return Object.keys(documents).map((slug) => ({ slug }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const document = documents[slug as LegalSlug];

  if (!document) {
    notFound();
  }

  return (
    <LegalDocumentPage
      title={document.title}
      lastUpdated={document.lastUpdated}
      intro={document.intro}
      sections={document.sections}
      contactEmail={document.contactEmail}
      contactName={document.contactName}
    />
  );
}
