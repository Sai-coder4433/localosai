import React from 'react';
import {
  MapPin,
  Star,
  QrCode,
  FileEdit,
  Search,
  BarChart,
  Navigation,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const CoreFeatures: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Complete Operational Suite
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Everything your local presence needs.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5F6368]">
            Architected specifically for Google Business Profile workflows, brand consistency, and reliable local visibility.
          </p>
        </ScrollReveal>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Google Business Profile */}
          <ScrollReveal delay={0}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#E8F0FE] text-[#1A73E8] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Google Business Profile</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Connect and manage authorized Google Business Profiles from one workspace.
                </p>
                <ul className="text-xs text-[#202124] space-y-2 mb-6">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Direct Google OAuth connection</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Multi-location syncing</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Core hours & attributes update</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Location permission management</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Standardized listing governance</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Reviews & Reputation */}
          <ScrollReveal delay={70}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <Star className="w-5 h-5 fill-amber-500 text-amber-500" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Reviews & Reputation</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Stay on top of customer feedback and respond faster.
                </p>
                <ul className="text-xs text-[#202124] space-y-2 mb-6">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Real-time review monitoring</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Context-aware AI reply drafts</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Mandatory approval workflows</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Critical sentiment alerts</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Never miss customer praise or concerns</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Review Online */}
          <ScrollReveal delay={140}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1A73E8] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <QrCode className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Review Online</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Give customers a simple way to share their experience via QR and NFC.
                </p>
                <div className="p-2.5 rounded-lg bg-white border border-[#E0E3E7] text-[11px] text-[#5F6368] mb-3 space-y-1 group-hover:border-[#1A73E8]/30 transition-colors duration-200">
                  <div className="font-semibold text-[#202124]">Guided 7-Step Flow:</div>
                  <div>Scan → Rate → Experience → Draft → Edit → Copy → Continue to Google</div>
                </div>
                <div className="p-2 rounded-md bg-amber-50 border border-amber-200 text-[11px] text-amber-900 font-medium">
                  Important: Customers always submit their review themselves on Google.
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Zero review gating policy compliant</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: AI Google Posts */}
          <ScrollReveal delay={210}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#188038] flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <FileEdit className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">AI Google Posts</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Create consistent Google Posts from real business information.
                </p>
                <ul className="text-xs text-[#202124] space-y-2 mb-6">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> AI grounded in genuine store details</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Multiple copy variations</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Automated publishing schedules</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Call-to-action button linking</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Keeps profiles active & fresh</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 5: Local SEO */}
          <ScrollReveal delay={280}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <Search className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Local SEO Signals</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Understand the local ranking signals that influence neighborhood discovery.
                </p>
                <ul className="text-xs text-[#202124] space-y-2 mb-6">
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Local keyword opportunity analysis</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Continuous profile completeness audit</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Competitor category insights</li>
                  <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-[#188038]" /> Actionable optimization tasks</li>
                </ul>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Transparent proximity indicators</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 6: Local Analytics */}
          <ScrollReveal delay={350}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <BarChart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Local Analytics</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Understand how customers interact with your Google Business Profile.
                </p>
                <div className="grid grid-cols-2 gap-2 text-[11px] text-[#202124] mb-4">
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Profile views</div>
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Direct searches</div>
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Phone call taps</div>
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Direction requests</div>
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Chat messages</div>
                  <div className="p-1.5 rounded-sm bg-white border border-[#E0E3E7] group-hover:border-neutral-300 transition-colors">Website clicks</div>
                </div>
                <div className="text-[11px] text-[#5F6368] italic">
                  * Metrics depend directly on Google API availability. No blended external noise.
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Clean first-party engagement data</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 7: Visibility Tracking */}
          <ScrollReveal delay={420}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <Navigation className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Visibility Tracking</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-3">
                  Monitor local visibility across geographic areas around your store.
                </p>
                {/* Mini Geo-Grid preview */}
                <div className="p-3 bg-white rounded-lg border border-[#E0E3E7] mb-3 group-hover:border-[#1A73E8]/30 transition-colors">
                  <div className="text-[11px] text-[#5F6368] font-semibold mb-2">Simulated Proximity Grid</div>
                  <div className="grid grid-cols-3 gap-1.5 max-w-[120px] mx-auto">
                    <div className="w-7 h-7 rounded-sm bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">1</div>
                    <div className="w-7 h-7 rounded-sm bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">2</div>
                    <div className="w-7 h-7 rounded-sm bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">4</div>
                    <div className="w-7 h-7 rounded-sm bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">1</div>
                    <div className="w-7 h-7 rounded-sm bg-[#1A73E8] text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">★</div>
                    <div className="w-7 h-7 rounded-sm bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">2</div>
                    <div className="w-7 h-7 rounded-sm bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">3</div>
                    <div className="w-7 h-7 rounded-sm bg-red-400 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">7</div>
                    <div className="w-7 h-7 rounded-sm bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center hover:scale-110 transition-transform">2</div>
                  </div>
                </div>
                <div className="text-[11px] text-[#5F6368]">
                  Grid rankings visual indicator (Demo representation).
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Geographic radius insights</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>

          {/* Card 8: Automations */}
          <ScrollReveal delay={490}>
            <div className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col justify-between group shadow-2xs">
              <div>
                <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-105 group-hover:translate-x-0.5">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors duration-200">Automations</h3>
                <p className="text-xs text-[#5F6368] leading-relaxed mb-4">
                  Turn repetitive local marketing work into predictable workflows.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-white rounded-md border border-[#E0E3E7] flex items-center gap-1.5 hover:border-[#1A73E8]/40 transition-colors">
                    <span className="font-semibold text-[#1A73E8]">Flow A:</span>
                    <span className="text-[#5F6368]">Review → AI Draft → Approval → Post</span>
                  </div>
                  <div className="p-2 bg-white rounded-md border border-[#E0E3E7] flex items-center gap-1.5 hover:border-purple-300 transition-colors">
                    <span className="font-semibold text-purple-700">Flow B:</span>
                    <span className="text-[#5F6368]">Rank Drop → Alert → SEO Audit</span>
                  </div>
                </div>
              </div>
              <div className="pt-3 border-t border-neutral-200/60 text-[11px] text-[#5F6368] flex items-center justify-between">
                <span>Automate tasks while retaining human oversight</span>
                <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#1A73E8] group-hover:translate-x-1 transition-all duration-200" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
