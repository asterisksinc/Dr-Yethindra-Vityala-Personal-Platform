import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutClient from "./components/LayoutClient";
import type { Metadata } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dryethindravityala.com"),
  title: {
    default: "Dr. Yethindra Vityala | Youngest Scientist in Medicine",
    template: "%s | Dr. Yethindra Vityala",
  },
  description:
    "Dr. Yethindra Vityala's portfolio platform highlighting 100+ peer-reviewed papers, 12 world records, global awards, speaking engagements, and medical research leadership.",
  keywords: [
    "Dr Yethindra Vityala",
    "youngest scientist medicine",
    "medical researcher India",
    "oncology publications",
    "peer-reviewed papers",
    "world records",
    "medical research",
  ],
  openGraph: {
    title: "Dr. Yethindra Vityala | Youngest Scientist in Medicine",
    description:
      "Explore Dr. Yethindra Vityala's research portfolio, awards, global media coverage, and medical innovation work.",
    url: "/",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Yethindra Vityala | Youngest Scientist in Medicine",
    description:
      "Medical researcher, physician, and global honoree with 100+ publications and 12 world records.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
