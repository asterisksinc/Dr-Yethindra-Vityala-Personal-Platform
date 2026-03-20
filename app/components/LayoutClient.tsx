"use client";

import { usePathname } from "next/navigation";
import VyNavbar from "./VyNavbar";
import SmoothScroller from "./SmoothScroller";
import CursorTrail from "./CursorTrail";

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const shouldHideNavbar =
    pathname === "/login" || pathname.startsWith("/dashboard");

  return (
    <SmoothScroller>
      {/* {!shouldHideNavbar && <CursorTrail />} */}
      {!shouldHideNavbar && <VyNavbar />}
      {children}
    </SmoothScroller>
  );
}