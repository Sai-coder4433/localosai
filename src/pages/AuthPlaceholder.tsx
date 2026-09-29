import React from 'react';
import { RoutePath } from '../types';
import { ArrowLeft, Shield, Lock, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthPlaceholderProps {
  mode: 'login' | 'signup';
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const AuthPlaceholder: React.FC<AuthPlaceholderProps> = ({ mode, navigateTo }) => {
  return (
    <div className="bg-[#FAFAFA] min-h-[calc(100vh-64px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-2xl border border-[#E0E3E7] p-8 shadow-md">
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1A73E8] hover:text-[#1557b0] mb-6 cursor-pointer transition-transform duration-200 hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        {/* Brand Icon */}
        <div className="text-center mb-6">
          <div className="w-12 h-12 rounded-xl bg-[#1A73E8] flex items-center justify-center text-white mx-auto shadow-xs mb-3">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-[#202124]">
            {mode === 'login' ? 'Sign in to LOCALOS AI' : 'Create your LOCALOS AI Account'}
          </h1>
          <p className="text-xs text-[#5F6368] mt-1">
            {mode === 'login'
              ? 'Access your centralized Google Business Profile workspace'
              : 'Join the next generation of local business operations'}
          </p>
        </div>

        {/* Official Status Notice - Transparent & Honest */}
        <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-xs text-amber-900 space-y-2 mb-6">
          <div className="font-bold flex items-center gap-1.5 text-amber-800">
            <Lock className="w-4 h-4" />
            Authentication is being configured
          </div>
          <p className="text-[11px] leading-relaxed">
            Live account creation and Google OAuth sign-in are currently restricted to authorized early access testers pending final Google Business Profile API production quota verification.
          </p>
        </div>

        {/* Feature Highlights of the upcoming auth */}
        <div className="space-y-3 mb-6 text-xs text-[#5F6368]">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
            <span>Sign in with Google OAuth 2.0 (no password required)</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
            <span>Multi-factor authentication (MFA) enabled</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#188038] shrink-0" />
            <span>Zero storage of sensitive tokens in browser localStorage</span>
          </div>
        </div>

        {/* Disabled CTA with clear state */}
        <div className="space-y-3">
          <button
            type="button"
            disabled
            className="w-full py-3 px-4 rounded-xl bg-neutral-200 text-[#5F6368] text-xs font-semibold cursor-not-allowed flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>Continue with Google (Pending Production Review)</span>
          </button>

          <button
            onClick={() => navigateTo('/contact')}
            className="btn-secondary w-full py-2.5 px-4 rounded-xl border border-[#E0E3E7] hover:bg-neutral-50 hover:border-neutral-300 text-[#202124] text-xs font-semibold text-center transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            Request Pilot Access / Partner Invitation
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-[#5F6368]">
          {mode === 'login' ? (
            <span>
              Don&apos;t have access yet?{' '}
              <button
                onClick={() => navigateTo('/signup')}
                className="text-[#1A73E8] font-semibold hover:underline cursor-pointer"
              >
                Request sign up
              </button>
            </span>
          ) : (
            <span>
              Already have an enterprise pilot?{' '}
              <button
                onClick={() => navigateTo('/login')}
                className="text-[#1A73E8] font-semibold hover:underline cursor-pointer"
              >
                Sign in
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
