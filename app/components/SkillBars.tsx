"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';

interface SectionData {
  id: number;
  colorStart: string;
  colorEnd: string;
  count: number;
}

const SECTIONS: SectionData[] = [
  { id: 1, colorStart: '#bacc16', colorEnd: '#00e676', count: 24 }, // Olive to Green
  { id: 2, colorStart: '#00e676', colorEnd: '#9d3ffa', count: 24 }, // Green to Purple
  { id: 3, colorStart: '#9d3ffa', colorEnd: '#ff5252', count: 24 }, // Purple to Red
  { id: 4, colorStart: '#ff5252', colorEnd: '#ff9100', count: 24 }, // Red to Orange
  { id: 5, colorStart: '#ff9100', colorEnd: '#ffea00', count: 24 }, // Orange to Yellow
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

const SkillBarSection = ({ section }: { section: SectionData }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastTime = useRef(0);
  const lastMouseX = useRef(0);
  const velocity = useRef(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const now = performance.now();
    const dt = now - lastTime.current;
    
    if (dt > 0) {
      const dx = Math.abs(e.clientX - lastMouseX.current);
      velocity.current = dx / dt; // Calculate mouse velocity (px / ms)
    }
    
    lastTime.current = now;
    lastMouseX.current = e.clientX;

    const mouseX = e.clientX;
    const bars = containerRef.current.children;
    const MAX_DIST = 90; // Influence radius

    // Fast wipe -> stronger compression (min height)
    let minScale = 0.45 - (velocity.current * 0.15);
    minScale = Math.max(0.15, Math.min(0.6, minScale));

    // Update each bar using real-time distance falloff
    for (let i = 0; i < bars.length; i++) {
      const bar = bars[i] as HTMLElement;
      
      const rect = bar.getBoundingClientRect();
      const barX = rect.left + rect.width / 2;
      const dist = Math.abs(mouseX - barX);

      if (dist < MAX_DIST) {
        // Curve: when dist is 0, scale is minScale. Springs back exponentially toward 1 at edge.
        const factor = dist / MAX_DIST;
        const scale = minScale + (1 - minScale) * Math.pow(factor, 1.8);
        
        gsap.to(bar, { 
          scaleY: scale, 
          duration: 0.1, 
          ease: 'power1.out', 
          overwrite: 'auto' 
        });
      } else {
        // Recover out of range bars
        gsap.to(bar, { 
          scaleY: 1, 
          duration: 0.4, 
          ease: 'power3.out', 
          overwrite: 'auto' 
        });
      }
    }
  };

  const handleMouseLeave = () => {
    velocity.current = 0;
    if (!containerRef.current) return;
    
    const bars = containerRef.current.children;
    
    // Smooth elastic spring back to full height resolving exactly per segment
    gsap.to(bars, { 
      scaleY: 1, 
      duration: 0.7, 
      ease: 'elastic.out(1, 0.4)', 
      stagger: {
        amount: 0.15,
        from: 'center'
      },
      overwrite: true 
    });
  };

  return (
    <div 
      className="flex flex-col flex-1 h-full gap-1 cursor-crosshair group"
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ isolation: 'isolate' }}
    >
      {/* Bars Tracking Loop */}
      <div 
        ref={containerRef} 
        className="flex flex-1 items-end gap-[1px] w-full"
      >
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
      
      {/* Structural Base Gradient Line */}
      <div 
        className="h-1.5 w-full rounded-[2px]"
        style={{
          background: `linear-gradient(to right, ${section.colorStart}, ${section.colorEnd})`
        }}
      />
    </div>
  );
};

export default function SkillBars() {
  return (
    <div className="absolute bottom-6 left-8 right-8 xl:right-[30%] h-[72px] flex items-end gap-2 z-20">
      {SECTIONS.map((section, idx) => (
        <SkillBarSection key={idx} section={section} />
      ))}
    </div>
  );
}
