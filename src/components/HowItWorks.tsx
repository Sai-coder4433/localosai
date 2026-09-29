import React from 'react';
import {
  UserPlus,
  KeyRound,
  Store,
  SlidersHorizontal,
  PlayCircle,
  LineChart
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Create your account',
      desc: 'Sign up with your work email. No credit card required to start your setup.',
      icon: UserPlus,
    },
    {
      num: '02',
      title: 'Connect Google',
      desc: 'Authorize access securely via Google’s official OAuth consent screen.',
      icon: KeyRound,
    },
    {
      num: '03',
      title: 'Select your Business Profile',
      desc: 'Choose the authorized locations you want to manage or monitor.',
      icon: Store,
    },
    {
      num: '04',
      title: 'Configure your local presence',
      desc: 'Audit business hours, review links, NFC tags, and service categories.',
      icon: SlidersHorizontal,
    },
    {
      num: '05',
      title: 'Enable workflows',
      desc: 'Turn on AI reply drafting, review alerts, and post scheduling with approval gates.',
      icon: PlayCircle,
    },
    {
      num: '06',
      title: 'Track results',
      desc: 'Watch local rankings, profile actions, direction taps, and review velocity grow.',
      icon: LineChart,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Rapid Onboarding
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Start in minutes.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#5F6368]">
            Simple 6-step integration designed to get your locations connected without technical friction.
          </p>
        </ScrollReveal>

        {/* 6 Steps Grid with Timeline Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <ScrollReveal key={step.num} delay={idx * 70}>
              <div
                className="h-full bg-neutral-50/50 rounded-2xl border border-[#E0E3E7] p-6 hover:border-[#1A73E8]/50 hover:-translate-y-1 hover:shadow-md transition-all duration-300 shadow-2xs relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#E0E3E7] text-[#1A73E8] flex items-center justify-center shadow-2xs transition-all duration-200 group-hover:scale-105 group-hover:border-[#1A73E8]/40">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xl font-bold text-[#E0E3E7] transition-colors duration-200 group-hover:text-[#1A73E8]/40">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-[#202124] mb-2 group-hover:text-[#1A73E8] transition-colors">{step.title}</h3>
                  <p className="text-xs text-[#5F6368] leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-6 pt-3 border-t border-neutral-200/60 text-[11px] font-semibold text-[#1A73E8]">
                  Step {step.num} &bull; Estimated ~1–2 mins
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
