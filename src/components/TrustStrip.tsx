import React from 'react';
import {
  MapPin,
  Star,
  Search,
  FileText,
  BarChart2,
  Workflow
} from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const capabilities = [
    { label: 'Google Business Profile', icon: MapPin },
    { label: 'Reviews & Reputation', icon: Star },
    { label: 'Local SEO', icon: Search },
    { label: 'Google Posts', icon: FileText },
    { label: 'Local Analytics', icon: BarChart2 },
    { label: 'Workflows & Automations', icon: Workflow },
  ];

  return (
    <section className="border-y border-[#E0E3E7] bg-[#FAFAFA] py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-[#5F6368] mb-6">
          Everything you need to manage your local presence
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 lg:gap-8">
          {capabilities.map((cap) => (
            <div
              key={cap.label}
              className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white border border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 group cursor-default"
            >
              <cap.icon className="w-4 h-4 text-[#1A73E8] shrink-0 transition-transform duration-200 group-hover:scale-110" />
              <span className="text-xs sm:text-sm font-semibold text-[#202124] whitespace-nowrap">
                {cap.label}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-5 text-[11px] text-[#5F6368]">
          * Connects directly via official Google OAuth authorization flow. No password sharing or proxy scraping.
        </div>
      </div>
    </section>
  );
};
