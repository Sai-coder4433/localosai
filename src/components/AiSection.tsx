import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  FileText,
  Search,
  MessageSquare,
  Workflow,
  AlertCircle,
  Check,
  X
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AiSection: React.FC = () => {
  const [recommendationDismissed, setRecommendationDismissed] = useState(false);
  const [recommendationApplied, setRecommendationApplied] = useState(false);

  const capabilities = [
    {
      title: 'AI Review Replies',
      desc: 'Crafts thoughtful, personalized responses based on the actual customer feedback and specific business attributes.',
      icon: MessageSquare,
      badge: 'Tone-matched',
    },
    {
      title: 'AI Google Posts',
      desc: 'Drafts promotional updates, holiday announcements, and event highlights from your existing business catalog and hours.',
      icon: FileText,
      badge: 'Fact-grounded',
    },
    {
      title: 'AI Local SEO Suggestions',
      desc: 'Identifies missing primary and secondary categories, service area gaps, and high-intent local query opportunities.',
      icon: Search,
      badge: 'Search-aligned',
    },
    {
      title: 'AI Automation Actions',
      desc: 'Classifies incoming inquiries and triages high-priority reputation signals with automated notifications.',
      icon: Workflow,
      badge: 'Policy-safe',
    },
  ];

  const guardrails = [
    'No invented business facts: AI only references verified operational data',
    'Human approval available on every generated reply and post',
    'Sensitive low-star ratings automatically flag senior management',
    'Customer review submissions strictly remain manual on Google',
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Responsible Intelligence
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            AI that works with your real business data.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F6368] leading-relaxed">
            LOCALOS AI uses business-provided information and authorized Google data to assist with content, replies, insights and workflows.
          </p>
        </ScrollReveal>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {capabilities.map((cap, idx) => (
            <ScrollReveal key={cap.title} delay={idx * 70}>
              <div
                className="h-full p-6 rounded-2xl border border-[#E0E3E7] bg-neutral-50/40 hover:bg-white hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-2xs flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                      <cap.icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-medium text-[#1A73E8] bg-[#E8F0FE] px-2 py-0.5 rounded-full transition-colors group-hover:bg-[#1A73E8] group-hover:text-white">
                      {cap.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">{cap.title}</h3>
                  <p className="text-xs text-[#5F6368] leading-relaxed">{cap.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* 2-Column: Guardrails & Interactive AI Activity Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Guardrails List (6 cols) */}
          <ScrollReveal delay={100} className="lg:col-span-6 space-y-4">
            <h3 className="text-xl font-bold text-[#202124] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#188038]" />
              Enterprise AI Guardrails
            </h3>
            <p className="text-sm text-[#5F6368]">
              We avoid erratic hallucinations by constraining generative models strictly to the facts you publish in your Google Business Profile.
            </p>

            <div className="space-y-3 pt-2">
              {guardrails.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 border border-[#E0E3E7] hover:border-[#188038]/30 hover:bg-neutral-50/80 transition-all duration-200 group">
                  <CheckCircle className="w-4 h-4 text-[#188038] shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                  <span className="text-xs text-[#202124] font-medium leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Clean AI Activity Panel (6 cols) */}
          <ScrollReveal delay={200} className="lg:col-span-6 bg-white rounded-2xl border border-[#E0E3E7] shadow-md hover:shadow-lg transition-shadow duration-300 p-6 sm:p-7">
            <div className="flex items-center justify-between pb-4 border-b border-[#E0E3E7]">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#1A73E8] animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                  AI Activity & Optimization Panel
                </span>
              </div>
              <span className="text-xs text-[#188038] font-medium bg-emerald-50 px-2 py-0.5 rounded-sm">
                Real-time Monitor
              </span>
            </div>

            {/* Simulated Recommendation Card */}
            {!recommendationDismissed ? (
              <div className="mt-5 p-4 rounded-xl border border-amber-200 bg-amber-50/50 hover:border-amber-300 transition-colors duration-200">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-[#202124]">
                      AI Recommendation: Service Menu Gap
                    </div>
                    <p className="mt-1 text-xs text-[#5F6368] leading-relaxed">
                      &ldquo;Your profile has incomplete service information. Adding explicit items for &lsquo;Catering&rsquo; and &lsquo;Private Events&rsquo; matches 42 local searches this month.&rdquo;
                    </p>

                    {recommendationApplied ? (
                      <div className="mt-3 flex items-center gap-1.5 text-xs text-[#188038] font-semibold animate-in fade-in duration-200">
                        <Check className="w-4 h-4" /> Suggestion submitted to Google Profile queue
                      </div>
                    ) : (
                      <div className="mt-3 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => setRecommendationApplied(true)}
                          className="px-3 py-1.5 text-xs font-semibold bg-[#1A73E8] text-white hover:bg-[#1557b0] rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 cursor-pointer"
                        >
                          Review suggestion
                        </button>
                        <button
                          type="button"
                          onClick={() => setRecommendationDismissed(true)}
                          className="px-3 py-1.5 text-xs font-medium text-[#5F6368] hover:text-[#202124] hover:bg-neutral-100 rounded-md transition-colors cursor-pointer"
                        >
                          Dismiss
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mt-5 p-6 rounded-xl border border-dashed border-neutral-200 text-center text-xs text-[#5F6368]">
                Recommendation dismissed. Next automated profile audit scheduled in 4 hours.
                <div className="mt-2">
                  <button
                    onClick={() => {
                      setRecommendationDismissed(false);
                      setRecommendationApplied(false);
                    }}
                    className="text-[#1A73E8] font-semibold hover:underline cursor-pointer"
                  >
                    Reset Demo Card
                  </button>
                </div>
              </div>
            )}

            {/* Audit log item */}
            <div className="mt-4 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-[#5F6368]">
              <span>Audit Source: Authorized Business Profile API</span>
              <span className="font-mono">Checked 12 mins ago</span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
