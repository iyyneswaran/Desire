'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { myths } from '@/data/myths'
import { XCircle, CheckCircle2, BookOpen } from 'lucide-react'

export default function MythFactSection() {
  const [revealedIds, setRevealedIds] = useState<Set<number>>(new Set([1])) // default open first myth

  const toggleReveal = (id: number) => {
    setRevealedIds((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  const revealAll = () => {
    setRevealedIds(new Set(myths.map((m) => m.id)))
  }

  const resetAll = () => {
    setRevealedIds(new Set())
  }

  return (
    <section id="myths" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="13"
        category="Evidence vs Folklore"
        title="Myths vs facts."
        subtitle="Separating peer-reviewed neuroscience and endocrinology from viral internet dogma, shame narratives, and pseudo-scientific folklore."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-12">
        
        {/* Controls */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <span className="font-mono text-xs text-[#A0AAA0]">
            {revealedIds.size} of {myths.length} Scientific Truths Unlocked
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={revealAll}
              className="font-mono text-xs text-[#B9FF43] hover:underline"
            >
              Reveal All
            </button>
            <span className="text-[#687368]">&middot;</span>
            <button
              onClick={resetAll}
              className="font-mono text-xs text-[#A0AAA0] hover:text-white"
            >
              Reset
            </button>
          </div>
        </div>

        {/* List of 5 Interactive Myth/Fact Cards */}
        <div className="space-y-6">
          {myths.map((item) => {
            const isRevealed = revealedIds.has(item.id)

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isRevealed
                    ? 'border-[#B9FF43]/40 bg-[#101810]'
                    : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                }`}
              >
                {/* Myth Headline Bar */}
                <div
                  onClick={() => toggleReveal(item.id)}
                  className="cursor-pointer p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-[#172019]/50 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-[#FF5C5C]/15 text-[#FF5C5C] shrink-0 mt-0.5">
                      <XCircle size={22} />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] uppercase tracking-wider text-[#FF5C5C] font-semibold">
                          Myth 0{item.id} &middot; {item.category}
                        </span>
                      </div>
                      <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#F2F5EF]">
                        &ldquo;{item.myth}&rdquo;
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleReveal(item.id)
                    }}
                    className={`font-mono text-xs px-4 py-2 rounded-lg border transition-all self-start sm:self-auto shrink-0 ${
                      isRevealed
                        ? 'border-white/20 text-[#A0AAA0] bg-[#050705]'
                        : 'border-[#B9FF43] text-[#B9FF43] bg-[#B9FF43]/10 hover:bg-[#B9FF43] hover:text-[#050705]'
                    }`}
                  >
                    {isRevealed ? 'Hide Science' : 'Reveal Fact &rarr;'}
                  </button>
                </div>

                {/* Revealed Fact & Explanation Drawer */}
                {isRevealed && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-white/10 bg-[#0A100B] space-y-6 animate-fadeIn">
                    
                    {/* Fact Banner */}
                    <div className="flex items-start gap-4 pt-6">
                      <div className="p-2 rounded-lg bg-[#B9FF43]/15 text-[#B9FF43] shrink-0 mt-0.5">
                        <CheckCircle2 size={22} />
                      </div>
                      <div className="space-y-1">
                        <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] font-semibold">
                          Empirical Scientific Fact
                        </span>
                        <h4 className="font-sans text-lg sm:text-xl font-bold text-[#F2F5EF]">
                          {item.fact}
                        </h4>
                      </div>
                    </div>

                    {/* Scientific Explanation */}
                    <div className="pl-0 sm:pl-12 space-y-4">
                      <p className="font-sans text-sm sm:text-base text-[#A0AAA0] leading-relaxed">
                        {item.explanation}
                      </p>

                      {/* Academic Citations */}
                      <div className="flex items-center gap-2 pt-2 text-xs font-mono text-[#687368]">
                        <BookOpen size={14} className="text-[#78D957]" />
                        <span>Sources: <strong className="text-[#A0AAA0]">{item.source}</strong></span>
                      </div>
                    </div>

                  </div>
                )}
              </div>
            )
          })}
        </div>

        <QuoteBlock
          quote="The truth does not fear investigation. Pseudo-science thrives on shame and dogma; genuine self-mastery is built on evidence."
          attribution="Scientific Integrity Principle"
        />

      </div>
    </section>
  )
}
