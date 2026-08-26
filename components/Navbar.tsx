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

      const sections = ['about', 'services', 'strengths', 'portfolio', 'experience', 'contact'];
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
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: 'About & Philosophy', href: '#about', id: 'about' },
            { label: 'Services', href: '#services', id: 'services' },
            { label: 'Strengths', href: '#strengths', id: 'strengths' },
            { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
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
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
          >
            <span>Let&apos;s Talk</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2.5 rounded-xl bg-dark-elevated border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-dark-bg/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col justify-between animate-fadeIn z-50">
          <div className="flex flex-col gap-5 pt-4">
            {[
              { label: 'About & Philosophy', href: '#about' },
              { label: 'What I Do (Services)', href: '#services' },
              { label: 'Core Strengths', href: '#strengths' },
              { label: 'Featured Projects', href: '#portfolio' },
              { label: 'Experience & Arsenal', href: '#experience' },
              { label: 'Let’s Create Together', href: '#contact', highlight: true },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-xl font-display font-bold py-2 ${
                  item.highlight ? 'text-primary' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

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
