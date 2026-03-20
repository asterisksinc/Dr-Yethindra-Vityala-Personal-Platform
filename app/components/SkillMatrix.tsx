"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';

interface Skill {
  id: string;
  name: string;
  score: string;
}

const SKILLS: Skill[] = [
  { id: 's1', name: 'Peer-Reviewed Papers', score: '100+' },
  { id: 's2', name: 'Global Presentations', score: '45+' },
  { id: 's3', name: 'World Records', score: '12' },
  { id: 's4', name: 'Students Mentored', score: '1,000+' },
  { id: 's5', name: 'Beneficiaries', score: '100,000+' },
  { id: 's6', name: 'Editorial Boards', score: '20+' },
  { id: 's7', name: 'Teaching Hours', score: '5,000+' },
  { id: 's8', name: 'Manuscripts Reviewed', score: '200+' },
  { id: 's9', name: 'Country Collaborations', score: '10+' },
];

const TOOLS = [
  { id: 't1', name: 'Clinical Research' },
  { id: 't2', name: 'Translational Medicine' },
  { id: 't3', name: 'Infectious Diseases' },
  { id: 't4', name: 'Oncology Studies' },
  { id: 't5', name: 'Public Health' },
  { id: 't6', name: 'Academic Mentorship' },
  { id: 't7', name: 'Drug Repurposing' },
];

interface SectionData {
  id: number;
  colorStart: string;
  colorEnd: string;
  count: number;
  activeIds: string[];
}

const SECTIONS: SectionData[] = [
  { id: 1, colorStart: '#bacc16', colorEnd: '#00e676', count: 32, activeIds: ['s1', 's2', 't1', 't2'] },
  { id: 2, colorStart: '#00e676', colorEnd: '#9d3ffa', count: 32, activeIds: ['s3', 's4', 't3'] },
  { id: 3, colorStart: '#9d3ffa', colorEnd: '#ff5252', count: 32, activeIds: ['s5', 's6', 't4', 't5'] },
  { id: 4, colorStart: '#ff5252', colorEnd: '#ff9100', count: 32, activeIds: ['s7', 's8', 't6'] },
  { id: 5, colorStart: '#ff9100', colorEnd: '#ffea00', count: 32, activeIds: ['s9', 't7'] },
];

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
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
  onLeave 
}: { 
  section: SectionData, 
  onHover: () => void, 
  onLeave: () => void 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    onHover();
    if (!containerRef.current) return;
    const bars = containerRef.current.children;
    
    // Animate all bars in the section down together smoothly
    gsap.to(bars, {
      scaleY: 0.4,
      duration: 0.25,
      ease: 'power2.out',
      stagger: 0.005, 
      overwrite: 'auto'
    });
  };

  const handleMouseLeave = () => {
    onLeave();
    if (!containerRef.current) return;
    const bars = containerRef.current.children;
    
    // Elastic spring back to full height
    gsap.to(bars, {
      scaleY: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
      stagger: 0.005,
      overwrite: 'auto'
    });
  };

  return (
    <div 
      className="flex flex-col flex-1 h-full gap-1 cursor-crosshair"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={containerRef} className="flex flex-1 items-end gap-px w-full">
        {Array.from({ length: section.count }).map((_, i) => {
          const color = getInterpolatedColor(section.colorStart, section.colorEnd, i / (section.count - 1));
          return (
            <div
              key={i}
              className="flex-1 w-full rounded-t-[1px]"
              style={{
                height: '100%',
                backgroundColor: color,
                transformOrigin: 'bottom',
                willChange: 'transform'
              }}
            />
          );
        })}
      </div>
      <div 
        className="h-2 w-full rounded-[2px]"
        style={{ background: `linear-gradient(to right, ${section.colorStart}, ${section.colorEnd})` }}
      />
    </div>
  );
};

export default function SkillMatrix() {
  const [activeSection, setActiveSection] = useState<number | null>(null);

  const activeIds = activeSection !== null 
    ? SECTIONS.find(s => s.id === activeSection)?.activeIds || [] 
    : [];

  return (
    <div className="w-full h-full flex flex-col p-8 pt-6">
      {/* Header */}
      <div className="flex items-center gap-2 text-[11px] font-bold text-[#A0A0A5] tracking-widest mb-6 uppercase">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="18" y="3" width="4" height="18"></rect>
          <rect x="10" y="8" width="4" height="13"></rect>
          <rect x="2" y="13" width="4" height="8"></rect>
        </svg>
        DESIGN SKILL MATRIX
      </div>

      {/* Main Content Area */}
      <div className="flex justify-between flex-1 relative z-10">
        
        {/* Left Col: Impact Metrics */}
        <div className="flex flex-col gap-1 w-full md:w-1/2">
          <div className="text-[11px] font-bold text-white mb-2 tracking-widest">IMPACT METRICS</div>
          {SKILLS.map(skill => {
            const isActive = activeIds.includes(skill.id);
            return (
               <div key={skill.id} className="flex items-center gap-3">
                 <span className={`text-[17px] tracking-tight transition-colors duration-300 ${isActive ? 'text-white font-medium' : 'text-[#8A8A93]'}`}>
                   {skill.name}
                 </span>
                 <div className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium transition-colors duration-300 ${isActive ? 'bg-[#444] text-white' : 'bg-[#2A2A2D] text-[#6A6A6F]'}`}>
                   {skill.score}
                 </div>
               </div>
            );
          })}
        </div>

        {/* Right Col: Research Domains & Text */}
        <div className="hidden md:flex flex-col w-1/2 items-end">
          <div className="text-[11px] font-bold text-white mb-2 tracking-widest">RESEARCH DOMAINS</div>
          <div className="flex flex-col gap-[3px] items-end">
            {TOOLS.map(tool => {
              const isActive = activeIds.includes(tool.id);
              return (
                <div key={tool.id} className={`text-[15px] font-medium tracking-tight transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#6A6A6F]'}`}>
                  {tool.name}
                </div>
              );
            })}
          </div>


        </div>
      </div>

      {/* Interactive Bars Footer */}
      <div className="w-full h-[65px] flex items-end gap-2 mt-4 z-20">
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
