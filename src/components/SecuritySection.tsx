import React from 'react';
import { ShieldCheck, Key, Lock, UserCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SecuritySection: React.FC = () => {
  const securityCards = [
    {
      title: 'Google OAuth 2.0',
      tagline: 'Customers authorize their own Google Business Profile access.',
      desc: 'Users connect directly via Google’s official consent screen. We only request the minimum required permissions necessary to manage your profile and view analytics.',
      icon: Key,
    },
    {
      title: 'Encrypted Credentials',
      tagline: 'Sensitive credentials are handled strictly server-side.',
      desc: 'No Google refresh tokens, client secrets, or private API keys are ever stored in the browser, cookies, or localStorage. All data exchanges use TLS 1.3 encryption.',
      icon: Lock,
    },
    {
      title: 'Role-Based Access (RBAC)',
      tagline: 'Control who can view, edit, approve and publish.',
      desc: 'Assign fine-grained roles across staff members. Restrict frontline staff to review drafting while reserving final Google publication rights for managers.',
      icon: UserCheck,
    },
    {
      title: 'Immutable Audit Logs',
      tagline: 'Track important actions and automation events.',
      desc: 'Maintain a chronological log of all profile edits, published posts, AI draft approvals, and team invitations for complete operational accountability.',
      icon: FileCheck,
    },
  ];

  return (
    <section id="security" className="py-20 bg-[#FAFAFA] border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#188038]">
            Enterprise Trust & Security
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Your data stays under your control.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5F6368]">
            Built with strict data segregation, zero client-side secret exposure, and full compliance with Google API Services User Data Policy.
          </p>
        </ScrollReveal>

        {/* 4 Security Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityCards.map((card, idx) => (
            <ScrollReveal key={card.title} delay={idx * 70}>
              <div
                className="h-full bg-white rounded-2xl border border-[#E0E3E7] p-6 shadow-2xs hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#188038] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-[#202124] mb-1 group-hover:text-[#1A73E8] transition-colors">{card.title}</h3>
                  <div className="text-xs font-semibold text-[#188038] mb-3">{card.tagline}</div>
                  <p className="text-xs text-[#5F6368] leading-relaxed">{card.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] text-[#188038] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" /> Verified Security Standard
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Explicit Privacy & API Integrity Banner */}
        <ScrollReveal delay={150}>
          <div className="max-w-4xl mx-auto p-6 rounded-2xl bg-white border border-[#E0E3E7] shadow-xs hover:border-[#1A73E8]/40 transition-colors duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-6 h-6 text-[#1A73E8] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#202124]">
                    Google API Services User Data Policy Compliance
                  </h4>
                  <p className="text-xs text-[#5F6368] mt-1 leading-relaxed">
                    LOCALOS AI’s use and transfer of information received from Google APIs adheres to the Google API Services User Data Policy, including the Limited Use requirements. We never sell your Google data to third parties or use it to train generalized public AI models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
