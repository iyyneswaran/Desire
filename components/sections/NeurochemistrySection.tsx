'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import { hormones } from '@/data/hormones'
import { neurotransmitters } from '@/data/neurotransmitters'
import {
  Flame,
  Sparkles,
  Droplets,
  HeartHandshake,
  AlertCircle,
  Zap,
  Waves,
  Activity,
  CircleDot,
  Leaf,
  AlertTriangle,
  Info,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  flame: Flame,
  sparkles: Sparkles,
  droplets: Droplets,
  'heart-handshake': HeartHandshake,
  'alert-circle': AlertCircle,
  zap: Zap,
  waves: Waves,
  activity: Activity,
  'circle-dot': CircleDot,
  leaf: Leaf,
}

export default function NeurochemistrySection() {
  const [activeTab, setActiveTab] = useState<'hormones' | 'neurotransmitters'>('hormones')
  const [selectedHormoneId, setSelectedHormoneId] = useState<string>(hormones[0].id)
  const [selectedNtId, setSelectedNtId] = useState<string>(neurotransmitters[0].id)

  const activeHormone = hormones.find((h) => h.id === selectedHormoneId) || hormones[0]
  const activeNt = neurotransmitters.find((n) => n.id === selectedNtId) || neurotransmitters[0]

  return (
    <section id="neurochemistry" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="04"
        category="Neuroendocrine Architecture"
        title="The chemistry of desire."
        subtitle="Sexual desire is not governed by a single rogue chemical. It emerges from dynamic cross-talk between systemic hormones and central neural signalling circuits."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-12">
        
        {/* Conceptual Distinction Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-white/10 bg-[#101810]/80 p-6 flex items-start gap-4">
            <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
              <Flame size={20} />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
                Systemic Messengers
              </span>
              <h4 className="font-sans text-base font-semibold text-[#F2F5EF]">
                Hormones (Endocrine Axis)
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                Chemical messengers released by glands and tissues into the bloodstream. They set baseline biological tone, reproductive vitality, and long-term motivational thresholds across the entire body.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-[#101810]/80 p-6 flex items-start gap-4">
            <div className="p-2.5 rounded bg-[#78D957]/10 text-[#78D957] shrink-0 mt-0.5">
              <Zap size={20} />
            </div>
            <div className="space-y-1">
              <span className="font-mono text-xs uppercase tracking-widest text-[#78D957]">
                Synaptic Signals
              </span>
              <h4 className="font-sans text-base font-semibold text-[#F2F5EF]">
                Neurotransmitters &amp; Neuromodulators
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                Fast-acting molecules operating across neural synapses in milliseconds. They encode salience, drive real-time wanting, sharpen acute attention, and facilitate executive deliberation.
              </p>
            </div>
          </div>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setActiveTab('hormones')}
            className={`font-mono text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-4 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'hormones'
                ? 'border-[#B9FF43] text-[#B9FF43] bg-[#101810]'
                : 'border-transparent text-[#A0AAA0] hover:text-[#F2F5EF]'
            }`}
          >
            <Flame size={16} />
            <span>Hormones ({hormones.length})</span>
          </button>
          <button
            onClick={() => setActiveTab('neurotransmitters')}
            className={`font-mono text-xs sm:text-sm uppercase tracking-widest px-6 sm:px-8 py-4 border-b-2 transition-all flex items-center gap-2 ${
              activeTab === 'neurotransmitters'
                ? 'border-[#78D957] text-[#78D957] bg-[#101810]'
                : 'border-transparent text-[#A0AAA0] hover:text-[#F2F5EF]'
            }`}
          >
            <Zap size={16} />
            <span>Neurotransmitters ({neurotransmitters.length})</span>
          </button>
        </div>

        {/* Interactive Exhibit Body */}
        {activeTab === 'hormones' ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Hormone Selector Pills */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#687368] block mb-1">
                Select Endocrine Target
              </span>
              {hormones.map((h) => {
                const Icon = iconMap[h.icon] || Flame
                const isSelected = selectedHormoneId === h.id
                return (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHormoneId(h.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.2)]'
                        : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-2 rounded-lg bg-[#050705] border border-white/5"
                        style={{ color: h.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                          {h.name}
                        </h4>
                        <span className="font-mono text-[10px] text-[#A0AAA0]">
                          {h.scientificName}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#B9FF43]">
                      {isSelected ? '●' : '→'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Detailed Scientific Exhibit Panel */}
            <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
              
              {/* Exhibit Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                      Endocrine Profile
                    </span>
                    <span className="text-[#687368]">&middot;</span>
                    <span className="font-mono text-xs text-[#A0AAA0]">
                      {activeHormone.scientificName}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                    {activeHormone.name}
                  </h3>
                </div>
                <div className="bg-[#050705] px-4 py-2 rounded-lg border border-white/10 self-start sm:self-auto">
                  <span className="font-mono text-xs text-[#A0AAA0] block">Site of Synthesis:</span>
                  <span className="font-sans text-xs font-medium text-[#F2F5EF]">
                    {activeHormone.productionSite}
                  </span>
                </div>
              </div>

              {/* Relation to Desire Headline */}
              <div className="rounded-lg bg-[#050705] p-5 border-l-2 border-[#B9FF43]">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block mb-1">
                  Relation to Desire &amp; Sexual Motivation
                </span>
                <p className="font-sans text-base text-[#F2F5EF] leading-relaxed">
                  {activeHormone.relationToDesire}
                </p>
              </div>

              {/* Physiological Roles */}
              <div className="space-y-3">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                  Relevant Physiological Functions
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeHormone.role.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#050705]/60 border border-white/5"
                    >
                      <span className="text-[#B9FF43] font-mono text-xs mt-0.5">0{i + 1}.</span>
                      <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed">
                        {r}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Scientific Clarification Box */}
              <div className="rounded-xl border border-white/10 bg-[#172019]/60 p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#78D957]">
                  <Info size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Scientific Clarification &amp; Nuance
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {activeHormone.scientificClarification}
                </p>
              </div>

              {/* Clinical Limitation Box (Crucial warning against self-suppression) */}
              <div className="rounded-xl border border-[#E5C07B]/30 bg-[#151a14] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C07B]">
                  <AlertTriangle size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Important Limitation &middot; Avoid Chemical Self-Intervention
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {activeHormone.clinicalLimitations}
                </p>
              </div>

            </div>

          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Neurotransmitter Selector Pills */}
            <div className="lg:col-span-4 space-y-3">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#687368] block mb-1">
                Select Neural Signalling System
              </span>
              {neurotransmitters.map((nt) => {
                const Icon = iconMap[nt.icon] || Zap
                const isSelected = selectedNtId === nt.id
                return (
                  <button
                    key={nt.id}
                    onClick={() => setSelectedNtId(nt.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                      isSelected
                        ? 'border-[#78D957] bg-[#172019] shadow-[0_0_20px_-5px_rgba(120,217,87,0.2)]'
                        : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className="p-2 rounded-lg bg-[#050705] border border-white/5"
                        style={{ color: nt.color }}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="font-sans text-sm font-semibold text-[#F2F5EF]">
                          {nt.name}
                        </h4>
                        <span className="font-mono text-[10px] text-[#A0AAA0]">
                          {nt.class}
                        </span>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-[#78D957]">
                      {isSelected ? '●' : '→'}
                    </span>
                  </button>
                )
              })}
            </div>

            {/* Right Column: Detailed Scientific Exhibit Panel */}
            <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
              
              {/* Exhibit Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs uppercase tracking-wider text-[#78D957]">
                      Neurotransmission Profile
                    </span>
                    <span className="text-[#687368]">&middot;</span>
                    <span className="font-mono text-xs text-[#A0AAA0]">
                      {activeNt.class}
                    </span>
                  </div>
                  <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
                    {activeNt.name}
                  </h3>
                </div>
              </div>

              {/* Primary Circuit */}
              <div className="rounded-lg bg-[#050705] p-5 border-l-2 border-[#78D957] space-y-1">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  Primary Neural Pathway &amp; Anatomical Circuit
                </span>
                <p className="font-mono text-xs sm:text-sm text-[#F2F5EF]">
                  {activeNt.primaryCircuit}
                </p>
              </div>

              {/* Core Mechanism */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A0AAA0] block">
                  Biochemical Mechanism of Action
                </span>
                <p className="font-sans text-base text-[#F2F5EF] leading-relaxed">
                  {activeNt.mechanism}
                </p>
              </div>

              {/* Crucial Scientific Nuance (e.g. Dopamine is NOT simply pleasure) */}
              <div className="rounded-xl border border-white/10 bg-[#172019]/60 p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#B9FF43]">
                  <Sparkles size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Crucial Scientific Distinction &middot; Dopamine &amp; Incentive Salience
                  </span>
                </div>
                <p className="font-sans text-sm text-[#A0AAA0] leading-relaxed">
                  {activeNt.scientificNuance}
                </p>
              </div>

              {/* Practical / Digital Environment Caveat */}
              <div className="rounded-xl border border-white/10 bg-[#050705] p-6 space-y-2">
                <div className="flex items-center gap-2 text-[#E5C07B]">
                  <Info size={16} />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                    Real-World Habit &amp; Self-Mastery Implication
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {activeNt.clinicalCaveat}
                </p>
              </div>

            </div>

          </div>
        )}

        {/* Global Science Synthesis Notice */}
        <div className="rounded-xl border border-white/10 bg-[#101810] p-6 sm:p-8 text-center space-y-2">
          <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
            Key Scientific Takeaway
          </span>
          <p className="font-sans text-base sm:text-lg text-[#F2F5EF] max-w-3xl mx-auto leading-relaxed">
            These chemical systems operate in deeply interconnected networks. No single hormone or neurotransmitter independently dictates human desire, and no safe magic pill eliminates the need for cognitive self-governance.
          </p>
        </div>

      </div>
    </section>
  )
}
