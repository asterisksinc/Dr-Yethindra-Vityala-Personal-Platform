// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import "./vy-navbar.css";

// export default function VyNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const pathname = usePathname();

//   return (
//     <div className="vy-navbar-wrapper">
//       <nav className="vy-navbar-container">
//         <div className="vy-navbar-logo">DR. YETHINDRA VITYALA</div>

//         <ul className={`vy-navbar-menu ${menuOpen ? "active" : ""}`}>
//           <li onClick={() => setMenuOpen(false)} className={pathname === '/' ? 'active-link' : ''}><Link href="/">Home</Link></li>
//           <li onClick={() => setMenuOpen(false)} className={pathname === '/about' ? 'active-link' : ''}><Link href="/about">About</Link></li>
//           <li onClick={() => setMenuOpen(false)} className={pathname === '/research' ? 'active-link' : ''}><Link href="/research">Research & Publications</Link></li>
//           <li onClick={() => setMenuOpen(false)} className={pathname === '/awards' ? 'active-link' : ''}><Link href="/awards">Awards & Records</Link></li>
//           <li onClick={() => setMenuOpen(false)} className={pathname === '/media' ? 'active-link' : ''}><Link href="/media">Speaking & Media</Link></li>
//         </ul>

//         <div className="vy-navbar-action gap-3">
//           <button
//             className={pathname === '/contact' ? 'active-link cursor-pointer' : 'hi cursor-pointer'}
//             onClick={() => window.location.href = '/contact'}
//           >
//             Contact
//           </button>

//           <div
//             className="vy-navbar-toggle"
//             onClick={() => setMenuOpen(!menuOpen)}
//           >
//             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//               <line x1="3" y1="12" x2="21" y2="12"></line>
//               <line x1="3" y1="6" x2="21" y2="6"></line>
//               {/* <line x1="3" y1="18" x2="21" y2="18"></line> */}
//             </svg>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./vy-navbar.css";

// Simple SVG icons inline (no extra dependency)
const icons = {
  home: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  ),
  about: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  ),
  research: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 8h10M7 12h10M7 16h6" />
    </svg>
  ),
  awards: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 15.5L7 22l5-3 5 3-1.5-6.5" />
    </svg>
  ),
  media: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 3H8M12 3v4" />
    </svg>
  ),
  contact: (
    <svg className="vy-mobile-nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
    </svg>
  ),
};

export default function VyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const close = () => setMenuOpen(false);

  const navItems = [
    { href: "/", label: "Home", icon: icons.home },
    { href: "/about", label: "About", icon: icons.about },
    { href: "/research", label: "Research & Publications", icon: icons.research },
    { href: "/awards", label: "Awards & Records", icon: icons.awards },
    { href: "/media", label: "Speaking & Media", icon: icons.media },
    { href: "/contact", label: "Contact", icon: icons.contact },
  ];

  return (
    <>
      {/* ── Desktop + Mobile top bar ── */}
      <div className="vy-navbar-wrapper">
        <nav className="vy-navbar-container">
          <div className={  ` ${menuOpen ? "invisible" : "vy-navbar-logo"} `} >DR. YETHINDRA VITYALA</div>

          {/* Desktop pill menu */}
          <ul className="vy-navbar-menu">
            <li className={pathname === "/" ? "active-link" : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={pathname === "/about" ? "active-link" : ""}>
              <Link href="/about">About</Link>
            </li>
            <li className={pathname === "/research" ? "active-link" : ""}>
              <Link href="/research">Research & Publications</Link>
            </li>
            <li className={pathname === "/awards" ? "active-link" : ""}>
              <Link href="/awards">Awards & Records</Link>
            </li>
            <li className={pathname === "/media" ? "active-link" : ""}>
              <Link href="/media">Speaking & Media</Link>
            </li>
          </ul>

          <div className="vy-navbar-action gap-3">
            {/* Desktop contact button */}
            <button
              className={
                pathname === "/contact"
                  ? "active-link cursor-pointer"
                  : "hi cursor-pointer"
              }
              onClick={() => (window.location.href = "/contact")}
            >
              Contact
            </button>

            {/* Hamburger toggle (mobile only) */}
            <div
              className={`vy-navbar-toggle ${menuOpen ? 'active' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="9" x2="21" y2="9" />
                <line x1="3" y1="15" x2="21" y2="15" />
              </svg>
            </div>
          </div>
        </nav>
      </div>

      {/* ── Mobile overlay backdrop ── */}
      <div
        className={`vy-mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={close}
      />

      {/* ── Mobile slide-down panel ── */}
      <div className={`vy-mobile-panel ${menuOpen ? "active" : ""}`}>
        {/* Panel header */}
        <div className="vy-mobile-panel-header">
          <span className="vy-mobile-panel-logo">DR. YETHINDRA VITYALA</span>
          <button className="vy-mobile-close-btn" onClick={close} aria-label="Close menu">
            <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <ul className="vy-mobile-nav-list">
          {navItems.map(({ href, label, icon }) => (
            <li
              key={href}
              className={pathname === href ? "active-link" : ""}
              onClick={close}
            >
              <Link href={href}>
                {icon}
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}