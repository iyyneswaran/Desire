export interface BrainStage {
  id: number
  name: string
  subtitle: string
  primaryNetwork: string
  brainRegions: string[]
  keyNeurochemistry: string[]
  mechanism: string[]
  realWorldExample: string
  transitionToNext: string
  svgHighlight: 'sensory' | 'vta-nac' | 'prefrontal' | 'reinforcement'
  circuitColor: string
}

export const brainStages: BrainStage[] = [
  {
    id: 1,
    name: 'Stimulus Detection & Salience Processing',
    subtitle: 'Sensory cortices and subcortical salience nodes flag potential sexual cues',
    primaryNetwork: 'Salience Network (SN) & Visual Ventral Stream',
    brainRegions: ['Visual Cortex (V1-V4)', 'Thalamus (Pulvinar)', 'Basolateral Amygdala', 'Insular Cortex'],
    keyNeurochemistry: ['Glutamate', 'Norepinephrine', 'Acetylcholine'],
    mechanism: [
      'Visual, tactile, or cognitive stimuli enter primary sensory cortices and are routed via the thalamus to the amygdala and anterior insula within 100–150 milliseconds.',
      'The amygdala evaluates the emotional and evolutionary valence of the stimulus, tagging it as biologically salient before conscious cortical reflection occurs.',
      'Norepinephrine from the locus coeruleus spikes, sharpening sensory acuity and directing focused attentional spotlight onto the cue while dampening irrelevant peripheral inputs.',
    ],
    realWorldExample:
      'A student glancing across a lecture hall or scrolling a digital timeline suddenly catches an attractive face or provocative image. Pupils dilate and heart rate ticks upward before they have even consciously named what caught their eye.',
    transitionToNext:
      'Salience signals project directly from the amygdala and insular cortex down to the midbrain Ventral Tegmental Area (VTA), triggering the initiation of anticipatory reward motivation.',
    svgHighlight: 'sensory',
    circuitColor: '#B9FF43',
  },
  {
    id: 2,
    name: 'Reward Anticipation & Incentive Salience',
    subtitle: 'The mesolimbic dopamine pathway ignites the motivational urgency of wanting',
    primaryNetwork: 'Mesolimbic Dopaminergic Pathway',
    brainRegions: ['Ventral Tegmental Area (VTA)', 'Nucleus Accumbens (NAc)', 'Ventral Pallidum', 'Medial Forebrain Bundle'],
    keyNeurochemistry: ['Phasic Dopamine', 'Endogenous Opioids', 'GABA'],
    mechanism: [
      'Dopaminergic projection neurons in the midbrain VTA fire in rapid phasic bursts, releasing concentrated dopamine into the shell of the Nucleus Accumbens (NAc).',
      'This neurochemical surge transforms a neutral sensory perception into an intensely magnetizing cue — a phenomenon termed "incentive salience" (Berridge & Robinson).',
      'The feeling generated is not yet pleasure, but visceral anticipation: a restless hunger and singular focus to approach, acquire, and consume.',
    ],
    realWorldExample:
      'The student feels a compelling physical urge to keep staring, click on the social media profile, or initiate private messaging. The anticipation of reward creates a subjective sensation of urgency: "I must explore this right now."',
    transitionToNext:
      'Massive reciprocal projections carry this limbic craving vector upward to the prefrontal cortex, demanding cognitive resources and executive permission for motor execution.',
    svgHighlight: 'vta-nac',
    circuitColor: '#78D957',
  },
  {
    id: 3,
    name: 'Evaluation, Value Conflict & Executive Regulation',
    subtitle: 'Prefrontal cortical networks deliberate between immediate impulse and long-term values',
    primaryNetwork: 'Frontoparietal Central Executive & Default Mode Networks',
    brainRegions: ['Dorsolateral Prefrontal Cortex (dlPFC)', 'Orbitofrontal Cortex (OFC)', 'Anterior Cingulate Cortex (ACC)', 'Ventromedial PFC (vmPFC)'],
    keyNeurochemistry: ['Serotonin (5-HT)', 'GABA', 'Tonic Dopamine', 'Endocannabinoids'],
    mechanism: [
      'The orbitofrontal cortex (OFC) computes the expected value of gratification against the anticipated risks (loss of trust, reputation damage, project failure).',
      'The anterior cingulate cortex (ACC) registers the internal conflict between visceral desire and internalized personal ethical standards.',
      'The dorsolateral prefrontal cortex (dlPFC) exercises top-down inhibitory control over motor execution. This is the anatomical substrate of the "urge-to-action gap" — the pause where conscious self-mastery is chosen.',
    ],
    realWorldExample:
      'The student pauses with their thumb hovered over the screen: "If I spend the next two hours down this rabbit hole, I will fail tomorrow\'s exam and feel terrible in the morning. This is not who I want to be."',
    transitionToNext:
      'Whichever signal wins the prefrontal deliberation — impulsive gratification or disciplined inhibition — drives behavioral output that feeds into basal ganglia synaptic learning loops.',
    svgHighlight: 'prefrontal',
    circuitColor: '#B9FF43',
  },
  {
    id: 4,
    name: 'Learning, Habit Consolidation & Reinforcement',
    subtitle: 'Synaptic plasticity in corticostriatal circuits hardwires the pattern for the future',
    primaryNetwork: 'Corticostriatal Habit & Memory Loop',
    brainRegions: ['Dorsal Striatum (Caudate & Putamen)', 'Hippocampus', 'Basal Ganglia', 'Motor Cortex'],
    keyNeurochemistry: ['Dopaminergic Long-Term Potentiation (LTP)', 'BDNF', 'Glutamatergic Plasticity'],
    mechanism: [
      'If the impulse is repeatedly acted upon, neural control transitions from conscious ventral striatal (goal-directed) circuits to dorsal striatal (automatic habit) circuits.',
      'The hippocampus contextualizes the memory (time, room, device, emotional state), associating specific environmental triggers with the behavioral sequence.',
      'Synaptic connections strengthen through long-term potentiation (LTP). In future instances, the identical trigger evokes a swifter, more automatic behavioral cascade requiring greater conscious effort to resist.',
    ],
    realWorldExample:
      'After months of repeatedly opening stimulating content whenever stressed late at night, simply sitting down at the desk after 11 PM automatically triggers dopamine anticipation, even before any explicit intention is formed.',
    transitionToNext:
      'The reinforced circuit creates an increasingly sensitized trigger-response loop. However, intentional intervention at Stage 3 (prefrontal pause) or Stage 1 (stimulus control) can rewire these pathways through neuroplastic extinction.',
    svgHighlight: 'reinforcement',
    circuitColor: '#78D957',
  },
]
