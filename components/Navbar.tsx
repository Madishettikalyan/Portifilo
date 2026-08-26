'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ['about', 'services', 'strengths', 'portfolio', 'motion', 'experience', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-dark-bg/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50'
          : 'py-5 bg-dark-bg/60 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-3.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center font-display font-extrabold text-lg text-white shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            MK
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-sm tracking-wide text-white group-hover:text-primary transition-colors">
              MADISHETTI KALYAN
            </span>
            <span className="text-[10px] font-semibold text-primary tracking-widest uppercase">
              Creative Visual Designer
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-7">
          {[
            { label: 'About', href: '#about', id: 'about' },
            { label: 'Services', href: '#services', id: 'services' },
            { label: 'Strengths', href: '#strengths', id: 'strengths' },
            { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
            { label: 'Motion Lab', href: '#motion', id: 'motion' },
            { label: 'Experience', href: '#experience', id: 'experience' },
          ].map((link) => (
            <a
              key={link.id}
              href={link.href}
              className={`text-sm font-medium transition-colors relative py-1 ${
                activeSection === link.id ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              )}
            </a>
          ))}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white text-xs font-bold font-display shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Hire Kalyan</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-dark-surface border border-white/10 text-slate-300 hover:text-white md:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-surface/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          {[
            { label: 'About & Philosophy', href: '#about', id: 'about' },
            { label: 'Services (10 Disciplines)', href: '#services', id: 'services' },
            { label: 'Core Strengths', href: '#strengths', id: 'strengths' },
            { label: 'Design Portfolio (9 Case Studies)', href: '#portfolio', id: 'portfolio' },
            { label: 'Motion Lab (Shorts & Long Films)', href: '#motion', id: 'motion' },
            { label: 'Experience & Milestones', href: '#experience', id: 'experience' },
            { label: 'Contact & Project Inquiry', href: '#contact', id: 'contact' },
          ].map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-semibold text-slate-200 hover:text-primary py-2 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}

          <div className="border-t border-white/10 pt-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-semibold">
              <span className="pulse-dot" />
              <span>Available for new freelance & full-time roles</span>
            </div>
            <p className="text-xs text-slate-500">{PORTFOLIO_DATA.personalInfo.email}</p>
          </div>
        </div>
      )}
    </header>
  );
}
