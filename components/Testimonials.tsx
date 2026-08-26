'use client';

import React, { useRef } from 'react';
import { Star, MessageSquare, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollSide = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-24 relative overflow-hidden bg-dark-bg/40 border-t border-white/5" id="testimonials">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Section Header - Perfectly Centered */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT PRAISE & REVIEWS</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What Collaborators <span className="text-gradient">Say</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed">
            Trusted by startups, marketing directors, and global founders for exceptional graphic design and visual storytelling.
          </p>

          {/* Centered Side Controls Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scrollSide('left')}
              className="p-2.5 rounded-full bg-dark-surface border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer shadow-lg active:scale-95"
              title="Slide Left"
              aria-label="Previous Reviews"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-mono font-semibold text-slate-400 px-2">
              Drag or Click to Explore
            </span>
            <button
              onClick={() => scrollSide('right')}
              className="p-2.5 rounded-full bg-dark-surface border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-pointer shadow-lg active:scale-95"
              title="Slide Right"
              aria-label="Next Reviews"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Side Animation Marquee Track */}
      <div
        ref={scrollContainerRef}
        className="w-full overflow-hidden py-4 cursor-grab active:cursor-grabbing"
      >
        <div className="animate-marquee-left flex w-max">
          {/* First Group */}
          <div className="flex gap-6 px-3 pr-3">
            {PORTFOLIO_DATA.testimonials.map((t, index) => (
              <div
                key={`group1-${t.name}-${index}`}
                className="w-[340px] sm:w-[400px] flex-shrink-0 bg-dark-surface/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:bg-dark-elevated transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* 5-Star Glowing Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (t.rating || 5)
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]'
                              : 'fill-transparent text-white/20'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>

                {/* Client Info & Verified Badge */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-display font-extrabold text-xs flex items-center justify-center shadow-md shadow-primary/30 flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">{t.role}, {t.company}</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second Group (Identical clone for seamless looping) */}
          <div className="flex gap-6 px-3 pr-3" aria-hidden="true">
            {PORTFOLIO_DATA.testimonials.map((t, index) => (
              <div
                key={`group2-${t.name}-${index}`}
                className="w-[340px] sm:w-[400px] flex-shrink-0 bg-dark-surface/90 backdrop-blur-xl border border-white/10 hover:border-primary/50 rounded-3xl p-7 sm:p-8 flex flex-col justify-between hover:bg-dark-elevated transition-all duration-300 shadow-xl shadow-black/40 hover:-translate-y-1.5 group"
              >
                <div>
                  {/* 5-Star Glowing Rating & Quote Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (t.rating || 5)
                              ? 'fill-amber-400 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]'
                              : 'fill-transparent text-white/20'
                          }`}
                        />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-primary/30 group-hover:text-primary transition-colors" />
                  </div>

                  {/* Review Text */}
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                </div>

                {/* Client Info & Verified Badge */}
                <div className="flex items-center justify-between border-t border-white/10 pt-5 mt-auto">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-display font-extrabold text-xs flex items-center justify-center shadow-md shadow-primary/30 flex-shrink-0">
                      {t.avatar}
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-xs text-slate-400 font-medium">{t.role}, {t.company}</p>
                    </div>
                  </div>

                  <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Verified</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Prompt Hint */}
      <div className="text-center mt-6">
        <span className="text-[11px] text-slate-500 font-medium inline-flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-primary" />
          <span>Hover over any review to pause the stream • Drag or use arrows to slide</span>
        </span>
      </div>
    </section>
  );
}
