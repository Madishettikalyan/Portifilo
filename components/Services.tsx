'use client';

import React from 'react';
import {
  Shapes,
  Share2,
  Film,
  ShoppingBag,
  TrendingUp,
  Laptop,
  Box,
  Sparkles,
  Type,
  Wand2,
  Boxes
} from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const iconMap: Record<string, React.ElementType> = {
  Shapes,
  Share2,
  Film,
  ShoppingBag,
  TrendingUp,
  Laptop,
  Box,
  Sparkles,
  Type,
  Wand2,
};

export default function Services() {
  return (
    <section className="py-24 relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <Boxes className="w-3.5 h-3.5" />
            <span>CORE SPECIALIZATIONS</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            What I Do <span className="text-gradient">Best</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A comprehensive suite of graphic design and visual creative solutions designed to captivate audiences, strengthen brand loyalty, and drive real business growth.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.services.map((service) => {
            const Icon = iconMap[service.icon] || Shapes;
            return (
              <div
                key={service.id}
                className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 group ${
                  service.highlight
                    ? 'bg-gradient-to-br from-purple-950/40 via-dark-surface to-dark-surface border border-secondary/40 shadow-xl shadow-secondary/10 hover:border-secondary'
                    : 'bg-dark-surface border border-white/10 hover:border-primary/50 hover:bg-dark-elevated shadow-lg'
                } hover:-translate-y-1.5`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all mb-5">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2.5">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
