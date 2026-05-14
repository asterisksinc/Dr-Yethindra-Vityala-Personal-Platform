// "use client";

// import Image from "next/image";
// import { useEffect, useMemo, useState } from "react";
// import "./research-publications.css";

// type ResearchItem = {
//   title: string;
//   description: string;
//   type: string;
//   year: string;
// };

// const timelineYears = [
//   { color: "#ff4d4f", year: "2018-2019", type: "Early Research Phase", tags: ["Cardiology", "Neurology"] },
//   { color: "#ffb300", year: "2020-2021", type: "Global Health Initiatives", tags: ["Infectious", "Policy"] },
//   { color: "#3bc7b8", year: "2022-2023", type: "Safety & Surgical Practices", tags: ["Pharmacology", "Techniques"] },
//   { color: "#3ea6ff", year: "2024-2025", type: "Modern Applied Tech", tags: ["AI Health", "Translational"] },
//   { color: "#7a5cff", year: "2025-2026", type: "Future Genomics Studies", tags: ["Genomics", "Predictive Care"] },
//   { color: "#111111", year: "2027", type: "Upcoming Milestones", tags: ["Visionary", "Next-Gen"] }
// ];

// export default function ResearchPageClient() {
//   const [activeYear, setActiveYear] = useState<string | null>(null);
//   const [activeType, setActiveType] = useState<string | null>(null);
//   const [researchItems, setResearchItems] = useState<ResearchItem[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const loadResearchData = async () => {
//       try {
//         const res = await fetch("/api/cms/research-publications");
//         const result = await res.json();

//         if (!res.ok || !result?.data?.content) {
//           setResearchItems([]);
//           return;
//         }

//         const items = Array.isArray(result.data.content.items)
//           ? result.data.content.items
//           : [];

//         setResearchItems(items);
//       } catch (error) {
//         console.error("Failed to load research publications", error);
//         setResearchItems([]);
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadResearchData();
//   }, []);

//   const filteredBooks = useMemo(() => {
//     return researchItems.filter((item) => {
//       let yearMatch = true;
//       if (activeYear) {
//         const itemYear = parseInt(item.year, 10);
//         if (activeYear.includes("-")) {
//           const [start, end] = activeYear.split("-").map(Number);
//           yearMatch = itemYear >= start && itemYear <= end;
//         } else {
//           yearMatch = item.year === activeYear;
//         }
//       }

//       const normalizedType = item.type.toLowerCase();
//       const typeMatch = activeType
//         ? normalizedType === activeType.toLowerCase() ||
//           normalizedType === activeType.toLowerCase().replace(/s$/, "")
//         : true;

//       return yearMatch && typeMatch;
//     });
//   }, [researchItems, activeYear, activeType]);

//   return (
//     <div style={{overflow:'auto'}}>
//     <section className="hh bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col h-[calc(100vh-80px)] overflow-hidden">

//         <div className="shrink-0 mb-2">
//         <h2 className="text-[36px] lg:text-[42px] font-light tracking-tight text-[#111] px-2 mb-2">Research & Publications</h2>
//       </div>

//       <div className="shrink-0 mt-2 mb-4 flex gap-2">
//         <button
//           onClick={() => {
//             setActiveYear(null);
//             setActiveType(null);
//           }}
//           className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors ${
//             activeYear === null && activeType === null
//               ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
//               : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
//           }`}
//         >
//           All
//         </button>

//         <div className="w-px h-5 bg-gray-300 mt-2"></div>

//         <button
//           onClick={() =>
//             setActiveType(activeType === "Publication" ? null : "Publication")
//           }
//           className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors ${
//             activeType === "Publication"
//               ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
//               : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
//           }`}
//         >
//           Publications
//         </button>

//         <button
//           onClick={() => setActiveType(activeType === "Book" ? null : "Book")}
//           className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors ${
//             activeType === "Book"
//               ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
//               : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
//           }`}
//         >
//           Books
//         </button>
//       </div>

//       <div
//         data-lenis-prevent="true"
//         className="flex-1 overflow-y-auto min-h-0 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar"
//       >
//         {loading ? (
//           <div className="flex items-center justify-center h-full text-[#777] text-[14px]">
//             Loading...
//           </div>
//         ) : filteredBooks.length > 0 ? (
//           <div className="vit-research-grid">
//             {filteredBooks.map((book, index) => (
//               <div key={`${book.title}-${index}`} className="text-center group">
//                 <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
//                   <Image
//                     src="/book.png"
//                     alt={book.title}
//                     width={160}
//                     height={220}
//                     style={{ width: "auto", maxHeight: "180px" }}
//                   />
//                 </div>

//                 <h3 className="text-[16px] md:text-[18px] font-medium leading-tight mb-2 text-[#111]">
//                   {book.title}
//                 </h3>

//                 <span className="block text-[#8a2be2] text-[11px] font-semibold tracking-wide mb-2">
//                   {book.year} • {book.type}
//                 </span>

//                 <p className="text-[12px] md:text-[12px] text-[#555] leading-snug">
//                   {book.description}
//                 </p>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="flex items-center justify-center h-full text-[#777] text-[14px]">
//             No research data found.
//           </div>
//         )}
//       </div>

//       <div className="shrink-0 mt-4 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 grid grid-cols-2 lg:grid-cols-6 gap-4 border border-gray-100 shadow-sm">
//         {timelineYears.map((item, i) => (
//           <div
//             key={i}
//             onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
//             className={`flex flex-col cursor-pointer p-2 -m-2 rounded-lg transition-colors ${
//               activeYear === item.year ? "bg-gray-50 ring-1 ring-gray-200" : "hover:bg-gray-50"
//             }`}
//           >
//             <div className="flex flex-col mb-2">
//               <span className="text-[13px] font-bold text-[#111] leading-none mb-1">
//                 {item.year}
//               </span>
//               <div
//               className={`h-[4px] w-full rounded-full mt-2 mb-3 transition-opacity ${
//                 activeYear && activeYear !== item.year ? "opacity-30" : "opacity-100"
//               }`}
//               style={{ background: item.color }}
//             ></div>
//               <span className="text-[10px] text-[#666] leading-none">{item.type}</span>
//             </div>



//             <div className="md:flex hidden flex-row flex-wrap gap-1 md:gap-2">
//               {item.tags.map((tag, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-[#f0f0f0] text-[#333] text-[9.5px] px-2 py-1 rounded-full whitespace-nowrap"
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//     </div>
//   );
// }
"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import "./research-publications.css";

type ResearchItem = {
  title: string;
  description: string;
  type: string;
  year: string;
};

const timelineYears = [
  { color: "#ff4d4f", year: "2018-2019", type: "Early Research Phase" },
  { color: "#ffb300", year: "2020-2021", type: "Global Health Initiatives" },
  { color: "#3bc7b8", year: "2022-2023", type: "Safety & Surgical Practices" },
  { color: "#3ea6ff", year: "2024-2025", type: "Modern Applied Tech" },
  { color: "#7a5cff", year: "2025-2026", type: "Future Genomics Studies" },
  { color: "#111111", year: "2027", type: "Upcoming Milestones" }
];

const fallbackResearchItems: ResearchItem[] = [
  {
    title: "Naegleria Fowleri Research Notes",
    description:
      "A compact front-end sample highlighting computational approaches, translational study notes, and literature synthesis.",
    type: "Publication",
    year: "2018",
  },
  {
    title: "Clinical Innovation Handbook",
    description:
      "A practical book sample focused on clinical workflows, evidence-based decision making, and modern healthcare delivery.",
    type: "Book",
    year: "2018",
  },
  {
    title: "Global Health Insights",
    description:
      "A publication sample covering public health systems, research impact, and collaborative medical science themes.",
    type: "Publication",
    year: "2019",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2020",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2020",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2021",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2021",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2022",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2023",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2024",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2024",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2025",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2026",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2026",
  },
  {
    title: "The Divine Anatomy",
    description:
      "A second book sample for the mobile 2x2 layout, used to keep four cards visible in the top section.",
    type: "Book",
    year: "2026",
  },
];

const ensureMinimumResearchItems = (items: ResearchItem[]) => {
  const merged = [...items];

  fallbackResearchItems.forEach((fallbackItem) => {
    const alreadyIncluded = merged.some(
      (item) => item.title === fallbackItem.title && item.year === fallbackItem.year
    );

    if (!alreadyIncluded && merged.length < 4) {
      merged.push(fallbackItem);
    }
  });

  return merged.length >= 4 ? merged : [...merged, ...fallbackResearchItems].slice(0, 4);
};

export default function ResearchPageClient() {
  const [activeYear, setActiveYear] = useState<string | null>(null);
  const [activeType, setActiveType] = useState<string | null>(null);
  const [researchItems, setResearchItems] = useState<ResearchItem[]>(fallbackResearchItems);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadResearchData = async () => {
      try {
        const res = await fetch("/api/cms/research-publications");
        const result = await res.json();

        if (!res.ok || !result?.data?.content) {
          setResearchItems(fallbackResearchItems);
          return;
        }

        const items = Array.isArray(result.data.content.items)
          ? result.data.content.items
          : [];

        setResearchItems(items.length > 0 ? ensureMinimumResearchItems(items) : fallbackResearchItems);
      } catch (error) {
        console.error("Failed to load research publications", error);
        setResearchItems(fallbackResearchItems);
      } finally {
        setLoading(false);
      }
    };

    loadResearchData();
  }, []);

  const filteredBooks = useMemo(() => {
    return researchItems.filter((item) => {
      let yearMatch = true;
      if (activeYear) {
        const itemYear = parseInt(item.year, 10);
        if (activeYear.includes("-")) {
          const [start, end] = activeYear.split("-").map(Number);
          yearMatch = itemYear >= start && itemYear <= end;
        } else {
          yearMatch = item.year === activeYear;
        }
      }

      const normalizedType = item.type.toLowerCase();
      const typeMatch = activeType
        ? normalizedType === activeType.toLowerCase() ||
        normalizedType === activeType.toLowerCase().replace(/s$/, "")
        : true;

      return yearMatch && typeMatch;
    });
  }, [researchItems, activeYear, activeType]);

  return (
    <div style={{ overflow: 'auto' }}>
      <section className="bg-[#f5f5f5] w-full p-2 md:p-2.5 lg:p-3 pb-10 md:pb-6 lg:pb-3 flex flex-col lg:h-[calc(100vh-80px)] lg:min-h-[calc(100vh-80px)] lg:overflow-hidden">

        
  <div className="shrink-0 mb-1">
        <h2 className="vit-page-title text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-light tracking-tight text-[#111] px-2 mb-1">Research & Publications</h2>
      </div>

        <div className="shrink-0 mt-1 sm:mt-2 mb-3 sm:mb-4 flex gap-1.5 sm:gap-2 flex-wrap">
          <button
            onClick={() => {
              setActiveYear(null);
              setActiveType(null);
            }}
            className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[12px] font-light rounded-full cursor-pointer transition-colors ${activeYear === null && activeType === null
                ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
                : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
              }`}
          >
            All
          </button>

          <div className="w-px h-4 sm:h-5 bg-gray-300 mt-1.5 sm:mt-2"></div>

          <button
            onClick={() =>
              setActiveType(activeType === "Publication" ? null : "Publication")
            }
            className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[12px] font-light rounded-full cursor-pointer transition-colors ${activeType === "Publication"
                ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
                : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
              }`}
          >
            Publications
          </button>

          <button
            onClick={() => setActiveType(activeType === "Book" ? null : "Book")}
            className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[12px] font-light rounded-full cursor-pointer transition-colors ${activeType === "Book"
                ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
                : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
              }`}
          >
            Books
          </button>
        </div>

        <div
          data-lenis-prevent="true"
          className="flex-1 overflow-y-auto bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar min-h-[250px] sm:min-h-[300px]"
        >
          {loading ? (
            <div className="flex items-center justify-center h-full text-[#777] text-[13px] sm:text-[14px]">
              Loading...
            </div>
          ) : filteredBooks.length > 0 ? (
            <div className="vit-research-grid">
              {filteredBooks.map((book, index) => (
                <div key={`${book.title}-${index}`} className="text-center group flex flex-col h-full">
                  <div className="flex justify-center mb-2 sm:mb-3 lg:mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                    <Image
                      src="/book.png"
                      alt={book.title}
                      width={160}
                      height={220}
                      className="w-auto max-h-[108px] sm:max-h-[150px] lg:max-h-[180px]"
                    />
                  </div>

                  <h3 className="text-[13px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium leading-tight mb-1 sm:mb-2 text-[#111]">
                    {book.title}
                  </h3>

                  <span className="block text-[#8a2be2] text-[9px] sm:text-[10px] lg:text-[11px] font-semibold tracking-wide mb-1 sm:mb-2">
                    {book.year} • {book.type}
                  </span>

                  <p className="text-[9px] sm:text-[11px] lg:text-[12px] text-[#555] leading-snug">
                    {book.description}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center h-full text-[#777] text-[13px] sm:text-[14px]">
              No research data found.
            </div>
          )}
        </div>

        <div className="shrink-0 mt-2 sm:mt-3 lg:mt-4 bg-[#FFFFFF] rounded-[16px] p-2 sm:p-3 lg:p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-2 sm:gap-x-3 lg:gap-x-4 gap-y-2 sm:gap-y-3 border border-gray-100 shadow-sm overflow-visible">
          {timelineYears.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
              className={`flex flex-col cursor-pointer p-1.5 sm:p-2 rounded-lg transition-colors ${activeYear === item.year ? "bg-gray-50 ring-1 ring-gray-200" : "hover:bg-gray-50"
                }`}
            >
              <div className="flex flex-col">
                <span className="text-[11px] sm:text-[12px] lg:text-[13px] font-bold text-[#111] leading-none mb-1.5 sm:mb-2">
                  {item.year}
                </span>
                <div
                  className={`h-[3px] sm:h-[4px] w-full rounded-full transition-opacity mb-1.5 sm:mb-2 ${activeYear && activeYear !== item.year ? "opacity-30" : "opacity-100"
                    }`}
                  style={{ background: item.color }}
                ></div>
                <span className="text-[9px] sm:text-[10px] lg:text-[11px] text-[#666] leading-tight">{item.type}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}