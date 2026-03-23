import Image from "next/image";
import "./awards-records.css";
import "../about/about.css";
import InfoCard from "../components/InfoCard";
import { Circle, Diamond, Square, Triangle, User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Records | Dr. Yethindra Vityala",
  description:
    "Explore the awards, honors, and world records of Dr. Yethindra Vityala — including 12 world records, 25+ awards, Guinness recognition, global certifications, and achievements in medical research, innovation, and trilingual authorship.",
  keywords: [
    "Dr. Yethindra Vityala awards",
    "Dr. Yethindra Vityala world records",
    "Guinness World Records",
    "Youngest Scientist in Medicine",
    "Fastest Research Study Worldwide",
    "Youngest Trilingual Book Author",
    "Medical research awards",
    "Global prodigy honors",
    "Achievement mastery",
    "Research endurance",
    "Record validation",
    "Innovation speed",
    "Global certification",
    "Challenge resilience",
  ],
  openGraph: {
    title: "Awards & Records | Dr. Yethindra Vityala",
    description:
      "Discover the global honors, world records, and certifications of Dr. Yethindra Vityala, including Guinness recognition, 12 world records, and 25+ prestigious awards in medicine and research.",
    url: "/awards",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Records | Dr. Yethindra Vityala",
    description:
      "12 world records, 25+ awards, Guinness recognition, and global honors in medicine, innovation, and research.",
  },
  alternates: {
    canonical: "/awards",
  },
};
export default function AwardsRecords() {
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
  return (
    <section className="vit-awards-wrapper w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col gap-2">

      {/* Title */}
 <div className="shrink-0 mb-2">
        <h2 className="text-[36px] lg:text-[42px] font-light tracking-tight text-[#111] px-2 mb-2">Global Prodigy Honors</h2>
      </div>

      {/* Top Row: Video & Quote Box ensuring same matched height */}
      <div className="vit-awards-grid items-stretch mb-[4px]">
        {/* Video Section */}
        <div className="vit-awards-video h-auto! min-h-[300px]">
          <Image
            src="/awards/video-placeholder.png"
            alt="video"
            fill
            className="vit-awards-video-img"
          />
        </div>

        {/* Quote Box InfoCard */}
        <InfoCard
          title="Achievement Mastery"
          icon={<User size={18} strokeWidth={2} className="text-[#666]" />}
          description="Over 5,000 research hours across 12 world records and 25+ awards mastering rapid innovation amid intense timelines, overcoming publication barriers, and gaining expertise in trilingual authorship, Guinness validation, and global certification processes."
          pills={[
            { label: "Research Endurance" },
            { label: "Record Validation" },
            { label: "Innovation Speed" },
            { label: "Global Certification" },
            { label: "Challenge Resilience" }
          ]}
          pillStyle="gray"
          className="h-full! w-full"
        />
      </div>

      <div className="vit-awards-grid items-stretch">

        {/* Left Content */}
        <div className="vit-awards-left h-full">

          {/* Certificates */}
          <div className="vit-awards-cert-section mt-0! h-full! flex flex-col">
            <h3>Honour & Certifications</h3>

            <div className="vit-awards-cert-grid">

              {[
                {
                  title: "Karmaveer Chakra Award (2021)",
                  img: "/certeficate.png",
                  sub: "This prestigious honor, granted by iCONGO and the United Nations, celebrates his commitment to using medical science for social change and community health.",
                },
                {
                  title: "Mahatma Gandhi National Award (2020)",
                  img: "/certeficate.png",
                  sub: 'Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award highlights Dr. Yethindra’s contributions to global healthcare and medical research.'
                },
                {
                  title: "Young Researcher, Green Thinker, 2020",
                  img: "/certeficate.png",
                  sub: `Dr. Yethindra's research has been published in some of the most respected medical journals globally. His work spans a wide range of medical topics, 
                  `
                },
                {
                  title: "Dr. Yellapragada Subbarao Memorial Award, 2020",
                  img: "/certeficate.png",
                  sub: `Honored by the Indian Association of Biomedical Scientists for outstanding achievements in biomedical research, reflecting excellence in advancing healthcare and scientific discovery in the spirit of Dr. Yellapragada Subbarao's legacy.`
                },
                {
                  title: "Nationwide Awards Under 30 Emerging Industry Experts, 2023",
                  img: "/certeficate.png",
                  sub: `Winner of the 2023 Business Mint Nationwide Awards Under 30 Emerging Industry Experts in the Researcher Category for his contributions to the medical research.`
                },
                {
                  title: "Champion of the Champions – MedEngage Award (2021)",
                  img: "/certeficate.png",
                  sub: `Recognized by Metropolis Healthcare for his unparalleled achievements in academics and medical research, particularly his contributions during the COVID-19 pandemic.`
                },
              ].map((cert, index) => (
                <div className="vit-awards-cert-card" key={index}>
                  <div className="vit-awards-cert-img">
                    <Image
                      src={cert.img}
                      alt="certificate"
                      width={420}
                      height={250}
                    />
                  </div>
                  <p className="vit-awards-cert-title">{cert.title}</p>
                  <p className="sub">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

    

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
    </section>
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