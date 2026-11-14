'use client'

import { brainRegions } from '@/data/brainRegions'
import { RotateCcw, X } from 'lucide-react'

interface BrainLegendProps {
  selectedRegionId: string | null
  onSelectRegion: (id: string | null) => void
  onResetCamera: () => void
}

export default function BrainLegend({
  selectedRegionId,
  onSelectRegion,
  onResetCamera,
}: BrainLegendProps) {
  const activeRegion = brainRegions.find((r) => r.id === selectedRegionId)

  return (
    <div className="w-full space-y-4 pt-4 border-t border-white/10">
      
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[11px] text-[#A0AAA0] uppercase tracking-wider">
            Active Target:
          </span>
          {activeRegion ? (
            <span className="font-mono text-xs font-semibold text-[#B9FF43] flex items-center gap-1.5 bg-[#172019] px-2.5 py-0.5 rounded border border-[#B9FF43]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] animate-pulse" />
              {activeRegion.name.split('(')[0]}
              {activeRegion.isDeep && (
                <span className="text-[10px] text-[#78D957] font-normal">(Deep Locus)</span>
              )}
            </span>
          ) : (
            <span className="font-mono text-xs text-[#687368] italic">
              All 48,284 Neural Nodes Active
            </span>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onResetCamera}
            className="inline-flex items-center gap-1 font-mono text-[11px] text-[#A0AAA0] hover:text-[#B9FF43] bg-[#050705] hover:bg-[#101810] px-2.5 py-1 rounded border border-white/10 transition-colors"
            title="Reset to 3/4 Perspective"
          >
            <RotateCcw size={12} />
            <span>Reset View</span>
          </button>
          {selectedRegionId && (
            <button
              onClick={() => onSelectRegion(null)}
              className="inline-flex items-center gap-1 font-mono text-[11px] text-[#FF5C5C] hover:text-white bg-[#201010] hover:bg-[#2e1313] px-2 py-1 rounded border border-[#FF5C5C]/30 transition-colors"
              title="Clear Selection"
            >
              <X size={12} />
              <span>Clear</span>
            </button>
          )}
        </div>
      </div>

      {/* 10 Selectable Anatomical Chips Grid */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        {brainRegions.map((region) => {
          const isSelected = selectedRegionId === region.id

          return (
            <button
              key={region.id}
              onClick={() => onSelectRegion(isSelected ? null : region.id)}
              className={`font-mono text-[11px] px-2.5 py-1 rounded-md border transition-all flex items-center gap-1.5 ${
                isSelected
                  ? 'border-[#B9FF43] bg-[#172019] text-[#B9FF43] font-semibold shadow-[0_0_12px_-2px_rgba(185,255,67,0.35)]'
                  : 'border-white/10 bg-[#050705]/80 text-[#A0AAA0] hover:border-[#78D957]/50 hover:bg-[#101810] hover:text-[#F2F5EF]'
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  isSelected ? 'bg-[#B9FF43]' : region.isDeep ? 'bg-[#78D957]' : 'bg-[#687368]'
                }`}
              />
              <span>{region.name.split('(')[0].trim()}</span>
            </button>
          )
        })}
      </div>

      {/* Interaction Hint */}
      <div className="flex items-center justify-between text-[10px] font-mono text-[#687368] pt-1">
        <span>Drag to rotate &middot; Scroll to zoom</span>
        <span>Click 3D particles or chips to isolate</span>
      </div>

    </div>
  )
}
