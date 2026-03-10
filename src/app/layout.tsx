import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
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
  metadataBase: new URL("https://qentara.in"),
  title: {
    default: "Qentara Technologies | Premium Web Development Agency in India",
    template: "%s | Qentara Technologies",
  },
  description:
    "Qentara Technologies is a leading web development agency in India offering custom website development, e-commerce solutions, UI/UX design, and SEO optimization services. Trusted by startups and businesses for high-performance, scalable websites.",
  keywords: [
    // Primary Keywords
    "Qentara Technologies",
    "web development company India",
    "best web developers India",
    "custom website development",
    "professional web design services",
    // Secondary Keywords
    "e-commerce development India",
    "UI/UX design services",
    "SEO optimization company India",
    "React JS developers India",
    "Next.js development company",
    // Service Keywords
    "website development agency",
    "e-commerce website builder",
    "mobile responsive web design",
    "wordpress development services",
    "React Next.js web development",
    // Location-based Keywords
    "web development agency India",
    "best SEO company in India",
    "web design company Delhi",
    "ecommerce developer Mumbai",
    // Long-tail Keywords
    "affordable web development for startups",
    "professional website design services India",
    "best react next js developers",
    "SEO friendly website development",
    "custom ecommerce store development",
    "mobile first web design India",
    "full stack web development services",
    "website maintenance and support",
    "digital transformation services",
    "responsive website design company",
    // Additional Tech Keywords
    "TypeScript web development",
    "frontend development services",
    "backend development company",
    "API development services",
    "cloud hosting solutions",
    // Business Keywords
    "startup website development",
    "small business website design",
    "corporate web solutions",
    "portfolio website development",
    "landing page design services",
  ],
  authors: [{ name: "Qentara Technologies", url: "https://qentara.in" }],
  creator: "Qentara Technologies",
  publisher: "Qentara Technologies",
  
  // Canonical URL
  alternates: {
    canonical: "https://qentara.in",
    languages: {
      en: "https://qentara.in",
    },
  },
  
  // Icons
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  
  // Open Graph / Facebook
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://qentara.in",
    siteName: "Qentara Technologies",
    title: "Qentara Technologies | Premium Web Development Agency in India",
    description:
      "Leading web development agency in India offering custom website development, e-commerce solutions, UI/UX design, and SEO optimization services. Build high-performance, scalable websites for your business.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Qentara Technologies - Web Development Agency India",
      },
    ],
  },
  
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Qentara Technologies | Premium Web Development Agency in India",
    description:
      "Leading web development agency in India offering custom website development, e-commerce solutions, UI/UX design, and SEO optimization services.",
    images: ["/logo.png"],
    creator: "@qentara",
    site: "@qentara",
  },
  
  // Robots
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
  
  // Dublin Core
  other: {
    "dc.title": "Qentara Technologies - Premium Web Development Agency",
    "dc.creator": "Qentara Technologies",
    "dc.subject": "Web Development, E-commerce, UI/UX Design, SEO Services",
    "dc.description": "Leading web development agency in India offering custom website development, e-commerce solutions, UI/UX design, and SEO optimization services.",
    "dc.publisher": "Qentara Technologies",
    "dc.language": "en",
    "dc.rights": "Copyright © 2025 Qentara Technologies. All rights reserved.",
    "geo.region": "IN",
    "geo.placename": "India",
  },
  
  // Verification
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Qentara Technologies",
    url: "https://qentara.in",
    logo: "https://qentara.in/logo.png",
    description:
      "Leading web development agency in India offering custom website development, e-commerce solutions, UI/UX design, and SEO optimization services.",
    foundingDate: "2024",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 2,
      maxValue: 10,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Web Development",
      "E-commerce Development",
      "UI/UX Design",
      "SEO Optimization",
      "Custom Software Development",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9264231356",
      contactType: "customer service",
      email: "qentara.web@gmail.com",
      availableLanguage: ["English", "Hindi"],
    },
    sameAs: [
      "https://wa.me/919264231356",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Delhi-NCR",
    },
  };

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Qentara Technologies",
    image: "https://qentara.in/logo.png",
    url: "https://qentara.in",
    telephone: "+91-9264231356",
    email: "qentara.web@gmail.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: [
      "Website Development",
      "E-commerce Development",
      "UI/UX Design",
      "SEO Services",
    ],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "18:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "10",
    },
  };

  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} font-body bg-background text-slate-50 antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
