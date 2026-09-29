import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface FaqItem {
  q: string;
  a: string;
}

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: 'What is LOCALOS AI?',
      a: 'LOCALOS AI is a specialized local business growth and automation platform designed specifically for managing Google Business Profiles, customer review workflows, local SEO signals, posts, and proximity performance metrics from one unified workspace.',
    },
    {
      q: 'How does Google Business Profile connection work?',
      a: 'Businesses connect their profiles using Google’s standard, secure OAuth 2.0 authorization screen. You sign in directly through Google and grant LOCALOS AI permissions to read and update your authorized listings and performance statistics.',
    },
    {
      q: 'Do I need to give LOCALOS my Google password?',
      a: 'No. LOCALOS AI never asks customers for their Google password. Businesses connect strictly through Google’s official OAuth authorization flow. Your Google credentials never touch our servers.',
    },
    {
      q: 'Can customers automatically submit reviews?',
      a: 'No. Customers manually submit their review on Google using their own Google account. LOCALOS AI does not automatically submit reviews, strictly upholding Google Business Profile community standards, anti-gating policies, and FTC compliance.',
    },
    {
      q: 'What is Review Online?',
      a: 'Review Online is our in-person QR and NFC customer experience tool. When patrons scan a branded table tent or tap an NFC card at your counter, it presents a frictionless screen where they select sentiment chips, draft an authentic review text, copy it with one tap, and continue directly to your Google review link to publish.',
    },
    {
      q: 'Can I manage multiple locations?',
      a: 'Yes. LOCALOS AI is engineered for multi-location businesses. You can toggle between branches, synchronize operational hours in bulk, track comparative proximity rankings, and aggregate review feeds across dozens of locations.',
    },
    {
      q: 'Can agencies use LOCALOS AI?',
      a: 'Yes. Our Agency tier allows marketing consultancies and digital agencies to manage separate client organizations with segregated workspaces, custom team role permissions, and consolidated performance reporting.',
    },
    {
      q: 'Does LOCALOS use real Google data?',
      a: 'Yes. All metrics—including search queries, Maps impressions, telephone clicks, and direction requests—are fetched directly from authorized Google Business Profile API endpoints.',
    },
    {
      q: 'Can I approve AI-generated replies?',
      a: 'Yes. You have full discretion over automation policies. In "Approval Required" mode, every suggested AI review response and scheduled Google Post remains in draft status until a designated manager reviews, edits, and authorizes publication.',
    },
    {
      q: 'What happens if Google access expires?',
      a: 'Google OAuth access tokens automatically refresh securely server-side. If you change your Google account password or revoke permissions from your Google Security console, LOCALOS AI immediately alerts you to reconnect through Google OAuth in one click.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-t border-[#E0E3E7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Clear Answers
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-[#5F6368]">
            Transparent details about our Google Business Profile integration, security standards, and operational features.
          </p>
        </ScrollReveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal key={faq.q} delay={index * 40}>
                <div
                  className={`rounded-xl border transition-all duration-200 overflow-hidden shadow-2xs ${
                    isOpen ? 'border-[#1A73E8]/50 ring-1 ring-[#1A73E8]/20 bg-white' : 'border-[#E0E3E7] bg-white hover:border-[#1A73E8]/40 hover:bg-neutral-50/40'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-bold text-[#202124] hover:bg-neutral-50/70 transition-colors duration-150 cursor-pointer group"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4 group-hover:text-[#1A73E8] transition-colors duration-150">{faq.q}</span>
                    <ChevronDown
                      className={`w-4.5 h-4.5 shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-180 text-[#1A73E8]' : 'text-[#5F6368] group-hover:text-[#202124]'
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs sm:text-sm text-[#5F6368] leading-relaxed border-t border-neutral-100 pt-3 animate-in fade-in slide-in-from-top-1 duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
