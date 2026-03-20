/**
 * Head metadata for Qentara Technologies - Next.js 13+ App Router
 * 
 * This file configures:
 * - Favicon for browser tab
 * - SEO title and meta description
 * - Open Graph tags for social media sharing
 */

export default function Head() {
  return (
    <>
      {/* 
        Favicon Configuration 
        - Uses logo.png from /public directory
        - rel="icon" specifies it's a favicon
        - sizes="any" ensures compatibility across all devices
        - Added shortcut icon for older browser compatibility
        - Added apple-touch-icon for iOS devices
      */}
      <link rel="icon" href="/logo.png" type="image/png" sizes="32x32" />
      <link rel="shortcut icon" href="/logo.png" type="image/png" />
      <link rel="apple-touch-icon" href="/logo.png" />
      
      {/* 
        Primary Meta Tags 
        - title: SEO-optimized title for search engines
        - description: Compelling meta description (155 chars) with key business keywords
      */}
      <title>Qentara Technologies – Web Development, UI/UX Design & E-commerce Solutions for Startups in India</title>
      <meta name="description" content="Qentara Technologies delivers professional web development, UI/UX design, e-commerce & SEO solutions for startups and businesses in India." />
      
      {/* 
        Open Graph / Facebook Meta Tags 
        - Enables rich previews when sharing on social media
        - og:title: Title displayed in social share cards
        - og:description: Description shown in social share cards  
        - og:image: Preview image for social shares (uses logo.png)
        - og:type: Specifies it's a website
      */}
      <meta property="og:title" content="Qentara Technologies – Web Development, UI/UX Design & E-commerce Solutions for Startups in India" />
      <meta property="og:description" content="Qentara Technologies delivers professional web development, UI/UX design, e-commerce & SEO solutions for startups and businesses in India." />
      <meta property="og:image" content="/logo.png" />
      <meta property="og:type" content="website" />
      
      {/* 
        Twitter Card Meta Tags 
        - Optimizes appearance when sharing on Twitter/X
      */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Qentara Technologies – Web Development, UI/UX Design & E-commerce Solutions for Startups in India" />
      <meta name="twitter:description" content="Qentara Technologies delivers professional web development, UI/UX design, e-commerce & SEO solutions for startups and businesses in India." />
      <meta name="twitter:image" content="/logo.png" />
      
      {/* 
        Additional SEO Meta Tags 
        - Robots: Allows search engine indexing
        - Language: Specifies the content language
      */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      
      {/* 
        Theme Color 
        - Sets the browser address bar color on mobile devices
      */}
      <meta name="theme-color" content="#0f172a" />
    </>
  );
}
