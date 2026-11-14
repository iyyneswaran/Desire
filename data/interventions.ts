export interface Intervention {
  id: string
  name: string
  shortLabel: string
  icon: string
  color: string
  whatItTargets: string
  howItWorks: string
  mechanism: string
  practicalExercise: string
  limitations: string
  evidenceLevel: string
}

export const interventions: Intervention[] = [
  {
    id: 'mindfulness',
    name: 'Mindfulness & Metacognitive Awareness',
    shortLabel: 'Mindfulness',
    icon: 'brain',
    color: '#B9FF43',
    whatItTargets: 'Attentional bias, emotional reactivity, and automatic cue-response loops',
    howItWorks:
      'Cultivates the capacity to observe sensory and mental states as temporary internal phenomena rather than urgent behavioral mandates. Mindfulness does not eliminate physiological arousal or suppress testosterone — it introduces cognitive space between feeling an urge and choosing a physical action.',
    mechanism:
      'Functional neuroimaging indicates that sustained mindfulness strengthens functional connectivity between the anterior cingulate cortex (ACC), dorsolateral prefrontal cortex (dlPFC), and the amygdala, decreasing bottom-up reactivity to appetitive cues ("urge surfing").',
    practicalExercise:
      'The "Urge Surfing" Protocol: When a visceral impulse arises, do not fight it or indulge it. Close your eyes, sit upright, and mentally visualize the urge as an ocean wave. Track where it manifests physically in your body (chest tightness, abdominal heat, restlessness). Inhale deeply for 4 counts, hold for 4, exhale for 6. Observe the wave peak, crest, and naturally dissipate without physical intervention.',
    limitations:
      'Mindfulness is a trained skill that demands consistent practice over weeks. It is not an instant emotional anesthetic and may feel uncomfortable initially when unexamined impulses surface.',
    evidenceLevel: 'Moderate to High (Randomized controlled trials in relapse prevention & cognitive regulation)',
  },
  {
    id: 'exercise',
    name: 'Physical Exercise & Somatic Discharge',
    shortLabel: 'Physical Exercise',
    icon: 'dumbbell',
    color: '#78D957',
    whatItTargets: 'Sympathetic nervous system arousal, emotional restlessness, and sedentary trigger environments',
    howItWorks:
      'Redirects physiological agitation, metabolizes stress hormones, improves sleep architecture, and engages large motor pathways. It provides a physically grounding substitute behavior that extracts you from solitary, triggering settings.',
    mechanism:
      'Vigorous muscular activity stimulates endocannabinoid signaling, promotes brain-derived neurotrophic factor (BDNF) synthesis, and moderates the hypothalamic-pituitary-adrenal (HPA) axis, mitigating the baseline anxiety that often fuels escapist sexual pursuits.',
    practicalExercise:
      'The High-Threshold Somatic Reset: If an urge feels overwhelming while sitting at a screen, immediately execute 30 explosive kettlebell swings or 25 controlled push-ups, followed by a 2-minute brisk walk. Shift the neuromuscular focus completely into physical exertion and proprioceptive feedback.',
    limitations:
      'Exercise does not suppress baseline libido or act as chemical castration. Healthy exercise often preserves or elevates vitality. Its utility lies in stress regulation and contextual interruption.',
    evidenceLevel: 'High for stress and mood regulation; Moderate as an acute behavioral replacement strategy',
  },
  {
    id: 'stimulus-control',
    name: 'Stimulus Control & Environmental Architecture',
    shortLabel: 'Stimulus Control',
    icon: 'shield',
    color: '#B9FF43',
    whatItTargets: 'External conditioned cues, algorithmic triggers, and automatic behavioral frictionlessness',
    howItWorks:
      'Deliberately redesigning your physical and digital surroundings so that triggers are removed or insulated behind layers of deliberate friction. You win the battle of willpower by never having to fight it in a weakened state.',
    mechanism:
      'Operates on classic extinction and choice architecture principles. By decoupling environmental cues (e.g., late-night smartphone in bed) from immediate gratification, conditioned dopamine release upon encountering the cue weakens over time.',
    practicalExercise:
      'The 3-Zone Digital Perimeter: 1) Bedroom as a sanctuary: phone charges strictly in the living room or kitchen after 10 PM. 2) Algorithmic hygiene: audit and unfollow provocative social feeds; reset recommendation algorithms. 3) Technical friction: install application blockers with password protection delegated to an accountability partner.',
    limitations:
      'Environmental control cannot protect you from spontaneous internal thoughts, memories, or encountering attractive individuals in everyday society. It manages avoidable synthetic triggers, not human reality.',
    evidenceLevel: 'Very High (Standard behavioral psychology and addiction recovery literature)',
  },
  {
    id: 'delayed-gratification',
    name: 'Delayed Gratification & The Urge Gap',
    shortLabel: 'Delayed Gratification',
    icon: 'timer',
    color: '#E5C07B',
    whatItTargets: 'Temporal discounting, impulsive urgency, and immediate-reward dominance',
    howItWorks:
      'Introducing an unnegotiable time buffer between the onset of an impulse and the execution of any behavior. Urges are neurochemically acute surges; given sufficient time without active sensory fuel, their subjective intensity drops dramatically.',
    mechanism:
      'Impulsive decisions are driven by subcortical limbic dominance under perceived immediacy. Forcing a delay allows slower prefrontal executive circuits (specifically the ventromedial and dorsolateral PFC) to evaluate long-term consequences and integrate personal values into the motor decision.',
    practicalExercise:
      'The 15-Minute Rule: Never act on an impulsive urge immediately. Set an audible timer for exactly 15 minutes. During this period, you are permitted to feel the urge, but you must drink a large glass of water and change your physical location. If you still choose to act after 15 minutes, you must do so consciously, but over 85% of acute cravings subside before the timer finishes.',
    limitations:
      'Requires enough baseline self-awareness to initiate the timer. It creates the gap, but the individual must still possess constructive values to guide the choice once the pause ends.',
    evidenceLevel: 'High (Behavioral economics and inhibitory control research)',
  },
  {
    id: 'cbt',
    name: 'Cognitive Behavioural Therapy (CBT)',
    shortLabel: 'CBT Patterns',
    icon: 'lightbulb',
    color: '#78D957',
    whatItTargets: 'Cognitive distortions, automatic rationalizations, and permissive self-talk',
    howItWorks:
      'Unpacks the cognitive narrative that precedes impulsive behavior (e.g., "I\'ve had a stressful day, I deserve this," or "Just one peek won\'t hurt"). Identifies false justifications, tests automatic thoughts against reality, and replaces them with balanced cognitive appraisals.',
    mechanism:
      'Re-engages frontoparietal cognitive control networks to restructure maladaptive schema. Systematic cognitive reframing reduces the subjective reward valuation of the forbidden behavior and highlights its real-world costs.',
    practicalExercise:
      'The 3-Column Thought Audit: Whenever an urge rationalization strikes, write down: 1) The Automatic Thought ("I need this right now to decompress"), 2) The Cognitive Distortion (Emotional reasoning / Minimization of consequences), 3) The Objective Reality ("This provides 3 minutes of numbing, followed by 2 hours of regret and ruined morning focus").',
    limitations:
      'Rational argument alone can be overwhelmed during peak emotional arousal or intense sleep deprivation unless cognitive strategies are practiced beforehand into automatic reflexes.',
    evidenceLevel: 'Gold Standard (Extensive clinical trial validation across mood and impulse-control spectrums)',
  },
  {
    id: 'act',
    name: 'Acceptance & Commitment Therapy (ACT)',
    shortLabel: 'ACT Values',
    icon: 'compass',
    color: '#B9FF43',
    whatItTargets: 'Experiential avoidance, internal struggle, and disconnection from core personal values',
    howItWorks:
      'Teaches psychological flexibility: accepting that distressing or intense sexual thoughts and urges are natural evolutionary phenomena that do not require panic, suppression, or action. Instead of trying to eliminate desire, you commit to actions congruent with who you want to become.',
    mechanism:
      'Employs cognitive defusion (separating the "self" from mental content) and values clarification. Fosters neurofunctional shift from experiential avoidance (which ironically amplifies craving) toward value-driven goal orientation.',
    practicalExercise:
      'The "Leaves on a Stream" & Values Compass: Mentally visualize a flowing stream with autumn leaves drifting by. Whenever a provocative thought or urge enters your mind, place it on a leaf and watch it float downstream without grabbing it or shoving it away. Then ask: "What action right now serves my highest 5-year vision?" and perform that action.',
    limitations:
      'Requires willingness to sit with internal discomfort without escaping into immediate gratification. Best practiced systematically rather than solely in acute crises.',
    evidenceLevel: 'High (Validated extensively for addictive behaviors and emotional regulation)',
  },
]
