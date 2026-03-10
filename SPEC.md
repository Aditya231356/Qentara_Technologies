# Qentara Technologies - Website Specification

## 1. Project Overview

**Project Name:** Qentara Technologies Website  
**Project Type:** Marketing Website / Portfolio  
**Core Functionality:** A premium, high-converting software agency website showcasing services, portfolio, pricing, and contact information  
**Target Users:** Startups, small businesses, and growing enterprises looking for web development services

---

## 2. UI/UX Specification

### Layout Structure

**Page Sections (in order):**
1. Hero Section
2. About Section  
3. Services Section
4. Portfolio Section
5. Work Process Section
6. Client Reviews Section
7. Pricing Section
8. Contact Section
9. Footer

**Responsive Breakpoints:**
- Mobile: 0-639px (default)
- Tablet: 640px-1023px (sm/md)
- Desktop: 1024px+ (lg/xl)

### Visual Design

**Color Palette:**
- Primary Background: `#0a0a0f` (deep dark)
- Secondary Background: `#12121a` (card backgrounds)
- Primary Accent: `#6366f1` (indigo-500)
- Secondary Accent: `#8b5cf6` (violet-500)
- Tertiary Accent: `#06b6d4` (cyan-500)
- Text Primary: `#f8fafc` (slate-50)
- Text Secondary: `#94a3b8` (slate-400)
- Text Muted: `#64748b` (slate-500)
- Border: `#1e293b` (slate-800)
- Success: `#10b981` (emerald-500)

**Typography:**
- Font Family: `"Plus Jakarta Sans"` (headings), `"Inter"` (body)
- H1: 48px-64px, font-weight 700
- H2: 36px-48px, font-weight 600
- H3: 24px-32px, font-weight 600
- Body: 16px, font-weight 400
- Small: 14px

**Spacing System:**
- Section padding: 80px-120px vertical
- Container max-width: 1280px
- Grid gap: 24px-32px
- Card padding: 24px-32px

**Visual Effects:**
- Border radius: 16px (cards), 12px (buttons), 8px (inputs)
- Box shadows: `0 4px 24px rgba(0,0,0,0.3)`
- Gradient overlays: subtle radial gradients
- Hover transitions: 300ms ease

### Components

**Navigation:**
- Fixed header with blur backdrop
- Logo on left, nav links center, CTA button right
- Mobile: hamburger menu

**Buttons:**
- Primary: Gradient background (indigo to violet)
- Secondary: Transparent with border
- Hover: Scale up slightly, glow effect

**Cards:**
- Dark background with subtle border
- Hover: lift effect, border glow
- Rounded corners (16px)

**Form Inputs:**
- Dark background (#1a1a24)
- Subtle border, focus glow
- Placeholder text in muted color

---

## 3. Functionality Specification

### Core Features

**Hero Section:**
- Animated gradient background
- Bold headline with gradient text
- Two CTA buttons with hover effects
- Subtle floating shapes animation

**About Section:**
- Company intro paragraph
- Mission statement
- Three feature highlight cards with icons

**Services Section:**
- 5 service cards in responsive grid
- Each with icon, title, description
- Hover: scale + glow effect

**Portfolio Section:**
- 6 project cards with image placeholders
- Project name, description, view button
- Responsive grid (3 cols desktop, 2 tablet, 1 mobile)

**Work Process Section:**
- 5-step timeline layout
- Step numbers with connecting line
- Clean card design

**Client Reviews Section:**
- 3 testimonial cards
- 5-star ratings, client info, review text
- "Leave a Review" button

**Pricing Section:**
- 3 pricing tiers (Starter, Business, Enterprise)
- Feature lists with checkmarks
- CTA buttons
- Middle card highlighted as "Popular"

**Contact Section:**
- Contact form (name, email, textarea)
- Submit button
- Contact info (email, phone)

**Footer:**
- Logo
- Quick links
- Social media icons
- Copyright 2026

### User Interactions
- Smooth scroll between sections
- Hover effects on all interactive elements
- Form validation visual feedback
- Mobile menu toggle

---

## 4. Technical Requirements

- Next.js 14+ with App Router
- Tailwind CSS for styling
- Lucide React for icons
- No backend required
- Static content only
- SEO optimized with metadata
- Production ready

---

## 5. Acceptance Criteria

1. ✅ Website loads without errors
2. ✅ All 9 sections visible and properly styled
3. ✅ Fully responsive on mobile, tablet, desktop
4. ✅ Smooth animations and hover effects
5. ✅ All buttons and links functional
6. ✅ Form inputs present and styled
7. ✅ Clean, modular component structure
8. ✅ Premium, professional appearance
9. ✅ Fast loading (no heavy libraries)
10. ✅ Semantic HTML with proper heading structure
