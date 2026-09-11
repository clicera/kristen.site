import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Sparkles, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Services', '1-on-1 Approach', 'Pricing & Process'];

  const filteredFaqs = selectedCategory === 'All'
    ? FAQS
    : FAQS.filter(f => f.category === selectedCategory);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] mb-4 border border-[#4B1D73]/15">
            <HelpCircle className="w-4 h-4 text-[#4B1D73]" />
            <span className="typography-h2 text-[12px] sm:text-[14px] text-[#4B1D73]">
              COMMON QUESTIONS
            </span>
          </div>

          <h2 className="typography-h3 font-bold text-[#2B2B2B] mb-4">
            Everything You Need to Know Before Partnering
          </h2>
          <p className="typography-body max-w-xl mx-auto">
            Clear, honest answers about our freelance marketing model, GEO methodology, and working expectations.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              id={`faq-category-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
              onClick={() => {
                setSelectedCategory(cat);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-[#4B1D73] text-white shadow-xs'
                  : 'bg-white text-[#2B2B2B] hover:text-[#4B1D73] border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                id={`faq-item-${idx}`}
                className="bg-white rounded-2xl border border-[#2B2B2B]/10 overflow-hidden transition-all shadow-xs hover:border-[#4B1D73]/30"
              >
                <button
                  type="button"
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-heading font-bold text-base sm:text-lg text-[#2B2B2B] hover:text-[#4B1D73] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#FAF7F2] text-[#4B1D73] flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#F0EBF5]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#6B6B6B] leading-relaxed border-t border-gray-50">
                    <p>{faq.answer}</p>
                    <div className="mt-3">
                      <span className="text-[11px] font-semibold text-[#4B1D73] bg-[#F0EBF5] px-2.5 py-0.5 rounded-full border border-purple-100">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-12 text-center bg-[#F0EBF5] rounded-3xl p-8 border border-[#4B1D73]/15">
          <h4 className="font-heading font-bold text-lg text-[#2B2B2B] mb-2">
            Have a specific question about your niche or tech stack?
          </h4>
          <p className="text-xs sm:text-sm text-[#6B6B6B] mb-5 max-w-md mx-auto">
            Book a casual 20-minute chat or send your inquiry directly. We reply within 24 hours.
          </p>
          <a
            href="mailto:hello@clicera.com"
            id="faq-email-direct-btn"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#4B1D73] bg-white px-5 py-2.5 rounded-full hover:bg-gray-50 border border-purple-100 shadow-xs"
          >
            Email: hello@clicera.com
          </a>
        </div>

      </div>
    </section>
  );
};
