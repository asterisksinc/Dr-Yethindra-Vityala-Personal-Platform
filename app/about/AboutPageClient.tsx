"use client";
import { useEffect, useState } from "react";
import "./about.css";
import Image from "next/image";
import SkillRadar from "../components/SkillRadar";
import HomeJourneyMap from "../components/HomeJourneyMap";
import InfoCard from "../components/InfoCard";
import ExperienceList from "../components/ExperienceList";
import { User } from "lucide-react";
type InfoItem = {
  description: string;
  tags: string[];
  footer: string;
};

type AcademicItem = {
  education: string;
  university: string;
  location: string;
  year: string;
  description: string;
};

type WorkItem = {
  designation: string;
  company: string;
  location: string;
  year: string;
  description: string;
};

type MembershipItem = {
  membershipTitle: string;
  id: string;
  description: string;
};

type AboutCmsData = {
  heroComponent: {
    heading: string;
    subHeading: string;
  };
  informationComponent: InfoItem[];
  academicsDescription: string;
  academics: AcademicItem[];
  section100vh: {
    description: string;
  };
  workExperience: {
    description: string;
    items: WorkItem[];
  };
  memberships: {
    description: string;
    items: MembershipItem[];
  };
};
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
  const shapes = ["triangle", "square", "circle", "diamond"];

export default function AboutPage() {
  const [cursorX, setCursorX] = useState(0);
  const [screenWidth, setScreenWidth] = useState(0);
  const [aboutData, setAboutData] = useState<AboutCmsData>({
    heroComponent: {
      heading: "",
      subHeading: "",
    },
    informationComponent: [],
    academicsDescription: "",
    academics: [],
    section100vh: {
      description: "",
    },
    workExperience: {
      description: "",
      items: [],
    },
    memberships: {
      description: "",
      items: [],
    },
  });
  useEffect(() => {
    const loadAboutData = async () => {
      try {
        const res = await fetch("/api/cms/about");
        const result = await res.json();

        if (!res.ok || !result?.data?.content) return;

        setAboutData(result.data.content);
      } catch (error) {
        console.error("Failed to load about data", error);
      }
    };

    loadAboutData();
  }, []);
  const handleMove = (e: any) => {
    setCursorX(e.clientX);
  };
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <>
      <div className="vit-about-wrapper w-full p-2 md:p-2.5 lg:p-3 pb-10 md:pb-6 lg:pb-3 flex flex-col gap-2">

        {/* HERO */}
        <section className="vit-about-hero rounded-[16px] overflow-hidden">
          <div className="vit-hero-overlay w-full max-w-[1000px] px-3 sm:px-4 md:px-4">
            <h1 className="text-[18px] sm:text-[24px] md:text-[32px] lg:text-[40px] xl:text-[46px] leading-[1.2] font-normal tracking-tight mb-2 sm:mb-3 md:mb-5">
              {aboutData.heroComponent.heading}            </h1>
            <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-white/80 font-300 leading-relaxed mx-auto max-w-[750px]">
              {aboutData.heroComponent.subHeading}            </p>
          </div>
        </section>


        {/* INFO CARDS */}
        <section className="vit-info-cards">

          <div className="vit-card1 vit-skill-card">
            <p className="h12">Professional skills</p>
            <SkillRadar />
          </div>

          {aboutData.informationComponent.map((card, idx) => (
            <InfoCard
              key={idx}
              title={card.footer}
              icon={<User size={18} strokeWidth={2} className="text-[#666]" />}
              description={card.description}
              pills={card.tags.map((tag) => ({ label: tag }))}
              pillStyle="gray"
             className="p-3! sm:p-3.5! lg:p-4!"
            />
          ))}

        </section>


        {/* ACADEMICS */}
        <ExperienceList
          heading="Academic Excellence"
          description={aboutData.academicsDescription}
          items={aboutData.academics.map((item, index) => ({
            id: index + 1,
            title: item.education,
            subtitle: item.university,
            location: item.location,
            year: item.year,
            desc: item.description,
          }))}
        />

        {/* BIO */}
        <section className="vit-about-bio">
          <div className="vit-bio-card px-4 mt-6 md:px-0">
            <p>
              {aboutData.section100vh.description}
              {/* &ldquo;Integrating clinical practice with research to make healthcare inclusive and evidence-based empowering global scholars, advancing innovation, and fostering a research ecosystem for tomorrow's leaders.&rdquo; */}
            </p>
          </div>
        </section>

        {/* EXPERIENCE */}
        <ExperienceList
          heading="Professional Impact"
          description={aboutData.workExperience.description}
          items={aboutData.workExperience.items.map((item, index) => ({
            id: index + 1,
            title: item.designation,
            subtitle: item.company,
            location: item.location,
            year: item.year,
            desc: item.description,
          }))}
        />

        <section className="vit-academic-section mt-4 sm:mt-5 lg:mt-6" style={{ marginBottom: '0px', paddingBottom: '0px' }}>

          <h2>Global Networks</h2>
          <p className="vit-academic-desc">
            Active in elite societies advancing clinical oncology, internal medicine, and sleep research.
          </p>

          <div className="vit-membership-grid items-stretch">

            {/* MAP — exact height match with cards */}
            <div className="vit-map-container h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]" style={{ position: 'relative', overflow: 'hidden' }}>
              <HomeJourneyMap />
            </div>

            {/* MEMBERSHIP LIST — exact same height as map, scrolls if content overflows */}
            <div
              data-lenis-prevent="true"
              className="flex flex-col gap-2 overflow-y-auto custom-scrollbar h-[40vh] sm:h-[45vh] md:h-[50vh] lg:h-[60vh]"
            >
              {aboutData.memberships.items.map((item, idx) => (
                <ListItem
                  key={idx}
                  index={idx}
                  title={item.membershipTitle}
                  subtitle={item.id}
                  quote={item.description}
                />
              ))}
            </div>

          </div>

        </section>


      </div>
    </>
  );
}
const ListItem = ({index, title, subtitle, quote }: { index: number, title: string, subtitle: string, quote: string }) => (
  <div className="bg-[#FFFFFF] rounded-[16px] p-2.5 sm:p-3 lg:p-4 shadow-sm flex gap-3 sm:gap-4 lg:gap-5 items-center border border-black/5 hover:shadow-md transition-shadow">
    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                    <div className={`vit-member-icon ${shapes[index % shapes.length]}`}></div>
    </div>
    <div className="flex flex-col flex-1">
      <h4 className="font-semibold text-[#111] text-[12px] sm:text-[13px] lg:text-[14px] leading-tight mb-0.5 tracking-wide">{title}</h4>
      <span className="text-[10px] sm:text-[11px] text-gray-400 mb-1 sm:mb-2">{subtitle}</span>
      <p className="text-[11px] sm:text-[12px] text-gray-600 leading-[1.6]">{quote}</p>
    </div>
  </div>
);