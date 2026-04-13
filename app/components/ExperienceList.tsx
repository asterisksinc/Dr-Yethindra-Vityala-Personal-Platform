import { title } from "process";
import React from "react";

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

export default function ExperienceList({
  heading,
  description,
  items,
}: ExperienceListProps) {
  return (
    <section className="w-full mt-4 sm:mt-5 flex flex-col">
      {/* ── Divider + heading block ── */}
      <div className="w-full h-px bg-gray-200 mb-4 md:hidden my-2 " />
      <div className="px-2 my-4 mb-4">
        <h2 className="text-[24px]  lg:text-[32px] font-light tracking-tight text-[#111] mb-1 leading-tight">
          {title}
        </h2>
        <p className="text-[#6A6A6F] text-[11px] sm:text-[12px] lg:text-[13px] max-w-[500px] leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Cards container */}
      <div className="rounded-[16px] p-2 sm:p-3 lg:p-4 shadow-sm flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] rounded-[12px] px-4 py-3 flex flex-col md:flex-row md:items-center gap-2 md:gap-3 h-auto md:h-auto lg:h-[120px]"
          >
            {/* Title + Subtitle */}
            <div className="flex flex-col w-full md:w-[35%] pr-2">
              <span className="text-[#111] font-medium text-[14px] sm:text-[15px] lg:text-[16px] leading-snug tracking-tight">
                {item.title}
              </span>
              <span className="text-[#999] text-[12px] sm:text-[13px] lg:text-[13px] mt-0.5 sm:mt-1 font-light">
                {item.subtitle}
              </span>
            </div>

            {/* Location */}
            <div className="w-full md:w-[22%] pr-2">
              <span className="text-[#555] text-[12px] sm:text-[13px] lg:text-[12px]">
                {item.location}
              </span>
            </div>

            {/* Year */}
            <div className="w-full md:w-[13%] pr-2">
              <span className="text-[#333] text-[12px] sm:text-[13px] lg:text-[14px] font-medium whitespace-nowrap">
                {String(item.year).split(/\s+/)[0]}
              </span>
            </div>

            {/* Description */}
            <div className="w-full md:w-[30%] md:text-right">
              <span className="text-[#777] text-[11px] sm:text-[12px] lg:text-[14px] leading-relaxed line-clamp-3 md:line-clamp-4">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
}
