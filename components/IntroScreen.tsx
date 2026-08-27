'use client';

import React, { useState, useEffect } from 'react';
import { Fingerprint, Unlock, Activity, ShieldCheck, Zap } from 'lucide-react';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [isGranted, setIsGranted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    
    // Force scroll to top on every refresh
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
    
    // Lock scrolling while intro is visible
    document.body.style.overflow = 'hidden';

    // Cleanup in case of unmount
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  const handleScan = () => {
    if (isScanning || isGranted) return;
    setIsScanning(true);

    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance("Access Granted. Welcome, Madishetti Kalyan.");
      msg.rate = 0.9;
      msg.pitch = 1.1;
      window.speechSynthesis.speak(msg);
    }

    setTimeout(() => {
      setIsScanning(false);
      setIsGranted(true);
      
      // Unlock scrolling as the intro fades out
      document.body.style.overflow = '';
      
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('introSeen', 'true');
      }, 2000);
    }, 3000); // 3 seconds scanning time for more suspense
  };

  if (!hasMounted || !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#07090e] flex items-center justify-center transition-all duration-1000 ${isGranted ? 'opacity-0 scale-105 pointer-events-none delay-1000' : 'opacity-100 scale-100'}`}>
      
      {/* Drifting Sky Container */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ animation: 'sky-drift 40s ease-in-out infinite' }}>
        {/* Dynamic Animated Background Grids & Gradients */}
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-15 bg-center scale-110" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#07090e] opacity-90 scale-110" />
      </div>
      
      {/* Moving Planets (Grahalu) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Planet 1 - Large distant purple/indigo planet */}
        <div 
          className="absolute -left-20 top-20 w-72 h-72 rounded-full opacity-40 mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle at 30% 30%, rgba(99,102,241,0.4), rgba(7,9,14,1) 70%)',
            boxShadow: 'inset -20px -20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.2)',
            animation: 'float-planet-1 15s ease-in-out infinite'
          }}
        />
        
        {/* Planet 2 - Medium emerald/teal gas giant on the right */}
        <div 
          className="absolute -right-10 bottom-20 w-48 h-48 rounded-full opacity-30 mix-blend-screen"
          style={{ 
            background: 'radial-gradient(circle at 20% 40%, rgba(16,185,129,0.5), rgba(7,9,14,1) 80%)',
            boxShadow: 'inset -15px -15px 30px rgba(0,0,0,0.8)',
            animation: 'float-planet-2 18s ease-in-out infinite reverse'
          }}
        />

        {/* Planet 3 - Small distant moon */}
        <div 
          className="absolute right-1/4 top-1/4 w-12 h-12 rounded-full opacity-50 mix-blend-screen blur-[1px]"
          style={{ 
            background: 'radial-gradient(circle at 40% 40%, rgba(168,85,247,0.6), rgba(7,9,14,1) 70%)',
            boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.8)',
            animation: 'float-planet-1 22s ease-in-out infinite'
          }}
        />
      </div>
      
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }} />
      
      {/* HUD Elements - Top */}
      <div className="absolute top-6 left-6 text-[10px] sm:text-xs font-mono text-primary/80 tracking-widest flex items-center gap-2 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
        <Activity className="w-4 h-4 text-primary animate-pulse" />
        QUANTUM_GATEWAY // SECURE
      </div>
      <div className="absolute top-6 right-6 text-[10px] sm:text-xs font-mono text-primary/80 tracking-widest flex items-center gap-2 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]">
        <Zap className="w-4 h-4 text-emerald-400" />
        SYSTEM // V2.0
      </div>

      {/* Center Scanner */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Scanner Circle Container */}
        <div className="relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center mb-10">
          
          {/* Glowing Corner Brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary shadow-[-5px_-5px_15px_rgba(99,102,241,0.4)]" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary shadow-[5px_-5px_15px_rgba(99,102,241,0.4)]" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary shadow-[-5px_5px_15px_rgba(99,102,241,0.4)]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary shadow-[5px_5px_15px_rgba(99,102,241,0.4)]" />

          {/* Holographic Rotating Rings */}
          <div className={`absolute inset-4 rounded-full border-2 border-primary/20 border-t-primary shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100 scale-105' : 'opacity-60 scale-100'}`} style={{ animationDuration: isScanning ? '1s' : '4s' }} />
          
          <div className={`absolute inset-8 rounded-full border border-secondary/30 border-b-secondary shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100 scale-95' : 'opacity-50 scale-100'}`} style={{ animationDuration: isScanning ? '1.5s' : '5s', animationDirection: 'reverse' }} />
          
          <div className={`absolute inset-12 rounded-full border-2 border-dashed border-primary/40 transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100 scale-110' : 'opacity-30 scale-100'}`} style={{ animationDuration: isScanning ? '3s' : '10s' }} />
          
          {/* Inner Glowing Pulse (breathing effect) */}
          <div className={`absolute inset-20 rounded-full bg-primary/5 blur-md transition-all duration-700 ${isScanning ? 'bg-primary/20 animate-pulse scale-110' : 'animate-[pulseRipple_3s_infinite]'}`} />

          {/* Fingerprint Button */}
          <button 
            onClick={handleScan}
            disabled={isScanning || isGranted}
            className={`relative z-20 w-36 h-36 rounded-full flex flex-col items-center justify-center transition-all duration-500 outline-none
              ${isGranted ? 'bg-emerald-500/20 shadow-[0_0_60px_rgba(16,185,129,0.5)] scale-110 border border-emerald-500/50' : 'hover:bg-primary/10 border border-transparent hover:border-primary/30'}
              ${isScanning ? 'scale-90 shadow-[0_0_30px_rgba(99,102,241,0.6)]' : 'scale-100 cursor-pointer'}
            `}
          >
            {isGranted ? (
              <ShieldCheck className="w-14 h-14 text-emerald-400 mb-2 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
            ) : (
              <Fingerprint className={`w-16 h-16 transition-all duration-300 ${isScanning ? 'text-primary drop-shadow-[0_0_15px_#6366f1] animate-pulse' : 'text-primary/80 drop-shadow-[0_0_5px_#6366f1]'} mb-2`} />
            )}
            
            <div className={`text-[10px] sm:text-xs font-mono tracking-[0.3em] font-bold drop-shadow-md ${isGranted ? 'text-emerald-400' : 'text-white'}`}>
              {isGranted ? 'GRANTED' : isScanning ? 'ANALYZING' : 'SCAN ID'}
            </div>
            
            {!isGranted && !isScanning && (
              <div className="text-[7.5px] font-mono text-primary/60 tracking-widest mt-2 animate-pulse">
                TOUCH TO INITIATE
              </div>
            )}
          </button>
          
          {/* High-Tech Scanning Line Overlay */}
          {isScanning && (
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-full">
              <div className="w-full h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_20px_#22d3ee] animate-[scan_1.5s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* User Identity Text with Glitch/Glow */}
        <div className="text-center font-mono space-y-4 relative z-20">
          <h1 className={`text-base sm:text-xl font-bold tracking-[0.3em] sm:tracking-[0.5em] transition-all duration-700 uppercase 
            ${isGranted ? 'text-emerald-400 drop-shadow-[0_0_10px_#34d399]' : 'text-transparent bg-clip-text bg-gradient-to-r from-white via-primary to-secondary drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]'}`}
          >
            Madishetti Kalyan
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
            <p className="text-[9px] sm:text-[11px] text-primary/70 tracking-[0.4em] uppercase font-semibold">
              Creative Visual Designer
            </p>
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
          </div>
        </div>
      </div>
      
      {/* Decorative lines */}
      <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent hidden lg:block" />
      
      {/* Bottom Data Stream */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[8px] sm:text-[10px] font-mono text-primary/40 tracking-widest uppercase flex gap-4">
        <span>SYS_AUTH_READY</span>
        <span className="hidden sm:inline">|</span>
        <span className="hidden sm:inline">{new Date().toISOString()}</span>
      </div>
      
    </div>
  );
}
