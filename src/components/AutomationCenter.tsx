import React, { useState } from 'react';
import {
  Workflow,
  ArrowDown,
  PauseCircle,
  PlayCircle,
  CheckCircle2,
  Sliders,
  ShieldCheck,
  BellRing
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AutomationCenter: React.FC = () => {
  const [mode, setMode] = useState<'manual' | 'approval' | 'auto'>('approval');
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section id="automations" className="py-20 bg-[#FAFAFA] border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Process Orchestration
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#202124] tracking-tight">
            Automate the work. Keep control.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F6368]">
            Every automation can be configured with triggers, conditions, actions, schedules and approval requirements.
          </p>
        </ScrollReveal>

        {/* Automation Master Controls */}
        <ScrollReveal delay={120}>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-[#E0E3E7] shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E0E3E7]">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#5F6368]">
                  Global Execution Policy
                </div>
                <div className="text-lg font-bold text-[#202124] mt-0.5">
                  Workflow Builder & Governance
                </div>
              </div>

              {/* Mode Selector & Pause Switch */}
              <div className="flex flex-wrap items-center gap-3">
                {/* Segmented Mode Control */}
                <div className="flex items-center p-1 bg-neutral-100 rounded-lg text-xs font-medium">
                  <button
                    type="button"
                    onClick={() => setMode('manual')}
                    className={`px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                      mode === 'manual'
                        ? 'bg-white text-[#202124] shadow-xs font-semibold'
                        : 'text-[#5F6368] hover:text-[#202124]'
                    }`}
                  >
                    Manual
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('approval')}
                    className={`px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                      mode === 'approval'
                        ? 'bg-white text-[#1A73E8] shadow-xs font-semibold'
                        : 'text-[#5F6368] hover:text-[#202124]'
                    }`}
                  >
                    Approval Required
                  </button>
                  <button
                    type="button"
                    onClick={() => setMode('auto')}
                    className={`px-3 py-1.5 rounded-md transition-all duration-150 cursor-pointer ${
                      mode === 'auto'
                        ? 'bg-white text-[#188038] shadow-xs font-semibold'
                        : 'text-[#5F6368] hover:text-[#202124]'
                    }`}
                  >
                    Automatic
                  </button>
                </div>

                {/* Pause Toggle */}
                <button
                  type="button"
                  onClick={() => setIsPaused(!isPaused)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer ${
                    isPaused
                      ? 'bg-amber-100 text-amber-900 border border-amber-300'
                      : 'bg-neutral-100 text-[#5F6368] hover:bg-neutral-200 border border-neutral-200'
                  }`}
                >
                  {isPaused ? (
                    <>
                      <PlayCircle className="w-4 h-4 text-amber-700" />
                      <span>Resume Workflows</span>
                    </>
                  ) : (
                    <>
                      <PauseCircle className="w-4 h-4 text-[#D93025]" />
                      <span>Pause All Automations</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Workflow Status Banner */}
            {isPaused && (
              <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-900 flex items-center justify-between animate-in fade-in duration-200">
                <span>All active background triggers and webhooks are paused. No automatic actions will execute.</span>
                <span className="font-mono text-amber-700 font-bold uppercase">PAUSED</span>
              </div>
            )}

            {/* Visual Step-by-Step Flow Pipeline */}
            <div className="mt-8 space-y-3">
              <div className="text-xs font-bold text-[#5F6368] uppercase tracking-wider mb-2">
                Active Workflow Example: Negative Sentiment Escalation
              </div>

              {/* Step 1: TRIGGER */}
              <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/60 hover:bg-white hover:border-[#1A73E8]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-neutral-200 text-[#202124] text-xs font-mono font-bold transition-transform duration-200 group-hover:scale-105">
                    TRIGGER
                  </span>
                  <span className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">
                    New 1–3 star review received on Google
                  </span>
                </div>
                <span className="text-xs text-[#5F6368]">Webhook event</span>
              </div>

              <div className="flex justify-center text-neutral-400 py-0.5">
                <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>

              {/* Step 2: CONDITION */}
              <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/60 hover:bg-white hover:border-[#1A73E8]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#E8F0FE] text-[#1A73E8] text-xs font-mono font-bold transition-transform duration-200 group-hover:scale-105">
                    CONDITION
                  </span>
                  <span className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">
                    Negative sentiment or service complaint detected
                  </span>
                </div>
                <span className="text-xs text-[#1A73E8] font-medium">NLP Classification</span>
              </div>

              <div className="flex justify-center text-neutral-400 py-0.5">
                <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>

              {/* Step 3: ACTION */}
              <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/60 hover:bg-white hover:border-[#1A73E8]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs font-mono font-bold transition-transform duration-200 group-hover:scale-105">
                    ACTION
                  </span>
                  <span className="text-sm font-semibold text-[#202124] group-hover:text-[#1A73E8] transition-colors">
                    Generate empathetic, fact-checked reply draft
                  </span>
                </div>
                <span className="text-xs text-indigo-700">AI Grounded Assistant</span>
              </div>

              <div className="flex justify-center text-neutral-400 py-0.5">
                <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>

              {/* Step 4: APPROVAL */}
              <div className="p-4 rounded-xl border-2 border-[#1A73E8]/40 bg-[#E8F0FE]/30 hover:border-[#1A73E8] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-[#1A73E8] text-white text-xs font-mono font-bold transition-transform duration-200 group-hover:scale-105 shadow-2xs">
                    APPROVAL
                  </span>
                  <div>
                    <span className="text-sm font-bold text-[#202124] block">
                      Manager approval required
                    </span>
                    <span className="text-xs text-[#5F6368]">
                      Push notification sent to GM &bull; Reply stays in draft state until signed off
                    </span>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#188038] bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1 transition-transform group-hover:scale-105">
                  <ShieldCheck className="w-3.5 h-3.5" /> Enforced Gate
                </span>
              </div>

              <div className="flex justify-center text-neutral-400 py-0.5">
                <ArrowDown className="w-4 h-4 animate-bounce" style={{ animationDuration: '2.5s' }} />
              </div>

              {/* Step 5: ACTION */}
              <div className="p-4 rounded-xl border border-[#E0E3E7] bg-neutral-50/60 hover:bg-white hover:border-[#1A73E8]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-200 flex items-center justify-between group cursor-default">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-[#188038] text-xs font-mono font-bold transition-transform duration-200 group-hover:scale-105">
                    ACTION
                  </span>
                  <span className="text-sm font-semibold text-[#202124] group-hover:text-[#188038] transition-colors">
                    Publish approved response directly via Google Business Profile API
                  </span>
                </div>
                <span className="text-xs text-[#188038] font-mono">Authenticated</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200/60 flex flex-wrap items-center justify-between text-xs text-[#5F6368] gap-2">
              <span>Configured policy: <strong className="text-[#202124]">{mode.toUpperCase()} MODE</strong></span>
              <span>All actions logged in immutable audit records</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
