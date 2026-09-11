import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/content';
import { ServiceItem } from '../types';
import { SERVICE_MEDIA } from '../data/media';
import { Search, Share2, PenTool, CheckCircle2, ArrowRight, Sparkles, Bot, LineChart, Award } from 'lucide-react';

interface ServicesSectionProps {
  onOpenBooking: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem>(SERVICES_DATA[0]);
  const [showModal, setShowModal] = useState(false);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Search':
        return <Search className="w-6 h-6 text-[#4B1D73]" />;
      case 'Share2':
        return <Share2 className="w-6 h-6 text-[#4B1D73]" />;
      case 'PenTool':
        return <PenTool className="w-6 h-6 text-[#4B1D73]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#4B1D73]" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <Sparkles className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              CORE DISCIPLINES
            </span>
          </div>
          
          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Three High-Impact Pillars. All Executed 1-on-1.
          </h2>
          <p className="typography-body max-w-2xl mx-auto">
            Whether you need to capture high-intent Google and AI queries, build a magnetic social audience, or publish definitive industry articles, every campaign is custom-engineered for your brand.
          </p>
        </div>

        {/* 3 Core Services Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {SERVICES_DATA.map((service) => {
            const isFeatured = service.id === 'seo-geo';
            const mediaItem = service.id === 'seo-geo'
              ? SERVICE_MEDIA.seoGeo
              : service.id === 'social-media'
              ? SERVICE_MEDIA.social
              : SERVICE_MEDIA.content;

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`flex flex-col rounded-3xl p-6 sm:p-8 transition-all duration-300 overflow-hidden ${
                  isFeatured
                    ? 'bg-[#F0EBF5] border-2 border-[#4B1D73]/30 shadow-md relative'
                    : 'bg-white border border-[#2B2B2B]/10 hover:border-[#4B1D73]/40 shadow-xs hover:shadow-md'
                }`}
              >
                {isFeatured && (
                  <span className="absolute top-3.5 right-6 z-10 bg-[#4B1D73] text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Next-Gen AI Ready
                  </span>
                )}

                {/* Visual Image Banner for Service */}
                <div className="relative rounded-2xl overflow-hidden mb-6 aspect-video bg-gray-100 border border-black/5 group">
                  <img
                    src={mediaItem.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-medium leading-tight line-clamp-1 drop-shadow-xs">
                    {mediaItem.caption}
                  </div>
                </div>

                {/* Top Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-purple-100">
                    {getIcon(service.iconName)}
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#4B1D73] bg-[#FAF7F2] px-3 py-1 rounded-full border border-purple-100">
                    {service.tag}
                  </span>
                </div>

                {/* Service Title & Description */}
                <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-3">
                  {service.title}
                </h3>
                <p className="text-[#6B6B6B] text-[15px] leading-relaxed mb-6">
                  {service.shortDescription}
                </p>

                {/* Metrics Highlight Banner */}
                <div className="grid grid-cols-2 gap-2 bg-[#FAF7F2] rounded-2xl p-3.5 mb-6 border border-black/5">
                  {service.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx}>
                      <div className="font-heading font-bold text-lg text-[#4B1D73]">
                        {m.value}
                      </div>
                      <div className="text-[11px] text-[#6B6B6B] font-medium leading-tight">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Core Deliverables Preview List */}
                <div className="space-y-2.5 mb-8 flex-grow">
                  <div className="text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Key Deliverables:
                  </div>
                  {service.deliverables.slice(0, 4).map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm text-[#2B2B2B]">
                      <CheckCircle2 className="w-4 h-4 text-[#4B1D73] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-black/5 flex items-center gap-3">
                  <button
                    type="button"
                    id={`view-deliverables-${service.id}`}
                    onClick={() => {
                      setSelectedService(service);
                      setShowModal(true);
                    }}
                    className="text-xs font-semibold text-[#4B1D73] hover:text-[#1A1A1A] underline underline-offset-4 py-2"
                  >
                    View All Details
                  </button>
                  <button
                    type="button"
                    id={`book-service-${service.id}`}
                    onClick={() => onOpenBooking(service.title)}
                    className="ml-auto text-xs font-semibold bg-[#4B1D73] text-white px-4 py-2.5 rounded-full hover:bg-[#391557] transition-colors inline-flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Special GEO Deep-Dive Callout Box */}
        <div className="bg-[#1A1A1A] rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#4B1D73] text-purple-200 text-xs font-semibold tracking-wide uppercase mb-3">
                <Bot className="w-3.5 h-3.5" /> Generative Engine Optimization (GEO)
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white mb-3">
                Why Traditional SEO Alone Isn't Enough Anymore
              </h3>
              <p className="text-gray-300 text-base leading-relaxed max-w-2xl">
                When prospective buyers ask ChatGPT, Perplexity, or Gemini for the "best marketing partner for seed-stage startups" or "top legal consultant in Chicago", where does your brand appear? Clicera optimizes entity authority, structured schemas, and digital citations so AI systems recommend you by name.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                id="geo-audit-btn"
                onClick={() => onOpenBooking('Modern SEO & GEO')}
                className="btn-primary bg-white text-[#1A1A1A] hover:bg-gray-100 font-semibold text-sm py-3.5 px-6 rounded-full"
              >
                <span>Check Your AI Citation Score</span>
                <ArrowRight className="w-4 h-4 text-[#4B1D73]" />
              </button>
              <div className="text-xs text-gray-400 text-center lg:text-left">
                Included with every SEO & Growth engagement.
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Deliverables Detail Modal */}
      {showModal && (
        <div
          id="deliverables-modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setShowModal(false)}
        >
          <div
            id="deliverables-modal-content"
            className="bg-[#FAF7F2] rounded-3xl max-w-2xl w-full p-8 shadow-2xl border border-purple-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-black/10 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#4B1D73]">
                  {selectedService.tag}
                </span>
                <h3 className="font-heading font-bold text-2xl text-[#2B2B2B]">
                  {selectedService.title}
                </h3>
              </div>
              <button
                type="button"
                id="close-deliverables-modal-btn"
                onClick={() => setShowModal(false)}
                className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {/* Modal Visual Image Preview */}
            <div className="relative rounded-2xl overflow-hidden mb-6 aspect-[21/9] bg-gray-100 border border-black/5">
              <img
                src={
                  selectedService.id === 'seo-geo'
                    ? SERVICE_MEDIA.seoGeo.image
                    : selectedService.id === 'social-media'
                    ? SERVICE_MEDIA.social.image
                    : SERVICE_MEDIA.content.image
                }
                alt={selectedService.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white text-xs font-medium">
                {selectedService.id === 'seo-geo'
                  ? SERVICE_MEDIA.seoGeo.caption
                  : selectedService.id === 'social-media'
                  ? SERVICE_MEDIA.social.caption
                  : SERVICE_MEDIA.content.caption}
              </div>
            </div>

            <p className="text-[#6B6B6B] text-base leading-relaxed mb-6">
              {selectedService.fullDescription}
            </p>

            <div className="mb-6">
              <h4 className="font-heading font-bold text-sm text-[#2B2B2B] uppercase tracking-wider mb-3">
                Complete Deliverable Scope:
              </h4>
              <div className="space-y-2.5">
                {selectedService.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-white p-3 rounded-xl border border-black/5">
                    <CheckCircle2 className="w-5 h-5 text-[#4B1D73] shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-[#2B2B2B]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h4 className="font-heading font-bold text-sm text-[#2B2B2B] uppercase tracking-wider mb-3">
                Commercial Benefits:
              </h4>
              <ul className="list-disc list-inside space-y-1.5 text-sm text-[#6B6B6B]">
                {selectedService.keyBenefits.map((benefit, idx) => (
                  <li key={idx}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-black/10">
              <button
                type="button"
                id="modal-close-btn"
                onClick={() => setShowModal(false)}
                className="btn-secondary py-2.5 px-5 text-sm"
              >
                Close
              </button>
              <button
                type="button"
                id="modal-book-btn"
                onClick={() => {
                  setShowModal(false);
                  onOpenBooking(selectedService.title);
                }}
                className="btn-primary py-2.5 px-6 text-sm"
              >
                <span>Discuss {selectedService.title}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
