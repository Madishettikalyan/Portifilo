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
            <div className="relative w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
              <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-[0_0_10px_rgba(99,102,241,0.4)]">
                <rect width="40" height="40" rx="10" fill="currentColor" className="text-primary/10" />
                <rect width="40" height="40" rx="10" stroke="url(#mk-gradient)" strokeWidth="1.5" />
                
                {/* Connected M and K monogram */}
                <path 
                  d="M12 27V13L17.5 19L23 13V27 M23 20L29 13 M23 20L29 27" 
                  stroke="url(#mk-gradient)" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />

                <defs>
                  <linearGradient id="mk-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                </defs>
              </svg>
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
              { label: 'About', href: '#about', id: 'about' },
              { label: 'Services', href: '#services', id: 'services' },
              { label: 'Strengths', href: '#strengths', id: 'strengths' },
              { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
              { label: 'Motion Lab', href: '#motion', id: 'motion' },
              { label: 'Experience', href: '#experience', id: 'experience' },
              { label: 'Contact', href: '#contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="group/nav flex flex-col items-center py-2 transition-all relative text-white"
              >
                <span
                  className={`text-base font-bold tracking-wide transition-colors ${
                    activeSection === link.id ? 'text-white font-extrabold' : 'text-white/80 group-hover/nav:text-white'
                  }`}
                >
                  {link.label}
                </span>
                {activeSection === link.id && (
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full shadow-md shadow-primary/50" />
                )}
              </a>
            ))}
          </nav>

          {/* Right Action & Search Trigger */}
          <div className="flex items-center gap-3">
            {/* Quick Search Button */}
            <button
              onClick={() => setSearchOpen(true)}
              className="w-10 h-10 sm:w-56 sm:h-auto px-0 sm:px-6 py-0 sm:py-3 rounded-full bg-dark-surface border border-white/10 hover:border-primary/50 text-white font-semibold flex items-center justify-center sm:justify-start gap-3 transition-all cursor-pointer shadow-sm group"
              title="Search Portfolio"
              aria-label="Search Portfolio"
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-primary group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-base text-white/70 group-hover:text-white">Search...</span>
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
              { label: 'About', href: '#about', id: 'about' },
              { label: 'Services', href: '#services', id: 'services' },
              { label: 'Strengths', href: '#strengths', id: 'strengths' },
              { label: 'Portfolio', href: '#portfolio', id: 'portfolio' },
              { label: 'Motion Lab', href: '#motion', id: 'motion' },
              { label: 'Experience', href: '#experience', id: 'experience' },
              { label: 'Contact', href: '#contact', id: 'contact' },
            ].map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between py-2.5 border-b border-white/5 group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-base font-semibold text-slate-200 group-hover:text-primary transition-colors">
                    {link.label}
                  </span>
                </div>
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
