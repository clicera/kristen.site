import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Star, Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Sparkles className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              CLIENT VOICES
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Trusted by Solo Founders & Growing Teams
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Read direct feedback from executives, founders, and business owners who switched from generic agencies to our personalized 1-on-1 model.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              id={`testimonial-card-${t.id}`}
              className="bg-white rounded-3xl p-8 border border-[#2B2B2B]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#4B1D73]/30" />
                </div>

                {/* Highlight Badge */}
                <div className="text-xs font-bold text-[#4B1D73] bg-[#F0EBF5] px-3 py-1 rounded-full inline-block mb-4 border border-purple-100">
                  {t.highlight}
                </div>

                {/* Body Content */}
                <p className="text-sm text-[#2B2B2B] leading-relaxed mb-6 italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <img
                  src={t.avatarUrl}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-[#4B1D73]/20"
                />
                <div>
                  <div className="text-sm font-bold text-[#2B2B2B] flex items-center gap-1">
                    <span>{t.name}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4B1D73]" />
                  </div>
                  <div className="text-xs text-[#6B6B6B]">
                    {t.role}, <span className="text-[#2B2B2B] font-medium">{t.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stat Banner */}
        <div className="mt-16 bg-[#F0EBF5] rounded-3xl p-8 border border-[#4B1D73]/15 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#4B1D73]">
                100%
              </div>
              <div className="text-xs text-[#6B6B6B] mt-1 font-medium">
                Direct 1-on-1 Collaboration
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#4B1D73]">
                3.8x
              </div>
              <div className="text-xs text-[#6B6B6B] mt-1 font-medium">
                Average Organic Traffic Lift
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#4B1D73]">
                &lt;24h
              </div>
              <div className="text-xs text-[#6B6B6B] mt-1 font-medium">
                Average Slack Response Time
              </div>
            </div>
            <div>
              <div className="font-heading font-bold text-3xl sm:text-4xl text-[#4B1D73]">
                4 Max
              </div>
              <div className="text-xs text-[#6B6B6B] mt-1 font-medium">
                Active Client Retainers per Quarter
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
