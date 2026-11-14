'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { Sparkles, Heart, AlertCircle, CheckCircle2, ShieldAlert } from 'lucide-react'

interface Concept {
  id: string
  number: string
  title: string
  shortDef: string
  biologicalBasis: string
  psychologicalState: string
  everydayScenario: string
  ethicalBoundary: string
  isClinical: boolean
  accentColor: string
}

const concepts: Concept[] = [
  {
    id: 'attraction',
    number: '01',
    title: 'Attraction',
    shortDef: 'Involuntary sensory awareness and initial gravitational pull toward another person.',
    biologicalBasis: 'Sensory cortices detect visual, vocal, or olfactory cues, signaling potential evolutionary mate quality and triggering rapid basal amygdalar appraisal.',
    psychologicalState: 'Spontaneous curiosity, mild attentional capture, and aesthetic appreciation. Does not require action or intent.',
    everydayScenario: 'Noticing an attractive person in a university library, experiencing a brief momentary surge of interest, and smoothly returning attention to your study material.',
    ethicalBoundary: 'Completely natural and involuntary. It carries zero ethical weight and causes no harm when acknowledged simply as human biology.',
    isClinical: false,
    accentColor: '#B9FF43',
  },
  {
    id: 'sexual-desire',
    number: '02',
    title: 'Sexual Desire (Libido)',
    shortDef: 'A natural, healthy biological drive motivating physical closeness, reproductive activity, and relational intimacy.',
    biologicalBasis: 'Coordinated by circulating testosterone, estradiol, hypothalamic nuclei (mPOA), and baseline dopaminergic incentive networks.',
    psychologicalState: 'Subjective craving for erotic intimacy, shaped by emotional safety, relationship context, attachment style, and stress levels.',
    everydayScenario: 'Feeling physically drawn toward an intimate partner and anticipating mutual physical intimacy with communication and reciprocal warmth.',
    ethicalBoundary: 'A healthy and vital dimension of human life. Its presence alone is never inherently problematic or disordered.',
    isClinical: false,
    accentColor: '#78D957',
  },
  {
    id: 'lust',
    number: '03',
    title: 'Lust (Consuming Preoccupation)',
    shortDef: 'Desire that becomes intensely consuming, objectifying, or demanding immediate gratification at the expense of personal values.',
    biologicalBasis: 'Heightened mesolimbic dopamine surges combined with temporary down-regulation of prefrontal inhibitory oversight and empathic perspective-taking.',
    psychologicalState: 'Instrumental fixation: viewing another person primarily as an object or tool for personal gratification, disregarding their inner world, autonomy, or consequences.',
    everydayScenario: 'Obsessively pursuing a romantic or physical target despite clear relational damage, ignoring their verbal hesitation, or neglecting urgent academic responsibilities to chase stimulation.',
    ethicalBoundary: 'Lust is not a formal medical diagnosis. It is an editorial and psychological term describing when desire compromises empathy, autonomy, or self-governance.',
    isClinical: false,
    accentColor: '#E5C07B',
  },
  {
    id: 'compulsive-behaviour',
    number: '04',
    title: 'Compulsive Sexual Behaviour Disorder',
    shortDef: 'A clinical pattern characterized by persistent failure to control intense, repetitive sexual impulses resulting in significant functional impairment.',
    biologicalBasis: 'Neuroadaptation in striatal habit loops, severe blunting of executive prefrontal control, and dysregulated reward anticipation pathways.',
    psychologicalState: 'Inability to stop despite severe adverse consequences (ruined career, broken marriages, legal crisis, financial strain); severe distress and loss of self-control.',
    everydayScenario: 'Repeatedly engaging in high-risk sexual encounters or consuming cyber content for hours during critical exams or work shifts, feeling intense shame and despair yet unable to resist the cycle.',
    ethicalBoundary: 'Classified under WHO ICD-11 (Code 6C72). Crucially, moral or religious disapproval alone does NOT qualify as a disorder; marked functional impairment is mandatory.',
    isClinical: true,
    accentColor: '#FF5C5C',
  },
]

export default function UnderstandingDesire() {
  const [selectedConcept, setSelectedConcept] = useState<number>(0)
  const [viewMode, setViewMode] = useState<'cards' | 'spectrum'>('cards')

  return (
    <section id="understanding" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="03"
        category="Conceptual taxonomy"
        title="Desire is human. Behaviour is a choice."
        subtitle="Separating spontaneous biological drives from objectifying fixation and clinically compulsive patterns."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Important Scientific Qualification Notice */}
        <div className="rounded-xl border border-[#B9FF43]/20 bg-[#101810]/90 p-6 sm:p-8 backdrop-blur-md">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
              <ShieldAlert size={20} />
            </div>
            <div className="space-y-1 text-sm sm:text-base font-sans">
              <h4 className="font-semibold text-[#F2F5EF]">
                Medical Nuance: Lust is Not a Psychiatric Disorder
              </h4>
              <p className="text-[#A0AAA0] leading-relaxed">
                Modern psychology and psychiatry do not treat ordinary sexual desire, spontaneous sexual thoughts, or a high libido as an illness. 
                Under the World Health Organization (ICD-11), diagnosis requires prolonged, uncontrollable compulsivity causing severe damage to your life. 
                Do not pathologize healthy sexuality — but do not ignore when choices cause real-world harm.
              </p>
            </div>
          </div>
        </div>

        {/* View Mode Switcher */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              The Four Dimensions
            </span>
            <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F2F5EF]">
              Explore the Conceptual Spectrum
            </h3>
          </div>
          <div className="flex rounded-lg bg-[#101810] p-1 border border-white/10">
            <button
              onClick={() => setViewMode('cards')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded transition-colors ${
                viewMode === 'cards'
                  ? 'bg-[#172019] text-[#B9FF43] font-medium'
                  : 'text-[#A0AAA0] hover:text-white'
              }`}
            >
              Side-by-Side
            </button>
            <button
              onClick={() => setViewMode('spectrum')}
              className={`font-mono text-xs px-3.5 py-1.5 rounded transition-colors ${
                viewMode === 'spectrum'
                  ? 'bg-[#172019] text-[#B9FF43] font-medium'
                  : 'text-[#A0AAA0] hover:text-white'
              }`}
            >
              Deep Spectrum
            </button>
          </div>
        </div>

        {/* Side-by-Side Grid Layout */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concepts.map((concept, idx) => (
              <div
                key={concept.id}
                onClick={() => setSelectedConcept(idx)}
                className={`group cursor-pointer rounded-xl border p-6 flex flex-col justify-between transition-all ${
                  selectedConcept === idx
                    ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_25px_-5px_rgba(185,255,67,0.2)]'
                    : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: concept.accentColor }}
                    >
                      {concept.number}
                    </span>
                    <span className="font-mono text-[10px] text-[#687368] uppercase">
                      {concept.isClinical ? 'ICD-11 Diagnostic' : 'Human Experience'}
                    </span>
                  </div>

                  <h4 className="font-sans text-xl font-semibold text-[#F2F5EF]">
                    {concept.title}
                  </h4>

                  <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                    {concept.shortDef}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 space-y-2 mt-6">
                  <span className="font-mono text-[10px] uppercase text-[#687368] block">
                    Everyday manifestation:
                  </span>
                  <p className="font-sans text-xs text-[#F2F5EF]/90 line-clamp-3">
                    {concept.everydayScenario}
                  </p>
                  <span className="inline-block font-mono text-[11px] text-[#B9FF43] group-hover:underline pt-2">
                    Inspect Full Matrix &rarr;
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Detailed Spectrum Matrix */}
        <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
          {/* Top Spectrum Selector Bar */}
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs font-mono text-[#A0AAA0]">
              <span>Involuntary Biology</span>
              <span className="text-[#B9FF43]">The Psychological Continuum</span>
              <span>Clinical Impairment</span>
            </div>

            {/* Stepped progress track */}
            <div className="grid grid-cols-4 gap-2">
              {concepts.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcept(i)}
                  className={`h-2 rounded-full transition-all ${
                    selectedConcept === i
                      ? 'bg-[#B9FF43] shadow-[0_0_12px_#B9FF43]'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                />
              ))}
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              {concepts.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedConcept(i)}
                  className={`font-sans text-xs font-medium py-1 transition-colors ${
                    selectedConcept === i ? 'text-[#B9FF43]' : 'text-[#687368] hover:text-[#A0AAA0]'
                  }`}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Concept Deep Dive Matrix */}
          <div className="pt-6 border-t border-white/10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest" style={{ color: concepts[selectedConcept].accentColor }}>
                  Dimension {concepts[selectedConcept].number} &middot; Detailed Matrix
                </span>
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF] mt-1">
                  {concepts[selectedConcept].title}
                </h3>
              </div>
              <div className="bg-[#050705] px-4 py-2 rounded-lg border border-white/10 self-start sm:self-auto">
                <span className="font-mono text-xs text-[#A0AAA0]">
                  Classification: <strong className="text-[#F2F5EF]">{concepts[selectedConcept].isClinical ? 'Psychiatric Diagnosis' : 'Normative Phenomenon'}</strong>
                </span>
              </div>
            </div>

            <p className="font-sans text-base sm:text-lg text-[#F2F5EF] leading-relaxed">
              {concepts[selectedConcept].shortDef}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Biological Component */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#78D957]">
                  <Sparkles size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Neurobiological Substrate
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {concepts[selectedConcept].biologicalBasis}
                </p>
              </div>

              {/* Psychological Component */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#B9FF43]">
                  <Heart size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Psychological State &amp; Focus
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {concepts[selectedConcept].psychologicalState}
                </p>
              </div>

              {/* Student Everyday Scenario */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C07B]">
                  <AlertCircle size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Real-World Context
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {concepts[selectedConcept].everydayScenario}
                </p>
              </div>

              {/* Ethical & Clinical Boundary */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <div className="flex items-center gap-2 text-[#F2F5EF]">
                  <CheckCircle2 size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Ethical &amp; Clinical Distinction
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {concepts[selectedConcept].ethicalBoundary}
                </p>
              </div>
            </div>
          </div>
        </div>

        <QuoteBlock
          quote="Having a desire doesn't make you weak. Allowing every desire to control your decisions can make you vulnerable."
          attribution="Self-Mastery Core Lesson"
        />

      </div>
    </section>
  )
}
