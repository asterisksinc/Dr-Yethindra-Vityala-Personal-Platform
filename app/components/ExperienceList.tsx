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
    <section
      className="w-full mt-4 sm:mt-5 flex flex-col"
      style={{
        borderBottom: "1px solid #7171714d",
        borderTop: "1px solid #7171714d",
        paddingBottom: "12px",
        marginBottom: "12px",
      }}
    >
      <div className="w-full h-px bg-gray-200 mb-3 md:hidden my-2" />

      <div className="px-3 py-3">
        <h2 className="text-[24px] md:text-[20px] lg:text-[24px] font-light tracking-tight text-[#111] mb-1 leading-tight">
          {heading}
        </h2>
        {description ? (
          <p className="text-[#6A6A6F] text-[11px] sm:text-[12px] md:text-[11px] lg:text-[13px] max-w-[500px] leading-relaxed font-light">
            {description}
          </p>
        ) : null}
      </div>

      <div style={{border:'none'}} className=" p-3  flex flex-col gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="bg-[#FFFFFF] rounded-[8px] lg:rounded-[16px] p-3 flex flex-col md:flex-row md:items-center gap-3"
          >
            <div className="flex flex-col w-full md:w-[42%] pr-0 md:pr-2">
              <span className="text-[#111] font-medium text-[14px] md:text-[13px] leading-snug tracking-tight">
                {item.title}
              </span>
              <span className="text-[#999] text-[12px] md:text-[11px] mt-0.5 font-light">
                {item.subtitle}
              </span>
            </div>

            <div className="w-full md:w-[30%] pr-0 md:pr-2">
              <span className="text-[#555] text-[12px] md:text-[11px]">{item.location}</span>
            </div>

            <div className="w-full md:w-[14%] pr-0 md:pr-2">
              <span className="text-[#333] text-[12px] md:text-[11px] font-medium whitespace-nowrap">
                {String(item.year).split(/\s+/)[0]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
