import React from 'react';
import Link from 'next/link';
import HomeJourneyMap from '../components/HomeJourneyMap';
import InfoCard from '../components/InfoCard';
import { Monitor, Code, MousePointer2, User, Globe, Triangle, Square, Circle, Diamond } from 'lucide-react';

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
    title: "SCIVYT",
    icon: <User size={18} strokeWidth={2} className="text-[#666]" />,
    description: "I move through products like everyone else, noticing what works, what slows me down, and how design could make life flow a little easier.",
    pills: [
      { label: "Dr. Krishna Priya" },
      { label: "Dr. Krishna Priya" },
      { label: "Dr. Krishna Priya" },
    ]
  }
];

const listItems = [
  {
    icon: <Triangle className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
    title: "YETZU",
    subtitle: "Ed-Tech Platform",
    quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind."
  },
  {
    icon: <Triangle className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
    title: "NATIONCITE",
    subtitle: "Research Impact Portal",
    quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind."
  },
  {
    icon: <Square className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
    title: "VITUOR",
    subtitle: "Journal Publishing Platform",
    quote: "I appreciated how Michele asked thoughtful questions and had a knack for spotting potential issues earlier rather than later."
  },
  {
    icon: <Circle className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
    title: "BEENTU AI",
    subtitle: "Research AI Tools",
    quote: "She is especially good at communication and facilitates discussion between teams."
  },
  {
    icon: <Diamond className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
    title: "SUBMIT RIGHT",
    subtitle: "Journal Publication Services Portal",
    quote: "Michele has a good eye for visuals and nicely developed sense of design."
  }
];

export default function Contact() {
  return (
    <div className="flex-1 w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col gap-4 ">
      <h1 className="text-[36px] lg:text-[42px] font-light tracking-tight text-[#111] px-2 mb-2">
        Contact
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* === TOP ROW CARDS === */}
        {contactCards.map((card, idx) => (
          <InfoCard
            key={idx}
            title={card.title}
            icon={card.icon}
            description={card.description}
            pills={card.pills}
            pillStyle="white"
            className="p-3! lg:p-4!"
          />
        ))}

        {/* === BOTTOM SECTION === */}
        {/* Left 3 Columns: Map */}
        <div className="lg:col-span-3 bg-[#18181A] rounded-[16px] p-4 relative overflow-hidden text-white flex flex-col min-h-[500px]">
          <div className="flex items-center gap-2 text-[#A0A0A5] font-medium text-xs tracking-wider mb-4 z-10 w-fit">
            <Globe size={14} className="text-[#A0A0A5]" strokeWidth={2} />
            MY EXPERIENCE
          </div>

          {/* Map wrapper matching home page */}
          <div className="absolute inset-x-0 bottom-0 top-16 opacity-80 pointer-events-auto overflow-hidden">
            <HomeJourneyMap />
          </div>
        </div>

        {/* Right 1 Column: List Items */}
        <div className="lg:col-span-1 flex flex-col gap-4 min-h-[500px]">
          {listItems.map((item, idx) => (
            <ListItem
              key={idx}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              quote={item.quote}
            />
          ))}
        </div>

      </div>
    </div>
  );
}


const ListItem = ({ icon, title, subtitle, quote }: { icon: React.ReactNode, title: string, subtitle: string, quote: string }) => (
  <div className="bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm flex gap-5 items-center border border-black/5 hover:shadow-md transition-shadow">
    <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h4 className=" text-[#111] text-[14px] leading-tight mb-0.5 tracking-wide">{title}</h4>
      <span className="text-[11px] text-gray-400 mb-2">{subtitle}</span>
      <p className="text-[12px] text-gray-600 leading-[1.6]">{quote}</p>
    </div>
  </div>
);
