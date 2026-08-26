'use client';

import React, { useState } from 'react';
import { Mail, MapPin, Award, Copy, Check, Send, Sparkles, Loader2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { useToast } from './Toast';

export default function ContactHub() {
  const { showToast } = useToast();
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    budget: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personalInfo.email);
    setCopied(true);
    showToast(`Copied email to clipboard: ${PORTFOLIO_DATA.personalInfo.email}`, 'success');
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendViaEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      showToast('Please fill in all required fields (*)', 'error');
      return;
    }

    setIsSubmitting(true);

    const subject = `🎨 Design Project Inquiry: ${formData.service} - ${formData.name}`;
    const body = `Hi Madishetti Kalyan,

I am reaching out regarding a creative design project:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
• Client Name: ${formData.name}
• Client Email: ${formData.email}
• Service Needed: ${formData.service}
• Estimated Budget: ${formData.budget || 'Flexible / Discuss Later'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Details & Vision:
${formData.message}

Looking forward to hearing from you!
Best regards,
${formData.name}`;

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PORTFOLIO_DATA.personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.personalInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    showToast('Opening Gmail with your project details...', 'success');

    const win = window.open(gmailUrl, '_blank');
    if (!win || win.closed || typeof win.closed === 'undefined') {
      window.location.href = mailtoUrl;
    }

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.name || !formData.service || !formData.message) {
      showToast('Please enter your Name, Service, and Message first!', 'error');
      return;
    }

    const waText = `Hi Kalyan, I'm *${formData.name}*.\nI need *${formData.service}*.\nBudget: *${formData.budget || 'Flexible'}*.\n\n*Project Details:* \n${formData.message}\n\nMy Email: ${formData.email || 'N/A'}`;
    const waUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(waText)}`;
    window.open(waUrl, '_blank');
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        {/* Banner CTA */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <span className="pulse-dot" />
            <span>LET’S CREATE SOMETHING EXTRAORDINARY</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4 leading-tight">
            Have a Project in Mind? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-coral">
              Let’s Make It Happen.
            </span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Whether you need a complete brand identity, high-converting social campaigns, or bold packaging visuals, I’m ready to collaborate.
          </p>
        </div>

        {/* 2-Column Contact Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white mb-2">Direct Contact</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                Feel free to email me directly or send a message below with your project goals, deliverables, and timeline.
              </p>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-2xl bg-dark-elevated border border-white/10 flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">Direct Email</span>
                    <a
                      href={`mailto:${PORTFOLIO_DATA.personalInfo.email}`}
                      className="font-display font-semibold text-xs sm:text-sm text-white hover:text-primary transition-colors truncate block"
                    >
                      {PORTFOLIO_DATA.personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-primary/20 hover:border-primary/40 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 transition-all flex-shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick Highlights */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-dark-bg border border-white/10 flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Location</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{PORTFOLIO_DATA.personalInfo.location}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-slate-300">
                  <div className="w-8 h-8 rounded-lg bg-dark-bg border border-white/10 flex items-center justify-center text-secondary flex-shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block">Experience</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{PORTFOLIO_DATA.personalInfo.experienceYears} Years Graphic Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Block */}
            <div className="bg-dark-surface border border-white/10 rounded-3xl p-8 shadow-xl">
              <span className="text-xs font-bold text-slate-400 block mb-3 uppercase tracking-wider">Design Networks & Socials</span>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: 'Behance', url: PORTFOLIO_DATA.personalInfo.socials.behance },
                  { name: 'Dribbble', url: PORTFOLIO_DATA.personalInfo.socials.dribbble },
                  { name: 'LinkedIn', url: PORTFOLIO_DATA.personalInfo.socials.linkedin },
                  { name: 'Instagram', url: PORTFOLIO_DATA.personalInfo.socials.instagram },
                  { name: 'WhatsApp', url: PORTFOLIO_DATA.personalInfo.socials.whatsapp },
                ].map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold px-4 py-2 rounded-full bg-dark-elevated border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form */}
          <div className="lg:col-span-7 bg-dark-surface border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-display font-bold text-2xl text-white">Send a Project Inquiry</h3>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                100% Direct Delivery
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
              Fill out your details below and click Send to deliver your inquiry directly to Kalyan’s inbox.
            </p>

            <form onSubmit={handleSendViaEmail} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Anand Kapoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Your Email <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. anand@aura.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Project Service <span className="text-rose-400">*</span>
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="" disabled>Select a Service</option>
                    <option value="Brand Identity & Logo Design">Brand Identity & Logo Design</option>
                    <option value="Social Media Creatives & Ads">Social Media Creatives & Ads</option>
                    <option value="Posters & Promotional Designs">Posters & Promotional Designs</option>
                    <option value="Product Advertisements & Mockups">Product Advertisements & Mockups</option>
                    <option value="Digital Marketing Creatives">Digital Marketing Creatives</option>
                    <option value="Packaging & Product Branding">Packaging & Product Branding</option>
                    <option value="Festival & Campaign Designs">Festival & Campaign Designs</option>
                    <option value="AI-Assisted Creative Visuals">AI-Assisted Creative Visuals</option>
                    <option value="Other / Full Custom Package">Other / Full Custom Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-2">
                    Estimated Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-colors cursor-pointer"
                  >
                    <option value="Flexible / Discuss Later">Flexible / Discuss Later</option>
                    <option value="< $500">&lt; $500 (Small Quick Project)</option>
                    <option value="$500 - $1,500">$500 - $1,500 (Standard Brand/Campaign)</option>
                    <option value="$1,500 - $3,000">$1,500 - $3,000 (Complete Brand Kit)</option>
                    <option value="$3,000+">$3,000+ (Ongoing Creative Retainer)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Project Details / Vision <span className="text-rose-400">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your concept, deliverables, brand goals, and target timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-dark-elevated border border-white/10 text-sm text-white focus:outline-none focus:border-primary transition-colors resize-y"
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-6 rounded-full font-display font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Project Inquiry (via Gmail / Email)</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendViaWhatsApp}
                  className="py-4 px-6 rounded-full font-display font-bold text-xs sm:text-sm text-emerald-300 bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-400 hover:bg-emerald-900/40 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span>Send on WhatsApp</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
