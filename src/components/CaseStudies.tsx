import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/content';
import { CASE_STUDY_MEDIA } from '../data/media';
import { Sparkles, TrendingUp, Quote, ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';

interface CaseStudiesProps {
  onOpenBooking: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenBooking }) => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const currentCase = CASE_STUDIES[activeCaseIndex];

  return (
    <section id="work" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Sparkles className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              PROVEN RESULTS
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Real Growth for Real Founders & Small Businesses
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Explore how our 1-on-1 marketing sprints and ongoing partnerships delivered substantial, measurable returns across search engines, AI discovery, and client pipelines.
          </p>
        </div>

        {/* Case Study Switcher Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {CASE_STUDIES.map((study, idx) => (
            <button
              key={study.id}
              type="button"
              id={`case-study-tab-${study.id}`}
              onClick={() => setActiveCaseIndex(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                activeCaseIndex === idx
                  ? 'bg-[#4B1D73] text-white shadow-md'
                  : 'bg-[#F0EBF5] text-[#2B2B2B] hover:text-[#4B1D73] border border-purple-100'
              }`}
            >
              {study.clientName} ({study.clientCategory.split('/')[0].trim()})
            </button>
          ))}
        </div>

        {/* Active Case Study Spotlight Container */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#2B2B2B]/10 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B1D73] bg-[#F0EBF5] px-3 py-1 rounded-full border border-purple-100">
                  {currentCase.clientCategory}
                </span>
                <span className="text-xs text-[#6B6B6B] font-medium">
                  {currentCase.period}
                </span>
              </div>

              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#2B2B2B] mb-6 leading-snug">
                {currentCase.title}
              </h3>

              <div className="space-y-4 mb-8">
                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-black/5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#4B1D73] mb-1">
                    The Challenge:
                  </div>
                  <p className="text-xs sm:text-sm text-[#6B6B6B] leading-relaxed">
                    {currentCase.challenge}
                  </p>
                </div>

                <div className="bg-[#FAF7F2] rounded-2xl p-4 border border-black/5">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#4B1D73] mb-1">
                    The 1-on-1 Solution:
                  </div>
                  <p className="text-xs sm:text-sm text-[#2B2B2B] font-medium leading-relaxed">
                    {currentCase.solution}
                  </p>
                </div>
              </div>

              {/* Founder Quote Card */}
              <div className="bg-[#F0EBF5] rounded-2xl p-6 border border-[#4B1D73]/15 relative">
                <Quote className="w-6 h-6 text-[#4B1D73] mb-2 opacity-60" />
                <p className="text-sm italic text-[#2B2B2B] mb-3 leading-relaxed">
                  "{currentCase.quote.text}"
                </p>
                <div className="text-xs font-bold text-[#4B1D73]">
                  {currentCase.quote.author}
                </div>
                <div className="text-[11px] text-[#6B6B6B]">
                  {currentCase.quote.role}
                </div>
              </div>
            </div>

            {/* Right Metrics Column */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="space-y-4">
                {/* Visual Snapshot Image */}
                {(() => {
                  const media = CASE_STUDY_MEDIA[currentCase.id as keyof typeof CASE_STUDY_MEDIA];
                  if (!media) return null;
                  return (
                    <div className="relative rounded-2xl overflow-hidden aspect-[16/9] border border-black/5 shadow-xs mb-4 group">
                      <img
                        src={media.image}
                        alt={`${currentCase.clientName} project preview`}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                        <span className="text-xs font-semibold drop-shadow-xs">
                          {media.tag}
                        </span>
                        <span className="bg-[#4B1D73] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-purple-300/30">
                          {media.metricBadge}
                        </span>
                      </div>
                    </div>
                  );
                })()}

                <div className="text-xs font-bold uppercase tracking-wider text-[#2B2B2B] pb-2 border-b border-gray-100 flex items-center justify-between">
                  <span>Verified Client Outcomes</span>
                  <TrendingUp className="w-4 h-4 text-[#4B1D73]" />
                </div>

                {currentCase.results.map((res, i) => (
                  <div key={i} className="bg-[#FAF7F2] rounded-2xl p-5 border border-purple-100">
                    <div className="text-3xl font-heading font-bold text-[#4B1D73] mb-0.5">
                      {res.metric}
                    </div>
                    <div className="text-sm font-bold text-[#2B2B2B] mb-1">
                      {res.change}
                    </div>
                    <p className="text-xs text-[#6B6B6B]">
                      {res.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  id={`case-study-cta-${currentCase.id}`}
                  onClick={onOpenBooking}
                  className="btn-primary w-full text-sm py-3.5 shadow-sm"
                >
                  <span>Discuss Similar Strategy for Your Brand</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
