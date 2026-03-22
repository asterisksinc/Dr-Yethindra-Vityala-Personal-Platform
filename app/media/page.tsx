import Image from "next/image";
import "./speaking-media.css";
import "../research/research-publications.css";
const mediaItems = [
  {
    id: 1,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-1.png",
    type: "photo",
  },
  {
    id: 2,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-2.png",
    type: "certificate",
  },
  {
    id: 3,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-3.png",
    type: "certificate",
  },
  {
    id: 4,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-4.png",
    type: "certificate",
  },
  {
    id: 5,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-5.png",
    type: "certificate",
  },
  {
    id: 6,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-6.png",
    type: "certificate",
  },
  {
    id: 7,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-7.png",
    type: "certificate",
  },
  {
    id: 8,
    title: "Mahatma Gandhi National Award (2020)",
    description:
      "Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award recognizes outstanding contributions to global healthcare and medical research.",
    image: "/speaking/media-8.png",
    type: "certificate",
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
  return (
    <section className="bg-[#f5f5f5] w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col h-[calc(100vh-80px)] overflow-hidden">
      <div className="shrink-0 mb-2">
        <h2 className="text-[28px] md:text-[31.4px] tracking-[-0.64px] text-[#111]">Speaking & Media</h2>
        <p className="text-[14px] text-[#757575] max-w-[600px] leading-relaxed hidden md:block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>
      <div className="shrink-0 mt-2 mb-4 flex gap-2">
        <button className="px-4 py-1.5 text-[12px] font-light bg-[#eee] border border-[#EDEDED] rounded-full text-[#111] cursor-pointer">All</button>
        <button className="px-4 py-1.5 text-[12px] font-light bg-white border border-[#EDEDED] rounded-full text-[#111] cursor-pointer hover:bg-gray-50 transition-colors">Philanthropy</button>
        <button className="px-4 py-1.5 text-[12px] font-light bg-white border border-[#EDEDED] rounded-full text-[#111] cursor-pointer hover:bg-gray-50 transition-colors">Campaigns</button>
      </div>
      <div data-lenis-prevent="true" className="flex-1 overflow-y-auto min-h-0 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 custom-scrollbar">

        <div className="vit-research-grid">
          {mediaItems.map((item) => (
            <article className="vit-speaking-card" key={item.id}>
              <div
                className={`vit-speaking-image-wrap ${item.type === "photo"
                    ? "vit-speaking-image-wrap-photo"
                    : "vit-speaking-image-wrap-certificate"
                  }`}
              >
                <Image
                  src='/certeficate.png'
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
        <div className="flex-1 bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 overflow-hidden flex items-center overflow-x-auto custom-scrollbar">
          <div className="flex gap-4 items-center pl-2">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="w-[85px] h-[55px] bg-[#f0f0f0] rounded shrink-0" key={index} />
            ))}
          </div>
        </div>

        <aside className="w-full md:w-[300px] bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-4 text-[#111] font-bold tracking-wide text-[10px]">
            <span className="text-[#8a2be2]">✦</span>
            <span>NEWS ARTICLES</span>
          </div>

          <div>
            <button className="w-full py-2 bg-linear-to-r from-gray-900 to-black text-white text-[11px] font-medium rounded-lg hover:opacity-90 transition-opacity" type="button">
              Click Me
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}