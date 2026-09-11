import React from 'react';
import { WHY_ONE_ON_ONE_POINTS } from '../data/content';
import { founderCollabImg } from '../data/media';
import { UserCheck, Zap, Target, ShieldCheck, Check, X, Sparkles, MessageCircle, Clock, HeartHandshake, CheckCircle2 } from 'lucide-react';

interface WhyOneOnOneProps {
  onOpenBooking: () => void;
}

export const WhyOneOnOne: React.FC<WhyOneOnOneProps> = ({ onOpenBooking }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#4B1D73]" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-[#4B1D73]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#4B1D73]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#4B1D73]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#4B1D73]" />;
    }
  };

  return (
    <section id="why-one-on-one" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <HeartHandshake className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              THE 1-ON-1 DIFFERENCE
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Built for Small Businesses & Startups That Deserve Better Than Agency Fluff.
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Traditional agencies are built to maximize retainer margins and delegate tasks down to junior staff. Clicera is built to give you a dedicated senior growth partner who actually does the work.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left: Traditional Agency Realities */}
          <div className="bg-white rounded-3xl p-8 border border-red-100 shadow-xs">
            <div className="flex items-center gap-3 pb-6 border-b border-gray-100 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center font-bold">
                <X className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#2B2B2B]">
                  Traditional Marketing Agency
                </h3>
                <p className="text-xs text-[#6B6B6B]">The typical agency experience</p>
              </div>
            </div>

            <div className="space-y-6">
              {WHY_ONE_ON_ONE_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-red-100/60 text-red-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#2B2B2B] mb-1">
                      {pt.title}
                    </div>
                    <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                      {pt.agency}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: The Clicera 1-on-1 Advantage */}
          <div className="bg-[#F0EBF5] rounded-3xl p-8 border-2 border-[#4B1D73]/30 shadow-md relative">
            <span className="absolute -top-3.5 right-8 bg-[#4B1D73] text-white text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs">
              The Clicera Model
            </span>

            <div className="flex items-center gap-3 pb-6 border-b border-[#4B1D73]/15 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-[#4B1D73] text-white flex items-center justify-center font-bold">
                <Check className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-[#4B1D73]">
                  Clicera 1-on-1 Partnership
                </h3>
                <p className="text-xs text-[#4B1D73]/80">Personalized, agile & accountable</p>
              </div>
            </div>

            <div className="space-y-6">
              {WHY_ONE_ON_ONE_POINTS.map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-[#4B1D73] text-white flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#4B1D73] mb-1 flex items-center gap-2">
                      <span>{pt.title}</span>
                      {getIcon(pt.icon)}
                    </div>
                    <p className="text-xs sm:text-sm text-[#2B2B2B] leading-relaxed font-medium">
                      {pt.clicera}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Visual 1-on-1 Studio Collaboration Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#2B2B2B]/10 shadow-md mb-16 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 relative rounded-2xl overflow-hidden aspect-[16/10] bg-gray-100 border border-black/5 group">
              <img
                src={founderCollabImg}
                alt="Direct 1-on-1 marketing strategy session"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-[#4B1D73] px-2.5 py-0.5 rounded-full border border-white/20">
                  Direct Working Session
                </span>
                <p className="text-xs font-semibold mt-1 text-gray-100">
                  Real founders strategizing 1-on-1 with their dedicated growth expert
                </p>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B1D73] mb-2">
                <Sparkles className="w-4 h-4" /> Strategic Chemistry & Agility
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-4 leading-tight">
                Your Vision Isn't Lost in Translation Across 5 Different Desks
              </h3>
              <p className="text-[#6B6B6B] text-sm leading-relaxed mb-6">
                When you partner with Clicera, the same senior strategist who understands your product's competitive moat is the one researching keywords, training LLMs to cite your brand, and writing your articles. No knowledge handoffs, no wasted briefing cycles.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#2B2B2B]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4B1D73] shrink-0" />
                  <span>Direct Slack access</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4B1D73] shrink-0" />
                  <span>Transparent weekly audits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4B1D73] shrink-0" />
                  <span>Founder-led voice tuning</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#4B1D73] shrink-0" />
                  <span>Rapid 48-hr turnaround</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Pillars of Working Together */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#4B1D73] flex items-center justify-center mb-4 border border-purple-100">
              <MessageCircle className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#2B2B2B] mb-2">
              Direct Slack Channel
            </h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              No formal ticket queues. Message ideas, questions, or urgent edits directly to your strategist with same-day responses.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#4B1D73] flex items-center justify-center mb-4 border border-purple-100">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#2B2B2B] mb-2">
              Bi-Weekly Strategy Calls
            </h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              Regular 30-minute 1-on-1 reviews to inspect keyword rankings, traffic sources, and plan upcoming editorial topics.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-xs">
            <div className="w-10 h-10 rounded-xl bg-[#FAF7F2] text-[#4B1D73] flex items-center justify-center mb-4 border border-purple-100">
              <Target className="w-5 h-5" />
            </div>
            <h4 className="font-heading font-bold text-lg text-[#2B2B2B] mb-2">
              Zero Long Lock-Ins
            </h4>
            <p className="text-xs text-[#6B6B6B] leading-relaxed">
              No hostage 12-month agency contracts. We retain clients by consistently delivering value and quantifiable return on investment.
            </p>
          </div>
        </div>

        {/* Call To Action Strip */}
        <div className="text-center">
          <button
            type="button"
            id="why-cta-schedule-btn"
            onClick={onOpenBooking}
            className="btn-primary py-3.5 px-8 shadow-sm"
          >
            <span>Experience the 1-on-1 Difference</span>
          </button>
        </div>

      </div>
    </section>
  );
};
