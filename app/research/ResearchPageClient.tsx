"use client";

import Image from "next/image";
import { useState } from "react";
import "./research-publications.css";

const booksData = [
  { id: 1, title: "The Art of Cardiology", desc: "A deep dive into cardiovascular systems and emerging therapies within primary healthcare.", img: "/book.png", year: "2018-2019" },
  { id: 2, title: "Neurological Frontiers", desc: "Exploring the complexities of the human brain, neural pathways, and modern cognitive treatments.", img: "/book.png", year: "2018-2019" },
  { id: 3, title: "Infectious Disease Control", desc: "Strategies and preventative measures mapping comprehensive global health impacts.", img: "/book.png", year: "2020-2021" },
  { id: 4, title: "Public Health Policies", desc: "How governmental actions shape the future of medical care, diagnostics, and patient outcomes.", img: "/book.png", year: "2020-2021" },
  { id: 5, title: "Advanced Pharmacovigilance", desc: "Monitoring the safety, efficacy, and regulatory compliance of modern pharmaceuticals.", img: "/book.png", year: "2022-2023" },
  { id: 6, title: "Surgical Innovations", desc: "Breakthrough robotic techniques redefining operating room procedures across continents.", img: "/book.png", year: "2022-2023" },
  { id: 7, title: "Digital Health Revolution", desc: "The intersection of artificial intelligence, big data analytics, and traditional patient care.", img: "/book.png", year: "2024-2025" },
  { id: 8, title: "Translational Medicine", desc: "Bridging the gap between empirical laboratory research and functional clinical application.", img: "/book.png", year: "2024-2025" },
];

const timelineYears = [
  { color: "#ff4d4f", year: "2018-2019", type: "Early Research Phase", tags: ["Cardiology", "Neurology"] },
  { color: "#ffb300", year: "2020-2021", type: "Global Health Initiatives", tags: ["Infectious", "Policy"] },
  { color: "#3bc7b8", year: "2022-2023", type: "Safety & Surgical Practices", tags: ["Pharmacology", "Techniques"] },
  { color: "#3ea6ff", year: "2024-2025", type: "Modern Applied Tech", tags: ["AI Health", "Translational"] },
  { color: "#7a5cff", year: "2025-2026", type: "Future Genomics Studies", tags: ["Genomics", "Predictive Care"] },
  { color: "#111111", year: "2027", type: "Upcoming Milestones", tags: ["Visionary", "Next-Gen"] }
];

export default function ResearchPageClient() {
  const [activeYear, setActiveYear] = useState<string | null>(null);

  const filteredBooks = activeYear 
    ? booksData.filter(b => b.year === activeYear)
    : booksData;

  return (
    <section className="bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col h-[calc(100vh-80px)] overflow-hidden">

      {/* Heading */}
      <div className="shrink-0 mb-2">
        <h2 className="text-[28px] md:text-[31.4px] tracking-[-0.64px] text-[#111]">Research & Publications</h2>
      </div>

      {/* Filter Buttons */}
      <div className="shrink-0 mt-2 mb-4 flex gap-2">
        <button 
          onClick={() => setActiveYear(null)}
          className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors ${activeYear === null ? 'bg-[#eee] border border-[#EDEDED] text-[#111]' : 'bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50'}`}
        >
          All Years
        </button>
        <button className="px-4 py-1.5 text-[12px] font-light bg-white border border-[#EDEDED] rounded-full text-[#111] cursor-pointer hover:bg-gray-50 transition-colors">Publications</button>
        <button className="px-4 py-1.5 text-[12px] font-light bg-white border border-[#EDEDED] rounded-full text-[#111] cursor-pointer hover:bg-gray-50 transition-colors">Books</button>
      </div>

      {/* Scroll Container */}
      <div data-lenis-prevent="true" className="flex-1 overflow-y-auto min-h-0 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar">

        {filteredBooks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {filteredBooks.map((book) => (
              <div key={book.id} className="text-center group">
                <div className="flex justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-1">
                  <Image
                    src={book.img}
                    alt={book.title}
                    width={160}
                    height={220}
                    style={{ width: 'auto', maxHeight: '180px' }}
                  />
                </div>
                <h3 className="text-[16px] md:text-[18px] font-medium leading-tight mb-2 text-[#111]">{book.title}</h3>
                <span className="block text-[#8a2be2] text-[11px] font-semibold tracking-wide mb-2">{book.year}</span>
                <p className="text-[12px] md:text-[12px] text-[#555] leading-snug">{book.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-[#777] text-[14px]">
            No books found for this timeline period.
          </div>
        )}

      </div>

      {/* Category Section Bottom (Interactive Timeline) */}
      <div className="shrink-0 mt-4 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 grid grid-cols-2 lg:grid-cols-6 gap-4 border border-gray-100 shadow-sm">

        {timelineYears.map((item, i) => (
          <div 
            key={i} 
            onClick={() => setActiveYear(activeYear === item.year ? null : item.year)}
            className={`flex flex-col cursor-pointer p-2 -m-2 rounded-lg transition-colors ${activeYear === item.year ? 'bg-gray-50 ring-1 ring-gray-200' : 'hover:bg-gray-50'}`}
          >
            <div className="flex flex-col mb-2">
              <span className="text-[13px] font-bold text-[#111] leading-none mb-1">{item.year}</span>
              <span className="text-[10px] text-[#666] leading-none">{item.type}</span>
            </div>

            <div
              className={`h-[4px] w-full rounded-full mb-3 transition-opacity ${activeYear && activeYear !== item.year ? 'opacity-30' : 'opacity-100'}`}
              style={{ background: item.color }}
            ></div>

            <div className="flex flex-row flex-wrap gap-1 md:gap-2">
              {item.tags.map((tag, idx) => (
                <span key={idx} className="bg-[#f0f0f0] text-[#333] text-[9.5px] px-2 py-1 rounded-full whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}
