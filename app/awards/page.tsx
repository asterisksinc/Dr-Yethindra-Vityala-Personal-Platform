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
  images: string[];
};

type AwardsCmsData = {
  pageTag: string;
  informativeComponent: {
    description: string;
    keywords: string[];
  };
  worldRecords: WorldRecordCard[];
  awards: AwardCard[];
};

const fallbackAwardsData: AwardsCmsData = {
  pageTag: "Global Prodigy Honors",
  informativeComponent: {
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
      description: "Dr. Yethindra is acknowledged for his remarkable contributions to medical research at a young age, positioning him as a leading researcher by Green Thinkerz.",
      images: ["/awards-certificates/International Distinguished Young Researcher, 2020.webp"],
    },
    {
      title: "Mahatma Gandhi National Award",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum (UN DESA affiliated)",
      description: "Bestowed for his impact on science and society, this distinction recognizes his achievements in academic and medical advancements.",
      images: ["/awards-certificates/Mahatma Gandhi National Award, 2020.webp"],
    },
    {
      title: "Ambassador of Peace",
      year: "2020",
      source: "Mahatma Gandhi Global Peace Forum (UN DESA affiliated)",
      description: "Honored as a Peace Ambassador for breaking linguistic, cultural, and geographical barriers to make medical knowledge accessible.",
      images: ["/awards-certificates/Ambassador of Peace.webp"],
    },
    {
      title: "Honorary Doctorate (Doctor of Science)",
      year: "2020",
      source: "Global Peace University, USA",
      description: "He received an honorary doctorate for his groundbreaking medical research achievements and authored scientific works in three languages.",
      images: [
        "/awards-certificates/Receiving honorary doctorate from Dr. Stalbek M. Akhunbaev.webp",
        "/awards-certificates/Receiving honorary doctorate from Prof. Indira Orozobaevna Kudaibergenova and Prof. Ziiabidin Aidarov.webp",
      ],
    },
    {
      title: "Karmaveer Chakra Award",
      year: "2021",
      source: "iCONGO and the United Nations",
      description: "Esteemed as a top civilian award, this honor recognizes dedication to humanity, medical research, and education.",
      images: ["/awards-certificates/Karmaveer Chakra Award from Prof. Mamatov, 2021.webp"],
    },
    {
      title: "Champion of the Champions (MedEngage Award)",
      year: "2021",
      source: "MedEngage Scholarship Summit",
      description: "At the summit, this top honor recognized his exceptional contributions to medical research and their impact on future professionals.",
      images: ["/awards-certificates/Champion of the Champions (MedEngage Award).webp"],
    },
    {
      title: "Global Under 30 Leadership Summit (Winner)",
      year: "2022",
      source: "Global Under 30 Leadership Summit",
      description: "Celebrated as a top leader under 30 across fields for significant contributions to medical science and research.",
      images: [
        "/awards-certificates/Global Under 30 Leadership Summit (Winner).webp",
        "/awards-certificates/Global Under 30 Leadership Summit.webp",
      ],
    },
    {
      title: "Dr. Yellapragada Subbarao Memorial Award",
      year: "2022",
      source: "Biomedical science recognition",
      description: "This award, named after a renowned Indian biomedical scientist, acknowledges exceptional contributions to research.",
      images: ["/awards-certificates/Dr. Yellapragada Subbarao Memorial Award.webp"],
    },
    {
      title: "50 Aspiring Authors & Researchers (Winner)",
      year: "2022",
      source: "National recognition",
      description: "This honor places Dr. Yethindra among India's most promising figures in authorship and research.",
      images: ["/awards-certificates/50 Aspiring Authors & Researchers (Winner).webp"],
    },
    {
      title: "Nationwide Award for Under 30 Emerging Industry Experts (Winner)",
      year: "2023",
      source: "Business Mint",
      description: "Considered one of India's most impactful young specialists under 30, spanning various fields.",
      images: [],
    },
    {
      title: "International Physician-Scientist of the Year",
      year: "2026",
      source: "Global recognition",
      description: "Acknowledges his ten-year dedication to medical science as a practicing doctor and prolific researcher on the global stage.",
      images: ["/awards-certificates/International Physician-Scientist of the Year.webp"],
    },
    {
      title: "Best Poster Award & Best Presenter Award (ASCO Direct GI 2026)",
      year: "2026",
      source: "Global Healthcare Academy at HCG Manavata Cancer Centre, Nashik",
      description: "At the ASCO Direct GI Cancers Symposium 2026, Dr. Yethindra Vityala won both the Best Poster and Best Presenter Awards.",
      images: ["/awards-certificates/Best Poster Award & Best Presenter Award.webp"],
    },
    {
      title: "World's Youngest Scientist in Medicine",
      year: "2019",
      source: "High Range Book of World Records, Assam Book of Records, World Record Certification Agency, and Assist World Records, 2019",
      description: "At 22, Dr. Yethindra Vityala achieved what many scientists strive for, publishing path-breaking peer-reviewed medical research papers and earning the title of the world's Youngest Scientist in Medicine. Each world record organization assessed and certified his work, marking it as exceptional.",
      images: [
        "/awards-certificates/World_s Youngest Scientist in Medicine.webp",
        "/awards-certificates/World_s Youngest Scientist in Medicine(1).webp",
      ],
    },
    {
      title: "Guinness World Records – Longest Title of a Book",
      year: "2020",
      source: "Guinness World Records",
      description: "In 2020, the Guinness World Records acknowledged the longest title of a book, with over 3,777 words and 26,021 characters. Starting with The Historical Development of the Heart..., it lists every known species with a heart, marking an unparalleled achievement.",
      images: [
        "/awards-certificates/Guinness World Record certificate for Longest Title of a Book.webp",
        "/awards-certificates/Vityala Yethindra with guinness world record for longest title of a book.webp",
        "/awards-certificates/With Joel Davis IPS.webp",
        "/awards-certificates/With Vaddiraju Ravichandra, MP Rajyasabha.webp",
      ],
    },
  ],
};

const keywordIconMap: Record<string, string> = {
  "World Records": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/H - 12-Time World Record Holder.svg",
  "Medical Research": "/icons/A - Research Impact.png",
  "Awards & Honours": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - Component Logo.svg",
  "Academic Excellence": "/icons/A - Education-Icon.png",
  "Global Recognition": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/H - International Physician-Scientist of the Year 2026.svg",
  "Physician-Scientist": "/icons/A - Core Domain Expertise.png",
};

const worldRecordIconMap: Record<string, string> = {
  "Longest title of a book": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/H - 12-Time World Record Holder.svg",
  "World's Youngest Scientist in Medicine": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - World's Youngest Scientist in Medicine - 1.svg",
  "Fastest Research Study Accomplished in the World": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - Fastest Research Study Accomplished in the World.svg",
  "First person in the world to complete 20 medical courses at 10 universities in 9 days": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - First person in the world to complete 20 medical courses at 10 universities in 9 days.svg",
  "Youngest person to write a trilingual book": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - Youngest person to write a trilingual book.svg",
  "Most Medical Related Certificates Received in 9 Days": "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - Most Medical Related Certificates Received in 9 Days.svg",
};

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

const normalizeAwardsData = (payload: unknown): AwardsCmsData => {
  const content = ((payload as { content?: unknown })?.content ?? payload ?? {}) as Record<string, unknown>;
  const informativeComponent = (content.informativeComponent ?? {}) as Record<string, unknown>;
  const worldRecordsSource = Array.isArray(content.worldRecords)
    ? (content.worldRecords as Record<string, unknown>[])
    : null;
  const awardsSource = Array.isArray(content.awards)
    ? (content.awards as Record<string, unknown>[])
    : null;

  const worldRecords = worldRecordsSource
    ? worldRecordsSource
        .map((item) => ({
          title: String(item.title || item.recordTitle || "").trim(),
          source: String(item.source || item.affiliatedSource || item.tag || "").trim(),
          description: String(item.description || item.quote || "").trim(),
        }))
        .filter((item) => item.title || item.source || item.description)
    : fallbackAwardsData.worldRecords;

  const awards = awardsSource
    ? awardsSource
        .map((item) => {
          const rawImages = item.images;
          const images = Array.isArray(rawImages)
            ? rawImages.map((u: unknown) => String(u).trim()).filter(Boolean)
            : item.imageUrl
            ? [String(item.imageUrl).trim()]
            : [];
          return {
            title: String(item.title || item.name || "").trim(),
            year: String(item.year || item.date || "").trim(),
            source: String(item.source || item.affiliatedSource || "").trim(),
            description: String(item.description || item.quote || "").trim(),
            images,
          };
        })
        .filter((item) => item.title || item.year || item.source || item.description)
    : fallbackAwardsData.awards;

  return {
    pageTag: String(content.pageTag || fallbackAwardsData.pageTag).trim() || fallbackAwardsData.pageTag,
    informativeComponent: {
      description:
        String(
          informativeComponent.description ||
            fallbackAwardsData.informativeComponent.description
        ).trim() || fallbackAwardsData.informativeComponent.description,
      keywords: normalizeStringArray(
        informativeComponent.keywords,
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

  return (
    <>
    <section className="vit-awards-wrapper w-full p-2 md:p-2.5 lg:p-3 flex flex-col gap-2 pb-10 md:pb-6 lg:pb-3 lg:h-[calc(100vh-80px)] overflow-y-auto lg:overflow-hidden">
      <div className="shrink-0 mb-1">
        <h2 className="vit-page-title text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-light tracking-tight text-[#111] px-2 mb-1">
          Awards & Records
        </h2>
      </div>

      <div className="flex-1 flex flex-col gap-3 min-h-0">
        <div className="flex flex-col md:flex-row gap-2 lg:h-[50%] shrink-0">
        <div className="w-full md:w-[65%] lg:w-[66.666%] h-[580px] sm:h-[200px] md:h-[220px] lg:h-full bg-[#111] rounded-[24px] overflow-hidden shrink-0 flex flex-col sm:flex-row items-center justify-between p-5 sm:p-6 lg:p-8 gap-4">            <div className="flex-1 flex flex-col justify-center">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold">
                {cmsData.pageTag}
              </span>
              <h3 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[24px] font-semibold text-white leading-tight max-w-[16rem] sm:max-w-[18rem] md:max-w-[22rem]">
                { "Global Prodigy Honors"}
              </h3>
              <p className="mt-4 lg:text-[10px] text-sm sm:text-base text-slate-300 leading-7 max-w-xl">
                {  cmsData.informativeComponent.description}
              </p>
            </div>

            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 guinness-img-lg relative shrink-0">
              <Image
                src="/guinness.png"
                alt="Guinness World Records"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full md:w-[40%] lg:w-[33.333%] flex flex-col md:h-full h-auto gap-0">
            <div className="vit-awards-people-card bg-white rounded-[16px] p-4 sm:p-5 lg:p-6 shadow-sm border border-gray-50 flex flex-col h-auto md:h-full">
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gray-800 mb-3 sm:mb-4">
                <User size={20} className="sm:w-6 sm:h-6" />
              </div>
              <p className="text-[12px] sm:text-[13px] lg:text-[12px] text-gray-500 leading-relaxed font-light">
                {cmsData.informativeComponent.description}
              </p>

              <div className="flex gap-2 sm:gap-2.5 flex-wrap mt-4 mb-3">
                {cmsData.informativeComponent.keywords.map((keyword) => (
                  <div
                    key={keyword}
                    className="flex items-center gap-1 px-3 py-1.5 bg-[#f9f9f9] border border-gray-100 rounded-full text-[10px] sm:text-[11px] lg:text-[10px] text-gray-600"
                  >
                    <span>{keyword}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>

        <div className="vit-awards-bottom-row flex flex-col md:flex-row gap-2 lg:min-h-0">
          <div className="vit-awards-cert-panel w-full md:w-[60%] lg:w-[66.666%] bg-white rounded-[16px] p-4 sm:p-5 lg:p-6 flex flex-col lg:min-h-0">
            <h3 className="shrink-0 pb-4 text-[18px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light text-[#111] mb-1 sm:mb-2">
              Honour & Certifications
            </h3>

            <div
              data-lenis-prevent="true"
              className="vit-awards-cert-grid flex-1 overflow-y-auto custom-scrollbar-sleek min-h-0 pr-1 sm:pr-2"
            >
              {cmsData.awards.map((cert, index) => (
                <div
                  className="vit-awards-cert-card flex flex-col items-center text-center mb-4 sm:mb-6"
                  key={`${cert.title}-${index}`}
                >
                  <div className="vit-awards-cert-frame mb-3 sm:mb-4 rounded-md shadow-sm overflow-hidden">
                    <ImageCarousel images={cert.images} alt={cert.title || "certificate"} />
                  </div>
                  <p className="vit-awards-cert-title-text font-medium text-[#111] text-[12px] sm:text-[13px] lg:text-[14px] leading-tight mb-1.5 sm:mb-2">
                    {cert.title}
                  </p>
                  <p className="vit-awards-cert-meta-text text-[10px] sm:text-[11px] text-[#777] leading-[1.5]">
                    {cert.year}
                    {cert.source ? ` - ${cert.source}` : ""}
                  </p>
                  <p className="vit-awards-cert-desc-text text-[10px] sm:text-[11px] text-[#777] leading-[1.5] line-clamp-3 mt-1.5">
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
              className="vit-awards-list-scroll md:flex-1 md:overflow-y-auto custom-scrollbar-sleek md:min-h-0 pr-1 sm:pr-2 flex flex-col gap-2.5"
            >
              {cmsData.worldRecords.map((item, idx) => {
                const iconSrc = worldRecordIconMap[item.title] || "/icons/Simple Typography Minimalist Art Gallery Brand Logo (2)/A&R - Component Logo.svg";

                return (
                  <ListItem
                    key={`${item.title}-${idx}`}
                    logoSrc={iconSrc}
                    logoAlt={item.title}
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
    </>
  );
}

const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const [current, setCurrent] = useState(0);
  const len = images.length;

  if (len === 0) {
    return (
      <Image
        src="/certeficate.png"
        alt={alt}
        width={280}
        height={200}
        className="vit-awards-cert-image"
      />
    );
  }

  if (len === 1) {
    return (
      <Image
        src={images[0]}
        alt={alt}
        width={280}
        height={200}
        className="vit-awards-cert-image"
      />
    );
  }

  return (
    <div className="vit-carousel-wrapper">
      <div className="vit-carousel-image-wrap">
        <Image
          src={images[current]}
          alt={`${alt} ${current + 1}`}
          width={280}
          height={200}
          className="vit-awards-cert-image"
        />
        <button
          type="button"
          className="vit-carousel-btn vit-carousel-prev"
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((p) => (p === 0 ? len - 1 : p - 1));
          }}
          aria-label="Previous image"
        >
          &#8249;
        </button>
        <button
          type="button"
          className="vit-carousel-btn vit-carousel-next"
          onClick={(e) => {
            e.stopPropagation();
            setCurrent((p) => (p === len - 1 ? 0 : p + 1));
          }}
          aria-label="Next image"
        >
          &#8250;
        </button>
      </div>
      <div className="vit-carousel-dots">
        {Array.from({ length: len }).map((_, i) => (
          <button
            key={i}
            type="button"
            className={`vit-carousel-dot ${i === current ? "active" : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setCurrent(i);
            }}
            aria-label={`Image ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

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
  <div className="bg-[#FFFFFF] rounded-[16px] p-3 sm:p-4 shadow-sm flex gap-3 sm:gap-4 items-start border border-gray-100 hover:shadow-md transition-shadow shrink-0">
    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center shrink-0 mt-0.5">
      <Image
        src={logoSrc}
        alt={logoAlt}
        width={112}
        height={112}
        className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
      />
    </div>
    <div className="flex flex-col flex-1">
      <h4 className="font-medium text-[#111] text-[12px] sm:text-[13px] lg:text-[14px] leading-tight tracking-wide">
        {title}
      </h4>
      <span className="text-[10px] sm:text-[11px] text-gray-500 mb-1.5 sm:mb-2 mt-0.5">
        {subtitle}
      </span>
      <p className="text-[11px] sm:text-[12px] text-gray-700 leading-relaxed">{quote}</p>
    </div>
  </div>
);