"use client";

import React, { useRef, useState } from "react";
import gsap from "gsap";

interface Skill {
  id: string;
  name: string;
  score: string;
}

const SKILLS: Skill[] = [
  { id: "s1", name: "Peer-Reviewed Papers", score: "100+" },
  { id: "s2", name: "Global Presentations", score: "45+" },
  { id: "s3", name: "World Records", score: "12" },
  { id: "s4", name: "Students Mentored", score: "1,000+" },
  { id: "s5", name: "Beneficiaries", score: "100,000+" },
  { id: "s6", name: "Editorial Boards", score: "20+" },
  { id: "s7", name: "Teaching Hours", score: "5,000+" },
  { id: "s8", name: "Manuscripts Reviewed", score: "200+" },
  { id: "s9", name: "Country Collaborations", score: "10+" },
];

const TOOLS = [
  { id: "t1", name: "Clinical Research" },
  { id: "t2", name: "Translational Medicine" },
  { id: "t3", name: "Infectious Diseases" },
  { id: "t4", name: "Oncology Studies" },
  { id: "t5", name: "Public Health" },
  { id: "t6", name: "Academic Mentorship" },
  { id: "t7", name: "Drug Repurposing" },
];

interface SectionData {
  id: number;
  colorStart: string;
  colorEnd: string;
  count: number;
  activeIds: string[];
}

const SECTIONS: SectionData[] = [
  {
    id: 1,
    colorStart: "#c7d62f", // lime
    colorEnd: "#00c853",   // green
    count: 32,
    activeIds: ["s1", "s2", "t1", "t2"],
  },
  {
    id: 2,
    colorStart: "#00c853", // continue green
    colorEnd: "#00bcd4",   // cyan
    count: 32,
    activeIds: ["s3", "s4", "t3"],
  },
  {
    id: 3,
    colorStart: "#00bcd4", // continue cyan
    colorEnd: "#e040fb",   // purple/pink
    count: 32,
    activeIds: ["s5", "s6", "t4", "t5"],
  },
  {
    id: 4,
    colorStart: "#e040fb", // continue purple
    colorEnd: "#ff5252",   // red
    count: 32,
    activeIds: ["s7", "s8", "t6"],
  },
  {
    id: 5,
    colorStart: "#ff5252", // continue red
    colorEnd: "#ffea00",   // yellow
    count: 32,
    activeIds: ["s9", "t7"],
  },
];

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function getInterpolatedColor(start: string, end: string, progress: number) {
  const c1 = hexToRgb(start);
  const c2 = hexToRgb(end);
  const r = Math.round(c1.r + (c2.r - c1.r) * progress);
  const g = Math.round(c1.g + (c2.g - c1.g) * progress);
  const b = Math.round(c1.b + (c2.b - c1.b) * progress);
  return `rgb(${r}, ${g}, ${b})`;
}

const SkillBarSection = ({
  section,
  onHover,
  onLeave,
}: {
  section: SectionData;
  onHover: () => void;
  onLeave: () => void;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onHover();
    if (!containerRef.current) return;

    gsap.to(containerRef.current.children, {
      scaleY: 0.4,
      duration: 0.25,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    onLeave();
    if (!containerRef.current) return;

    gsap.to(containerRef.current.children, {
      scaleY: 1,
      duration: 0.6,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
    });
  };

  return (
    <div
      className="flex flex-col flex-1 h-full cursor-crosshair"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >

      <div
        ref={containerRef}
        className="flex flex-1 items-end w-full min-h-0"
        style={{ gap: "2px" }}
      >
        {Array.from({ length: section.count }).map((_, i) => {
          const color = getInterpolatedColor(
            section.colorStart,
            section.colorEnd,
            i / (section.count - 1)
          );

          return (
            <div
              key={i}
              style={{
                flex: 1,
                height: "70%",
                backgroundColor: color,
                transformOrigin: "bottom",
                willChange: "transform",
                borderRadius: "1px 1px 0 0",
              }}
            />
          );
        })}
      </div>

      <div
        className="h-[6px] w-full"
        style={{
          background: `linear-gradient(to right, ${section.colorStart}, ${section.colorEnd})`,
        }}
      />
    </div>
  );
};

export default function SkillMatrix() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const activeIds =
    activeSection !== null
      ? SECTIONS.find((s) => s.id === activeSection)?.activeIds || []
      : [];

  return (
    <div className="w-full h-full flex flex-col p-3 sm:p-4 md:px-5 md:pt-4 md:pb-3">
      {/* Header */}
      <div className="flex items-center gap-2 text-[8px] sm:text-[9px] font-bold text-[#A0A0A5] tracking-widest mb-2 uppercase">
        DESIGN SKILL MATRIX
      </div>

      {/* Content */}
      <div className="flex justify-between flex-1 relative z-10 overflow-hidden">
        {/* Left */}
        <div className="flex flex-col gap-[2px] w-full sm:w-[55%] md:w-1/2">
          <div className="text-[8px] sm:text-[9px] font-bold text-white mb-1 tracking-widest">
            IMPACT METRICS
          </div>
          {SKILLS.map((skill) => {
            const isActive = activeIds.includes(skill.id);
            return (
              <div key={skill.id} className="flex items-center gap-1">
                <span
                  className={`text-[10px] transition ${
                    isActive ? "text-white" : "text-[#8A8A93]"
                  }`}
                >
                  {skill.name}
                </span>
                <div
                  className={`px-1 py-0 rounded-full text-[8px] ${
                    isActive ? "bg-[#444] text-white" : "bg-[#2A2A2D] text-[#6A6A6F]"
                  }`}
                >
                  {skill.score}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex flex-col w-full sm:w-[45%] md:w-1/2 items-end sm:items-end mt-0 sm:mt-0">
          <div className="text-[8px] sm:text-[9px] font-bold text-white mb-1 tracking-widest">
            RESEARCH DOMAINS
          </div>
          {TOOLS.map((tool) => {
            const isActive = activeIds.includes(tool.id);
            return (
              <div
                key={tool.id}
                className={`text-[10px] ${
                  isActive ? "text-white" : "text-[#6A6A6F]"
                }`}
              >
                {tool.name}
              </div>
            );
          })}
        </div>
      </div>

      {/* ✅ UPDATED FOOTER */}
      <div
        className="w-full h-[70px] sm:h-[76px] flex items-stretch mt-auto pt-3 sm:pt-4 z-20 shrink-0"
        style={{ gap: "8px" }}
      >
        {SECTIONS.map((section) => (
          <SkillBarSection
            key={section.id}
            section={section}
            onHover={() => setActiveSection(section.id)}
            onLeave={() => setActiveSection(null)}
          />
        ))}
      </div>
    </div>
  );
}