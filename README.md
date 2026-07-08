# ApexRoofing — Premium Residential Roofing Website

A modern, high-conversion marketing website for **ApexRoofing**, a fictional (but realistic) residential roofing contractor specializing in roof replacement, repair, storm-damage restoration, and insurance claim support.

🌐 **Live Site:** [https://r1-seven-omega.vercel.app/](https://r1-seven-omega.vercel.app/)

> _"Professional Roof Replacement & Repair Done Right."_

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Purpose & Goals](#-purpose--goals)
- [Key Features](#-key-features)
- [Page Structure & Sections](#-page-structure--sections)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Configuration](#-configuration)
- [Deployment](#-deployment)
- [SEO & Performance](#-seo--performance)
- [Accessibility](#-accessibility)
- [License](#-license)

---

## 🏠 Overview

**ApexRoofing** is a single-page Next.js website that serves as the digital storefront for a U.S.-based residential roofing company. It is engineered to:

- Build immediate **trust** with homeowners researching roof replacement or storm-damage repair.
- Showcase **materials, craftsmanship, and warranty** differentiators.
- Generate qualified **lead submissions** through a frictionless "Free Estimate" funnel.
- Communicate **payment & financing flexibility** (zero-down, low-APR, 12-month interest-free, insurance claim help).
- Establish **local credibility** with concrete stats (500+ roofs, 15+ years, 4.9/5 rating).

The site is purposefully **static-first** (no backend, no database) so it can be deployed to a global CDN with sub-second load times — perfect for performance-sensitive lead generation.

---

## 🎯 Purpose & Goals

| Goal | How the Site Achieves It |
| --- | --- |
| **Convert visitors to leads** | Persistent "Get a Free Estimate" CTA in the hero, header, and footer; in-page email callback form. |
| **Build trust instantly** | Real numbers (500+ roofs, 4.9/5), 21-point inspection language, licensed & insured messaging. |
| **Educate the buyer** | Clear 3-step "How It Works" process, materials catalog with starting prices, financing breakdown. |
| **Reduce price anxiety** | Dedicated Financing section covering insurance assistance, zero-down, and 12-month interest-free options. |
| **Mobile-first lead capture** | Sticky, fully responsive layout with tap-to-call phone number (`(800) 555-ROOF`). |

---

## ✨ Key Features

-  **Custom design system** — dark accent cards on a light page background, fully defined in [tailwind.config.ts](roofing-website/tailwind.config.ts:1).
-  **Sticky pill-shaped navigation** with smooth scroll anchor links and a mobile slide-down menu ([Header.tsx](roofing-website/src/components/Header.tsx:1)).
-  **Hero section** with a full-bleed roofer photo, headline, primary CTA, and 3 key-stat chips ([Hero.tsx](roofing-website/src/components/Hero.tsx:1)).
-  **Why Choose Us** — three feature cards (Premium Materials, Fast Turnaround, Licensed & Insured) ([WhyChooseUs.tsx](roofing-website/src/components/WhyChooseUs.tsx:1)).
-  **Process Visual** — full-width severe-weather imagery band ([ProcessVisual.tsx](roofing-website/src/components/ProcessVisual.tsx:1)).
-  **Project Catalog** — visual grid of 4 roofing systems (Modern Slate, Classic Composite, Standing Seam Metal, Premium Asphalt) with square footage and starting prices ([ProjectCatalog.tsx](roofing-website/src/components/ProjectCatalog.tsx:1)).
-  **Financing & Payment Options** — alternating dark/light cards covering insurance claims, payment plans, free damage assessment, and 12-month interest-free financing ([Financing.tsx](roofing-website/src/components/Financing.tsx:1)).
-  **How It Works** — 3-step process (Inspection → Proposal → Installation) ([HowItWorks.tsx](roofing-website/src/components/HowItWorks.tsx:1)).
-  **Footer / Contact Section** — phone, email, address, callback email form, services & company link columns, social icons ([Footer.tsx](roofing-website/src/components/Footer.tsx:1)).
-  **Optimized imagery** via `next/image` with explicit `sizes`, `priority` for the LCP image, and `fill` for aspect-ratio-locked cards.
-  **Micro-interactions** — group-hover lifts, image zoom, animated underlines, smooth scroll behavior.

---

## 🧱 Page Structure & Sections

The single page in [`src/app/page.tsx`](roofing-website/src/app/page.tsx:1) composes the following sections in order:

| # | Section | Component | Anchor ID |
| - | --- | --- | --- |
| 1 | Header (pill nav + mobile menu) | [`Header`](roofing-website/src/components/Header.tsx:6) | — |
| 2 | Hero (headline + CTA + stats + roofer photo) | [`Hero`](roofing-website/src/components/Hero.tsx:8) | `#hero` |
| 3 | Why Choose Us (3 feature cards) | [`WhyChooseUs`](roofing-website/src/components/WhyChooseUs.tsx:7) | `#why-us` |
| 4 | Process Visual (weather band) | [`ProcessVisual`](roofing-website/src/components/ProcessVisual.tsx:6) | — |
| 5 | Project Catalog (4 material showcases) | [`ProjectCatalog`](roofing-website/src/components/ProjectCatalog.tsx:7) | `#projects` |
| 6 | Payment & Financing Options (4 cards) | [`Financing`](roofing-website/src/components/Financing.tsx:6) | `#financing` |
| 7 | How It Works (3 numbered steps) | [`HowItWorks`](roofing-website/src/components/HowItWorks.tsx:5) | `#how-it-works` |
| 8 | Footer / Contact (phone, email, form, links) | [`Footer`](roofing-website/src/components/Footer.tsx:6) | `#contact` |

> The `#services` anchor in the navigation currently does not have a dedicated section — it is reserved for future expansion (see [Roadmap](#-roadmap--future-enhancements)).

---

## 🛠 Tech Stack

| Layer | Technology | Purpose |
| --- | --- | --- |
| **Framework** | [Next.js 15](https://nextjs.org) (App Router) | Static-first React framework with built-in image optimization & font loading. |
| **UI Library** | [React 19](https://react.dev) | Component model. |
| **Language** | [TypeScript 5](https://www.typescriptlang.org) | Strict typing for components, props, and content data. |
| **Styling** | [Tailwind CSS 3.4](https://tailwindcss.com) | Utility-first CSS with a custom 6-color palette. |
| **Icons** | [lucide-react](https://lucide.dev) | Tree-shakeable SVG icon set. |
| **Fonts** | [`next/font/google`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Geist Sans & Geist Mono | Self-hosted, zero-CLS font loading. |
| **Linting** | ESLint 9 + `eslint-config-next` | Next.js-aware linting. |
| **Deployment** | [Vercel](https://vercel.com) | Zero-config hosting, edge CDN. |

---

## 📂 Project Structure

```
roofing-website/
├── public/
│   ├── images/                 # High-quality roofing photography
│   │   ├── hero-roofer-working.jpg
│   │   ├── quality-section.png
│   │   ├── weather-protection.jpg
│   │   ├── modern-slate-shingle.png
│   │   ├── classic-composite-tiles.png
│   │   ├── standing-seam-metal.png
│   │   └── premium-asphalt.png
│   ├── file.svg, globe.svg,    # Default Next.js SVGs (unused in UI)
│   ├── next.svg, vercel.svg,
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── favicon.ico
│   │   ├── globals.css         # Tailwind base/components/utilities
│   │   ├── layout.tsx          # Root layout: fonts, metadata, <html>/<body>
│   │   └── page.tsx            # Home page: composes all sections
│   └── components/
│       ├── Header.tsx          # Pill nav with mobile menu
│       ├── Hero.tsx            # Headline, CTA, stats, hero image
│       ├── WhyChooseUs.tsx     # 3 feature cards
│       ├── ProcessVisual.tsx   # Full-width weather band
│       ├── ProjectCatalog.tsx  # 4 roofing material showcases
│       ├── Financing.tsx       # 4 payment/financing options
│       ├── HowItWorks.tsx      # 3-step process
│       └── Footer.tsx          # Contact info, callback form, links
├── .gitignore
├── eslint.config.mjs
├── next-env.d.ts
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

The visual language is defined in [`tailwind.config.ts`](roofing-website/tailwind.config.ts:11) as a tight 6-color palette:

| Token | Hex | Usage |
| --- | --- | --- |
| `pageBg` | `#F4F4F5` | Outer page background (zinc-100 feel). |
| `surface` | `#EDEDEE` | Card / container surface. |
| `primary` | `#14141C` | Headlines, body text, dark CTAs. |
| `secondary` | `#8A8F98` | Muted body copy, sub-labels. |
| `accent` | `#16171F` | Dark feature cards, brand accents. |
| `whiteCard` | `#FFFFFF` | Inner cards, form inputs. |

**Typography**

- **Geist Sans** — primary UI and body text.
- **Geist Mono** — used sparingly for numbered step badges (`01`, `02`, `03`).

**Design Principles**

- Generous border radii (`rounded-2xl`, `rounded-[2rem]`, `rounded-[2.5rem]`, `rounded-full` for nav).
- Subtle elevation: `shadow-sm` on cards, `shadow-md` on CTAs.
- Restrained color use — neutral grayscale palette with a single dark accent for visual rhythm.
- Hover affordances: `-translate-y-1` lift, image `scale-105`, animated underline grow.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18.18+** (Node 20 LTS recommended)
- **npm 9+** (or yarn / pnpm / bun)

### Installation

```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate into the project
cd roofing-website

# 3. Install dependencies
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### Run the Development Server

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser. The page hot-reloads as you edit files inside `src/`.

---

## 📜 Available Scripts

Defined in [`package.json`](roofing-website/package.json:5):

| Script | Command | Description |
| --- | --- | --- |
| `dev` | `next dev` | Start the local dev server with HMR on port 3000. |
| `build` | `next build` | Produce a production-optimized build in `.next/`. |
| `start` | `next start` | Serve the production build (requires `build` first). |
| `lint` | `next lint` | Run ESLint with the Next.js config. |

---

## ⚙️ Configuration

### Updating Site Metadata

Edit the `metadata` export in [`src/app/layout.tsx`](roofing-website/src/app/layout.tsx:15):

```ts
export const metadata: Metadata = {
  title: "ApexRoofing | Premium Residential Roof Replacement & Repair Done Right",
  description: "Get professional, durable roof replacements and emergency repairs with premium materials, highly skilled craftsmen, and zero-down financing options.",
};
```

### Updating Brand Colors

Edit the `colors` block in [`tailwind.config.ts`](roofing-website/tailwind.config.ts:11) and any class names that reference those tokens.

### Swapping Photography

Replace the images in `public/images/` keeping the same filenames, or update the `src` attributes in the corresponding component files.

### Changing Contact Details

Search-and-replace the following placeholders across the codebase:

-  Phone: `(800) 555-ROOF` and `tel:+18005557663`
-  Email: `estimates@apexroofing.com`
-  Address: `1024 Ridge Line Blvd, Suite C, Phoenix, AZ 85016`
-  Social: `https://instagram.com`, `https://facebook.com`, `https://linkedin.com`

---

## ☁️ Deployment

The project is configured for **Vercel** (the creators of Next.js) and is currently live at [https://r1-seven-omega.vercel.app/](https://r1-seven-omega.vercel.app/).

### Deploy Your Own

1. Push the repository to GitHub / GitLab / Bitbucket.
2. Import the project into Vercel: [vercel.com/new](https://vercel.com/new).
3. Vercel auto-detects Next.js, sets `npm run build` as the build command, and serves the output from the global edge network.

No environment variables are required — the site is fully static.

### Other Hosts

Because the project is a standard Next.js 15 App Router app, it can also be deployed to:

- **Netlify** — set build command to `next build` and publish directory to `.next`.
- **Cloudflare Pages** — use the `@cloudflare/next-on-pages` adapter.
- **Self-hosted Node** — run `npm run build && npm run start` behind a reverse proxy (nginx, Caddy).

---

## 🔍 SEO & Performance

- **Metadata** — descriptive `<title>` and `<meta name="description">` defined at the root layout.
- **Semantic HTML** — `<main>`, `<header>`, `<footer>`, `<section>`, `<h1>`–`<h3>` hierarchy.
- **Image optimization** — all imagery uses `next/image` with explicit `sizes`, lazy loading by default, and `priority` on the LCP hero image.
- **Font optimization** — `next/font/google` self-hosts Geist Sans & Geist Mono, eliminating render-blocking external font requests and CLS.
- **Smooth scroll** — `scroll-smooth` on `<html>` for in-page anchor navigation.
- **Static rendering** — no client-only routes; `"use client"` is used **only** in components that need interactivity (Header menu toggle, Footer form state).

---

## ♿ Accessibility

- Semantic landmark elements (`<header>`, `<main>`, `<footer>`, `<section>`).
- `aria-label` on icon-only navigation buttons (mobile menu toggle, prev/next project arrows).
- `aria-hidden`-friendly icon usage via `lucide-react` (decorative icons inherit text color).
- Color contrast — dark text (`#14141C`) on light surfaces (`#F4F4F5`/`#FFFFFF`) and light text (`#FFFFFF`) on dark surfaces (`#16171F`) both exceed WCAG AA ratios.
- Keyboard-navigable — all interactive elements are `<a>` or `<button>`, fully focusable.
- Form labels — the email callback field uses `type="email"` with a clear `placeholder` and `required` attribute.

---

## 📄 License

This project is provided as a **marketing template**. The fictional brand "ApexRoofing" and all phone numbers, email addresses, and physical addresses are placeholders. Feel free to fork, modify, and rebrand for your own roofing (or home-services) business.

---

_Made with Next.js, React, TypeScript, and Tailwind CSS._
