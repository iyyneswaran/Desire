'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import BrainDiagram from '@/components/interactive/BrainDiagram'
import { brainStages } from '@/data/brainStages'
import { Network, ArrowRight, Lightbulb } from 'lucide-react'

export default function BrainMechanismSection() {
  const [selectedStageIdx, setSelectedStageIdx] = useState<number>(0)
  const currentStage = brainStages[selectedStageIdx]

  return (
    <section id="brain" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="05"
        category="Neurobiology of the urge"
        title="What happens inside the human brain?"
        subtitle="Desire is not localized to one single toggle switch. It is a distributed network conversation between sensory perception, mesolimbic motivation, and prefrontal executive regulation."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-12">
        
        {/* Systems Network Disclaimer */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
            <Network size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-sans text-sm sm:text-base font-semibold text-[#F2F5EF]">
              The Brain is an Interacting Network, Not a Four-Part Machine
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
              Neuroscience emphasizes that these four stages operate simultaneously through recurrent, reciprocal feedback loops. 
              The prefrontal cortex does not merely act as an emergency brake; it actively shapes sensory perception and modulates basal dopamine release before an urge even matures.
            </p>
          </div>
        </div>

        {/* 4 Stage Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {brainStages.map((stage, idx) => {
            const isSelected = selectedStageIdx === idx
            return (
              <button
                key={stage.id}
                onClick={() => setSelectedStageIdx(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                    : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#B9FF43]">
                    0{stage.id}
                  </span>
                  <span className="font-mono text-[10px] text-[#687368] uppercase">
                    Stage
                  </span>
                </div>
                <h4 className={`font-sans text-sm font-semibold leading-snug ${
                  isSelected ? 'text-[#F2F5EF]' : 'text-[#A0AAA0]'
                }`}>
                  {stage.name.split('&')[0]}
                </h4>
              </button>
            )
          })}
        </div>

        {/* Interactive Brain Diagram & Stage Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Anatomical SVG Model */}
          <div className="lg:col-span-5 sticky top-24">
            <BrainDiagram
              activeHighlight={currentStage.svgHighlight}
              onSelectHighlight={(highlight) => {
                const foundIdx = brainStages.findIndex((s) => s.svgHighlight === highlight)
                if (foundIdx !== -1) setSelectedStageIdx(foundIdx)
              }}
            />
          </div>

          {/* Right Column: Stage Deep Dive Exhibit */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
            
            {/* Header */}
            <div className="pb-6 border-b border-white/10 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                  Stage 0{currentStage.id} &middot; {currentStage.primaryNetwork}
                </span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                {currentStage.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#A0AAA0]">
                {currentStage.subtitle}
              </p>
            </div>

            {/* Neural Regions and Key Neurochemistry Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-lg bg-[#050705] p-4 border border-white/5 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#78D957] block">
                  Engaged Neural Nodes
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentStage.brainRegions.map((region) => (
                    <span
                      key={region}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#172019] text-[#F2F5EF] border border-white/10"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-lg bg-[#050705] p-4 border border-white/5 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B9FF43] block">
                  Key Signaling Chemistry
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentStage.keyNeurochemistry.map((chem) => (
                    <span
                      key={chem}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#101810] text-[#B9FF43] border border-[#B9FF43]/20"
                    >
                      {chem}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step-by-Step Mechanism */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                Synaptic &amp; Circuit Mechanism
              </span>
              <div className="space-y-2.5">
                {currentStage.mechanism.map((point, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-lg bg-[#050705]/50 border border-white/5"
                  >
                    <span className="font-mono text-xs text-[#B9FF43] mt-0.5">
                      0{i + 1}.
                    </span>
                    <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Student Scenario */}
            <div className="rounded-xl border border-white/10 bg-[#172019]/60 p-6 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C07B]">
                <Lightbulb size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Real-World Experiential Example
                </span>
              </div>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                {currentStage.realWorldExample}
              </p>
            </div>

            {/* Transition to Next Stage */}
            <div className="rounded-xl border border-[#B9FF43]/30 bg-[#0A100B] p-5 flex items-start gap-3.5">
              <div className="p-1.5 rounded bg-[#B9FF43]/15 text-[#B9FF43] mt-0.5 shrink-0">
                <ArrowRight size={16} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B9FF43] block">
                  How this feeds into the next stage
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStage.transitionToNext}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
