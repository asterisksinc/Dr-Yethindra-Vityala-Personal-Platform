"use client";

import { useState } from "react";
import Link from "next/link";
import "./vy-navbar.css";

export default function VyNavbar() {

const [menuOpen,setMenuOpen] = useState(false);

return (
<div className="vy-navbar-wrapper">

<nav className="vy-navbar-container">

<div className="vy-navbar-logo">
DR. YETHINDRA VITYALA
</div>

<div
className="vy-navbar-toggle"
onClick={()=>setMenuOpen(!menuOpen)}
>
Menu
</div>

<ul className={`vy-navbar-menu ${menuOpen ? "active" : ""}`}>

<li><Link href="#">Home</Link></li>
<li><Link href="/about">About</Link></li>
<li><Link href="#">Research & Publications</Link></li>
<li><Link href="#">Awards & Records</Link></li>
<li><Link href="#">Speaking & Media</Link></li>

</ul>

<div className="vy-navbar-action">
<button className="vy-navbar-circle"></button>
</div>

</nav>

</div>
);
}