import Image from "next/image";
import "./awards-records.css";
import "../about/about.css";
import InfoCard from "../components/InfoCard";
import { User } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awards & Records | Dr. Yethindra Vityala",
  description:
    "Explore the awards, honors, and world records of Dr. Yethindra Vityala — including 12 world records, 25+ awards, Guinness recognition, global certifications, and achievements in medical research, innovation, and trilingual authorship.",
  keywords: [
    "Dr. Yethindra Vityala awards",
    "Dr. Yethindra Vityala world records",
    "Guinness World Records",
    "Youngest Scientist in Medicine",
    "Fastest Research Study Worldwide",
    "Youngest Trilingual Book Author",
    "Medical research awards",
    "Global prodigy honors",
    "Achievement mastery",
    "Research endurance",
    "Record validation",
    "Innovation speed",
    "Global certification",
    "Challenge resilience",
  ],
  openGraph: {
    title: "Awards & Records | Dr. Yethindra Vityala",
    description:
      "Discover the global honors, world records, and certifications of Dr. Yethindra Vityala, including Guinness recognition, 12 world records, and 25+ prestigious awards in medicine and research.",
    url: "/awards",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Awards & Records | Dr. Yethindra Vityala",
    description:
      "12 world records, 25+ awards, Guinness recognition, and global honors in medicine, innovation, and research.",
  },
  alternates: {
    canonical: "/awards",
  },
};
export default function AwardsRecords() {
  return (
    <section className="vit-awards-wrapper w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col gap-2">

      {/* Title */}
      <div className="vit-awards-header">
        <h2>Global Prodigy Honors</h2>
      </div>

      <div className="vit-awards-grid">

        {/* Left Content */}
        <div className="vit-awards-left">

          {/* Video Section */}
          <div className="vit-awards-video height">
            <Image
              src="/awards/video-placeholder.png"
              alt="video"
              fill
              className="vit-awards-video-img"
            />
          </div>

          {/* Certificates */}
          <div className="vit-awards-cert-section">
            <h3>Honour & Certifications</h3>

            <div className="vit-awards-cert-grid">

              {[
                {
                  title: "Karmaveer Chakra Award (2021)",
                  img: "/certeficate.png",
                  sub: "This prestigious honor, granted by iCONGO and the United Nations, celebrates his commitment to using medical science for social change and community health.",
                },
                {
                  title: "Mahatma Gandhi National Award (2020)",
                  img: "/certeficate.png",
                  sub: 'Conferred by the Mahatma Gandhi Global Peace Forum in association with the United Nations, this award highlights Dr. Yethindra’s contributions to global healthcare and medical research.'
                },
                {
                  title: "Young Researcher, Green Thinker, 2020",
                  img: "/certeficate.png",
                  sub: `Dr. Yethindra's research has been published in some of the most respected medical journals globally. His work spans a wide range of medical topics, 
                  `
                },
                {
                  title: "Dr. Yellapragada Subbarao Memorial Award, 2020",
                  img: "/certeficate.png",
                  sub: `Honored by the Indian Association of Biomedical Scientists for outstanding achievements in biomedical research, reflecting excellence in advancing healthcare and scientific discovery in the spirit of Dr. Yellapragada Subbarao's legacy.`
                },
                {
                  title: "Nationwide Awards Under 30 Emerging Industry Experts, 2023",
                  img: "/certeficate.png",
                  sub: `Winner of the 2023 Business Mint Nationwide Awards Under 30 Emerging Industry Experts in the Researcher Category for his contributions to the medical research.`
                },
                {
                  title: "Champion of the Champions – MedEngage Award (2021)",
                  img: "/certeficate.png",
                  sub: `Recognized by Metropolis Healthcare for his unparalleled achievements in academics and medical research, particularly his contributions during the COVID-19 pandemic.`
                },
              ].map((cert, index) => (
                <div className="vit-awards-cert-card" key={index}>
                  <div className="vit-awards-cert-img">
                    <Image
                      src={cert.img}
                      alt="certificate"
                      width={420}
                      height={250}
                    />
                  </div>
                  <p className="vit-awards-cert-title">{cert.title}</p>
                  <p className="sub">{cert.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="vit-awards-right flex flex-col gap-2">

          {/* Quote Box */}
          <InfoCard
            title="Achievement Mastery"
            icon={<User size={18} strokeWidth={2} className="text-[#666]" />}
            description="Over 5,000 research hours across 12 world records and 25+ awards mastering rapid innovation amid intense timelines, overcoming publication barriers, and gaining expertise in trilingual authorship, Guinness validation, and global certification processes."
            pills={[
              { label: "Research Endurance" },
              { label: "Record Validation" },
              { label: "Innovation Speed" },
              { label: "Global Certification" },
              { label: "Challenge Resilience" }
            ]}
            pillStyle="gray"
          />

          {/* Records */}
          <div className="bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm border border-gray-100 flex-1 flex flex-col min-h-0">
            <div className="mb-3">
              <h3 className="text-[16px] lg:text-[18px] font-medium text-[#111]">World Records</h3>
            </div>

            <div data-lenis-prevent="true" className="flex-1 flex flex-col gap-2.5 max-h-[500px] overflow-y-auto custom-scrollbar pr-1">
              {[
                {
                  title: "Longest Book Title",
                  subtitle: "Guinness World Records, 2020",
                  description: "Surpassed 3,777-word threshold (26,021 chars) with \"The Historical Development of the Heart...\" detailing all earthly species with hearts. Donated free to 966 underprivileged students.",
                  iconClass: "triangle"
                },
                {
                  title: "Youngest Scientist in Medicine",
                  subtitle: "High Range Book, Assam Records, WRCA, Victorious, Credence, Assist World Records, 2019",
                  description: "Achieved at 18 via 100+ peer-reviewed papers exceeding age/production benchmarks. Insight: \"Youth proves no barrier; velocity in research defines genius.\"",
                  iconClass: "square"
                },
                {
                  title: "Fastest Research Study Worldwide",
                  subtitle: "World Record Certification Agency, 2019",
                  description: "Completed world's fastest study, outpacing global standards in speed/quality. Insight: \"Intensity over time compressed effort yields exponential breakthroughs.\"",
                  iconClass: "circle"
                },
                {
                  title: "First to Complete 20 Medical Courses (10 Universities, 9 Days)",
                  subtitle: "World Record Certification Agency, 2019",
                  description: "Mastered 20 advanced certifications across institutions shattering multi-course duration records. Insight: \"Parallel learning redefines academic limits.\"",
                  iconClass: "diamond"
                },
                {
                  title: "Youngest Trilingual Book Author",
                  subtitle: "World Record Certification Agency, 2019",
                  description: "Penned \"Essentials of Hematology\" in English/Hindi/Russian at record age. Insight: \"Multilingual science bridges global health divides.\"",
                  iconClass: "triangle"
                },
                {
                  title: "Most Medical Certificates in 9 Days",
                  subtitle: "World Record Certification Agency, 2019",
                  description: "Secured highest volume in shortest window, exceeding prior certificate marathons. Insight: \"Certification velocity fuels clinical mastery.\"",
                  iconClass: "square"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FFFFFF] rounded-[16px] p-3 lg:p-4 shadow-sm flex gap-5 items-center border border-black/5 hover:shadow-md transition-shadow shrink-0">
                  <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <div className={`vit-awards-icon ${item.iconClass} shadow-none`} style={item.iconClass === 'triangle' ? { marginLeft: '-1px' } : {}}></div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <h4 className="font-semibold text-[#111] text-[14px] leading-tight mb-0.5 tracking-wide">{item.title}</h4>
                    <span className="text-[11px] text-gray-400 mb-2">{item.subtitle}</span>
                    <p className="text-[12.5px] text-gray-600 leading-[1.6]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}