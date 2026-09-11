import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, ArrowRight, Video, Sparkles, User, Mail, Globe, MessageSquare } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService = ''
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [service, setService] = useState(preselectedService || 'Modern SEO & GEO');
  const [goal, setGoal] = useState('');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('11:00 AM EST');
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  const dates = [
    { label: 'Tomorrow', desc: 'Sep 12' },
    { label: 'Monday', desc: 'Sep 15' },
    { label: 'Tuesday', desc: 'Sep 16' },
    { label: 'Wednesday', desc: 'Sep 17' }
  ];

  const times = [
    '10:00 AM EST',
    '11:30 AM EST',
    '2:00 PM EST',
    '4:30 PM EST'
  ];

  return (
    <div
      id="booking-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs transition-opacity"
      onClick={onClose}
    >
      <div
        id="booking-modal-card"
        className="bg-[#FAF7F2] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-purple-100 max-h-[92vh] overflow-y-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          id="close-booking-modal-btn"
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 text-gray-700 flex items-center justify-center text-sm font-bold transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F0EBF5] text-[#4B1D73] text-xs font-semibold uppercase tracking-wider mb-2">
                <Video className="w-3.5 h-3.5" /> 1-on-1 Strategy Session
              </div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#2B2B2B]">
                Book Your Free 20-Min Call
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1">
                No high-pressure sales reps. A direct 1-on-1 strategy conversation with your freelance marketing specialist.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="booking-name-input" className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="text"
                      id="booking-name-input"
                      required
                      placeholder="Alex Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#4B1D73]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-email-input" className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      id="booking-email-input"
                      required
                      placeholder="alex@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#4B1D73]"
                    />
                  </div>
                </div>
              </div>

              {/* Website URL */}
              <div>
                <label htmlFor="booking-website-input" className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Website or Product URL
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                  <input
                    type="url"
                    id="booking-website-input"
                    placeholder="https://yourbrand.com"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl bg-white border border-gray-200 text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#4B1D73]"
                  />
                </div>
              </div>

              {/* Focus Pillar Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Primary Area of Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    'Modern SEO & GEO',
                    'Social Media Marketing',
                    'Content & Blogging'
                  ].map((srv) => (
                    <button
                      key={srv}
                      type="button"
                      id={`booking-service-btn-${srv.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => setService(srv)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-center border transition-all ${
                        service.includes(srv) || srv.includes(service)
                          ? 'bg-[#F0EBF5] text-[#4B1D73] border-[#4B1D73]'
                          : 'bg-white text-[#6B6B6B] border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {srv}
                    </button>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Preferred Day
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {dates.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      id={`booking-date-${d.label.toLowerCase()}`}
                      onClick={() => setSelectedDate(d.label)}
                      className={`p-2 rounded-xl text-center border transition-all ${
                        selectedDate === d.label
                          ? 'bg-[#4B1D73] text-white border-[#4B1D73]'
                          : 'bg-white text-[#2B2B2B] border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="text-xs font-bold">{d.label}</div>
                      <div className={`text-[10px] ${selectedDate === d.label ? 'text-purple-200' : 'text-[#6B6B6B]'}`}>
                        {d.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slot Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      id={`booking-time-${t.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => setSelectedTime(t)}
                      className={`p-2 rounded-xl text-xs font-semibold text-center border transition-all ${
                        selectedTime === t
                          ? 'bg-[#4B1D73] text-white border-[#4B1D73]'
                          : 'bg-white text-[#2B2B2B] border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label htmlFor="booking-goals-textarea" className="block text-xs font-bold uppercase tracking-wider text-[#2B2B2B] mb-1">
                  Current Goals or Bottleneck (Optional)
                </label>
                <textarea
                  id="booking-goals-textarea"
                  rows={2}
                  placeholder="e.g. We want to rank for commercial intent queries and get cited on Perplexity..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-gray-200 text-sm text-[#2B2B2B] focus:outline-hidden focus:border-[#4B1D73]"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  id="confirm-booking-btn"
                  className="btn-primary w-full text-sm py-3.5 shadow-md justify-center"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Free 1-on-1 Strategy Call</span>
                </button>
              </div>

              <div className="text-center text-[11px] text-[#6B6B6B]">
                ⚡ 100% Free · No obligation · Google Meet link emailed instantly
              </div>

            </form>
          </div>
        ) : (
          /* Submission Confirmation View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <h3 className="font-heading font-bold text-2xl text-[#2B2B2B] mb-2">
              Call Confirmed, {name}!
            </h3>

            <p className="text-sm text-[#6B6B6B] mb-6 max-w-sm mx-auto">
              Your 1-on-1 strategy call has been scheduled for <strong className="text-[#4B1D73]">{selectedDate} at {selectedTime}</strong>.
            </p>

            <div className="bg-white rounded-2xl p-5 border border-purple-100 text-left max-w-sm mx-auto mb-6 text-xs space-y-2">
              <div>
                <span className="font-bold text-[#2B2B2B]">Topic:</span> {service}
              </div>
              {website && (
                <div>
                  <span className="font-bold text-[#2B2B2B]">Domain:</span> {website}
                </div>
              )}
              <div>
                <span className="font-bold text-[#2B2B2B]">Format:</span> Google Meet Video (20 mins)
              </div>
              <div>
                <span className="font-bold text-[#2B2B2B]">Confirmation Sent:</span> {email}
              </div>
            </div>

            <button
              type="button"
              id="booking-done-btn"
              onClick={handleReset}
              className="btn-primary py-3 px-8 text-sm"
            >
              Back to Clicera
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
