"use client";

type SkillPoint = {
  label: string;
  value: number;
  angle: number;
  color: string;
};

const SKILL_POINTS: SkillPoint[] = [
  { label: "Scientific Writing", value: 88, angle: -90, color: "#d16cff" },
  { label: "Academic Mentorship", value: 72, angle: -18, color: "#d2f100" },
  { label: "Drug Safety & Efficacy", value: 80, angle: 54, color: "#19d65b" },
  { label: "Statistical Analysis", value: 86, angle: 126, color: "#3f7cff" },
  { label: "Rare Disease Evaluation", value: 78, angle: 198, color: "#f3a35c" }
];

const RINGS = [20, 40, 60, 80, 100];

function polarToCartesian(cx: number, cy: number, radius: number, angleDeg: number) {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad)
  };
}

export default function SkillRadar() {
  const cx = 50;
  const cy = 50;
  const outerRadius = 36;

  const points = SKILL_POINTS.map((point) => {
    const radius = (point.value / 100) * outerRadius;
    return polarToCartesian(cx, cy, radius, point.angle);
  });

  const pointPath = points.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <div className="vit-radar-wrapper">
      <svg viewBox="0 0 100 100" className="vit-radar-svg" aria-label="Skill radar chart">
        <defs>
          <radialGradient id="radar-glow" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.10)" />
            <stop offset="70%" stopColor="rgba(255,255,255,0.03)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.00)" />
          </radialGradient>

          <linearGradient id="radar-fill" x1="20%" y1="10%" x2="80%" y2="90%">
            <stop offset="0%" stopColor="#d16cff" stopOpacity="0.22" />
            <stop offset="25%" stopColor="#d2f100" stopOpacity="0.18" />
            <stop offset="50%" stopColor="#19d65b" stopOpacity="0.18" />
            <stop offset="75%" stopColor="#3f7cff" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#f3a35c" stopOpacity="0.18" />
          </linearGradient>
        </defs>

        <circle cx={cx} cy={cy} r={39} fill="url(#radar-glow)" />

        {RINGS.map((ring) => (
          <circle
            key={ring}
            cx={cx}
            cy={cy}
            r={(ring / 100) * outerRadius}
            fill="none"
            stroke="rgba(255,255,255,0.10)"
            strokeWidth="0.7"
          />
        ))}

        {SKILL_POINTS.map((point) => {
          const end = polarToCartesian(cx, cy, outerRadius, point.angle);
          return (
            <line
              key={point.label}
              x1={cx}
              y1={cy}
              x2={end.x}
              y2={end.y}
              stroke="rgba(255,255,255,0.16)"
              strokeWidth="0.7"
            />
          );
        })}

        <polygon
          points={pointPath}
          fill="url(#radar-fill)"
          stroke="#d16cff"
          strokeWidth="1.1"
          strokeLinejoin="round"
        />

        {points.map((point, index) => (
          <g key={SKILL_POINTS[index].label}>
            <circle
              cx={point.x}
              cy={point.y}
              r="1.8"
              fill={SKILL_POINTS[index].color}
              opacity="0.95"
            />
            <circle
              cx={point.x}
              cy={point.y}
              r="3.5"
              fill="none"
              stroke={SKILL_POINTS[index].color}
              strokeOpacity="0.35"
              strokeWidth="0.8"
            />
          </g>
        ))}

        <text x="50" y="52" textAnchor="middle" fill="rgba(255,255,255,0.72)" fontSize="4.5" fontFamily="inherit">
          0
        </text>
      </svg>

      <div className="vit-radar-label vit-radar-top">Scientific Writing</div>
      <div className="vit-radar-label vit-radar-right">Academic Mentorship</div>
      <div className="vit-radar-label vit-radar-bottom-right">Drug Safety & Efficacy</div>
      <div className="vit-radar-label vit-radar-bottom-left">Statistical Analysis</div>
      <div className="vit-radar-label vit-radar-left">Rare Disease Evaluation</div>
    </div>
  );
}
