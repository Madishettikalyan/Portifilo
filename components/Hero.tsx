'use client';

import React from 'react';
import { ArrowDown, Send, FileDown, Sparkles, Wand2, Palette, PenTool, Layout } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useToast } from './Toast';

export default function Hero() {
  const { showToast } = useToast();

  const handleDownloadCV = () => {
    showToast('Preparing Madishetti Kalyan\'s Professional Resume...', 'info');

    setTimeout(() => {
      const cvText = `MADISHETTI KALYAN
Graphic Designer | Creative Visual Designer
Experience: 5+ Years
Email: madishetti.kalyan.design@gmail.com
Location: India (Remote Worldwide)

CORE SPECIALIZATIONS:
- Brand Identity & Logo Design
- Social Media Creatives & Ad Campaigns
- Posters & Promotional Designs
- Product Advertisements & Packaging Branding
- Digital Marketing Creatives & Website Banners
- AI-Assisted Creative Visuals & Midjourney Ideation
- Typography & Pre-Press Production

TOOLS: Adobe Photoshop, Illustrator, InDesign, Figma, Midjourney, CorelDRAW.

Design Philosophy: "Design is not just about making things look good — it’s about making ideas impossible to ignore."`;

      const blob = new Blob([cvText], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Madishetti_Kalyan_Graphic_Designer_CV.txt';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      showToast('CV Downloaded successfully!', 'success');
    }, 600);
  };

  return (
    <section className="relative pt-36 pb-20 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-6">
            <span className="pulse-dot" />
            <span>Available for Freelance & Full-Time Roles</span>
          </div>

          {/* Headline */}
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.12] mb-6 text-white">
            Transforming Ideas Into <br />
            <span className="text-gradient">Impossible-to-Ignore</span> <br />
            Visual Experiences.
          </h1>

          {/* Subtitle */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            I’m <strong className="text-white font-semibold">{PORTFOLIO_DATA.personalInfo.name}</strong>, a passionate Graphic Designer with <strong className="text-white font-semibold">5+ years of professional experience</strong> creating impactful, visually engaging brand identities, promotional designs, digital campaigns, and high-converting creative visuals.
          </p>

          {/* Hero Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <span>Explore My Work</span>
              <ArrowDown className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-bold text-sm text-white bg-dark-surface border border-white/10 hover:border-primary/50 hover:bg-dark-elevated hover:-translate-y-0.5 transition-all"
            >
              <span>Let&apos;s Create Together</span>
              <Send className="w-4 h-4 text-primary" />
            </a>

            <button
              onClick={handleDownloadCV}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-display font-semibold text-sm text-slate-300 border border-white/10 hover:text-white hover:border-white/30 hover:-translate-y-0.5 transition-all"
            >
              <FileDown className="w-4 h-4" />
              <span>Download CV</span>
            </button>
          </div>

          {/* Quick Skill Badges */}
          <div className="flex flex-wrap items-center gap-2.5 pt-2">
            {[
              { label: 'Visual Storytelling', icon: Sparkles },
              { label: 'Brand Identity', icon: PenTool },
              { label: 'Campaign Design', icon: Layout },
              { label: 'AI-Assisted Art', icon: Wand2 },
            ].map((tag) => {
              const Icon = tag.icon;
              return (
                <span
                  key={tag.label}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-dark-surface border border-white/10 text-xs font-medium text-slate-300"
                >
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  <span>{tag.label}</span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Right Column: 3D Art Studio Showcase */}
        <div className="lg:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-md">
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-coral rounded-3xl blur-2xl opacity-30 animate-pulse" />

            {/* Glass Showcase Card */}
            <div className="relative bg-dark-surface/80 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl shadow-black/80">
              {/* Studio Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-dark-elevated border border-primary/40 flex items-center justify-center text-primary">
                  <Palette className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-xs text-white">Creative Visual Studio</h3>
                  <p className="text-[11px] text-slate-400">Madishetti Kalyan • 5+ Yrs Exp</p>
                </div>
              </div>

              {/* Graphic Design Center Artwork / Profile Photo */}
              <div className="relative w-full h-80 sm:h-96 rounded-2xl bg-gradient-to-br from-indigo-950 via-slate-900 to-black border border-white/15 flex items-center justify-center overflow-hidden shadow-2xl group">
                {PORTFOLIO_DATA.personalInfo.profileImage ? (
                  <>
                    <img
                      src={PORTFOLIO_DATA.personalInfo.profileImage}
                      alt={PORTFOLIO_DATA.personalInfo.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Subtle aesthetic gradient overlay at bottom of photo */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-surface via-dark-surface/40 to-transparent flex items-end p-4">
                      <div className="flex items-center justify-between w-full">
                        <div>
                          <span className="text-[10px] font-bold text-primary tracking-widest uppercase block">KALYAN</span>
                          <span className="text-xs font-bold text-white">Visual Designer</span>
                        </div>
                        <span className="px-2.5 py-1 rounded-full bg-primary/80 backdrop-blur-md text-[10px] font-extrabold text-white">
                          5+ YRS
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Rotating geometric visual elements */}
                    <div className="absolute w-44 h-44 rounded-full border border-indigo-500/30 animate-spin [animation-duration:20s]" />
                    <div className="absolute w-28 h-28 border border-rose-500/30 rotate-45 animate-spin [animation-duration:25s] [animation-direction:reverse]" />
                    
                    {/* Floating Studio Card */}
                    <div className="relative z-10 w-44 bg-dark-bg/85 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-2xl animate-badge-float">
                      <span className="text-[9px] font-bold tracking-widest text-coral uppercase block">EST. 2019</span>
                      <h4 className="font-accent font-extrabold text-xl text-white leading-tight my-1">
                        BOLD<br />VISUALS
                      </h4>
                      <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary rounded mb-3" />
                      <div className="flex justify-between text-[9px] font-bold text-slate-400">
                        <span>5+ YRS</span>
                        <span>DESIGN THINKING</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Floating Software Pills */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-xl flex items-center gap-2 text-xs font-semibold text-white animate-badge-float">
                <span className="w-5 h-5 rounded bg-blue-950 border border-blue-400 text-blue-400 font-extrabold text-[10px] flex items-center justify-center">Ps</span>
                <span>Photoshop</span>
              </div>

              <div className="absolute bottom-16 -left-4 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-xl flex items-center gap-2 text-xs font-semibold text-white animate-badge-float [animation-delay:-1.5s]">
                <span className="w-5 h-5 rounded bg-amber-950 border border-amber-500 text-amber-500 font-extrabold text-[10px] flex items-center justify-center">Ai</span>
                <span>Illustrator</span>
              </div>

              <div className="absolute -bottom-3 -right-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-xl flex items-center gap-2 text-xs font-semibold text-white animate-badge-float [animation-delay:-3s]">
                <span className="w-5 h-5 rounded bg-rose-950 border border-rose-500 text-rose-500 font-extrabold text-[10px] flex items-center justify-center">Id</span>
                <span>InDesign</span>
              </div>

              <div className="absolute top-20 -left-5 px-3 py-1.5 rounded-full bg-slate-900/90 border border-white/10 shadow-xl flex items-center gap-2 text-xs font-semibold text-white animate-badge-float [animation-delay:-2s]">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>AI Prompt Visuals</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
