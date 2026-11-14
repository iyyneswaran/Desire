'use client'

interface BrainDiagramProps {
  activeHighlight: 'sensory' | 'vta-nac' | 'prefrontal' | 'reinforcement'
  onSelectHighlight?: (highlight: 'sensory' | 'vta-nac' | 'prefrontal' | 'reinforcement') => void
}

export default function BrainDiagram({ activeHighlight, onSelectHighlight }: BrainDiagramProps) {
  // Region color helper
  const isRegionActive = (region: string): boolean => {
    switch (activeHighlight) {
      case 'sensory':
        return ['visual', 'thalamus', 'amygdala'].includes(region)
      case 'vta-nac':
        return ['vta', 'nac', 'mesolimbic-tract'].includes(region)
      case 'prefrontal':
        return ['pfc', 'acc', 'ofc', 'pfc-tract'].includes(region)
      case 'reinforcement':
        return ['striatum', 'hippocampus', 'basal-ganglia', 'striatal-tract'].includes(region)
      default:
        return false
    }
  }

  const getNodeColor = (region: string) => {
    if (isRegionActive(region)) {
      return {
        fill: '#172019',
        stroke: '#B9FF43',
        text: '#B9FF43',
        glow: true,
      }
    }
    return {
      fill: '#0D140E',
      stroke: 'rgba(255,255,255,0.15)',
      text: '#A0AAA0',
      glow: false,
    }
  }

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0A100B] p-6 sm:p-8 flex flex-col items-center justify-center">
      
      {/* SVG Header Status */}
      <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-4">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-[#B9FF43] shadow-[0_0_8px_#B9FF43] animate-pulse" />
          <span className="font-mono text-xs text-[#F2F5EF] uppercase tracking-wider">
            Sagittal Neural Network Map
          </span>
        </div>
        <span className="font-mono text-[10px] text-[#687368] uppercase">
          Active: {activeHighlight.toUpperCase()}
        </span>
      </div>

      <svg
        viewBox="0 0 520 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[500px]"
      >
        <defs>
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Anatomical Brain Outer Silhouette */}
        <path
          d="M 90 220 
             C 80 140, 150 50, 260 50 
             C 330 50, 420 80, 440 160 
             C 455 220, 430 280, 390 310 
             C 360 330, 320 330, 300 310
             C 270 300, 240 330, 210 330
             C 160 330, 110 300, 90 220 Z"
          fill="#060906"
          stroke="#172019"
          strokeWidth="2.5"
        />

        {/* Cerebellum */}
        <path
          d="M 390 290 
             C 440 300, 450 350, 410 370 
             C 370 390, 340 360, 345 320 
             C 350 290, 370 285, 390 290 Z"
          fill="#080C08"
          stroke="#172019"
          strokeWidth="1.5"
        />
        <text x="395" y="345" fill="#687368" fontSize="8" fontFamily="monospace" textAnchor="middle">CEREBELLUM</text>

        {/* Brainstem */}
        <path
          d="M 300 320 C 300 370, 290 400, 280 400"
          stroke="#172019"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Neural Network Tracts */}
        {/* Tract 1: Visual Cortex to Amygdala / Thalamus */}
        <path
          d="M 410 180 C 360 170, 310 190, 260 210"
          stroke={isRegionActive('sensory') ? '#B9FF43' : '#172019'}
          strokeWidth={isRegionActive('sensory') ? '2.5' : '1'}
          strokeDasharray={isRegionActive('sensory') ? '4 2' : 'none'}
          opacity={isRegionActive('sensory') ? 1 : 0.4}
        />

        {/* Tract 2: Mesolimbic Dopamine Highway (VTA to NAc) */}
        <path
          d="M 300 280 C 270 270, 230 250, 210 220"
          stroke={isRegionActive('vta-nac') ? '#B9FF43' : '#172019'}
          strokeWidth={isRegionActive('vta-nac') ? '3' : '1'}
          strokeDasharray={isRegionActive('vta-nac') ? '4 2' : 'none'}
          opacity={isRegionActive('vta-nac') ? 1 : 0.4}
        />

        {/* Tract 3: Fronto-Striatal Executive Loop (PFC to NAc & OFC) */}
        <path
          d="M 150 140 C 180 180, 200 200, 210 220"
          stroke={isRegionActive('prefrontal') ? '#B9FF43' : '#172019'}
          strokeWidth={isRegionActive('prefrontal') ? '3' : '1'}
          strokeDasharray={isRegionActive('prefrontal') ? '4 2' : 'none'}
          opacity={isRegionActive('prefrontal') ? 1 : 0.4}
        />

        {/* Tract 4: Corticostriatal Habit Consolidation (Striatum to Motor & Hippocampus) */}
        <path
          d="M 240 180 C 280 170, 310 210, 320 240"
          stroke={isRegionActive('reinforcement') ? '#B9FF43' : '#172019'}
          strokeWidth={isRegionActive('reinforcement') ? '3' : '1'}
          strokeDasharray={isRegionActive('reinforcement') ? '4 2' : 'none'}
          opacity={isRegionActive('reinforcement') ? 1 : 0.4}
        />

        {/* REGION 1: Prefrontal Cortex (PFC) */}
        <g
          className="cursor-pointer transition-transform hover:scale-105"
          onClick={() => onSelectHighlight?.('prefrontal')}
        >
          <ellipse
            cx="145"
            cy="150"
            rx="45"
            ry="55"
            fill={getNodeColor('pfc').fill}
            stroke={getNodeColor('pfc').stroke}
            strokeWidth={getNodeColor('pfc').glow ? 2.5 : 1.5}
            filter={getNodeColor('pfc').glow ? 'url(#neonGlow)' : undefined}
          />
          <text x="145" y="145" fill={getNodeColor('pfc').text} fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">PREFRONTAL</text>
          <text x="145" y="160" fill={getNodeColor('pfc').text} fontSize="8" fontFamily="monospace" textAnchor="middle">CORTEX</text>
          <text x="145" y="175" fill="#687368" fontSize="7" fontFamily="sans-serif" textAnchor="middle">Executive Oversight</text>
        </g>

        {/* REGION 2: Anterior Cingulate Cortex (ACC) */}
        <g onClick={() => onSelectHighlight?.('prefrontal')} className="cursor-pointer">
          <ellipse
            cx="210"
            cy="140"
            rx="25"
            ry="18"
            fill={getNodeColor('acc').fill}
            stroke={getNodeColor('acc').stroke}
            strokeWidth="1.5"
          />
          <text x="210" y="142" fill={getNodeColor('acc').text} fontSize="7.5" fontFamily="monospace" textAnchor="middle">ACC</text>
          <text x="210" y="153" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Conflict</text>
        </g>

        {/* REGION 3: Thalamus */}
        <g onClick={() => onSelectHighlight?.('sensory')} className="cursor-pointer">
          <ellipse
            cx="275"
            cy="195"
            rx="24"
            ry="18"
            fill={getNodeColor('thalamus').fill}
            stroke={getNodeColor('thalamus').stroke}
            strokeWidth="1.5"
          />
          <text x="275" y="198" fill={getNodeColor('thalamus').text} fontSize="8" fontFamily="monospace" textAnchor="middle">THALAMUS</text>
          <text x="275" y="209" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Sensory Relay</text>
        </g>

        {/* REGION 4: Striatum (Caudate / Putamen) */}
        <g onClick={() => onSelectHighlight?.('reinforcement')} className="cursor-pointer">
          <ellipse
            cx="235"
            cy="180"
            rx="26"
            ry="20"
            fill={getNodeColor('striatum').fill}
            stroke={getNodeColor('striatum').stroke}
            strokeWidth={getNodeColor('striatum').glow ? 2.5 : 1.5}
            filter={getNodeColor('striatum').glow ? 'url(#neonGlow)' : undefined}
          />
          <text x="235" y="182" fill={getNodeColor('striatum').text} fontSize="8" fontFamily="monospace" textAnchor="middle">STRIATUM</text>
          <text x="235" y="193" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Habit Circuit</text>
        </g>

        {/* REGION 5: Nucleus Accumbens (NAc) */}
        <g onClick={() => onSelectHighlight?.('vta-nac')} className="cursor-pointer">
          <ellipse
            cx="205"
            cy="225"
            rx="22"
            ry="16"
            fill={getNodeColor('nac').fill}
            stroke={getNodeColor('nac').stroke}
            strokeWidth={getNodeColor('nac').glow ? 2.5 : 1.5}
            filter={getNodeColor('nac').glow ? 'url(#neonGlow)' : undefined}
          />
          <text x="205" y="226" fill={getNodeColor('nac').text} fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">N. ACCUMBENS</text>
          <text x="205" y="236" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Wanting Center</text>
        </g>

        {/* REGION 6: Amygdala */}
        <g onClick={() => onSelectHighlight?.('sensory')} className="cursor-pointer">
          <ellipse
            cx="255"
            cy="245"
            rx="20"
            ry="15"
            fill={getNodeColor('amygdala').fill}
            stroke={getNodeColor('amygdala').stroke}
            strokeWidth="1.5"
          />
          <text x="255" y="247" fill={getNodeColor('amygdala').text} fontSize="7.5" fontFamily="monospace" textAnchor="middle">AMYGDALA</text>
          <text x="255" y="256" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Salience Tag</text>
        </g>

        {/* REGION 7: Ventral Tegmental Area (VTA) */}
        <g onClick={() => onSelectHighlight?.('vta-nac')} className="cursor-pointer">
          <ellipse
            cx="305"
            cy="285"
            rx="22"
            ry="16"
            fill={getNodeColor('vta').fill}
            stroke={getNodeColor('vta').stroke}
            strokeWidth={getNodeColor('vta').glow ? 2.5 : 1.5}
            filter={getNodeColor('vta').glow ? 'url(#neonGlow)' : undefined}
          />
          <text x="305" y="287" fill={getNodeColor('vta').text} fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">VTA</text>
          <text x="305" y="297" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Dopamine Source</text>
        </g>

        {/* REGION 8: Hippocampus */}
        <g onClick={() => onSelectHighlight?.('reinforcement')} className="cursor-pointer">
          <path
            d="M 285 240 C 315 230, 335 250, 320 270"
            stroke={getNodeColor('hippocampus').stroke}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <text x="345" y="255" fill={getNodeColor('hippocampus').text} fontSize="7.5" fontFamily="monospace">HIPPOCAMPUS</text>
          <text x="345" y="265" fill="#687368" fontSize="6.5" fontFamily="sans-serif">Context Memory</text>
        </g>

        {/* REGION 9: Visual Cortex (Occipital Lobe) */}
        <g onClick={() => onSelectHighlight?.('sensory')} className="cursor-pointer">
          <ellipse
            cx="415"
            cy="185"
            rx="26"
            ry="36"
            fill={getNodeColor('visual').fill}
            stroke={getNodeColor('visual').stroke}
            strokeWidth={getNodeColor('visual').glow ? 2.5 : 1.5}
            filter={getNodeColor('visual').glow ? 'url(#neonGlow)' : undefined}
          />
          <text x="415" y="180" fill={getNodeColor('visual').text} fontSize="8" fontFamily="monospace" textAnchor="middle">VISUAL</text>
          <text x="415" y="193" fill={getNodeColor('visual').text} fontSize="8" fontFamily="monospace" textAnchor="middle">CORTEX</text>
          <text x="415" y="206" fill="#687368" fontSize="6.5" fontFamily="sans-serif" textAnchor="middle">Cue Ingestion</text>
        </g>
      </svg>

      <div className="w-full pt-4 border-t border-white/5 flex items-center justify-between text-center">
        <span className="font-mono text-[11px] text-[#A0AAA0]">
          Click any anatomical node to isolate its circuit
        </span>
        <span className="font-mono text-[10px] text-[#687368]">
          Simplified Sagittal Educational Schematic
        </span>
      </div>
    </div>
  )
}
