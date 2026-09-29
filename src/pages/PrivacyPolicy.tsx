import React from 'react';
import { RoutePath } from '../types';
import { ShieldCheck, ArrowLeft, Lock, FileText, CheckCircle2 } from 'lucide-react';

interface PrivacyPolicyProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ navigateTo }) => {
  return (
    <div className="bg-white min-h-screen py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <button
          onClick={() => navigateTo('/')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#1A73E8] hover:text-[#1557b0] mb-8 cursor-pointer transition-transform duration-200 hover:-translate-x-1"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>

        <div className="border-b border-[#E0E3E7] pb-8 mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E8F0FE] text-xs font-semibold text-[#1A73E8] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            Official Platform Policy
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#5F6368] mt-2">
            Effective Date: January 1, 2026 · Last Updated: September 2026
          </p>
          <p className="text-xs text-[#5F6368] mt-1 italic">
            This document outlines how LOCALOS AI collects, protects, processes, and respects your business and personal data. This policy is structured for SaaS platform compliance and Google API verification.
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-8 text-sm text-[#202124] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">1. Overview & Commitment to Transparency</h2>
            <p className="text-[#5F6368]">
              LOCALOS AI (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) provides software services designed to help businesses manage their local presence, Google Business Profiles, customer review communications, local search visibility, and marketing automations. We believe in radical data transparency, data minimization, and user sovereignty over their business assets.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">2. Information We Collect</h2>
            <p className="text-[#5F6368]">We collect the following categories of information when you interact with our platform:</p>
            <ul className="list-disc pl-5 space-y-2 text-[#5F6368]">
              <li>
                <strong className="text-[#202124]">Account Information:</strong> Your name, work email address, company or business name, encrypted password, role within the organization, and billing contact details when signing up.
              </li>
              <li>
                <strong className="text-[#202124]">Business & Location Data:</strong> Business names, physical store addresses, phone numbers, website URLs, categories, regular and holiday opening hours, and menu or catalog links provided by you.
              </li>
              <li>
                <strong className="text-[#202124]">Google OAuth Authorization Data:</strong> When you connect your Google Business Profile via Google OAuth, we receive an authorized OAuth access token and refresh token granted by Google. We do not receive, solicit, or store your Google account password.
              </li>
              <li>
                <strong className="text-[#202124]">Google Business Profile API Data:</strong> Location listings, public customer reviews and star ratings, review timestamps, photos uploaded to your profile, and performance metrics (search impressions, call clicks, direction taps, and website visits) as returned by Google&apos;s authorized APIs.
              </li>
              <li>
                <strong className="text-[#202124]">Usage & Telemetry Data:</strong> Browser user agent, IP address, system timestamps, and internal diagnostic logs to monitor platform performance and prevent abuse.
              </li>
            </ul>
          </section>

          {/* Section 3: Google API Compliance */}
          <section className="space-y-3 p-5 rounded-2xl bg-[#E8F0FE]/50 border border-[#1A73E8]/30">
            <h2 className="text-lg font-bold text-[#1A73E8] flex items-center gap-2">
              <Lock className="w-5 h-5" />
              3. Google API Services User Data Policy Compliance
            </h2>
            <p className="text-[#202124]">
              LOCALOS AI&apos;s use and transfer of information received from Google APIs to any other app will adhere to the{' '}
              <span className="font-semibold underline">Google API Services User Data Policy</span>, including the Limited Use requirements.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F6368]">
              <li>We only use Google data to provide and improve user-facing features within the LOCALOS AI application.</li>
              <li>We do not transfer or disclose Google user data to third parties, advertising brokers, data aggregators, or information resellers.</li>
              <li>We never use Google user data for serving advertisements, retargeting campaigns, or credit determination.</li>
              <li>We do not use Google user data to train generalized machine learning or foundational AI models.</li>
              <li>Human beings do not read your Google user data unless you provide explicit consent to resolve a technical support issue, or when required by applicable law.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">4. Customer Review Facilitation (Review Online)</h2>
            <p className="text-[#5F6368]">
              Our &ldquo;Review Online&rdquo; feature generates on-premise QR codes and NFC interactions for customer convenience. In compliance with Google Business Profile policies and the FTC Consumer Review Fairness Act:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5F6368]">
              <li>We do not gate, screen, filter, or suppress negative reviews.</li>
              <li>We do not incentivize reviews with prohibited financial inducements or contests.</li>
              <li>We do not automatically submit reviews to Google on behalf of patrons; customers always finalize and submit their review directly through Google&apos;s review dialog using their own Google account.</li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">5. Cookie & Storage Policy</h2>
            <p className="text-[#5F6368]">
              We use strictly necessary session cookies to maintain authenticated sessions and CSRF protection. We do not store sensitive Google tokens (such as OAuth refresh tokens) in browser localStorage or unencrypted cookies. Sensitive credentials are maintained securely in encrypted server-side credential stores.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">6. Data Retention & Revocation</h2>
            <p className="text-[#5F6368]">
              We retain account data as long as your account remains active. You can disconnect your Google Business Profile at any time from your settings or directly via your Google Account Security Permissions page (https://myaccount.google.com/permissions). Upon disconnection or written deletion request, all cached profile tokens and location data are purged within 30 days.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">7. Your Data Rights</h2>
            <p className="text-[#5F6368]">
              Depending on your jurisdiction (such as GDPR in Europe or CCPA/CPRA in California), you have rights to access, rectify, port, or erase your personal information. To exercise any of these rights, contact us using the details below.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3 border-t border-[#E0E3E7] pt-6">
            <h2 className="text-lg font-bold text-[#202124]">8. Contacting Our Data Protection Officer</h2>
            <p className="text-[#5F6368]">
              If you have inquiries regarding this policy or our data handling practices, please contact our team:
            </p>
            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E0E3E7] text-xs space-y-1 text-[#202124]">
              <div className="font-semibold">LOCALOS AI Privacy & Compliance Office</div>
              <div>Email: <span className="text-[#1A73E8]">privacy@localos.ai</span></div>
              <div>Subject: Data Privacy Request / Google API Compliance</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
