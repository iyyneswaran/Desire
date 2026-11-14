'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import ParticleBrain from '@/components/interactive/ParticleBrain'
import { brainRegions } from '@/data/brainRegions'
import { brainStages } from '@/data/brainStages'
import { Network, ArrowRight, Lightbulb } from 'lucide-react'

// Mapping each educational stage (0..3) to its primary anatomical region ID
const STAGE_TO_PRIMARY_REGION: Record<number, string> = {
  0: 'amygdala',   // Stage 1: Stimulus Detection -> Amygdala / Thalamus / Visual
  1: 'nac',        // Stage 2: Reward Anticipation -> Nucleus Accumbens / VTA
  2: 'prefrontal', // Stage 3: Evaluation & Regulation -> Prefrontal Cortex / ACC
  3: 'striatum',   // Stage 4: Learning & Reinforcement -> Striatum / Hippocampus
}

export default function BrainMechanismSection() {
  const [selectedRegionId, setSelectedRegionId] = useState<string>('prefrontal')

  // Current active region data
  const currentRegion =
    brainRegions.find((r) => r.id === selectedRegionId) || brainRegions[0]

  // Corresponding educational stage (1..4)
  const activeStageNumber = currentRegion.educationalStage.stageNumber
  const currentStageObj =
    brainStages.find((s) => s.id === activeStageNumber) || brainStages[2]

  const handleStageSelect = (stageIdx: number) => {
    const targetRegion = STAGE_TO_PRIMARY_REGION[stageIdx] || 'prefrontal'
    setSelectedRegionId(targetRegion)
  }

  return (
    <section id="brain" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="05"
        category="Neurobiology of the urge"
        title="What happens inside the human brain?"
        subtitle="Explore the anatomical architecture of desire in three dimensions. Thousands of neural particles illustrate the distributed cross-talk between subcortical limbic appetites and prefrontal executive governance."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-12">
        
        {/* Systems Network Disclaimer */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
            <Network size={20} />
          </div>
          <div className="space-y-1">
            <h4 className="font-sans text-sm sm:text-base font-semibold text-[#F2F5EF]">
              An Interconnected Neural Lattice &middot; Not a Simplistic Machine
            </h4>
            <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
              Neuroscience emphasizes that these structures operate simultaneously through recurrent, bidirectional feedback loops. 
              The prefrontal cortex does not merely act as an emergency brake; it actively shapes sensory perception and modulates basal dopamine release before an urge even reaches conscious awareness.
            </p>
          </div>
        </div>

        {/* 4 Stage Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {brainStages.map((stage, idx) => {
            const isStageActive = activeStageNumber === stage.id

            return (
              <button
                key={stage.id}
                onClick={() => handleStageSelect(idx)}
                className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isStageActive
                    ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                    : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs font-bold text-[#B9FF43]">
                    0{stage.id}
                  </span>
                  <span className="font-mono text-[10px] text-[#687368] uppercase">
                    Educational Stage
                  </span>
                </div>
                <h4
                  className={`font-sans text-sm font-semibold leading-snug ${
                    isStageActive ? 'text-[#F2F5EF]' : 'text-[#A0AAA0]'
                  }`}
                >
                  {stage.name.split('&')[0]}
                </h4>
              </button>
            )
          })}
        </div>

        {/* Interactive Brain Exhibit: Left 3D Panel & Right Information Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive 3D Particle Brain Exhibit */}
          <div className="lg:col-span-5 sticky top-24 space-y-4">
            <ParticleBrain
              selectedRegionId={selectedRegionId}
              onSelectRegion={(id) => setSelectedRegionId(id || 'prefrontal')}
            />
          </div>

          {/* Right Column: Preserved & Dynamically Synchronized Scientific Information Panel */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8 shadow-2xl">
            
            {/* Header: Stage Context & Anatomical Region */}
            <div className="pb-6 border-b border-white/10 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                  Stage 0{currentRegion.educationalStage.stageNumber} &middot; {currentRegion.educationalStage.stageName}
                </span>
                <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full border border-white/10 bg-[#050705] text-[#78D957]">
                  {currentRegion.anatomicalGroup}
                </span>
              </div>

              <div className="flex items-baseline gap-3 pt-1">
                <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                  {currentRegion.name}
                </h3>
                {currentRegion.latinName && (
                  <span className="font-mono text-xs text-[#687368] italic hidden sm:inline">
                    {currentRegion.latinName}
                  </span>
                )}
              </div>

              <p className="font-sans text-sm sm:text-base text-[#A0AAA0] leading-relaxed pt-1">
                {currentRegion.detailedDescription}
              </p>
            </div>

            {/* Neural Nodes & Key Signaling Chemistry */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Engaged Neural Nodes */}
              <div className="rounded-xl bg-[#050705] p-5 border border-white/5 space-y-2.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#78D957] block font-semibold">
                  Engaged Neural Nodes &amp; Nuclei
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentRegion.engagedNeuralNodes.map((node) => (
                    <span
                      key={node}
                      className="font-mono text-xs px-2.5 py-1 rounded bg-[#172019] text-[#F2F5EF] border border-white/10"
                    >
                      {node}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Signaling Chemistry */}
              <div className="rounded-xl bg-[#050705] p-5 border border-white/5 space-y-2.5">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B9FF43] block font-semibold">
                  Key Signaling Chemistry
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentRegion.signalingChemistry.map((chem) => (
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

            {/* Synaptic & Circuit Mechanisms (Numbered Points) */}
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                Synaptic &amp; Circuit Mechanism
              </span>
              <div className="space-y-3">
                {currentRegion.mechanisms.map((mech, i) => (
                  <div
                    key={mech.id || i}
                    className="p-4 rounded-xl bg-[#050705]/60 border border-white/5 space-y-1"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[#B9FF43] font-bold">
                        0{i + 1}.
                      </span>
                      <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                        {mech.title}
                      </h4>
                    </div>
                    <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed pl-6">
                      {mech.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Real World Experiential Example */}
            <div className="rounded-xl border border-white/10 bg-[#172019]/60 p-6 space-y-2">
              <div className="flex items-center gap-2 text-[#E5C07B]">
                <Lightbulb size={16} />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Real-World Experiential Example
                </span>
              </div>
              <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                {currentRegion.realWorldExample}
              </p>
            </div>

            {/* Transition to Next Stage */}
            <div className="rounded-xl border border-[#B9FF43]/30 bg-[#0A100B] p-5 flex items-start gap-3.5">
              <div className="p-1.5 rounded bg-[#B9FF43]/15 text-[#B9FF43] mt-0.5 shrink-0">
                <ArrowRight size={16} />
              </div>
              <div className="space-y-1">
                <span className="font-mono text-[11px] uppercase tracking-wider text-[#B9FF43] block">
                  Stage Integration: {currentRegion.educationalStage.stageRole}
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentStageObj.transitionToNext}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
