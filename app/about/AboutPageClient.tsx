"use client";
import { useEffect, useState } from "react";
import "./about.css";
import Image from "next/image";
import SkillRadar from "../components/SkillRadar";
import HomeJourneyMap from "../components/HomeJourneyMap";
import InfoCard from "../components/InfoCard";
import { User } from "lucide-react";

const aboutCards = [
  {
    title: "Core Expertise Domains",
    icon: <User size={18} strokeWidth={2} className="text-[#666]" />,
    description: "Excelling in clinical sciences through translational research in high-impact areas.",
    pills: [
      { label: "Endocrinology" },
      { label: "Neurology" },
      { label: "Oncology" },
      { label: "Infectious Diseases" },
      { label: "Public Health" },
    ]
  },
  {
    title: "Research Impact",
    icon: <User size={18} strokeWidth={2} className="text-[#666]" />,
    description: "Over 100 peer-reviewed articles, 45+ international presentations, and initiatives reaching 100,000+ beneficiaries driving evidence-based healthcare innovation.",
    pills: [
      { label: "Translational Research" },
      { label: "Drug Repurposing" },
      { label: "Pharmacovigilance" },
      { label: "Global Collaborations" },
      { label: "Public Health" },
    ]
  }
];

const academicsData = [
  {
    id: 1,
    degree: "Master in Public Health",
    institution: "Guglielmo Marconi University",
    location: "Rome, Italy",
    year: "2024–2026",
    desc: "Gained advanced skills in epidemiology, policy, and global health strategies, enabling 100,000+ beneficiary initiatives."
  },
  {
    id: 2,
    degree: "Master of Business Administration",
    institution: "Manav Rachna University",
    location: "Faridabad, Delhi, India",
    year: "2023–2025",
    desc: "Mastered healthcare leadership, founding Scivyt Research Technologies for research acceleration."
  },
  {
    id: 3,
    degree: "Bachelor of Medicine & Surgery (MBBS MD)",
    institution: "International Higher School of Medicine",
    location: "Bishkek, Kyrgyzstan",
    year: "2016–2021",
    desc: "Built clinical foundation, authoring 100+ papers and discovering rare cases like mirror writing in epilepsy."
  },
  {
    id: 4,
    degree: "Intermediate (11th–12th)",
    institution: "S.R. Junior College for Boys",
    location: "Warangal, Telangana, India",
    year: "2013–2015",
    desc: "Honed analytical skills, launching path to 12 world records and youngest scientist title."
  },
  {
    id: 5,
    degree: "10th Standard",
    institution: "Tejaswi Concept High School",
    location: "Warangal, Telangana, India",
    year: "2012–2013",
    desc: "Instilled discipline for 5,000+ teaching hours and 300+ theses mentored."
  }
];

const workData = [
  {
    id: 1,
    title: "Founder & CEO",
    company: "Scivyt Research Technologies Pvt Ltd",
    location: "Hyderabad, Telangana, India",
    year: "2024–Present",
    desc: "Launched platform facilitating 100+ international publications and 5 digital initiatives.",
    color: "bg-[#A855F7]",
    chartColor: "#10B981"
  },
  {
    id: 2,
    title: "Associate Professor (Honorary International Faculty)",
    company: "AJ Research Centre, AJ Institute of Medical Sciences",
    location: "Mangalore, Karnataka, India",
    year: "2023–Present",
    desc: "Mentored 100+ PhD scholars, delivered masterclasses impacting research productivity.",
    color: "bg-[#A855F7]",
    chartColor: "#10B981"
  },
  {
    id: 3,
    title: "Doctor",
    company: "City Clinical Hospital No. 1",
    location: "Bishkek, Kyrgyzstan",
    year: "2021–Present",
    desc: "Managed complex cases, co-authored 20+ papers on COVID-19 and rare diseases.",
    color: "bg-[#A855F7]",
    chartColor: "#10B981"
  },
  {
    id: 4,
    title: "Associate Professor, Hospital Internal Medicine",
    company: "I.K. Akhunbaev Kyrgyz State Medical Academy",
    location: "Bishkek, Kyrgyzstan",
    year: "2021–Present",
    desc: "Supervised 300+ postgrad theses, contributed to 10 institutional programs.",
    color: "bg-[#A855F7]",
    chartColor: "#10B981"
  },
  {
    id: 5,
    title: "Associate Professor, Pathology",
    company: "International Higher School of Medicine",
    location: "Bishkek, Kyrgyzstan",
    year: "2021–Present",
    desc: "Reviewed 200+ manuscripts, served 15+ editorial boards across 20 journals.",
    color: "bg-[#A855F7]",
    chartColor: "#10B981"
  }
];

export default function AboutPage() {
  const [cursorX, setCursorX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleMove = (e: any) => {
    setCursorX(e.clientX);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="vit-about-wrapper">

        {/* HERO */}
        <section className="vit-about-hero">
          <div className="vit-hero-overlay">
            <h1>Physician. Researcher. Global Innovator.</h1>
            <p>
              Dr. Yethindra Vityala, MBBS MD MPH MBA World's Youngest Scientist in Medicine with 100+ peer-reviewed publications, 12 world records, and impact across 10+ countries. Bridging clinical practice, research, and public health advocacy.
            </p>
          </div>

          {/* <div className="vit-hero-scale">
    <Image
      src="/scale.svg"
      width={1300}
      height={40}
      alt="skills"
    />
  </div> */}
          {/* <div className="vit-hero-scale">
            <div className="vit-scale-wrapper" onMouseMove={handleMove}>
              {Array.from({ length: 180 }).map((_, i) => {
                const distance = Math.abs(cursorX - (i * screenWidth) / 180);
                const height = Math.max(30, 50 - distance / 12);

                return (
                  <div
                    key={i}
                    className="vit-scale-bar"
                    style={{ height: `${height}px` }}
                  />
                );
              })}
            </div>
          </div> */}
        </section>


        {/* INFO CARDS */}
        <section className="vit-info-cards">

          {/* <div className="vit-card1 vit-skill-card">
    <Image
      src="/card1.svg"
      width={420}
      height={290}
      alt="skills"
    />
  </div> */}
          <div className="vit-card1 vit-skill-card">
            <p className="h12">Professional skills</p>
            <SkillRadar />
          </div>

          {aboutCards.map((card, idx) => (
            <InfoCard
              key={idx}
              title={card.title}
              icon={card.icon}
              description={card.description}
              pills={card.pills}
              pillStyle="gray"
            />
          ))}

        </section>


        {/* ACADEMICS */}
        <section className="mt-20 w-full mx-auto px-4 mb-16">
          <h2 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-2 tracking-tight">Academic Excellence</h2>
          <p className="text-[#6A6A6F] text-[15px] mb-8 max-w-[600px] leading-relaxed">
            Distinguished across global institutions, achieving top honors and foundational expertise.
          </p>

          <div className="bg-[#FFFFFF] rounded-[16px] p-2 md:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-3">
            {academicsData.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center bg-[#f4f4f4] p-4 md:px-8 md:py-6 rounded-[16px] gap-4 md:gap-0">

                {/* Left: Title & Subtitle */}
                <div className="flex flex-col w-full md:w-[35%] pr-4">
                  <span className="text-[#111] font-medium text-[16px] md:text-[18px] tracking-tight leading-snug">{item.degree}</span>
                  <span className="text-[#888] text-[11px] md:text-[12px] mt-1 font-light">{item.institution}</span>
                </div>

                {/* Middle-Left: Location */}
                <div className="flex items-center w-full md:w-[20%]">
                  <span className="text-[#333] text-[13px]">{item.location}</span>
                </div>

                {/* Middle-Right: Year */}
                <div className="flex items-center w-full md:w-[15%]">
                  <span className="text-[#333] text-[13px] font-medium">{item.year}</span>
                </div>

                {/* Far Right: Text */}
                <div className="flex items-center md:justify-end w-full md:w-[30%]">
                  <p className="text-[#555] text-[12px] leading-relaxed md:text-right max-w-[250px]">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </section>


        {/* BIO */}
        <section className="vit-about-bio">
          <div className="vit-bio-card px-4 md:px-0">
            <p>
              &ldquo;Integrating clinical practice with research to make healthcare inclusive and evidence-based empowering global scholars, advancing innovation, and fostering a research ecosystem for tomorrow's leaders.&rdquo;
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-16 w-full mx-auto px-4 mb-20">
          <h2 className="text-[28px] md:text-[32px] font-medium text-[#111] mb-2 tracking-tight">Professional Impact</h2>
          <p className="text-[#6A6A6F] text-[15px] mb-8 max-w-[600px] leading-relaxed">
            Leadership roles yielding 100+ publications, 1,000+ students mentored, and institutional advancements.
          </p>

          <div className="bg-[#FFFFFF] rounded-[16px] p-2 md:p-6 shadow-[0px_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col gap-3">
            {workData.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center bg-[#f4f4f4] p-4 md:px-8 md:py-6 rounded-[16px] gap-4 md:gap-0">

                {/* Left: Title & Subtitle */}
                <div className="flex flex-col w-full md:w-[35%] pr-4">
                  <span className="text-[#111] font-medium text-[16px] md:text-[18px] tracking-tight leading-snug">{item.title}</span>
                  <span className="text-[#888] text-[11px] md:text-[12px] mt-1 font-light">{item.company}</span>
                </div>

                {/* Middle-Left: Status Dot + Location */}
                <div className="flex items-center gap-3 w-full md:w-[20%]">
                  <div className={`w-3.5 h-3.5 rounded-full ${item.color} shrink-0`} />
                  <span className="text-[#333] font-medium text-[13px] whitespace-nowrap">{item.location}</span>
                </div>

                {/* Middle: Year */}
                <div className="flex items-center w-full md:w-[15%]">
                  <span className="text-[#333] text-[13px] font-medium">{item.year}</span>
                </div>

                {/* Middle-Right: Mini Chart */}
                <div className="hidden md:flex items-center w-full md:w-[15%]">
                  <svg viewBox="0 0 100 25" className="w-[80px] h-[25px] opacity-90 overflow-visible" preserveAspectRatio="none">
                    <polyline points="0,20 15,10 30,15 45,5 60,15 75,5 90,20 100,2" fill="none" stroke={item.chartColor} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <polyline points="0,20 15,10 30,15 45,5 60,15 75,5 90,20 100,2" fill="none" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" transform="translate(0, 4)" filter="blur(2px)" />
                  </svg>
                </div>

                {/* Far Right: Text */}
                <div className="flex items-center justify-between md:justify-end w-full md:w-[25%] pr-2">
                  <span className="text-[#555] text-[12px] md:text-right hidden md:block leading-relaxed max-w-[200px]">{item.desc}</span>
                </div>

              </div>
            ))}
          </div>
        </section>

        <section className="vit-academic-section" style={{ marginBottom: '0px', paddingBottom: '0px' }}>

          <h2>Global Networks</h2>
          <p className="vit-academic-desc">
            Active in elite societies advancing clinical oncology, internal medicine, and sleep research.
          </p>

          <div className="vit-membership-grid">

            {/* MAP */}
            <div className="vit-map-container" style={{ position: 'relative', overflow: 'hidden' }}>
              <HomeJourneyMap />
            </div>

            {/* MEMBERSHIP LIST */}
            <div className="vit-membership-cards">

              <div className="vit-member-card">
                <div className="box">
                  <div className="vit-member-icon triangle"></div></div>

                <div>
                  <h4>American Academy of Sleep Medicine</h4>
                  <span>ID: C484583</span>
                  <p>
                    Enhanced expertise in neurology-sleep intersections, informing rare case publications.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">
                <div className="box">

                  <div className="vit-member-icon square"></div></div>

                <div>
                  <h4>American Society of Clinical Oncology</h4>
                  <span>ID: 714954</span>
                  <p>
                    Drives oncology research, enabling systematic reviews on cancer therapies.
                  </p>
                </div>
              </div>


              <div className="vit-member-card">                                <div className="box">

                <div className="vit-member-icon circle"></div></div>

                <div>
                  <h4>American College of Physicians</h4>
                  <span>ID: 03815778</span>
                  <p>
                    Strengthens internal medicine scholarship, supporting 100+ peer reviews.
                  </p>
                </div>
              </div>


              <div className="vit-member-card"> <div className="box">
                <div className="vit-member-icon diamond"></div></div>

                <div>
                  <h4>European Society for Medical Oncology</h4>
                  <span>ID: 450783</span>
                  <p>
                    Facilitates ESMO-aligned studies in tumor pharmacovigilance.
                  </p>
                </div>
              </div>


              <div className="vit-member-card"> <div className="box">
                <div className="vit-member-icon diamond"></div></div>

                <div>
                  <h4>Indian Association of Biomedical Scientists</h4>
                  <span>(Dr. Yellapragada Subbarao Award Recipient)</span>
                  <p>
                    Boosts biomedical innovation, earning awards for outstanding papers.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


      </div>
    </>
  );
}
