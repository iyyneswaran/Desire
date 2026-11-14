'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import { caseStudy } from '@/data/caseStudy'
import { ChevronDown, ChevronUp, ShieldAlert } from 'lucide-react'

const sourceColors: Record<string, { bg: string; text: string; border: string }> = {
  confirmed: { bg: 'bg-[#B9FF43]/15', text: 'text-[#B9FF43]', border: 'border-[#B9FF43]/30' },
  corporate: { bg: 'bg-[#78D957]/15', text: 'text-[#78D957]', border: 'border-[#78D957]/30' },
  reported: { bg: 'bg-[#E5C07B]/15', text: 'text-[#E5C07B]', border: 'border-[#E5C07B]/30' },
  unverified: { bg: 'bg-[#FF5C5C]/15', text: 'text-[#FF5C5C]', border: 'border-[#FF5C5C]/30' },
  analysis: { bg: 'bg-[#172019]', text: 'text-[#F2F5EF]', border: 'border-white/10' },
}

const sourceLabels: Record<string, string> = {
  confirmed: 'Confirmed Public Statement',
  corporate: 'Official Corporate Announcement',
  reported: 'Journalistic Reporting (Uncorroborated)',
  unverified: 'Unverified Allegation',
  analysis: 'Interpretive Educational Analysis',
}

export default function JensenCaseStudy() {
  const [expandedQuestion, setExpandedQuestion] = useState<number | null>(null)

  return (
    <section id="case-study" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="08"
        category="Case study &middot; Governance &amp; Impulse"
        title="When personal decisions become institutional consequences."
        subtitle="A factual, educational case analysis examining how personal boundaries, trust, and leadership intersect under intense public and institutional scrutiny."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Strict Factual Accuracy Banner */}
        <div className="rounded-xl border border-[#E5C07B]/40 bg-[#16130d] p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="p-2.5 rounded bg-[#E5C07B]/15 text-[#E5C07B] shrink-0 mt-0.5">
              <ShieldAlert size={22} />
            </div>
            <div className="space-y-2 text-sm sm:text-base font-sans">
              <span className="font-mono text-xs uppercase tracking-widest text-[#E5C07B] block font-semibold">
                Strict Factual Standards &amp; Evidentiary Disclaimer
              </span>
              <p className="text-[#A0AAA0] leading-relaxed">
                {caseStudy.accuracyNote}
              </p>
            </div>
          </div>
        </div>

        {/* Evidentiary Legend */}
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43] block">
            Evidentiary Categorization Key
          </span>
          <div className="flex flex-wrap gap-3">
            {Object.entries(sourceLabels).map(([key, label]) => {
              const style = sourceColors[key]
              return (
                <div
                  key={key}
                  className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${style.border} ${style.bg}`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${style.text} bg-current`} />
                  <span className={`font-mono text-xs ${style.text}`}>
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Background & Professional Achievement Context */}
        <div className="rounded-2xl border border-white/10 bg-[#101810] p-8 sm:p-10 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#78D957]">
                Context
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F2F5EF]">
                Decades of Extraordinary Industrial Achievement
              </h3>
            </div>
            <span className="font-mono text-xs text-[#687368]">NVIDIA Corp &middot; 1993–2026</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {caseStudy.background.map((point, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-lg bg-[#050705] border border-white/5"
              >
                <span className="font-mono text-xs text-[#B9FF43] mt-0.5 font-bold">
                  0{idx + 1}.
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline with Explicit Source Verification */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              Chronological Record
            </span>
            <h3 className="font-sans text-2xl font-semibold text-[#F2F5EF]">
              Event Sequence &amp; Verified Reporting
            </h3>
          </div>

          <div className="space-y-4">
            {caseStudy.timeline.map((event, idx) => {
              const style = sourceColors[event.sourceType]
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-white/10 bg-[#101810] p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/5">
                    <span className="font-mono text-xs text-[#B9FF43] font-bold">
                      {event.date}
                    </span>
                    <span className={`inline-flex items-center self-start sm:self-auto font-mono text-[11px] px-2.5 py-0.5 rounded-full border ${style.border} ${style.bg} ${style.text}`}>
                      {sourceLabels[event.sourceType]}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans text-lg font-semibold text-[#F2F5EF] mb-2">
                      {event.title}
                    </h4>
                    <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                      {event.description}
                    </p>
                  </div>

                  <div className="pt-2 text-right">
                    <span className="font-mono text-[11px] text-[#687368]">
                      Citing: <strong className="text-[#A0AAA0]">{event.sourceLabel}</strong>
                    </span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Educational Discussion Questions */}
        <div className="space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              Ethical Inquiry
            </span>
            <h3 className="font-sans text-2xl font-semibold text-[#F2F5EF]">
              Classroom &amp; Leadership Discussion Prompts
            </h3>
          </div>

          <div className="space-y-3">
            {caseStudy.questions.map((q) => {
              const isExpanded = expandedQuestion === q.id
              return (
                <div
                  key={q.id}
                  className="rounded-xl border border-white/10 bg-[#101810] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedQuestion(isExpanded ? null : q.id)}
                    className="w-full text-left p-6 flex items-center justify-between gap-4 hover:bg-[#172019] transition-colors"
                  >
                    <span className="font-sans text-sm sm:text-base font-medium text-[#F2F5EF]">
                      {q.id}. {q.question}
                    </span>
                    {isExpanded ? (
                      <ChevronUp size={18} className="text-[#B9FF43] shrink-0" />
                    ) : (
                      <ChevronDown size={18} className="text-[#A0AAA0] shrink-0" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-6 pt-2 border-t border-white/10 bg-[#050705]">
                      <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block mb-1">
                        Educational Context:
                      </span>
                      <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                        {q.context}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Takeaway Banner */}
        <div className="rounded-2xl border-l-4 border-[#B9FF43] bg-[#101810] p-8 sm:p-12">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43] block mb-2">
            The Governance Law
          </span>
          <p className="font-sans text-2xl sm:text-3xl font-semibold text-[#F2F5EF] leading-relaxed">
            &ldquo;{caseStudy.takeaway}&rdquo;
          </p>
        </div>

      </div>
    </section>
  )
}
