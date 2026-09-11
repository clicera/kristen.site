import React, { useState } from 'react';
import { Sparkles, Check, ArrowRight, ShieldCheck, Zap, Compass } from 'lucide-react';

interface InteractiveAuditProps {
  onScheduleCall: (strategySummary: string) => void;
}

export const InteractiveAudit: React.FC<InteractiveAuditProps> = ({ onScheduleCall }) => {
  const [stage, setStage] = useState<'solo' | 'startup' | 'small-biz'>('startup');
  const [primaryGoal, setPrimaryGoal] = useState<'seo-geo' | 'social' | 'content' | 'full'>('seo-geo');
  const [timeHorizon, setTimeHorizon] = useState<'30days' | '90days' | 'ongoing'>('90days');
  const [websiteUrl, setWebsiteUrl] = useState('');

  const stageLabels = {
    solo: 'Solo Entrepreneur / Creator',
    startup: 'Seed-Stage / High-Growth Startup',
    'small-biz': 'Established Small Business / Practice'
  };

  const goalLabels = {
    'seo-geo': 'Rank on Google & Get Cited by AI (GEO)',
    social: 'Grow Authentic Audience & High-Ticket Inbound',
    content: 'Publish Authority Articles & Newsletters',
    full: 'Comprehensive 1-on-1 Growth Engine'
  };

  const getRecommendations = () => {
    switch (primaryGoal) {
      case 'seo-geo':
        return {
          title: 'Generative Search & Entity Authority Blueprint',
          deliverables: [
            'Technical & structured schema overhaul for AI crawler parsing',
            'Generative Engine Optimization (GEO) citation framework (ChatGPT, Perplexity)',
            'High-intent commercial keyword mapping targeting buyers ready to act',
            'Local Google Business Profile & localized entity alignment'
          ],
          idealPackage: 'Foundation Sprint or 1-on-1 Growth Retainer',
          expectedLift: '+180% to +300% search visibility over 90 days',
          cadence: 'Bi-weekly tracking + real-time ranking dashboard'
        };
      case 'social':
        return {
          title: 'Founder-Led Social Resonance System',
          deliverables: [
            'Positioning narrative tailored to your unique founder voice',
            'Weekly visual carousel & short-form text distribution (LinkedIn / IG)',
            'DM inbound lead capture framework & comment nurturing',
            'Repurposing system to turn one core insight into 5+ assets'
          ],
          idealPackage: '1-on-1 Growth Partner (Social & Content)',
          expectedLift: '3x higher organic reach & consistent weekly inbound leads',
          cadence: 'Direct Slack channel for rapid content approvals'
        };
      case 'content':
        return {
          title: 'Conversion-First Editorial & Newsletter Engine',
          deliverables: [
            'Comprehensive search intent content calendar',
            '2 to 4 deeply researched 2,000+ word authority articles per month',
            'Weekly email newsletter dispatch writing & formatting',
            'Lead magnet creation to systematically capture reader emails'
          ],
          idealPackage: 'Content & Search Engine Retainer',
          expectedLift: '4.8x dwell time and evergreen organic lead compounding',
          cadence: 'Monthly editorial sprint planning + CMS publication'
        };
      default:
        return {
          title: 'Holistic 1-on-1 Full-Stack Marketing Retainer',
          deliverables: [
            'Integrated SEO & Generative AI citation roadmap',
            'Bi-weekly publication of deep-dive articles & lead magnets',
            'Active social media distribution & founder thought leadership',
            'Direct 1-on-1 advisory with zero middle managers'
          ],
          idealPackage: '1-on-1 Growth Partner (Full Service)',
          expectedLift: 'Multiplied domain authority, search traffic, and warm leads',
          cadence: 'Continuous dedicated partnership & bi-weekly video syncs'
        };
    }
  };

  const recommendation = getRecommendations();

  const handleBookAudit = (e: React.FormEvent) => {
    e.preventDefault();
    const summary = `${stageLabels[stage]} looking for ${goalLabels[primaryGoal]} over ${timeHorizon}. Website: ${websiteUrl || 'Not provided'}`;
    onScheduleCall(summary);
  };

  return (
    <section id="audit" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Compass className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              INTERACTIVE AUDIT
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Discover Your Tailored 1-on-1 Marketing Roadmap
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Answer 3 quick questions to see the exact tactical mix, anticipated timelines, and deliverables best suited for your business model.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Input Selection Configurator */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 border border-[#2B2B2B]/10 shadow-xs">
            <form onSubmit={handleBookAudit} className="space-y-6">
              
              {/* Step 1: Business Profile */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-3">
                  1. Which best describes your business?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {(['solo', 'startup', 'small-biz'] as const).map((s) => (
                    <button
                      key={s}
                      type="button"
                      id={`audit-stage-${s}`}
                      onClick={() => setStage(s)}
                      className={`p-3 rounded-2xl text-xs font-semibold text-center transition-all border ${
                        stage === s
                          ? 'bg-[#F0EBF5] text-[#4B1D73] border-[#4B1D73]'
                          : 'bg-[#FAF7F2] text-[#6B6B6B] border-transparent hover:border-gray-300'
                      }`}
                    >
                      {s === 'solo' && 'Solo Entrepreneur'}
                      {s === 'startup' && 'Tech / Seed Startup'}
                      {s === 'small-biz' && 'Small Business / Practice'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Primary Growth Focus */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-3">
                  2. What is your #1 growth objective right now?
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'seo-geo', label: 'SEO & Generative AI Search (GEO)', desc: 'Get found on Google and cited by ChatGPT & Perplexity' },
                    { id: 'social', label: 'Social Media & Founder Branding', desc: 'Build an engaged audience on LinkedIn, Instagram & X' },
                    { id: 'content', label: 'High-Impact Content & Newsletters', desc: 'In-depth articles that educate, rank, and convert' },
                    { id: 'full', label: 'All of the Above (Integrated 1-on-1)', desc: 'A dedicated, full-funnel freelance marketing partner' }
                  ].map((item) => (
                    <div
                      key={item.id}
                      id={`audit-goal-${item.id}`}
                      onClick={() => setPrimaryGoal(item.id as any)}
                      className={`p-3.5 rounded-2xl cursor-pointer transition-all border flex items-center justify-between ${
                        primaryGoal === item.id
                          ? 'bg-[#F0EBF5] border-[#4B1D73] shadow-xs'
                          : 'bg-[#FAF7F2] border-transparent hover:border-gray-200'
                      }`}
                    >
                      <div>
                        <div className={`text-sm font-bold ${primaryGoal === item.id ? 'text-[#4B1D73]' : 'text-[#2B2B2B]'}`}>
                          {item.label}
                        </div>
                        <div className="text-xs text-[#6B6B6B]">
                          {item.desc}
                        </div>
                      </div>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                        primaryGoal === item.id
                          ? 'bg-[#4B1D73] text-white border-[#4B1D73]'
                          : 'border-gray-300'
                      }`}>
                        {primaryGoal === item.id && <Check className="w-3 h-3" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Target Timeframe */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-3">
                  3. What is your ideal timeframe?
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { id: '30days', label: '30-Day Sprint' },
                    { id: '90days', label: '90-Day Build' },
                    { id: 'ongoing', label: 'Ongoing Retainer' }
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      id={`audit-timeframe-${t.id}`}
                      onClick={() => setTimeHorizon(t.id as any)}
                      className={`py-2.5 px-3 rounded-2xl text-xs font-semibold text-center transition-all border ${
                        timeHorizon === t.id
                          ? 'bg-[#4B1D73] text-white border-[#4B1D73]'
                          : 'bg-[#FAF7F2] text-[#6B6B6B] border-transparent hover:border-gray-300'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Website Input */}
              <div>
                <label htmlFor="audit-website-url" className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-2">
                  Your Website or LinkedIn URL (Optional)
                </label>
                <input
                  type="url"
                  id="audit-website-url"
                  placeholder="https://yourbrand.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-[#FAF7F2] border border-gray-200 text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#4B1D73] transition-colors"
                />
              </div>

              <button
                type="submit"
                id="audit-submit-plan-btn"
                className="btn-primary w-full shadow-md text-sm py-4"
              >
                <span>Book Strategy Call for this Roadmap</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right: Instant Strategy Recommendation Output */}
          <div className="lg:col-span-6 bg-[#F0EBF5] rounded-3xl p-8 border border-[#4B1D73]/20 shadow-md">
            <div className="flex items-center justify-between pb-4 border-b border-[#4B1D73]/15 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B1D73]">
                  Diagnostic Result
                </span>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#2B2B2B]">
                  {recommendation.title}
                </h3>
              </div>
              <div className="p-2.5 rounded-full bg-white text-[#4B1D73] shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>

            {/* Target Profile Match Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#4B1D73] border border-purple-100">
                Profile: {stageLabels[stage]}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-[#2B2B2B] border border-purple-100">
                Horizon: {timeHorizon === '30days' ? '30 Days' : timeHorizon === '90days' ? '90 Days' : 'Monthly Partnership'}
              </span>
            </div>

            {/* Recommended Scope */}
            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-3">
                Recommended 1-on-1 Action Items:
              </h4>
              <div className="space-y-2.5">
                {recommendation.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-2xl border border-purple-50 shadow-xs">
                    <Zap className="w-4 h-4 text-[#4B1D73] shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-[#2B2B2B] font-medium leading-snug">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Estimates */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
              <div className="bg-white rounded-2xl p-4 border border-purple-50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B6B6B]">
                  Projected Benchmark
                </div>
                <div className="font-heading font-bold text-base text-[#4B1D73] mt-1">
                  {recommendation.expectedLift}
                </div>
              </div>
              <div className="bg-white rounded-2xl p-4 border border-purple-50">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#6B6B6B]">
                  Collaboration Style
                </div>
                <div className="font-heading font-bold text-sm text-[#2B2B2B] mt-1">
                  {recommendation.cadence}
                </div>
              </div>
            </div>

            {/* Action CTA */}
            <div className="bg-[#4B1D73] text-white rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="font-heading font-bold text-base">
                  Free 20-Min Strategy Review
                </div>
                <div className="text-xs text-purple-200">
                  Walk through this exact roadmap together 1-on-1. No sales pressure.
                </div>
              </div>
              <button
                type="button"
                id="audit-direct-book-btn"
                onClick={() => {
                  const summary = `${stageLabels[stage]} looking for ${goalLabels[primaryGoal]} over ${timeHorizon}`;
                  onScheduleCall(summary);
                }}
                className="bg-white text-[#4B1D73] hover:bg-gray-100 font-semibold text-xs px-4 py-2.5 rounded-full whitespace-nowrap transition-colors inline-flex items-center gap-1.5 shadow-sm"
              >
                <span>Reserve Free Slot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
