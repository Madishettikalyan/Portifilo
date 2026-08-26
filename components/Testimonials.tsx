'use client';

import React from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>CLIENT PRAISE</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            What Collaborators <span className="text-gradient">Say</span>
          </h2>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-dark-surface border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:border-primary/40 hover:bg-dark-elevated transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  {t.quote}
                </p>
              </div>

              <div className="flex items-center gap-3.5 border-t border-white/10 pt-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary text-white font-display font-extrabold text-xs flex items-center justify-center">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
