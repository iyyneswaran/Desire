export interface ScenarioOption {
  label: string
  action: string
  mechanism: string
  outcome: string
  isConstructive: boolean
}

export interface Scenario {
  id: string
  title: string
  category: string
  context: string
  trigger: string
  impulse: string
  dilemma: string
  options: ScenarioOption[]
  keyTakeaway: string
}

export const scenarios: Scenario[] = [
  {
    id: 'digital-distraction',
    title: 'Late-Night Study & Algorithmic Cue Capture',
    category: 'Attention & Digital Environment',
    context:
      'Marcus is an engineering student studying alone in his dorm room at 11:30 PM for a high-stakes exam in two days. He is feeling fatigued, mentally strained, and anxious about his mastery of the material.',
    trigger: 'A brief pause to check a notification triggers a scroll into an algorithmically personalized social feed featuring provocative visual content.',
    impulse: 'An intense dopamine-driven urge to abandon the dense study notes, open an incognito browser tab, and binge stimulating media for immediate emotional relief.',
    dilemma: 'The immediate comfort of dopamine gratification versus tomorrow\'s cognitive exhaustion and exam performance.',
    options: [
      {
        label: 'Automatic Impulsive Response',
        action: 'Rationalize a "quick 10-minute break" to view explicit content, losing 90 minutes and cognitive focus.',
        mechanism: 'Mesolimbic dopaminergic surge overrides fatigued prefrontal regulatory networks. Sleep onset is delayed by blue light and sympathetic arousal.',
        outcome: 'Morning grogginess, residual shame, increased cortisol, and under-preparedness for the critical exam.',
        isConstructive: false,
      },
      {
        label: 'White-Knuckle Suppression',
        action: 'Stare angrily at the textbook, repeating "do not think about it" while keeping the phone next to the keyboard.',
        mechanism: 'Ironic process theory (Wegner): actively suppressing a thought increases its cognitive accessibility and vigilance, draining limited ego-depletion reserves.',
        outcome: 'High mental friction, prolonged frustration, and high probability of late-night relapse when willpower collapses.',
        isConstructive: false,
      },
      {
        label: 'Stimulus Control & Physical Reset (Self-Mastery)',
        action: 'Stand up immediately, leave the room for 5 minutes, place the phone in a desk drawer in airplane mode, do 20 pushups, and drink cold water.',
        mechanism: 'Changes environmental context (extinction of cue triggers), interrupts the habit loop, and introduces physical sensory reset to activate prefrontal executive oversight.',
        outcome: 'Urge intensity subsides naturally within 8–10 minutes; Marcus finishes a solid 45-minute study block and sleeps restoratively.',
        isConstructive: true,
      },
    ],
    keyTakeaway: 'You cannot fight an algorithmic dopamine trap with exhausted willpower alone. Shape the physical environment before the urge peaks.',
  },
  {
    id: 'personal-boundaries',
    title: 'Social Ambiguity & Consent Integrity',
    category: 'Interpersonal Boundaries & Ethics',
    context:
      'Elena and David have been close friends and project partners for two semesters. After a celebratory team dinner with mild alcohol consumption, they are waiting together in a private lounge for a ride.',
    trigger: 'A prolonged moment of physical proximity and mutual eye contact during a warm, intimate conversation.',
    impulse: 'David experiences sudden intense physical attraction and an urge to make a physical advance, despite Elena having recently clarified that she cherishes their platonic friendship.',
    dilemma: 'Acting on momentary biological desire versus respecting explicit spoken boundaries and preserving years of reciprocal trust.',
    options: [
      {
        label: 'Impulsive Escalation',
        action: 'Assume "the mood is right" and initiate physical intimacy without verbal check-in or explicit consent.',
        mechanism: 'Confirmation bias driven by sexual arousal misinterprets friendly warmth as romantic invitation, ignoring past explicit boundary communication.',
        outcome: 'Severe discomfort, violation of personal autonomy, permanent destruction of friendship trust, and potential institutional boundary complaints.',
        isConstructive: false,
      },
      {
        label: 'Governed Awareness (Self-Mastery)',
        action: 'Recognize the surge of attraction as natural biological arousal, pause internally, and maintain respectful verbal and physical boundaries.',
        mechanism: 'Prefrontal cortical networks inhibit impulsive motor output; cognitive reappraisal decouples the feeling of attraction from an entitlement to action.',
        outcome: 'Elena feels safe, valued, and respected as a whole human being; the deep partnership and shared professional project remain uncompromised.',
        isConstructive: true,
      },
    ],
    keyTakeaway: 'Attraction does not create entitlement. True maturity is the capacity to feel an intense urge while safeguarding someone else’s autonomy and comfort.',
  },
  {
    id: 'habit-conflict',
    title: 'The Compulsive Habit Loop vs. Long-Term Ambition',
    category: 'Habit Modification & Values',
    context:
      'Sarah, a pre-law student, has noticed a pattern: whenever she experiences chronic stress or loneliness on Sunday evenings, she turns compulsively to dating apps and cyber intimacy, spending 3 to 4 hours in cyclical chat loops.',
    trigger: 'Sunday evening isolation, looming Monday deadlines, and a feeling of aimlessness.',
    impulse: 'Seeking immediate validation and emotional numbness through repetitive online romantic/sexual searching.',
    dilemma: 'The transient illusion of connection versus persistent self-alienation and lost time for her law school preparation.',
    options: [
      {
        label: 'Habitual Surrender',
        action: 'Engage the app for hours, telling herself "it\'s just harmless chatting," ignoring that it regularly ends in self-reproach.',
        mechanism: 'Negative reinforcement: the behaviour is maintained because it removes the unpleasant emotional state (loneliness/anxiety), deepening the automatic habit groove.',
        outcome: 'Empty emotional feeling, sleep deprivation, and reinforced helplessness regarding her own commitments.',
        isConstructive: false,
      },
      {
        label: 'Values-Based Cognitive Restructuring (ACT & CBT)',
        action: 'Implement the 10-Minute Delay: label the sensation ("I am noticing an urge for emotional comfort"), write down 3 core personal values, and call an accountability partner or friend.',
        mechanism: 'Metacognitive defusion decouples the emotional distress from compulsive behavioural execution; values-driven action substitutes meaningful connection for synthetic escape.',
        outcome: 'Breaks the automated reinforcement cycle, fosters genuine social connection, and restores self-efficacy.',
        isConstructive: true,
      },
    ],
    keyTakeaway: 'Compulsive habits are rarely about the physical act alone; they are frequently an attempt to medicate unaddressed emotional discomfort. Address the root need, not just the symptom.',
  },
]
