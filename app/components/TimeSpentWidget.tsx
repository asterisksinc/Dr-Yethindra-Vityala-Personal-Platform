"use client";
import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";

export default function TimeSpentWidget() {
  const [activeSegment, setActiveSegment] = useState<'left' | 'middle' | 'right'>('middle');

  const pathRef = useRef<SVGPathElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  const stop1Ref = useRef<SVGStopElement>(null);
  const stop2Ref = useRef<SVGStopElement>(null);
  const stop3Ref = useRef<SVGStopElement>(null);

  const states = {
    left: {
      number: 4729,
      dasharray: "25 100",
      dashoffset: 0,
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
      number: 9509,
      dasharray: "25 100",
      dashoffset: -75,
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
      number: 14238,
      dasharray: "50 100",
      dashoffset: -25,
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
    <div className="col-span-1 bg-[#18181A] rounded-[16px] pt-8 relative text-white flex flex-col items-center text-center overflow-hidden h-full min-h-[460px]">
      <div className="flex items-center gap-2 self-start text-[#A0A0A5] font-medium text-sm px-8">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <polyline points="12 6 12 12 16 14"></polyline>
        </svg>
        DESIGN TIME SPENT
      </div>

      <div className="mt-8 flex flex-col items-center z-10 px-8">
        <span ref={numberRef} className="text-[64px] font-light tracking-tight leading-none text-white/90">
          14,238
        </span>
        <span className="text-[#A0A0A5] text-sm mt-3">Hours</span>
      </div>

      <div className="absolute bottom-0 left-0 w-full" style={{ aspectRatio: '2/1' }}>
        <svg viewBox="0 0 200 100" className="w-full h-full overflow-visible" preserveAspectRatio="xMidYMax meet">
          <defs>
            <linearGradient id="arc-grad" x1="0" y1="0" x2="1" y2="0">
              <stop ref={stop1Ref} offset="0%" stopColor="#ff40ac" />
              <stop ref={stop2Ref} offset="50%" stopColor="#6C63FF" />
              <stop ref={stop3Ref} offset="100%" stopColor="#00e676" />
            </linearGradient>

            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Thin white backdrop arc */}
          <path d="M 0 100 A 100 100 0 0 1 200 100" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />

          {/* Thick solid track */}
          <path d="M 0 100 A 100 100 0 0 1 200 100" fill="none" stroke="#252528" strokeWidth="20" strokeLinecap="butt" />

          {/* Progress filled arc */}
          <path
            ref={pathRef}
            d="M 0 100 A 100 100 0 0 1 200 100"
            fill="none"
            stroke="url(#arc-grad)"
            strokeWidth="20"
            strokeLinecap="butt"
            pathLength="100"
            strokeDasharray="50 100"
            strokeDashoffset="-25"
          />

          {/* Left Dot [~25%] */}
          <g
            onMouseEnter={() => setActiveSegment('left')}
            onMouseLeave={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="29.3" cy="29.3" r="20" fill="transparent" />

            <circle cx="29.3" cy="29.3" r="4.5" fill="#555" opacity={activeSegment === 'left' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'left' && <circle cx="29.3" cy="29.3" r="4.5" fill="#fff" filter="url(#glow)" />}
            {activeSegment === 'left' && <circle cx="29.3" cy="29.3" r="4.5" fill="#fff" />}
          </g>

          {/* Middle Dot [50%] */}
          <g
            onMouseEnter={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="100" cy="0" r="20" fill="transparent" />
            <circle cx="100" cy="0" r="4.5" fill="#555" opacity={activeSegment === 'middle' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'middle' && <circle cx="100" cy="0" r="4.5" fill="#fff" filter="url(#glow)" />}
            {activeSegment === 'middle' && <circle cx="100" cy="0" r="4.5" fill="#fff" />}
          </g>

          {/* Right Dot [~75%] */}
          <g
            onMouseEnter={() => setActiveSegment('right')}
            onMouseLeave={() => setActiveSegment('middle')}
            className="cursor-pointer"
          >
            <circle cx="170.7" cy="29.3" r="20" fill="transparent" />
            <circle cx="170.7" cy="29.3" r="4.5" fill="#555" opacity={activeSegment === 'right' ? 0 : 1} style={{ transition: 'opacity 0.2s' }} />
            {activeSegment === 'right' && <circle cx="170.7" cy="29.3" r="4.5" fill="#fff" filter="url(#glow)" />}
            {activeSegment === 'right' && <circle cx="170.7" cy="29.3" r="4.5" fill="#fff" />}
          </g>
        </svg>

        <div
          className="absolute bottom-6 left-6 text-left transition-all duration-500 pointer-events-none z-10"
          style={{ opacity: states[activeSegment].leftOp }}
        >
          <div className="flex items-center gap-2 mb-1">
            <span className="font-medium tracking-tight text-[18px]" style={{ color: states[activeSegment].leftColor, transition: 'color 0.4s' }}>2020</span>
            <span className="font-medium text-[10px] tracking-wide" style={{ color: states[activeSegment].leftHeader, transition: 'color 0.4s' }}>BOSTON</span>
          </div>
          <span className="text-[#6A6A6F] text-[10px]">42.3601° N 71.0589° W</span>
        </div>

        <div
          className="absolute bottom-6 right-6 text-right transition-all duration-500 pointer-events-none z-10"
          style={{ opacity: states[activeSegment].rightOp }}
        >
          <div className="flex items-center justify-end gap-2 mb-1">
            <span className="font-medium text-[10px] tracking-wide" style={{ color: states[activeSegment].rightHeader, transition: 'color 0.4s' }}>SAN FRANCISCO</span>
            <span className="font-medium tracking-tight text-[18px]" style={{ color: states[activeSegment].rightColor, transition: 'color 0.4s' }}>2025</span>
          </div>
          <span className="text-[#6A6A6F] text-[10px]">37.7749° N 122.4194° W</span>
        </div>
      </div>
    </div>
  );
}
