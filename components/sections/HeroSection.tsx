'use client'

import { useState } from 'react'
import { ArrowRight, Compass, Brain, Zap } from 'lucide-react'

export default function HeroSection() {
  const [activePathway, setActivePathway] = useState<'impulse' | 'governed'>('governed')

  return (
    <section id="hero" className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20">
      <div className="relative z-10 mx-auto max-w-[1320px] px-6 sm:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Headline & Messaging */}
          <div className="lg:col-span-7 space-y-8">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-white/10 bg-[#101810]/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] shadow-[0_0_8px_#B9FF43]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A0AAA0]">
                The Science of Desire &amp; Self-Mastery
              </span>
            </div>

            {/* Main Editorial Headline */}
            <div className="space-y-2">
              <h1 className="font-sans text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-[#F2F5EF] leading-[1.08]">
                Desire is human.{' '}
                <span className="block text-gradient-lime">
                  Self-mastery is a choice.
                </span>
              </h1>
            </div>

            {/* Supporting Text */}
            <p className="max-w-2xl font-sans text-lg sm:text-xl text-[#A0AAA0] leading-relaxed font-normal">
              Explore the biology, psychology, and behavioural mechanisms behind desire — and understand how awareness creates room for better decisions.
            </p>

            {/* Core Premise Callout Box */}
            <div className="border-l-2 border-[#B9FF43] bg-[#101810]/70 backdrop-blur-md py-4 px-6 rounded-r-lg max-w-xl">
              <p className="font-sans text-base text-[#F2F5EF] leading-relaxed">
                &ldquo;You don&apos;t have to eliminate desire. You have to learn to govern it.&rdquo;
              </p>
              <span className="mt-2 block font-mono text-[11px] text-[#A0AAA0] uppercase tracking-wider">
                Central Principle &middot; College Educational Series
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#opening-reflection"
                className="group inline-flex items-center gap-2.5 bg-[#B9FF43] hover:bg-[#a6ec34] text-[#050705] font-sans font-medium text-sm px-6 py-3.5 rounded-md transition-all shadow-[0_0_25px_-5px_rgba(185,255,67,0.35)]"
              >
                <span>Explore the experience</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#neurochemistry"
                className="inline-flex items-center gap-2 border border-white/10 hover:border-[#B9FF43]/50 bg-[#101810]/60 hover:bg-[#172019] text-[#F2F5EF] font-sans text-sm px-6 py-3.5 rounded-md transition-all backdrop-blur-sm"
              >
                <Brain size={16} className="text-[#B9FF43]" />
                <span>Understand the science</span>
              </a>
            </div>

            {/* Floating Scientific Pill Tags */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2 sm:gap-3">
              {[
                { label: 'DOPAMINE', desc: 'Incentive Salience' },
                { label: 'REWARD', desc: 'Mesolimbic Drive' },
                { label: 'IMPULSE', desc: 'Subcortical Surge' },
                { label: 'SELF-REGULATION', desc: 'Prefrontal Oversight' },
              ].map((tag) => (
                <div
                  key={tag.label}
                  className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#101810]/90 border border-white/10 font-mono text-xs"
                >
                  <span className="text-[#B9FF43] font-semibold">{tag.label}</span>
                  <span className="text-[#687368] text-[10px] hidden sm:inline">&middot; {tag.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Neural Visual Exhibit */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-white/10 bg-[#101810]/75 backdrop-blur-xl p-6 sm:p-8 shadow-2xl">
              
              {/* Exhibit Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div className="space-y-1">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#B9FF43]">
                    Interactive Model 01
                  </span>
                  <h3 className="font-sans text-base font-semibold text-[#F2F5EF]">
                    The Decision Architecture
                  </h3>
                </div>
                {/* State Switcher */}
                <div className="flex rounded-lg bg-[#050705] p-1 border border-white/10">
                  <button
                    onClick={() => setActivePathway('impulse')}
                    className={`font-mono text-[11px] px-3 py-1 rounded transition-colors ${
                      activePathway === 'impulse'
                        ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] font-semibold'
                        : 'text-[#A0AAA0] hover:text-white'
                    }`}
                  >
                    Automatic
                  </button>
                  <button
                    onClick={() => setActivePathway('governed')}
                    className={`font-mono text-[11px] px-3 py-1 rounded transition-colors ${
                      activePathway === 'governed'
                        ? 'bg-[#B9FF43]/20 text-[#B9FF43] font-semibold'
                        : 'text-[#A0AAA0] hover:text-white'
                    }`}
                  >
                    Governed
                  </button>
                </div>
              </div>

              {/* Neural Circuit Diagram Graphic */}
              <div className="py-6 flex items-center justify-center">
                <svg viewBox="0 0 380 260" fill="none" className="w-full max-w-[360px] h-auto">
                  <defs>
                    <linearGradient id="limeBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#B9FF43" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#78D957" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="coralBeam" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FF5C5C" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#E06C75" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>

                  {/* Nodes: Sensory -> Limbic/Urge -> Choice Point -> (Automatic Action vs Governed Pause) */}
                  {/* Origin: Stimulus */}
                  <circle cx="60" cy="130" r="18" fill="#172019" stroke="#B9FF43" strokeWidth="1.5" />
                  <text x="60" y="134" textAnchor="middle" fill="#F2F5EF" fontSize="9" fontFamily="monospace">CUE</text>
                  <text x="60" y="162" textAnchor="middle" fill="#A0AAA0" fontSize="8" fontFamily="sans-serif">Stimulus</text>

                  {/* Mid: Limbic Urge */}
                  <circle cx="160" cy="130" r="22" fill="#172019" stroke={activePathway === 'impulse' ? '#FF5C5C' : '#B9FF43'} strokeWidth="1.5" />
                  <text x="160" y="134" textAnchor="middle" fill="#F2F5EF" fontSize="9" fontFamily="monospace">URGE</text>
                  <text x="160" y="166" textAnchor="middle" fill="#A0AAA0" fontSize="8" fontFamily="sans-serif">Dopamine Vector</text>

                  {/* Connection Cue -> Urge */}
                  <line x1="78" y1="130" x2="138" y2="130" stroke="#B9FF43" strokeWidth="2" strokeDasharray="3 3" />

                  {/* Fork Paths */}
                  {activePathway === 'impulse' ? (
                    // Automatic path direct to impulsive action
                    <>
                      <path
                        d="M 182 130 C 230 130, 260 70, 310 70"
                        stroke="url(#coralBeam)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="310" cy="70" r="20" fill="#201010" stroke="#FF5C5C" strokeWidth="2" />
                      <text x="310" y="74" textAnchor="middle" fill="#FF5C5C" fontSize="9" fontFamily="monospace">REACT</text>
                      <text x="310" y="104" textAnchor="middle" fill="#A0AAA0" fontSize="8" fontFamily="sans-serif">Automatic Regret</text>
                      
                      {/* Dormant prefrontal line */}
                      <path
                        d="M 182 130 C 230 130, 260 190, 310 190"
                        stroke="#244B2D"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.3"
                      />
                      <circle cx="310" cy="190" r="16" fill="#101810" stroke="#687368" strokeWidth="1" opacity="0.4" />
                      <text x="310" y="194" textAnchor="middle" fill="#687368" fontSize="8" fontFamily="monospace">PAUSE</text>
                    </>
                  ) : (
                    // Governed path through prefrontal pause
                    <>
                      {/* Inactive impulsive bypass */}
                      <path
                        d="M 182 130 C 230 130, 260 70, 310 70"
                        stroke="#687368"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                        opacity="0.3"
                      />
                      <circle cx="310" cy="70" r="16" fill="#101810" stroke="#687368" strokeWidth="1" opacity="0.4" />
                      <text x="310" y="74" textAnchor="middle" fill="#687368" fontSize="8" fontFamily="monospace">REACT</text>

                      {/* Active Prefrontal Governance path */}
                      <path
                        d="M 182 130 C 230 130, 250 190, 310 190"
                        stroke="url(#limeBeam)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <circle cx="310" cy="190" r="22" fill="#172019" stroke="#B9FF43" strokeWidth="2" />
                      <text x="310" y="194" textAnchor="middle" fill="#B9FF43" fontSize="9" fontFamily="monospace">PAUSE</text>
                      <text x="310" y="226" textAnchor="middle" fill="#A0AAA0" fontSize="8" fontFamily="sans-serif">Self-Mastery</text>
                    </>
                  )}
                </svg>
              </div>

              {/* Dynamic Exhibit Explanation */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 p-1 rounded ${activePathway === 'impulse' ? 'bg-[#FF5C5C]/20 text-[#FF5C5C]' : 'bg-[#B9FF43]/20 text-[#B9FF43]'}`}>
                    {activePathway === 'impulse' ? <Zap size={14} /> : <Compass size={14} />}
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-semibold text-[#F2F5EF]">
                      {activePathway === 'impulse'
                        ? 'Unmoderated Limbic Reactivity'
                        : 'Prefrontal Cortical Interruption'}
                    </h4>
                    <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed mt-0.5">
                      {activePathway === 'impulse'
                        ? 'Trigger directly activates subcortical dopamine reward-seeking. Without conscious delay, action follows automatically, bypassing values evaluation.'
                        : 'The prefrontal cortex introduces a deliberate cognitive gap. The impulse is acknowledged without being obeyed, preserving autonomy and personal dignity.'}
                    </p>
                  </div>
                </div>

                {/* Key Metric Stats Footer */}
                <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/5 text-center">
                  <div className="bg-[#050705]/60 p-2 rounded border border-white/5">
                    <span className="block font-mono text-xs text-[#B9FF43] font-bold">~150 ms</span>
                    <span className="font-sans text-[10px] text-[#687368]">Sensory Detection</span>
                  </div>
                  <div className="bg-[#050705]/60 p-2 rounded border border-white/5">
                    <span className="block font-mono text-xs text-[#78D957] font-bold">10–15 min</span>
                    <span className="font-sans text-[10px] text-[#687368]">Craving Crest Wave</span>
                  </div>
                  <div className="bg-[#050705]/60 p-2 rounded border border-white/5">
                    <span className="block font-mono text-xs text-[#F2F5EF] font-bold">100%</span>
                    <span className="font-sans text-[10px] text-[#687368]">Governed Window</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
