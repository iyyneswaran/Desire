'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { principles } from '@/data/principles'
import { Sparkles, HelpCircle } from 'lucide-react'

export default function SelfMasterySection() {
  const [activePrincipleNum, setActivePrincipleNum] = useState<string>('01')
  const activePrinciple = principles.find((p) => p.number === activePrincipleNum) || principles[0]

  return (
    <section id="self-mastery" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="12"
        category="Codex of sovereignty"
        title="Seven principles of self-mastery."
        subtitle="Practical, lifelong behavioral operating principles for governing biological drives, respecting autonomy, and building an unshakeable life."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Grid of the 7 Principles (Horizontal cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p) => {
            const isSelected = activePrincipleNum === p.number
            return (
              <div
                key={p.number}
                onClick={() => setActivePrincipleNum(p.number)}
                className={`group cursor-pointer rounded-2xl border p-6 sm:p-8 flex flex-col justify-between transition-all ${
                  isSelected
                    ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_25px_-5px_rgba(185,255,67,0.2)]'
                    : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-2xl font-bold text-[#B9FF43]">
                      {p.number}
                    </span>
                    <span className="font-mono text-[10px] text-[#687368] uppercase">
                      Principle
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-semibold text-[#F2F5EF] leading-snug">
                    {p.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                    {p.shortSummary}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between mt-6">
                  <span className="font-mono text-xs text-[#B9FF43] group-hover:underline">
                    Inspect Protocol &rarr;
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            )
          })}
        </div>

        {/* Selected Principle Deep-Dive Drawer Panel */}
        <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                Operational Protocol &middot; Principle {activePrinciple.number}
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                {activePrinciple.title}
              </h3>
            </div>
            <span className="font-mono text-xs text-[#78D957] bg-[#050705] px-4 py-2 rounded-lg border border-white/10 self-start sm:self-auto">
              Applied Neuroscience
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Scientific Basis */}
            <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block font-semibold">
                Scientific &amp; Neural Rationale
              </span>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                {activePrinciple.scientificBasis}
              </p>
            </div>

            {/* Practical Action Protocol */}
            <div className="rounded-xl bg-[#172019] p-6 border border-[#B9FF43]/30 space-y-2">
              <div className="flex items-center gap-2 text-[#B9FF43]">
                <Sparkles size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Actionable Implementation
                </span>
              </div>
              <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed font-medium">
                {activePrinciple.practicalProtocol}
              </p>
            </div>

            {/* Socratic Self-Reflection Question */}
            <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C07B]">
                <HelpCircle size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Personal Reflection
                </span>
              </div>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed italic">
                &ldquo;{activePrinciple.reflectionQuestion}&rdquo;
              </p>
            </div>

          </div>
        </div>

        <QuoteBlock
          quote="Self-control isn't the absence of desire. It is the ability to act with intention."
          attribution="Core Definition of Sovereignty"
        />

      </div>
    </section>
  )
}
