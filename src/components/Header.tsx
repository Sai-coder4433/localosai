import React, { useState, useEffect, useRef } from 'react';
import { RoutePath } from '../types';
import {
  ChevronDown,
  Menu,
  X,
  MapPin,
  Star,
  Search,
  BarChart3,
  Zap,
  QrCode,
  Building2,
  Users,
  Store,
  Utensils,
  Wrench,
  HelpCircle,
  FileCode2,
  Mail,
  BookOpen
} from 'lucide-react';

interface HeaderProps {
  currentRoute: RoutePath;
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentRoute, navigateTo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (route: RoutePath, hash?: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    navigateTo(route, hash);
  };

  const productItems = [
    {
      label: 'Google Business Profile',
      desc: 'Centralized management & multi-location sync',
      icon: MapPin,
      hash: 'solution-section',
    },
    {
      label: 'Reviews & Reputation',
      desc: 'Monitor reviews, draft AI responses, and track sentiment',
      icon: Star,
      hash: 'features',
    },
    {
      label: 'Review Online',
      desc: 'QR & NFC guided customer review facilitation',
      icon: QrCode,
      hash: 'review-online',
    },
    {
      label: 'Local SEO',
      desc: 'Signal audits, local keywords & profile optimization',
      icon: Search,
      hash: 'features',
    },
    {
      label: 'Local Analytics',
      desc: 'Searches, views, directions & call interactions',
      icon: BarChart3,
      hash: 'features',
    },
    {
      label: 'Automations',
      desc: 'Trigger-action workflows with human approval gates',
      icon: Zap,
      hash: 'automations',
    },
  ];

  const solutionsItems = [
    { label: 'Small Businesses', desc: 'Single-unit stores, cafes & professional offices', icon: Store, hash: 'multi-location' },
    { label: 'Agencies', desc: 'Client account management & consolidated tools', icon: Users, hash: 'multi-location' },
    { label: 'Multi-Location Businesses', desc: 'Franchises and multi-unit chains', icon: Building2, hash: 'multi-location' },
    { label: 'Restaurants & Cafes', desc: 'Menus, dining hours, food photos & reputation', icon: Utensils, hash: 'multi-location' },
    { label: 'Retail Stores', desc: 'In-store traffic and local inventory presence', icon: Store, hash: 'multi-location' },
    { label: 'Service Businesses', desc: 'Contractors, plumbers, legal & medical practices', icon: Wrench, hash: 'multi-location' },
  ];

  const resourcesItems = [
    { label: 'Documentation', desc: 'Integration guides & platform architecture', icon: BookOpen, route: '/privacy' as RoutePath },
    { label: 'Help Center', desc: 'Common setup questions and support', icon: HelpCircle, hash: 'faq' },
    { label: 'API Architecture', desc: 'Secure Google OAuth & server-side credential handling', icon: FileCode2, hash: 'security' },
    { label: 'Contact', desc: 'Reach the product and engineering team', icon: Mail, route: '/contact' as RoutePath },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? 'border-b border-[#E0E3E7] shadow-xs' : 'border-b border-neutral-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18" ref={dropdownRef}>
          {/* Brand Zone: Clean single element with local pin symbol */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2.5 text-left group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#1A73E8] rounded-md py-1 cursor-pointer transition-transform duration-200 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:scale-[1.02]"
          >
            <div className="w-8 h-8 rounded-lg bg-[#1A73E8] flex items-center justify-center text-white shadow-xs group-hover:bg-[#1557b0] group-hover:shadow-md transition-all duration-200">
              <svg className="w-4.5 h-4.5 transition-transform duration-200 group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-lg font-bold tracking-tight text-[#202124]">
              LOCALOS <span className="text-[#1A73E8] font-extrabold">AI</span>
            </span>
          </button>

          {/* Zone 2: Navigation Links with quiet text and clear menus */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                className={`nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${
                  activeDropdown === 'product' ? 'text-[#1A73E8] bg-[#E8F0FE]' : 'text-[#5F6368] hover:text-[#202124]'
                }`}
                aria-expanded={activeDropdown === 'product'}
              >
                <span>Product</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'product' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'product' && (
                <div className="absolute top-full left-0 mt-2 w-84 bg-white rounded-xl shadow-xl border border-[#E0E3E7] p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {productItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick('/', item.hash)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 text-left transition-all duration-200 group cursor-pointer hover:translate-x-0.5"
                    >
                      <div className="p-1.5 rounded-md bg-[#E8F0FE] text-[#1A73E8] group-hover:bg-[#1A73E8] group-hover:text-white transition-colors duration-200 shrink-0 mt-0.5 group-hover:scale-105">
                        <item.icon className="w-4 h-4 transition-transform duration-200" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">{item.label}</div>
                        <div className="text-xs text-[#5F6368] mt-0.5 leading-tight">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                className={`nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${
                  activeDropdown === 'solutions' ? 'text-[#1A73E8] bg-[#E8F0FE]' : 'text-[#5F6368] hover:text-[#202124]'
                }`}
                aria-expanded={activeDropdown === 'solutions'}
              >
                <span>Solutions</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-[#E0E3E7] p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {solutionsItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick('/', item.hash)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 text-left transition-all duration-200 group cursor-pointer hover:translate-x-0.5"
                    >
                      <div className="p-1.5 rounded-md bg-neutral-100 text-[#5F6368] group-hover:bg-[#E8F0FE] group-hover:text-[#1A73E8] transition-colors duration-200 shrink-0 mt-0.5 group-hover:scale-105">
                        <item.icon className="w-4 h-4 transition-transform duration-200" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">{item.label}</div>
                        <div className="text-xs text-[#5F6368] mt-0.5 leading-tight">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Section Links with smooth underline on hover */}
            <button
              onClick={() => handleNavClick('/', 'how-it-works')}
              className="nav-link-animated px-3 py-2 text-sm font-medium text-[#5F6368] hover:text-[#202124] transition-colors duration-200 rounded-md cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('/', 'features')}
              className="nav-link-animated px-3 py-2 text-sm font-medium text-[#5F6368] hover:text-[#202124] transition-colors duration-200 rounded-md cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => handleNavClick('/', 'pricing')}
              className="nav-link-animated px-3 py-2 text-sm font-medium text-[#5F6368] hover:text-[#202124] transition-colors duration-200 rounded-md cursor-pointer"
            >
              Pricing
            </button>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                className={`nav-link-animated flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md cursor-pointer transition-colors duration-200 ${
                  activeDropdown === 'resources' ? 'text-[#1A73E8] bg-[#E8F0FE]' : 'text-[#5F6368] hover:text-[#202124]'
                }`}
                aria-expanded={activeDropdown === 'resources'}
              >
                <span>Resources</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'resources' && (
                <div className="absolute top-full right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-[#E0E3E7] p-2 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  {resourcesItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleNavClick(item.route || '/', item.hash)}
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-neutral-50 text-left transition-all duration-200 group cursor-pointer hover:translate-x-0.5"
                    >
                      <div className="p-1.5 rounded-md bg-neutral-100 text-[#5F6368] group-hover:bg-[#E8F0FE] group-hover:text-[#1A73E8] transition-colors duration-200 shrink-0 mt-0.5 group-hover:scale-105">
                        <item.icon className="w-4 h-4 transition-transform duration-200" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">{item.label}</div>
                        <div className="text-xs text-[#5F6368] mt-0.5 leading-tight">{item.desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Zone 3: Clean Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('/login')}
              className="btn-secondary px-3.5 py-2 text-sm font-medium text-[#202124] hover:text-[#1A73E8] hover:bg-neutral-50 rounded-lg whitespace-nowrap cursor-pointer"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNavClick('/signup')}
              className="btn-primary px-4 py-2 text-sm font-medium text-white bg-[#1A73E8] hover:bg-[#1557b0] rounded-lg shadow-xs whitespace-nowrap"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => handleNavClick('/signup')}
              className="btn-primary sm:hidden px-3 py-1.5 text-xs font-semibold text-white bg-[#1A73E8] rounded-md"
            >
              Get Started
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#5F6368] hover:text-[#202124] hover:bg-neutral-100 rounded-lg transition-colors cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 transition-transform duration-200 rotate-90" /> : <Menu className="w-6 h-6 transition-transform duration-200" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E0E3E7] bg-white px-4 pt-2 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1">
            <div className="px-3 py-1.5 text-xs font-semibold text-[#5F6368] uppercase tracking-wider">
              Platform Features
            </div>
            <button
              onClick={() => handleNavClick('/', 'solution-section')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Google Business Profile
            </button>
            <button
              onClick={() => handleNavClick('/', 'review-online')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Review Online (QR / NFC)
            </button>
            <button
              onClick={() => handleNavClick('/', 'features')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Core Features
            </button>
            <button
              onClick={() => handleNavClick('/', 'automations')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Automation Workflows
            </button>
            <button
              onClick={() => handleNavClick('/', 'multi-location')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Multi-Location & Agency
            </button>
          </div>

          <div className="border-t border-neutral-100 pt-3 space-y-1">
            <div className="px-3 py-1.5 text-xs font-semibold text-[#5F6368] uppercase tracking-wider">
              Navigation
            </div>
            <button
              onClick={() => handleNavClick('/', 'how-it-works')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              How It Works
            </button>
            <button
              onClick={() => handleNavClick('/', 'pricing')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Pricing
            </button>
            <button
              onClick={() => handleNavClick('/', 'faq')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full text-left px-3 py-2 text-sm font-medium text-[#202124] hover:bg-neutral-50 rounded-lg"
            >
              Contact
            </button>
          </div>

          <div className="border-t border-neutral-100 pt-4 flex flex-col gap-2">
            <button
              onClick={() => handleNavClick('/login')}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-[#202124] border border-[#E0E3E7] rounded-lg"
            >
              Sign In
            </button>
            <button
              onClick={() => handleNavClick('/signup')}
              className="w-full py-2.5 px-4 text-center text-sm font-medium text-white bg-[#1A73E8] rounded-lg"
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
