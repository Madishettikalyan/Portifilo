'use client';

import React, { useEffect } from 'react';
import { X, ArrowRight, FileText, Target, Sparkles, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/portfolioData';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function CaseStudyModal({ project, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-3xl bg-dark-surface border border-primary/40 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-dark-elevated border border-white/10 text-slate-300 hover:text-white hover:bg-rose-600 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Artwork Banner */}
        {project.image ? (
          <div className="w-full h-56 sm:h-72 rounded-2xl overflow-hidden border border-white/10 relative mb-8">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white uppercase tracking-wider">
              {project.heroTag}
            </span>
          </div>
        ) : (
          <div className={`w-full h-56 sm:h-64 rounded-2xl bg-gradient-to-br ${project.bgGradient} border border-white/10 flex flex-col items-center justify-center relative overflow-hidden mb-8 shadow-inner`}>
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-bold text-white uppercase tracking-wider">
              {project.heroTag}
            </span>
            <h2 className="font-accent font-extrabold text-3xl sm:text-4xl text-white tracking-widest uppercase text-center px-4">
              {project.title.split('|')[0]}
            </h2>
            <span className="text-xs text-slate-300 tracking-widest font-semibold mt-2">CASE STUDY SHOWCASE</span>
          </div>
        )}

        {/* Title & Metadata */}
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">{project.category}</span>
          <span className="text-xs text-slate-500">• {project.year}</span>
        </div>
        <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white mb-2">{project.title}</h3>
        <p className="text-xs sm:text-sm text-slate-400 mb-8">
          <strong className="text-slate-200">Client:</strong> {project.client} | <strong className="text-slate-200">Role:</strong> Lead Creative Visual Designer
        </p>

        {/* Content Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-white/10 pt-8">
          {/* Main Case Study Story */}
          <div className="md:col-span-7 flex flex-col gap-6">
            <div>
              <h4 className="font-display font-bold text-sm text-white flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-primary" />
                <span>Project Overview</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.overview}</p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-white flex items-center gap-2 mb-2">
                <Target className="w-4 h-4 text-rose-400" />
                <span>The Creative Challenge</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-white flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-purple-400" />
                <span>The Visual Solution</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>

            <div>
              <h4 className="font-display font-bold text-sm text-white flex items-center gap-2 mb-2">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                <span>Outcome & Impact</span>
              </h4>
              <p className="text-xs sm:text-sm text-emerald-400 font-medium leading-relaxed">{project.impact}</p>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="md:col-span-5 bg-dark-elevated border border-white/10 rounded-2xl p-6 flex flex-col gap-5 h-fit">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1.5">Deliverables</span>
              <p className="text-xs font-semibold text-slate-200 leading-relaxed">{project.deliverables}</p>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Tools & Software</span>
              <div className="flex flex-wrap gap-1.5">
                {project.tools.map((t) => (
                  <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-2">Color Palette</span>
              <div className="flex gap-2">
                {project.palette.map((color) => (
                  <div
                    key={color}
                    className="w-7 h-7 rounded-md border border-white/20 shadow-sm"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={onClose}
              className="mt-3 w-full py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-primary to-secondary flex items-center justify-center gap-2 hover:opacity-95 shadow-lg"
            >
              <span>Start Similar Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
