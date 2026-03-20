"use client";
import React, { useRef, useState } from 'react';
import gsap from 'gsap';

interface Skill {
  id: string;
  name: string;
  score: number;
}

const SKILLS: Skill[] = [
  { id: 's1', name: 'Platform Design', score: 0 },
  { id: 's2', name: 'Website Design', score: 0 },
  { id: 's3', name: 'UI UX Design', score: 0 },
  { id: 's4', name: 'Interaction Design', score: 0 },
  { id: 's5', name: 'Design System', score: 0 },
  { id: 's6', name: 'User Research', score: 0 },
  { id: 's7', name: 'Usability Testing', score: 0 },
  { id: 's8', name: 'Front-end Development', score: 0 },
  { id: 's9', name: 'Prototyping', score: 0 },
  { id: 's10', name: 'Data Visualization', score: 0 },
  { id: 's11', name: 'Visual Design', score: 0 },
];

const TOOLS = [
  { id: 't1', name: 'Figma' },
  { id: 't2', name: 'ProtoPie' },
  { id: 't3', name: 'Framer' },
  { id: 't4', name: 'JavaScript' },
  { id: 't5', name: 'jQuery' },
  { id: 't6', name: 'HTML' },
  { id: 't7', name: 'CSS' },
  { id: 't8', name: 'Adobe CC' },
];

interface SectionData {
  id: number;
  colorStart: string;
  colorEnd: string;
  count: number;
  activeIds: string[];
}

const SECTIONS: SectionData[] = [
  { id: 1, colorStart: '#bacc16', colorEnd: '#00e676', count: 32, activeIds: ['s1', 's2', 's3', 't1', 't2'] },
  { id: 2, colorStart: '#00e676', colorEnd: '#9d3ffa', count: 32, activeIds: ['s4', 's5', 's9', 't3'] },
  { id: 3, colorStart: '#9d3ffa', colorEnd: '#ff5252', count: 32, activeIds: ['s6', 's7'] },
  { id: 4, colorStart: '#ff5252', colorEnd: '#ff9100', count: 32, activeIds: ['s8', 's10', 't4', 't5', 't6', 't7'] },
  { id: 5, colorStart: '#ff9100', colorEnd: '#ffea00', count: 32, activeIds: ['s11', 't8'] },
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
        
        {/* Left Col: Skills */}
        <div className="flex flex-col gap-1 w-full md:w-1/2">
          <div className="text-[11px] font-bold text-white mb-2 tracking-widest">SKILL</div>
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

        {/* Right Col: Tools & Text */}
        <div className="hidden md:flex flex-col w-1/2 items-end">
          <div className="text-[11px] font-bold text-white mb-2 tracking-widest">TOOL</div>
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

          {/* Comments Context Block */}
          <div className="mt-auto text-right text-[11px] font-mono leading-relaxed pb-4">
            <div className="text-[#8A8A93]">
              // skill scores are self-assessed (<span className="text-[#ff40ac]">total = 100</span>)
            </div>
            <div className="text-[#8A8A93]">
              // always <span className="text-[#ffea00]">iterating</span>, always <span className="text-[#00e676]">improving</span>
            </div>
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
