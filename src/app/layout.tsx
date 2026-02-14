import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qentara Technologies | Premium Web Development Agency",
  description:
    "Qentara Technologies is a modern web development agency that builds high-performance, scalable, and SEO-optimized websites for startups, small businesses, and growing enterprises.",
  keywords: [
    "web development",
    "software agency",
    "website development",
    "SEO optimization",
    "e-commerce development",
    "UI/UX design",
  ],
  authors: [{ name: "Qentara Technologies" }],
  openGraph: {
    title: "Qentara Technologies | Premium Web Development Agency",
    description:
      "We Build High-Performance Websites for Growing Businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-body bg-background text-slate-50 antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
