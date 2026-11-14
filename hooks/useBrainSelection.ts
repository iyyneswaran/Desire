'use client'

import { useState, useCallback } from 'react'

export function useBrainSelection(initialRegionId: string | null = 'prefrontal') {
  const [selectedRegionId, setSelectedRegionId] = useState<string | null>(initialRegionId)
  const [hoveredRegionId, setHoveredRegionId] = useState<string | null>(null)

  const selectRegion = useCallback((id: string | null) => {
    setSelectedRegionId((prev) => (prev === id ? null : id))
  }, [])

  const setHovered = useCallback((id: string | null) => {
    setHoveredRegionId(id)
  }, [])

  const resetSelection = useCallback(() => {
    setSelectedRegionId(null)
    setHoveredRegionId(null)
  }, [])

  return {
    selectedRegionId,
    hoveredRegionId,
    setSelectedRegionId,
    selectRegion,
    setHovered,
    resetSelection,
  }
}
