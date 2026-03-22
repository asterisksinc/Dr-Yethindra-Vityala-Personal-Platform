"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./vy-navbar.css";

export default function VyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="vy-navbar-wrapper">
      <nav className="vy-navbar-container">
        <div className="vy-navbar-logo">DR. YETHINDRA VITYALA</div>

        <ul className={`vy-navbar-menu ${menuOpen ? "active" : ""}`}>
          <li onClick={() => setMenuOpen(false)} className={pathname === '/' ? 'active-link' : ''}><Link href="/">Home</Link></li>
          <li onClick={() => setMenuOpen(false)} className={pathname === '/about' ? 'active-link' : ''}><Link href="/about">About</Link></li>
          <li onClick={() => setMenuOpen(false)} className={pathname === '/research' ? 'active-link' : ''}><Link href="/research">Research & Publications</Link></li>
          <li onClick={() => setMenuOpen(false)} className={pathname === '/awards' ? 'active-link' : ''}><Link href="/awards">Awards & Records</Link></li>
          <li onClick={() => setMenuOpen(false)} className={pathname === '/media' ? 'active-link' : ''}><Link href="/media">Speaking & Media</Link></li>
        </ul>

        <div className="vy-navbar-action gap-3">
          <button
            className={pathname === '/contact' ? 'active-link cursor-pointer' : 'hi cursor-pointer'}
            onClick={() => window.location.href = '/contact'}
          >
            Contact
          </button>

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
        </div>
      </nav>
    </div>
  );
}