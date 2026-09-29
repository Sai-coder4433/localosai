import React from 'react';
import { Check, HelpCircle, ArrowRight } from 'lucide-react';
import { RoutePath } from '../types';
import { ScrollReveal } from './ScrollReveal';

interface PricingPreviewProps {
  navigateTo: (route: RoutePath, hash?: string) => void;
}

export const PricingPreview: React.FC<PricingPreviewProps> = ({ navigateTo }) => {
  const plans = [
    {
      name: 'Starter',
      badge: 'Single Location',
      description: 'Ideal for independent local businesses getting started with Google profile optimization.',
      price: 'Pricing Coming Soon',
      subtext: 'Early access waitlist available',
      cta: 'Join Early Access',
      action: () => navigateTo('/signup'),
      primary: false,
      features: [
        '1 Google Business Profile location',
        'Review monitoring & AI draft replies',
        'Review Online basic QR generator',
        'AI Google Posts (4 / month)',
        'Local keyword tracking (5 keywords)',
        'Standard Google Profile analytics',
        'Single user account',
      ],
    },
    {
      name: 'Growth',
      badge: 'Most Popular',
      description: 'For busy local businesses needing full automation, NFC tap facilitation, and SEO tracking.',
      price: 'Pricing Coming Soon',
      subtext: 'Founding member rates available',
      cta: 'Request Growth Access',
      action: () => navigateTo('/signup'),
      primary: true,
      features: [
        'Up to 3 Google Business Profile locations',
        'Unlimited AI review replies with human gate',
        'Review Online QR + NFC tap portal',
        'Unlimited AI Google Posts & scheduling',
        'Advanced Local SEO audit & proximity grid',
        'Full Google Performance analytics',
        'Custom automation workflows & alerts',
        '3 team member seats',
      ],
    },
    {
      name: 'Agency',
      badge: 'For Marketing Agencies',
      description: 'Built for agencies managing client Google Business Profiles with segregated workspaces.',
      price: 'Talk to Us',
      subtext: 'Custom location packs available',
      cta: 'Talk to Sales',
      action: () => navigateTo('/contact'),
      primary: false,
      features: [
        '10+ Google Business Profile locations',
        'Multi-organization client hierarchy',
        'Team roles & client permission limits',
        'White-label Review Online portals',
        'Consolidated client performance reports',
        'Priority Google API quota allocation',
        'Dedicated onboarding manager',
      ],
    },
    {
      name: 'Enterprise',
      badge: 'Chains & Franchises',
      description: 'Custom governance, single sign-on (SSO), and tailored SLAs for multi-unit retail and franchises.',
      price: 'Talk to Us',
      subtext: 'Tailored enterprise licensing',
      cta: 'Contact Enterprise',
      action: () => navigateTo('/contact'),
      primary: false,
      features: [
        '50+ to 1,000+ business locations',
        'Enterprise Single Sign-On (SAML / SSO)',
        'Full REST API & Webhook access',
        'Custom AI fine-tuning on brand guidelines',
        'Custom SLA & dedicated technical account lead',
        'Bulk profile import & sync assistance',
        'Security & compliance audit support',
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#FAFAFA] border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Transparent Licensing
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Plans designed around how you grow.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5F6368]">
            Final production pricing will be announced ahead of public general availability. Connect now to lock in founding member benefits.
          </p>
        </ScrollReveal>

        {/* 4 Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, idx) => (
            <ScrollReveal key={plan.name} delay={idx * 70}>
              <div
                className={`h-full rounded-2xl border p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 group ${
                  plan.primary
                    ? 'bg-white border-[#1A73E8] shadow-lg ring-1 ring-[#1A73E8] hover:shadow-xl'
                    : 'bg-white border-[#E0E3E7] shadow-2xs hover:border-[#1A73E8]/50 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-[#202124] group-hover:text-[#1A73E8] transition-colors">{plan.name}</h3>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full transition-transform duration-200 group-hover:scale-105 ${
                        plan.primary
                          ? 'bg-[#E8F0FE] text-[#1A73E8]'
                          : 'bg-neutral-100 text-[#5F6368]'
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                  <p className="text-xs text-[#5F6368] leading-relaxed mb-6 min-h-[36px]">
                    {plan.description}
                  </p>

                  <div className="mb-6 pb-6 border-b border-neutral-100">
                    <div className="text-2xl font-extrabold text-[#202124] tracking-tight">
                      {plan.price}
                    </div>
                    <div className="text-xs text-[#5F6368] mt-1">{plan.subtext}</div>
                  </div>

                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-bold text-[#202124] uppercase tracking-wider mb-2">
                      Included capabilities:
                    </div>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-[#202124]">
                        <Check className="w-3.5 h-3.5 text-[#188038] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={plan.action}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer text-center ${
                    plan.primary
                      ? 'bg-[#1A73E8] hover:bg-[#1557b0] text-white shadow-xs hover:shadow-md'
                      : 'bg-neutral-50 hover:bg-neutral-100 hover:border-neutral-300 text-[#202124] border border-[#E0E3E7]'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Feature Comparison Matrix */}
        <ScrollReveal delay={150}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E0E3E7] shadow-xs hover:shadow-sm transition-shadow duration-300 overflow-hidden">
            <div className="p-5 border-b border-[#E0E3E7] bg-neutral-50/70">
              <h3 className="text-base font-bold text-[#202124]">
                High-Level Feature Matrix Comparison
              </h3>
              <p className="text-xs text-[#5F6368]">
                Compare capabilities across Starter, Growth, Agency, and Enterprise packages.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-[#E0E3E7] bg-neutral-50/40 text-[#5F6368]">
                    <th className="p-3.5 font-bold text-[#202124]">Platform Capability</th>
                    <th className="p-3.5 font-semibold text-center">Starter</th>
                    <th className="p-3.5 font-semibold text-center text-[#1A73E8]">Growth</th>
                    <th className="p-3.5 font-semibold text-center">Agency</th>
                    <th className="p-3.5 font-semibold text-center">Enterprise</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100 text-[#202124]">
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Google Business Profile Sync</td>
                    <td className="p-3.5 text-center">1 Location</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Up to 3</td>
                    <td className="p-3.5 text-center">10+</td>
                    <td className="p-3.5 text-center">50+ to 1,000+</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Reviews & AI Reply Assistance</td>
                    <td className="p-3.5 text-center">Standard</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Unlimited</td>
                    <td className="p-3.5 text-center">Unlimited</td>
                    <td className="p-3.5 text-center">Custom fine-tuned</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Review Online QR & NFC Portal</td>
                    <td className="p-3.5 text-center">Basic QR</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Full QR + NFC</td>
                    <td className="p-3.5 text-center">White-label</td>
                    <td className="p-3.5 text-center">Custom branded</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">AI Google Posts & Scheduling</td>
                    <td className="p-3.5 text-center">4 / month</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Unlimited</td>
                    <td className="p-3.5 text-center">Unlimited</td>
                    <td className="p-3.5 text-center">Unlimited bulk</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Local SEO & Competitor Audits</td>
                    <td className="p-3.5 text-center">5 Keywords</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Proximity Grid</td>
                    <td className="p-3.5 text-center">Advanced</td>
                    <td className="p-3.5 text-center">Custom scope</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Local Analytics & First-Party Metrics</td>
                    <td className="p-3.5 text-center"><Check className="w-4 h-4 text-[#188038] mx-auto" /></td>
                    <td className="p-3.5 text-center"><Check className="w-4 h-4 text-[#188038] mx-auto" /></td>
                    <td className="p-3.5 text-center"><Check className="w-4 h-4 text-[#188038] mx-auto" /></td>
                    <td className="p-3.5 text-center"><Check className="w-4 h-4 text-[#188038] mx-auto" /></td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Automated Workflows & Approval Gates</td>
                    <td className="p-3.5 text-center">Basic</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">Full Engine</td>
                    <td className="p-3.5 text-center">Multi-client</td>
                    <td className="p-3.5 text-center">Custom webhooks</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">API Access & SSO</td>
                    <td className="p-3.5 text-center">—</td>
                    <td className="p-3.5 text-center">—</td>
                    <td className="p-3.5 text-center">API enabled</td>
                    <td className="p-3.5 text-center">API + SAML SSO</td>
                  </tr>
                  <tr className="hover:bg-neutral-50/50 transition-colors">
                    <td className="p-3.5 font-medium">Team Member Seats</td>
                    <td className="p-3.5 text-center">1</td>
                    <td className="p-3.5 text-center font-semibold text-[#1A73E8]">3</td>
                    <td className="p-3.5 text-center">15</td>
                    <td className="p-3.5 text-center">Unlimited</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
