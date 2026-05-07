"use client";

import React, { useState, useEffect } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  useMapContext,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin } from "lucide-react";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

interface JourneyItem {
  title: string;
  org: string;
  year: string;
}

interface Point {
  name: string;
  country: string;
  pursuit: string;
  coords: [number, number];
  items: JourneyItem[];
  color?: string;
}

const points: Point[] = [
  {
    name: "Hyderabad",
    country: "India",
    pursuit: "Entrepreneurship",
    coords: [78.4867, 17.3850],
    color: "#ffff00",
    items: [
      {
        title: "Founder & CEO",
        org: "Scivyt Research Technologies Pvt Ltd",
        year: "2024–Present",
      },
    ],
  },
  {
    name: "Warangal",
    country: "India",
    pursuit: "Early Education",
    coords: [79.5941, 17.9689],
    color: "#ff40ac",
    items: [
      {
        title: "Intermediate (11th & 12th)",
        org: "S.R. Junior College",
        year: "2013–2015",
      },
      {
        title: "10th Standard",
        org: "Tejaswi Concept High School",
        year: "2012–2013",
      },
    ],
  },
  {
    name: "Faridabad",
    country: "India",
    pursuit: "Business Administration",
    coords: [77.3178, 28.4089],
    color: "#ffff00",
    items: [
      {
        title: "Master of Business Administration",
        org: "Manav Rachna University",
        year: "2023–2025",
      },
    ],
  },
  {
    name: "Bishkek",
    country: "Kyrgyzstan",
    pursuit: "MBBS Degree",
    coords: [74.5698, 42.8746],
    color: "#00ffcc",
    items: [
      {
        title: "MBBS",
        org: "International Higher School of Medicine",
        year: "2016–2021",
      },
      {
        title: "Doctor",
        org: "City Clinical Hospital No.1",
        year: "2021–Present",
      },
    ],
  },
  {
    name: "Rome",
    country: "Italy",
    pursuit: "Public Health Masters",
    coords: [12.4964, 41.9028],
    color: "#ff40ac",
    items: [
      {
        title: "Master in Public Health",
        org: "Guglielmo Marconi University",
        year: "2024–2026",
      },
    ],
  },
];

const AnimatedLine = ({ 
  from, 
  to, 
  color = "#A0A0A5", 
  activePoint,
  delay = 0
}: { 
  from: [number, number], 
  to: [number, number], 
  color?: string,
  activePoint: [number, number] | null,
  delay?: number
}) => {
  const { projection } = useMapContext();
  
  const [start, end] = [projection(from), projection(to)];
  if (!start || !end) return null;

  const [x1, y1] = start;
  const [x2, y2] = end;

  const isHighlighted = activePoint && (
    (Math.abs(activePoint[0] - from[0]) < 0.001 && Math.abs(activePoint[1] - from[1]) < 0.001) ||
    (Math.abs(activePoint[0] - to[0]) < 0.001 && Math.abs(activePoint[1] - to[1]) < 0.001)
  );

  const midX = (x1 + x2) / 2;
  const midY = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const dist = Math.sqrt(dx * dx + dy * dy);
  
  const offsetX = -dy * (dist * 0.001);
  const offsetY = dx * (dist * 0.001) - dist * 0.2;

  const cx = midX + offsetX;
  const cy = midY + offsetY;

  const pathData = `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2}`;

  return (
    <g>
      <path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth={isHighlighted ? "2" : "1"}
        strokeOpacity={isHighlighted ? "0.3" : "0.1"}
        style={{ transition: "all 0.3s ease" }}
      />
      <motion.path
        d={pathData}
        fill="none"
        stroke={color}
        strokeWidth={isHighlighted ? "2.5" : "1.5"}
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ 
          pathLength: 1, 
          opacity: isHighlighted ? 1 : 0.8,
          strokeWidth: isHighlighted ? 2.5 : 1.5
        }}
        style={{ 
          filter: isHighlighted ? `url(#glow)` : "none",
          transition: "stroke 0.3s ease, stroke-width 0.3s ease, opacity 0.3s ease"
        }}
        transition={{ 
          pathLength: { duration: 2, ease: "easeInOut", delay: delay },
          opacity: { duration: 0.6, delay: delay },
          strokeWidth: { duration: 0.3 }
        }}
      />
    </g>
  );
};

interface JourneyMapProps {
  compact?: boolean;
}

export default function JourneyMap({ compact = false }: JourneyMapProps) {
  const [active, setActive] = useState<Point | null>(null);
  const [selected, setSelected] = useState<Point | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);

    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const mapScale = compact ? (isMobile ? 150 : 190) : 440;
  const mapCenter: [number, number] = compact ? (isMobile ? [55, 18] : [55, 15]) : [55, 28];
  const mapTransform = compact ? (isMobile ? "translateY(0)" : "translateY(-190px)") : "none";

  return (
    <div className={`w-full h-full bg-[#0A0A0A] flex flex-col overflow-hidden font-sans text-white select-none ${compact ? "p-1.5 sm:p-2" : "p-8"}`}>
      {/* <div className="flex items-center gap-3 mb-8 opacity-80">
        <div className="p-2 bg-white/5 rounded-lg border border-white/10">
          <Globe className="w-5 h-5 text-white" />
        </div>
        <span className="text-sm font-bold tracking-[0.2em] uppercase text-white/90">My Experience</span>
      </div> */}

      <div className={`relative flex-1 w-full ${compact ? "flex items-center justify-center" : ""}`}>
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: mapScale,
            center: mapCenter,
          }}
          className="w-full h-full"
          style={{ width: "100%", height: "100%", overflow: "visible", transform: mapTransform }}
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="6"
              height="6"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#4a4a52" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>

          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="url(#dots)"
                  stroke="#151518"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: "none" },
                    hover: { outline: "none" },
                    pressed: { outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* Animated Journey Routes - Staggered Delays */}
          <AnimatedLine from={[78.4867, 17.3850]} to={[79.5941, 17.9689]} color="#ffff00" activePoint={active?.coords || null} delay={1} />
          <AnimatedLine from={[79.5941, 17.9689]} to={[77.3178, 28.4089]} color="#ff40ac" activePoint={active?.coords || null} delay={3} />
          <AnimatedLine from={[77.3178, 28.4089]} to={[74.5698, 42.8746]} color="#ffff00" activePoint={active?.coords || null} delay={5} />
          <AnimatedLine from={[74.5698, 42.8746]} to={[12.4964, 41.9028]} color="#00ffcc" activePoint={active?.coords || null} delay={7} />

          {/* Markers */}
          {points.map((p, i) => {
            // Dynamic label positioning to avoid overlap
            let transform = "translate(12, 0)";
            if (p.name === "Hyderabad") transform = "translate(-100, 20)";
            if (p.name === "Warangal") transform = "translate(12, 20)";
            if (p.name === "Faridabad") transform = "translate(-100, -50)";
            if (p.name === "Bishkek") transform = "translate(12, -40)";
            if (p.name === "Rome") transform = "translate(12, 0)";

            return (
              <Marker
                key={i}
                coordinates={p.coords}
                onMouseEnter={() => setActive(p)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setSelected(p)}
              >
                <motion.circle
                  r={active?.name === p.name ? 6 : 4}
                  fill={p.color || "#fff"}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 2, duration: 0.5 }}
                  className="cursor-pointer"
                  style={{ 
                    filter: active?.name === p.name ? `url(#glow)` : "none",
                    opacity: active && active.name !== p.name ? 0.4 : 1
                  }}
                />
                
                {(active?.name === p.name || i % 1 === 0) && (
                  <motion.g 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 2 + 0.5 }}
                    transform={transform}
                  >
                    <rect
                      x="0"
                      y="-14"
                      width="200"
                      height="36"
                      rx="18"
                      fill="rgba(15, 15, 18, 0.85)"
                      stroke="rgba(255, 255, 255, 0.15)"
                      className="pointer-events-none backdrop-blur-md"
                    />
                    <text
                      x="15"
                      y="-2"
                      fontSize="13"
                      fill="#FFFFFF"
                      className="pointer-events-none font-bold"
                    >
                      {p.country}
                    </text>
                    <text
                      x="15"
                      y="14"
                      fontSize="11"
                      fill="#A0A0A5"
                      className="pointer-events-none font-medium italic"
                    >
                      {p.pursuit}
                    </text>
                  </motion.g>
                )}
              </Marker>
            );
          })}
        </ComposableMap>


        {/* Hover Tooltip */}
        <AnimatePresence>
          {active && !selected && (
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -20, scale: 0.95 }}
              className="absolute top-[-44px] left-0 bg-[#0F0F12]/95 backdrop-blur-2xl p-3 rounded-2xl border border-white/10 min-w-[210px] max-w-[240px] pointer-events-none z-50 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-2 mb-3">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse shrink-0" 
                  style={{ backgroundColor: active.color, boxShadow: `0 0 15px ${active.color}` }} 
                />
                <h4 className="text-[11px] sm:text-sm font-bold text-white uppercase tracking-[0.18em] leading-tight break-words">
                  {active.name}
                </h4>
              </div>

              <div className="space-y-3">
                {active.items.map((item, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-4 border-l-2 border-white/5"
                  >
                    <strong className="block text-[11px] sm:text-[12px] text-white font-semibold mb-0.5 leading-tight break-words">{item.title}</strong>
                    <p className="text-[10px] sm:text-[11px] text-[#A0A0A5] mb-1 font-medium leading-snug break-words">{item.org}</p>
                    <div className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/5 border border-white/10">
                      <span 
                        className="text-[10px] sm:text-[11px] font-bold tracking-tighter"
                        style={{ color: active.color }}
                      >
                        {item.year}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Detailed Modal */}
        <AnimatePresence>
          {selected && (
            <div className="fixed inset-0 flex items-center justify-center z-[100] p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={() => setSelected(null)}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-md bg-[#0F0F12] border border-white/10 rounded-[2rem] overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]"
              >
                {/* Modal Header */}
                <div className="p-5 pb-3 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2.5 mb-2">
                      <div 
                        className="w-3.5 h-3.5 rounded-full shrink-0" 
                        style={{ backgroundColor: selected.color, boxShadow: `0 0 20px ${selected.color}` }} 
                      />
                      <h2 className="text-lg sm:text-xl font-bold tracking-tight leading-tight">{selected.name}</h2>
                    </div>
                    <p className="text-[#A0A0A5] font-medium">{selected.country} — {selected.pursuit}</p>
                  </div>
                  <button 
                    onClick={() => setSelected(null)}
                    className="p-2 hover:bg-white/5 rounded-full transition-colors group cursor-pointer"
                  >
                    <div className="w-6 h-6 flex items-center justify-center relative">
                      <div className="absolute w-full h-0.5 bg-white/40 rotate-45 group-hover:bg-white transition-colors" />
                      <div className="absolute w-full h-0.5 bg-white/40 -rotate-45 group-hover:bg-white transition-colors" />
                    </div>
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-5 pt-2 space-y-5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                  {selected.items.map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.2 }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 mb-2.5">
                        <div className="w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-white/20 transition-all shrink-0">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <span 
                          className="text-[10px] sm:text-xs font-bold px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10"
                          style={{ color: selected.color }}
                        >
                          {item.year}
                        </span>
                      </div>
                      <div className="pl-12 sm:pl-[3.25rem]">
                        <h3 className="text-[13px] sm:text-sm font-semibold mb-1 group-hover:text-white transition-colors leading-tight break-words">{item.title}</h3>
                        <p className="text-[10px] sm:text-[11px] text-[#A0A0A5] leading-snug break-words">{item.org}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Modal Footer Decor */}
                <div className="p-5 pt-0 opacity-20 pointer-events-none">
                  <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

