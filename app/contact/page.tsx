import Head from "next/head";
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
    logoSrc: "/awards-logos/yetzu.png",
    logoAlt: "Yetzu",
    title: "YETZU",
    subtitle: "Ed-Tech Platform",
    quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind."
  },
  {
    logoSrc: "/awards-logos/nationcite.png",
    logoAlt: "Nationcite",
    title: "NATIONCITE",
    subtitle: "Research Impact Portal",
    quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind."
  },
  {
    logoSrc: "/awards-logos/vitour.png",
    logoAlt: "Vitour",
    title: "VITUOR",
    subtitle: "Journal Publishing Platform",
    quote: "I appreciated how Michele asked thoughtful questions and had a knack for spotting potential issues earlier rather than later."
  },
  {
    logoSrc: "/awards-logos/bentu.png",
    logoAlt: "Bentu AI",
    title: "BEENTU AI",
    subtitle: "Research AI Tools",
    quote: "She is especially good at communication and facilitates discussion between teams."
  },
  {
    logoSrc: "/awards-logos/submit-right.png",
    logoAlt: "Submit Right",
    title: "SUBMIT RIGHT",
    subtitle: "Journal Publication Services Portal",
    quote: "Michele has a good eye for visuals and nicely developed sense of design."
  }
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Dr. Yethindra Vityala | Research Collaboration & Mentorship</title>
        <meta
          name="description"
          content="Connect with Dr. Yethindra Vityala for research collaborations, speaking, or mentorship. Scivyt Research CEO email yethindravityala10@gmail.com."
        />
        <meta
          name="keywords"
          content="contact Dr Yethindra Vityala, collaborate medical research, Scivyt Research CEO email, research mentorship inquiry"
        />
        <link rel="canonical" href="https://dryethindravityala.com/contact" />
        <meta
          property="og:title"
          content="Contact Dr. Yethindra Vityala | Research Collaboration & Mentorship"
        />
        <meta
          property="og:description"
          content="Connect with Dr. Yethindra Vityala for research collaborations, speaking, or mentorship."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dryethindravityala.com/contact" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contact Dr. Yethindra Vityala | Research Collaboration & Mentorship"
        />
        <meta
          name="twitter:description"
          content="Connect with Dr. Yethindra Vityala for research collaborations, speaking, or mentorship."
        />
      </Head>
    <div className="flex-1 w-full p-2 md:p-2.5 lg:p-3 pb-6 md:pb-6 lg:pb-3 flex flex-col gap-2 sm:gap-3 lg:gap-4 lg:h-screen lg:min-h-screen lg:max-h-screen lg:overflow-hidden">
      <h1 className="vit-page-title text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] xl:text-[34px] font-light tracking-tight text-[#111] px-2 mb-1 sm:mb-2">
        Contact
      </h1>

      <div className="grid flex-1 min-h-0 h-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_minmax(0,1fr)] gap-2 sm:gap-3 lg:gap-4">
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

          {/* Map wrapper matching home page */}
          <div className="absolute inset-x-0 bottom-0 top-10 sm:top-12 lg:top-14 opacity-80 pointer-events-auto overflow-hidden">
            <JourneyMapTwo compact />
          </div>
        </div>

        {/* Right 1 Column: List Items */}
        <div data-lenis-prevent="true" className="contact-large-screen-list sm:col-span-2 lg:col-span-1 lg:row-start-2 flex flex-col gap-2 sm:gap-3 lg:gap-4 min-h-0 lg:h-full lg:max-h-full lg:overflow-y-auto lg:pr-1">
          {listItems.map((item, idx) => (
          <ListItem
            key={idx}
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
    </>
  );
}


const ListItem = ({ logoSrc, logoAlt, title, subtitle, quote }: { logoSrc: string, logoAlt: string, title: string, subtitle: string, quote: string }) => (
  <div className="bg-[#FFFFFF] rounded-[16px] p-2 sm:p-2.5 lg:p-3 shadow-sm flex gap-2.5 sm:gap-3 lg:gap-4 items-center border border-black/5 hover:shadow-md transition-shadow">
    <div className="w-7 h-7 sm:w-8 sm:h-8 lg:w-9 lg:h-9 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={36}
        height={36}
        className="h-full w-full object-contain p-1"
      />
    </div>
    <div className="flex flex-col flex-1">
      <h4 className="text-[#111] text-[10px] sm:text-[11px] lg:text-[12px] leading-tight mb-0.5 tracking-wide">{title}</h4>
      <span className="text-[8px] sm:text-[8.5px] lg:text-[9px] text-gray-400 mb-1 sm:mb-1.5">{subtitle}</span>
      <p className="text-[8px] sm:text-[9px] lg:text-[10px] text-gray-600 leading-[1.5]">{quote}</p>
    </div>
  </div>
);
