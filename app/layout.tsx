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
    default: "Dr. Yethindra Vityala | World's Youngest Scientist in Medicine",
    template: "%s | Dr. Yethindra Vityala",
  },
  description:
    "World's youngest medical scientist Dr. Yethindra Vityala MBBS MD, 12 world records, 100+ peer-reviewed papers in oncology & infectious diseases. Explore research portfolio.",
  keywords: [
    "Dr Yethindra Vityala",
    "youngest scientist medicine",
    "medical researcher India",
    "oncology publications",
    "world's youngest medical scientist",
    "100+ peer-reviewed papers",
    "infectious diseases",
  ],
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Dr. Yethindra Vityala | Youngest Scientist in Medicine",
    description:
      "World's youngest medical scientist Dr. Yethindra Vityala MBBS MD, 12 world records, 100+ peer-reviewed papers in oncology & infectious diseases. Explore research portfolio.",
    url: "/",
    siteName: "Dr. Yethindra Vityala",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Yethindra Vityala | Youngest Scientist in Medicine",
    description:
      "World's youngest medical scientist Dr. Yethindra Vityala MBBS MD, 12 world records, 100+ peer-reviewed papers in oncology & infectious diseases.",
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
