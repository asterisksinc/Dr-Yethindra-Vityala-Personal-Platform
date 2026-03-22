"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./vy-navbar.css";

export default function VyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => setIsMobile(window.innerWidth < 768);
  checkMobile();
  window.addEventListener("resize", checkMobile);
  return () => window.removeEventListener("resize", checkMobile);
}, []);
  return (
    <div className="vy-navbar-wrapper">
      <nav className="vy-navbar-container">
        <div className="vy-navbar-logo">DR. YETHINDRA VITYALA</div>

        <div
          className="vy-navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </div>

      <ul className={`vy-navbar-menu ${menuOpen ? "active" : ""}`}>
  <li className={pathname === '/' ? 'active-link' : ''}><Link href="/">Home</Link></li>
  <li className={pathname === '/about' ? 'active-link' : ''}><Link href="/about">About</Link></li>
  <li className={pathname === '/research' ? 'active-link' : ''}><Link href="/research">Research & Publications</Link></li>
  <li className={pathname === '/awards' ? 'active-link' : ''}><Link href="/awards">Awards & Records</Link></li>
  <li className={pathname === '/media' ? 'active-link' : ''}><Link href="/media">Speaking & Media</Link></li>

  {/* ✅ Show Contact ONLY in mobile menu */}
  {isMobile && (
    <li className={pathname === '/contact' ? 'active-link' : ''}>
      <Link href="/contact">Contact</Link>
    </li>
  )}
</ul>

        {/* ✅ Show button ONLY on desktop */}
{!isMobile && (
  <div className="vy-navbar-action">
    <button
      className={pathname === '/contact' ? 'active-link' : 'hi'}
      onClick={() => window.location.href = '/contact'}
    >
      Contact
    </button>
  </div>
)}
      </nav>
    </div>
  );
}