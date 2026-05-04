import LegalDocumentPage from "../components/LegalDocumentPage";

export const metadata = {
  title: "Terms of Service | Dr. Yethindra Vityala",
  description: "Terms of Service for Dr. Yethindra Vityala's portfolio platform.",
};

const sections = [
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
      "The information provided on this platform is provided \"as-is\" without warranties of any kind, either express or implied. Dr. Yethindra Vityala is not liable for any damages including direct, indirect, incidental, or consequential damages arising from your use of this site or reliance on the information contained herein.",
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
];

export default function Page() {
  return (
    <LegalDocumentPage
      title="Terms of Service"
      lastUpdated="Last Updated: May 4, 2026"
      intro="Please read these terms carefully before using the platform."
      sections={sections}
      contactEmail="yethindravityala10@gmail.com"
      contactName="Dr. Yethindra Vityala"
    />
  );
}
