"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

interface TimeSpentData {
  lowTimeHr: number;
  mediumTimeHr: number;
  highTimeHr: number;
  startYear: string;
  startLocation: string;
  startCoordinate: string;
  endYear: string;
  endLocation: string;
  endCoordinate: string;
}

export default function TimeSpentWidget({ data }: { data: TimeSpentData }) {
  const [activeSegment, setActiveSegment] = useState<'left' | 'middle' | 'right'>('middle');

  const pathRef = useRef<SVGPathElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const stop1Ref = useRef<SVGStopElement>(null);
  const stop2Ref = useRef<SVGStopElement>(null);
  const stop3Ref = useRef<SVGStopElement>(null);

  const states = {
    left: {
      number: data.lowTimeHr,
      dasharray: "30 100",
      dashoffset: -10,
      color1: "#ff40ac",
      color2: "#ff40ac",
      color3: "#ff40ac",
      leftOp: 1,
      rightOp: 0.4,
      leftColor: "#ffffff",
      rightColor: "#A0A0A5",
      leftHeader: "#ffffff",
      rightHeader: "#A0A0A5"
    },
    right: {
      number: data.highTimeHr,
      dasharray: "30 100",
      dashoffset: -60,
      color1: "#00e676",
      color2: "#00e676",
      color3: "#00e676",
      leftOp: 0.4,
      rightOp: 1,
      leftColor: "#A0A0A5",
      rightColor: "#ffffff",
      leftHeader: "#A0A0A5",
      rightHeader: "#ffffff"
    },
    middle: {
      number: data.mediumTimeHr,
      dasharray: "30 100",
      dashoffset: -35,
      color1: "#ff40ac",
      color2: "#6C63FF",
      color3: "#00e676",
      leftOp: 1,
      rightOp: 1,
      leftColor: "#ffffff",
      rightColor: "#ffffff",
      leftHeader: "#A0A0A5",
      rightHeader: "#A0A0A5"
    }
  };

  useEffect(() => {
    const target = states[activeSegment];

    if (numberRef.current) {
      const currentVal = parseInt(numberRef.current.innerText.replace(/,/g, '')) || 0;
      const obj = { val: currentVal };
      gsap.to(obj, {
        val: target.number,
        duration: 0.6,
        ease: "power2.out",
        onUpdate: () => {
          if (numberRef.current) {
            numberRef.current.innerText = Math.round(obj.val).toLocaleString();
          }
        }
      });
    }

    if (pathRef.current) {
      gsap.to(pathRef.current, {
        strokeDasharray: target.dasharray,
        strokeDashoffset: target.dashoffset,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }

    gsap.to(stop1Ref.current, { stopColor: target.color1, duration: 0.6 });
    gsap.to(stop2Ref.current, { stopColor: target.color2, duration: 0.6 });
    gsap.to(stop3Ref.current, { stopColor: target.color3, duration: 0.6 });

  }, [activeSegment]);

  return (
    <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#18181A] rounded-[16px] pt-3 sm:pt-4 md:pt-3 lg:pt-5 px-3 sm:px-4 md:px-3 lg:px-5 pb-0 relative text-white flex flex-col min-h-[220px] sm:min-h-[240px] md:min-h-[320px] lg:min-h-[260px] overflow-hidden">
      
      {/* Title */}
      <div className="flex items-center gap-1.5 self-start text-[#A0A0A5] font-medium text-[9px] sm:text-[10px] md:text-[9px] mb-3 sm:mb-4 md:mb-2">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        TIME SPENT
      </div>

      {/* Number */}
      <div style={{position:'relative', top:'-20px'}} className="flex flex-col items-center mt-1 sm:mt-2 md:mt-1 z-20 shrink-0 sm:mb-3 md:mb-1">
        <span ref={numberRef} className="text-[48px] sm:text-[48px] md:text-[32px] lg:text-[24px] leading-none font-light tracking-tight text-white/90">
          {data.mediumTimeHr}
        </span>
        <span className="text-[#A0A0A5] text-[10px] sm:text-[11px] md:text-[9px] mt-1 sm:mt-1.5 md:mt-0.5 font-medium">
          Research Hours
        </span>
      </div>

      {/* Arc */}
      <div  className="relative text-white -mx-4 sm:-mx-5 md:-mx-3 lg:-mx-4.5 flex-1 flex flex-col" style={{ width: 'calc(100% + 24px)' }}>
        <svg viewBox="0 0 200 100" className="w-full h-auto overflow-visible px-0 translate-y-[20%] sm:translate-y-[20%] md:translate-y-[0%] lg:translate-y-[-0%] mt-auto">
          
          <defs>
            <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
              <stop ref={stop1Ref} offset="10%" stopColor="#ff40ac" />
              <stop ref={stop2Ref} offset="50%" stopColor="#6C63FF" />
              <stop ref={stop3Ref} offset="100%" stopColor="#00e676" />
            </linearGradient>
          </defs>

          <path d="M 0 100 A 100 100 0 0 1 200 100 Z" fill="#1C1C1F" />
          <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" />
          <path d="M 5 100 A 95 95 0 0 1 195 100" fill="none" stroke="#252528" strokeWidth="10" />

          <path
            ref={pathRef}
            d="M 5 100 A 95 95 0 0 1 195 100"
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth="10"
            pathLength="100"
            strokeDasharray="30 100"
            strokeDashoffset="-35"
          />

          {/* LEFT DOT */}
          <g onMouseEnter={() => setActiveSegment('left')} onMouseLeave={() => setActiveSegment('middle')}>
            <circle cx="46.3" cy="46.3" r="14" fill="transparent" />
            <circle cx="46.3" cy="46.3" r="3" fill="#555" opacity={activeSegment === 'left' ? 0 : 1} />
            {activeSegment === 'left' && <circle cx="46.3" cy="46.3" r="3" fill="#fff" />}
          </g>

          {/* MIDDLE DOT */}
<g
  onMouseEnter={() => setActiveSegment('middle')}
  className="cursor-pointer"
>
  <circle cx="100" cy="24" r="14" fill="transparent" />
  <circle
    cx="100"
    cy="24"
    r="3"
    fill="#555"
    opacity={activeSegment === 'middle' ? 0 : 1}
    style={{ transition: 'opacity 0.2s' }}
  />
  {activeSegment === 'middle' && (
    <circle cx="100" cy="24" r="3" fill="#fff" />
  )}
</g>

          {/* RIGHT DOT */}
          <g onMouseEnter={() => setActiveSegment('right')} onMouseLeave={() => setActiveSegment('middle')}>
            <circle cx="153.7" cy="46.3" r="14" fill="transparent" />
            <circle cx="153.7" cy="46.3" r="3" fill="#555" opacity={activeSegment === 'right' ? 0 : 1} />
            {activeSegment === 'right' && <circle cx="153.7" cy="46.3" r="3" fill="#fff" />}
          </g>

          {/* 🔥 TEXT INSIDE ARC */}

          {/* LEFT */}
          <g textAnchor="middle">
            <text x="46.3" y="60" fontSize="6" fill={states[activeSegment].leftColor}>
              {data.startYear}
            </text>
            <text x="46.3" y="66" fontSize="3.5" fill={states[activeSegment].leftHeader}>
              {data.startLocation}
            </text>
            <text x="46.3" y="71" fontSize="3" fill="#88888D">
              {data.startCoordinate}
            </text>
          </g>

          {/* RIGHT */}
          <g textAnchor="middle">
            <text x="153.7" y="60" fontSize="6" fill={states[activeSegment].rightColor}>
              {data.endYear}
            </text>
            <text x="153.7" y="66" fontSize="3.5" fill={states[activeSegment].rightHeader}>
              {data.endLocation}
            </text>
            <text x="153.7" y="71" fontSize="3" fill="#88888D">
              {data.endCoordinate}
            </text>
          </g>

        </svg>
      </div>
    </div>
  );
}