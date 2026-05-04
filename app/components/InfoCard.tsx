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
  href?: string;
  className?: string; // Additional classs for the card
  compact?: boolean;
  dense?: boolean;
}

export default function InfoCard({ title, icon, description, pills, pillStyle = 'white', href, className = '', compact = false, dense = false }: InfoCardProps) {
  return (
    <div className={`group relative bg-white rounded-[16px] shadow-sm flex flex-col border border-black/5 hover:shadow-md transition-shadow h-full ${compact ? "p-3 sm:p-3.5 lg:p-4" : "p-4 sm:p-5 lg:p-6"} ${href ? "cursor-pointer" : ""} ${className}`}>
      {href ? (
        <Link
          href={href}
          aria-label={`Open ${title}`}
          className="absolute inset-0 z-10 rounded-[16px]"
        />
      ) : null}
      <div className="relative z-0">
        <div className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-xl bg-gray-50 flex items-center justify-center border border-gray-100 ${compact ? "mb-2 sm:mb-2.5" : "mb-3 sm:mb-4"}`}>
          {icon}
        </div>
        {description ? (
          <p className={`text-gray-500 leading-relaxed ${dense ? "text-[10px] sm:text-[11px]" : compact ? "text-[11px] sm:text-[12px]" : "text-[12px] sm:text-[13px]"}`}>
            {description}
          </p>
        ) : null}
        <div className={`relative z-20 flex flex-wrap ${compact ? "mt-1.5 sm:mt-2 gap-1 sm:gap-1.5" : "mt-2 sm:mt-3 gap-1.5 sm:gap-2"}`}>
          {pills.map((pill, pIdx) => (
            <Pill key={pIdx} href={pill.href} style={pillStyle} dense={dense}>
              {pill.label}
            </Pill>
          ))}
        </div>
        <h2 className={`text-[#111] mt-auto text-right font-light tracking-tight ${dense ? "text-sm sm:text-base pt-3 sm:pt-4" : compact ? "text-base sm:text-lg pt-3 sm:pt-4" : "text-xl sm:text-2xl pt-4 sm:pt-6"}`}>{title}</h2>
      </div>
    </div>
  );
}

const Pill = ({ children, href, style, dense = false }: { children: React.ReactNode, href?: string, style: 'white' | 'gray', dense?: boolean }) => {
  const baseStyle = `px-2 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors ${dense ? "text-[10px] sm:text-[11px]" : "text-[11px] sm:text-[12px]"}`;

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
    const isInternalLink = href.startsWith("/");
    return (
      <Link
        href={href}
        target={isInternalLink || href.startsWith('mailto') ? '_self' : '_blank'}
        rel={isInternalLink || href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
        className="relative z-20 inline-flex"
      >
        {content}
      </Link>
    );
  }

  return content;
};
