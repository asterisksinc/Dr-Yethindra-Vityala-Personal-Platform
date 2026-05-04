import LegalDocumentPage from "../components/LegalDocumentPage";

export const metadata = {
  title: "Copyright Policy | Dr. Yethindra Vityala",
  description: "Copyright and intellectual property policy for Dr. Yethindra Vityala's portfolio platform.",
};

const sections = [
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
];

export default function Page() {
  return (
    <LegalDocumentPage
      title="Copyright & Intellectual Property Policy"
      lastUpdated="Last Updated: May 4, 2026"
      intro="This policy sets the rules for how the platform's original work may be accessed, shared, and reused."
      sections={sections}
      contactEmail="yethindravityala10@gmail.com"
      contactName="Office of Dr. Yethindra Vityala"
    />
  );
}
