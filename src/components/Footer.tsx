import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Mail, Send } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer id="main-footer" className="bg-[#1A1A1A] text-white pt-20 pb-12 border-t border-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Pre-footer Callout Banner */}
        <div className="bg-[#4B1D73] rounded-3xl p-8 sm:p-12 mb-16 text-center text-white relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto relative z-10">
            <span className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white/15 text-purple-200 inline-block mb-3">
              Ready to Accelerate?
            </span>
            <h3 className="font-heading font-bold text-2xl sm:text-4xl text-white mb-4">
              Let's Build Your 1-on-1 Growth Engine Together.
            </h3>
            <p className="text-sm sm:text-base text-purple-100 mb-8 leading-relaxed">
              No long retainers, no account managers. Book a free 20-minute strategy diagnostic to inspect your SEO, GEO citations, and growth roadmap.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                type="button"
                id="footer-callout-book-btn"
                onClick={onOpenBooking}
                className="btn-primary bg-white text-[#4B1D73] hover:bg-gray-100 hover:text-[#381358] font-bold text-sm py-4 px-8 rounded-full shadow-lg w-full sm:w-auto"
              >
                <span>Book Free Strategy Session</span>
                <ArrowRight className="w-4 h-4 text-[#4B1D73]" />
              </button>
              <button
                type="button"
                id="footer-callout-audit-btn"
                onClick={onOpenAudit}
                className="btn-secondary border-white/50 text-white hover:bg-white/10 text-sm py-3.5 px-6 rounded-full w-full sm:w-auto"
              >
                <Sparkles className="w-4 h-4 text-purple-200" />
                <span>Run Interactive Audit</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-full bg-[#4B1D73] flex items-center justify-center text-white font-bold text-lg">
                C
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                Clicera<span className="text-[#a855f7]">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-sm">
              Personalized, 1-on-1 freelance digital marketing specializing in modern SEO & GEO, high-engagement social media, and authoritative content writing for small businesses, startups, and solo entrepreneurs.
            </p>

            <div className="text-xs text-gray-400 pt-2 space-y-1">
              <div>Direct Strategist Contact:</div>
              <a href="mailto:hello@clicera.com" className="text-white hover:text-[#a855f7] font-semibold transition-colors">
                hello@clicera.com
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Core Disciplines
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Modern SEO & Generative Search (GEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Founder Social Media Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  High-Impact Content Writing & Blogging
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Local Map Pack & Entity Authority
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  AI Citation Optimization (ChatGPT/Perplexity)
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-gray-400">
              <li>
                <a href="#why-one-on-one" className="hover:text-white transition-colors">
                  Why 1-on-1
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing & Sprints
                </a>
              </li>
              <li>
                <a href="#audit" className="hover:text-white transition-colors">
                  Interactive Audit
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              The 1-Minute Growth Dispatch
            </div>
            <p className="text-xs text-gray-400 leading-relaxed">
              Actionable SEO tips, GEO prompts, and content distribution experiments sent bi-weekly. Zero fluff.
            </p>

            {!subscribed ? (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="founder@brand.com"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/10 border border-white/20 text-xs text-white placeholder:text-gray-400 focus:outline-hidden focus:border-[#a855f7]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-[#4B1D73] text-white hover:bg-[#381358] transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[10px] text-gray-500">
                  Join 1,400+ founders. Unsubscribe anytime.
                </div>
              </form>
            ) : (
              <div className="p-3 rounded-xl bg-white/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>You're subscribed! Check your inbox soon.</span>
              </div>
            )}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Clicera. All rights reserved. Freelance Digital Marketing.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-gray-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-400 cursor-pointer">Terms of Service</span>
            <span className="hover:text-gray-400 cursor-pointer">Security & Confidentiality</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
