'use client';

import React, { useState } from 'react';
import { Play, Film, Smartphone, Sparkles, Clock, Eye, ExternalLink, Video } from 'lucide-react';
import { PORTFOLIO_DATA, VideoItem } from '@/data/portfolioData';
import VideoModal from './VideoModal';

export default function VideoShowcase() {
  const [activeTab, setActiveTab] = useState<'all' | 'short' | 'long'>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const filteredVideos = PORTFOLIO_DATA.videos.filter((v) => {
    if (activeTab === 'all') return true;
    return v.type === activeTab;
  });

  const shortCount = PORTFOLIO_DATA.videos.filter((v) => v.type === 'short').length;
  const longCount = PORTFOLIO_DATA.videos.filter((v) => v.type === 'long').length;

  return (
    <section className="py-24 relative bg-dark-bg/60 border-t border-white/5" id="motion">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-bold uppercase tracking-wider mb-4">
            <Video className="w-3.5 h-3.5" />
            <span>MOTION DESIGN & VIDEO LAB</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
            Creative Visuals <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-primary to-coral">
              In Motion.
            </span>
          </h2>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Transforming static ideas into dynamic storytelling. Explore high-tempo vertical Reels for social blitzes and 4K widescreen commercial brand films.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2.5 rounded-full font-display font-bold text-xs transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>All Videos ({PORTFOLIO_DATA.videos.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('short')}
              className={`px-5 py-2.5 rounded-full font-display font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'short'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Shorts & Reels ({shortCount})</span>
            </button>

            <button
              onClick={() => setActiveTab('long')}
              className={`px-5 py-2.5 rounded-full font-display font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                activeTab === 'long'
                  ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <Film className="w-3.5 h-3.5" />
              <span>Long Commercials ({longCount})</span>
            </button>
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {filteredVideos.map((vid) => {
            const isShort = vid.aspectRatio === '9:16';

            return (
              <div
                key={vid.id}
                onClick={() => setSelectedVideo(vid)}
                className={`group bg-dark-surface border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between ${
                  !isShort ? 'sm:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Media Artwork / Video Frame Container */}
                <div className={`relative w-full overflow-hidden bg-black ${isShort ? 'h-80 sm:h-96' : 'h-56 sm:h-72'}`}>
                  {/* Poster / Thumbnail Image */}
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />

                  {/* Dark vignette overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-surface via-transparent to-black/60" />

                  {/* Duration & Aspect Ratio Badges */}
                  <div className="absolute top-4 inset-x-4 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-lg">
                      {isShort ? <Smartphone className="w-3 h-3 text-secondary" /> : <Film className="w-3 h-3 text-primary" />}
                      <span>{isShort ? '9:16 Reel' : '16:9 Film'}</span>
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold text-slate-200 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{vid.duration}</span>
                    </span>
                  </div>

                  {/* Central Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-2xl shadow-primary/50 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                      <Play className="w-6 h-6 fill-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Bottom Stats / Category overlay */}
                  <div className="absolute bottom-3 inset-x-4 flex items-center justify-between text-[11px] font-bold text-slate-300 pointer-events-none">
                    <span className="truncate text-primary">{vid.category}</span>
                    {vid.viewsCount && (
                      <span className="flex items-center gap-1 text-emerald-400 bg-black/60 px-2 py-0.5 rounded-full">
                        <Eye className="w-3 h-3" />
                        <span>{vid.viewsCount}</span>
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Content & Details */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="font-semibold text-slate-400">{vid.client}</span>
                      <span className="text-slate-500 font-semibold">{vid.year}</span>
                    </div>

                    <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {vid.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed mb-4">
                      {vid.description}
                    </p>
                  </div>

                  {/* Tools / Tags Footer */}
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                      {vid.tools.slice(0, 2).map((tool) => (
                        <span
                          key={tool}
                          className="px-2 py-0.5 rounded-md bg-dark-elevated border border-white/5 text-[10px] font-semibold text-slate-300"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    <span className="text-xs font-bold text-primary flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>Watch</span>
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Video Modal Lightbox */}
      {selectedVideo && (
        <VideoModal
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
        />
      )}
    </section>
  );
}
