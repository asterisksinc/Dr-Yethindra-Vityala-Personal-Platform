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
    <div className="col-span-1 bg-[#18181A] rounded-[16px] p-3 sm:p-4 lg:p-5 relative text-white flex flex-col h-full min-h-[220px] sm:min-h-[240px] lg:min-h-[260px] overflow-hidden">
      {/* Title */}
      <div className="flex items-center gap-1.5 self-start text-[#A0A0A5] font-medium text-[9px] sm:text-[10px] mb-3 sm:mb-4">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        TIME SPENT
      </div>

      {/* Number Header */}
      <div className="flex flex-col items-center mt-1 sm:mt-2 z-20 shrink-0">
        <span ref={numberRef} className="text-[32px] sm:text-[38px] lg:text-[44px] leading-none font-light tracking-tight text-white/90">
          {data.mediumTimeHr}
        </span>
        <span className="text-[#A0A0A5] text-[10px] sm:text-[11px] mt-1 sm:mt-1.5 font-medium">Research Hours</span>
      </div>

      {/* Year / Location Labels — above the arc */}
      <div className="flex justify-between items-end mt-auto mb-4 sm:mb-6 lg:mb-8 px-1 shrink-0 z-20">
        <div className="flex justify-center items-center flex-col gap-1.5 sm:gap-2 transition-all duration-500" style={{ opacity: states[activeSegment].leftOp }}>
          <span className="font-medium tracking-tight text-[14px] sm:text-[16px] lg:text-[18px] leading-none" style={{ color: states[activeSegment].leftColor, transition: 'color 0.4s' }}>{data.startYear}</span>
          <div className="flex flex-col justify-center">
            <span className="font-medium text-[8px] sm:text-[9px] tracking-wide uppercase" style={{ color: states[activeSegment].leftHeader, transition: 'color 0.4s' }}>{data.startLocation}</span>
            <span className="text-[#88888D] text-[7px] sm:text-[8px] leading-relaxed">{data.startCoordinate}</span>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col-reverse gap-1.5 sm:gap-2 text-right transition-all duration-500" style={{ opacity: states[activeSegment].rightOp }}>
          <div className="flex flex-col justify-center items-end">
            <span className="font-medium text-[8px] sm:text-[9px] tracking-wide uppercase" style={{ color: states[activeSegment].rightHeader, transition: 'color 0.4s' }}>{data.endLocation}</span>
            <span className="text-[#88888D] text-[7px] sm:text-[8px] leading-relaxed">{data.endCoordinate}</span>
          </div>
          <span className="font-medium tracking-tight text-[14px] sm:text-[16px] lg:text-[18px] leading-none" style={{ color: states[activeSegment].rightColor, transition: 'color 0.4s' }}>{data.endYear}</span>
        </div>
      </div>

      {/* Arc Component strictly bounded to width */}
      <div className="relative text-white -mx-4 sm:-mx-5 lg:-mx-6" style={{ width: 'calc(100% + 32px)' }}>
        <svg viewBox="0 0 200 105" className="w-full h-auto overflow-visible px-0 translate-y-[30%] sm:translate-y-[20%] md:translate-y-[-10%] lg:translate-y-[-20%]">
          <defs>
            <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
              <stop ref={stop1Ref} offset="0%" stopColor="#ff40ac" />
              <stop ref={stop2Ref} offset="50%" stopColor="#6C63FF" />
              <stop ref={stop3Ref} offset="100%" stopColor="#00e676" />
            </linearGradient>

            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Dome Background (Subtle) */}
          <path d="M 0 100 A 100 100 0 0 1 200 100 Z" fill="#1C1C1F" />

          {/* Thin white inner boundary arc (r=90) */}
          <path d="M 10 100 A 90 90 0 0 1 190 100" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="0.75" />

          {/* Thick solid outer track (r=95, str=10) -> spans r=90 to r=100 */}
          <path d="M 5 100 A 95 95 0 0 1 195 100" fill="none" stroke="#252528" strokeWidth="10" strokeLinecap="butt" />

          {/* Progress colored arc */}
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

          {/* Left Dot [~25%] (cx: 46.3, cy: 46.3) */}
          <g
            onMouseEnter={() => setActiveSegment('left')}
            onMouseLeave={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="46.3" cy="46.3" r="14" fill="transparent" />
            <circle cx="46.3" cy="46.3" r="3" fill="#555" opacity={activeSegment === 'left' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'left' && <circle cx="46.3" cy="46.3" r="3" fill="#fff" />}
          </g>

          {/* Middle Dot [50%] (cx: 100, cy: 24) */}
          <g
            onMouseEnter={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="100" cy="24" r="14" fill="transparent" />
            <circle cx="100" cy="24" r="3" fill="#555" opacity={activeSegment === 'middle' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'middle' && <circle cx="100" cy="24" r="3" fill="#fff" />}
          </g>

          {/* Right Dot [~75%] (cx: 153.7, cy: 46.3) */}
          <g
            onMouseEnter={() => setActiveSegment('right')}
            onMouseLeave={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="153.7" cy="46.3" r="14" fill="transparent" />
            <circle cx="153.7" cy="46.3" r="3" fill="#555" opacity={activeSegment === 'right' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'right' && <circle cx="153.7" cy="46.3" r="3" fill="#fff" />}
          </g>
        </svg>
      </div>
    </div>
  );
}
