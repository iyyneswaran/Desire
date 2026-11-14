'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { interventions } from '@/data/interventions'
import {
  Brain,
  Dumbbell,
  Shield,
  Timer,
  Lightbulb,
  Compass,
  AlertTriangle,
  Sparkles,
  ChevronRight,
  Info,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  brain: Brain,
  dumbbell: Dumbbell,
  shield: Shield,
  timer: Timer,
  lightbulb: Lightbulb,
  compass: Compass,
}

export default function SelfRegulationSection() {
  const [selectedId, setSelectedId] = useState<string>(interventions[0].id)
  const currentIntervention = interventions.find((i) => i.id === selectedId) || interventions[0]

  return (
    <section id="self-regulation" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="10"
        category="Evidence-based interventions"
        title="You cannot control every impulse. You can train your response."
        subtitle="Six scientifically grounded psychological and behavioral interventions designed to intercept impulsive habits, protect personal boundaries, and build enduring self-efficacy."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Clinical Medication Disclaimer */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#E5C07B]/15 text-[#E5C07B] shrink-0 mt-0.5">
            <AlertTriangle size={20} />
          </div>
          <div className="space-y-1 text-sm sm:text-base font-sans">
            <h4 className="font-semibold text-[#F2F5EF]">
              Clinical Boundary: Psychological Training vs. Pharmacotherapy
            </h4>
            <p className="text-[#A0AAA0] leading-relaxed">
              We explicitly advise against self-administered hormonal suppression, illegal substances, or unprescribed pharmaceuticals. 
              Medication for compulsive sexual behavior or affective dysregulation is a formal clinical decision reserved strictly for qualified psychiatric professionals. 
              The methods presented below focus on cognitive, behavioural, and environmental self-mastery.
            </p>
          </div>
        </div>

        {/* Interactive Method Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: 6 Method Selection Buttons */}
          <div className="lg:col-span-4 space-y-3">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#687368] block mb-1">
              Select Scientific Method
            </span>
            {interventions.map((item, idx) => {
              const Icon = iconMap[item.icon] || Brain
              const isSelected = selectedId === item.id

              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedId(item.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    isSelected
                      ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                      : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className="p-2.5 rounded-lg bg-[#050705] border border-white/5"
                      style={{ color: item.color }}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                        {item.name.split('&')[0]}
                      </h4>
                      <span className="font-mono text-[10px] text-[#A0AAA0]">
                        Method 0{idx + 1} &middot; {item.shortLabel}
                      </span>
                    </div>
                  </div>
                  <ChevronRight
                    size={16}
                    className={`transition-transform ${
                      isSelected ? 'text-[#B9FF43] translate-x-1' : 'text-[#687368]'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Detailed Exhibit Card */}
          <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                  Evidence-Informed Intervention
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                  {currentIntervention.name}
                </h3>
              </div>
              <div className="bg-[#050705] px-3.5 py-1.5 rounded-full border border-white/10 self-start sm:self-auto">
                <span className="font-mono text-xs text-[#78D957]">
                  {currentIntervention.evidenceLevel.split('(')[0]}
                </span>
              </div>
            </div>

            {/* What it Targets & How it Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl bg-[#050705] p-5 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  What It Targets
                </span>
                <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed">
                  {currentIntervention.whatItTargets}
                </p>
              </div>

              <div className="rounded-xl bg-[#050705] p-5 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block">
                  How It Intervenes
                </span>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {currentIntervention.howItWorks}
                </p>
              </div>
            </div>

            {/* Neurobiological Mechanism */}
            <div className="space-y-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                Neurocognitive Mechanism of Action
              </span>
              <p className="font-sans text-base text-[#F2F5EF] leading-relaxed bg-[#050705]/60 p-5 rounded-xl border border-white/5">
                {currentIntervention.mechanism}
              </p>
            </div>

            {/* Practical Exercise Protocol */}
            <div className="rounded-xl border border-[#B9FF43]/40 bg-[#172019] p-6 space-y-3">
              <div className="flex items-center gap-2 text-[#B9FF43]">
                <Sparkles size={18} />
                <h4 className="font-sans text-base font-semibold text-[#F2F5EF]">
                  Actionable Protocol Exercise
                </h4>
              </div>
              <p className="font-sans text-sm sm:text-base text-[#F2F5EF] leading-relaxed">
                {currentIntervention.practicalExercise}
              </p>
            </div>

            {/* Limitations Notice */}
            <div className="rounded-xl bg-[#050705] p-5 border border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C07B]">
                <Info size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Known Scientific Limitations
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                {currentIntervention.limitations}
              </p>
            </div>

          </div>

        </div>

        <QuoteBlock
          quote="The strongest person is not the one who can conquer an entire city, but the one who can govern their own mind."
          attribution="Classical Philosophy & Modern Cognitive Science"
        />

      </div>
    </section>
  )
}
