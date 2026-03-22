import React from 'react';

export interface ExperienceItem {
  id: string | number;
  title: string;
  subtitle: string;
  location: string;
  year: string;
  desc: string;
}

interface ExperienceListProps {
  heading: string;
  description: string;
  items: ExperienceItem[];
}

export default function ExperienceList({ heading, description, items }: ExperienceListProps) {
  return (
    <section className="w-full flex flex-col gap-3">
      <div className="px-1 lg:px-2">
        <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-[#111] mb-1.5 md:mb-2 tracking-tight leading-tight">{heading}</h2>
        <p className="text-[#6A6A6F] text-[14px] md:text-[15px] max-w-[600px] leading-relaxed">{description}</p>
      </div>

      <div className="bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 flex flex-col gap-2 mt-1">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center bg-[#f4f4f4] px-[8px] py-[12px] rounded-[12px] gap-2 md:gap-0">
            {/* Left: Title & Subtitle */}
            <div className="flex flex-col w-full md:w-[35%] px-2">
              <span className="text-[#111] font-medium text-[15px] md:text-[16px] tracking-tight leading-snug">{item.title}</span>
              <span className="text-[#888] text-[11px] md:text-[12px] mt-0.5 font-light">{item.subtitle}</span>
            </div>

            {/* Middle-Left: Location */}
            <div className="flex items-center w-full md:w-[20%] px-2">
              <span className="text-[#333] text-[12px] md:text-[13px]">{item.location}</span>
            </div>

            {/* Middle-Right: Year */}
            <div className="flex items-center w-full md:w-[15%] px-2">
              <span className="text-[#333] text-[12px] md:text-[13px] font-medium">{item.year}</span>
            </div>

            {/* Far Right: Text */}
            <div className="flex items-center md:justify-end w-full md:w-[30%] px-2 pt-1 md:pt-0">
              <span className="text-[#555] text-[11px] md:text-[12px] leading-relaxed md:text-right max-w-[250px] hidden md:block">{item.desc}</span>
              <span className="text-[#555] text-[11px] md:text-[12px] leading-relaxed block md:hidden">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
