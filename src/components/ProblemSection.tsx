import React from 'react';
import { MessageSquareOff, Layers, Compass, Cog } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      title: 'Reviews go unanswered',
      explanation: 'Slow responses can leave customers waiting and make reputation management harder.',
      icon: MessageSquareOff,
      impact: 'Unanswered reviews directly lower conversion and reduce trust among prospective local customers.',
    },
    {
      title: 'Your profile data is scattered',
      explanation: 'Business information, posts, media and performance insights are often managed manually.',
      icon: Layers,
      impact: 'Updating hours, attributes, or photos across multiple locations requires repetitive manual logins.',
    },
    {
      title: 'Local SEO is difficult to track',
      explanation: 'Visibility, keywords and competitors require consistent monitoring.',
      icon: Compass,
      impact: 'Without clear proximity-based visibility tracking, businesses operate blindly against local competitors.',
    },
    {
      title: 'Automation takes too much work',
      explanation: 'Teams repeatedly perform the same tasks instead of building repeatable workflows.',
      icon: Cog,
      impact: 'Managers spend hours each week drafting standard updates rather than serving patrons.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#D93025]">
            The Operational Challenge
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Your local presence shouldn&apos;t require five different tools.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F6368]">
            Managing Google Business Profiles at scale often means toggling between multiple dashboards, spreadsheets, and manual review portals.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((prob, idx) => (
            <ScrollReveal key={prob.title} delay={idx * 80}>
              <div
                className="card-interactive bg-neutral-50/60 rounded-xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:bg-white shadow-2xs flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-red-50 text-[#D93025] flex items-center justify-center mb-5 card-icon-container">
                    <prob.icon className="w-5 h-5 transition-transform duration-200" />
                  </div>
                  <div className="text-xs font-mono font-semibold text-[#5F6368] mb-1">
                    0{idx + 1}. Problem
                  </div>
                  <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">{prob.title}</h3>
                  <p className="text-sm text-[#5F6368] leading-relaxed mb-4">{prob.explanation}</p>
                </div>

                <div className="pt-4 border-t border-neutral-200/70 text-xs text-[#5F6368] bg-white/70 -mx-2 -mb-2 p-3 rounded-lg group-hover:bg-neutral-50 transition-colors duration-200">
                  <span className="font-semibold text-[#202124]">Impact:</span> {prob.impact}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

