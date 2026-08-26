'use client';

import React, { useEffect, useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function StatsBar() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(PORTFOLIO_DATA.stats.map(() => 0));
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          PORTFOLIO_DATA.stats.forEach((stat, index) => {
            const target = stat.target;
            const duration = 1600;
            const stepTime = 25;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = target;
                  return updated;
                });
                clearInterval(timer);
              } else {
                setCounts((prev) => {
                  const updated = [...prev];
                  updated[index] = Math.ceil(current);
                  return updated;
                });
              }
            }, stepTime);
          });
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className="max-w-7xl mx-auto px-6 mb-24" ref={containerRef}>
      <div className="bg-dark-surface/90 border border-white/10 rounded-3xl p-8 lg:p-10 shadow-2xl shadow-black/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
        {PORTFOLIO_DATA.stats.map((stat, idx) => (
          <div key={stat.label} className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-6 sm:pt-0 lg:pl-8' : ''}`}>
            <div className="font-display font-extrabold text-4xl lg:text-5xl text-white flex items-center mb-1">
              <span>{counts[idx]}</span>
              <span className="text-primary">{stat.suffix}</span>
            </div>
            <h3 className="font-display font-bold text-sm text-slate-100 mb-1">{stat.label}</h3>
            <p className="text-xs text-slate-400 max-w-[200px]">{stat.sub}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
