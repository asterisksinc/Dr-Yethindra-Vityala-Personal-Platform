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
    image: "/certeficate.png",
    type: "lecture",
  },
  {
    id: 2,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Community Outreach",
  },
  {
    id: 3,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Conferences",
  },
  {
    id: 4,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Conferences",
  },
  {
    id: 5,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Philanthropy",
  },
  {
    id: 6,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Community Outreach",
  },
  {
    id: 7,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
    type: "Philanthropy",
  },
  {
    id: 8,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/certeficate.png",
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
    <div style={{overflow:'auto'}}>
    <section className="bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col h-[calc(100vh-80px)] hh ">
      <div className="shrink-0 mb-2">
        <h2 className="text-[28px] md:text-[31.4px] tracking-[-0.64px] text-[#111]">Speaking & Media</h2>
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
      <div data-lenis-prevent="true" className="flex-1 overflow-y-auto min-h-0 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar">

        <div className="vit-research-grid">
          {filteredMedia.map((item) => (
            <article className="vit-speaking-card" key={item.id}>
              <div
                className={`vit-speaking-image-wrap ${item.type === "photo"
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

      <div className="shrink-0 mt-4 flex flex-col md:flex-row gap-4 h-auto md:h-[257px]">
        <div className="flex-1 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 overflow-hidden flex items-center overflow-x-auto custom-scrollbar">
          <div className="flex gap-4 items-center pl-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="w-[150px] h-[145px] bg-[#f0f0f0] rounded shrink-0" key={index} />
            ))}
          </div>
        </div>

      <aside className="w-full bg-[#fff] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 p-6  items-center ww gap-6" style={{width:'366px'}}>

  {/* LEFT CONTENT */}
  <div className="flex flex-col gap-3 ">
    
    <div className="flex items-center gap-2 text-[#111] text-[12px] font-medium">
      <div className="w-[12px] h-[12px] bg-black rounded-sm"></div>
      <span>News Articles</span>
    </div>
<div className="flex justify-center items-center">
    <img
      src="/news.svg"  // use your icon here
      alt="news"
      className="w-[120px] h-auto object-contain"
    />
  </div>
<div style={{display:'flex', gap:'8px', justifyContent:'space-between'}}>
  <div className="mm" style={{width:'200px'}}>
      <h3 className="text-[18px] font-medium text-[#111]">
        Lorem ipsum dolor
      </h3>

      <p className="text-[12px] text-[#777] leading-relaxed" >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      </p>
</div>
  <button style={{height:'32px', padding:'3px 10px', marginTop:'10px'}} className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1a1a1a] to-black text-white text-[12px] font-medium hover:opacity-90 transition">
      Click Me
    </button></div>
  </div>

  {/* CENTER IMAGE */}
  
  {/* RIGHT BUTTON */}
  <div className="flex items-center">
  
  </div>

</aside>
      </div>
    </section>
    </div>
  );
}