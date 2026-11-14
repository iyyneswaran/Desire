export interface BrainMechanism {
  id: string
  title: string
  explanation: string
}

export interface BrainRegion {
  id: string
  name: string
  latinName?: string
  anatomicalGroup: 'Prefrontal Cortical' | 'Subcortical Limbic' | 'Basal Ganglia & Striatum' | 'Sensory Cortical' | 'Midbrain & Brainstem' | 'Cerebellar'
  isDeep: boolean
  center: [number, number, number] // [x, y, z] in standard world coordinates
  cameraTarget?: [number, number, number]
  shortDescription: string
  detailedDescription: string
  engagedNeuralNodes: string[]
  signalingChemistry: string[]
  mechanisms: BrainMechanism[]
  realWorldExample: string
  educationalStage: {
    stageNumber: number
    stageName: string
    stageRole: string
  }
  colorAccent: string
}
