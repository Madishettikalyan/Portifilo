'use client';

import React from 'react';
import { WhatsAppLogo } from './WhatsAppIcon';

export default function WhatsAppWidget() {
  const whatsappUrl = `https://wa.me/918179157002?text=${encodeURIComponent(
    'Hi Kalyan, I saw your creative design portfolio and would like to discuss a project!'
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center pointer-events-auto">
      {/* Sleek Floating WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center p-3 sm:p-4 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7a6d] text-white shadow-xl shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:scale-105 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp +91 8179157002"
        title="Chat with Kalyan on WhatsApp (+91 8179157002)"
      >
        {/* Subtle Glow Ring */}
        <div className="absolute -inset-1 bg-[#25D366] rounded-full blur-md opacity-40 group-hover:opacity-80 animate-pulse transition-opacity pointer-events-none" />

        {/* WhatsApp Official Logo */}
        <div className="relative flex items-center justify-center">
          <WhatsAppLogo className="w-7 h-7 sm:w-8 sm:h-8 fill-white" />
        </div>
      </a>
    </div>
  );
}
