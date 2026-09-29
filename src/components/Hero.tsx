import React, { useState } from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Star,
  TrendingUp,
  MapPin,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Clock,
  Eye,
  PhoneCall,
  Navigation,
  Globe,
  RefreshCw
} from 'lucide-react';
import { RoutePath } from '../types';

interface HeroProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ navigateTo }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'reviews'>('overview');
  const [isCopied, setIsCopied] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState('Spiral Katta - Main Street');

  const copyReply = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative pt-12 pb-20 md:pt-18 md:pb-28 overflow-hidden bg-white">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-radial from-[#E8F0FE]/60 via-transparent to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow: quiet unboxed text */}
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#1A73E8] bg-[#E8F0FE] rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] animate-pulse"></span>
            AI-POWERED LOCAL GROWTH PLATFORM
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#202124] tracking-tight text-balance leading-[1.12]">
            Turn Your <span className="text-[#1A73E8]">Google Business Profile</span> Into a Growth Engine.
          </h1>

          {/* Supporting line */}
          <p className="mt-6 text-lg sm:text-xl text-[#5F6368] max-w-3xl mx-auto leading-relaxed text-balance">
            LOCALOS AI helps businesses manage{' '}
            <strong className="text-[#202124] font-medium">Google Business Profiles</strong>, reviews,{' '}
            <strong className="text-[#202124] font-medium">local SEO</strong>, posts, reputation and{' '}
            <strong className="text-[#202124] font-medium">automation</strong> — all from one simple platform.
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => navigateTo('/signup')}
              className="btn-primary w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#1557b0] rounded-lg shadow-sm group whitespace-nowrap cursor-pointer"
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <button
              onClick={() => navigateTo('/', 'features')}
              className="btn-secondary w-full sm:w-auto px-6 py-3.5 text-base font-medium text-[#202124] bg-neutral-50 hover:bg-neutral-100 border border-[#E0E3E7] hover:border-[#cbd5e1] rounded-lg whitespace-nowrap cursor-pointer"
            >
              Explore Features
            </button>
          </div>

          {/* Trust markers under CTA */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-[#5F6368]">
            <span className="flex items-center gap-1.5 transition-transform hover:scale-105 duration-200">
              <ShieldCheck className="w-4 h-4 text-[#188038]" />
              No credit card required
            </span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span>Built for businesses, agencies & multi-location teams</span>
            <span aria-hidden="true" className="text-neutral-300">·</span>
            <span className="text-[#188038] font-medium transition-colors hover:text-[#137333]">Official Google OAuth Authorization</span>
          </div>
        </div>

        {/* Dashboard Preview UI */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="relative rounded-2xl border border-[#E0E3E7] bg-white shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] overflow-hidden">
            {/* Window Topbar */}
            <div className="bg-[#F8F9FA] px-4 py-3 border-b border-[#E0E3E7] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-[#E0E3E7] hover:bg-neutral-300 transition-colors"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E0E3E7] hover:bg-neutral-300 transition-colors"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E0E3E7] hover:bg-neutral-300 transition-colors"></span>
                </div>
                <div className="h-4 w-px bg-neutral-200 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-md bg-[#1A73E8] flex items-center justify-center text-white text-[10px] font-bold shadow-2xs">
                    L
                  </div>
                  <span className="text-xs font-semibold text-[#202124]">
                    LOCALOS AI Dashboard Preview
                  </span>
                </div>
              </div>

              {/* Status and Location selector */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#188038] text-xs font-medium shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-[#188038] animate-pulse"></span>
                  Google Connected
                </div>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="text-xs bg-white border border-[#E0E3E7] hover:border-[#1A73E8] rounded-md px-2.5 py-1 text-[#202124] focus:outline-hidden focus:ring-1 focus:ring-[#1A73E8] font-medium transition-colors cursor-pointer"
                >
                  <option value="Spiral Katta - Main Street">Spiral Katta — Main Street</option>
                  <option value="Spiral Katta - Downtown">Spiral Katta — Downtown</option>
                </select>
              </div>
            </div>

            {/* Dashboard Inner Body */}
            <div className="p-4 sm:p-6 lg:p-8 bg-neutral-50/50">
              {/* Profile Header Card */}
              <div className="bg-white rounded-xl border border-[#E0E3E7] p-4 sm:p-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs hover:shadow-xs transition-shadow duration-200">
                <div className="flex items-center gap-4">
                  <div className="w-13 h-13 rounded-xl bg-[#E8F0FE] border border-[#1A73E8]/20 flex items-center justify-center text-[#1A73E8] font-bold text-lg shrink-0 transition-transform duration-200 hover:scale-105">
                    SK
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-lg font-bold text-[#202124]">{selectedLocation.split(' — ')[0]}</h2>
                      <span className="inline-flex items-center text-[#1A73E8]" title="Verified Google Business Profile">
                        <CheckCircle2 className="w-4 h-4 fill-[#1A73E8] text-white" />
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-2 text-xs text-[#5F6368] mt-0.5">
                      <span>Casual Dining & Cafe</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#1A73E8]" /> 428 Market Blvd
                      </span>
                      <span>·</span>
                      <span className="text-[#188038] font-medium">Open now until 10:00 PM</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start md:self-auto">
                  <button
                    onClick={() => setActiveTab('overview')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      activeTab === 'overview'
                        ? 'bg-[#1A73E8] text-white shadow-xs'
                        : 'bg-neutral-100 text-[#5F6368] hover:text-[#202124] hover:bg-neutral-200'
                    }`}
                  >
                    Overview
                  </button>
                  <button
                    onClick={() => setActiveTab('reviews')}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                      activeTab === 'reviews'
                        ? 'bg-[#1A73E8] text-white shadow-xs'
                        : 'bg-neutral-100 text-[#5F6368] hover:text-[#202124] hover:bg-neutral-200'
                    }`}
                  >
                    Live Reviews (23)
                  </button>
                </div>
              </div>

              {/* 4 Metric Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
                {/* Profile Health */}
                <div className="card-interactive bg-white p-4 rounded-xl border border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50">
                  <div className="flex items-center justify-between text-xs text-[#5F6368] font-medium mb-2">
                    <span>Profile Health</span>
                    <CheckCircle2 className="w-4 h-4 text-[#188038] card-icon-container" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#202124]">92</span>
                    <span className="text-xs text-[#5F6368]">/ 100</span>
                  </div>
                  <div className="w-full bg-neutral-100 h-1.5 rounded-full mt-2.5 overflow-hidden">
                    <div className="bg-[#188038] h-full rounded-full transition-all duration-700 ease-out" style={{ width: '92%' }}></div>
                  </div>
                  <div className="text-[11px] text-[#5F6368] mt-2">All primary signals optimized</div>
                </div>

                {/* Reviews */}
                <div className="card-interactive bg-white p-4 rounded-xl border border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50">
                  <div className="flex items-center justify-between text-xs text-[#5F6368] font-medium mb-2">
                    <span>Reviews</span>
                    <Star className="w-4 h-4 text-[#F9AB00] fill-[#F9AB00] card-icon-container" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#202124]">4.8</span>
                    <span className="text-xs text-[#5F6368]">★ (148 total)</span>
                  </div>
                  <div className="text-xs font-semibold text-[#188038] mt-2 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 card-arrow-icon" />
                    <span>23 new reviews this month</span>
                  </div>
                </div>

                {/* Local Visibility */}
                <div className="card-interactive bg-white p-4 rounded-xl border border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50">
                  <div className="flex items-center justify-between text-xs text-[#5F6368] font-medium mb-2">
                    <span>Local Visibility</span>
                    <TrendingUp className="w-4 h-4 text-[#1A73E8] card-icon-container" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#202124]">+18%</span>
                  </div>
                  <div className="text-xs text-[#5F6368] mt-2">
                    Grid ranking top 3 in 2.5 mi radius
                  </div>
                </div>

                {/* Google Performance */}
                <div className="card-interactive bg-white p-4 rounded-xl border border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50">
                  <div className="flex items-center justify-between text-xs text-[#5F6368] font-medium mb-2">
                    <span>Google Performance</span>
                    <Eye className="w-4 h-4 text-[#1A73E8] card-icon-container" />
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl sm:text-3xl font-bold font-mono tabular-nums text-[#202124]">+24%</span>
                  </div>
                  <div className="text-xs text-[#5F6368] mt-2">
                    Profile actions & customer queries
                  </div>
                </div>
              </div>

              {/* Lower Section: Review & AI Reply card */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {/* Left 2 Cols: Customer Review & AI Draft Reply */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-[#E0E3E7] p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow duration-200">
                  <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-[#1A73E8]" />
                      <span className="text-xs font-bold uppercase tracking-wider text-[#202124]">
                        Latest Customer Review
                      </span>
                    </div>
                    <span className="text-xs text-[#5F6368] flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 2 hours ago
                    </span>
                  </div>

                  <div className="mt-3.5">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center">
                        JD
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#202124]">Julian Diaz</div>
                        <div className="flex items-center gap-1 text-[#F9AB00]">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-[#F9AB00] hover:scale-115 transition-transform duration-150" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-[#202124] italic">
                      &ldquo;Great food and friendly service! The artisanal cold brew and spicy truffle sandwich were fantastic. Cozy seating area too.&rdquo;
                    </p>
                  </div>

                  {/* AI Reply Card */}
                  <div className="mt-4 p-3.5 rounded-lg bg-[#E8F0FE]/60 border border-[#1A73E8]/20 hover:border-[#1A73E8]/40 transition-colors duration-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-[#1A73E8]">
                        <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                        AI-Generated Reply Suggestion
                      </div>
                      <span className="text-[11px] text-[#5F6368]">Human Review Gate Enabled</span>
                    </div>
                    <p className="text-xs text-[#202124] leading-relaxed">
                      &ldquo;Thank you for sharing your experience, Julian! We&apos;re delighted you enjoyed the artisanal cold brew and truffle sandwich. Our team works hard to keep the space warm and welcoming. We look forward to seeing you at Spiral Katta again soon!&rdquo;
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <button
                        onClick={copyReply}
                        className="btn-primary px-3 py-1.5 text-xs font-semibold bg-[#1A73E8] text-white hover:bg-[#1557b0] rounded-md transition-colors"
                      >
                        {isCopied ? 'Copied to Clipboard!' : 'Approve & Post to Google'}
                      </button>
                      <button
                        onClick={() => alert('Demo mode: You can customize tone, length, and keywords in the full editor.')}
                        className="btn-secondary px-3 py-1.5 text-xs font-medium text-[#202124] bg-white border border-[#E0E3E7] hover:bg-neutral-50 rounded-md"
                      >
                        Edit Draft
                      </button>
                      <span className="text-[11px] text-[#5F6368] ml-auto">
                        Requires authorized Google OAuth token
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right 1 Col: Quick Actions & Signals */}
                <div className="bg-white rounded-xl border border-[#E0E3E7] p-4 sm:p-5 shadow-2xs hover:shadow-xs transition-shadow duration-200 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#202124] mb-3">
                      Customer Action Signals
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-neutral-50 border border-neutral-100 hover:border-[#1A73E8]/30 hover:bg-neutral-50/90 transition-all duration-200">
                        <span className="flex items-center gap-2 text-[#5F6368]">
                          <PhoneCall className="w-3.5 h-3.5 text-[#1A73E8]" /> Phone Calls
                        </span>
                        <span className="font-mono font-bold text-[#202124]">64</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-neutral-50 border border-neutral-100 hover:border-[#1A73E8]/30 hover:bg-neutral-50/90 transition-all duration-200">
                        <span className="flex items-center gap-2 text-[#5F6368]">
                          <Navigation className="w-3.5 h-3.5 text-[#1A73E8]" /> Driving Directions
                        </span>
                        <span className="font-mono font-bold text-[#202124]">182</span>
                      </div>
                      <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-neutral-50 border border-neutral-100 hover:border-[#1A73E8]/30 hover:bg-neutral-50/90 transition-all duration-200">
                        <span className="flex items-center gap-2 text-[#5F6368]">
                          <Globe className="w-3.5 h-3.5 text-[#1A73E8]" /> Website Clicks
                        </span>
                        <span className="font-mono font-bold text-[#202124]">295</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-neutral-100 mt-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#5F6368] flex items-center gap-1">
                        <RefreshCw className="w-3 h-3 text-[#188038] animate-[spin_6s_linear_infinite]" /> Real-time Sync
                      </span>
                      <span className="text-[#188038] font-semibold">Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
