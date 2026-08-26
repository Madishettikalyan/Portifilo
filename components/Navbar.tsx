'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, Sparkles, Search } from 'lucide-react';
import { PORTFOLIO_DATA, Project, VideoItem } from '@/data/portfolioData';
import GlobalSearchModal from './GlobalSearchModal';
import CaseStudyModal from './CaseStudyModal';
import VideoModal from './VideoModal';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

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

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {[
              { label: 'About', sub: 'Vision & Story', num: '01', href: '#about', id: 'about' },
              { label: 'Services', sub: 'Capabilities', num: '02', href: '#services', id: 'services' },
              { label: 'Strengths', sub: 'Core Impact', num: '03', href: '#strengths', id: 'strengths' },
              { label: 'Portfolio', sub: '9 Projects', num: '04', href: '#portfolio', id: 'portfolio' },
              { label: 'Motion Lab', sub: 'Reels & 4K', num: '05', href: '#motion', id: 'motion' },
              { label: 'Experience', sub: '5+ Yrs Career', num: '06', href: '#experience', id: 'experience' },
              { label: 'Contact', sub: 'Start Project', num: '07', href: '#contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`group/nav flex flex-col items-center py-1 transition-all relative ${
                  activeSection === link.id ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className={`text-[9px] font-mono font-bold transition-colors ${
                      activeSection === link.id ? 'text-primary' : 'text-slate-600 group-hover/nav:text-primary/70'
                    }`}
                  >
                    {link.num}
                  </span>
                  <span
                    className={`text-xs lg:text-sm font-bold tracking-wide transition-colors ${
                      activeSection === link.id ? 'text-white font-extrabold' : 'text-slate-300 group-hover/nav:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                </div>
                <span
                  className={`text-[9px] font-medium tracking-tight transition-colors mt-0.5 ${
                    activeSection === link.id ? 'text-primary' : 'text-slate-500 group-hover/nav:text-slate-400'
                  }`}
                >
                  {link.sub}
                </span>
                {activeSection === link.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md shadow-primary/50" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action & Search Trigger */}
          <div className="flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="px-3 py-2 rounded-full bg-dark-surface border border-white/10 hover:border-primary/50 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-sm group"
              title="Search Portfolio (Ctrl + K)"
              aria-label="Search Portfolio"
            >
              <Search className="w-3.5 h-3.5 text-primary group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs text-slate-400 group-hover:text-slate-200">Search</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono text-slate-400">
                Ctrl K
              </kbd>
            </button>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-dark-surface border border-white/10 text-slate-300 hover:text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-dark-surface/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200 shadow-2xl">
            {/* Mobile Search Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSearchOpen(true);
              }}
              className="w-full p-3 rounded-2xl bg-dark-elevated border border-white/10 text-slate-300 hover:text-white text-sm font-semibold flex items-center gap-3"
            >
              <Search className="w-4 h-4 text-primary" />
              <span>Search projects, videos, tools...</span>
            </button>

            {[
              { label: 'About', sub: 'Vision & Story', num: '01', href: '#about', id: 'about' },
              { label: 'Services', sub: '10 Disciplines', num: '02', href: '#services', id: 'services' },
              { label: 'Strengths', sub: 'Core Impact', num: '03', href: '#strengths', id: 'strengths' },
              { label: 'Portfolio', sub: '9 Selected Works', num: '04', href: '#portfolio', id: 'portfolio' },
              { label: 'Motion Lab', sub: 'Shorts & 4K Films', num: '05', href: '#motion', id: 'motion' },
              { label: 'Experience', sub: '5+ Yrs Journey', num: '06', href: '#experience', id: 'experience' },
              { label: 'Contact', sub: 'Get In Touch', num: '07', href: '#contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 border-b border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-primary">{link.num}</span>
                  <span className="text-base font-semibold text-slate-200 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </div>
                <span className="text-xs text-slate-500 font-medium px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5">
                  {link.sub}
                </span>
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

      {/* Global Spotlight Search Modal */}
      <GlobalSearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectProject={(project) => setSelectedProject(project)}
        onSelectVideo={(video) => setSelectedVideo(video)}
      />

      {/* Direct Case Study View from Search */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Direct Video Player View from Search */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </>
  );
}
