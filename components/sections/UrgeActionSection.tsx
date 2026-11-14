'use client'

import SectionHeader from '@/components/layout/SectionHeader'
import ProcessFlow from '@/components/interactive/ProcessFlow'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { ShieldCheck, Compass, Clock } from 'lucide-react'

export default function UrgeActionSection() {
  return (
    <section id="urge-action" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="06"
        category="The urge-to-action gap"
        title="Between an urge and an action, there is a choice."
        subtitle="An urge is a neurochemical wave. It has no physical hands to click, no legs to walk, and no voice to speak. You are the sovereign gatekeeper."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Interactive Process Flow Component */}
        <ProcessFlow />

        {/* 3 Pillars of Expanding the Pause */}
        <div className="pt-8 space-y-6">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              Tactical Intervention
            </span>
            <h3 className="font-sans text-2xl font-semibold text-[#F2F5EF]">
              Three Ways to Protect the Pause
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-white/10 bg-[#101810] p-6 space-y-3">
              <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] w-fit">
                <Clock size={20} />
              </div>
              <h4 className="font-sans text-lg font-semibold text-[#F2F5EF]">
                1. Temporal Buffering (Delay)
              </h4>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                Commit to waiting 15 minutes before acting on any acute sexual impulse. Dopamine surges are neurochemically front-loaded; their subjective intensity naturally collapses if deprived of immediate sensory reinforcement.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#101810] p-6 space-y-3">
              <div className="p-2.5 rounded bg-[#78D957]/10 text-[#78D957] w-fit">
                <ShieldCheck size={20} />
              </div>
              <h4 className="font-sans text-lg font-semibold text-[#F2F5EF]">
                2. Environmental Relocation
              </h4>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                Change your physical coordinates instantly. Step out of the bedroom, walk into public light, drink cold water, or do 20 push-ups. Physical relocation disrupts the spatial-contextual cues feeding the habit loop.
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#101810] p-6 space-y-3">
              <div className="p-2.5 rounded bg-[#E5C07B]/10 text-[#E5C07B] w-fit">
                <Compass size={20} />
              </div>
              <h4 className="font-sans text-lg font-semibold text-[#F2F5EF]">
                3. Values Forecasting
              </h4>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                Project your consciousness 12 hours forward. Will this decision strengthen your academic and personal confidence tomorrow morning, or will it leave you depleted, distracted, and nursing regret?
              </p>
            </div>
          </div>
        </div>

        <QuoteBlock
          quote="Self-control isn't about never experiencing temptation. It's about deciding what deserves control over your life."
          attribution="Core Tenet of Self-Mastery"
        />

      </div>
    </section>
  )
}
