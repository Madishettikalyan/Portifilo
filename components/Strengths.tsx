'use client';

import React from 'react';
import { Star, Sparkles, Target, Sliders, BookOpen, ShieldCheck } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

const strengthIcons = [Sparkles, Target, Sliders, BookOpen, ShieldCheck];

export default function Strengths() {
  return (
    <section className="py-24 relative" id="strengths">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <Star className="w-3.5 h-3.5" />
            <span>COMPETITIVE ADVANTAGE</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            My Core <span className="text-gradient">Strengths</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Why brands, startups, and agencies trust my design execution across fast-paced commercial projects.
          </p>
        </div>

        {/* Strengths 5-Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {PORTFOLIO_DATA.strengths.map((strength, index) => {
            const Icon = strengthIcons[index] || Sparkles;
            return (
              <div
                key={strength.title}
                className="bg-dark-surface border border-white/10 rounded-2xl p-6 flex flex-col justify-between hover:border-primary/50 hover:bg-dark-elevated transition-all duration-300 hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${strength.colorClass}`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2">{strength.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{strength.description}</p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-[11px] font-bold text-slate-400 mb-1.5">
                    <span>{strength.label}</span>
                    <span>{strength.percent}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${strength.percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
