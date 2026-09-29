import React, { useState } from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, Mail, MessageSquare, Send, AlertCircle, Building2, MapPin } from 'lucide-react';

interface ContactPageProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ navigateTo }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields (Name, Email, Message).');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  return (
    <div className="bg-white min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A73E8] hover:text-[#1557b0] mb-8 cursor-pointer transition-transform duration-200 hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                Direct Communication
              </span>
              <h1 className="text-3xl font-extrabold text-[#202124] tracking-tight mt-1">
                Contact Our Team
              </h1>
              <p className="text-sm text-[#5F6368] mt-3 leading-relaxed">
                Have a question about the platform or integrations? We&apos;re here to assist business owners, agency leads, and technical integrators.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-neutral-100 text-xs">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#E8F0FE] text-[#1A73E8] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#202124]">General Inquiries</div>
                  <div className="text-[#5F6368]">contact@localos.ai</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#E8F0FE] text-[#1A73E8] shrink-0">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#202124]">Agency & Enterprise Partnerships</div>
                  <div className="text-[#5F6368]">partners@localos.ai</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#E8F0FE] text-[#1A73E8] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-[#202124]">API & Platform Support</div>
                  <div className="text-[#5F6368]">support@localos.ai</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E0E3E7] text-xs text-[#5F6368] space-y-1">
              <div className="font-semibold text-[#202124]">Response SLA</div>
              <p>Our engineering and customer support team responds within 1 business day for active trial and partner accounts.</p>
            </div>
          </div>

          {/* Right form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E0E3E7] p-6 sm:p-8 shadow-xs">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-lg font-bold text-[#202124] mb-2">Send a Message</h2>

                {error && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-[#D93025] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-[#202124] mb-1">
                    Your Full Name <span className="text-[#D93025]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Maya Chen"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E0E3E7] text-xs text-[#202124] focus:outline-hidden focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-[#202124] mb-1">
                    Work Email <span className="text-[#D93025]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="maya@spiralcafe.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E0E3E7] text-xs text-[#202124] focus:outline-hidden focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-company" className="block text-xs font-semibold text-[#202124] mb-1">
                    Company / Business Name
                  </label>
                  <input
                    id="contact-company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Spiral Katta Cafe"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E0E3E7] text-xs text-[#202124] focus:outline-hidden focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8]"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-semibold text-[#202124] mb-1">
                    How can we help? <span className="text-[#D93025]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your locations, current profile challenges, or questions regarding Google API access..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#E0E3E7] text-xs text-[#202124] focus:outline-hidden focus:border-[#1A73E8] focus:ring-1 focus:ring-[#1A73E8]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer group"
                >
                  <Send className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            ) : (
              /* Honest Demo Mode / Unconfigured State as required */
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mx-auto border border-amber-200">
                  <AlertCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#202124]">
                  Demo Mode: Form Submission Not Configured
                </h3>
                <p className="text-xs text-[#5F6368] max-w-sm mx-auto leading-relaxed">
                  To ensure full transparency during preview and API verification, backend email relays are currently in demo mode. Your input was received locally:
                </p>
                <div className="p-4 rounded-xl bg-neutral-50 border border-[#E0E3E7] text-xs text-left text-[#202124] space-y-1">
                  <div><strong>From:</strong> {formData.name} ({formData.email})</div>
                  <div><strong>Company:</strong> {formData.company || 'Not specified'}</div>
                  <div className="truncate"><strong>Message:</strong> {formData.message}</div>
                </div>
                <p className="text-xs text-[#5F6368]">
                  Please reach out directly at <strong className="text-[#1A73E8]">contact@localos.ai</strong> or <strong className="text-[#1A73E8]">partners@localos.ai</strong> for immediate correspondence.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', company: '', message: '' });
                  }}
                  className="text-xs font-semibold text-[#1A73E8] hover:underline cursor-pointer"
                >
                  ← Submit Another Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
