'use client';

import React, { useState } from 'react';
import { MessageCircle, Phone, Sparkles, X } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function WhatsAppWidget() {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/918179157002?text=${encodeURIComponent(
    'Hi Kalyan, I saw your creative design portfolio and would like to discuss a project!'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 pointer-events-auto">
      {/* Floating Mini Prompt Balloon */}
      {showTooltip && (
        <div className="bg-dark-surface border border-emerald-500/30 rounded-2xl p-3 pr-8 shadow-2xl shadow-emerald-500/20 backdrop-blur-xl relative animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[220px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 p-1 text-slate-400 hover:text-white rounded-full hover:bg-white/10"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-center gap-1.5 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">
              Online on WhatsApp
            </span>
          </div>
          <p className="text-xs text-white font-semibold leading-tight">
            Have a project? Chat directly with Kalyan!
          </p>
          <span className="text-[11px] text-slate-400 font-mono mt-1 block">
            +91 8179157002
          </span>
        </div>
      )}

      {/* Pulsing WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-2.5 px-4 py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-display font-bold text-xs sm:text-sm shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp +91 8179157002"
      >
        {/* Glow Ring */}
        <div className="absolute -inset-1 bg-emerald-500 rounded-full blur-md opacity-40 group-hover:opacity-80 animate-pulse transition-opacity pointer-events-none" />

        {/* WhatsApp Icon */}
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-white text-emerald-500" />
        </div>

        {/* Text */}
        <div className="relative flex flex-col items-start leading-none">
          <span className="text-xs font-extrabold text-white">WhatsApp</span>
          <span className="text-[10px] text-emerald-100 font-mono mt-0.5">8179157002</span>
        </div>
      </a>
    </div>
  );
}
