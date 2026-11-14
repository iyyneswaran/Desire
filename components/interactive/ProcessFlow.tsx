'use client'

import { useState } from 'react'
import { ArrowRight, PauseCircle, Zap, Sparkles } from 'lucide-react'

interface FlowStage {
  id: string
  name: string
  category: string
  headline: string
  physiologicalState: string
  cognitiveAction: string
  practicalTechnique: string
  isPause: boolean
}

const flowStages: FlowStage[] = [
  {
    id: 'trigger',
    name: 'Trigger',
    category: 'Conditioned Cue',
    headline: 'An environmental or internal cue activates memory associations',
    physiologicalState: 'Visual or cognitive stimulus captured by sensory cortices; rapid locus coeruleus noradrenaline alerting.',
    cognitiveAction: 'The brain flags the situation as a familiar opportunity for stimulation or stress relief.',
    practicalTechnique: 'Stimulus Control: Identify your top 3 recurring triggers (e.g., late-night solitude, social media feed, emotional fatigue).',
    isPause: false,
  },
  {
    id: 'urge',
    name: 'Urge',
    category: 'Limbic Vector',
    headline: 'Phasic dopamine floods the nucleus accumbens, creating wanting',
    physiologicalState: 'Heart rate increases, mild restlessness, dopamine-driven attentional tunnel vision focusing exclusively on gratification.',
    cognitiveAction: 'Subjective feeling of physical necessity: "I must resolve this tension right now."',
    practicalTechnique: 'Labeling the Sensation: Explicitly verbalize: "My brain is experiencing a dopamine wave; this is biology, not a command."',
    isPause: false,
  },
  {
    id: 'pause',
    name: 'The Pause',
    category: 'The Crucial Gap',
    headline: 'The intentional metacognitive interruption where self-mastery lives',
    physiologicalState: 'Slow deep exhalation activates vagal nerve tone, dampening sympathetic nervous system tachycardia and lowering autonomic urgency.',
    cognitiveAction: 'Metacognitive disengagement: You step out of the automated stream to become the conscious observer of your internal state.',
    practicalTechnique: 'The 15-Minute Protocol: Stand up, step away from screens, drink cold water, and set a timer. Urge intensity naturally drops by over 60% within 10 minutes.',
    isPause: true,
  },
  {
    id: 'evaluation',
    name: 'Evaluation',
    category: 'Prefrontal Deliberation',
    headline: 'Executive networks weigh immediate gratification against long-term identity',
    physiologicalState: 'Frontoparietal central executive network actively engages, inhibiting subcortical motor impulsivity.',
    cognitiveAction: 'Realistic consequence forecasting: "How will I feel about this choice at 8:00 AM tomorrow? Does this serve my highest vision?"',
    practicalTechnique: 'The 3-Year Test: Ask if this transient action respects your future self, your trusted relationships, and your academic/professional mission.',
    isPause: false,
  },
  {
    id: 'action',
    name: 'Governed Action',
    category: 'Values Alignment',
    headline: 'A deliberate, sovereign choice made with full awareness and dignity',
    physiologicalState: 'Resolution of internal conflict; baseline neurochemical equilibrium restored through intentional conduct.',
    cognitiveAction: 'You execute a chosen behavior — either constructive engagement with healthy boundaries or clean redirection toward purposeful work.',
    practicalTechnique: 'Behavioral Replacement: Immediately channel redirected biological energy into physical exercise, focused study, or authentic social connection.',
    isPause: false,
  },
]

export default function ProcessFlow() {
  const [activeStageId, setActiveStageId] = useState<string>('pause')
  const [loopMode, setLoopMode] = useState<'governed' | 'automatic'>('governed')

  const currentStage = flowStages.find((s) => s.id === activeStageId) || flowStages[2]

  return (
    <div className="space-y-8">
      
      {/* Loop Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-4">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
            Flow Architecture
          </span>
          <h3 className="font-sans text-xl sm:text-2xl font-semibold text-[#F2F5EF]">
            Comparing the Response Loops
          </h3>
        </div>

        <div className="flex rounded-lg bg-[#101810] p-1 border border-white/10">
          <button
            onClick={() => setLoopMode('automatic')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded transition-colors ${
              loopMode === 'automatic'
                ? 'bg-[#FF5C5C]/20 text-[#FF5C5C] font-semibold'
                : 'text-[#A0AAA0] hover:text-white'
            }`}
          >
            Automatic Reaction (No Gap)
          </button>
          <button
            onClick={() => setLoopMode('governed')}
            className={`font-mono text-xs px-3.5 py-1.5 rounded transition-colors ${
              loopMode === 'governed'
                ? 'bg-[#B9FF43]/20 text-[#B9FF43] font-semibold'
                : 'text-[#A0AAA0] hover:text-white'
            }`}
          >
            The Governed Pathway (With Pause)
          </button>
        </div>
      </div>

      {/* Visual Sequence Chain */}
      {loopMode === 'automatic' ? (
        <div className="rounded-xl border border-[#FF5C5C]/30 bg-[#160d0d] p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-[#FF5C5C]">
            <Zap size={18} />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold">
              The Impulsive Shortcut &middot; High Regret Loop
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 py-4">
            <div className="px-6 py-4 rounded-lg bg-[#201010] border border-[#FF5C5C]/40 text-center">
              <span className="font-mono text-xs text-[#FF5C5C] block">01. STIMULUS</span>
              <span className="font-sans text-sm font-semibold text-[#F2F5EF]">Sensory Cue</span>
            </div>
            <ArrowRight size={20} className="text-[#FF5C5C]" />
            <div className="px-6 py-4 rounded-lg bg-[#201010] border border-[#FF5C5C]/40 text-center">
              <span className="font-mono text-xs text-[#FF5C5C] block">02. URGE</span>
              <span className="font-sans text-sm font-semibold text-[#F2F5EF]">Dopamine Surge</span>
            </div>
            <ArrowRight size={20} className="text-[#FF5C5C]" />
            <div className="px-6 py-4 rounded-lg bg-[#2d1212] border-2 border-[#FF5C5C] text-center shadow-[0_0_20px_-5px_rgba(255,92,92,0.4)]">
              <span className="font-mono text-xs text-[#FF5C5C] block font-bold">AUTOMATIC SURRENDER</span>
              <span className="font-sans text-sm font-semibold text-white">Instant Reaction</span>
            </div>
          </div>

          <p className="font-sans text-sm text-[#A0AAA0] text-center max-w-2xl mx-auto leading-relaxed">
            Without the pause, the urge behaves as a biological dictator. Subcortical limbic urgency short-circuits prefrontal evaluation, producing immediate physical surrender followed predictably by guilt, fatigue, and habit reinforcement.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {flowStages.map((stage, idx) => {
              const isSelected = activeStageId === stage.id
              const isPause = stage.isPause

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStageId(stage.id)}
                  className={`relative p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                    isSelected
                      ? isPause
                        ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_30px_-5px_rgba(185,255,67,0.35)]'
                        : 'border-[#78D957] bg-[#172019]'
                      : isPause
                      ? 'border-[#B9FF43]/40 bg-[#101810] hover:border-[#B9FF43]'
                      : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`font-mono text-xs font-bold ${
                        isPause ? 'text-[#B9FF43]' : 'text-[#687368]'
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    {isPause && (
                      <span className="inline-flex items-center gap-1 font-mono text-[9px] uppercase px-1.5 py-0.5 rounded bg-[#B9FF43]/20 text-[#B9FF43]">
                        The Gap
                      </span>
                    )}
                  </div>
                  <h4
                    className={`font-sans text-base font-semibold ${
                      isSelected ? 'text-[#F2F5EF]' : 'text-[#A0AAA0]'
                    }`}
                  >
                    {stage.name}
                  </h4>
                  <span className="font-mono text-[10px] text-[#687368] mt-1">
                    {stage.category}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Active Flow Stage Detail Card */}
          <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                  {currentStage.category}
                </span>
                <h4 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                  {currentStage.name}: {currentStage.headline}
                </h4>
              </div>
              {currentStage.isPause && (
                <div className="bg-[#B9FF43]/15 border border-[#B9FF43]/30 px-4 py-2 rounded-lg text-[#B9FF43] font-mono text-xs self-start sm:self-auto flex items-center gap-2">
                  <PauseCircle size={16} />
                  <span>The Critical Interruption Zone</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Physiological Dynamics */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  Autonomic &amp; Neural State
                </span>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStage.physiologicalState}
                </p>
              </div>

              {/* Cognitive Phenomenon */}
              <div className="rounded-xl bg-[#050705] p-6 border border-white/10 space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#F2F5EF] block">
                  Internal Cognitive Event
                </span>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStage.cognitiveAction}
                </p>
              </div>

              {/* Practical Exercise Protocol */}
              <div className="rounded-xl bg-[#172019] p-6 border border-[#B9FF43]/30 space-y-2">
                <div className="flex items-center gap-2 text-[#B9FF43]">
                  <Sparkles size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Actionable Self-Mastery Protocol
                  </span>
                </div>
                <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed">
                  {currentStage.practicalTechnique}
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

    </div>
  )
}
