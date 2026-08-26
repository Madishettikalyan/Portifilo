# Madishetti Kalyan - Graphic Designer Portfolio (Next.js & Tailwind CSS)

A Next.js 14+ (App Router) portfolio website crafted for **Madishetti Kalyan** (Graphic Designer & Creative Visual Designer) with TypeScript, Tailwind CSS, modular React components, and dynamic UI interactions.

---

## ⚡ Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript (`.tsx`, `.ts`)
- **Styling**: Tailwind CSS + Custom Dark Studio Gradients
- **Icons**: Lucide React
- **Typography**: Google Fonts (Plus Jakarta Sans, Space Grotesk, Syne)
- **State & Interactions**: Client Components, Toast Context Provider, Custom Glow Cursor

---

## 🚀 Quick Start Guide

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (version 18.17 or later) installed on your machine.

### 1. Install Dependencies
Open your terminal in this directory (`madishetti-kalyan-portfolio-nextjs`) and run:
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to see your live portfolio!

### 3. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Project Structure

```text
madishetti-kalyan-portfolio-nextjs/
├── app/
│   ├── layout.tsx             # Root layout with fonts, ambient glow orbs & toast provider
│   ├── page.tsx               # Main landing page assembling all components
│   └── globals.css            # Tailwind directives, animations & glassmorphism
├── components/
│   ├── Navbar.tsx             # Sticky glassmorphic header with mobile drawer
│   ├── Hero.tsx               # Status badge, statement typography, 3D visual art canvas
│   ├── StatsBar.tsx           # Count-up impact metrics (5+ Yrs, 180+ Projects)
│   ├── AboutPhilosophy.tsx    # Signature quote & 4-step creative workflow
│   ├── Services.tsx           # 10 core specialization cards
│   ├── Strengths.tsx          # 5 core strengths with visual progress bars
│   ├── PortfolioGallery.tsx   # Interactive category filter tabs & project grid
│   ├── CaseStudyModal.tsx     # Project detail modal lightbox with color palette inspect
│   ├── ExperienceTimeline.tsx # 2019-Present milestones + software skill meters
│   ├── Testimonials.tsx       # Client reviews with 5-star ratings
│   ├── ContactHub.tsx         # Copy email to clipboard, social links & inquiry form
│   ├── Footer.tsx             # Brand statement, quick links & back-to-top
│   ├── CustomCursor.tsx       # Smooth trailing glow cursor with hover state
│   └── Toast.tsx              # Dynamic toast notification system
├── data/
│   └── portfolioData.ts       # Centralized typed data for projects, services, skills
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next.config.js
```

---

## 🌐 Deploy to Vercel (1-Click Free Hosting)

1. Push this project folder to your GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository. Vercel will automatically detect Next.js and deploy it with free global CDN and HTTPS!

---

© 2025 Madishetti Kalyan • Graphic Designer • Creative Thinker • Visual Storyteller.
