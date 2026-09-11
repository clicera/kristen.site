import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (servicePreselect?: string) => void;
  onOpenAudit: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenAudit }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Why 1-on-1', href: '#why-one-on-one' },
    { label: 'Video Demos', href: '#video-showcase' },
    { label: 'Case Studies', href: '#work' },
    { label: 'Growth Audit', href: '#audit', onClick: onOpenAudit },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF7F2]/90 backdrop-blur-md shadow-xs py-3.5 border-b border-[#2B2B2B]/5'
          : 'bg-[#FAF7F2] py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          id="brand-logo-link"
          className="flex items-center gap-2 group transition-transform active:scale-98"
        >
          <div className="w-10 h-10 rounded-full bg-[#4B1D73] flex items-center justify-center text-white font-bold text-xl shadow-xs group-hover:bg-[#391557] transition-colors">
            C
          </div>
          <span className="font-heading text-2xl font-bold tracking-tight text-[#2B2B2B]">
            Clicera<span className="text-[#4B1D73]">.</span>
          </span>
          <span className="hidden sm:inline-block ml-2 text-xs uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#F0EBF5] text-[#4B1D73] font-semibold border border-[#4B1D73]/15">
            1-on-1 Marketing
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={(e) => {
                if (link.onClick) {
                  e.preventDefault();
                  link.onClick();
                  const target = document.querySelector(link.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="text-[15px] font-medium text-[#2B2B2B] hover:text-[#4B1D73] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#4B1D73] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            type="button"
            id="nav-audit-trigger-btn"
            onClick={onOpenAudit}
            className="text-[15px] font-medium text-[#4B1D73] hover:text-[#1A1A1A] px-3.5 py-2 rounded-full hover:bg-[#F0EBF5] transition-colors inline-flex items-center gap-1.5"
          >
            <Sparkles className="w-4 h-4 text-[#4B1D73]" />
            Free Audit
          </button>

          <button
            type="button"
            id="nav-cta-booking-btn"
            onClick={() => onOpenBooking()}
            className="btn-primary py-3 px-5 text-[15px] shadow-sm"
          >
            <span>Book 1-on-1 Call</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          id="mobile-menu-toggle-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl text-[#2B2B2B] hover:bg-[#F0EBF5] transition-colors"
          aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-menu"
          className="lg:hidden bg-[#FAF7F2] border-b border-[#2B2B2B]/10 px-6 py-6 space-y-4 shadow-xl"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (link.onClick) link.onClick();
                }}
                className="text-lg font-medium text-[#2B2B2B] hover:text-[#4B1D73] py-2 transition-colors border-b border-gray-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              type="button"
              id="mobile-audit-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAudit();
              }}
              className="btn-secondary w-full justify-center text-sm py-3"
            >
              <Sparkles className="w-4 h-4 text-[#4B1D73]" />
              Run 2-Min Growth Audit
            </button>
            <button
              type="button"
              id="mobile-book-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="btn-primary w-full justify-center text-sm py-3"
            >
              <PhoneCall className="w-4 h-4" />
              Book Free 1-on-1 Call
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
