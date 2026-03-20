import React from 'react';
import Image from 'next/image';
import HomeJourneyMap from './components/HomeJourneyMap';
import TimeSpentWidget from './components/TimeSpentWidget';

const HeroWaveform = () => {
  const bars = Array.from({ length: 120 }).map((_, i) => {
    // Generate an interesting pattern
    const phase1 = Math.sin(i * 0.1) * 30;
    const phase2 = Math.cos(i * 0.05) * 15;
    const height = Math.abs(phase1 + phase2) + 20;
    return height;
  });

  return (
    <div className="absolute bottom-8 left-8 right-[30%] h-24 flex items-end gap-[4px]">
      {bars.map((h, i) => {
        // Simple color transition based on index
        let bg = 'bg-pink-500';
        if (i > 40) bg = 'bg-orange-400';
        if (i > 80) bg = 'bg-green-500';

        // Use a gradient for smooth transition
        const progress = i / 120;
        const color = `color-mix(in srgb, #ff40ac ${Math.max(0, 100 - progress * 150)}%, color-mix(in srgb, #ff9500 ${Math.max(0, 100 - Math.abs(progress - 0.5) * 200)}%, #00e676 ${Math.max(0, (progress - 0.5) * 200)}%))`;

        return (
          <div
            key={i}
            className="flex-1 rounded-t-sm w-full"
            style={{
              height: `${h}%`,
              backgroundColor: color
            }}
          />
        );
      })}
    </div>
  );
};

export default function Home() {
  return (
    <div className="flex-1 w-full p-4 flex flex-col gap-4 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 auto-rows-fr h-full min-h-[800px]">
        {/* === TOP LEFT: HERO === */}
        <div className="col-span-1 lg:col-span-2 bg-[#18181A] rounded-[16px] p-4 relative overflow-hidden text-white flex flex-col justify-start min-h-[460px] md:min-h-0">
          <div className="relative z-10 max-w-full md:max-w-[60%]">
            <h1 className="text-4xl lg:text-[42px] font-medium tracking-tight mt-2">
              Lorem ipsum dolor self
            </h1>
            <p className="text-[#A0A0A5] mt-2">Your Path to Emotional Well-Being</p>
          </div>

          <div className="relative md:absolute mt-10 md:mt-0 md:top-12 md:right-12 flex flex-col gap-5 md:gap-8 z-10">
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-[#ff40ac]" />
              <div className="flex flex-col">
                <span className="text-xs text-[#A0A0A5]">Lorem Ipsum</span>
                <span className="text-sm font-bold mt-1">
                  6.7 <span className="text-[#A0A0A5] font-normal">/ 6.7</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-[#ff9500]" />
              <div className="flex flex-col">
                <span className="text-xs text-[#A0A0A5]">Lorem Ipsum</span>
                <span className="text-sm font-bold mt-1">
                  6.7 <span className="text-[#A0A0A5] font-normal">/ 6.7</span>
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4 h-4 rounded-sm bg-[#00e676]" />
              <div className="flex flex-col">
                <span className="text-xs text-[#A0A0A5]">Lorem Ipsum</span>
                <span className="text-sm font-bold mt-1">
                  6.7 <span className="text-[#A0A0A5] font-normal">/ 6.7</span>
                </span>
              </div>
            </div>
          </div>

          <HeroWaveform />
        </div>

        {/* === TOP RIGHT: TIME SPENT === */}
        <TimeSpentWidget />

        {/* === BOTTOM LEFT: CURRENT WORK === */}
        <div className="col-span-1 bg-white rounded-[16px] p-8 xl:p-10 shadow-sm flex flex-col justify-start">
          <h2 className="text-[32px] lg:text-[40px] font-light leading-[1.1] tracking-tight text-[#111]">
            Here&apos;s what I&apos;m working on <br /> Right Now
          </h2>
        </div>

        {/* === BOTTOM MIDDLE === */}
        <div className="col-span-1 flex flex-col gap-6">
          {/* Metrics */}
          <div className="bg-white rounded-[16px] p-6 shadow-sm flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-medium text-[15px]">Research Metrics</h3>
              <span className="text-[11px] text-gray-400">Last updated: Oct 2023</span>
            </div>

            <div className="flex w-full justify-between mt-auto">
              <MetricColumn title="H-Index" value="7" color="pink" />
              <MetricColumn title="Citations" value="240" color="orange" />
              <MetricColumn title="Publications" value="102" color="green" />
            </div>
          </div>

          {/* Achievements */}
          <div className="flex-1 flex flex-col gap-3">
            <h3 className="font-medium text-[15px] ml-2 mb-1">Achievements and Goals</h3>

            <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] text-[#00e676] flex items-center justify-center">
                ✨
              </div>
              <div>
                <h4 className="font-medium text-sm">Lorem ipsum dolor</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 flex gap-4 items-center shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#E8F8F0] text-[#00e676] flex items-center justify-center">
                ✨
              </div>
              <div>
                <h4 className="font-medium text-sm">Lorem ipsum dolor</h4>
                <p className="text-[11px] text-gray-500 mt-0.5">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
              </div>
            </div>
          </div>
        </div>

        {/* === BOTTOM RIGHT: MAP === */}
        <div className="col-span-1 bg-[#18181A] rounded-[16px] p-8 relative overflow-hidden text-white flex flex-col">
          <div className="flex items-center gap-2 text-[#A0A0A5] font-medium text-sm mb-4 z-10">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect>
              <path d="M9 14h6"></path><path d="M9 10h6"></path><path d="M9 18h6"></path>
            </svg>
            MY EDUCATION
          </div>

          {/* Replace this div with actual map or SVG */}
          <div className="absolute inset-0 top-16 opacity-80 pointer-events-auto overflow-hidden">
            <HomeJourneyMap />
          </div>
        </div>

      </div>
    </div>
  );
}

// Sub-components
const MetricColumn = ({ title, value, color }: { title: string, value: string, color: 'pink' | 'orange' | 'green' }) => {
  const dots = Array.from({ length: 20 });
  const colorMap = {
    pink: 'bg-[#ff40ac]',
    orange: 'bg-[#ff9500]',
    green: 'bg-[#00e676]'
  }

  return (
    <div className="flex flex-col w-[30%]">
      <span className="text-[11px] text-gray-500 mb-1">{title}</span>
      <span className="text-3xl font-light text-[#111] mb-6">{value}</span>

      {/* Dot Matrix simulation */}
      <div className="flex gap-1 justify-center h-16 items-end mt-auto opacity-80">
        {[1, 3, 2, 4, 3, 5, 2].map((h, i) => (
          <div key={i} className="flex flex-col gap-[2px] justify-end">
            {Array.from({ length: h }).map((_, j) => (
              <div key={j} className={`w-[3px] h-[3px] rounded-full ${colorMap[color]}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const MapPoint = ({ top, left, label, active = false }: { top: string, left: string, label: string, active?: boolean }) => (
  <div className="absolute" style={{ top, left }}>
    <div className="relative group">
      <div className={`w-2 h-2 rounded-full absolute -ml-1 -mt-1 ${active ? 'bg-[#ff40ac]' : 'bg-[#e5e7eb] opacity-80'}`} />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white border border-white/20 z-20">
        {label}
      </div>
    </div>
  </div>
);
