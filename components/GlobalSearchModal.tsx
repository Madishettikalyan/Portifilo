'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Palette, Video, Sparkles, ArrowRight, ExternalLink, Command, CornerDownLeft } from 'lucide-react';
import { PORTFOLIO_DATA, Project, VideoItem } from '@/data/portfolioData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProject: (p: Project) => void;
  onSelectVideo: (v: VideoItem) => void;
}

export default function GlobalSearchModal({
  isOpen,
  onClose,
  onSelectProject,
  onSelectVideo,
}: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  // Search in Projects
  const matchedProjects = PORTFOLIO_DATA.projects.filter((p) => {
    if (!cleanQuery) return true;
    return (
      p.title.toLowerCase().includes(cleanQuery) ||
      p.category.toLowerCase().includes(cleanQuery) ||
      p.client.toLowerCase().includes(cleanQuery) ||
      p.deliverables.toLowerCase().includes(cleanQuery) ||
      p.tools.some((t) => t.toLowerCase().includes(cleanQuery)) ||
      p.overview.toLowerCase().includes(cleanQuery)
    );
  });

  // Search in Videos
  const matchedVideos = PORTFOLIO_DATA.videos.filter((v) => {
    if (!cleanQuery) return true;
    return (
      v.title.toLowerCase().includes(cleanQuery) ||
      v.category.toLowerCase().includes(cleanQuery) ||
      v.client.toLowerCase().includes(cleanQuery) ||
      v.tags.some((t) => t.toLowerCase().includes(cleanQuery)) ||
      v.tools.some((t) => t.toLowerCase().includes(cleanQuery)) ||
      v.description.toLowerCase().includes(cleanQuery)
    );
  });

  // Search in Services
  const matchedServices = PORTFOLIO_DATA.services.filter((s) => {
    if (!cleanQuery) return false;
    return (
      s.title.toLowerCase().includes(cleanQuery) ||
      s.description.toLowerCase().includes(cleanQuery) ||
      s.tags.some((t) => t.toLowerCase().includes(cleanQuery))
    );
  });

  const totalResults =
    (cleanQuery ? matchedProjects.length : matchedProjects.slice(0, 4).length) +
    (cleanQuery ? matchedVideos.length : matchedVideos.slice(0, 3).length) +
    matchedServices.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Backdrop click to dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-dark-surface border border-white/15 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3 bg-dark-elevated">
          <Search className="w-5 h-5 text-primary flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search projects, logos, packaging, reels, tools (e.g. Photoshop, AURA)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder:text-slate-400 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-slate-400 hover:text-white flex-shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Search Results Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6 flex-1">
          {/* Quick Suggestions when empty */}
          {!query && (
            <div className="mb-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                Popular Searches
              </span>
              <div className="flex flex-wrap gap-2">
                {['Brand Identity', 'Photoshop', 'Packaging', 'Social Media', '3D Motion', 'AI Visuals', 'AURA'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1 rounded-full bg-dark-elevated border border-white/10 text-xs font-semibold text-slate-300 hover:text-white hover:border-primary/50 transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {totalResults === 0 && query && (
            <div className="py-12 text-center">
              <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <p className="text-sm font-semibold text-white mb-1">No matching results found for &ldquo;{query}&rdquo;</p>
              <p className="text-xs text-slate-400">Try searching for keywords like &ldquo;Logo&rdquo;, &ldquo;Reels&rdquo;, &ldquo;Illustrator&rdquo;, or &ldquo;Posters&rdquo;.</p>
            </div>
          )}

          {/* Group 1: Graphic Design Projects */}
          {matchedProjects.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1.5">
                  <Palette className="w-3.5 h-3.5" />
                  <span>Design Projects ({matchedProjects.length})</span>
                </span>
              </div>

              <div className="space-y-2">
                {(cleanQuery ? matchedProjects : matchedProjects.slice(0, 4)).map((proj) => (
                  <div
                    key={proj.id}
                    onClick={() => {
                      onClose();
                      onSelectProject(proj);
                    }}
                    className="p-3 rounded-2xl bg-dark-elevated hover:bg-dark-bg border border-white/5 hover:border-primary/40 flex items-center justify-between gap-4 cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10">
                        {proj.image ? (
                          <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full bg-gradient-to-tr ${proj.bgGradient}`} />
                        )}
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-primary transition-colors truncate">
                          {proj.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{proj.client}</span>
                          <span>•</span>
                          <span className="text-slate-500">{proj.category}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-white/5 text-[10px] font-semibold text-slate-300">
                        {proj.year}
                      </span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 2: Motion & Video Works */}
          {matchedVideos.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-secondary flex items-center gap-1.5">
                  <Video className="w-3.5 h-3.5" />
                  <span>Motion & Videos ({matchedVideos.length})</span>
                </span>
              </div>

              <div className="space-y-2">
                {(cleanQuery ? matchedVideos : matchedVideos.slice(0, 3)).map((vid) => (
                  <div
                    key={vid.id}
                    onClick={() => {
                      onClose();
                      onSelectVideo(vid);
                    }}
                    className="p-3 rounded-2xl bg-dark-elevated hover:bg-dark-bg border border-white/5 hover:border-secondary/40 flex items-center justify-between gap-4 cursor-pointer group transition-all"
                  >
                    <div className="flex items-center gap-3.5 overflow-hidden">
                      <div className="w-12 h-12 rounded-xl overflow-hidden bg-black flex-shrink-0 border border-white/10 relative">
                        <img src={vid.thumbnail} alt={vid.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                          <span className="text-[9px] font-bold text-white font-mono">{vid.duration}</span>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <h4 className="font-display font-bold text-sm text-white group-hover:text-secondary transition-colors truncate">
                          {vid.title}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-slate-400">
                          <span>{vid.category}</span>
                          <span>•</span>
                          <span className="text-slate-500">{vid.aspectRatio === '9:16' ? 'Reel 9:16' : '16:9 Film'}</span>
                        </div>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-secondary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Group 3: Services & Offerings */}
          {matchedServices.length > 0 && (
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-coral flex items-center gap-1.5 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Services & Expertise ({matchedServices.length})</span>
              </span>

              <div className="space-y-2">
                {matchedServices.map((srv) => (
                  <a
                    key={srv.id}
                    href="#services"
                    onClick={onClose}
                    className="p-3 rounded-2xl bg-dark-elevated hover:bg-dark-bg border border-white/5 hover:border-coral/40 flex items-center justify-between gap-4 group transition-all block"
                  >
                    <div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-coral transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{srv.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-coral group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Keyboard Shortcut Guide */}
        <div className="p-3.5 px-6 bg-dark-elevated border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-white">ESC</kbd> to close
            </span>
            <span className="hidden sm:inline-flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 font-mono text-[10px] text-white">Ctrl + K</kbd> anywhere
            </span>
          </div>
          <span>Madishetti Kalyan Portfolio</span>
        </div>
      </div>
    </div>
  );
}
