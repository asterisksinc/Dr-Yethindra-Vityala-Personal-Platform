"use client";
import { useEffect, useState } from "react";
import "./about.css";
import Image from "next/image";
import SkillRadar from "../components/SkillRadar";
import HomeJourneyMap from "../components/HomeJourneyMap";
import InfoCard from "../components/InfoCard";
import ExperienceList from "../components/ExperienceList";
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
      <div className="vit-about-wrapper w-full p-2 lg:p-3 pb-10 lg:pb-3 flex flex-col gap-2">

        {/* HERO */}
        <section className="vit-about-hero rounded-[16px] overflow-hidden">
          <div className="vit-hero-overlay w-full max-w-[900px] px-2 md:px-4">
            <h1 className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.2] font-medium tracking-tight mb-3 md:mb-5">
              Physician. Researcher. Global Innovator.
            </h1>
            <p className="text-[11.5px] sm:text-[15px] md:text-[16px] lg:text-[18px] text-white/80 font-medium leading-relaxed mx-auto max-w-[750px]">
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
        <ExperienceList 
          heading="Academic Excellence"
          description="Distinguished across global institutions, achieving top honors and foundational expertise."
          items={academicsData.map(item => ({
            id: item.id,
            title: item.degree,
            subtitle: item.institution,
            location: item.location,
            year: item.year,
            desc: item.desc
          }))}
        />


        {/* BIO */}
        <section className="vit-about-bio">
          <div className="vit-bio-card px-4 md:px-0">
            <p>
              &ldquo;Integrating clinical practice with research to make healthcare inclusive and evidence-based empowering global scholars, advancing innovation, and fostering a research ecosystem for tomorrow's leaders.&rdquo;
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <ExperienceList 
          heading="Professional Impact"
          description="Leadership roles yielding 100+ publications, 1,000+ students mentored, and institutional advancements."
          items={workData.map(item => ({
            id: item.id,
            title: item.title,
            subtitle: item.company,
            location: item.location,
            year: item.year,
            desc: item.desc
          }))}
        />

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
