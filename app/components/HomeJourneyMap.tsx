"use client";

import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line
} from "react-simple-maps";
import { useState } from "react";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

export default function HomeJourneyMap() {

  const [active, setActive] = useState<{ name: string; coords: [number, number]; items: { title: string; org: string; year: string }[] } | null>(null);

  const points = [
    {
      name: "Rome, Italy",
      coords: [12.4964, 41.9028],
      items: [
        {
          title: "Master in Public Health",
          org: "Guglielmo Marconi University",
          year: "2024–2026"
        }
      ]
    },

    {
      name: "Faridabad, India",
      coords: [77.3178, 28.4089],
      items: [
        {
          title: "Master of Business Administration",
          org: "Manav Rachna University",
          year: "2023–2025"
        }
      ]
    },

    {
      name: "Bishkek, Kyrgyzstan",
      coords: [74.5698, 42.8746],
      items: [
        {
          title: "MBBS",
          org: "International Higher School of Medicine",
          year: "2016–2021"
        },
        {
          title: "Doctor",
          org: "City Clinical Hospital No.1",
          year: "2021–Present"
        },
        {
          title: "Associate Professor",
          org: "Kyrgyz State Medical Academy",
          year: "2021–Present"
        },
        {
          title: "Associate Professor",
          org: "International Higher School of Medicine",
          year: "2021–Present"
        }
      ]
    },

    {
      name: "Warangal, India",
      coords: [79.5941, 17.9689],
      items: [
        {
          title: "Intermediate (11th & 12th)",
          org: "S.R. Junior College",
          year: "2013–2015"
        },
        {
          title: "10th Standard",
          org: "Tejaswi Concept High School",
          year: "2012–2013"
        }
      ]
    },

    {
      name: "Hyderabad, India",
      coords: [78.4867, 17.3850],
      items: [
        {
          title: "Founder & CEO",
          org: "Scivyt Research Technologies Pvt Ltd",
          year: "2024–Present"
        }
      ]
    },

    {
      name: "Mangalore, India",
      coords: [74.8560, 12.9141],
      items: [
        {
          title: "Associate Professor",
          org: "AJ Institute of Medical Sciences",
          year: "2023–Present"
        }
      ]
    }
  ];

  return (

    <div className="w-full h-full relative flex items-center justify-center -mt-8 ml-8">

      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 600,
          center: [55, 32]
        }}
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#2A2A2D"
                stroke="#18181A"
                strokeWidth={1}
              />
            ))
          }
        </Geographies>

        {/* animated journey route */}

        <Line
          from={[79.5941, 17.9689]}
          to={[74.5698, 42.8746]}
          stroke="#A0A0A5"
          strokeWidth={1}
          className="route-line"
        />

        <Line
          from={[74.5698, 42.8746]}
          to={[12.4964, 41.9028]}
          stroke="#A0A0A5"
          strokeWidth={1}
          className="route-line"
        />

        {/* markers */}

        {points.map((p, i) => {

          const padding = 24;
          const textWidth = p.name.length * 12;
          const boxWidth = textWidth + padding;

          return (

            <Marker
              key={i}
              coordinates={p.coords as [number, number]}
              onMouseEnter={() => setActive({ ...p, coords: p.coords as [number, number] })}
              onMouseLeave={() => setActive(null)}
            >

              <circle
                r={active?.name === p.name ? 10 : 5}
                fill={active?.name === p.name ? "#ff40ac" : "#fff"}
                className="cursor-pointer transition-all"
              />

              {active?.name === p.name && (
                <>
                  <rect
                    x={-boxWidth / 2}
                    y={-42}
                    width={boxWidth}
                    height="32"
                    rx="6"
                    fill="#ffffff"
                  />

                  <text
                    y={-20}
                    textAnchor="middle"
                    fill="#000000"
                    fontSize="20"
                    fontWeight="600"
                  >
                    {p.name}
                  </text>
                </>
              )}

            </Marker>

          )

        })}

      </ComposableMap>

      {/* tooltip */}

      {active && (

        <div className="absolute top-10 left-4 bg-[#2A2A2D]/90 backdrop-blur-md p-3 rounded-xl border border-white/10 min-w-[140px] pointer-events-none z-[100] text-left shadow-2xl max-w-[180px]">

          <h4 className="text-white text-[12px] font-semibold mb-2">{active.name}</h4>

          {active.items.map((item, i) => (

            <div key={i} className="mb-2 last:mb-0">

              <strong className="block text-[11px] text-white/90 leading-tight mb-0.5">{item.title}</strong>
              <p className="text-[10px] text-[#A0A0A5] leading-tight mb-0.5">{item.org}</p>
              <span className="text-[9px] text-[#ff40ac] font-medium block">{item.year}</span>

            </div>

          ))}

        </div>

      )}

    </div>

  )

}
