import Image from "next/image";
import React from 'react';
import JourneyMapTwo from '../components/JourneyMaptwo';
import InfoCard from '../components/InfoCard';
import { Monitor, Code, MousePointer2, User, Globe } from 'lucide-react';

const contactCards = [
  {
    title: "Social Links",
    icon: <Monitor size={18} strokeWidth={2} className="text-[#666]" />,
    description: "From art spaces to digital systems, I'm drawn to how form and function work together to create thoughtful design. Each project is a balance between intuition and structure.",
    pills: [
      { label: "Instagram", href: "https://www.instagram.com/vityala_yethindra/" },
      { label: "Facebook", href: "https://www.facebook.com/drvityalayethindra/" },
      { label: "Twitter", href: "https://twitter.com/yethindra001?s=09" },
      { label: "LinkedIn", href: "https://in.linkedin.com/in/dr-yethindra-vityala-a46b96192" },
    ]
  },
  {
    title: "Professional Links",
    icon: <Code size={18} strokeWidth={2} className="text-[#666]" />,
    description: "I translate design into interaction, turning ideas into responsive, living experiences through modern web technology.",
    pills: [
      { label: "Scopus" },
      { label: "Google Scholar" },
      { label: "ORCID" },
      { label: "Researchgate" },
    ]
  },
  {
    title: "Connect at",
    icon: <MousePointer2 size={18} strokeWidth={2} className="text-[#666]" />,
    description: "In a technical world, I design for clarity, transforming intricate systems into intuitive experiences grounded in logic and precision.",
      pills: [
        { label: "dryethindravityala@scivyt.com", href: "mailto:dryethindravityala@scivyt.com" },
        { label: "yethindravityala10@gmail.com", href: "mailto:yethindravityala10@gmail.com" },
        { label: "Schedule a Meet", href: "https://calendly.com/dryethindravityala/meeting", variant: 'black' as const },
      ]
  },
  {
    title: "Legalities",
    icon: <User size={18} strokeWidth={2} className="text-[#666]" />,
    description: "Quick access to the platform policies that govern privacy, usage, and intellectual property on this site.",
    pills: [
      { label: "Privacy Policy", href: "/legalities/privacy-policy" },
      { label: "Terms of Service", href: "/legalities/terms-of-service" },
      { label: "Copyright Policy", href: "/legalities/copyright-policy" },
    ]
  }
];

const listItems = [
  {
    imgSrc: "/projects/Yetzu-black.png",
    logoSrc: "/awards-logos/yetzu.png",
    logoAlt: "Yetzu",
    title: "YETZU",
    subtitle: "Ed-Tech Platform",
    quote: "AI-powered platform connecting students with global research and publishing opportunities."
  },
  {
    imgSrc: "/projects/Nationcite-black.png",
    logoSrc: "/awards-logos/nationcite.png",
    logoAlt: "Nationcite",
    title: "NATIONCITE",
    subtitle: "Research Impact Portal",
    quote: "A platform to track, measure, and showcase research impact and academic citations."
  },
  {
    imgSrc: "/projects/Vituor-black.png",
    logoSrc: "/awards-logos/vitour.png",
    logoAlt: "Vitour",
    title: "VITUOR",
    subtitle: "Journal Publishing Platform",
    quote: "Streamlined journal publishing workflow with peer review, editing, and submission management."
  },
  {
    imgSrc: "/projects/BeentuAI-black.png",
    logoSrc: "/awards-logos/bentu.png",
    logoAlt: "Bentu AI",
    title: "BEENTU AI",
    subtitle: "Research AI Tools",
    quote: "AI-driven research assistant tools for literature review, data analysis, and academic writing."
  },
  {
    imgSrc: "/projects/SubmitRight-black.png",
    logoSrc: "/awards-logos/submit-right.png",
    logoAlt: "Submit Right",
    title: "SUBMIT RIGHT",
    subtitle: "Journal Publication Services Portal",
    quote: "End-to-end journal publication services from manuscript preparation to submission tracking."
  }
];

export default function Contact() {
  return (
    <>
    <div className="flex-1 w-full p-2 md:p-2.5 lg:p-3 pb-6 md:pb-6 lg:pb-3 flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:h-screen lg:min-h-screen lg:max-h-screen lg:overflow-hidden">
      <h1 className="vit-page-title text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[34px] font-light tracking-tight text-[#111] px-2 mb-1 sm:mb-2">
        Contact
      </h1>

      <div className="grid flex-1 min-h-0 h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_minmax(0,1fr)] gap-2 sm:gap-3 lg:gap-4 items-stretch">
        {/* === TOP ROW CARDS === */}
        {contactCards.map((card, idx) => (
          <InfoCard
            key={idx}
            title={card.title}
            icon={card.icon}
            description={card.description}
            pills={card.pills}
            pillStyle="white"
            compact
            dense
            className="min-h-0"
          />
        ))}

        {/* === BOTTOM SECTION === */}
        {/* Left 3 Columns: Map */}
        <div className="contact-large-screen-card sm:col-span-2 lg:col-span-3 lg:row-start-2 bg-[#18181A] rounded-[16px] p-3 sm:p-4 relative overflow-hidden text-white flex flex-col min-h-[360px] sm:min-h-[400px] lg:h-full lg:min-h-0">
          <div className="flex items-center gap-2 text-[#A0A0A5] font-medium text-[10px] sm:text-xs tracking-wider mb-3 sm:mb-4 z-10 w-fit">
            <Globe size={12} className="sm:w-[14px] sm:h-[14px] text-[#A0A0A5]" strokeWidth={2} />
            MY EXPERIENCE
          </div>

          {/* Map wrapper matching home page (absolute) - left section unchanged */}
          <div className="absolute inset-x-0 bottom-0 top-10 sm:top-12 lg:top-14 opacity-80 pointer-events-auto overflow-hidden">
            <JourneyMapTwo compact />
          </div>
        </div>

        {/* Right 1 Column: List Items */}
        <div data-lenis-prevent="true" className="contact-large-screen-list sm:col-span-2 lg:col-span-1 lg:row-start-2 min-h-0 lg:h-full lg:max-h-full lg:pr-1">
          <div className="contact-list-fill px-0 sm:px-0 lg:px-1">
            {listItems.map((item, idx) => (
              <ListItem
                key={idx}
                imgSrc={item.imgSrc}
                logoSrc={item.logoSrc}
                logoAlt={item.logoAlt}
                title={item.title}
                subtitle={item.subtitle}
                quote={item.quote}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
    </>
  );
}
const ListItem = ({ imgSrc, logoSrc, logoAlt, title, subtitle, quote }: { imgSrc?: string, logoSrc?: string, logoAlt?: string, title: string, subtitle: string, quote: string }) => (
  <div className="bg-[#FFFFFF] rounded-[14px] p-2.5 sm:p-3 lg:p-3 shadow-sm flex gap-2.5 sm:gap-3 lg:gap-3 items-start border border-black/5 hover:shadow-md transition-shadow">
    <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-lg bg-white flex items-center justify-center shrink-0 overflow-hidden">
      <Image
        src={imgSrc || logoSrc || "/projects/Yetzu-black.png"}
        alt={logoAlt || title}
        width={36}
        height={36}
        className="h-full w-full object-contain p-0.5"
      />
    </div>
    <div className="flex flex-col flex-1 min-w-0">
      <h4 className="text-[#111] text-[9.5px] sm:text-[10.5px] lg:text-[11px] leading-tight mb-1 sm:mb-1.5 tracking-wide">{title}</h4>
      <span className="text-[7.5px] sm:text-[8.5px] lg:text-[8.5px] text-gray-400 mb-1 sm:mb-1 leading-tight">{subtitle}</span>
      <p className="text-[7.5px] sm:text-[8.5px] lg:text-[9px] text-gray-600 leading-[1.35]">{quote}</p>
    </div>
  </div>
);