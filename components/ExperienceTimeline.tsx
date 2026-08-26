'use client';

import React from 'react';
import { Briefcase, Laptop, Award, Cpu } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function ExperienceTimeline() {
  return (
    <section className="py-24 relative" id="experience">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>CAREER & MASTERY</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            5+ Years of <span className="text-gradient">Creative Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Over the years, I have worked on a wide range of creative projects, developing designs for brands, products, digital campaigns, promotional materials, and marketing content.
          </p>
        </div>

        {/* 2-Column Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left: Timeline Milestones */}
          <div className="lg:col-span-7">
            <h3 className="font-display font-bold text-xl text-white mb-8 flex items-center gap-3">
              <Award className="w-5 h-5 text-primary" />
              <span>Career Milestones</span>
            </h3>

            <div className="relative pl-8 border-l border-white/10 space-y-8">
              {PORTFOLIO_DATA.timeline.map((item) => (
                <div key={item.year} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-dark-bg border-2 border-primary shadow-[0_0_10px_#6366f1] group-hover:scale-125 transition-transform" />

                  <div className="bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-primary/40 hover:bg-dark-elevated transition-all">
                    <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-primary/15 text-primary border border-primary/20 mb-3">
                      {item.year}
                    </span>
                    <h4 className="font-display font-bold text-lg text-white mb-1">{item.role}</h4>
                    <span className="text-xs font-semibold text-slate-400 block mb-3">{item.company}</span>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Design Arsenal & Skill Progress Bars */}
          <div className="lg:col-span-5 bg-dark-surface border border-white/10 rounded-3xl p-8 shadow-2xl">
            <h3 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-3">
              <Laptop className="w-5 h-5 text-secondary" />
              <span>Design Arsenal & Tools</span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
              Deep hands-on proficiency with industry-standard creative software, vector composition, pre-press standards, and next-gen AI tools.
            </p>

            {/* Skill Meters */}
            <div className="space-y-5 mb-8">
              {PORTFOLIO_DATA.skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between text-xs font-semibold text-slate-300 mb-1.5">
                    <span>{skill.name}</span>
                    <span className="text-primary font-bold">{skill.percent}%</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Tool Pills */}
            <div className="border-t border-white/10 pt-6">
              <span className="text-xs font-bold text-slate-400 block mb-3 uppercase tracking-wider">
                Tools & Capabilities
              </span>
              <div className="flex flex-wrap gap-2">
                {PORTFOLIO_DATA.toolPills.map((pill) => (
                  <span
                    key={pill}
                    className="text-xs font-medium px-3 py-1.5 rounded-full bg-dark-elevated border border-white/10 text-slate-300 hover:border-primary/50 hover:text-white transition-colors"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
