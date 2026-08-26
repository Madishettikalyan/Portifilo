'use client';

import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize, Film, Smartphone, Sparkles, Clock, Eye, CheckCircle } from 'lucide-react';
import { VideoItem } from '@/data/portfolioData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!video) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === ' ' && videoRef.current) {
        e.preventDefault();
        togglePlay();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [video, onClose]);

  if (!video) return null;

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration || 1;
      setProgress((current / total) * 100);
    }
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-5xl max-h-[92vh] bg-dark-surface border border-white/15 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 border border-white/15 text-slate-300 hover:text-white hover:bg-rose-500/20 hover:border-rose-500/50 transition-all cursor-pointer"
          aria-label="Close video player"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Column */}
        <div className={`relative bg-black flex items-center justify-center overflow-hidden ${
          video.aspectRatio === '9:16' ? 'lg:w-[42%] min-h-[400px] sm:min-h-[520px]' : 'lg:w-[62%] min-h-[320px] sm:min-h-[440px]'
        }`}>
          <video
            ref={videoRef}
            src={video.videoUrl}
            poster={video.thumbnail}
            autoPlay
            loop
            playsInline
            onTimeUpdate={handleTimeUpdate}
            className={`w-full h-full object-contain cursor-pointer ${video.aspectRatio === '9:16' ? 'max-h-[75vh]' : ''}`}
            onClick={togglePlay}
          />

          {/* Video Controls Bar */}
          <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col gap-2">
            {/* Scrubber */}
            <div className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Buttons Row */}
            <div className="flex items-center justify-between text-white text-xs">
              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-[11px] font-mono text-slate-300">
                  {video.duration}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-slate-300">
                  {video.aspectRatio === '9:16' ? 'Reel 9:16' : 'Widescreen 16:9'}
                </span>
                <button
                  onClick={toggleFullScreen}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Maximize className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Video Metadata & Story Column */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto flex flex-col justify-between max-h-[480px] lg:max-h-[85vh]">
          <div>
            {/* Category & Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-xs">
                {video.category}
              </span>
              <span className="text-xs text-slate-400 font-semibold">• {video.year}</span>
            </div>

            {/* Title */}
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white mb-4 leading-snug">
              {video.title}
            </h2>

            {/* Description */}
            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              {video.description}
            </p>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3.5 rounded-2xl bg-dark-elevated border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Client / Project</span>
                <span className="text-xs sm:text-sm font-semibold text-white truncate block">{video.client}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-dark-elevated border border-white/10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">Performance</span>
                <span className="text-xs sm:text-sm font-semibold text-emerald-400 block">{video.viewsCount || 'Featured Showcase'}</span>
              </div>
            </div>

            {/* Tools Used */}
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Motion Software & Plugins
              </span>
              <div className="flex flex-wrap gap-2">
                {video.tools.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg bg-dark-elevated border border-white/10 text-xs font-semibold text-slate-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                Tags & Style
              </span>
              <div className="flex flex-wrap gap-1.5">
                {video.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between">
            <span className="text-xs text-slate-400">Want similar motion visuals?</span>
            <a
              href="#contact"
              onClick={onClose}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-display font-bold text-xs hover:shadow-lg hover:shadow-primary/30 transition-all"
            >
              Discuss Video Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
