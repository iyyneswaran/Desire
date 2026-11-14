'use client'

import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { Heart, Briefcase, Clock, ShieldCheck, AlertCircle } from 'lucide-react'

export default function ConsequencesSection() {
  return (
    <section id="consequences" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="07"
        category="Ecology of impact"
        title="When impulse overrides judgment."
        subtitle="The human cost of unchecked desire is rarely physical injury. It is the silent, cumulative erosion of trust, professional credibility, cognitive focus, and self-respect."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Important Contextual Qualification */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
            <AlertCircle size={20} />
          </div>
          <div className="space-y-1 text-sm sm:text-base font-sans">
            <h4 className="font-semibold text-[#F2F5EF]">
              Context Dictates Consequences &middot; Not Desire Itself
            </h4>
            <p className="text-[#A0AAA0] leading-relaxed">
              Experiencing healthy sexual attraction or mutual, respectful intimacy does not produce these adverse outcomes. 
              The dangers arise when impulses bypass informed consent, violate personal or professional boundaries, or persist compulsively despite clear real-world damage.
            </p>
          </div>
        </div>

        {/* 4 Large Editorial Cards */}
        <div className="space-y-8">
          
          {/* 1. Relationships & Trust (Full width hero card) */}
          <div className="rounded-2xl border border-white/10 bg-[#101810] p-8 sm:p-12 hover:border-white/20 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B9FF43]/10 border border-[#B9FF43]/20 text-[#B9FF43] font-mono text-xs">
                  <Heart size={14} />
                  <span>Area 01 &middot; Interpersonal Ecology</span>
                </div>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#F2F5EF]">
                  Relationships and Reciprocal Trust
                </h3>
                <p className="font-sans text-base text-[#A0AAA0] leading-relaxed">
                  Trust is the most fragile currency in human social architecture. When desire drives deception, infidelity, or instrumental objectification, the foundational security of a partnership collapses.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Erosion of Psychological Safety
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Once betrayal occurs, emotional transparency is replaced with vigilance, suspicion, and deep grief that often takes years of therapy to untangle.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Objectification vs. Intimacy
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Treating a partner as a means to an end deprives both people of genuine, vulnerable connection, leaving an enduring sense of hollow loneliness.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Intergenerational Collateral Damage
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Broken trust within families creates profound psychological instability for children, siblings, and extended social circles.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    The Asymmetry of Building vs. Breaking
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Trust takes decades of demonstrated loyalty to construct, yet can be irreparably fractured in less than 60 seconds of unexamined impulse.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Professional Responsibilities & Decision-Making */}
          <div className="rounded-2xl border border-white/10 bg-[#101810] p-8 sm:p-12 hover:border-white/20 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#78D957]/10 border border-[#78D957]/20 text-[#78D957] font-mono text-xs">
                  <Briefcase size={14} />
                  <span>Area 02 &middot; Institutional Governance</span>
                </div>
                <h3 className="font-sans text-3xl sm:text-4xl font-bold text-[#F2F5EF]">
                  Decision-Making &amp; Professional Responsibility
                </h3>
                <p className="font-sans text-base text-[#A0AAA0] leading-relaxed">
                  Exceptional technical genius does not guarantee moral or personal wisdom. When leaders, managers, or researchers allow sexual impulses to cloud their judgment, entire organizations suffer.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Power Imbalances &amp; Coercion
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Romantic or sexual pursuit across hierarchy (manager/subordinate, professor/student) fatally compromises genuine consent and institutional fairness.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Severe Conflicts of Interest
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Personal entanglements distort hiring, resource allocation, confidential IP protection, and board oversight.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Catastrophic Career Forfeiture
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    Decades of technological breakthrough and leadership prestige can be terminated instantly by ethical investigations and public resignations.
                  </p>
                </div>
                <div className="bg-[#050705] p-5 rounded-xl border border-white/5 space-y-2">
                  <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                    Organizational Demoralization
                  </h4>
                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    When key leaders compromise their integrity, employee morale plummets, stakeholder trust evaporates, and market valuation faces turmoil.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 & 4: Two Column Grid for Attention and Self-Respect */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 3. Attention, Time & Personal Goals */}
            <div className="rounded-2xl border border-white/10 bg-[#101810] p-8 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#E5C07B]/10 border border-[#E5C07B]/20 text-[#E5C07B] font-mono text-xs">
                <Clock size={14} />
                <span>Area 03 &middot; Opportunity Cost</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                Attention, Time &amp; Goals
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#A0AAA0] leading-relaxed">
                The most pervasive everyday tax of uncontrolled digital desire is time displacement. The hours surrendered to algorithmic rabbit holes and late-night escapism are permanently subtracted from your life&apos;s masterwork.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Fragmented cognitive focus and impaired deep-work capability',
                  'Delayed academic deadlines, sleep deprivation, and chronic brain fog',
                  'Substitution of synthetic dopamine for genuine creative and athletic achievement',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F2F5EF]">
                    <span className="text-[#B9FF43] font-mono">&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Self-Respect & Psychological Well-being */}
            <div className="rounded-2xl border border-white/10 bg-[#101810] p-8 sm:p-10 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#B9FF43]/10 border border-[#B9FF43]/20 text-[#B9FF43] font-mono text-xs">
                <ShieldCheck size={14} />
                <span>Area 04 &middot; Internal Sovereignty</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                Self-Respect &amp; Well-Being
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#A0AAA0] leading-relaxed">
                The most intimate casualty is not public exposure; it is the quiet erosion of faith in your own word. When you repeatedly act against your own convictions, internal cognitive dissonance deepens.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  'Persistent cycle of compulsive rationalization followed by acute post-consumption regret',
                  'Loss of internal self-efficacy: feeling like a passive spectator to your own impulses',
                  'Emotional numbing and cynical detachment from authentic human intimacy',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F2F5EF]">
                    <span className="text-[#B9FF43] font-mono">&bull;</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <QuoteBlock
          quote="Your achievements determine what you have built. Your decisions determine whether you protect what you have built."
          attribution="The Law of Preservation"
        />

      </div>
    </section>
  )
}
