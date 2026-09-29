import React from 'react';
import { ArrowRight, MessageSquare, ShieldCheck } from 'lucide-react';
import { RoutePath } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface CtaSectionProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const CtaSection: React.FC<CtaSectionProps> = ({ navigateTo }) => {
  return (
    <section className="py-20 sm:py-24 bg-white border-t border-[#E0E3E7] relative overflow-hidden">
      <div className="absolute inset-0 bg-radial from-[#E8F0FE]/50 via-transparent to-transparent pointer-events-none" />

      <ScrollReveal className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FE] text-xs font-semibold text-[#1A73E8] mb-6 shadow-2xs hover:bg-[#d2e3fc] transition-colors">
          <span className="w-1.5 h-1.5 rounded-full bg-[#1A73E8] animate-pulse"></span>
          MODERN LOCAL BUSINESS MANAGEMENT
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202124] tracking-tight text-balance">
          Ready to simplify your local growth?
        </h2>

        <p className="mt-4 text-base sm:text-lg text-[#5F6368] max-w-2xl mx-auto text-balance leading-relaxed">
          Connect your business presence, automate repetitive work and keep your local operations in one place.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={() => navigateTo('/signup')}
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-[#1A73E8] hover:bg-[#1557b0] rounded-xl shadow-xs cursor-pointer group"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
          <button
            onClick={() => navigateTo('/contact')}
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-[#202124] bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 border border-[#E0E3E7] rounded-xl cursor-pointer group"
          >
            <MessageSquare className="w-4 h-4 text-[#5F6368] transition-transform duration-200 group-hover:scale-105" />
            <span>Talk to Us</span>
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#5F6368]">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#188038]" /> Official Google OAuth Flow
          </span>
          <span aria-hidden="true">&bull;</span>
          <span>No credit card required</span>
          <span aria-hidden="true">&bull;</span>
          <span>Cancel anytime</span>
        </div>
      </ScrollReveal>
    </section>
  );
};
