import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: {
    default: "Qentara Technologies | Premium Web Development Agency",
    template: "%s | Qentara Technologies",
  },
  description:
    "Qentara Technologies is a modern web development agency that builds high-performance, scalable, and SEO-optimized websites for startups, small businesses, and growing enterprises.",
  keywords: [
    "Qentara Technologies",
    "premium web development agency",
    "qentara.com",
    "qentara technologies",
    "web development agency",
    "Aditya Kumar Ojha",
    "Qentara",
    "web development",
    "software agency",
    "website development",
    "SEO optimization",
    "e-commerce development",
    "UI/UX design",
  ],
  authors: [{ name: "Qentara Technologies" }],
  creator: "Qentara Technologies",
  publisher: "Qentara Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://qentara.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Qentara Technologies | Premium Web Development Agency",
    description:
      "We Build High-Performance Websites for Growing Businesses",
    url: "https://qentara.com",
    siteName: "Qentara Technologies",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Qentara Technologies",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Qentara Technologies | Premium Web Development Agency",
    description:
      "We Build High-Performance Websites for Growing Businesses",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Qentara Technologies",
              url: "https://qentara.com",
              description:
                "Premium web development agency building high-performance websites for growing businesses",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://qentara.com/{search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Qentara Technologies",
              url: "https://qentara.com",
              logo: "https://qentara.com/logo.png",
              description:
                "Premium web development agency building high-performance websites for growing businesses",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9264231356",
                contactType: "customer service",
                email: "qentara.web@gmail.com",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Gorakhpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
              },
              sameAs: [
                "https://facebook.com/qentara",
                "https://twitter.com/qentara",
                "https://instagram.com/qentara",
                "https://linkedin.com/company/qentara",
                "https://github.com/qentara",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-body bg-background text-slate-50 antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
