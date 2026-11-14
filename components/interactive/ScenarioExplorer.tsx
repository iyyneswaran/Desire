'use client'

import { useState } from 'react'
import { scenarios } from '@/data/scenarios'
import { Sparkles, CheckCircle2, XCircle } from 'lucide-react'

export default function ScenarioExplorer() {
  const [selectedScenarioIdx, setSelectedScenarioIdx] = useState<number>(0)
  const [selectedOptionIdx, setSelectedOptionIdx] = useState<number | null>(null)

  const currentScenario = scenarios[selectedScenarioIdx]
  const currentOption = selectedOptionIdx !== null ? currentScenario.options[selectedOptionIdx] : null

  return (
    <div className="space-y-8">
      
      {/* Scenario Selector Pills */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {scenarios.map((scen, idx) => {
          const isSelected = selectedScenarioIdx === idx
          return (
            <button
              key={scen.id}
              onClick={() => {
                setSelectedScenarioIdx(idx)
                setSelectedOptionIdx(null)
              }}
              className={`p-5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                  : 'border-white/10 bg-[#101810]/70 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-[#B9FF43]">
                  Scenario 0{idx + 1}
                </span>
                <span className="font-mono text-[10px] text-[#687368] uppercase">
                  {scen.category.split('&')[0]}
                </span>
              </div>
              <h4 className={`font-sans text-sm font-semibold leading-snug ${
                isSelected ? 'text-[#F2F5EF]' : 'text-[#A0AAA0]'
              }`}>
                {scen.title}
              </h4>
            </button>
          )
        })}
      </div>

      {/* Scenario Interactive Case Board */}
      <div className="rounded-2xl border border-white/10 bg-[#101810] p-6 sm:p-10 space-y-8">
        
        {/* Scenario Header */}
        <div className="space-y-3 pb-6 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
              Case Study 0{selectedScenarioIdx + 1} &middot; {currentScenario.category}
            </span>
          </div>
          <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
            {currentScenario.title}
          </h3>
          <p className="font-sans text-base text-[#A0AAA0] leading-relaxed">
            {currentScenario.context}
          </p>
        </div>

        {/* Trigger vs Impulse Dynamics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="rounded-xl bg-[#050705] p-5 border border-white/5 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#FF5C5C] block">
              The Trigger &middot; Environmental Cue
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
              {currentScenario.trigger}
            </p>
          </div>
          <div className="rounded-xl bg-[#050705] p-5 border border-white/5 space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#E5C07B] block">
              The Limbic Impulse &middot; Dopamine Pull
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
              {currentScenario.impulse}
            </p>
          </div>
        </div>

        {/* Core Dilemma Callout */}
        <div className="rounded-xl bg-[#172019] p-5 border border-white/10 space-y-1">
          <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block font-semibold">
            The Decision Dilemma
          </span>
          <p className="font-sans text-sm sm:text-base text-[#F2F5EF] leading-relaxed font-medium">
            {currentScenario.dilemma}
          </p>
        </div>

        {/* Interactive Response Options */}
        <div className="space-y-4 pt-4 border-t border-white/10">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              Choose a Decision Path
            </span>
            <span className="font-mono text-xs text-[#A0AAA0]">
              Click a response to analyze its real-world mechanism
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {currentScenario.options.map((option, idx) => {
              const isSelected = selectedOptionIdx === idx
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedOptionIdx(idx)}
                  className={`w-full text-left p-5 rounded-xl border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                    isSelected
                      ? option.isConstructive
                        ? 'border-[#B9FF43] bg-[#172019] shadow-[0_0_20px_-5px_rgba(185,255,67,0.25)]'
                        : 'border-[#FF5C5C] bg-[#201010]'
                      : 'border-white/10 bg-[#050705] hover:border-white/20'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold" style={{ color: option.isConstructive ? '#B9FF43' : '#FF5C5C' }}>
                        Option 0{idx + 1}: {option.label}
                      </span>
                    </div>
                    <p className="font-sans text-sm text-[#F2F5EF]">
                      {option.action}
                    </p>
                  </div>

                  <span className="font-mono text-xs text-[#A0AAA0] shrink-0">
                    {isSelected ? 'Selected' : 'Simulate Path &rarr;'}
                  </span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Selected Option Analysis Drawer */}
        {currentOption && (
          <div className="rounded-xl border border-white/10 bg-[#050705] p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className={`p-1.5 rounded-full ${currentOption.isConstructive ? 'bg-[#B9FF43]/20 text-[#B9FF43]' : 'bg-[#FF5C5C]/20 text-[#FF5C5C]'}`}>
                {currentOption.isConstructive ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
              </div>
              <h4 className="font-sans text-lg font-bold text-[#F2F5EF]">
                Analysis of {currentOption.label}
              </h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#78D957] block">
                  Underlying Psychological &amp; Neural Mechanism
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#A0AAA0] leading-relaxed">
                  {currentOption.mechanism}
                </p>
              </div>

              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block">
                  Cumulative Real-World Outcome
                </span>
                <p className="font-sans text-xs sm:text-sm text-[#F2F5EF] leading-relaxed">
                  {currentOption.outcome}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Key Educational Takeaway */}
        <div className="rounded-xl border border-[#B9FF43]/30 bg-[#172019]/70 p-5 flex items-start gap-3">
          <Sparkles size={18} className="text-[#B9FF43] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43] block font-semibold">
              Core Educational Insight
            </span>
            <p className="font-sans text-sm text-[#F2F5EF] leading-relaxed">
              {currentScenario.keyTakeaway}
            </p>
          </div>
        </div>

      </div>

    </div>
  )
}
