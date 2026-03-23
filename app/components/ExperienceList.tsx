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
    <section className="w-full flex flex-col">

      {/* ── Divider + heading block ── */}
      {/* gap-2 (8px) above this section is inherited from parent flex gap-2 */}
      <div className="w-full h-px bg-gray-200 my-2" />   {/* thin line */}

      <div className="px-1 mb-3">
        <h2 className="text-[28px] lg:text-[32px] font-light tracking-tight text-[#111] mb-1 leading-tight">
          {heading}
        </h2>
        <p className="text-[#6A6A6F] text-[12px] lg:text-[13px] max-w-[600px] leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Cards container */}
      <div className="bg-[#FFFFFF] rounded-[16px] p-2 lg:p-4 shadow-sm border border-gray-100 flex flex-col gap-2">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#f5f5f5] rounded-[12px] px-3 py-3 flex flex-col md:flex-row md:items-center gap-1 md:gap-0"
          >
            {/* Title + Subtitle */}
            <div className="flex flex-col w-full md:w-[35%] pr-2">
              <span className="text-[#111] font-medium text-[13px] leading-snug tracking-tight">
                {item.title}
              </span>
              <span className="text-[#999] text-[11px] mt-0.5 font-light">
                {item.subtitle}
              </span>
            </div>

            {/* Location */}
            <div className="w-full md:w-[22%] pr-2">
              <span className="text-[#555] text-[11px] lg:text-[12px]">
                {item.location}
              </span>
            </div>

            {/* Year — truncated to avoid repeat render */}
            <div className="w-full md:w-[13%] pr-2">
              <span className="text-[#333] text-[11px] lg:text-[12px] font-medium whitespace-nowrap">
                {String(item.year).split(/\s+/)[0]}
              </span>
            </div>

            {/* Description */}
            <div className="w-full md:w-[30%] md:text-right">
              <span className="text-[#777] text-[11px] leading-relaxed line-clamp-2">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}