import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyOneOnOne } from './components/WhyOneOnOne';
import { VideoShowcase } from './components/VideoShowcase';
import { InteractiveAudit } from './components/InteractiveAudit';
import { CaseStudies } from './components/CaseStudies';
import { PricingSection } from './components/PricingSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { VideoModal } from './components/VideoModal';
import { Bot, Search, Share2, PenTool, ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');

  const handleOpenBooking = (serviceName?: string) => {
    setPreselectedService(serviceName || 'Modern SEO & GEO');
    setIsBookingOpen(true);
  };

  const handleOpenVideoModal = () => {
    setIsVideoModalOpen(true);
  };

  const handleOpenAudit = () => {
    const auditElement = document.getElementById('audit');
    if (auditElement) {
      auditElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAuditStrategySchedule = (strategySummary: string) => {
    setPreselectedService(strategySummary);
    setIsBookingOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#2B2B2B] flex flex-col font-sans selection:bg-[#4B1D73] selection:text-white">
      {/* Top Banner: Limited Retainer Capacity Callout */}
      <aside
        id="top-announcement-banner"
        aria-label="Announcement"
        className="bg-[#1A1A1A] text-white py-2 px-4 text-center text-xs font-medium border-b border-black/10 flex items-center justify-center gap-2"
      >
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Currently accepting 1 new client for Q3 growth sprint</span>
        <button
          type="button"
          onClick={() => handleOpenBooking('Q3 Growth Sprint')}
          className="text-purple-300 hover:text-white underline font-semibold ml-2 inline-flex items-center gap-0.5 cursor-pointer"
        >
          Check Availability <ArrowUpRight className="w-3 h-3" />
        </button>
      </aside>

      {/* Main Navigation */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenAudit={handleOpenAudit}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenAudit={handleOpenAudit}
          onOpenVideo={handleOpenVideoModal}
        />

        {/* Niche Capabilities Marquee Strip */}
        <section
          id="capabilities-ticker-bar"
          aria-label="Capabilities Overview"
          className="py-6 bg-[#F0EBF5] border-y border-[#4B1D73]/10 overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-6 text-xs sm:text-sm font-semibold text-[#4B1D73]">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#4B1D73]" />
                <span>Search Engine Optimization (SEO)</span>
              </div>
              <div className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[#4B1D73]" />
                <span>Generative Engine Optimization (GEO)</span>
              </div>
              <div className="flex items-center gap-2">
                <Share2 className="w-4 h-4 text-[#4B1D73]" />
                <span>Strategic Social Media Marketing</span>
              </div>
              <div className="flex items-center gap-2">
                <PenTool className="w-4 h-4 text-[#4B1D73]" />
                <span>Authoritative Content Writing & Blogging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#4B1D73]" />
                <span>1-on-1 Direct Execution</span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Disciplines / Services Section */}
        <ServicesSection
          onOpenBooking={(serviceTitle) => handleOpenBooking(serviceTitle)}
        />

        {/* The 1-on-1 Difference / Agency Comparison Section */}
        <WhyOneOnOne
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* Video Breakdowns & Live Demonstrations Showcase */}
        <VideoShowcase
          onOpenBooking={(serviceName) => handleOpenBooking(serviceName)}
        />

        {/* Interactive Growth Audit Tool */}
        <InteractiveAudit
          onScheduleCall={handleAuditStrategySchedule}
        />

        {/* Real Client Case Studies & Verified Results */}
        <CaseStudies
          onOpenBooking={() => handleOpenBooking('Custom Case Study Strategy')}
        />

        {/* Transparent Packages & Sprint Pricing */}
        <PricingSection
          onOpenBooking={(pkgName) => handleOpenBooking(pkgName)}
        />

        {/* Client Testimonials & Social Proof */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FaqSection />
      </main>

      {/* Deep Contrast Dark Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAudit={handleOpenAudit}
      />

      {/* 1-on-1 Strategy Session Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        preselectedService={preselectedService}
      />

      {/* Interactive Video Walkthrough Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        onOpenBooking={() => handleOpenBooking('Video Walkthrough Strategy')}
      />
    </div>
  );
}
