import React, { useState } from 'react';
import {
  MapPin,
  Star,
  QrCode,
  Search,
  FileText,
  BarChart3,
  Users2,
  Navigation2,
  Workflow,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  RefreshCw,
  Shield,
  Layers,
  Send,
  AlertCircle
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SolutionSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState('gbp');

  const navItems = [
    { id: 'gbp', label: 'Google Business Profile', icon: MapPin },
    { id: 'reviews', label: 'Reviews & Reputation', icon: Star },
    { id: 'review-online', label: 'Review Online', icon: QrCode },
    { id: 'local-seo', label: 'Local SEO', icon: Search },
    { id: 'google-posts', label: 'Google Posts', icon: FileText },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'competitors', label: 'Competitors', icon: Users2 },
    { id: 'visibility', label: 'Visibility', icon: Navigation2 },
    { id: 'automations', label: 'Automations', icon: Workflow },
  ];

  return (
    <section id="solution-section" className="py-20 bg-[#FAFAFA] border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Unified Architecture
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            One platform for your local growth operations.
          </h2>
          <p className="mt-3 text-lg text-[#5F6368]">
            LOCALOS AI brings your local business workflows into one connected workspace.
          </p>
        </ScrollReveal>

        {/* 2-Column Interactive Workspace */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Vertical navigation (4 cols) */}
          <div className="lg:col-span-4 bg-white rounded-2xl border border-[#E0E3E7] p-2 sm:p-3 shadow-xs space-y-1">
            <div className="px-3 py-2 text-xs font-semibold text-[#5F6368] uppercase tracking-wider">
              Workspace Capabilities
            </div>
            {navItems.map((item) => {
              const isActive = activeItem === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveItem(item.id)}
                  className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-left text-sm font-medium transition-all duration-200 cursor-pointer group ${
                    isActive
                      ? 'bg-[#1A73E8] text-white shadow-xs'
                      : 'text-[#5F6368] hover:text-[#202124] hover:bg-neutral-50 hover:translate-x-1'
                  }`}
                >
                  <item.icon className={`w-4 h-4 shrink-0 transition-transform duration-200 group-hover:scale-105 ${isActive ? 'text-white' : 'text-[#5F6368]'}`} />
                  <span className="truncate">{item.label}</span>
                  {isActive && <ArrowRight className="w-4 h-4 ml-auto text-white transition-transform duration-200 group-hover:translate-x-1" />}
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Panel (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-2xl border border-[#E0E3E7] shadow-md hover:shadow-lg transition-shadow duration-300 p-5 sm:p-7 min-h-[500px]">
            {/* 1. Google Business Profile Default */}
            {activeItem === 'gbp' && (
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#E0E3E7] gap-3">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                      Core Management
                    </span>
                    <h3 className="text-xl font-bold text-[#202124]">
                      Google Business Profile Central Hub
                    </h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-[#188038]">
                      <span className="w-2 h-2 rounded-full bg-[#188038] animate-pulse"></span>
                      Google Connected
                    </span>
                    <span className="text-xs text-[#5F6368] bg-neutral-100 px-2 py-1 rounded-md">
                      OAuth v2.0
                    </span>
                  </div>
                </div>

                {/* Location selector and business information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/50 hover:bg-neutral-50 hover:border-[#1A73E8]/30 transition-all duration-200">
                    <div className="text-xs font-semibold text-[#5F6368] mb-1">Active Location</div>
                    <div className="font-bold text-[#202124] text-base">Spiral Katta — Downtown</div>
                    <div className="text-xs text-[#5F6368] mt-1">428 Market Blvd, Suite 100</div>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-xs bg-emerald-100/70 text-[#188038] font-medium px-2 py-0.5 rounded-sm">
                        Verified Listing
                      </span>
                      <span className="text-xs text-[#5F6368]">Store Code: SK-001</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/50 hover:bg-neutral-50 hover:border-[#1A73E8]/30 transition-all duration-200">
                    <div className="flex items-center justify-between text-xs font-semibold text-[#5F6368] mb-1">
                      <span>Profile Completeness</span>
                      <span className="font-mono text-[#188038]">95%</span>
                    </div>
                    <div className="w-full bg-neutral-200 h-2 rounded-full overflow-hidden mt-2">
                      <div className="bg-[#188038] h-full rounded-full transition-all duration-500 ease-out" style={{ width: '95%' }}></div>
                    </div>
                    <div className="mt-3 text-xs text-[#5F6368] space-y-1">
                      <div className="flex items-center gap-1 text-[#188038]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Core hours & attributes synced
                      </div>
                      <div className="flex items-center gap-1 text-[#188038]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Menu & high-res photos verified
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Profile Activity Timeline */}
                <div>
                  <h4 className="text-sm font-bold text-[#202124] mb-3">Recent Profile Activity</h4>
                  <div className="space-y-2.5">
                    <div className="p-3 rounded-lg border border-[#E0E3E7] bg-white hover:border-[#1A73E8]/40 hover:bg-neutral-50/60 transition-all duration-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#188038]"></div>
                        <span className="font-semibold text-[#202124]">Holiday Hours Updated</span>
                        <span className="text-[#5F6368] hidden sm:inline">— Labor Day hours published</span>
                      </div>
                      <span className="text-[#5F6368] font-mono">Today, 09:15 AM</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#E0E3E7] bg-white hover:border-[#1A73E8]/40 hover:bg-neutral-50/60 transition-all duration-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#1A73E8]"></div>
                        <span className="font-semibold text-[#202124]">New Photo Approved</span>
                        <span className="text-[#5F6368] hidden sm:inline">— Outdoor patio seating photo</span>
                      </div>
                      <span className="text-[#5F6368] font-mono">Yesterday</span>
                    </div>
                    <div className="p-3 rounded-lg border border-[#E0E3E7] bg-white hover:border-[#1A73E8]/40 hover:bg-neutral-50/60 transition-all duration-200 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2 h-2 rounded-full bg-[#F9AB00]"></div>
                        <span className="font-semibold text-[#202124]">Category Verification</span>
                        <span className="text-[#5F6368] hidden sm:inline">— Primary category: Bistro & Cafe</span>
                      </div>
                      <span className="text-[#5F6368] font-mono">3 days ago</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 2. Reviews & Reputation */}
            {activeItem === 'reviews' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Feedback Intelligence
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Reviews, Sentiment & AI Reply Assistance
                  </h3>
                </div>

                <div className="p-4 rounded-xl border border-neutral-200 bg-neutral-50/50 flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <div className="text-xs text-[#5F6368]">Overall Rating</div>
                    <div className="text-2xl font-bold font-mono text-[#202124]">4.8 ★</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#5F6368]">Unreplied Reviews</div>
                    <div className="text-2xl font-bold font-mono text-[#D93025]">2</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#5F6368]">Avg. Response Time</div>
                    <div className="text-2xl font-bold font-mono text-[#188038]">1.4 hrs</div>
                  </div>
                  <div>
                    <div className="text-xs text-[#5F6368]">Sentiment Index</div>
                    <div className="text-2xl font-bold font-mono text-[#188038]">94% Positive</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E0E3E7] bg-white space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#202124]">Pending Reply Workflow</span>
                    <span className="text-xs text-[#1A73E8] font-medium flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 animate-pulse" /> AI Suggestion Available
                    </span>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-lg text-xs space-y-1">
                    <div className="flex items-center gap-1 text-[#F9AB00]">
                      <Star className="w-3 h-3 fill-[#F9AB00]" />
                      <Star className="w-3 h-3 fill-[#F9AB00]" />
                      <Star className="w-3 h-3 fill-[#F9AB00]" />
                      <Star className="w-3 h-3 fill-[#F9AB00]" />
                      <Star className="w-3 h-3 fill-[#F9AB00]" />
                      <span className="text-neutral-500 ml-1">· Maya S.</span>
                    </div>
                    <p className="text-neutral-800 italic">
                      &ldquo;Loved the Sunday jazz brunch! Quick seating and attentive staff.&rdquo;
                    </p>
                  </div>
                  <div className="p-3 bg-[#E8F0FE] rounded-lg text-xs text-[#202124] border border-[#1A73E8]/30">
                    <span className="font-semibold text-[#1A73E8]">Suggested Response:</span> &ldquo;Thank you Maya! Our Sunday jazz brunch is a team favorite. We look forward to reserving you a great table again soon!&rdquo;
                  </div>
                  <div className="flex gap-2">
                    <button className="btn-primary px-3 py-1.5 text-xs font-semibold bg-[#1A73E8] text-white rounded-md">
                      Approve & Post
                    </button>
                    <button className="btn-secondary px-3 py-1.5 text-xs font-medium border border-[#E0E3E7] rounded-md bg-white hover:bg-neutral-50">
                      Modify Tone
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 3. Review Online */}
            {activeItem === 'review-online' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    In-Person Experience
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Review Online (QR & NFC Tap Facilitation)
                  </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/50 space-y-3">
                    <div className="text-xs font-bold text-[#202124]">Physical Touchpoint Features</div>
                    <ul className="text-xs text-[#5F6368] space-y-2">
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#188038]" /> Custom branded table tents & standees
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#188038]" /> Dynamic QR code with visit parameter tracking
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#188038]" /> Instant NFC tap (no app download required)
                      </li>
                      <li className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#188038]" /> Customer selects authentic sentiment tags
                      </li>
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl border border-amber-200 bg-amber-50/60 text-xs space-y-2 text-amber-900">
                    <div className="font-bold flex items-center gap-1.5 text-amber-800">
                      <Shield className="w-4 h-4" /> Google Compliance Standard
                    </div>
                    <p>
                      &ldquo;Customers always submit their review themselves on Google. LOCALOS AI does not gate, censor, or automatically submit reviews.&rdquo;
                    </p>
                    <p className="text-[11px] text-amber-800/80">
                      This strictly honors Google&apos;s anti-gating and genuine review policies.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[#E0E3E7] bg-white flex items-center justify-between shadow-2xs hover:border-[#1A73E8]/40 transition-colors">
                  <div className="text-xs">
                    <span className="font-bold text-[#202124]">Active Standee Deployments:</span>
                    <span className="ml-2 font-mono text-[#5F6368]">8 Table Tents · 2 Counter NFC Plaques</span>
                  </div>
                  <span className="text-xs text-[#188038] font-semibold">Active & Live</span>
                </div>
              </div>
            )}

            {/* 4. Local SEO */}
            {activeItem === 'local-seo' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Proximity Optimization
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Local SEO & Proximity Keyword Intelligence
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold text-[#5F6368]">Tracked Local Keywords</div>
                  <div className="space-y-2">
                    {[
                      { kw: 'artisan cafe near me', rank: '#2', change: '+1', volume: '1.8K/mo' },
                      { kw: 'best brunch downtown', rank: '#1', change: '—', volume: '2.4K/mo' },
                      { kw: 'specialty coffee shop', rank: '#3', change: '+2', volume: '950/mo' },
                    ].map((item) => (
                      <div key={item.kw} className="p-3 rounded-lg border border-[#E0E3E7] bg-white hover:border-[#1A73E8]/40 hover:bg-neutral-50/60 transition-all duration-200 flex items-center justify-between text-xs">
                        <span className="font-semibold text-[#202124]">{item.kw}</span>
                        <div className="flex items-center gap-4">
                          <span className="text-[#5F6368] font-mono">{item.volume}</span>
                          <span className="font-mono font-bold text-[#188038]">{item.rank}</span>
                          <span className="text-emerald-700 font-mono text-[11px] bg-emerald-50 px-1.5 py-0.5 rounded-sm">{item.change}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-lg bg-neutral-50 border border-neutral-200 text-xs">
                  <div className="font-bold text-[#202124] mb-1">Local Optimization Recommendation</div>
                  <p className="text-[#5F6368]">
                    Add secondary category &ldquo;Breakfast Restaurant&rdquo; to capture morning commute search intent within 1.5 miles.
                  </p>
                </div>
              </div>
            )}

            {/* 5. Google Posts */}
            {activeItem === 'google-posts' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Content Engine
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    AI Google Posts from Real Business Data
                  </h3>
                </div>

                <div className="p-4 rounded-xl border border-[#E0E3E7] bg-white space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-[#202124]">Scheduled Post Draft</span>
                    <span className="text-[#1A73E8] font-medium">Publish Date: Friday 11:00 AM</span>
                  </div>
                  <p className="text-xs text-[#202124] bg-neutral-50 p-3 rounded-lg border border-neutral-100">
                    &ldquo;Weekend special: Fresh peach brioche french toast paired with our house-roasted cold brew. Available Friday through Sunday while supplies last. Reserve your table or order ahead!&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-[11px] text-[#5F6368]">Call to action button: &ldquo;Book Now&rdquo;</span>
                    <button className="btn-primary px-3 py-1.5 text-xs font-semibold bg-[#1A73E8] text-white rounded-md">
                      Schedule via Google API
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* 6. Analytics */}
            {activeItem === 'analytics' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Google Business Performance
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Direct Google Profile Metrics
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  <div className="p-3 bg-neutral-50 rounded-lg border border-[#E0E3E7] hover:border-[#1A73E8]/30 transition-colors">
                    <div className="text-xs text-[#5F6368]">Search Impressions</div>
                    <div className="text-xl font-bold font-mono text-[#202124]">14,280</div>
                    <div className="text-[11px] text-[#188038] mt-1">+12% vs last mo</div>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-lg border border-[#E0E3E7] hover:border-[#1A73E8]/30 transition-colors">
                    <div className="text-xs text-[#5F6368]">Maps Views</div>
                    <div className="text-xl font-bold font-mono text-[#202124]">8,920</div>
                    <div className="text-[11px] text-[#188038] mt-1">+18% vs last mo</div>
                  </div>
                  <div className="p-3 bg-neutral-50 rounded-lg border border-[#E0E3E7] hover:border-[#1A73E8]/30 transition-colors">
                    <div className="text-xs text-[#5F6368]">Call Clicks</div>
                    <div className="text-xl font-bold font-mono text-[#202124]">342</div>
                    <div className="text-[11px] text-[#188038] mt-1">+7% vs last mo</div>
                  </div>
                </div>

                <div className="p-3 bg-neutral-100/60 rounded-lg text-xs text-[#5F6368]">
                  * All metrics depend directly on Google Business Profile API availability for authorized accounts.
                </div>
              </div>
            )}

            {/* 7. Competitors */}
            {activeItem === 'competitors' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Market Intelligence
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Local Competitive Benchmarking
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="p-3.5 rounded-lg border border-[#1A73E8]/30 bg-[#E8F0FE]/40 hover:bg-[#E8F0FE]/60 transition-colors flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#202124]">Your Location (Spiral Katta)</div>
                      <div className="text-[#5F6368]">4.8 ★ · 148 reviews · 92% response rate</div>
                    </div>
                    <span className="font-semibold text-[#188038] bg-emerald-100 px-2 py-0.5 rounded-sm">Leader</span>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[#E0E3E7] bg-white hover:border-neutral-300 transition-colors flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#202124]">Competitor A (0.4 mi away)</div>
                      <div className="text-[#5F6368]">4.4 ★ · 210 reviews · 48% response rate</div>
                    </div>
                    <span className="text-[#5F6368]">Slow response gap</span>
                  </div>

                  <div className="p-3.5 rounded-lg border border-[#E0E3E7] bg-white hover:border-neutral-300 transition-colors flex items-center justify-between text-xs">
                    <div>
                      <div className="font-bold text-[#202124]">Competitor B (0.8 mi away)</div>
                      <div className="text-[#5F6368]">4.1 ★ · 85 reviews · 15% response rate</div>
                    </div>
                    <span className="text-[#5F6368]">Low rating momentum</span>
                  </div>
                </div>
              </div>
            )}

            {/* 8. Visibility */}
            {activeItem === 'visibility' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Spatial Presence
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Local Geo-Grid Visibility
                  </h3>
                </div>

                {/* 3x3 Geo Grid Simulation */}
                <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/70">
                  <div className="text-xs font-semibold text-[#5F6368] mb-3">
                    Proximity Geo-Grid: 3×3 mile radius for &ldquo;craft cafe&rdquo;
                  </div>
                  <div className="grid grid-cols-3 gap-3 max-w-xs mx-auto">
                    {[
                      { pos: '1', color: 'bg-emerald-500' },
                      { pos: '1', color: 'bg-emerald-500' },
                      { pos: '2', color: 'bg-emerald-500' },
                      { pos: '1', color: 'bg-emerald-500' },
                      { pos: '★', color: 'bg-[#1A73E8]' },
                      { pos: '2', color: 'bg-emerald-500' },
                      { pos: '3', color: 'bg-amber-500' },
                      { pos: '2', color: 'bg-emerald-500' },
                      { pos: '4', color: 'bg-amber-500' },
                    ].map((cell, i) => (
                      <div
                        key={i}
                        className={`h-14 rounded-lg ${cell.color} text-white font-bold font-mono flex items-center justify-center text-sm shadow-xs hover:scale-105 transition-transform duration-150 cursor-default`}
                      >
                        {cell.pos}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 flex items-center justify-center gap-4 text-[11px] text-[#5F6368]">
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Rank 1–3</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Rank 4–7</span>
                    <span className="flex items-center gap-1"><span className="w-2.5 h-2.5 rounded-full bg-[#1A73E8]"></span> Center Store</span>
                  </div>
                </div>
              </div>
            )}

            {/* 9. Automations */}
            {activeItem === 'automations' && (
              <div className="space-y-5 animate-in fade-in slide-in-from-bottom-1 duration-200">
                <div className="pb-4 border-b border-[#E0E3E7]">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
                    Workflow Automation
                  </span>
                  <h3 className="text-xl font-bold text-[#202124]">
                    Configurable Trigger-to-Action Flows
                  </h3>
                </div>

                <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/50 space-y-3">
                  <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-white border border-neutral-100 hover:border-[#1A73E8]/30 transition-colors">
                    <span className="px-2 py-0.5 rounded-sm bg-neutral-200 font-bold text-[#202124]">TRIGGER</span>
                    <span className="text-[#5F6368]">New review posted on Google Business Profile</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-white border border-neutral-100 hover:border-[#1A73E8]/30 transition-colors">
                    <span className="px-2 py-0.5 rounded-sm bg-[#E8F0FE] font-bold text-[#1A73E8]">CONDITION</span>
                    <span className="text-[#5F6368]">Rating $\ge$ 4 stars with verified text</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-white border border-neutral-100 hover:border-[#1A73E8]/30 transition-colors">
                    <span className="px-2 py-0.5 rounded-sm bg-emerald-100 font-bold text-[#188038]">ACTION</span>
                    <span className="text-[#5F6368]">Generate personalized appreciation reply</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs p-2 rounded-lg bg-white border border-neutral-100 hover:border-[#1A73E8]/30 transition-colors">
                    <span className="px-2 py-0.5 rounded-sm bg-purple-100 font-bold text-purple-800">APPROVAL</span>
                    <span className="text-[#5F6368]">Store Manager approval required before publishing</span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-2">
                  <span className="text-[#188038] font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Workflow Active
                  </span>
                  <span className="text-[#5F6368]">Execution latency &lt; 2 minutes</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

