'use client';

import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden bg-dark-bg/60 border-t border-white/5" id="faq">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] bg-primary/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-[10px] sm:text-xs font-bold tracking-widest text-primary uppercase mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Answers & Insights</span>
          </span>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-3 max-w-xl mx-auto leading-relaxed px-2">
            Everything you need to know about my services, design process, and how we can collaborate.
          </p>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {PORTFOLIO_DATA.faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-primary/40 bg-dark-surface' : 'hover:border-primary/20'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-3 sm:gap-4 text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className={`font-display font-bold text-[15px] sm:text-lg transition-colors leading-snug ${isOpen ? 'text-primary' : 'text-slate-200'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full bg-white/5 border border-white/10 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary/10 border-primary/20 text-primary' : 'text-slate-400'}`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                </button>
                
                <div 
                  className={`px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] sm:max-h-40 pb-5 sm:pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-slate-400 text-[13px] sm:text-sm leading-relaxed border-t border-white/5 pt-3 sm:pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
