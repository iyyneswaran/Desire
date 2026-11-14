import { BrainRegion } from '@/types/brain'

export const brainRegions: BrainRegion[] = [
  {
    id: 'prefrontal',
    name: 'Prefrontal Cortex (PFC)',
    latinName: 'Cortex praefrontalis',
    anatomicalGroup: 'Prefrontal Cortical',
    isDeep: false,
    center: [0.0, 0.854, 0.756],
    shortDescription: 'Executive evaluation, impulse inhibition, future consequence simulation, and values-based behavioral governance.',
    detailedDescription:
      'The prefrontal cortex — encompassing the dorsolateral (dlPFC), ventromedial (vmPFC), and orbitofrontal (OFC) cortices — constitutes the neural apex of human self-regulation. While subcortical limbic regions generate immediate wanting, the PFC projects dense inhibitory GABAergic and glutamatergic pathways to subcortical reward nodes, dampening impulsive motor execution and aligning action with long-term identity.',
    engagedNeuralNodes: [
      'Dorsolateral PFC (dlPFC)',
      'Ventromedial PFC (vmPFC)',
      'Orbitofrontal Cortex (OFC)',
      'Frontopolar Cortex (BA 10)',
    ],
    signalingChemistry: ['Glutamate', 'GABA', 'Serotonin (5-HT2A)', 'Tonic Dopamine (D1)'],
    mechanisms: [
      {
        id: 'pfc-1',
        title: 'Top-Down Motor Inhibition',
        explanation:
          'Pyramidal neurons in the dlPFC send rapid inhibitory commands through corticostriatal loops to suppress automatic appetitive motor reflexes (e.g., reaching for a smartphone or clicking an explicit thumbnail).',
      },
      {
        id: 'pfc-2',
        title: 'Temporal Discounting & Future Simulation',
        explanation:
          'The vmPFC simulates long-term emotional outcomes ("How will I feel tomorrow at 8:00 AM?"), counteracting the limbic tendency to overvalue immediate gratification at the expense of future goals.',
      },
      {
        id: 'pfc-3',
        title: 'Metacognitive Decoupling',
        explanation:
          'Enables the conscious observer stance: separating the physiological perception of an urge from the executive decision to execute physical behavior.',
      },
    ],
    realWorldExample:
      'A student studying late at night feels an intense craving to open an adult site. The PFC pauses the thumb, retrieves the memory of tomorrow’s final exam, and redirects attention back to study material.',
    educationalStage: {
      stageNumber: 3,
      stageName: 'Evaluation, Value Conflict & Executive Regulation',
      stageRole: 'The conscious pivot point between urge and action',
    },
    colorAccent: '#B9FF43',
  },
  {
    id: 'acc',
    name: 'Anterior Cingulate Cortex (ACC)',
    latinName: 'Cortex cingularis anterior',
    anatomicalGroup: 'Prefrontal Cortical',
    isDeep: true,
    center: [0.0, 0.461, 0.039],
    shortDescription: 'Conflict monitoring, error detection, moral tension appraisal, and cognitive resource allocation.',
    detailedDescription:
      'Positioned strategically on the medial surface of the frontal lobe, the ACC functions as the brain’s internal alarm and conflict detection hub. When an instinctual urge clashes with an internalized personal value or academic duty, the ACC fires intensely, generating subjective moral dissonance and signaling the dlPFC to mobilize executive willpower.',
    engagedNeuralNodes: [
      'Dorsal ACC (dACC - cognitive)',
      'Ventral/Rostral ACC (rACC - affective)',
      'Frontal Eye Fields',
      'Anterior Insula',
    ],
    signalingChemistry: ['Glutamate', 'Norepinephrine', 'Acetylcholine'],
    mechanisms: [
      {
        id: 'acc-1',
        title: 'Goal-Conflict Detection',
        explanation:
          'Computes the mathematical disparity between current limbic appetitive drive and planned long-term intentions, signaling an acute cognitive emergency.',
      },
      {
        id: 'acc-2',
        title: 'Autonomic Arousal Modulation',
        explanation:
          'Communicates directly with the sympathetic nervous system, translating emotional conflict into physiological alerting (heart rate fluctuations, visceral unease).',
      },
      {
        id: 'acc-3',
        title: 'Executive Effort Mobilization',
        explanation:
          'Recruits additional metabolic and cognitive resources to the prefrontal cortex to resist habitual surrender.',
      },
    ],
    realWorldExample:
      'The sharp internal pang of hesitation you experience the exact second you consider doing something you know compromises your integrity. That visceral moral alert is the ACC firing.',
    educationalStage: {
      stageNumber: 3,
      stageName: 'Evaluation, Value Conflict & Executive Regulation',
      stageRole: 'Internal moral conflict and cognitive effort monitoring',
    },
    colorAccent: '#78D957',
  },
  {
    id: 'striatum',
    name: 'Striatum (Caudate & Putamen)',
    latinName: 'Corpus striatum',
    anatomicalGroup: 'Basal Ganglia & Striatum',
    isDeep: true,
    center: [0.0, 0.394, -0.170],
    shortDescription: 'Habit compilation, behavioral automation, procedural action selection, and corticostriatal loops.',
    detailedDescription:
      'The striatum represents the master habit engine of the human brain. While early encounters with a reward require conscious deliberation, repeated behavioral pairings shift neural control from ventral goal-directed circuits to the dorsal striatum (caudate and putamen), packaging complex behavioral sequences into automatic, frictionless motor routines.',
    engagedNeuralNodes: [
      'Dorsal Striatum (Caudate Nucleus)',
      'Putamen',
      'Globus Pallidus',
      'Subthalamic Nucleus',
    ],
    signalingChemistry: ['Dopamine (D2)', 'GABA', 'Glutamate', 'Adenosine'],
    mechanisms: [
      {
        id: 'str-1',
        title: 'Action Chunking & Automation',
        explanation:
          'Encodes multi-step behavioral routines (e.g., unlocking phone → typing URL → incognito browsing) into a single unified motor macro that executes with minimal conscious oversight.',
      },
      {
        id: 'str-2',
        title: 'Ventral-to-Dorsal Progression',
        explanation:
          'During habit formation, control transitions from ventral reward pursuit to dorsal procedural automation, meaning the behavior continues even when conscious pleasure has disappeared.',
      },
      {
        id: 'str-3',
        title: 'Hebbian Plasticity & Consolidation',
        explanation:
          'Strengthens synaptic connections through dopamine-dependent long-term potentiation, making the habitual response progressively swifter upon trigger exposure.',
      },
    ],
    realWorldExample:
      'Catching yourself with an adult browser tab already open before you even consciously realized you had decided to browse. The dorsal striatum executed the motor sequence automatically.',
    educationalStage: {
      stageNumber: 4,
      stageName: 'Learning, Habit Consolidation & Reinforcement',
      stageRole: 'Translating repeated choices into automatic motor habits',
    },
    colorAccent: '#78D957',
  },
  {
    id: 'nac',
    name: 'Nucleus Accumbens (NAc)',
    latinName: 'Nucleus accumbens septi',
    anatomicalGroup: 'Basal Ganglia & Striatum',
    isDeep: true,
    center: [0.0, -0.045, 0.325],
    shortDescription: 'Incentive salience, the neural vector of "wanting", anticipatory craving, and motivational urgency.',
    detailedDescription:
      'Situated in the ventral forebrain, the Nucleus Accumbens is the central hub of the mesolimbic dopamine pathway. When dopaminergic axons from the VTA fire into the NAc shell, it transforms a neutral sensory cue into an intensely magnetizing goal. Crucially, the NAc shell drives "wanting" (craving and pursuit) rather than "liking" (sensory pleasure).',
    engagedNeuralNodes: [
      'NAc Shell (Incentive salience)',
      'NAc Core (Motor conditioned response)',
      'Ventral Pallidum',
      'Bed Nucleus of the Stria Terminalis',
    ],
    signalingChemistry: ['Phasic Dopamine (D1/D2)', 'Endogenous Opioids (Mu receptors)', 'GABA'],
    mechanisms: [
      {
        id: 'nac-1',
        title: 'Incentive Salience Generation',
        explanation:
          'Translates sensory cue detection into a magnetic neurochemical vector of craving, making the reward object appear indispensable and urgent.',
      },
      {
        id: 'nac-2',
        title: 'Hedonic Hotspot Localization',
        explanation:
          'Contains micro-anatomical cubic-millimeter hotspots where mu-opioid and endocannabinoid stimulation generates genuine sensory pleasure ("liking") during consummation.',
      },
      {
        id: 'nac-3',
        title: 'Limbic-to-Motor Gateway',
        explanation:
          'Serves as the vital neurological bridge translating emotional desire from the amygdala into physical locomotion via basal ganglia motor circuits.',
      },
    ],
    realWorldExample:
      'The intense, electric pull that makes you stare at a thumbnail or message notification, accompanied by a sudden restlessness in your chest. That anticipatory urgency is dopamine surging in the NAc.',
    educationalStage: {
      stageNumber: 2,
      stageName: 'Reward Anticipation & Incentive Salience',
      stageRole: 'The ignition chamber of wanting and behavioral pursuit',
    },
    colorAccent: '#B9FF43',
  },
  {
    id: 'thalamus',
    name: 'Thalamus',
    latinName: 'Thalamus dorsalis',
    anatomicalGroup: 'Subcortical Limbic',
    isDeep: true,
    center: [0.0, 0.118, -0.031],
    shortDescription: 'Central sensory gating, salience relay, cortical synchronization, and attentional bandwidth filtering.',
    detailedDescription:
      'The thalamus is the great central sensory gateway of the human brain. Every sensory modality (except olfaction) routes through specific thalamic nuclei before reaching the cerebral cortex. During heightened arousal, the thalamus amplifies appetitive visual and tactile inputs while suppressing background distractions, effectively locking attention onto the provocative cue.',
    engagedNeuralNodes: [
      'Pulvinar Nucleus (Visual salience)',
      'Lateral Geniculate Nucleus (LGN - visual)',
      'Mediodorsal Nucleus (Prefrontal cross-talk)',
      'Reticular Thalamic Nucleus',
    ],
    signalingChemistry: ['Glutamate', 'GABA', 'Norepinephrine'],
    mechanisms: [
      {
        id: 'thal-1',
        title: 'Sensory Bandwidth Filtering',
        explanation:
          'Acts as an active filter, boosting signals flagged as emotionally relevant while dampening irrelevant ambient sensory data.',
      },
      {
        id: 'thal-2',
        title: 'Thalamocortical Synchrony',
        explanation:
          'Oscillates at specific frequencies to bind disparate cortical areas together into a unified conscious experience of desire.',
      },
      {
        id: 'thal-3',
        title: 'Subcortical-Cortical Relay',
        explanation:
          'Transmits fast, coarse sensory alerts to the amygdala for survival appraisal while simultaneously feeding high-resolution data to the visual cortex.',
      },
    ],
    realWorldExample:
      'When your eyes lock onto an attractive person across a crowded, noisy room, the ambient chatter suddenly seems to fade into the background. The thalamus gated out the noise to spotlight the salient visual cue.',
    educationalStage: {
      stageNumber: 1,
      stageName: 'Stimulus Detection & Salience Processing',
      stageRole: 'Sensory gateway routing cues to cortical and limbic nodes',
    },
    colorAccent: '#78D957',
  },
  {
    id: 'amygdala',
    name: 'Amygdala (Basolateral Complex)',
    latinName: 'Corpus amygdaloideum',
    anatomicalGroup: 'Subcortical Limbic',
    isDeep: true,
    center: [0.0, -0.223, -0.078],
    shortDescription: 'Emotional salience tagging, rapid evolutionary appraisal, autonomic arousal, and conditioned cue memory.',
    detailedDescription:
      'Nestled deep inside the medial temporal lobes, the almond-shaped amygdala functions as the brain’s salience radar. In less than 120 milliseconds — well before conscious cortical recognition — the basolateral amygdala tags perceived visual or relational stimuli with emotional and evolutionary relevance, triggering instant sympathetic autonomic alerting.',
    engagedNeuralNodes: [
      'Basolateral Amygdala (BLA - cue appraisal)',
      'Central Nucleus (CeA - autonomic output)',
      'Stria Terminalis',
      'Hypothalamic Paraventricular Nucleus',
    ],
    signalingChemistry: ['Glutamate', 'Norepinephrine', 'Corticotropin-Releasing Factor (CRF)', 'GABA'],
    mechanisms: [
      {
        id: 'amyg-1',
        title: 'Subcortical Rapid Appraisal',
        explanation:
          'Evaluates perceived stimuli along evolutionary valence dimensions in ~100ms, bypassing slower cortical processing loops.',
      },
      {
        id: 'amyg-2',
        title: 'Sympathetic Autonomic Activation',
        explanation:
          'Projects directly to the lateral hypothalamus and locus coeruleus, prompting pupillary dilation, heart rate elevation, and acute somatic readiness.',
      },
      {
        id: 'amyg-3',
        title: 'Emotional Memory Tagging',
        explanation:
          'Coordinates with the hippocampus to engrave emotionally charged experiences deeply into associative long-term memory.',
      },
    ],
    realWorldExample:
      'Catching an intimate or suggestive cue on your phone screen and feeling your heart rate immediately tick upward before you have even consciously comprehended the entire image.',
    educationalStage: {
      stageNumber: 1,
      stageName: 'Stimulus Detection & Salience Processing',
      stageRole: 'Subcortical salience detection and emotional tagging',
    },
    colorAccent: '#B9FF43',
  },
  {
    id: 'hippocampus',
    name: 'Hippocampus',
    latinName: 'Hippocampus proprius',
    anatomicalGroup: 'Subcortical Limbic',
    isDeep: true,
    center: [0.0, -0.192, 0.007],
    shortDescription: 'Contextual memory, environmental cue binding, episodic recall, and situational habit triggers.',
    detailedDescription:
      'The seahorse-shaped hippocampus encodes the spatial, temporal, and situational context of our experiences. It does not generate desire directly, but provides the associative glue that links specific rooms, times of day, devices, and emotional states to past gratification, re-activating craving whenever you enter a familiar trigger environment.',
    engagedNeuralNodes: [
      'Cornu Ammonis (CA1, CA3)',
      'Dentate Gyrus',
      'Subiculum',
      'Entorhinal Cortex',
    ],
    signalingChemistry: ['Glutamate (NMDA/AMPA)', 'Acetylcholine', 'BDNF', 'GABA'],
    mechanisms: [
      {
        id: 'hippo-1',
        title: 'Context-Dependent Trigger Binding',
        explanation:
          'Associates complex environmental configurations (e.g., bedroom desk + midnight + solitude) with specific reward expectations.',
      },
      {
        id: 'hippo-2',
        title: 'Episodic Memory Retrieval',
        explanation:
          'Replays sensory and emotional details of past sexual or romantic encounters, feeding vivid mental imagery into the reward circuitry.',
      },
      {
        id: 'hippo-3',
        title: 'Pattern Completion',
        explanation:
          'A single sensory fragment (a familiar notification chime, a specific cologne) prompts the hippocampus to reconstruct the entire reward memory.',
      },
    ],
    realWorldExample:
      'Sitting at your desk late on a Sunday evening and suddenly feeling an unexpected urge to scroll dating apps. The physical room and time of day acted as a contextual retrieval cue stored by the hippocampus.',
    educationalStage: {
      stageNumber: 4,
      stageName: 'Learning, Habit Consolidation & Reinforcement',
      stageRole: 'Contextual memory and associative trigger storage',
    },
    colorAccent: '#78D957',
  },
  {
    id: 'visual',
    name: 'Visual Cortex (Occipital Lobe)',
    latinName: 'Cortex visualis',
    anatomicalGroup: 'Sensory Cortical',
    isDeep: false,
    center: [0.0, -0.180, -0.943],
    shortDescription: 'Primary visual parsing, erotic cue recognition, feature extraction, and attentional tracking.',
    detailedDescription:
      'Spanning primary visual cortex (V1) through associative streams (V2–V4, fusiform gyrus), the occipital lobe ingests optical photons and deconstructs physical form, symmetry, movement, and erotic valence. In modern digital contexts, the visual cortex is the primary point of entry for algorithmically curated stimuli.',
    engagedNeuralNodes: [
      'Primary Visual Cortex (V1 / Striate)',
      'Extrastriate Visual Areas (V2, V3, V4)',
      'Fusiform Gyrus (Facial recognition)',
      'Lateral Occipital Complex',
    ],
    signalingChemistry: ['Glutamate', 'GABA', 'Acetylcholine'],
    mechanisms: [
      {
        id: 'vis-1',
        title: 'Rapid Morphological Feature Extraction',
        explanation:
          'Decodes facial symmetry, secondary sexual characteristics, and physical proximity within 80–120ms of retinal excitation.',
      },
      {
        id: 'vis-2',
        title: 'Ventral Stream Erotic Processing',
        explanation:
          'Projects high-resolution visual representations along the ventral "what" stream into the temporal lobe and amygdala for motivational valuation.',
      },
      {
        id: 'vis-3',
        title: 'Attention-Guided Visual Tracking',
        explanation:
          'Receives top-down dopaminergic feedback that locks fixation onto provocative visual features while blurring extraneous background details.',
      },
    ],
    realWorldExample:
      'Rapidly scanning through hundreds of social media posts, your gaze instantly halts on an aesthetically captivating portrait before you even read the caption or username.',
    educationalStage: {
      stageNumber: 1,
      stageName: 'Stimulus Detection & Salience Processing',
      stageRole: 'Primary sensory cue ingestion and feature extraction',
    },
    colorAccent: '#B9FF43',
  },
  {
    id: 'vta',
    name: 'Ventral Tegmental Area (VTA)',
    latinName: 'Area tegmentalis ventralis',
    anatomicalGroup: 'Midbrain & Brainstem',
    isDeep: true,
    center: [0.0, -0.190, -0.041],
    shortDescription: 'Dopaminergic pacemaker of desire, reward prediction error calculation, and motivational arousal.',
    detailedDescription:
      'Located in the midbrain floor adjacent to the substantia nigra, the VTA contains the primary dopaminergic projection neurons responsible for human motivation. When alerted by the amygdala or prefrontal cortex, VTA neurons burst in phasic firing, sending waves of dopamine up the medial forebrain bundle directly into the nucleus accumbens and prefrontal cortex.',
    engagedNeuralNodes: [
      'Midbrain A10 Dopamine Group',
      'Parabrachial Pigmented Nucleus',
      'Medial Forebrain Bundle',
      'Pedunculopontine Tegmental Nucleus',
    ],
    signalingChemistry: ['Phasic Dopamine', 'GABA', 'Glutamate', 'Brain-Derived Neurotrophic Factor (BDNF)'],
    mechanisms: [
      {
        id: 'vta-1',
        title: 'Reward Prediction Error (RPE)',
        explanation:
          'Fires intensely when encountering unexpected novelty or cues hinting at possible gratification, calculating: (Received/Anticipated Reward - Expected Reward).',
      },
      {
        id: 'vta-2',
        title: 'Mesolimbic Projection Firing',
        explanation:
          'Releases concentrated dopamine pulses into the Nucleus Accumbens shell, generating the physical restlessness and singular drive of incentive salience.',
      },
      {
        id: 'vta-3',
        title: 'Motivational State Gating',
        explanation:
          'Modulated by hormonal status (circulating testosterone, estrogen) and homeostatic needs (fatigue, stress), altering baseline responsiveness to appetitive cues.',
      },
    ],
    realWorldExample:
      'The unexpected thrill of receiving an unexpected provocative message or stumbling across an exciting new profile. That immediate surge of electricity is the VTA firing a positive prediction error.',
    educationalStage: {
      stageNumber: 2,
      stageName: 'Reward Anticipation & Incentive Salience',
      stageRole: 'Origin point of mesolimbic dopaminergic motivation',
    },
    colorAccent: '#78D957',
  },
  {
    id: 'cerebellum',
    name: 'Cerebellum',
    latinName: 'Cerebellum',
    anatomicalGroup: 'Cerebellar',
    isDeep: false,
    center: [0.0, -0.719, -0.697],
    shortDescription: 'Sensorimotor coordination, rhythmic timing, autonomic regulation, and cognitive modulation.',
    detailedDescription:
      'Situated at the base of the brain beneath the occipital lobes, the cerebellum contains more than 50% of all neurons in the human central nervous system. Beyond coordinating fine motor dexterity during intimate contact, contemporary neuroimaging reveals the cerebellum also participates in emotional timing, autonomic pacing, and cognitive sequence prediction.',
    engagedNeuralNodes: [
      'Cerebellar Hemispheres (lateral)',
      'Vermis (affective / autonomic regulation)',
      'Purkinje Cell Layer',
      'Dentate Nucleus',
    ],
    signalingChemistry: ['GABA (Purkinje cells)', 'Glutamate (Granule cells)', 'Norepinephrine'],
    mechanisms: [
      {
        id: 'cer-1',
        title: 'Sensorimotor & Tactile Timing',
        explanation:
          'Coordinates fine muscle movements, smooth pursuit eye tracking, and sensory tactile integration during physical intimacy.',
      },
      {
        id: 'cer-2',
        title: 'Autonomic & Emotional Homeostasis',
        explanation:
          'The cerebellar vermis projects to the autonomic brainstem and limbic nuclei, helping stabilize heart rate and respiratory pacing during emotional arousal.',
      },
      {
        id: 'cer-3',
        title: 'Internal Forward Models',
        explanation:
          'Constructs predictive models of physical actions and their anticipated sensory consequences, refining precision in complex behavioral execution.',
      },
    ],
    realWorldExample:
      'The fluid, unconscious motor coordination required to navigate your physical environment, modulate physical touch, or type fluidly on a keyboard while experiencing emotional agitation.',
    educationalStage: {
      stageNumber: 4,
      stageName: 'Learning, Habit Consolidation & Reinforcement',
      stageRole: 'Sensorimotor coordination and behavioral pacing',
    },
    colorAccent: '#B9FF43',
  },
]
