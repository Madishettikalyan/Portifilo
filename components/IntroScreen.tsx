'use client';

import React, { useState, useEffect } from 'react';
import { Fingerprint, Unlock, ShieldAlert } from 'lucide-react';

export default function IntroScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isScanning, setIsScanning] = useState(false);
  const [isGranted, setIsGranted] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    // Uncomment the line below if you only want the intro to show once per session
    // if (sessionStorage.getItem('introSeen')) setIsVisible(false);
  }, []);

  const handleScan = () => {
    if (isScanning || isGranted) return;
    setIsScanning(true);

    // Speak the name
    if ('speechSynthesis' in window) {
      // Try to find a good English voice
      const msg = new SpeechSynthesisUtterance("Access Granted. Welcome, Madishetti Kalyan.");
      msg.rate = 0.9; // Slightly slower for dramatic effect
      msg.pitch = 1.0;
      window.speechSynthesis.speak(msg);
    }

    // Simulate the scanning process
    setTimeout(() => {
      setIsScanning(false);
      setIsGranted(true);
      
      // Wait for the "Access Granted" animation before hiding
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem('introSeen', 'true');
      }, 2000);
    }, 2500); // 2.5 seconds scanning time
  };

  if (!hasMounted || !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-[10000] bg-[#050505] flex items-center justify-center transition-opacity duration-1000 ${isGranted ? 'opacity-0 pointer-events-none delay-1000' : 'opacity-100'}`}>
      
      {/* Sci-fi grid background */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10 bg-center" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#050505] opacity-90" />
      
      {/* HUD Elements - Top */}
      <div className="absolute top-6 left-6 text-[10px] font-mono text-orange-500/70 tracking-widest flex items-center gap-2">
        <div className="w-2 h-2 bg-orange-500 animate-pulse" />
        QUANTUM_GATEWAY
      </div>
      <div className="absolute top-6 right-6 text-[10px] font-mono text-orange-500/70 tracking-widest flex items-center gap-2">
        <div className="w-1 h-1 bg-emerald-500" />
        PORTFOLIO_CORE // V2.0
      </div>

      {/* HUD Elements - Left (Stats) */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-4 font-mono text-[9px] tracking-widest">
        {[
          { label: 'CORE_ENGINE', value: 'ONLINE', color: 'text-emerald-500' },
          { label: 'LATENCY', value: '12ms', color: 'text-orange-500' },
          { label: 'SECURITY', value: 'TIER 1.X', color: 'text-orange-500' },
          { label: 'STATUS', value: 'ARMED', color: 'text-orange-500' },
        ].map((stat, i) => (
          <div key={i} className="flex items-center gap-3 border border-orange-500/20 px-3 py-2 rounded bg-orange-500/5 backdrop-blur-sm">
            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
            <span className="text-orange-500/50 w-24">{stat.label}:</span>
            <span className={`${stat.color} font-bold`}>{stat.value}</span>
          </div>
        ))}
      </div>

      {/* Center Scanner */}
      <div className="relative z-10 flex flex-col items-center">
        
        {/* Scanner Circle Container */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-8">
          
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-orange-500/50" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-orange-500/50" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-orange-500/50" />

          {/* Rotating Rings */}
          <div className={`absolute inset-4 rounded-full border border-orange-500/20 border-t-orange-500/80 transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100' : 'opacity-40'}`} style={{ animationDuration: '2s' }} />
          <div className={`absolute inset-8 rounded-full border border-orange-500/10 border-b-orange-500/60 transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100' : 'opacity-30'}`} style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
          <div className={`absolute inset-12 rounded-full border border-dashed border-orange-500/30 transition-all duration-1000 ${isScanning ? 'animate-spin opacity-100' : 'opacity-20'}`} style={{ animationDuration: '8s' }} />

          {/* Fingerprint Button */}
          <button 
            onClick={handleScan}
            disabled={isScanning || isGranted}
            className={`relative z-20 w-32 h-32 rounded-full flex flex-col items-center justify-center transition-all duration-500 outline-none
              ${isGranted ? 'bg-emerald-500/10 shadow-[0_0_50px_rgba(16,185,129,0.4)]' : 'hover:bg-orange-500/5'}
              ${isScanning ? 'scale-95' : 'scale-100 cursor-pointer'}
            `}
          >
            {isGranted ? (
              <Unlock className="w-12 h-12 text-emerald-400 mb-2" />
            ) : (
              <Fingerprint className={`w-14 h-14 transition-colors duration-300 ${isScanning ? 'text-orange-400 animate-pulse' : 'text-orange-500/70'} mb-2`} />
            )}
            
            <div className={`text-[10px] font-mono tracking-[0.3em] font-bold ${isGranted ? 'text-emerald-400' : 'text-orange-500'}`}>
              {isGranted ? 'GRANTED' : isScanning ? 'SCANNING' : 'SCAN ID'}
            </div>
            
            {!isGranted && !isScanning && (
              <div className="text-[7px] font-mono text-orange-500/50 tracking-widest mt-1">
                TOUCH TO ENTER
              </div>
            )}
          </button>
          
          {/* Scanning Line overlay */}
          {isScanning && (
            <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-full">
              <div className="w-full h-1 bg-orange-400/80 shadow-[0_0_15px_#f97316] animate-[scan_1.5s_ease-in-out_infinite]" />
            </div>
          )}
        </div>

        {/* User Identity Text */}
        <div className="text-center font-mono space-y-3 opacity-90">
          <h1 className={`text-sm sm:text-base font-bold tracking-[0.4em] transition-colors duration-500 ${isGranted ? 'text-emerald-400' : 'text-white'}`}>
            MADISHETTI KALYAN <span className="text-orange-500 mx-2">//</span> CREATIVE VISUAL DESIGNER
          </h1>
          <p className="text-[10px] text-orange-500/60 tracking-[0.3em]">
            [ HOVER & CLICK SCANNER TO INITIATE ]
          </p>
        </div>
      </div>
      
      {/* Bottom Text */}
      <div className="absolute bottom-6 text-[9px] font-mono text-orange-500/40 tracking-widest uppercase">
        {new Date().toUTCString()}
      </div>
      
    </div>
  );
}
