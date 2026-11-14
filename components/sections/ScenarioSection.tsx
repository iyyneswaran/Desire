'use client'

import SectionHeader from '@/components/layout/SectionHeader'
import ScenarioExplorer from '@/components/interactive/ScenarioExplorer'
import QuoteBlock from '@/components/shared/QuoteBlock'

export default function ScenarioSection() {
  return (
    <section id="scenarios" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="14"
        category="Interactive decision simulation"
        title="Real-world scenarios."
        subtitle="Explore three authentic student dilemmas involving attention capture, social boundaries, and compulsive habits. Test different decision paths to observe their neurochemical and real-world consequences."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        <ScenarioExplorer />

        <QuoteBlock
          quote="The goal of self-reflection is never shame or self-flagellation. It is curiosity, awareness, and strategic mastery."
          attribution="Educational Principle"
        />
      </div>
    </section>
  )
}
