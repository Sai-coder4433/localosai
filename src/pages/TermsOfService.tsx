import React from 'react';
import { RoutePath } from '../types';
import { FileText, ArrowLeft, Shield, AlertTriangle } from 'lucide-react';

interface TermsOfServiceProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ navigateTo }) => {
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
            <FileText className="w-3.5 h-3.5" />
            Terms of Service
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Terms of Service
          </h1>
          <p className="text-xs text-[#5F6368] mt-2">
            Effective Date: January 1, 2026 · Version 1.2
          </p>
          <p className="text-xs text-[#5F6368] mt-1 italic">
            Please review these terms governing your subscription, access to LOCALOS AI software, and use of connected Google Business Profile integrations.
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#202124] leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">1. Acceptance of Terms</h2>
            <p className="text-[#5F6368]">
              By accessing, browsing, registering for, or using the LOCALOS AI software application, customer portals, or related services (the &ldquo;Service&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you are entering into these Terms on behalf of an entity, company, or organization, you represent that you have legal authority to bind that entity.
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">2. Permitted Service Usage & Account Responsibilities</h2>
            <p className="text-[#5F6368]">
              You agree to use LOCALOS AI exclusively for legitimate business and marketing management. You are responsible for safeguarding your login credentials and for all actions that occur under your user accounts. You agree not to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5F6368]">
              <li>Reverse engineer, decompile, or attempt to extract source code from the platform.</li>
              <li>Use the Service to transmit unsolicited spam, defamatory statements, or deceptive promotional content.</li>
              <li>Exceed authorized API rate limits or interfere with server performance.</li>
            </ul>
          </section>

          {/* Section 3: Google Business Profile API Compliance */}
          <section className="space-y-3 p-5 rounded-2xl bg-neutral-50 border border-[#E0E3E7]">
            <h2 className="text-lg font-bold text-[#202124] flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#1A73E8]" />
              3. Google API Services & Third-Party Integration
            </h2>
            <p className="text-[#5F6368]">
              Our platform connects to Google Business Profile through Google&apos;s published APIs. By utilizing these features:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-[#5F6368]">
              <li>You confirm you are an authorized owner, manager, or verified representative of the Google Business Profile listings you connect.</li>
              <li>You agree to comply with Google&apos;s Terms of Service and Google Business Profile Policies.</li>
              <li>You understand that Google maintains sovereign authority over listing verifications, suspensions, and API quotas. LOCALOS AI is an independent software tool and does not guarantee Google search rank placements or algorithmic impressions.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">4. AI-Generated Content & Human Oversight</h2>
            <p className="text-[#5F6368]">
              LOCALOS AI provides assistive generative capabilities (including draft review replies, suggested Google Posts, and SEO recommendations). You understand and agree that:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5F6368]">
              <li>Generative outputs are suggestions intended for human verification.</li>
              <li>You retain ultimate responsibility for any content you publish to your public Google Business Profile.</li>
              <li>You must review suggested text to confirm factual accuracy regarding your prices, hours, dietary claims, and service guarantees before authorizing publication.</li>
            </ul>
          </section>

          {/* Section 5: Review Online Rules */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">5. Review Online & Consumer Fairness</h2>
            <p className="text-[#5F6368]">
              When utilizing Review Online QR cards or NFC touchpoints, you agree never to configure practices that violate FTC guidelines or Google review policies:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#5F6368]">
              <li>No gating: You may not route positive reviewers to Google while suppressing or hiding negative reviewers.</li>
              <li>No deceptive incentives: You may not offer payments, discounts, gifts, or entries into lotteries in exchange for leaving Google reviews.</li>
              <li>The patron must retain 100% control over the final text and must submit the review themselves directly onto Google.</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">6. Automation Rules & Safety Controls</h2>
            <p className="text-[#5F6368]">
              Users can configure trigger-condition-action routines. You acknowledge that configuring &ldquo;Automatic&rdquo; mode authorizes the platform to publish qualifying actions without intermediate confirmation. You may engage the &ldquo;Pause All Automations&rdquo; switch at any time to immediately suspend automated routines.
            </p>
          </section>

          {/* Section 7 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">7. Account Suspension & Termination</h2>
            <p className="text-[#5F6368]">
              We reserve the right to suspend or terminate access to the Service if you violate these Terms, engage in fraudulent review manipulation, abuse Google API resources, or fail to resolve billing defaults following notice.
            </p>
          </section>

          {/* Section 8 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">8. Intellectual Property</h2>
            <p className="text-[#5F6368]">
              LOCALOS AI and its original software, design, interfaces, and algorithms remain the exclusive property of LOCALOS AI and its licensors. You retain full ownership of your proprietary business trademarks, brand assets, and customer data.
            </p>
          </section>

          {/* Section 9 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#202124]">9. Limitation of Liability</h2>
            <p className="text-[#5F6368]">
              To the maximum extent permitted by applicable law, LOCALOS AI shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business reputation, arising from your use of the service or actions taken by third-party search engines.
            </p>
          </section>

          {/* Section 10 */}
          <section className="space-y-3 border-t border-[#E0E3E7] pt-6">
            <h2 className="text-lg font-bold text-[#202124]">10. Contacting Legal Counsel</h2>
            <p className="text-[#5F6368]">
              For formal legal inquiries, notices, or terms questions, please reach:
            </p>
            <div className="p-4 rounded-xl bg-neutral-50 border border-[#E0E3E7] text-xs space-y-1 text-[#202124]">
              <div className="font-semibold">LOCALOS AI Legal Department</div>
              <div>Email: <span className="text-[#1A73E8]">legal@localos.ai</span></div>
              <div>Physical inquiries: Legal Counsel, LOCALOS AI, Inc.</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
