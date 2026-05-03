"use client";

import HomeJourneyMap from "./components/HomeJourneyMap";
import TimeSpentWidget from "./components/TimeSpentWidget";
import SkillMatrix from "./components/SkillMatrix";
import Head from "next/head";
import { Sparkles, Trophy, Target, Medal, Award } from "lucide-react";
import { useEffect, useState } from "react";
import JourneyMap from "./components/JourneyMaptwo";

const ACHIEVEMENTS_AND_GOALS = [
  {
    id: 1,
    icon: Sparkles,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 2,
    icon: Trophy,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 3,
    icon: Target,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 4,
    icon: Medal,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
  {
    id: 5,
    icon: Award,
    title: "Lorem ipsum dolor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
  },
];
type HomeState = {
  timeSpent: {
    startYear: string;
    endYear: string;
    startLocation: string;
    startCoordinate: string;
    endLocation: string;
    endCoordinate: string;
    lowTimeHr: number;
    mediumTimeHr: number;
    highTimeHr: number;
  };

  currentWork: {
    details: string;
  };

  mainComponent: {
    heading: string;
    subHeading: string;
    image1: File | null;
    image2: File | null;
    image3: File | null;
  };

  researchMetrics: {
    hIndex: string;
    citations: string;
    publications: string;
    lastUpdatedOn: string;
  };

  achievementsGoals: {
    heading: string;
    subHeading: string;
  }[];
};
export default function Home() {
  const [loading, setLoading] = useState(true);
  const [homeData, setHomeData] = useState<HomeState>({
    timeSpent: {
      startYear: "",
      endYear: "",
      startLocation: "",
      startCoordinate: "",
      endLocation: "",
      endCoordinate: "",
      lowTimeHr: 0,
      mediumTimeHr: 0,
      highTimeHr: 0,
    },

    currentWork: {
      details: "",
    },

    mainComponent: {
      heading: "",
      subHeading: "",
      image1: null,
      image2: null,
      image3: null,
    },

    researchMetrics: {
      hIndex: "",
      citations: "",
      publications: "",
      lastUpdatedOn: "",
    },

    achievementsGoals: [
      {
        heading: "",
        subHeading: "",
      },
    ],
  });
  useEffect(() => {
    const getHomeData = async () => {
      try {
        const res = await fetch("/api/cms/home");
        const result = await res.json();

        if (res.ok && result?.data?.content) {
          setHomeData(result.data.content);
        }
      } catch (error) {
        console.error("Failed to fetch home data", error);
      } finally {
        setLoading(false);
      }
    };

    getHomeData();
  }, []);
  return (
    <>
      <Head>
        {/* Primary SEO */}
        <title>
          Naegleria Vaccine Design | Dr. Yethindra Vityala, 12‑Time Record
          Holder
        </title>
        <meta
          name="description"
          content="Pioneering in silico vaccine against the brain‑eating amoeba Naegleria fowleri. By Dr. Yethindra Vityala—world’s youngest scientist, 80+ publications, 12 Guinness records."
        />
        <meta
          name="keywords"
          content="Naegleria fowleri vaccine, brain-eating amoeba, in silico vaccine design, primary amebic meningoencephalitis, Dr Yethindra Vityala"
        />
        <meta name="author" content="Dr. Yethindra Vityala" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Social */}
        <meta
          property="og:title"
          content="Naegleria Vaccine Design | Dr. Yethindra Vityala"
        />
        <meta
          property="og:description"
          content="Advancing rapid‑access, computationally‑designed vaccines against fatal Naegleria fowleri infections. 80+ PMC/Wiley publications, 12 Guinness world records."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-naegleria-vaccine.jpg"
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Naegleria Vaccine Design | Dr. Yethindra Vityala"
        />
        <meta
          name="twitter:description"
          content="Pioneering in silico vaccine against the brain‑eating amoeba Naegleria fowleri. 80+ publications, 12 Guinness records."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-naegleria-vaccine.jpg"
        />
      </Head>
      <div className="w-full p-2 md:p-2.5 lg:p-3 flex flex-col gap-2 font-sans pb-10 md:pb-6 lg:pb-3 lg:h-full lg:max-h-[calc(100vh-80px)] lg:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-auto lg:auto-rows-fr lg:h-full lg:min-h-0">
          {/* === TOP LEFT: DESIGN SKILL MATRIX === */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#18181A] rounded-[16px] relative overflow-hidden text-white flex flex-col h-[360px] sm:h-[300px] md:h-[320px] lg:h-full lg:min-h-0">
            <SkillMatrix />
          </div>

          {/* === TOP RIGHT TIME SPENT === */}
          <TimeSpentWidget data={homeData.timeSpent} />

          {/* === BOTTOM LEFT: CURRENT WORK === */}
          <div className="col-span-1 bg-white rounded-[16px] shadow-sm flex flex-col justify-between overflow-hidden relative min-h-0">
            <div className="p-3 sm:p-4 lg:p-5 flex-1">
              <h3 className="font-medium text-[12px] sm:text-[13px] lg:text-[14px] mb-2 text-gray-500">
                What I&apos;m working on right now
              </h3>
              <h2 className="vit-page-title text-[16px] sm:text-[18px] md:text-[20px] lg:text-[15px] font-medium leading-[1.15] tracking-tight text-[#111] pr-2">
                {homeData.currentWork.details}
              </h2>
            </div>

            <div className="relative px-3 sm:px-4 lg:px-5 pb-3 sm:pb-4 lg:pb-25">
              {/* Border + pill shifted together as one unit */}
              <div className="absolute top-0 left-0 right-0 -translate-y-[85%]">
                <div className="border-t border-black/5 w-full" />
                <div className="absolute top-0 left-3 sm:left-4 lg:left-5 -translate-y-1/2 inline-flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 bg-white border border-black/10 rounded-full text-[9px] sm:text-[10px] font-medium text-[#444] shadow-sm">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="#ffedd5"
                    stroke="#ea580c"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                  <span className="hidden sm:inline">
                    Brain-Eating Amoeba Defense
                  </span>
                  <span className="sm:hidden">Amoeba Defense</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-[12px] text-gray-500 leading-[1.6] mt-6 sm:mt-7 tracking-tight">
                Currently advancing in silico vaccine candidates against{" "}
                <span className="italic">Naegleria fowleri</span>, targeting
                rapid-access therapies for fatal infections via computational
                modeling and validation building on 80+ publications in
                infectious diseases.{" "}
                <span className="text-gray-400">[pmc.ncbi.nlm.nih]</span>
              </p>
            </div>
          </div>

          {/* === BOTTOM MIDDLE === */}
          <div className="col-span-1 flex flex-col gap-2 min-h-[360px] sm:min-h-[364px] md:min-h-[320px] lg:min-h-0">
            {/* Metrics */}
            <div style={{maxHeight:'166px', paddingBottom:'8px', paddingTop:'8px'}} className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm shrink-0 flex flex-col border border-gray-100">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-[13px] sm:text-[14px] lg:text-[12px] text-[#222]">
                  Research Metrics
                </h3>
                <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium">
                  Last updated: {homeData.researchMetrics.lastUpdatedOn}
                </span>
              </div>

              <div className="flex w-full mt-auto items-stretch pt-2 pb-1">
                <MetricColumn
                  title="H-Index"
                  value={homeData.researchMetrics.hIndex}
                  color="pink"
                />
                <div className="w-px bg-gray-200 mx-2 sm:mx-3 lg:mx-4 my-1" />
                <MetricColumn
                  title="Citations"
                  value={homeData.researchMetrics.citations}
                  color="orange"
                />
                <div className="w-px bg-gray-200 mx-2 sm:mx-3 lg:mx-4 my-1" />
                <MetricColumn
                  title="Publications"
                  value={homeData.researchMetrics.publications}
                  color="green"
                />
              </div>
            </div>

            {/* Achievements and Goals */}
            <div style={{overflow:'auto'}} className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm flex-1 flex flex-col border border-gray-100 min-h-0 relative">
              <h3 className="font-medium text-[13px] sm:text-[14px] lg:text-[12px] text-[#222] mb-1 lg:mb-2 z-10 shrink-0">
                Achievements and Goals
              </h3>

              <div
                data-lenis-prevent="true"
                className="flex-1 overflow-y-auto pr-2 pb-1 space-y-2 scroll-smooth
    max-h-[220px] sm:max-h-[235px] lg:max-h-[245px]


    [&::-webkit-scrollbar]:w-[6px]
    [&::-webkit-scrollbar-track]:bg-transparent

    [&::-webkit-scrollbar-thumb]:bg-gradient-to-b
    [&::-webkit-scrollbar-thumb]:from-gray-300
    [&::-webkit-scrollbar-thumb]:to-gray-400
    [&::-webkit-scrollbar-thumb]:rounded-full

    hover:[&::-webkit-scrollbar-thumb]:from-gray-400
    hover:[&::-webkit-scrollbar-thumb]:to-gray-500

    /* Firefox */
    [scrollbar-width:thin]
    [scrollbar-color:#9CA3AF_transparent]
    "
              >
                {homeData.achievementsGoals.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F9FA] rounded-[10px] p-2 sm:p-2.5 flex gap-2 sm:gap-2.5 items-center shrink-0 min-h-[72px] sm:min-h-[78px]"
                  >
                    <div className="bg-[#E6F6ED] p-1.5 lg:p-2 rounded-full text-[#10B981] shrink-0">
                      <span className="text-[16px] sm:text-[18px] font-bold flex items-center justify-center w-[32px] h-[32px] sm:w-[36px] sm:h-[36px]">
                        ★
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h4 className="text-[12px] sm:text-[13px] lg:text-[11px] font-medium text-[#111] leading-tight mb-1">
                        {item.heading}
                      </h4>
                      <p className="text-[10px] sm:text-[11px] lg:text-[9px] text-gray-500 leading-snug">
                        {item.subHeading}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === BOTTOM RIGHT: MAP === */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#18181A] rounded-[16px] p-3 sm:p-4 relative overflow-hidden text-white flex flex-col min-h-[360px] sm:min-h-[360px] md:min-h-[300px] lg:min-h-0 lg:h-full">
            <div className="flex items-center gap-1.5 text-[#A0A0A5] font-medium text-[9px] sm:text-[10px] mb-2 z-10">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect>
                <path d="M9 14h6"></path>
                <path d="M9 10h6"></path>
                <path d="M9 18h6"></path>
              </svg>
              MY EDUCATION
            </div>

            {/* Replace this div with actual map or SVG */}
            <div className="absolute inset-0 top-10 opacity-80 pointer-events-auto overflow-hidden">
              <JourneyMap />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

// Sub-components
const MetricColumn = ({
  title,
  value,
  color,
}: {
  title: string;
  value: string;
  color: "pink" | "orange" | "green";
}) => {
  const colorMap = {
    pink: "bg-[#FF72E0]",
    orange: "bg-[#FFA94D]",
    green: "bg-[#00D084]",
  };

  // Precise dot array sequences mapped from the layout
  const heights = [2, 3, 1, 1, 2, 1, 2, 1];

  return (
    <div className="flex flex-col flex-1 pl-1">
      <span className="text-[10px] sm:text-[11px] lg:text-[12px] text-gray-500 mb-1">
        {title}
      </span>
      <span className="text-[18px] sm:text-[20px] lg:text-[17px] tracking-tight text-[#111] leading-none mb-2 ">
        {value}
      </span>

      {/* Dot Matrix simulation */}
      <div className="flex justify-between items-end mt-auto h-5 sm:h-6 lg:h-8 w-full pr-2 opacity-90">
        {heights.map((h, i) => (
          <div
            key={i}
            className="flex flex-col gap-[4px] sm:gap-[5px] justify-end"
          >
            {Array.from({ length: h }).map((_, j) => (
              <div
                key={j}
                className={`w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] lg:w-[5.5px] lg:h-[5.5px] rounded-full ${colorMap[color]}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const MapPoint = ({
  top,
  left,
  label,
  active = false,
}: {
  top: string;
  left: string;
  label: string;
  active?: boolean;
}) => (
  <div className="absolute" style={{ top, left }}>
    <div className="relative group">
      <div
        className={`w-2 h-2 rounded-full absolute -ml-1 -mt-1 ${active ? "bg-[#ff40ac]" : "bg-[#e5e7eb] opacity-80"}`}
      />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white border border-white/20 z-20">
        {label}
      </div>
    </div>
  </div>
);
