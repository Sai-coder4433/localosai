import React, { useState } from 'react';
import {
  Star,
  Sparkles,
  Copy,
  ExternalLink,
  QrCode,
  Smartphone,
  ShieldCheck,
  Check,
  CheckCircle2
} from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const ReviewOnlineSection: React.FC = () => {
  const [screen, setScreen] = useState<1 | 2>(1);
  const [rating, setRating] = useState<number>(5);
  const [selectedChips, setSelectedChips] = useState<string[]>([
    'Great Food',
    'Friendly Staff',
    'Clean Ambience',
  ]);
  const [copied, setCopied] = useState(false);
  const [googlePromptActive, setGooglePromptActive] = useState(false);
  const [editableReview, setEditableReview] = useState(
    'Had a wonderful time at Spiral Katta! The food was delicious, the staff was extremely warm and attentive, and the clean ambience made it a delightful visit. Will certainly return!'
  );

  const availableChips = [
    'Great Food',
    'Fast Service',
    'Friendly Staff',
    'Clean Ambience',
    'Good Value',
  ];

  const toggleChip = (chip: string) => {
    if (selectedChips.includes(chip)) {
      setSelectedChips(selectedChips.filter((c) => c !== chip));
    } else {
      setSelectedChips([...selectedChips, chip]);
    }
  };

  const handleGenerate = () => {
    const chipText = selectedChips.join(', ').toLowerCase();
    const generated = `Had a fantastic experience at Spiral Katta! What stood out most was the ${chipText || 'wonderful quality'}. The team made us feel right at home. Highly recommend checking them out!`;
    setEditableReview(generated);
    setScreen(2);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(editableReview);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContinueToGoogle = () => {
    setGooglePromptActive(true);
    setTimeout(() => setGooglePromptActive(false), 3500);
  };

  return (
    <section id="review-online" className="py-24 bg-[#FAFAFA] border-t border-[#E0E3E7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1A73E8]">
            Customer Experience Differentiator
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#202124] tracking-tight">
            Turn every customer interaction into a better review experience.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F6368]">
            Review Online empowers patrons at the counter or dining table with seamless QR codes and NFC taps — making it effortless to articulate their authentic thoughts and post them to Google.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Mobile Mockup */}
          <ScrollReveal delay={100} className="lg:col-span-6 flex flex-col items-center">
            {/* Phone Screen Container with hover lift */}
            <div className="w-full max-w-[340px] sm:max-w-[360px] bg-[#202124] p-3 rounded-[40px] shadow-2xl border-4 border-neutral-300 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl">
              <div className="bg-white rounded-[32px] overflow-hidden min-h-[580px] flex flex-col justify-between p-5 border border-neutral-100">
                {/* Mobile Top Bar */}
                <div>
                  <div className="flex items-center justify-between text-[11px] text-[#5F6368] pb-3 border-b border-neutral-100">
                    <span className="font-semibold text-[#202124]">Review Online</span>
                    <span className="flex items-center gap-1 text-[#188038]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#188038] animate-pulse"></span> NFC Active
                    </span>
                  </div>

                  {/* Business Identity */}
                  <div className="text-center mt-4">
                    <div className="w-12 h-12 rounded-full bg-[#E8F0FE] text-[#1A73E8] font-extrabold text-sm mx-auto flex items-center justify-center border border-[#1A73E8]/20 shadow-2xs transition-transform duration-200 hover:scale-105">
                      SK
                    </div>
                    <div className="text-base font-bold text-[#202124] mt-2">Spiral Katta</div>
                    <p className="text-xs text-[#5F6368]">Share your honest feedback with us</p>
                  </div>
                </div>

                {/* Screen 1: Rating + Chips */}
                {screen === 1 && (
                  <div className="my-auto py-4 space-y-5 animate-in fade-in duration-200">
                    <div className="text-center">
                      <div className="text-sm font-semibold text-[#202124] mb-2">
                        How was your experience?
                      </div>
                      <div className="flex items-center justify-center gap-1.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setRating(star)}
                            type="button"
                            className="p-1 text-[#F9AB00] hover:scale-120 active:scale-95 transition-all duration-150 cursor-pointer"
                            aria-label={`Rate ${star} stars`}
                          >
                            <Star
                              className={`w-7 h-7 transition-colors duration-150 ${star <= rating ? 'fill-[#F9AB00]' : 'text-neutral-300'}`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="text-xs text-[#5F6368] text-center mb-2.5">
                        Select what you enjoyed:
                      </div>
                      <div className="flex flex-wrap gap-1.5 justify-center">
                        {availableChips.map((chip) => {
                          const isSelected = selectedChips.includes(chip);
                          return (
                            <button
                              key={chip}
                              type="button"
                              onClick={() => toggleChip(chip)}
                              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer hover:-translate-y-0.5 ${
                                isSelected
                                  ? 'bg-[#1A73E8] text-white shadow-2xs'
                                  : 'bg-neutral-100 text-[#5F6368] hover:bg-neutral-200 hover:text-[#202124]'
                              }`}
                            >
                              {chip}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleGenerate}
                      className="w-full py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer group"
                    >
                      <Sparkles className="w-4 h-4 transition-transform duration-200 group-hover:rotate-12" />
                      <span>Generate Review</span>
                    </button>
                  </div>
                )}

                {/* Screen 2: Generated Review + Action Buttons */}
                {screen === 2 && (
                  <div className="my-auto py-4 space-y-4 animate-in fade-in duration-200">
                    <div className="text-center">
                      <span className="text-xs font-semibold text-[#188038] bg-emerald-50 px-2.5 py-0.5 rounded-full">
                        AI Draft Ready
                      </span>
                      <div className="text-xs text-[#5F6368] mt-1">
                        Feel free to edit before continuing to Google
                      </div>
                    </div>

                    <div className="p-3 bg-neutral-50 rounded-xl border border-[#E0E3E7] focus-within:border-[#1A73E8] transition-colors">
                      <textarea
                        value={editableReview}
                        onChange={(e) => setEditableReview(e.target.value)}
                        rows={4}
                        className="w-full bg-transparent text-xs text-[#202124] focus:outline-hidden resize-none leading-relaxed"
                      />
                    </div>

                    <div className="space-y-2">
                      <button
                        type="button"
                        onClick={handleCopy}
                        className="w-full py-2.5 px-4 rounded-xl border border-[#E0E3E7] hover:bg-neutral-50 hover:border-neutral-300 text-[#202124] text-xs font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
                      >
                        {copied ? (
                          <>
                            <Check className="w-4 h-4 text-[#188038]" />
                            <span className="text-[#188038]">Copied to Clipboard!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4 text-[#5F6368] transition-transform duration-200 group-hover:scale-110" />
                            <span>Copy Review</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={handleContinueToGoogle}
                        className="w-full py-3 px-4 rounded-xl bg-[#1A73E8] hover:bg-[#1557b0] text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 cursor-pointer group"
                      >
                        <span>Continue to Google</span>
                        <ExternalLink className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.75" />
                      </button>

                      {googlePromptActive && (
                        <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-[11px] text-[#188038] text-center font-medium animate-in fade-in duration-150">
                          Directing patron to official Google Business Profile review dialog
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => setScreen(1)}
                        className="w-full text-center text-xs text-[#5F6368] hover:text-[#202124] pt-1 cursor-pointer transition-colors"
                      >
                        ← Back to options
                      </button>
                    </div>
                  </div>
                )}

                {/* Mobile Bottom Bar */}
                <div className="text-center pt-3 border-t border-neutral-100 text-[10px] text-[#5F6368]">
                  Powered by LOCALOS AI · Customer retains 100% control
                </div>
              </div>
            </div>

            {/* Screen Switcher Controls for demo */}
            <div className="mt-4 flex items-center gap-2">
              <button
                onClick={() => setScreen(1)}
                className={`px-3 py-1 text-xs font-medium rounded-md cursor-pointer transition-all duration-150 ${
                  screen === 1 ? 'bg-[#1A73E8] text-white shadow-2xs' : 'bg-neutral-200 text-[#5F6368] hover:bg-neutral-300'
                }`}
              >
                Screen 1: Tap & Tags
              </button>
              <button
                onClick={() => setScreen(2)}
                className={`px-3 py-1 text-xs font-medium rounded-md cursor-pointer transition-all duration-150 ${
                  screen === 2 ? 'bg-[#1A73E8] text-white shadow-2xs' : 'bg-neutral-200 text-[#5F6368] hover:bg-neutral-300'
                }`}
              >
                Screen 2: Review & Submit
              </button>
            </div>
          </ScrollReveal>

          {/* Right Column: Key Value Proposition & Compliance */}
          <ScrollReveal delay={200} className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-[#E0E3E7] shadow-xs hover:border-[#1A73E8]/40 transition-colors duration-200 space-y-4">
              <h3 className="text-xl font-bold text-[#202124]">
                Seamless Physical-to-Digital Reputation Engine
              </h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Most happy customers never leave a review simply because staring at a blank text box feels daunting. Review Online removes friction by translating genuine sentiment chips into an authentic personal review draft.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3 rounded-xl bg-neutral-50 border border-[#E0E3E7] hover:border-[#1A73E8]/40 hover:-translate-y-0.5 transition-all duration-200 group">
                  <QrCode className="w-5 h-5 text-[#1A73E8] mb-1.5 transition-transform duration-200 group-hover:scale-110" />
                  <div className="text-xs font-bold text-[#202124]">QR & NFC Compatible</div>
                  <div className="text-[11px] text-[#5F6368] mt-0.5">Works with iPhone & Android camera or tap.</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-[#E0E3E7] hover:border-[#1A73E8]/40 hover:-translate-y-0.5 transition-all duration-200 group">
                  <Smartphone className="w-5 h-5 text-[#1A73E8] mb-1.5 transition-transform duration-200 group-hover:scale-110" />
                  <div className="text-xs font-bold text-[#202124]">No App Required</div>
                  <div className="text-[11px] text-[#5F6368] mt-0.5">Instant browser web flow without downloads.</div>
                </div>

                <div className="p-3 rounded-xl bg-neutral-50 border border-[#E0E3E7] hover:border-[#188038]/40 hover:-translate-y-0.5 transition-all duration-200 group">
                  <ShieldCheck className="w-5 h-5 text-[#188038] mb-1.5 transition-transform duration-200 group-hover:scale-110" />
                  <div className="text-xs font-bold text-[#202124]">Customer in Control</div>
                  <div className="text-[11px] text-[#5F6368] mt-0.5">Full editing before posting to Google.</div>
                </div>
              </div>
            </div>

            {/* Strict Transparency Box (Required by Google Review Guidelines) */}
            <div className="p-6 rounded-2xl bg-blue-50/70 border border-[#1A73E8]/30 hover:border-[#1A73E8]/50 transition-colors duration-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-[#1A73E8] text-white shrink-0 mt-0.5 shadow-2xs">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#202124]">
                    Transparent Google API & Review Policy Standard
                  </h4>
                  <p className="mt-1 text-xs text-[#5F6368] leading-relaxed">
                    <strong className="text-[#202124]">LOCALOS AI does not automatically submit customer reviews to Google.</strong>{' '}
                    Every review must be posted manually by the customer directly onto Google using their own Google account. We do not gate, filter, or suppress negative feedback, strictly complying with Google Business Profile policies and the FTC Consumer Review Fairness Act.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
