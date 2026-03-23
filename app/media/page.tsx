// 'use client';
// import Image from "next/image";
// import "./speaking-media.css";
// import "../research/research-publications.css";
// import { useState } from "react";
// const mediaItems = [
//   {
//     id: 1,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "lecture",
//   },
//   {
//     id: 2,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Community Outreach",
//   },
//   {
//     id: 3,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Conferences",
//   },
//   {
//     id: 4,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Conferences",
//   },
//   {
//     id: 5,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Philanthropy",
//   },
//   {
//     id: 6,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Community Outreach",
//   },
//   {
//     id: 7,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Philanthropy",
//   },
//   {
//     id: 8,
//     title: "Mahatma Gandhi National Award (2020)",
//     description:
//       "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
//     image: "/certeficate.png",
//     type: "Lectures",
//   },
// ];

// const filterItems = [
//   "All",
//   "Philanthropy",
//   "Campaigns",
//   "Community Outreach",
//   "Lectures",
//   "Conferences",
// ];

// export default function SpeakingMedia() {
//   const [activeFilter, setActiveFilter] = useState("All");
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const filteredMedia =
//     activeFilter === "All"
//       ? mediaItems
//       : mediaItems.filter(
//         (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
//       );
//   return (
//     <>
//     <div style={{ overflow: 'auto' }}>
//       <section className="bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col h-[calc(100vh-80px)] hh ">
//         <div className="shrink-0 mb-2">
//           <h2 className="text-[36px] lg:text-[42px] font-light tracking-tight text-[#111] px-2 mb-2">Speaking & Media</h2>
//         </div>
//         <div className="shrink-0 mt-2 mb-4 flex gap-2 overflow-x-auto custom-scrollbar">
//           {filterItems.map((filter, i) => (
//             <>
//               <button
//                 key={i}
//                 onClick={() => setActiveFilter(filter)}
//                 className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors whitespace-nowrap
//         ${activeFilter === filter
//                     ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
//                     : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
//                   }`}
//               >
//                 {filter}
//               </button>

//               {/* ✅ Divider ONLY after first item */}
//               {i === 0 && (
//                 <div className="w-px h-5 bg-gray-300 mt-2"></div>
//               )}
//             </>
//           ))}
//         </div>
//         <div data-lenis-prevent="true" className="flex-1 overflow-y-auto min-h-0 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar">

//           <div className="vit-research-grid">
//             {filteredMedia.map((item) => (
//               <article className="vit-speaking-card" key={item.id}>
//                 <div
//                   className={`vit-speaking-image-wrap ${item.type === "photo"
//                     ? "vit-speaking-image-wrap-photo"
//                     : "vit-speaking-image-wrap-certificate"
//                     }`}
//                 >
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     fill
//                     className="vit-speaking-image"
//                   />
//                 </div>

//                 <h3 className="vit-speaking-card-title">{item.title}</h3>
//                 <p className="vit-speaking-card-text">{item.description}</p>
//               </article>
//             ))}
//           </div>
//         </div>

//         <div className="shrink-0 mt-4 flex flex-col md:flex-row gap-4 h-auto">
//           <div className="flex-1 bg-[#FFFFFF] rounded-[16px] p-2 shadow-sm border border-gray-100 overflow-hidden flex items-center overflow-x-auto custom-scrollbar">
//             <div className="flex gap-4 items-center pl-2">
//               {Array.from({ length: 8 }).map((_, index) => (
//                 <div className="w-[150px] h-[145px] bg-[#f0f0f0] rounded shrink-0" key={index} />
//               ))}
//             </div>
//           </div>

//           <aside className="w-full bg-[#fff] rounded-[16px] p-2 shadow-sm border border-gray-100 p-6  items-center ww gap-6" style={{ width: '366px' }}>

//             {/* LEFT CONTENT */}
//             <div className="flex flex-col gap-3 ">

//               <div className="flex items-center gap-2 text-[#111] text-[12px] font-medium">
//                 <div className="w-[12px] h-[12px] bg-black rounded-sm"></div>
//                 <span>News Articles</span>
//               </div>
//               <div className="flex justify-center items-center">
//                 <img
//                   src="/news.svg"  // use your icon here
//                   alt="news"
//                   className="w-[120px] h-auto object-contain"
//                 />
//               </div>
//               <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
//                 <div className="mm" style={{ width: '200px' }}>
//                   <h3 className="text-[18px] font-medium text-[#111]">
//                     Lorem ipsum dolor
//                   </h3>

//                   <p className="text-[12px] text-[#777] leading-relaxed" >
//                     Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//                   </p>
//                 </div>
//                 <button
//                   onClick={() => setDrawerOpen(true)}
//                   style={{ height: '32px', padding: '3px 10px', marginTop: '10px' }}
//                   className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1a1a1a] to-black text-white text-[12px] font-medium hover:opacity-90 transition cursor-pointer"
//                 >
//                   Click Me
//                 </button></div>
//             </div>

//             {/* CENTER IMAGE */}

//             {/* RIGHT BUTTON */}
//             <div className="flex items-center">

//             </div>

//           </aside>
//         </div>
//       </section>
//     </div>

//       {/* ===== BOTTOM DRAWER ===== */}
//       <div
//         className="fixed inset-x-0 bottom-0 z-50 transition-transform duration-500 ease-out"
//         style={{ transform: drawerOpen ? 'translateY(0)' : 'translateY(100%)' }}
//       >
//         {/* Backdrop */}
//         {drawerOpen && (
//           <div
//             className="fixed inset-0 bg-black/30 backdrop-blur-[2px] -z-10"
//             onClick={() => setDrawerOpen(false)}
//           />
//         )}

//         <div className="bg-white w-full rounded-t-[20px] shadow-2xl flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
//           {/* Header */}
//           <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 shrink-0">
//             <div className="flex items-center gap-2">
//               <div className="w-[10px] h-[10px] bg-black rounded-sm"></div>
//               <span className="text-[13px] font-medium text-[#111]">News Articles Gallery</span>
//             </div>
//             <button
//               onClick={() => setDrawerOpen(false)}
//               className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-500"
//             >
//               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                 <line x1="18" y1="6" x2="6" y2="18" />
//                 <line x1="6" y1="6" x2="18" y2="18" />
//               </svg>
//             </button>
//           </div>

//           {/* Pinterest masonry gallery */}
//           <div
//             data-lenis-prevent="true"
//             className="flex-1 overflow-y-auto px-4 pt-4 pb-2 custom-scrollbar"
//           >
//             <div style={{ columns: '5', columnGap: '8px' }}>
//               {[260, 210, 300, 190, 240, 280, 200, 230, 270, 190, 250, 220, 300, 180, 240, 260, 210, 290, 200, 230].map((h, i) => (
//                 <div
//                   key={i}
//                   className="rounded-[10px] bg-[#eeeeee] cursor-pointer hover:bg-[#e0e0e0] transition-colors"
//                   style={{ height: `${h}px`, marginBottom: '8px', breakInside: 'avoid' }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';
import Image from "next/image";
import "./speaking-media.css";
import "../research/research-publications.css";
import React, { useState } from "react";

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
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const filteredMedia =
    activeFilter === "All"
      ? mediaItems
      : mediaItems.filter(
        (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <>
      <div style={{ overflow: 'auto' }}>
        <section className="bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col gap-4 h-[calc(100vh-80px)] hh ">
          
          <h1 className="text-[36px] lg:text-[42px] font-light tracking-tight text-[#111] px-2 shrink-0">
            Speaking & Media
          </h1>
          
          <div className="shrink-0 flex items-center gap-2 overflow-x-auto custom-scrollbar px-2" style={{scrollbarWidth:'none'}}>
            {filterItems.map((filter, i) => (
              <React.Fragment key={i}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-1.5 text-[12px] font-light rounded-full cursor-pointer transition-colors whitespace-nowrap
                  ${activeFilter === filter
                      ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
                      : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
                    }`}
                >
                  {filter}
                </button>

                {/* Divider after all items except the last one */}
              {i === 0 && (
                <div className="w-px h-5 bg-gray-400 mt-1" style={{borderRight:'0.1px solid grey'}}></div>
              )}
              </React.Fragment>
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

          <div className="shrink-0 flex flex-col md:flex-row gap-4 h-[210px]">
            {/* Logo Slider Section */}
            <div className="flex-1 bg-[#FFFFFF] rounded-[16px] p-2 shadow-sm border border-gray-100 overflow-hidden flex items-center">
              <div className="vit-logo-slider-container">
                <div className="vit-logo-slider-track">
                  {/* Rendering 16 items to create a seamless infinite loop */}
                  {Array.from({ length: 16 }).map((_, index) => (
                    <div className="w-[150px] h-[145px] bg-[#f0f0f0] rounded shrink-0" key={index} />
                  ))}
                </div>
              </div>
            </div>

            <aside className="w-full bg-[#fff] rounded-[16px] shadow-sm border border-gray-100 p-4 items-center ww gap-6" style={{ width: '366px' }}>
              {/* LEFT CONTENT */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#111] text-[12px] font-medium">
                  <div className="w-[12px] h-[12px] bg-black rounded-sm"></div>
                  <span>News Articles</span>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src="/news.svg"
                    alt="news"
                    className="w-[110px] h-auto object-contain"
                  />
                </div>
                <div style={{ display: 'flex', gap: '8px', justifyContent: 'space-between' }}>
                  <div className="mm" style={{ width: '200px' }}>
                    <h3 className="text-[18px] font-medium text-[#111]">
                      Lorem ipsum dolor
                    </h3>

               
                  </div>
                <button
                    onClick={() => setDrawerOpen(true)}
                    style={{  padding: '3px 10px', marginBottom: '10px' }}
                    className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#1a1a1a] to-black text-white text-[12px] font-medium hover:opacity-90 transition cursor-pointer"
                  >
                    Click Me
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {/* ===== BOTTOM DRAWER ===== */}
      <div
        className="fixed inset-x-0 bottom-0 z-50 transition-transform duration-500 ease-out"
        style={{ transform: drawerOpen ? 'translateY(0)' : 'translateY(100%)' }}
      >
        {/* Backdrop */}
        {drawerOpen && (
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-[2px] -z-10"
            onClick={() => setDrawerOpen(false)}
          />
        )}

        <div className="bg-white w-full rounded-t-[20px] shadow-2xl flex flex-col" style={{ height: 'calc(100vh - 80px)' }}>
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-[10px] h-[10px] bg-black rounded-sm"></div>
              <span className="text-[13px] font-medium text-[#111]">News Articles Gallery</span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-500"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Pinterest masonry gallery */}
          <div
            data-lenis-prevent="true"
            className="flex-1 overflow-y-auto px-4 pt-4 pb-2 custom-scrollbar"
          >
            <div style={{ columns: '5', columnGap: '8px' }}>
              {[260, 210, 300, 190, 240, 280, 200, 230, 270, 190, 250, 220, 300, 180, 240, 260, 210, 290, 200, 230].map((h, i) => (
                <div
                  key={i}
                  className="rounded-[10px] bg-[#eeeeee] cursor-pointer hover:bg-[#e0e0e0] transition-colors"
                  style={{ height: `${h}px`, marginBottom: '8px', breakInside: 'avoid' }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}