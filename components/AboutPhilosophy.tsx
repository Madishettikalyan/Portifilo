'use client';

import React from 'react';
import { Quote, Lightbulb, Compass, Layers, GitFork } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function AboutPhilosophy() {
  return (
    <section className="py-24 relative" id="about">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <Lightbulb className="w-3.5 h-3.5" />
            <span>DESIGN PHILOSOPHY & VISION</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Turning Ideas Into <span className="text-gradient">Meaningful Visuals</span>
          </h2>
        </div>

        {/* Philosophy Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left: Signature Quote Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-indigo-950/40 via-purple-950/20 to-dark-surface border border-primary/30 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl shadow-primary/10">
            <div>
              <Quote className="w-12 h-12 text-primary/40 mb-6" />
              <blockquote className="font-display font-bold text-2xl sm:text-3xl text-white leading-snug mb-6">
                “Design is not just about making things look good — it’s about making ideas <span className="text-purple-400 underline decoration-primary underline-offset-4">impossible to ignore</span>.”
              </blockquote>
            </div>

            <div className="border-t border-white/10 pt-6">
              <h3 className="font-display font-bold text-base text-white">{PORTFOLIO_DATA.personalInfo.name}</h3>
              <p className="text-xs text-slate-400">Graphic Designer & Creative Thinker</p>
            </div>
          </div>

          {/* Right: 3 Design Approach Cards */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-primary/40 hover:bg-dark-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5">Concept Before Canvas</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    Every project is an opportunity to create something unique. I focus on understanding the concept, audience, and purpose behind a design before turning it into a strong visual.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-primary/40 hover:bg-dark-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-secondary/10 border border-secondary/30 flex items-center justify-center text-secondary shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5">Modern Aesthetics & Storytelling</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    My design approach combines fresh creativity, visual storytelling, modern typography, and meticulous attention to detail to ensure your message connects authentically.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-dark-surface border border-white/10 rounded-2xl p-6 sm:p-7 hover:border-primary/40 hover:bg-dark-elevated transition-all">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-coral/10 border border-coral/30 flex items-center justify-center text-coral shrink-0">
                  <GitFork className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-white mb-1.5">Cross-Platform Consistency</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    From billboard key visuals and product packaging to social media carousels and digital marketing ads, I create cohesive visual identities that stay memorable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Creative Workflow */}
        <div className="bg-dark-surface/80 border border-white/10 rounded-3xl p-8 sm:p-12">
          <h3 className="font-display font-bold text-xl text-center text-white mb-10">
            My 4-Step Creative Workflow
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover & Brief', desc: 'Understanding goals, target audience, brand voice, and competition.' },
              { num: '02', title: 'Conceptualize', desc: 'Moodboarding, creative brainstorming, and disruptive layout angles.' },
              { num: '03', title: 'Craft & Refine', desc: 'Pixel-perfect execution in Photoshop, Illustrator, and typography styling.' },
              { num: '04', title: 'Deliver & Impact', desc: 'Production-ready export, print prepress, and multi-format collateral assets.' },
            ].map((step) => (
              <div key={step.num} className="relative group">
                <span className="font-display font-extrabold text-3xl text-primary/30 group-hover:text-primary transition-colors block mb-2">
                  {step.num}
                </span>
                <h4 className="font-display font-bold text-base text-white mb-2">{step.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
