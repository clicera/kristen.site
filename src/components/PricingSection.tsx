import React from 'react';
import { PRICING_PACKAGES } from '../data/content';
import { Check, ArrowRight, Sparkles, Shield, HelpCircle } from 'lucide-react';

interface PricingSectionProps {
  onOpenBooking: (packageName?: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Sparkles className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              TRANSPARENT PACKAGES
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Predictable Investment. Zero Agency Markups.
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Choose between a dedicated one-time foundation sprint or an ongoing 1-on-1 monthly partnership. No long-term lock-ins, no hidden fees, and zero bureaucracy.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              id={`pricing-card-${pkg.id}`}
              className={`rounded-3xl p-8 flex flex-col transition-all duration-300 relative ${
                pkg.highlighted
                  ? 'bg-[#F0EBF5] border-2 border-[#4B1D73] shadow-xl lg:-translate-y-2'
                  : 'bg-white border border-[#2B2B2B]/10 shadow-xs hover:shadow-md'
              }`}
            >
              {pkg.badge && (
                <span
                  className={`absolute -top-3.5 right-8 text-[11px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-xs ${
                    pkg.highlighted
                      ? 'bg-[#4B1D73] text-white'
                      : 'bg-[#1A1A1A] text-white'
                  }`}
                >
                  {pkg.badge}
                </span>
              )}

              {/* Package Header */}
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#4B1D73]">
                  {pkg.idealFor}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mt-1 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6B6B6B] min-h-[40px]">
                  {pkg.tagline}
                </p>
              </div>

              {/* Price Display */}
              <div className="pb-6 mb-6 border-b border-black/10">
                <div className="flex items-baseline gap-2">
                  <span className="font-heading font-bold text-4xl text-[#4B1D73]">
                    {pkg.monthlyPrice}
                  </span>
                  <span className="text-xs text-[#6B6B6B] font-medium">
                    {pkg.projectPrice}
                  </span>
                </div>
              </div>

              {/* Feature Checklist */}
              <div className="space-y-3 mb-8 flex-grow">
                <div className="text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-2">
                  What's Included:
                </div>
                {pkg.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full bg-white flex items-center justify-center shrink-0 mt-0.5 border border-purple-100 shadow-xs">
                      <Check className="w-3.5 h-3.5 text-[#4B1D73]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#2B2B2B] leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <button
                type="button"
                id={`choose-package-${pkg.id}`}
                onClick={() => onOpenBooking(pkg.name)}
                className={`w-full py-4 text-sm font-semibold rounded-full transition-all inline-flex items-center justify-center gap-2 ${
                  pkg.highlighted
                    ? 'btn-primary shadow-md'
                    : 'btn-secondary'
                }`}
              >
                <span>Select {pkg.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Custom / Bespoke Advisory Callout */}
        <div className="bg-white rounded-3xl p-8 border border-black/5 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0EBF5] text-[#4B1D73] flex items-center justify-center shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg text-[#2B2B2B]">
                Need a Custom Scope or Advisory-Only Retainer?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B6B6B]">
                We also offer 1-on-1 quarterly marketing advisory, internal team coaching, and customized multi-channel scopes.
              </p>
            </div>
          </div>
          <button
            type="button"
            id="custom-scope-inquiry-btn"
            onClick={() => onOpenBooking('Custom Scope')}
            className="btn-secondary whitespace-nowrap text-xs sm:text-sm py-3 px-6 shrink-0"
          >
            Request Custom Scope
          </button>
        </div>

      </div>
    </section>
  );
};
