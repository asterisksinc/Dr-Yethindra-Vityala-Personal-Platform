"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./awards-records.css";
import "../about/about.css";
import InfoCard from "../components/InfoCard";
import { Circle, Diamond, Square, Triangle, User } from "lucide-react";

const iconMap: { [key: string]: React.ReactNode } = {
  triangle: <Triangle className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
  square: <Square className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
  circle: <Circle className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
  diamond: <Diamond className="fill-[#111] text-[#111]" size={20} strokeWidth={1.5} />,
};

export default function AwardsRecords() {
  const [listItems, setListItems] = useState<any[]>([
    {
      title: "YETZU",
      subtitle: "Ed-Tech Platform",
      quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind.",
      iconType: "triangle",
    },
    {
      title: "NATIONCITE",
      subtitle: "Research Impact Portal",
      quote: "Michele did some very strong product design work while keeping user needs and business goals top-of-mind.",
      iconType: "triangle",
    },
    {
      title: "VITUOR",
      subtitle: "Journal Publishing Platform",
      quote: "I appreciated how Michele asked thoughtful questions and had a knack for spotting potential issues earlier rather than later.",
      iconType: "square",
    },
    {
      title: "BEENTU AI",
      subtitle: "Research AI Tools",
      quote: "She is especially good at communication and facilitates discussion between teams.",
      iconType: "circle",
    },
    {
      title: "SUBMIT RIGHT",
      subtitle: "Journal Publication Services Portal",
      quote: "Michele has a good eye for visuals and nicely developed sense of design.",
      iconType: "diamond",
    }
  ]);

  useEffect(() => {
    const fetchAwardsData = async () => {
      try {
        const res = await fetch("/api/cms/awards-records");
        const result = await res.json();

        if (!res.ok || !result?.data) {
          console.warn("API returned no data, using fallback");
          return;
        }

        const data = result.data.content || result.data;
        
        // Transform API data to match ListItem format
        const transformedItems = Array.isArray(data) ? data.map((item: any) => ({
          title: item.title || item.name || "",
          subtitle: item.subtitle || item.category || "",
          quote: item.description || item.quote || "",
          iconType: item.iconType || item.icon || "triangle",
        })) : [];

        if (transformedItems.length > 0) {
          setListItems(transformedItems);
        }
      } catch (error) {
        console.error("Failed to load awards data", error);
      }
    };

    fetchAwardsData();
  }, []);
  return (
    <section className="vit-awards-wrapper w-full p-2 md:p-2.5 lg:p-3 flex flex-col gap-2 pb-10 md:pb-6 lg:pb-3 lg:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden">
      {/* Title */}
      <div className="shrink-0 mb-1">
        <h2 className="vit-page-title text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-light tracking-tight text-[#111] px-2 mb-1">Awards & Records</h2>
      </div>

      <div className="flex-1 flex flex-col gap-2 min-h-0">
        
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row gap-2 lg:h-[45%] shrink-0">
          
          {/* Top Left: Video Section */}
          <div className="vit-awards-top-video w-full md:w-[60%] lg:w-[66.666%] h-[160px] sm:h-[200px] md:h-[220px] lg:h-full relative bg-[#1c1c1c] rounded-[16px] overflow-hidden shrink-0">
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex items-center gap-2 text-white/80 text-[9px] sm:text-[10px] uppercase tracking-widest font-medium">
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center bg-white/10">
                <Triangle className="w-2 h-2 sm:w-2.5 sm:h-2.5 fill-white text-white" />
              </div>
              MY EXPERIENCE
            </div>
            <Image
              src="/awards/video-placeholder.png"
              alt="video"
              fill
              className="vit-awards-video-img"
            />
          </div>

          {/* Top Right: User Card + "People" Title */}
            <div className="w-full md:w-[40%] lg:w-[33.333%] flex flex-col md:h-full h-auto gap-0">
          <div className="vit-awards-people-card bg-white rounded-[16px] p-3 sm:p-4 lg:p-5 shadow-sm border border-gray-50 flex flex-col h-auto md:h-full">

    {/* Icon */}
    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-800 mb-2 sm:mb-3">
      <User size={18} className="sm:w-5 sm:h-5" />
    </div>

    {/* Text */}
    <p className="text-[11px] sm:text-[12px] lg:text-[13px] text-gray-500 leading-relaxed font-light">
      I move through products like everyone else, noticing what works, what slows me down, and how design could make life flow a little easier.
    </p>

    {/* Pills */}
    <div className="flex gap-1.5 sm:gap-2 flex-wrap mt-2 mb-2">
      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#f9f9f9] border border-gray-100 rounded-full text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600">
        Comfort Seek
      </span>
      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#f9f9f9] border border-gray-100 rounded-full text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600">
        Picky
      </span>
      <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#f9f9f9] border border-gray-100 rounded-full text-[9px] sm:text-[10px] lg:text-[11px] text-gray-600">
        Everyday User
      </span>
    </div>


  {/* The word People aligned right at the bottom */}
  <div className="vit-awards-people-label mt-auto shrink-0 text-right text-[18px] sm:text-[22px] lg:text-[26px] font-light text-[#111] pt-2 md:pt-8 lg:pt-16 pb-1 pr-1 tracking-tight">
    People
  </div>
    </div>
</div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row gap-2 lg:flex-1 lg:min-h-0">
          
          {/* Bottom Left: Certificates Section */}
          <div className="w-full md:w-[60%] lg:w-[66.666%] bg-white rounded-[16px] p-3 sm:p-4 lg:p-5 flex flex-col lg:min-h-0 lg:flex-1">
            <h3 className="shrink-0 pb-4 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light text-[#111] mb-2 sm:mb-3">Honour & Certifications</h3>
            
            <div data-lenis-prevent="true" className="vit-awards-cert-grid flex-1 overflow-y-auto custom-scrollbar-sleek min-h-0 pr-1 sm:pr-2">
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
                  sub: `Dr. Yethindra's research has been published in some of the most respected medical journals globally. His work spans a wide range of medical topics.`
                },
                {
                  title: "Dr. Yellapragada Subbarao Memorial Award, 2020",
                  img: "/certeficate.png",
                  sub: `Honored by the Indian Association of Biomedical Scientists for outstanding achievements in biomedical research, reflecting excellence.`
                },
                {
                  title: "Nationwide Awards Under 30 Emerging Industry Experts, 2023",
                  img: "/certeficate.png",
                  sub: `Winner of the 2023 Business Mint Nationwide Awards Under 30 in the Researcher Category for his contributions to medical research.`
                },
                {
                  title: "Champion of the Champions – MedEngage Award (2021)",
                  img: "/certeficate.png",
                  sub: `Recognized by Metropolis Healthcare for his unparalleled achievements in academics and medical research during the COVID-19 pandemic.`
                },
              ].map((cert, index) => (
                <div className="vit-awards-cert-card flex flex-col items-center text-center mb-3 sm:mb-4" key={index}>
                  <img
                    src={cert.img}
                    alt="certificate"
                    width={220}
                    height={156}
                    className="mb-2 sm:mb-3 rounded-md shadow-sm max-w-full h-auto"
                  />
                  <p className="font-medium text-[#111] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight mb-1 sm:mb-1.5">{cert.title}</p>
                  <p className="text-[9px] sm:text-[10px] text-[#777] leading-[1.5] line-clamp-3">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right: List Items Scrollable area */}
          <div className="w-full md:w-[40%] lg:w-[33.333%] flex flex-col lg:min-h-0 lg:flex-1">
             <div data-lenis-prevent="true" className="md:flex-1 md:overflow-y-auto custom-scrollbar-sleek md:min-h-0 pr-1 sm:pr-2 flex flex-col gap-2">
               {listItems.map((item, idx) => (
                 <ListItem
                   key={idx}
                   icon={iconMap[item.iconType?.toLowerCase() || "triangle"]}
                   title={item.title}
                   subtitle={item.subtitle}
                   quote={item.quote}
                 />
               ))}
             </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}

const ListItem = ({ icon, title, subtitle, quote }: { icon: React.ReactNode, title: string, subtitle: string, quote: string }) => (
  <div className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 shadow-sm flex gap-2 sm:gap-3 items-start border border-gray-100 hover:shadow-md transition-shadow shrink-0">
    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 mt-0.5">
      {icon}
    </div>
    <div className="flex flex-col flex-1">
      <h4 className="font-medium text-[#111] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight tracking-wide">{title}</h4>
      <span className="text-[9px] sm:text-[10px] text-gray-500 mb-1 sm:mb-1.5 mt-0.5">{subtitle}</span>
      <p className="text-[10px] sm:text-[11px] text-gray-700 leading-relaxed">{quote}</p>
    </div>
  </div>
);