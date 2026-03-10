import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import VyNavbar from "./components/VyNavbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Yethindra Vityala - Personal Portfolio",
  description: "Dr. Yethindra Vityala is a globally acclaimed Indian physician, researcher, and author who has made remarkable strides in medical science, specifically in the fields of endocrinology, neurology, oncology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sub-body">
         <VyNavbar />
        {children}</div>
      </body>
    </html>
  );
}
