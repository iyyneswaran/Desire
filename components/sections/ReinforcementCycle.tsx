'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import QuoteBlock from '@/components/shared/QuoteBlock'
import { Sparkles } from 'lucide-react'

interface CycleNode {
  id: string
  name: string
  shortLabel: string
  color: string
  description: string
  synapticDynamic: string
  interventionStrategy: string
  interventionType: 'Environmental' | 'Cognitive' | 'Behavioral' | 'Metacognitive'
}

const cycleNodes: CycleNode[] = [
  {
    id: 'trigger',
    name: '1. Trigger (Conditioned Cue)',
    shortLabel: 'Trigger',
    color: '#B9FF43',
    description: 'A sensory stimulus or emotional state (stress, isolation, fatigue, late-night screen time) previously paired with sexual gratification.',
    synapticDynamic: 'Basolateral amygdala and sensory cortices rapidly recognize the pattern, transmitting excitatory glutamatergic projections to midbrain dopamine neurons.',
    interventionStrategy: 'Stimulus Control Architecture: Eliminate the conditioned cue physically. Relocate your phone charger, install internet filters, or study in communal environments.',
    interventionType: 'Environmental',
  },
  {
    id: 'urge',
    name: '2. Urge (Incentive Salience)',
    shortLabel: 'Urge',
    color: '#78D957',
    description: 'An acute dopaminergic spike in the nucleus accumbens creating an intense feeling of wanting, physical restlessness, and narrow focus on consumption.',
    synapticDynamic: 'Phasic dopamine surge temporarily depresses prefrontal executive evaluation, generating subjective urgency: "I must do this now."',
    interventionStrategy: 'The 15-Minute Pause & Urge Surfing: Acknowledge the physical sensation without fighting or indulging it. Deep diaphragmatic breathing activates the vagus nerve and dampens urgency.',
    interventionType: 'Metacognitive',
  },
  {
    id: 'behaviour',
    name: '3. Behaviour (Motor Execution)',
    shortLabel: 'Behaviour',
    color: '#E5C07B',
    description: 'Carrying out the physical actions required to consume the rewarding stimulus (opening apps, initiating contact, visiting explicit sites).',
    synapticDynamic: 'Motor cortex and basal ganglia fire in an automated sequence, bypassing deliberate prefrontal reflection as automaticity deepens.',
    interventionStrategy: 'Behavioral Replacement: Execute an unnegotiable alternative action (25 push-ups, cold face splash, walking outdoors, calling a friend) to divert motor output.',
    interventionType: 'Behavioral',
  },
  {
    id: 'reward',
    name: '4. Reward (Hedonic Relief)',
    shortLabel: 'Reward',
    color: '#78D957',
    description: 'Transient dopamine burst combined with endogenous opioid release, producing immediate tension relief, escapism, or physical pleasure.',
    synapticDynamic: 'Mu-opioid receptor activation in nucleus accumbens hotspots produces fleeting hedonic relief, accompanied by immediate post-consumption prolactin rise.',
    interventionStrategy: 'Objective Post-Mortem Reflection: Notice the brevity of the relief versus the lingering hours of mental fog, guilt, and lost study time. Deconstruct the illusion that it brought lasting peace.',
    interventionType: 'Cognitive',
  },
  {
    id: 'learning',
    name: '5. Learning (Synaptic Consolidation)',
    shortLabel: 'Learning',
    color: '#B9FF43',
    description: 'Long-term potentiation strengthens the neural connection between the original trigger and the behavior, sensitizing future craving.',
    synapticDynamic: 'BDNF and striatal neuroadaptations reinforce the habit groove. The brain registers: "When stressed, execute this behavior for rapid relief."',
    interventionStrategy: 'Neuroplastic Extinction: Each time you encounter the trigger and successfully decline the behavior, the synaptic association weakens through behavioral extinction.',
    interventionType: 'Behavioral',
  },
]

export default function ReinforcementCycle() {
  const [activeNodeIdx, setActiveNodeIdx] = useState<number>(1) // Default to "Urge"
  const currentNode = cycleNodes[activeNodeIdx]

  return (
    <section id="reinforcement-cycle" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="11"
        category="Neurobehavioral loops"
        title="The reinforcement cycle."
        subtitle="How habits become self-sustaining loops — and the specific intervention points where self-mastery breaks the chain."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-16">
        
        {/* Main Exhibit Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Circular SVG Diagram */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-[440px] aspect-square rounded-2xl border border-white/10 bg-[#0A100B] p-6 flex items-center justify-center">
              
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <linearGradient id="cycleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B9FF43" />
                    <stop offset="50%" stopColor="#78D957" />
                    <stop offset="100%" stopColor="#244B2D" />
                  </linearGradient>
                </defs>

                {/* Circular track with flow arrows */}
                <circle
                  cx="200"
                  cy="200"
                  r="135"
                  fill="none"
                  stroke="#172019"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />

                {/* 5 Pentagonally Arranged Nodes */}
                {/* Points: 
                    0 (top): (200, 65)
                    1 (top-right): (328, 158)
                    2 (bottom-right): (279, 309)
                    3 (bottom-left): (121, 309)
                    4 (top-left): (72, 158)
                */}
                {[
                  { cx: 200, cy: 65, idx: 0 },
                  { cx: 328, cy: 158, idx: 1 },
                  { cx: 279, cy: 309, idx: 2 },
                  { cx: 121, cy: 309, idx: 3 },
                  { cx: 72, cy: 158, idx: 4 },
                ].map((pos) => {
                  const node = cycleNodes[pos.idx]
                  const isSelected = activeNodeIdx === pos.idx

                  return (
                    <g
                      key={node.id}
                      onClick={() => setActiveNodeIdx(pos.idx)}
                      className="cursor-pointer transition-transform hover:scale-105"
                    >
                      {/* Outer pulse if selected */}
                      {isSelected && (
                        <circle
                          cx={pos.cx}
                          cy={pos.cy}
                          r="34"
                          fill="none"
                          stroke="#B9FF43"
                          strokeWidth="2"
                          opacity="0.6"
                          className="animate-ping"
                        />
                      )}

                      {/* Main Node Circle */}
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r="28"
                        fill={isSelected ? '#172019' : '#0D140E'}
                        stroke={isSelected ? '#B9FF43' : 'rgba(255,255,255,0.15)'}
                        strokeWidth={isSelected ? 2.5 : 1.5}
                      />

                      <text
                        x={pos.cx}
                        y={pos.cy - 4}
                        fill={isSelected ? '#B9FF43' : '#F2F5EF'}
                        fontSize="9"
                        fontFamily="monospace"
                        fontWeight="bold"
                        textAnchor="middle"
                      >
                        0{pos.idx + 1}
                      </text>
                      <text
                        x={pos.cx}
                        y={pos.cy + 9}
                        fill={isSelected ? '#F2F5EF' : '#A0AAA0'}
                        fontSize="8"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                      >
                        {node.shortLabel}
                      </text>
                    </g>
                  )
                })}

                {/* Center Pulse Ring & Brand Wordmark */}
                <circle cx="200" cy="200" r="42" fill="#050705" stroke="#172019" strokeWidth="1.5" />
                <text x="200" y="196" fill="#A0AAA0" fontSize="8" fontFamily="monospace" textAnchor="middle" letterSpacing="0.1em">
                  HABIT LOOP
                </text>
                <text x="200" y="210" fill="#B9FF43" fontSize="10" fontFamily="sans-serif" fontWeight="bold" textAnchor="middle">
                  REINFORCE
                </text>
              </svg>

              <div className="absolute bottom-3 text-center">
                <span className="font-mono text-[10px] text-[#687368]">
                  Click any node to explore intervention strategies
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Node Details & Break-Point Intervention */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Stage Selector Pills */}
            <div className="flex flex-wrap gap-2">
              {cycleNodes.map((n, i) => (
                <button
                  key={n.id}
                  onClick={() => setActiveNodeIdx(i)}
                  className={`font-mono text-xs px-3 py-1.5 rounded-lg border transition-all ${
                    activeNodeIdx === i
                      ? 'border-[#B9FF43] bg-[#172019] text-[#B9FF43]'
                      : 'border-white/10 bg-[#101810] text-[#A0AAA0] hover:border-white/20'
                  }`}
                >
                  {n.shortLabel}
                </button>
              ))}
            </div>

            {/* Stage Card */}
            <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2">
                <h4 className="font-sans text-2xl font-bold text-[#F2F5EF]">
                  {currentNode.name}
                </h4>
                <span className="inline-flex items-center self-start sm:self-auto font-mono text-xs px-3 py-1 rounded-full border border-[#B9FF43]/30 bg-[#B9FF43]/10 text-[#B9FF43]">
                  {currentNode.interventionType} Point
                </span>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                  What Occurs in the Cycle
                </span>
                <p className="font-sans text-sm sm:text-base text-[#F2F5EF] leading-relaxed">
                  {currentNode.description}
                </p>
              </div>

              {/* Synaptic Dynamic */}
              <div className="rounded-xl bg-[#050705] p-5 border border-white/5 space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  Synaptic Neuroadaptation
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentNode.synapticDynamic}
                </p>
              </div>

              {/* Specific Intervention Strategy */}
              <div className="rounded-xl border border-[#B9FF43]/30 bg-[#172019] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#B9FF43]">
                  <Sparkles size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    How to Break the Loop at This Stage
                  </span>
                </div>
                <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed font-medium">
                  {currentNode.interventionStrategy}
                </p>
              </div>
            </div>

          </div>

        </div>

        <QuoteBlock
          quote="You do not rise to the level of your goals. You fall to the level of your systems."
          attribution="James Clear &middot; Atomic Habits"
        />

      </div>
    </section>
  )
}
