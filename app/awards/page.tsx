"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import "./awards-records.css";
import "../about/about.css";
import { User } from "lucide-react";

type WorldRecordCard = {
  title: string;
  source: string;
  description: string;
};

type AwardCard = {
  title: string;
  year: string;
  source: string;
  description: string;
};

type AwardsCmsData = {
  pageTag: string;
  informativeComponent: {
    tag: string;
    description: string;
    keywords: string[];
  };
  worldRecords: WorldRecordCard[];
  awards: AwardCard[];
};

const fallbackAwardsData: AwardsCmsData = {
  pageTag: "Global Prodigy Honors",
  informativeComponent: {
    tag: "Achievement Mastery",
    description:
      "In a decade, Dr. Yethindra Vityala achieved 12 international world records and received over 25 awards. These achievements come from his relentless commitment to advancing medical science and education.",
    keywords: [
      "World Records",
      "Medical Research",
      "Awards & Honours",
      "Academic Excellence",
      "Global Recognition",
      "Physician-Scientist",
    ],
  },
  worldRecords: [
    {
      title: "Longest title of a book",
      source: "Guinness World Records, 2020",
      description:
        "In 2020, the Guinness World Records acknowledged the longest title of a book, with over 3,777 words and 26,021 characters. Starting with The Historical Development of the Heart..., it lists every known species with a heart, marking an unparalleled achievement.",
    },
    {
      title: "World's Youngest Scientist in Medicine",
      source:
        "High Range Book of World Records, Assam Book of Records, World Record Certification Agency, and Assist World Records, 2019",
      description:
        "At 22, Dr. Yethindra Vityala achieved what many scientists strive for, publishing path-breaking peer-reviewed medical research papers and earning the title of the world's Youngest Scientist in Medicine.",
    },
    {
      title: "Fastest Research Study Accomplished in the World",
      source: "High Range Book of World Records, 2020",
      description:
        "In 2020, Dr. Yethindra Vityala set a world record for the fastest research study, marking a milestone in his medical-science career.",
    },
    {
      title: "First person in the world to complete 20 medical courses at 10 universities in 9 days",
      source: "World Record Certification Agency, 2019",
      description:
        "In 2019, Dr. Yethindra Vityala completed 20 medical courses at 10 universities in 9 days, meeting formal academic standards with remarkable intensity and focus.",
    },
    {
      title: "Youngest person to write a trilingual book",
      source: "World Record Certification Agency, 2019",
      description:
        "In 2019, Dr. Yethindra Vityala received a world record as the youngest person to write a trilingual book, Essentials of Hematology, in English, Hindi, and Russian.",
    },
    {
      title: "Most Medical Related Certificates Received in 9 Days",
      source: "World Record Certification Agency, 2019",
      description:
        "In 2019, Dr. Yethindra Vityala set a world record by obtaining 51 medical-related certificates in 9 days from universities, organizations, and educational platforms.",
    },
  ],
  awards: [
    {
      title: "International Distinguished Young Researcher",
      year: "2020",
      source: "Green Thinkerz",
      description:
        "Acknowledged for remarkable contributions to medical research at a young age, positioning him as a leading researcher.",
    },
    {
      title: "Mahatma Gandhi National Award",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum",
      description:
        "Bestowed for his impact on science and society, recognizing achievements in academic and medical advancements.",
    },
    {
      title: "Ambassador of Peace",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum",
      description:
        "Honored for breaking linguistic, cultural, and geographical barriers to make medical knowledge more accessible.",
    },
    {
      title: "Honorary Doctorate (Doctor of Science)",
      year: "2020",
      source: "Global Peace University, USA",
      description:
        "Received for groundbreaking medical research achievements and authored scientific works in three languages.",
    },
    {
      title: "Karmaveer Chakra Award",
      year: "2021",
      source: "iCONGO and the United Nations",
      description:
        "Recognizes bravery and dedication to the service of humanity through medical research and education.",
    },
    {
      title: "Champion of the Champions (MedEngage Award)",
      year: "2021",
      source: "MedEngage Scholarship Summit",
      description:
        "Top honor awarded for exceptional contributions to medical research and its impact on future professionals.",
    },
    {
      title: "Global Under 30 Leadership Summit (Winner)",
      year: "2022",
      source: "Global Under 30 Leadership Summit",
      description:
        "Celebrated as a top leader under 30 across fields for significant contributions to medical science and research.",
    },
    {
      title: "Dr. Yellapragada Subbarao Memorial Award",
      year: "2022",
      source: "Biomedical science recognition",
      description:
        "Acknowledges exceptional contributions to research and places him among esteemed Indian scientific accomplishments.",
    },
    {
      title: "50 Aspiring Authors & Researchers (Winner)",
      year: "2022",
      source: "National recognition",
      description:
        "An honor for visionary leadership in medical research and authorship.",
    },
    {
      title: "Nationwide Award for Under 30 Emerging Industry Experts (Winner)",
      year: "2023",
      source: "Business Mint",
      description:
        "Recognizes one of India's most impactful young specialists under 30 across various fields.",
    },
    {
      title: "International Physician-Scientist of the Year",
      year: "2026",
      source: "Global recognition",
      description:
        "Acknowledges a decade of dedication to medical science as a practicing doctor and prolific researcher.",
    },
    {
      title: "Best Poster Award & Best Presenter Award (ASCO Direct GI 2026)",
      year: "2026",
      source: "Global Healthcare Academy at HCG Manavata Cancer Centre, Nashik",
      description:
        "Won both awards at the ASCO Direct GI Cancers Symposium 2026 in gastrointestinal oncology.",
    },
    {
      title: "Longest title of a book, Guinness World Records, 2020",
      year: "2020",
      source: "Appreciation from Shri Vaddiraju Ravichandra garu, Member of Parliament, Rajya Sabha, Telangana",
      description:
        "Appreciation recognizing the Guinness World Records achievement for the longest title of a book.",
    },
    {
      title: "Longest title of a book, Guinness World Records, 2020",
      year: "2020",
      source: "Appreciation from Shri D. Joel Davis garu, IPS, Jt. Commissioner of Police, Traffic, Hyderabad City",
      description:
        "Appreciation recognizing the Guinness World Records achievement for the longest title of a book.",
    },
  ],
};

const networkLogos = [
  { src: "/awards-logos/yetzu.png", alt: "Yetzu" },
  { src: "/awards-logos/nationcite.png", alt: "Nationcite" },
  { src: "/awards-logos/vitour.png", alt: "Vitour" },
  { src: "/awards-logos/bentu.png", alt: "Bentu AI" },
  { src: "/awards-logos/submit-right.png", alt: "Submit Right" },
];

const normalizeStringArray = (value: unknown, fallback: string[]) => {
  if (Array.isArray(value)) {
    const cleaned = value.map((item) => String(item).trim()).filter(Boolean);
    return cleaned.length > 0 ? cleaned : fallback;
  }

  if (typeof value === "string") {
    const cleaned = value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    return cleaned.length > 0 ? cleaned : fallback;
  }

  return fallback;
};

const normalizeAwardsData = (payload: any): AwardsCmsData => {
  const content = payload?.content ?? payload ?? {};

  const worldRecords = Array.isArray(content.worldRecords)
    ? content.worldRecords
        .map((item: any) => ({
          title: String(item?.title || item?.recordTitle || "").trim(),
          source: String(item?.source || item?.affiliatedSource || item?.tag || "").trim(),
          description: String(item?.description || item?.quote || "").trim(),
        }))
        .filter((item: WorldRecordCard) => item.title || item.source || item.description)
    : fallbackAwardsData.worldRecords;

  const awards = Array.isArray(content.awards)
    ? content.awards
        .map((item: any) => ({
          title: String(item?.title || item?.name || "").trim(),
          year: String(item?.year || item?.date || "").trim(),
          source: String(item?.source || item?.affiliatedSource || "").trim(),
          description: String(item?.description || item?.quote || "").trim(),
        }))
        .filter((item: AwardCard) => item.title || item.year || item.source || item.description)
    : fallbackAwardsData.awards;

  return {
    pageTag: String(content.pageTag || fallbackAwardsData.pageTag).trim() || fallbackAwardsData.pageTag,
    informativeComponent: {
      tag:
        String(
          content.informativeComponent?.tag ||
            content.informativeComponent?.title ||
            fallbackAwardsData.informativeComponent.tag
        ).trim() || fallbackAwardsData.informativeComponent.tag,
      description:
        String(
          content.informativeComponent?.description ||
            fallbackAwardsData.informativeComponent.description
        ).trim() || fallbackAwardsData.informativeComponent.description,
      keywords: normalizeStringArray(
        content.informativeComponent?.keywords,
        fallbackAwardsData.informativeComponent.keywords
      ),
    },
    worldRecords,
    awards,
  };
};

export default function AwardsRecords() {
  const [cmsData, setCmsData] = useState<AwardsCmsData>(fallbackAwardsData);

  useEffect(() => {
    const fetchAwardsData = async () => {
      try {
        const res = await fetch("/api/cms/awards-records");
        const result = await res.json();

        if (!res.ok || !result?.data) {
          return;
        }

        setCmsData(normalizeAwardsData(result.data));
      } catch (error) {
        console.error("Failed to load awards data", error);
      }
    };

    fetchAwardsData();
  }, []);

  const featuredRecord = cmsData.worldRecords[0];

  return (
    <section className="vit-awards-wrapper w-full p-2 md:p-2.5 lg:p-3 flex flex-col gap-2 pb-10 md:pb-6 lg:pb-3 lg:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden">
      <div className="shrink-0 mb-1">
        <h2 className="vit-page-title text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-light tracking-tight text-[#111] px-2 mb-1">
          Awards & Records
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-5 min-h-0">
        <div className="flex flex-col md:flex-row gap-2 lg:h-[45%] shrink-0">
        <div className="w-full md:w-[65%] lg:w-[66.666%] h-[580px] sm:h-[200px] md:h-[220px] lg:h-full bg-[#111] rounded-[24px] overflow-hidden shrink-0 flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 lg:p-8 gap-4">            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold">
                {cmsData.pageTag}
              </span>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] font-semibold text-white leading-tight max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem]">
                { "Global Prodigy Honors"}
              </h3>
              <p className="mt-2 text-[11px] sm:text-[12px] text-slate-400 uppercase tracking-[0.18em]">
                { cmsData.informativeComponent.tag}
              </p>
              <p className="mt-4 lg:text-[10px] text-sm sm:text-base text-slate-300 leading-7 max-w-xl">
                {  cmsData.informativeComponent.description}
              </p>
            </div>

            <div className="shrink-0">
              <img
                src="/guinness.png"
                alt="Guinness World Records"
                className="text-slate-900"
                style={{ width: "300px", height: "300px", objectFit: "contain" }}
              />
            </div>
          </div>

          <div className="w-full md:w-[40%] lg:w-[33.333%] flex flex-col md:h-full h-auto gap-0">
            <div className="vit-awards-people-card bg-white rounded-[16px] p-3 sm:p-4 lg:p-5 shadow-sm border border-gray-50 flex flex-col h-auto md:h-full">
              <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 bg-gray-50 rounded-xl flex items-center justify-center text-gray-800 mb-2 sm:mb-3">
                <User size={18} className="sm:w-5 sm:h-5" />
              </div>

              <p className="text-[11px] sm:text-[12px] lg:text-[10px] text-gray-500 leading-relaxed font-light">
                {cmsData.informativeComponent.description}
              </p>

              <div className="flex gap-1.5 sm:gap-2 flex-wrap mt-3 mb-2">
                {cmsData.informativeComponent.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-2 sm:px-3 py-0.5 sm:py-1 bg-[#f9f9f9] border border-gray-100 rounded-full text-[9px] sm:text-[10px] lg:text-[6px] text-gray-600"
                  >
                    {keyword}
                  </span>
                ))}
              </div>

              {/* <div className="vit-awards-people-label mt-auto shrink-0 text-right text-[18px] sm:text-[22px] lg:text-[26px] font-light text-[#111] pt-2 md:pt-8 pb-1 pr-1 tracking-tight">
                {cmsData.informativeComponent.tag}
              </div> */}
            </div>
          </div>
        </div>

        <div className="vit-awards-bottom-row flex flex-col md:flex-row gap-2 lg:min-h-0">
          <div className="vit-awards-cert-panel w-full md:w-[60%] lg:w-[66.666%] bg-white rounded-[16px] p-3 sm:p-4 lg:p-5 flex flex-col lg:min-h-0">
            <h3 className="shrink-0 pb-4 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light text-[#111] mb-1 sm:mb-2">
              Honour & Certifications
            </h3>

            <div
              data-lenis-prevent="true"
              className="vit-awards-cert-grid flex-1 overflow-y-auto custom-scrollbar-sleek min-h-0 pr-1 sm:pr-2"
            >
              {cmsData.awards.map((cert, index) => (
                <div
                  className="vit-awards-cert-card flex flex-col items-center text-center mb-3 sm:mb-4"
                  key={`${cert.title}-${index}`}
                >
                  <img
                    src="/certeficate.png"
                    alt="certificate"
                    width={220}
                    height={156}
                    className="mb-2 sm:mb-3 rounded-md shadow-sm max-w-full h-auto"
                  />
                  <p className="font-medium text-[#111] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight mb-1 sm:mb-1.5">
                    {cert.title}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#777] leading-[1.5]">
                    {cert.year}
                    {cert.source ? ` - ${cert.source}` : ""}
                  </p>
                  <p className="text-[9px] sm:text-[10px] text-[#777] leading-[1.5] line-clamp-3 mt-1">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="vit-awards-list-panel w-full md:w-[40%] lg:w-[33.333%] flex flex-col lg:min-h-0">
            {/* <h3 className="shrink-0 pb-3 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light text-[#111] mb-1 sm:mb-2 px-1">
              World Records
            </h3> */}
            <div
              data-lenis-prevent="true"
              className="vit-awards-list-scroll md:flex-1 md:overflow-y-auto custom-scrollbar-sleek md:min-h-0 pr-1 sm:pr-2 flex flex-col gap-2"
            >
              {cmsData.worldRecords.map((item, idx) => {
                const logo = networkLogos[idx % networkLogos.length];

                return (
                  <ListItem
                    key={`${item.title}-${idx}`}
                    logoSrc={logo.src}
                    logoAlt={logo.alt}
                    title={item.title}
                    subtitle={item.source}
                    quote={item.description}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const ListItem = ({
  logoSrc,
  logoAlt,
  title,
  subtitle,
  quote,
}: {
  logoSrc: string;
  logoAlt: string;
  title: string;
  subtitle: string;
  quote: string;
}) => (
  <div className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 shadow-sm flex gap-2 sm:gap-3 items-start border border-gray-100 hover:shadow-md transition-shadow shrink-0">
    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 mt-0.5">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={40}
        height={40}
        className="h-full w-full object-contain p-1"
      />
    </div>
    <div className="flex flex-col flex-1">
      <h4 className="font-medium text-[#111] text-[11px] sm:text-[12px] lg:text-[13px] leading-tight tracking-wide">
        {title}
      </h4>
      <span className="text-[9px] sm:text-[10px] text-gray-500 mb-1 sm:mb-1.5 mt-0.5">
        {subtitle}
      </span>
      <p className="text-[10px] sm:text-[11px] text-gray-700 leading-relaxed">{quote}</p>
    </div>
  </div>
);
