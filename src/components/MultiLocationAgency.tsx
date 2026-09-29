import React, { useState } from 'react';
import { Building2, Users, Check, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface MultiLocationAgencyProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const MultiLocationAgency: React.FC<MultiLocationAgencyProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'business' | 'agency'>('business');

  const businessFeatures = [
    { title: 'Multi-Location Sync', desc: 'Manage hours, holiday schedules, and service areas across 1 to 50+ stores in a single operation.' },
    { title: 'Unified Review Inbox', desc: 'View, filter, and respond to incoming reviews from every location in one organized stream.' },
    { title: 'Bulk Google Posts', desc: 'Publish location-specific updates or broadcast company-wide promotions with custom CTA links.' },
    { title: 'Consolidated Analytics', desc: 'Compare call volume, direction requests, and map impressions across different store regions.' },
    { title: 'Automated Local Workflows', desc: 'Set review escalation triggers and auto-draft routines tailored to individual store managers.' },
  ];

  const agencyFeatures = [
    { title: 'Multi-Organization Architecture', desc: 'Segregate accounts cleanly with distinct client workspaces, branding, and billing.' },
    { title: 'Unlimited Client Accounts', desc: 'Organize dozens or hundreds of client business profiles under centralized agency governance.' },
    { title: 'Granular Team Permissions', desc: 'Assign client-specific access roles: View-only, Content Creator, Review Manager, or Admin.' },
    { title: 'Client Reporting & Dashboards', desc: 'Generate exportable progress reports detailing profile view gains and review velocity.' },
    { title: 'Direct API Access', desc: 'Integrate LOCALOS data into internal agency CRMs, dashboards, and reporting pipelines.' },
    { title: 'White-Label Capabilities', desc: 'Deliver custom branded review portals (Review Online) with agency or client branding on qualified tiers.' },
  ];

  return (
    <section id="multi-location" className="py-20 bg-white border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Scalable Hierarchy
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Built for one location or hundreds.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5F6368]">
            Whether you are an independent neighborhood cafe, a regional franchise, or a digital marketing agency handling 50 clients.
          </p>

          {/* Clean Segmented Tab Switcher */}
          <div className="mt-8 inline-flex items-center p-1 bg-neutral-100 rounded-xl">
            <button
              type="button"
              onClick={() => setActiveTab('business')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-white text-[#1A73E8] shadow-xs scale-100'
                  : 'text-[#5F6368] hover:text-[#202124] hover:bg-neutral-200/50'
              }`}
            >
              <Building2 className="w-4 h-4 transition-transform duration-200" />
              <span>For Multi-Location Businesses</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('agency')}
              className={`flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === 'agency'
                  ? 'bg-white text-[#1A73E8] shadow-xs scale-100'
                  : 'text-[#5F6368] hover:text-[#202124] hover:bg-neutral-200/50'
              }`}
            >
              <Users className="w-4 h-4 transition-transform duration-200" />
              <span>For Marketing Agencies</span>
            </button>
          </div>
        </ScrollReveal>

        {/* Tab Content Display */}
        <ScrollReveal delay={120} className="max-w-4xl mx-auto">
          {activeTab === 'business' && (
            <div className="bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 sm:p-8 shadow-2xs space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[#202124]">
                    Multi-Unit Business Capabilities
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Maintain brand consistency across all branches without repetitive manual profile management.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('/signup')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1A73E8] rounded-lg hover:bg-[#1557b0] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 whitespace-nowrap cursor-pointer self-start sm:self-auto"
                >
                  Start Business Trial
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {businessFeatures.map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl bg-white border border-[#E0E3E7] hover:border-[#1A73E8]/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#202124] mb-1 group-hover:text-[#1A73E8] transition-colors">
                      <Check className="w-4 h-4 text-[#188038] transition-transform duration-200 group-hover:scale-110" />
                      {feat.title}
                    </div>
                    <p className="text-xs text-[#5F6368] leading-relaxed pl-6">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'agency' && (
            <div className="bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 sm:p-8 shadow-2xs space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-neutral-200 gap-2">
                <div>
                  <h3 className="text-lg font-bold text-[#202124]">
                    Agency & Reseller Architecture
                  </h3>
                  <p className="text-xs text-[#5F6368]">
                    Manage multiple client portfolios under one master agreement with discrete security borders.
                  </p>
                </div>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#1A73E8] rounded-lg hover:bg-[#1557b0] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xs active:translate-y-0 whitespace-nowrap cursor-pointer self-start sm:self-auto"
                >
                  Speak with Agency Team
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {agencyFeatures.map((feat) => (
                  <div key={feat.title} className="p-4 rounded-xl bg-white border border-[#E0E3E7] hover:border-[#1A73E8]/40 hover:-translate-y-0.5 hover:shadow-2xs transition-all duration-200 group">
                    <div className="flex items-center gap-2 font-bold text-sm text-[#202124] mb-1 group-hover:text-[#1A73E8] transition-colors">
                      <Check className="w-4 h-4 text-[#1A73E8] transition-transform duration-200 group-hover:scale-110" />
                      {feat.title}
                    </div>
                    <p className="text-xs text-[#5F6368] leading-relaxed pl-6">{feat.desc}</p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-[#5F6368] text-center">
                * Note: White-labeling, custom domain mapping, and API rate tiers are enabled on Agency and Enterprise agreements.
              </div>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
};
