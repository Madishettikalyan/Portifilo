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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.service || !formData.message) {
      showToast('Please fill in all required fields (*)', 'error');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.personalInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          'Service Needed': formData.service,
          'Estimated Budget': formData.budget || 'Flexible / Discuss Later',
          'Project Details': formData.message,
          _subject: `🎨 New Design Project Inquiry from ${formData.name}`,
          _template: 'table',
          _captcha: 'false'
        })
      });

      const data = await response.json();

      if (response.ok) {
        showToast(`Thank you, ${formData.name}! Your message has been sent directly to Kalyan's email. You will receive a reply within 24 hours.`, 'success');
        setFormData({
          name: '',
          email: '',
          service: '',
          budget: '',
          message: '',
        });
      } else {
        throw new Error(data.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact Form Submission Error:', error);
      // Fallback: Open user's mail client directly
      showToast(`Opening your email client to send message to ${PORTFOLIO_DATA.personalInfo.email}...`, 'info');
      const mailtoLink = `mailto:${PORTFOLIO_DATA.personalInfo.email}?subject=${encodeURIComponent(`Project Inquiry: ${formData.service}`)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\nBudget: ${formData.budget}\n\nMessage:\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
    } finally {
      setIsSubmitting(false);
    }
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
            Have an exciting project or brand in mind? <br />
            <span className="text-gradient">Let’s bring your vision to life.</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Whether you need a full brand identity, viral social creatives, packaging design, or high-impact advertising visuals — I&apos;m ready to craft something unforgettable.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Direct Contact Information */}
          <div className="lg:col-span-5 bg-dark-surface border border-white/10 rounded-3xl p-8 sm:p-10 flex flex-col justify-between shadow-2xl">
            <div>
              <h3 className="font-display font-bold text-2xl text-white mb-2">Get In Touch Directly</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                Feel free to reach out via email, WhatsApp, or connect on design networks. I typically respond within 24 hours.
              </p>

              {/* Channels List */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <div className="flex items-center justify-between p-4 rounded-2xl bg-dark-elevated border border-white/10">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center text-primary shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email Address</span>
                      <span className="text-xs sm:text-sm font-semibold text-white truncate">{PORTFOLIO_DATA.personalInfo.email}</span>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2.5 rounded-xl bg-dark-surface border border-white/10 text-slate-300 hover:text-white hover:border-primary/50 transition-colors shrink-0 ml-2"
                    aria-label="Copy Email Address"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-dark-elevated border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Location & Availability</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{PORTFOLIO_DATA.personalInfo.location}</span>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-dark-elevated border border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Experience Level</span>
                    <span className="text-xs sm:text-sm font-semibold text-white">{PORTFOLIO_DATA.personalInfo.experienceYears} Years Graphic Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links Block */}
            <div className="border-t border-white/10 pt-6">
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
            <h3 className="font-display font-bold text-2xl text-white mb-2">Send a Project Inquiry</h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
              Fill out the form below with your project goals, deliverables, and timeline.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                    <option value="">Flexible / Discuss Later</option>
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

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full font-display font-bold text-sm text-white bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-xl shadow-primary/30 flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-all disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Inquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Send Project Inquiry</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
