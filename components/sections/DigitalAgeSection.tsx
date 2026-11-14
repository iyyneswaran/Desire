'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import {
  Smartphone,
  EyeOff,
  Zap,
  Shield,
  Layers,
  Sparkles,
  Info,
} from 'lucide-react'

interface CueHabitStage {
  id: string
  name: string
  digitalMechanism: string
  psychologicalImpact: string
  breakPointIntervention: string
}

const cueHabitStages: CueHabitStage[] = [
  {
    id: 'exposure',
    name: 'Exposure',
    digitalMechanism: 'High-frequency algorithmic delivery of hyper-stimulating visual and social cues curated based on past view-duration metrics.',
    psychologicalImpact: 'Sensory habituation: ordinary biological cues seem muted in contrast to frictionless, endless digital novelties.',
    breakPointIntervention: 'Content curation & screen-time boundaries: Install system-level DNS content filters and unfollow provocative social accounts.',
  },
  {
    id: 'association',
    name: 'Association',
    digitalMechanism: 'Hebbian plasticity: neurons that fire together, wire together. Specific devices, rooms, or loneliness become conditioned triggers.',
    psychologicalImpact: 'Contextual binding: simply holding a smartphone in bed after 11 PM triggers an involuntary anticipatory itch.',
    breakPointIntervention: 'Environmental separation: establish "sacred physical zones" (e.g., bedrooms and desks are strictly screen-free during vulnerable hours).',
  },
  {
    id: 'anticipation',
    name: 'Anticipation',
    digitalMechanism: 'Phasic dopamine surge in the Nucleus Accumbens upon encountering the conditioned cue, generating intense incentive salience.',
    psychologicalImpact: 'Acute craving and attentional narrowing: thoughts focus obsessively on consumption to alleviate internal tension.',
    breakPointIntervention: 'The 15-Minute Buffer: Observe the anticipation as a physiological wave without reacting. Let prefrontal executive control reboot.',
  },
  {
    id: 'behaviour',
    name: 'Behaviour',
    digitalMechanism: 'Rapid motor execution requiring zero physical friction (one swipe, incognito mode, frictionless digital access).',
    psychologicalImpact: 'Short-lived hedonic spike followed rapidly by emotional numbing and time displacement.',
    breakPointIntervention: 'Technical Friction: enforce multi-step authentication, passcodes locked by an accountability partner, and physical lockboxes.',
  },
  {
    id: 'reinforcement',
    name: 'Reinforcement',
    digitalMechanism: 'Negative reinforcement (relief from boredom, anxiety, or stress) and positive dopaminergic feedback consolidate corticostriatal circuits.',
    psychologicalImpact: 'Strengthens automaticity: future urges trigger faster and demand higher conscious willpower to inhibit.',
    breakPointIntervention: 'Active Substitution: replace the behavior with high-reward constructive habits (weightlifting, cold shower, playing an instrument).',
  },
]

const digitalTopics = [
  {
    title: 'Explicit Content & Saturation',
    icon: EyeOff,
    color: '#B9FF43',
    points: [
      'Unprecedented 24/7 accessibility with zero natural biological friction',
      'Continuous novelty triggers dopamine prediction errors that mimic evolutionary mating opportunities',
      'Distinguish occasional usage from compulsive consumption that causes distress or functional impairment',
    ],
  },
  {
    title: 'Social Media & Attention Capture',
    icon: Smartphone,
    color: '#78D957',
    points: [
      'Algorithms optimized strictly for screen time, capitalizing on human appetitive curiosity',
      'Distorted perception of reality through filtered, curated physical ideals',
      'Creates insidious comparison traps, body dissatisfaction, and chronic low-grade anxiety',
    ],
  },
  {
    title: 'Instant Gratification Loops',
    icon: Zap,
    color: '#E5C07B',
    points: [
      'Removes the evolutionary connection between effort, time, and emotional reward',
      'Weakens baseline patience and tolerance for complex, slow-reward tasks like studying or writing',
      'Creates a synthetic expectation that satisfaction should be instant and cost-free',
    ],
  },
  {
    title: 'Instrumental Objectification',
    icon: Layers,
    color: '#B9FF43',
    points: [
      'Reduces complex, living human beings to digitized pixel packages for consumer gratification',
      'Blunts mirror-neuron and empathic circuits needed for healthy reciprocal intimacy',
      'Makes real-world communication with real partners feel intimidating or underwhelming',
    ],
  },
  {
    title: 'Conditioned Digital Habits',
    icon: Sparkles,
    color: '#78D957',
    points: [
      'Smartphone screen illumination at night disrupts melatonin and circadian rest',
      'Compulsive checking behaviors become subcortical motor reflexes devoid of conscious joy',
      'Requires deliberate behavioral extinction through structured environmental redesign',
    ],
  },
  {
    title: 'Digital Boundary Architecture',
    icon: Shield,
    color: '#B9FF43',
    points: [
      'Charge devices outside the bedroom without exception; return to physical alarm clocks',
      'Employ content blockers and app timers with password protection delegated to a friend',
      'Transform technology into a conscious tool for creation rather than an algorithmic trap',
    ],
  },
]

export default function DigitalAgeSection() {
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0)
  const currentStage = cueHabitStages[activeStageIdx]

  return (
    <section id="digital-age" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="09"
        category="Digital ecology"
        title="Desire in the digital age."
        subtitle="Modern algorithms did not invent lust, but they perfected the art of capturing, commodifying, and amplifying human appetitive attention for corporate engagement."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Balanced Scientific Framing Notice */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
            <Info size={20} />
          </div>
          <div className="space-y-1 text-sm sm:text-base font-sans">
            <h4 className="font-semibold text-[#F2F5EF]">
              Neuroplasticity is Malleable &middot; No Unsupported &ldquo;Brain Damage&rdquo; Claims
            </h4>
            <p className="text-[#A0AAA0] leading-relaxed">
              We reject alarmist pop-psychology claiming digital content causes permanent brain damage or irreversible ruin. 
              The human brain is remarkably neuroplastic. Repeated exposure simply strengthens associative conditioning in corticostriatal pathways. 
              When you introduce intentional boundaries and healthy alternatives, dopamine sensitivity and prefrontal governance naturally recover.
            </p>
          </div>
        </div>

        {/* 6 Core Digital Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {digitalTopics.map((topic, idx) => {
            const Icon = topic.icon
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-8 space-y-4 hover:border-white/20 transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-2.5 rounded-lg bg-[#050705] border border-white/10"
                      style={{ color: topic.color }}
                    >
                      <Icon size={20} />
                    </div>
                    <h3 className="font-sans text-lg font-semibold text-[#F2F5EF]">
                      {topic.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {topic.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2.5 text-xs text-[#A0AAA0]">
                        <span className="font-mono text-xs mt-0.5" style={{ color: topic.color }}>&bull;</span>
                        <span className="leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Interactive Cue-to-Habit Visual */}
        <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
                Interactive Flow 02
              </span>
              <h3 className="font-sans text-2xl font-bold text-[#F2F5EF] mt-1">
                The Algorithmic Cue-to-Habit Cascade
              </h3>
            </div>
            <span className="font-mono text-xs text-[#A0AAA0]">
              Click any stage to reveal its interruption point
            </span>
          </div>

          {/* Stepper Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {cueHabitStages.map((stg, i) => {
              const isSelected = activeStageIdx === i
              return (
                <button
                  key={stg.id}
                  onClick={() => setActiveStageIdx(i)}
                  className={`p-4 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                      : 'border-white/10 bg-[#050705] hover:border-white/20'
                  }`}
                >
                  <span className="font-mono text-xs text-[#B9FF43] font-bold block mb-1">
                    0{i + 1}.
                  </span>
                  <h4 className={`font-sans text-sm font-semibold ${
                    isSelected ? 'text-[#F2F5EF]' : 'text-[#A0AAA0]'
                  }`}>
                    {stg.name}
                  </h4>
                </button>
              )
            })}
          </div>

          {/* Active Detail Breakdown */}
          <div className="pt-4 space-y-6">
            <h4 className="font-sans text-xl font-bold text-[#F2F5EF]">
              Stage 0{activeStageIdx + 1}: {currentStage.name}
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-xl bg-[#050705] p-5 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  Digital Delivery Mechanism
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStage.digitalMechanism}
                </p>
              </div>

              <div className="rounded-xl bg-[#050705] p-5 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F2F5EF] block">
                  Psychological &amp; Cognitive State
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStage.psychologicalImpact}
                </p>
              </div>

              <div className="rounded-xl bg-[#172019] p-5 border border-[#B9FF43]/30 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block font-semibold">
                  Strategic Interruption Point
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#F2F5EF] leading-relaxed">
                  {currentStage.breakPointIntervention}
                </p>
              </div>
            </div>
          </div>
        </div>

        <QuoteBlock
          quote="If you don't decide how to use your attention, an algorithm will gladly make that decision for you."
          attribution="Digital Ecology Principle"
        />

      </div>
    </section>
  )
}
