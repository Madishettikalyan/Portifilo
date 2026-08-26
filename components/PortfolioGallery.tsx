'use client';

import React, { useState } from 'react';
import { Palette, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';
import CaseStudyModal from './CaseStudyModal';

const categories = [
  { slug: 'all', label: 'All Works' },
  { slug: 'brand-identity', label: 'Brand Identity' },
  { slug: 'social-media', label: 'Social Media' },
  { slug: 'posters-ads', label: 'Posters & Ads' },
  { slug: 'packaging', label: 'Packaging & Print' },
  { slug: 'ai-visuals', label: 'AI Visuals' },
];

export default function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.categorySlug === activeFilter);

  return (
    <section className="py-24 relative" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <Palette className="w-3.5 h-3.5" />
            <span>SELECTED WORKS</span>
          </span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Featured <span className="text-gradient">Design Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            A curated selection of brand identities, advertising campaigns, packaging concepts, and creative visual explorations.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveFilter(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold font-display transition-all ${
                activeFilter === cat.slug
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-dark-surface border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              <span>{cat.label}</span>
              {cat.slug === 'all' && (
                <span className="ml-2 px-1.5 py-0.5 rounded-full bg-white/20 text-[10px]">
                  {PORTFOLIO_DATA.projects.length}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-dark-surface border border-white/10 rounded-3xl overflow-hidden cursor-pointer hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 shadow-xl shadow-black/40 flex flex-col justify-between"
            >
              {/* Media Preview Artwork */}
              <div className="relative w-full h-60 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-full h-full bg-gradient-to-br ${project.bgGradient} flex flex-col items-center justify-center p-6 group-hover:scale-105 transition-transform duration-500`}>
                    <h4 className="font-accent font-extrabold text-2xl text-white tracking-widest text-center">
                      {project.title.split('|')[0]}
                    </h4>
                    <span className="text-[10px] text-slate-300 font-bold tracking-widest uppercase mt-2 opacity-80">
                      {project.heroTag}
                    </span>
                  </div>
                )}

                {/* Overlay Badge */}
                <div className="absolute inset-0 bg-dark-bg/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-primary text-white font-display font-bold text-xs flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <span>View Case Study</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Card Meta Info */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-primary uppercase tracking-wider">{project.category}</span>
                    <span className="text-slate-500 font-semibold">{project.year}</span>
                  </div>

                  <h3 className="font-display font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-5 line-clamp-2">
                    {project.overview}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-4">
                  {project.tools.slice(0, 3).map((tool) => (
                    <span
                      key={tool}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Lightbox */}
        <CaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
