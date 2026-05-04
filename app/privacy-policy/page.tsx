import LegalDocumentPage from "../components/LegalDocumentPage";

export const metadata = {
  title: "Privacy Policy | Dr. Yethindra Vityala",
  description: "Privacy Policy for Dr. Yethindra Vityala's portfolio platform.",
};

const sections = [
  {
    heading: "Our Commitment",
    paragraphs: [
      "Dr. Yethindra Vityala’s portfolio platform (\"we,\" \"us,\" \"our\") is dedicated to transparency, integrity, and the rigorous protection of data entrusted to us. As a medical researcher, I recognize that privacy is foundational to scientific trust and professional collaboration.",
    ],
  },
  {
    heading: "Information We Collect",
    paragraphs: [
      "We collect minimal information necessary for professional engagement and research development:",
    ],
    items: [
      "Contact information: name, email, and affiliation provided via contact or collaboration forms.",
      "Engagement data: analytics on site traffic and research resource interaction to improve platform utility.",
      "Professional inquiries: information shared for mentorship, speaking, or research inquiry purposes.",
    ],
  },
  {
    heading: "How We Use Your Data",
    paragraphs: [
      "Data is processed lawfully for communication, platform optimization, and security.",
    ],
    items: [
      "Communication: responding to professional inquiries, collaboration requests, and mentorship applications.",
      "Platform optimization: enhancing information architecture and access to research publications.",
      "Security: maintaining site integrity and protecting against unauthorized access.",
    ],
  },
  {
    heading: "Data Protection Standards",
    paragraphs: [
      "Adhering to medical and institutional research best practices, we implement secure infrastructure, minimal retention, and accuracy controls for professional data shared on this platform.",
    ],
    items: [
      "Secure infrastructure: standard encryption for data transmission and storage.",
      "Minimalism: limiting data retention to what is necessary for the stated purpose.",
      "Integrity: ensuring the accuracy and consistency of professional data shared on this platform.",
    ],
  },
  {
    heading: "Third-Party Sharing",
    paragraphs: [
      "We do not sell, trade, or rent personal identification information. We may share information only when required by mandatory professional or legal standards, required to enforce our terms of use or protect our rights, or where you have provided explicit consent for a specific collaboration or referral.",
    ],
  },
  {
    heading: "Security Limitations",
    paragraphs: [
      "While we utilize industry-standard measures such as SSL, firewalls, and secure hosting, no digital transmission is 100% secure. By using this site, you acknowledge that information voluntarily displayed or distributed may be subject to unauthorized third-party collection, for which we are not responsible.",
    ],
  },
  {
    heading: "Your Rights",
    paragraphs: [
      "You retain the right to access the information we hold about you, request correction or deletion of your professional contact data, and withdraw consent for newsletters or future engagement communications.",
    ],
  },
];

export default function Page() {
  return (
    <LegalDocumentPage
      title="Privacy Policy"
      lastUpdated="Effective Date: May 4, 2026"
      intro="This policy explains what we collect, how we use it, and the protections in place for professional contact and collaboration data."
      sections={sections}
      contactEmail="yethindravityala10@gmail.com"
      contactName="Dr. Yethindra Vityala"
    />
  );
}
