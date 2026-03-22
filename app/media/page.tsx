'use client';
import Image from "next/image";
import "./speaking-media.css";
import "../research/research-publications.css";
import { useState } from "react";
const mediaItems = [
  {
    id: 1,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-1.png",
    type: "lecture",
  },
  {
    id: 2,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-2.png",
    type: "Community Outreach",
  },
  {
    id: 3,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-3.png",
    type: "Conferences",
  },
  {
    id: 4,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-4.png",
    type: "Conferences",
  },
  {
    id: 5,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-5.png",
    type: "Philanthropy",
  },
  {
    id: 6,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-6.png",
    type: "Community Outreach",
  },
  {
    id: 7,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-7.png",
    type: "Philanthropy",
  },
  {
    id: 8,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-8.png",
    type: "Lectures",
  },
];

const filterItems = [
  "All",
  "Philanthropy",
  "Campaigns",
  "Community Outreach",
  "Lectures",
  "Conferences",
];

export default function SpeakingMedia() {
  const [activeFilter, setActiveFilter] = useState("All");
 const filteredMedia =
  activeFilter === "All"
    ? mediaItems
    : mediaItems.filter(
        (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
      );
  return (
    <section className="bg-[#f5f5f5] p-4 md:p-6 pb-2 md:pb-6 flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      <div className="shrink-0 mb-2">
        <h2 className="text-[28px] md:text-[31.4px] tracking-[-0.64px] text-[#111]">Speaking & Media</h2>
        <p className="text-[14px] text-[#757575] max-w-[600px] leading-relaxed hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>
   <div className="shrink-0 mt-2 mb-4 flex gap-2 overflow-x-auto custom-scrollbar">
  {filterItems.map((filter, i) => (
    <button
      key={i}
      onClick={() => setActiveFilter(filter)}
      className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors whitespace-nowrap
        ${
          activeFilter === filter
            ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
            : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
        }`}
    >
      {filter}
    </button>
  ))}
</div>
      <div data-lenis-prevent="true" className="flex-1 overflow-y-auto min-h-0 bg-white border border-gray-200 rounded-xl p-4 custom-scrollbar">

    <div className="vit-research-grid">
  {filteredMedia.map((item) => (
    <article className="vit-speaking-card" key={item.id}>
      <div
        className={`vit-speaking-image-wrap ${
          item.type === "photo"
            ? "vit-speaking-image-wrap-photo"
            : "vit-speaking-image-wrap-certificate"
        }`}
      >
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="vit-speaking-image"
        />
      </div>

      <h3 className="vit-speaking-card-title">{item.title}</h3>
      <p className="vit-speaking-card-text">{item.description}</p>
    </article>
  ))}
</div>
      </div>

      <div className="shrink-0 mt-4 flex flex-col md:flex-row gap-4 h-auto md:h-[120px]">
        <div className="flex-1 bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm overflow-hidden flex items-center overflow-x-auto custom-scrollbar">
          <div className="flex gap-4 items-center pl-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="w-[85px] h-[55px] bg-[#f0f0f0] rounded flex-shrink-0" key={index} />
            ))}
          </div>
        </div>

        <aside className="w-full md:w-[300px] bg-white rounded-xl p-4 md:p-5 border border-gray-100 shadow-sm flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-[#111] font-bold tracking-wide text-[10px]">
            <span className="text-[#8a2be2]">✦</span>
            <span>NEWS ARTICLES</span>
          </div>

          <div>
            <button className="w-full py-2 bg-gradient-to-r from-gray-900 to-black text-white text-[11px] font-medium rounded-lg hover:opacity-90 transition-opacity" type="button">
              Click Me
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}