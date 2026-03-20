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
  className?: string; // Additional classes for the card
}

export default function InfoCard({ title, icon, description, pills, pillStyle = 'white', className = '' }: InfoCardProps) {
  return (
    <div className={`bg-white rounded-[16px] p-6 shadow-sm flex flex-col justify-between border border-black/5 hover:shadow-md transition-shadow h-full ${className}`}>
      <div>
        <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center mb-6 border border-gray-100">
          {icon}
        </div>
        <p className="text-[13px] text-gray-500 leading-relaxed min-h-[60px]">
          {description}
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {pills.map((pill, pIdx) => (
            <Pill key={pIdx} href={pill.href} style={pillStyle}>
              {pill.label}
            </Pill>
          ))}
        </div>
      </div>
      <h2 className="text-2xl text-[#111] mt-12 text-right font-light tracking-tight">{title}</h2>
    </div>
  );
}

const Pill = ({ children, href, style }: { children: React.ReactNode, href?: string, style: 'white' | 'gray' }) => {
  const baseStyle = "px-3 py-1 rounded-full text-[12px] whitespace-nowrap transition-colors";
  
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
