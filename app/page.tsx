"use client";

import HomeJourneyMap from "./components/HomeJourneyMap";
import TimeSpentWidget from "./components/TimeSpentWidget";
import SkillMatrix from "./components/SkillMatrix";
import Head from "next/head";
import Image from "next/image";
import { Sparkles, Trophy, Target, Medal, Award } from "lucide-react";
import { useEffect, useState } from "react";
import JourneyMap from "./components/JourneyMaptwo";

const achievementIconMap: Record<string, string> = {
  "International Physician-Scientist of the Year 2026":
    "/icons/H - International Physician-Scientist of the Year 2026.png",
  "ASCO Direct GI 2026 Dual Award Winner":
    "/icons/H - ASCO Direct GI 2026 Dual Award Winner.png",
  "World's Youngest Scientist in Medicine":
    "/icons/H - World_s Youngest Scientist in Medicine.png",
  "110+ Peer-Reviewed Publications":
    "/icons/H - 110+ Peer-Reviewed Publications.png",
  "12-Time World Record Holder":
    "/icons/H - 12-Time World Record Holder.png",
};

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
    title: string;
    tag: string;
    description: string;
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
      title: "",
      tag: "",
      description: "",
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
        heading: "International Physician-Scientist of the Year 2026",
        subHeading:
          "Recognized as the 2026 top honoree for a decade of prolific contributions to clinical research and medical education across four continents.",
      },
      {
        heading: "ASCO Direct GI 2026 Dual Award Winner",
        subHeading:
          'Achieved an unprecedented sweep of the "Best Poster" and "Best Presenter" awards for pioneering pharmacogenetic opioid safety research at the ASCO Direct GI Symposium.',
      },
      {
        heading: "World's Youngest Scientist in Medicine",
        subHeading:
          'Recognized as the "World\'s Youngest Scientist in Medicine" at age 21, a title earned through a prolific body of original research conducted during undergraduate studies.',
      },
      {
        heading: "110+ Peer-Reviewed Publications",
        subHeading:
          "Author of 100+ peer-reviewed articles in high-impact journals, including Wiley, Springer, and Elsevier, bridging molecular science and clinical application.",
      },
      {
        heading: "12-Time World Record Holder",
        subHeading:
          "Holds the Guinness World Record for the \"Longest Title of a Book\" (26,021 characters) and completed 51 medical courses from top global universities in 9 days.",
      },
    ],
  });
  useEffect(() => {
    const getHomeData = async () => {
      try {
        const res = await fetch("/api/cms/home");
        const result = await res.json();

        if (res.ok && result?.data?.content) {
          const content = result.data.content;
          setHomeData({
            ...content,
            currentWork:
              typeof content.currentWork === "string"
                ? {
                    title: "",
                    tag: "",
                    description: content.currentWork,
                  }
                : {
                    title: content.currentWork?.title || "",
                    tag: content.currentWork?.tag || "",
                    description: content.currentWork?.description || "",
                  },
          });
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
      <div className="w-full p-2 md:p-2.5 lg:p-3 flex flex-col gap-2 font-sans pb-10 md:pb-6 lg:pb-3 lg:h-full lg:max-h-[calc(100vh-80px)] lg:overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 auto-rows-auto lg:auto-rows-fr lg:h-full lg:min-h-0">
          {/* === TOP LEFT: DESIGN SKILL MATRIX === */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 bg-[#18181A] rounded-[16px] relative overflow-hidden text-white flex flex-col h-[340px] sm:h-[300px] md:h-[320px] lg:h-full lg:min-h-0">
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
              <h2 style={{fontSize:'20px !important'}} className=" text-[16px] sm:text-[18px] md:text-[20px] lg:text-[15px] font-medium leading-[1.15] tracking-tight text-[#111] pr-2">
                {homeData.currentWork.title}
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
                  <span className="hidden sm:inline">{homeData.currentWork.tag}</span>
                  <span className="sm:hidden">{homeData.currentWork.tag}</span>
                </div>
              </div>

              <p className="text-[11px] sm:text-[12px] text-gray-500 leading-[1.6] mt-6 sm:mt-7 tracking-tight">
                {homeData.currentWork.description}
              </p>
            </div>
          </div>

          {/* === BOTTOM MIDDLE == */}
          <div className="col-span-1 flex flex-col gap-2 min-h-[360px] sm:min-h-[364px] md:min-h-[320px] lg:min-h-0">
            {/* Metrics */}
            <div style={{maxHeight:'144px', paddingBottom:'6px', paddingTop:'6px'}} className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm shrink-0 flex flex-col border border-gray-100">
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
            <div className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm flex-1 flex flex-col border border-gray-100 min-h-0 relative overflow-hidden">
            <h3 className="font-medium text-[13px] sm:text-[14px] lg:text-[12px] text-[#222] mb-1 lg:mb-2 z-10 shrink-0">
                Achievements and Goals
              </h3>

              <AutoScrollAchievements items={homeData.achievementsGoals} />
            </div>
          </div>

          {/* === BOTTOM RIGHT: MAP === */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 bg-[#18181A] rounded-[16px] p-3 sm:p-4 relative z-40 overflow-hidden text-white flex flex-col min-h-[360px] sm:min-h-[360px] md:min-h-[300px] lg:min-h-0 lg:h-full">
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
              <JourneyMap zoomed />
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

const AutoScrollAchievements = ({
  items,
}: {
  items: HomeState["achievementsGoals"];
}) => {
  const cards = items.length > 0 ? items : [{ heading: "", subHeading: "" }];
  const shouldAnimate = cards.length > 1;

  return (
    <div className="relative flex-1 min-h-0">
      <div className="h-full max-h-[250px] sm:max-h-[270px] lg:max-h-[290px] overflow-hidden pr-2 pb-1">
        <div
          className={`${shouldAnimate ? "achievements-auto-scroll" : ""} flex flex-col`}
        >
          <div className="flex flex-col gap-2">
            {cards.map((item, idx) => (
              <div
                key={`${item.heading}-${item.subHeading}-${idx}`}
                className="bg-[#F8F9FA] rounded-[10px] p-2 sm:p-2.5 flex gap-2 sm:gap-2.5 items-center shrink-0 min-h-[72px] sm:min-h-[78px]"
              >
                <div className="bg-[#E6F6ED] p-1.5 lg:p-2 rounded-full text-[#10B981] shrink-0 flex items-center justify-center w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
                  {achievementIconMap[item.heading] ? (
                    <Image
                      src={achievementIconMap[item.heading]}
                      alt={item.heading}
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  ) : (
                    <span className="text-[16px] sm:text-[18px] font-bold">*</span>
                  )}
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

          {shouldAnimate ? (
            <div className="flex flex-col gap-2" aria-hidden="true">
              {cards.map((item, idx) => (
                <div
                  key={`${item.heading}-${item.subHeading}-dup-${idx}`}
                  className="bg-[#F8F9FA] rounded-[10px] p-2 sm:p-2.5 flex gap-2 sm:gap-2.5 items-center shrink-0 min-h-[72px] sm:min-h-[78px]"
                >
                  <div className="bg-[#E6F6ED] p-1.5 lg:p-2 rounded-full text-[#10B981] shrink-0 flex items-center justify-center w-[40px] h-[40px] sm:w-[44px] sm:h-[44px]">
                    {achievementIconMap[item.heading] ? (
                      <Image
                        src={achievementIconMap[item.heading]}
                        alt={item.heading}
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    ) : (
                      <span className="text-[16px] sm:text-[18px] font-bold">*</span>
                    )}
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
          ) : null}
        </div>
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

