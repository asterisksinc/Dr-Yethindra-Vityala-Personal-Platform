import Image from "next/image";
import "./research-publications.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Publications | Dr. Yethindra Vityala",
  description:
    "Explore 100+ peer-reviewed publications, books, and global research contributions by Dr. Yethindra Vityala across cardiology, neurology, infectious diseases, and public health, driving evidence-based healthcare innovation.",
  keywords: [
    "Dr. Yethindra Vityala research",
    "medical publications",
    "peer-reviewed articles",
    "medical research papers",
    "research publications",
    "cardiology research",
    "neurology research",
    "infectious diseases research",
    "public health research",
    "translational research",
    "drug repurposing",
    "pharmacovigilance",
    "global collaborations",
    "medical books",
  ],
  openGraph: {
    title: "Research & Publications | Dr. Yethindra Vityala",
    description:
      "Discover 100+ peer-reviewed publications, books, and impactful medical research by Dr. Yethindra Vityala across multiple disciplines and global collaborations.",
    url: "/research-publications",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Research & Publications | Dr. Yethindra Vityala",
    description:
      "100+ publications, books, and global research contributions in cardiology, neurology, infectious diseases, and public health.",
  },
  alternates: {
    canonical: "/research-publications",
  },
};
export default function ResearchPublications() {

  const books = new Array(8).fill({
    title: "Lorem ipsum dolor self amet",
    desc: "Dr. Yethindra's research has been published in some of the most respected medical journals globally. His work spans a wide range of medical topics including cardiology, neurology, infectious diseases, and public health. Here are some highlights.",
    img: "/research/book1.png"
  });

  return (
    <section className="vit-research-wrapper">

      {/* Heading */}
      <div className="vit-research-header">
        <h2>Research & Publications</h2>
        <p>
          Dr. Yethindra's research has been published in some of the most
          respected medical journals globally. His work spans a wide range of
          medical topics, including cardiology, neurology, infectious diseases,
          and public health. Here are some highlights.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="vit-research-filter">
        <button className="vit-research-btn active">All</button>
        <button className="vit-research-btn">Publications</button>
        <button className="vit-research-btn">Books</button>
      </div>

      {/* Scroll Container */}
      <div className="vit-research-scroll">

        <div className="vit-research-grid">

          {books.map((book, index) => (
            <div key={index} className="vit-research-card">

              <div className="vit-research-img">
                <Image
                  src="/book.png"
                  alt="book"
                  width={200}
                  height={260}
                />
              </div>

              <h3>{book.title}</h3>

              <p>{book.desc}</p>

            </div>
          ))}

        </div>

      </div>

      {/* Category Section Bottom */}
      <div className="vit-research-bottom">

        {[
          { color: "#ff4d4f", title: "LOREM IPSUM DOLOR" },
          { color: "#ff3cac", title: "LOREM IPSUM DOLOR" },
          { color: "#7a5cff", title: "LOREM IPSUM DOLOR" },
          { color: "#ffb300", title: "LOREM IPSUM DOLOR" },
          { color: "#3ea6ff", title: "LOREM IPSUM DOLOR" },
          { color: "#3bc7b8", title: "LOREM IPSUM DOLOR" }
        ].map((item, i) => (
          <div key={i} className="vit-research-category">

            <div className="vit-research-category-title">
              <span
                className="vit-research-color"
                style={{ background: item.color }}
              ></span>
              {item.title}
            </div>

            <div
              className="vit-research-line"
              style={{ background: item.color }}
            ></div>

            <div className="vit-research-tags">
              <span>Lorem ips</span>
              <span>Lorem ips</span>
              <span>Lorem ips</span>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
}