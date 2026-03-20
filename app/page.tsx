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
      <div className="flex-1 w-full p-2 lg:p-3 flex flex-col gap-2 font-sans h-full max-h-[calc(100vh-64px)] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 auto-rows-fr h-full min-h-0">
          {/* === TOP LEFT: DESIGN SKILL MATRIX === */}
          <div className="col-span-1 lg:col-span-2 bg-[#18181A] rounded-[16px] relative overflow-hidden text-white flex flex-col h-full min-h-0">
            <SkillMatrix />
          </div>

          {/* === TOP RIGHT: TIME SPENT === */}
          <TimeSpentWidget />

          {/* === BOTTOM LEFT: CURRENT WORK === */}
          <div className="col-span-1 bg-white rounded-[16px] p-4 lg:p-5 shadow-sm flex flex-col justify-start">
            <h2 className="text-[20px] lg:text-[24px] font-light leading-[1.2] tracking-tight text-[#111]">
              Here&apos;s what I&apos;m working on <br /> Right Now
            </h2>
          </div>

          {/* === BOTTOM MIDDLE === */}
          <div className="col-span-1 flex flex-col gap-2">
            {/* Metrics */}
            <div className="bg-white rounded-[16px] p-3 shadow-sm flex-1 flex flex-col">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-[12px]">Research Metrics</h3>
                <span className="text-[9px] text-gray-400">Last updated: Oct 2023</span>
              </div>

              <div className="flex w-full justify-between mt-auto">
                <MetricColumn title="H-Index" value="7" color="pink" />
                <MetricColumn title="Citations" value="240" color="orange" />
                <MetricColumn title="Publications" value="102" color="green" />
              </div>
            </div>

            {/* Achievements */}
            <div className="flex-[0.8] flex flex-col gap-1.5 justify-end">
              <h3 className="font-medium text-[12px] ml-2 mb-0.5">Achievements and Goals</h3>

              <div className="bg-white rounded-[12px] p-2 flex gap-2.5 items-center shadow-sm">
                <div className="w-7 h-7 rounded-md bg-[#E8F8F0] text-[#00e676] flex items-center justify-center text-[10px]">
                  ✨
                </div>
                <div>
                  <h4 className="font-medium text-[11px]">Lorem ipsum dolor</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>

              <div className="bg-white rounded-[12px] p-2 flex gap-2.5 items-center shadow-sm">
                <div className="w-7 h-7 rounded-md bg-[#E8F8F0] text-[#00e676] flex items-center justify-center text-[10px]">
                  ✨
                </div>
                <div>
                  <h4 className="font-medium text-[11px]">Lorem ipsum dolor</h4>
                  <p className="text-[9px] text-gray-500 mt-0.5 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                </div>
              </div>
            </div>
          </div>

          {/* === BOTTOM RIGHT: MAP === */}
          <div className="col-span-1 bg-[#18181A] rounded-[16px] p-4 relative overflow-hidden text-white flex flex-col">
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
  const dots = Array.from({ length: 20 });
  const colorMap = {
    pink: 'bg-[#ff40ac]',
    orange: 'bg-[#ff9500]',
    green: 'bg-[#00e676]'
  }

  return (
    <div className="flex flex-col w-[30%]">
      <span className="text-[9px] text-gray-500 mb-0.5">{title}</span>
      <span className="text-xl font-light text-[#111] mb-2">{value}</span>

      {/* Dot Matrix simulation */}
      <div className="flex gap-[3px] justify-center items-end mt-auto opacity-80 h-10">
        {[1, 3, 2, 4, 3, 5, 2].map((h, i) => (
          <div key={i} className="flex flex-col gap-px justify-end">
            {Array.from({ length: h }).map((_, j) => (
              <div key={j} className={`w-[2.5px] h-[2.5px] rounded-full ${colorMap[color]}`} />
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
