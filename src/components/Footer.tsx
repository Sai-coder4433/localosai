import React from 'react';
import { RoutePath } from '../types';

interface FooterProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ navigateTo }) => {
  return (
    <footer className="bg-white border-t border-[#E0E3E7] pt-16 pb-12 text-[#5F6368]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-neutral-100">
          {/* Brand info (2 cols on tablet/desktop) */}
          <div className="col-span-2 space-y-4">
            <button
              onClick={() => navigateTo('/')}
              className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1A73E8] flex items-center justify-center text-white shadow-xs transition-transform duration-200 group-hover:scale-105 group-hover:shadow-sm">
                <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span className="text-lg font-bold tracking-tight text-[#202124] transition-colors group-hover:text-[#1A73E8]">
                LOCALOS <span className="text-[#1A73E8] font-extrabold">AI</span>
              </span>
            </button>

            <p className="text-xs text-[#5F6368] max-w-sm leading-relaxed">
              AI-powered local business management and automation. Designed for independent operators, multi-location brands, and digital marketing agencies.
            </p>

            <div className="pt-2 text-[11px] text-[#5F6368] space-y-1">
              <div>Google Business Profile Integration Compliance</div>
              <div>Strict adherence to Google API Services User Data Policy</div>
            </div>
          </div>

          {/* Col 1: Product */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#202124]">
              Product
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('/', 'solution-section')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Google Business Profile
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'features')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Reviews & Reputation
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'review-online')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Review Online
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'features')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Local SEO
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'features')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'automations')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Automations
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: Company */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#202124]">
              Company
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('/', 'solution-section')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  About Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/contact')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Careers
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#202124]">
              Legal & Support
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigateTo('/privacy')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/terms')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/privacy')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'security')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Security Architecture
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('/', 'faq')}
                  className="footer-link-animated hover:text-[#1A73E8] transition-colors cursor-pointer text-left"
                >
                  Help Center & FAQ
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#5F6368] gap-4">
          <p>&copy; 2026 LOCALOS AI. All rights reserved.</p>

          <p className="text-[11px] text-neutral-400 text-center sm:text-right max-w-xl">
            Google, Google Maps, and Google Business Profile are registered trademarks of Google LLC. LOCALOS AI connects to authorized accounts via official Google OAuth APIs and does not claim official endorsement.
          </p>
        </div>
      </div>
    </footer>
  );
};
