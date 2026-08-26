'use client';

import React from 'react';
import { ArrowUp, Mail, Phone, MessageCircle } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Footer() {
  return (
    <footer className="bg-black/90 border-t border-white/10 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="md:col-span-5">
            <h3 className="font-display font-extrabold text-xl text-white tracking-wide mb-2">
              {PORTFOLIO_DATA.personalInfo.name}
            </h3>
            <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-3">
              Graphic Designer • Creative Thinker • Visual Storyteller
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Transforming ideas into impossible-to-ignore visual experiences through modern aesthetics, typography, and storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#about" className="hover:text-primary transition-colors">About & Philosophy</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Core Specializations</a></li>
              <li><a href="#strengths" className="hover:text-primary transition-colors">My Strengths</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Featured Works</a></li>
              <li><a href="#motion" className="hover:text-primary transition-colors">Motion Lab & Videos</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience & Tools</a></li>
            </ul>
          </div>

          {/* Direct Connection */}
          <div className="md:col-span-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider mb-4">Direct Connection</h4>
            <div className="flex flex-col gap-2.5 mb-4">
              <a
                href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4 text-primary" />
                <span>{PORTFOLIO_DATA.personalInfo.email}</span>
              </a>

              <a
                href="https://wa.me/918179157002"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-emerald-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>+91 8179157002 (WhatsApp & Call)</span>
              </a>
            </div>

            <div className="flex gap-2 pt-2">
              {[
                { name: 'WhatsApp', url: 'https://wa.me/918179157002' },
                { name: 'Behance', url: PORTFOLIO_DATA.personalInfo.socials.behance },
                { name: 'Dribbble', url: PORTFOLIO_DATA.personalInfo.socials.dribbble },
                { name: 'LinkedIn', url: PORTFOLIO_DATA.personalInfo.socials.linkedin },
                { name: 'Instagram', url: PORTFOLIO_DATA.personalInfo.socials.instagram },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full bg-dark-elevated border border-white/10 text-[11px] font-semibold text-slate-400 hover:text-white hover:border-primary/50 transition-all"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Madishetti Kalyan. All rights reserved. Crafted with passion & precision.</p>
          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-primary font-semibold transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
