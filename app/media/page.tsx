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
    <section className="vit-research-wrapper">
      <div className="vit-research-header">
        <h2>Speaking & Media</h2>
        <p>
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        </p>
      </div>
    <div className="vit-research-filter">
        <button className="vit-research-btn active">All</button>
        <button className="vit-research-btn">Philanthropy</button>
        <button className="vit-research-btn">Campaigns</button>
        {/* <button className="vit-research-btn">Community Outreach</button>
        <button className="vit-research-btn">Lectures</button>
        <button className="vit-research-btn">Conferences</button> */}
      </div>
      <div className="vit-research-scroll max">

        <div className="vit-research-grid">
            {mediaItems.map((item) => (
              <article className="vit-speaking-card" key={item.id}>
                <div
                  className={`vit-speaking-image-wrap ${
                    item.type === "photo"
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

      <div className="vit-speaking-bottom-layout">
        <div className="vit-speaking-bottom-gallery" style={{marginTop:'16px'}}>
          <div className="vit-speaking-placeholder-row">
            {Array.from({ length: 8 }).map((_, index) => (
              <div className="vit-speaking-placeholder-card" key={index} />
            ))}
          </div>
        </div>

        <aside className="vit-speaking-news-panel">
          <div className="vit-speaking-news-label">
            <span className="vit-speaking-news-icon">✦</span>
            <span>NEWS ARTICLES</span>
          </div>

          <div className="vit-speaking-news-button-wrap">
            <button className="vit-speaking-news-button" type="button">
              Click Me
            </button>
          </div>
        </aside>
      </div>
    </section>
  );
}