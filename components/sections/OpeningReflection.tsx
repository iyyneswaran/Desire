'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
// No unused icons needed

interface SequenceStep {
  id: string
  name: string
  category: string
  nature: 'Involuntary Biological Drive' | 'Conscious Regulatory Moment'
  headline: string
  explanation: string
  distinction: string
}

const sequenceSteps: SequenceStep[] = [
  {
    id: 'stimulus',
    name: 'Stimulus',
    category: 'Perception',
    nature: 'Involuntary Biological Drive',
    headline: 'Sensory cortices detect an external or mental cue',
    explanation:
      'A visual encounter, a digital notification, a scent, or an unprompted memory. The brain registers the stimulus in fractions of a second through evolutionary pattern-matching networks. This initial detection is completely involuntary.',
    distinction:
      'You cannot prevent a stimulus from entering your perceptual field. Having a sensory or mental impression is simply biology at work, not a moral failure.',
  },
  {
    id: 'desire',
    name: 'Desire',
    category: 'Appetite',
    nature: 'Involuntary Biological Drive',
    headline: 'Subcortical circuits generate natural biological attraction',
    explanation:
      'Testosterone, estradiol, and basal neural reward circuits create an innate biological pull. It signals that something potentially significant for reproduction, pleasure, or intimacy has been noticed.',
    distinction:
      'Experiencing sexual attraction or natural desire is healthy, normal, and deeply human. It is not something to be feared, shamed, or denied.',
  },
  {
    id: 'urge',
    name: 'Urge',
    category: 'Tension',
    nature: 'Involuntary Biological Drive',
    headline: 'Dopamine surges, creating a feeling of wanting and physical restlessness',
    explanation:
      'The mesolimbic dopamine pathway floods the nucleus accumbens with incentive salience. The brain flags the cue as urgent, generating physical restlessness, autonomic excitement, and a compelling pull to seek immediate consummation.',
    distinction:
      'An urge feels like an instruction or an order, but biologically it is merely a biochemical recommendation. An urge has no muscles of its own to move your body.',
  },
  {
    id: 'awareness',
    name: 'Awareness',
    category: 'The Pivot',
    nature: 'Conscious Regulatory Moment',
    headline: 'The metacognitive pause — observing the urge without immediate obedience',
    explanation:
      'Here the critical transition occurs. You step into the position of the observer: "I notice my heart rate is elevated and I feel a powerful pull toward this cue." Metacognitive awareness decouples stimulus from reflexive motor action.',
    distinction:
      'This is the urge-to-action gap. Between the raw limbic surge and your physical behavior, there is a space of conscious presence. In that space lies your freedom.',
  },
  {
    id: 'choice',
    name: 'Choice',
    category: 'Governance',
    nature: 'Conscious Regulatory Moment',
    headline: 'The prefrontal cortex evaluates long-term values against transient impulses',
    explanation:
      'You weigh the immediate fleeting gratification against your core commitments, relationships, academic focus, and self-respect. You decide intentionally whether to indulge, delay, redirect, or decline.',
    distinction:
      'Self-mastery does not mean you never felt the pull; it means your values, not your dopamine spikes, made the final executive decision.',
  },
  {
    id: 'outcome',
    name: 'Outcome',
    category: 'Consequence',
    nature: 'Conscious Regulatory Moment',
    headline: 'The reinforced synaptic pathway and psychological reality you inhabit',
    explanation:
      'Every time you govern an urge, you strengthen prefrontal inhibitory circuitry and reinforce self-respect. Every time you surrender reflexively, you deepen the automatic habit loop and harvest its real-world consequences.',
    distinction:
      'Your life is the cumulative total of which outcomes you choose to cultivate day after day.',
  },
]

const questions = [
  {
    question: 'How long does it take to build genuine trust and reputation?',
    options: ['5 to 10 years of consistent character', 'Decades of demonstrated reliability', 'A lifetime of integrity'],
    reflection:
      'Reputation and deep trust cannot be bought or rushed. They require hundreds of quiet, unobserved choices aligned with your values over years.',
  },
  {
    question: 'How long does it take to compromise that reputation?',
    options: ['30 seconds of impulsive surrender', 'A single unexamined decision', 'One moment where lust overrides judgment'],
    reflection:
      'You can spend thirty years building your life, your career, and your family trust, and make decisions in thirty seconds that put all of it at catastrophic risk.',
  },
  {
    question: 'Does feeling a strong sexual attraction mean you must act on it?',
    options: ['No — feelings are biological signals, not behavioral commands', 'Only if you lack self-regulation', 'Never — awareness creates choice'],
    reflection:
      'A feeling is not a decision. Experiencing attraction is involuntary biology; what you choose to do with that feeling is entirely your responsibility.',
  },
]

export default function OpeningReflection() {
  const [activeStep, setActiveStep] = useState<number>(3) // Default to "Awareness" (the pivot)
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({})

  return (
    <section id="opening-reflection" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="02"
        category="Opening reflection"
        title="A feeling is not a decision."
        subtitle="Experiencing an impulse is involuntary biology. Choosing what to do next is human sovereignty."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Core Premise Manifesto Panel */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/80 backdrop-blur-md p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
                The Critical Distinction
              </span>
              <h3 className="font-sans text-2xl sm:text-3xl font-semibold text-[#F2F5EF]">
                Attraction is not a moral failing.
              </h3>
              <p className="font-sans text-base text-[#A0AAA0] leading-relaxed">
                Having a sexual thought, feeling attraction, or experiencing a physiological surge is not harmful or abnormal. It is evolutionary wiring refined over millions of years.
                The breakdown occurs when people confuse <strong className="text-[#F2F5EF]">experiencing an urge</strong> with <strong className="text-[#F2F5EF]">an obligation to act on it</strong>.
              </p>
            </div>
            <div className="md:col-span-4 bg-[#172019] rounded-lg p-6 border border-white/10 text-center">
              <span className="font-mono text-xs text-[#78D957] uppercase tracking-wider block mb-2">
                Core Axiom
              </span>
              <p className="font-sans text-lg font-medium text-[#F2F5EF] leading-snug">
                &ldquo;Between stimulus and response there is a space. In that space is our power to choose.&rdquo;
              </p>
              <span className="font-mono text-[11px] text-[#687368] block mt-2">
                Viktor E. Frankl
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Visual Sequence: Stimulus → Desire → Urge → Awareness → Choice → Outcome */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
                Interactive Pathway
              </span>
              <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F2F5EF]">
                The Anatomy of a Decision Sequence
              </h3>
            </div>
            <p className="font-mono text-xs text-[#A0AAA0]">
              Click any stage below to inspect its cognitive mechanism
            </p>
          </div>

          {/* Sequence Stepper Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {sequenceSteps.map((step, idx) => {
              const isSelected = activeStep === idx
              const isPivot = step.id === 'awareness'
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative flex flex-col text-left p-4 rounded-lg border transition-all ${
                    isSelected
                      ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                      : isPivot
                      ? 'border-[#B9FF43]/40 bg-[#101810] hover:border-[#B9FF43]'
                      : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isSelected ? 'text-[#B9FF43]' : 'text-[#687368]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isPivot && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] animate-pulse" />
                    )}
                  </div>
                  <span
                    className={`font-sans text-sm font-semibold tracking-wide ${
                      isSelected ? 'text-[#F2F5EF]' : 'text-[#A0AAA0] group-hover:text-[#F2F5EF]'
                    }`}
                  >
                    {step.name}
                  </span>
                  <span className="font-mono text-[10px] text-[#687368] mt-1">
                    {step.category}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Selected Stage Detail Card */}
          {activeStep !== null && (
            <div className="rounded-xl border border-white/10 bg-[#101810] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <div>
                  <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                    Stage 0{activeStep + 1} &middot; {sequenceSteps[activeStep].category}
                  </span>
                  <h4 className="font-sans text-2xl font-semibold text-[#F2F5EF] mt-1">
                    {sequenceSteps[activeStep].name}: {sequenceSteps[activeStep].headline}
                  </h4>
                </div>
                <span className={`inline-flex items-center self-start sm:self-auto font-mono text-xs px-3 py-1 rounded-full border ${
                  sequenceSteps[activeStep].nature.includes('Involuntary')
                    ? 'border-[#78D957]/30 bg-[#78D957]/10 text-[#78D957]'
                    : 'border-[#B9FF43]/40 bg-[#B9FF43]/15 text-[#B9FF43]'
                }`}>
                  {sequenceSteps[activeStep].nature}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                <div className="md:col-span-7 space-y-3">
                  <span className="font-mono text-xs uppercase text-[#A0AAA0] block">
                    Neurobiological Mechanism
                  </span>
                  <p className="font-sans text-base text-[#F2F5EF] leading-relaxed">
                    {sequenceSteps[activeStep].explanation}
                  </p>
                </div>

                <div className="md:col-span-5 bg-[#050705] p-5 rounded-lg border border-white/10 space-y-2">
                  <span className="font-mono text-xs uppercase text-[#B9FF43] block">
                    Crucial Educational Distinction
                  </span>
                  <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                    {sequenceSteps[activeStep].distinction}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Interactive Reflection Inquiry Section */}
        <div className="pt-8 space-y-8">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              Self-Inquiry Exercise
            </span>
            <h3 className="font-sans text-2xl font-semibold text-[#F2F5EF]">
              The Mathematics of Consequences
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {questions.map((q, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <span className="font-mono text-xs text-[#B9FF43] font-semibold">
                    Question 0{idx + 1}
                  </span>
                  <h4 className="font-sans text-base font-medium text-[#F2F5EF]">
                    {q.question}
                  </h4>
                </div>

                <div className="space-y-2">
                  {q.options.map((opt) => {
                    const isPicked = selectedAnswers[idx] === opt
                    return (
                      <button
                        key={opt}
                        onClick={() =>
                          setSelectedAnswers((prev) => ({ ...prev, [idx]: opt }))
                        }
                        className={`w-full text-left font-sans text-xs p-3 rounded border transition-all ${
                          isPicked
                            ? 'border-[#B9FF43] bg-[#172019] text-[#B9FF43] font-medium'
                            : 'border-white/10 bg-[#050705] text-[#A0AAA0] hover:border-white/20'
                        }`}
                      >
                        {opt}
                      </button>
                    )
                  })}
                </div>

                {selectedAnswers[idx] && (
                  <div className="pt-3 border-t border-white/10 text-xs font-sans text-[#A0AAA0] leading-relaxed bg-[#172019]/60 p-3 rounded">
                    <strong className="text-[#F2F5EF] block mb-1">Perspective:</strong>
                    {q.reflection}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <QuoteBlock
          quote="You don't have to eliminate desire. You have to learn to govern it."
          attribution="Foundational Educational Principle"
        />

      </div>
    </section>
  )
}
