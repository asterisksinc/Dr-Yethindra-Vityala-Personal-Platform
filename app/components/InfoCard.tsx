import React from 'react';
import Link from 'next/link';

export interface PillData {
  label: string;
  href?: string;
}

export interface InfoCardProps {
  title: string;
  icon: React.ReactNode;
  description: string;
  pills: PillData[];
  pillStyle?: 'white' | 'gray';
  className?: string; // Additional classs for the card
  compact?: boolean;
}

export default function InfoCard({ title, icon, description, pills, pillStyle = 'white', className = '', compact = false }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-[16px] shadow-sm flex flex-col border border-black/5 hover:shadow-md transition-shadow h-full ${compact ? "p-3 sm:p-3.5 lg:p-4" : "p-4 sm:p-5 lg:p-6"} ${className}`}>
      <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 ${compact ? "mb-2 sm:mb-2.5" : "mb-3 sm:mb-4"}`}>
        {icon}
      </div>
      {description ? (
        <p className={`text-gray-500 leading-relaxed ${compact ? "text-[11px] sm:text-[12px]" : "text-[12px] sm:text-[13px]"}`}>
          {description}
        </p>
      ) : null}
      <div className={`flex flex-wrap ${compact ? "mt-1.5 sm:mt-2 gap-1 sm:gap-1.5" : "mt-2 sm:mt-3 gap-1.5 sm:gap-2"}`}>
        {pills.map((pill, pIdx) => (
          <Pill key={pIdx} href={pill.href} style={pillStyle}>
            {pill.label}
          </Pill>
        ))}
      </div>
      <h2 className={`text-[#111] mt-auto text-right font-light tracking-tight ${compact ? "text-lg sm:text-xl pt-3 sm:pt-4" : "text-xl sm:text-2xl pt-4 sm:pt-6"}`}>{title}</h2>
    </div>
  );
}

const Pill = ({ children, href, style }: { children: React.ReactNode, href?: string, style: 'white' | 'gray' }) => {
  const baseStyle = "px-2 sm:px-3 py-1 rounded-full text-[11px] sm:text-[12px] whitespace-nowrap transition-colors";

  const themeStyle = style === 'white'
    ? "bg-white border border-gray-200 text-gray-500 shadow-sm"
    : "bg-[#F4F4F5] text-gray-600 border border-transparent";

  const hoverStyle = href
    ? (style === 'white' ? "hover:bg-gray-50 hover:text-gray-700" : "hover:bg-[#EAEBEB]")
    : "";

  const content = (
    <span className={`${baseStyle} ${themeStyle} ${hoverStyle}`}>
      {children}
    </span>
  );

  if (href) {
    return (
      <Link href={href} target={href.startsWith('mailto') ? '_self' : '_blank'} rel="noopener noreferrer" className="inline-flex">
        {content}
      </Link>
    );
  }

  return content;
};
