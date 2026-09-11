import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Sparkles, TrendingUp, Bot, MessageSquare, Zap, ShieldCheck, Play, Video } from 'lucide-react';
import { heroWorkspaceImg } from '../data/media';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
  onOpenVideo?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenAudit, onOpenVideo }) => {
  const [activeTab, setActiveTab] = useState<'seo' | 'social' | 'content'>('seo');

  const tabPreviews = {
    seo: {
      tag: 'SEO & GEO Dominance',
      headline: 'Ranking in Search & AI Overviews',
      stat1: '+310%',
      stat1Label: 'Organic Search Growth',
      stat2: '#1 Source',
      stat2Label: 'ChatGPT & Perplexity Citation',
      message: '“Your brand was just cited as the #1 recommended solution in Google AI Overviews & Perplexity for seed-stage analytics.”'
    },
    social: {
      tag: 'Founder-Led Social',
      headline: 'Authentic Reach Without Burnout',
      stat1: '3.4x',
      stat1Label: 'Engagement vs Industry',
      stat2: '12 / mo',
      stat2Label: 'High-Ticket Inbound Leads',
      message: '“Last week’s breakdown carousel crossed 48,000 organic views on LinkedIn. Three founders booked discovery calls directly from your DMs.”'
    },
    content: {
      tag: 'Authority Content',
      headline: 'Long-Form Articles That Convert',
      stat1: '4m 12s',
      stat1Label: 'Avg. Reader Dwell Time',
      stat2: '14,200',
      stat2Label: 'Active Newsletter Subscribers',
      message: '“The new original research article is ranking #2 for commercial keywords and drove 84 email newsletter signups this weekend.”'
    }
  };

  const current = tabPreviews[activeTab];

  return (
    <section id="hero-section" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle organic ambient circles */}
      <div className="absolute top-10 -left-24 w-96 h-96 rounded-full bg-[#F0EBF5] -z-10 blur-3xl opacity-70 pointer-events-none" />
      <div className="absolute top-1/2 -right-24 w-96 h-96 rounded-full bg-[#F0EBF5] -z-10 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 text-center lg:text-left">
            {/* H2 Typography Scale: 24px / weight 700 / letter-spacing 6px */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-5 border border-[#4B1D73]/15">
              <Sparkles className="w-4 h-4 text-[#4B1D73]" />
              <span className="typography-h2 text-[11px] sm:text-[13px] md:text-[15px] lg:text-[18px] text-[#4B1D73]">
                FREELANCE DIGITAL MARKETING
              </span>
            </div>

            {/* H1 Typography Scale: 57px / weight 700 / line-height 62.7px */}
            <h1 className="typography-h1 text-[#2B2B2B] mb-6 tracking-tight">
              Growth Marketing Tailored To Your Vision, <span className="text-[#4B1D73] underline decoration-[#4B1D73]/20 underline-offset-8">Delivered 1-on-1.</span>
            </h1>

            {/* Body Typography Scale: 19px / weight 400 / line-height 30.4px */}
            <p className="typography-body mb-8 max-w-2xl mx-auto lg:mx-0">
              No junior account managers or generic playbooks. Clicera partners directly with small businesses, ambitious startups, and solo entrepreneurs through modern SEO & GEO, high-impact social media, and conversion-focused content writing.
            </p>

            {/* Action Buttons: Primary filled button per specs (#4B1D73, rounded 37px, 16px 26px) + Video Button */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button
                type="button"
                id="hero-primary-cta-btn"
                onClick={onOpenBooking}
                className="btn-primary w-full sm:w-auto shadow-md cursor-pointer"
              >
                <span>Book Free 1-on-1 Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-secondary-audit-btn"
                onClick={onOpenAudit}
                className="btn-secondary w-full sm:w-auto cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#4B1D73]" />
                <span>Run 2-Min Growth Audit</span>
              </button>

              {onOpenVideo && (
                <button
                  type="button"
                  id="hero-video-explainer-btn"
                  onClick={onOpenVideo}
                  className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-full text-xs font-semibold text-[#4B1D73] hover:text-[#1A1A1A] bg-white border border-[#4B1D73]/20 hover:border-[#4B1D73] transition-all shadow-xs cursor-pointer w-full sm:w-auto"
                >
                  <div className="w-6 h-6 rounded-full bg-[#4B1D73] text-white flex items-center justify-center shadow-xs">
                    <Play className="w-3 h-3 fill-white ml-0.5" />
                  </div>
                  <span>Watch 2-Min Video</span>
                </button>
              )}
            </div>

            {/* Trust Pill Highlights */}
            <div className="pt-6 border-t border-[#2B2B2B]/10 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-[#2B2B2B] font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#4B1D73]" />
                <span>100% Direct Strategist Access</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-5 h-5 text-[#4B1D73]" />
                <span>AI Search & GEO Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#4B1D73]" />
                <span>Zero Agency Overhead</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Workspace Image + Interactive Live Results Snapshot */}
          <div className="lg:col-span-5">
            <div className="relative bg-[#F0EBF5] rounded-3xl p-6 sm:p-8 border border-[#4B1D73]/10 shadow-lg">
              
              {/* Visual Preview Header with Real Image & Video Play Trigger */}
              <div className="relative rounded-2xl overflow-hidden mb-6 border border-white shadow-sm group">
                <img
                  src={heroWorkspaceImg}
                  alt="Modern digital marketing workspace and analytics studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end justify-between p-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-black/50 backdrop-blur-xs px-2.5 py-0.5 rounded-full border border-purple-300/30">
                      Inside The 1-on-1 Studio
                    </span>
                    <h3 className="text-white text-xs font-bold mt-1">
                      Data-Led SEO, GEO & Content Strategy
                    </h3>
                  </div>

                  {onOpenVideo && (
                    <button
                      type="button"
                      id="hero-image-play-video-btn"
                      onClick={onOpenVideo}
                      aria-label="Play video walkthrough"
                      className="w-10 h-10 rounded-full bg-[#4B1D73] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer border border-white/30"
                    >
                      <Play className="w-4 h-4 fill-white ml-0.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Card Header & Service Switcher */}
              <div className="flex items-center justify-between pb-4 border-b border-[#4B1D73]/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4B1D73]">
                    Live 1-on-1 Client Hub
                  </span>
                </div>
                <span className="text-xs font-medium text-[#6B6B6B] bg-white px-2.5 py-1 rounded-full border border-gray-200">
                  Sprint Q3
                </span>
              </div>

              {/* Service Pillar Tabs */}
              <div className="flex items-center gap-1.5 my-4 bg-white/70 p-1.5 rounded-2xl border border-purple-100">
                <button
                  type="button"
                  id="hero-tab-seo"
                  onClick={() => setActiveTab('seo')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'seo'
                      ? 'bg-[#4B1D73] text-white shadow-xs'
                      : 'text-[#2B2B2B] hover:text-[#4B1D73]'
                  }`}
                >
                  SEO / GEO
                </button>
                <button
                  type="button"
                  id="hero-tab-social"
                  onClick={() => setActiveTab('social')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'social'
                      ? 'bg-[#4B1D73] text-white shadow-xs'
                      : 'text-[#2B2B2B] hover:text-[#4B1D73]'
                  }`}
                >
                  Social Media
                </button>
                <button
                  type="button"
                  id="hero-tab-content"
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 py-2 px-3 text-xs font-semibold rounded-xl transition-all cursor-pointer ${
                    activeTab === 'content'
                      ? 'bg-[#4B1D73] text-white shadow-xs'
                      : 'text-[#2B2B2B] hover:text-[#4B1D73]'
                  }`}
                >
                  Content Hub
                </button>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white rounded-2xl p-3.5 border border-purple-50 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-[#6B6B6B] mb-1">
                    <span>Performance</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-[#4B1D73]">
                    {current.stat1}
                  </div>
                  <div className="text-[11px] text-[#6B6B6B] mt-0.5">
                    {current.stat1Label}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-3.5 border border-purple-50 shadow-xs">
                  <div className="flex items-center justify-between text-xs text-[#6B6B6B] mb-1">
                    <span>Validation</span>
                    <Zap className="w-3.5 h-3.5 text-[#4B1D73]" />
                  </div>
                  <div className="text-2xl font-heading font-bold text-[#2B2B2B]">
                    {current.stat2}
                  </div>
                  <div className="text-[11px] text-[#6B6B6B] mt-0.5">
                    {current.stat2Label}
                  </div>
                </div>
              </div>

              {/* Direct 1-on-1 Slack/Chat Message Simulation */}
              <div className="bg-white rounded-2xl p-3.5 border border-purple-100/70 shadow-xs">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-[#4B1D73] text-white flex items-center justify-center font-bold text-xs">
                    CL
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#2B2B2B] flex items-center gap-1.5">
                      <span>Clicera Strategist</span>
                      <span className="text-[10px] font-normal text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded-sm">
                        Direct 1-on-1
                      </span>
                    </div>
                    <div className="text-[11px] text-[#6B6B6B]">Today, 10:42 AM</div>
                  </div>
                </div>
                <p className="text-xs text-[#2B2B2B] leading-relaxed italic bg-[#FAF7F2] p-2.5 rounded-xl border border-black/5">
                  {current.message}
                </p>
              </div>

              {/* Direct Partner Guarantee Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-[#6B6B6B] pt-3 border-t border-[#4B1D73]/10">
                <span className="flex items-center gap-1.5 text-[#4B1D73] font-medium">
                  <MessageSquare className="w-3.5 h-3.5" /> Direct Slack / WhatsApp channel
                </span>
                <span>Max 4 clients at a time</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
