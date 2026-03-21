import HomeJourneyMap from './components/HomeJourneyMap';
import TimeSpentWidget from './components/TimeSpentWidget';
import SkillMatrix from './components/SkillMatrix';
import Head from 'next/head';

export default function Home() {
  return (
    <><Head>
      <Head>
        {/* Primary SEO */}
        <title>Naegleria Vaccine Design | Dr. Yethindra Vityala, 12‑Time Record Holder</title>
        <meta
          name="description"
          content="Pioneering in silico vaccine against the brain‑eating amoeba Naegleria fowleri. By Dr. Yethindra Vityala—world’s youngest scientist, 80+ publications, 12 Guinness records."
        />
        <meta name="keywords" content="Naegleria fowleri vaccine, brain-eating amoeba, in silico vaccine design, primary amebic meningoencephalitis, Dr Yethindra Vityala" />
        <meta name="author" content="Dr. Yethindra Vityala" />
        <link rel="canonical" href="https://yourdomain.com/" />

        {/* Open Graph / Social */}
        <meta property="og:title" content="Naegleria Vaccine Design | Dr. Yethindra Vityala" />
        <meta
          property="og:description"
          content="Advancing rapid‑access, computationally‑designed vaccines against fatal Naegleria fowleri infections. 80+ PMC/Wiley publications, 12 Guinness world records."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com/" />
        <meta property="og:image" content="https://yourdomain.com/og-naegleria-vaccine.jpg" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naegleria Vaccine Design | Dr. Yethindra Vityala" />
        <meta
          name="twitter:description"
          content="Pioneering in silico vaccine against the brain‑eating amoeba Naegleria fowleri. 80+ publications, 12 Guinness records."
        />
        <meta name="twitter:image" content="https://yourdomain.com/og-naegleria-vaccine.jpg" />
      </Head> </Head>
      <div className="w-full p-2 lg:p-3 flex flex-col gap-2 font-sans pb-10 lg:pb-3 lg:h-full lg:max-h-[calc(100vh-64px)] lg:overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 auto-rows-auto lg:auto-rows-fr lg:h-full lg:min-h-0">
          {/* === TOP LEFT: DESIGN SKILL MATRIX === */}
          <div className="col-span-1 lg:col-span-2 bg-[#18181A] rounded-[16px] relative overflow-hidden text-white flex flex-col h-[450px] lg:h-full lg:min-h-0">
            <SkillMatrix />
          </div>

          {/* === TOP RIGHT: TIME SPENT === */}
          <TimeSpentWidget />

          {/* === BOTTOM LEFT: CURRENT WORK === */}
          <div className="col-span-1 bg-white rounded-[16px] shadow-sm flex flex-col justify-between overflow-hidden relative min-h-0">
            <div className="p-4 lg:p-5 flex-1">
              <h3 className="font-medium text-[12px] mb-2 text-gray-500">What I&apos;m working on right now</h3>
              <h2 className="text-[18px] lg:text-[22px] font-medium leading-[1.15] tracking-tight text-[#111] pr-2">
                Pioneering Naegleria Vaccine Design
              </h2>
            </div>

            <div className="relative px-4 lg:px-5 pb-4 lg:pb-5">
              {/* Bleeding faint horizontal line */}
              <div className="absolute top-0 left-0 right-0 border-t border-black/5" />

              {/* Perfectly centered floating pill on the line */}
              <div className="absolute top-0 left-4 lg:left-5 -translate-y-1/2 inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-black/10 rounded-full text-[9px] font-medium text-[#444] shadow-sm">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#ffedd5" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Brain-Eating Amoeba Defense
              </div>

              <p className="text-[11px] text-gray-500 leading-[1.6] mt-4 tracking-tight">
                Currently advancing in silico vaccine candidates against <span className="italic">Naegleria fowleri</span>, targeting rapid-access therapies for fatal infections via computational modeling and validation building on 80+ publications in infectious diseases. <span className="text-gray-400">[pmc.ncbi.nlm.nih]</span>
              </p>
            </div>
          </div>

          {/* === BOTTOM MIDDLE === */}
          <div className="col-span-1 flex flex-col gap-2 min-h-[320px] lg:min-h-0">
            {/* Metrics */}
            <div className="bg-[#FFFFFF] rounded-[16px] p-4 lg:p-5 shadow-sm flex-1 flex flex-col border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-[15px] lg:text-[17px] text-[#222]">Research Metrics</h3>
                <span className="text-[10px] text-gray-500 font-medium">Last updated: Oct 2023</span>
              </div>

              <div className="flex w-full mt-auto h-full items-stretch pt-2 pb-1">
                <MetricColumn title="H-Index" value="7" color="pink" />
                <div className="w-px bg-gray-200 mx-3 lg:mx-4 my-1 hidden sm:block" />
                <div className="w-px bg-gray-200 mx-2 my-1 sm:hidden block" />
                <MetricColumn title="Citations" value="240" color="orange" />
                <div className="w-px bg-gray-200 mx-3 lg:mx-4 my-1 hidden sm:block" />
                <div className="w-px bg-gray-200 mx-2 my-1 sm:hidden block" />
                <MetricColumn title="Publications" value="102" color="green" />
              </div>
            </div>
          </div>

          {/* === BOTTOM RIGHT: MAP === */}
          <div className="col-span-1 bg-[#18181A] rounded-[16px] p-4 relative overflow-hidden text-white flex flex-col min-h-[300px] lg:min-h-0 lg:h-full">
            <div className="flex items-center gap-1.5 text-[#A0A0A5] font-medium text-[10px] mb-2 z-10">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="2" width="18" height="20" rx="2" ry="2"></rect>
                <path d="M9 14h6"></path><path d="M9 10h6"></path><path d="M9 18h6"></path>
              </svg>
              MY EDUCATION
            </div>

            {/* Replace this div with actual map or SVG */}
            <div className="absolute inset-0 top-10 opacity-80 pointer-events-auto overflow-hidden">
              <HomeJourneyMap />
            </div>
          </div>

        </div>
      </div></>
  );
}

// Sub-components
const MetricColumn = ({ title, value, color }: { title: string, value: string, color: 'pink' | 'orange' | 'green' }) => {
  const colorMap = {
    pink: 'bg-[#FF72E0]',
    orange: 'bg-[#FFA94D]',
    green: 'bg-[#00D084]'
  }

  // Precise dot array sequences mapped from the layout
  const heights = [2, 3, 1, 1, 2, 1, 2, 1];

  return (
    <div className="flex flex-col flex-1 pl-1">
      <span className="text-[12px] text-gray-500 mb-1">{title}</span>
      <span className="text-[20px] lg:text-[28px] tracking-tight text-[#111] leading-none mb-6">{value}</span>

      {/* Dot Matrix simulation */}
      <div className="flex justify-between items-end mt-auto h-8 w-full pr-2 opacity-90">
        {heights.map((h, i) => (
          <div key={i} className="flex flex-col gap-[3.5px] justify-end">
            {Array.from({ length: h }).map((_, j) => (
              <div key={j} className={`w-[3.5px] h-[3.5px] rounded-full ${colorMap[color]}`} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

const MapPoint = ({ top, left, label, active = false }: { top: string, left: string, label: string, active?: boolean }) => (
  <div className="absolute" style={{ top, left }}>
    <div className="relative group">
      <div className={`w-2 h-2 rounded-full absolute -ml-1 -mt-1 ${active ? 'bg-[#ff40ac]' : 'bg-[#e5e7eb] opacity-80'}`} />
      <div className="absolute left-4 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/10 backdrop-blur-md px-2 py-1 rounded text-[8px] text-white border border-white/20 z-20">
        {label}
      </div>
    </div>
  </div>
);
