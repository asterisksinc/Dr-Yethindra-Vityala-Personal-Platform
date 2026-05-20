// 'use client';
// import {Image} from "next/image";
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
import { useEffect, useMemo, useState } from "react";
import "./speaking-media.css";
import "../research/research-publications.css";
import React from "react";

type MediaItem = {
  title: string;
  description: string;
  type: string;
  imageUrl: string;
};

const fallbackMediaItems: MediaItem[] = [
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Lectures",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Community Outreach",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Conferences",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Campaigns",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Philanthropy",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Community Outreach",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Philanthropy",
  },
  {
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    imageUrl: "/certeficate.png",
    type: "Lectures",
  },
];

const filterItems = [
  "All",
  "Campaigns",
  "Community Outreach",
  "Lectures",
  "Conferences",
  "Presentations",
];

const mediaLogoItems = [
  { src: "/speaking-media-logos/mediaLogosNew/ABP Desham.svg", alt: "ABP Desam", link: "https://telugu.abplive.com/telangana/dr-vityala-yethindra-a-guinness-world-record-for-the-longest-title-of-a-book-9996" },
  { src: "/speaking-media-logos/mediaLogosNew/Youth ki Awaaz.svg", alt: "Youth Ki Awaaz", link: "https://www.youthkiawaaz.com/2021/09/meet-dr-vityala-yethindra-a-prolific-medical-researcher-who-is-being-an-example-of-change/" },
  { src: "/speaking-media-logos/mediaLogosNew/The Times of India.svg", alt: "The Times of India", link: "https://timesofindia.indiatimes.com/life-style/books/features/interesting-facts-about-books-and-reading/photostory/82211085.cms?from=mdr" },
  { src: "/speaking-media-logos/mediaLogosNew/The Morning Star.svg", alt: "The Morning Star", link: "https://vernonmorningstar.com/2021/05/26/morning-start-the-longest-title-of-a-book-contains-3777-words/" },
  { src: "/speaking-media-logos/mediaLogosNew/The Knowledge Review.svg", alt: "The Knowledge Review", link: "https://theknowledgereview.com/dr-yethindra-vityala-fostering-ingenious-learning-in-youths/" },
  { src: "/speaking-media-logos/mediaLogosNew/Story of SOuls.svg", alt: "Story of Souls", link: "https://www.storyofsouls.com/vityala-yethindra-12-time-world-record-holder-world-youngest-scientist/" },
  { src: "/speaking-media-logos/mediaLogosNew/Silicon India.svg", alt: "Silicon India", link: "https://www.siliconindia.com/news/general/hyderabadi-doctors-design-a-vaccine-against-naegleria-fowleri-causing-primary-amebic-meningoencephalitis-nid-229883-cid-1.html" },
  { src: "/speaking-media-logos/mediaLogosNew/PYNR.svg", alt: "PYNR", link: "https://pynr.in/first-case-of-hereditary-sensory-and-autonomic-neuropathy-type-ii-discovered-by-indian-doctors/" },
  { src: "/speaking-media-logos/mediaLogosNew/One India.svg", alt: "OneIndia", link: "https://www.oneindia.com/india/dr-vityala-yethindra-a-guinness-world-record-for-the-longest-title-of-a-book-3315149.html" },
  { src: "/speaking-media-logos/mediaLogosNew/News World.svg", alt: "NewsX", link: "https://www.newsx.com/world/from-india-to-the-world-stage-dr-yethindra-vityala-sweeps-top-honors-at-asco-direct-gi-2026-189877/" },
  { src: "/speaking-media-logos/mediaLogosNew/Outlook.svg", alt: "Outlook", link: "https://www.outlookindia.com/outlook-spotlight/dr-vityala-yethindra-honoured-with-karmaveer-chakra-award-by-united-nations-and-icongo-news-192521" },
  { src: "/speaking-media-logos/mediaLogosNew/Newsheads.svg", alt: "Newsheads", link: "https://www.newsheads.in/lifestyle/health/yethindia-covid-19-awareness-campaign-in-government-high-school-desaipet-warangal-article-66446" },
  { src: "/speaking-media-logos/mediaLogosNew/News 24.svg", alt: "News24", link: "https://news24online.com/lifestyle/dr-yethindra-vityala-receives-dr-yellapragada-subbarao-memorial-award-for-outstanding-research-paper/134046/" },
  { src: "/speaking-media-logos/mediaLogosNew/News Live.svg", alt: "News Live", link: "https://newslivetv.com/story-of-a-champion-of-the-champions-dr-vityala-yethindra/" },
  { src: "/speaking-media-logos/mediaLogosNew/Mid Day.svg", alt: "Mid-day", link: "https://www.mid-day.com/lifestyle/infotainment/article/dr-vityala-yethindra-awarded-with-metropolis-medengage-2021-for-best-research-paper-23189133" },
  { src: "/speaking-media-logos/mediaLogosNew/Layest LY.svg", alt: "Latestly", link: "https://www.latestly.com/lifestyle/dr-vityala-yethindras-book-on-heart-achieved-guinness-world-record-for-longest-title-of-a-book-2829867.html" },
  { src: "/speaking-media-logos/mediaLogosNew/Humans of Hyderabad.svg", alt: "Humans of Hyderabad", link: "https://humansofhyderabad.co.in/a-doctor-with-many-talents/" },
  { src: "/speaking-media-logos/mediaLogosNew/Grace.svg", alt: "Grace International Group", link: "https://graceintlgroup.com/did-you-know-longest-title-book/" },
  { src: "/speaking-media-logos/mediaLogosNew/Daily Excelsior.svg", alt: "Daily Excelsior", link: "https://www.dailyexcelsior.com/indian-doctor-and-researcher-dr-vityala-yethindra-discovered-the-first-case-of-mirror-writing-in-a-patient-with-frontal-lobe-epilepsy/" },
  { src: "/speaking-media-logos/mediaLogosNew/Book of Achievers.svg", alt: "Book of Achievers", link: "https://bookofachievers.com/articles/ambassador-of-peace-is-the-worlds-youngest-scientist-also-an-author-activist-philanthropist" },
  { src: "/speaking-media-logos/mediaLogosNew/APN.svg", alt: "APN Live", link: "https://www.apnlive.com/meet-dr-vityala-yethindra-worlds-youngest-scientist-in-medicine/" },
  { src: "/speaking-media-logos/mediaLogosNew/ANI South ASias Leading Multi Media News Agency.svg", alt: "ANI News", link: "https://www.aninews.in/news/business/business/the-2023-recipients-of-the-business-mint-nationwide-awards-for-under-30-emerging-industry-experts20230109171233/" },
  { src: "/speaking-media-logos/mediaLogosNew/The Times of India (2).svg", alt: "The Times of India crest", link: "https://timesofindia.indiatimes.com/life-style/books/features/interesting-facts-about-books-and-reading/photostory/82211085.cms?from=mdr" },
];

const newsGalleryItems = [
  {
    src: "/news-gallery/andhrajyothy-2021-12-02.jpg",
    alt: "Andhrajyothy, 02-12-2021",
    height: 240,
  },
  {
    src: "/news-gallery/eenadu-2019-05-20.jpg",
    alt: "Eenadu, 20-05-2019",
    height: 300,
  },
  {
    src: "/news-gallery/eenadu-2020-12-19.jpg",
    alt: "Eenadu, 19-12-2020",
    height: 230,
  },
  {
    src: "/news-gallery/eenadu-2021-07-24.jpeg",
    alt: "Eenadu, 24-07-2021",
    height: 200,
  },
  {
    src: "/news-gallery/eenadu-2021-12-02.jpg",
    alt: "Eenadu, 02-12-2021",
    height: 250,
  },
  {
    src: "/news-gallery/eenadu-2021-12-22.jpg",
    alt: "Eenadu, 22-12-2021",
    height: 210,
  },
  {
    src: "/news-gallery/eenadu-2022-04-23.jpg",
    alt: "Eenadu, 23-04-2022",
    height: 240,
  },
  {
    src: "/news-gallery/knowledge-review-2022.jpg",
    alt: "Knowledge Review, 2022",
    height: 310,
  },
  {
    src: "/news-gallery/manatelangana-2021-10-17.jpg",
    alt: "Manatelangana, 17-10-2021",
    height: 230,
  },
  {
    src: "/news-gallery/navatelangana-2021-10-17.jpg",
    alt: "Navatelangana, 17-10-2021",
    height: 210,
  },
  {
    src: "/news-gallery/navatelangana-2021-12-03.jpg",
    alt: "Navatelangana, 03-12-2021",
    height: 260,
  },
  {
    src: "/news-gallery/red-magazine-september-october.jpg",
    alt: "Red Magazine, September-October issue",
    height: 300,
  },
  {
    src: "/news-gallery/sakshi-2021-10-05.jpg",
    alt: "Sakshi, 05-10-2021",
    height: 230,
  },
  {
    src: "/news-gallery/sakshi-2021-12-02.jpg",
    alt: "Sakshi, 02-12-2021",
    height: 220,
  },
  {
    src: "/news-gallery/sakshi-2021-12-03.jpg",
    alt: "Sakshi, 03-12-2021",
    height: 240,
  },
  {
    src: "/news-gallery/the-pioneer-2021-09-04.jpg",
    alt: "The Pioneer, 04-09-2021",
    height: 260,
  },
  {
    src: "/news-gallery/the-pioneer-2021-10-10.jpg",
    alt: "The Pioneer, 10-10-2021",
    height: 280,
  },
  {
    src: "/news-gallery/the-pioneer-2021-12-12.jpg",
    alt: "The Pioneer, 12-12-2021",
    height: 320,
  },
  {
    src: "/news-gallery/the-pioneer-2022-05-07.jpg",
    alt: "The Pioneer, 07-05-2022",
    height: 290,
  },
  {
    src: "/news-gallery/the-pioneer-2023-05-08.jpg",
    alt: "The Pioneer, 08-05-2023",
    height: 300,
  },
  {
    src: "/news-gallery/times-of-india-2021-02-24.jpg",
    alt: "Times of India, 24-02-2021",
    height: 250,
  },
];

export default function SpeakingMedia() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>(fallbackMediaItems);
  const [activeFilter, setActiveFilter] = useState("All");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedNewsItem, setSelectedNewsItem] = useState<(typeof newsGalleryItems)[number] | null>(null);
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCard = (index: number) => {
    setExpandedCards((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  useEffect(() => {
    const loadMediaData = async () => {
      try {
        const res = await fetch("/api/cms/speaking-media");
        const result = await res.json();

        if (!res.ok || !result?.data?.content) {
          setMediaItems(fallbackMediaItems);
          return;
        }

        const items = Array.isArray(result.data.content.items)
          ? result.data.content.items
          : [];

        const normalizedItems = items
          .map((item: Partial<MediaItem> & { image?: string }) => ({
            title: String(item.title || "").trim(),
            description: String(item.description || "").trim(),
            type: String(item.type || "").trim(),
            imageUrl: String(item.imageUrl || item.image || "/certeficate.png").trim() || "/certeficate.png",
          }))
          .filter((item: MediaItem) => item.title || item.description || item.type);

        setMediaItems(normalizedItems.length > 0 ? normalizedItems : fallbackMediaItems);
      } catch {
        setMediaItems(fallbackMediaItems);
      }
    };

    loadMediaData();
  }, []);
  
  const filteredMedia = useMemo(() => {
    if (activeFilter === "All") {
      return mediaItems;
    }

    return mediaItems.filter(
      (item) => item.type.toLowerCase() === activeFilter.toLowerCase()
    );
  }, [activeFilter, mediaItems]);

  return (
    <>
      <div className="media-page-container">
        <section className="media-page-shell bg-[#f5f5f5] w-full p-2 md:p-2.5 lg:p-3 pb-10 md:pb-6 lg:pb-3 flex flex-col gap-2">
          
      
          <div className="shrink-0 mb-1">
        <h2 className="vit-page-title text-[18px] sm:text-[20px] md:text-[22px] lg:text-[25px] font-light tracking-tight text-[#111] px-2 mb-1">            Speaking & Media
</h2>
      </div>
          <div className="shrink-0 flex items-center gap-1.5 sm:gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] custom-scrollbar px-2">
            {filterItems.map((filter, i) => (
              <React.Fragment key={i}>
                <button
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] sm:text-[11px] lg:text-[12px] font-light rounded-full cursor-pointer transition-colors whitespace-nowrap
                  ${activeFilter === filter
                      ? "bg-[#eee] border border-[#EDEDED] text-[#111]"
                      : "bg-white border border-[#EDEDED] text-[#111] hover:bg-gray-50"
                    }`}
                >
                  {filter}
                </button>

                {/* Divider after all items except the last one */}
              {i === 0 && (
                <div className="w-px h-4 sm:h-5 bg-gray-300 mt-1.5 sm:mt-2"></div>
              )}
              </React.Fragment>
            ))}
          </div>

          <div data-lenis-prevent="true" className="media-main-scroll bg-[#FFFFFF] rounded-[16px] pt-4 sm:pt-3 p-1 sm:p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar">
            <div className="vit-research-grid">
              {filteredMedia.map((item, index) => (
                <article className={`vit-speaking-card ${expandedCards.has(index) ? "expanded" : ""}`} key={`${item.title}-${index}`}>
                  <div
                    className={`vit-speaking-image-wrap ${item.type === "photo"
                      ? "vit-speaking-image-wrap-photo"
                      : "vit-speaking-image-wrap-certificate"
                      }`}
                  >
                    <Image
                      src={item.imageUrl || "/certeficate.png"}
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

          <div className="media-bottom-row shrink-0 flex flex-col md:flex-row gap-2 sm:gap-3 lg:gap-4">
            <div className="media-logo-panel flex-1 bg-[#FFFFFF] rounded-[16px] p-2 shadow-sm border border-gray-100 overflow-hidden flex items-center">
              <div className="vit-logo-slider-container">
                <div className="vit-logo-slider-track">
                  {[...mediaLogoItems, ...mediaLogoItems].map((item, index) => (
                    <div className="media-logo-slide-item" key={`${item.alt}-${index}`}>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="media-logo-slide-image"
                        />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <aside className="media-news-panel md:w-[300px] lg:w-[366px] bg-[#fff] rounded-[16px] shadow-sm border border-gray-100 p-[5px] items-center gap-2 sm:gap-3">
              {/* LEFT CONTENT */}
              <div className="flex flex-col gap-2 sm:gap-3">
                <div className="flex items-center gap-2 text-[#111] text-[10px] sm:text-[11px] lg:text-[12px] font-medium">
                  <div className="w-[10px] sm:w-[12px] h-[10px] sm:h-[12px] bg-black rounded-sm"></div>
                  <span>News Articles</span>
                </div>
                <div className="media-news-icon-wrap flex justify-center items-center">
                  <Image
                    src="/news.svg"
                    alt="news"
                    className="media-news-icon w-[80px] sm:w-[100px] lg:w-[47px] h-auto object-contain"
                    width={110}
                    height={110}
                  />
                </div>
                <div className="media-news-content-row">
                  <div className="media-news-content-copy">
                    {/* <h3 className="text-[14px] sm:text-[16px] lg:text-[18px] font-medium text-[#111]">
                      Lorem ipsum dolor
                    </h3> */}

               
                  </div>
                <button
                    onClick={() => setDrawerOpen(true)}
                    style={{ padding: '3px 10px', marginBottom: '10px' }}
                    className="media-news-cta px-4 sm:px-6 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-[#1a1a1a] to-black text-white text-[10px] sm:text-[11px] lg:text-[12px] font-medium hover:opacity-90 transition cursor-pointer"
                  >
                    Click Me
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </div>

      {selectedNewsItem && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4"
          onClick={() => setSelectedNewsItem(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[98vh] sm:max-h-[90vh] rounded-[18px] bg-white p-2 sm:p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedNewsItem(null)}
              className="hidden sm:flex absolute right-3 top-3 z-10 h-8 w-8 items-center justify-center rounded-full bg-black/80 text-white transition hover:bg-black"
              aria-label="Close image preview"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <button
              onClick={() => setSelectedNewsItem(null)}
              className="sm:hidden absolute right-3 top-3 z-10 flex items-center rounded-full bg-black text-white text-[15px] font-semibold px-5 py-2 transition hover:opacity-90"
            >
              CLOSE
            </button>
            <div className="relative h-[92vh] sm:h-[78vh] w-full sm:max-h-[84vh]">
              <Image
                src={selectedNewsItem.src}
                alt={selectedNewsItem.alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            <p className="mt-2 text-center text-[15px] sm:text-[14px] text-[#444] font-medium">
              {selectedNewsItem.alt}
            </p>
          </div>
        </div>
      )}

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

        <div className="bg-white w-full rounded-t-[20px] shadow-2xl flex flex-col h-[85vh] sm:h-[calc(100vh-80px)]">
          {/* Header */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-3 border-b border-gray-100 shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] bg-black rounded-sm"></div>
              <span className="text-[11px] sm:text-[13px] font-medium text-[#111]">News Articles Gallery</span>
            </div>
            <button
              onClick={() => setDrawerOpen(false)}
              className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors cursor-pointer text-gray-500"
            >
              <svg width="12" height="12" className="sm:w-[14px] sm:h-[14px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Pinterest masonry gallery */}
          <div
            data-lenis-prevent="true"
            className="flex-1 overflow-y-auto px-2 sm:px-4 pt-3 sm:pt-4 pb-2 custom-scrollbar"
          >
            <div className="media-drawer-masonry">
              {newsGalleryItems.map((item) => (
                <div
                  key={item.alt}
                  className="relative mb-2 overflow-hidden rounded-[8px] sm:rounded-[10px] bg-white shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  style={{ height: `${item.height}px`, breakInside: 'avoid' }}
                  onClick={() => setSelectedNewsItem(item)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain p-1.5 sm:p-2"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
