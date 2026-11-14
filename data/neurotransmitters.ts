export interface Neurotransmitter {
  id: string
  name: string
  class: string
  icon: string
  color: string
  shortDescription: string
  mechanism: string
  primaryCircuit: string
  scientificNuance: string
  clinicalCaveat: string
}

export const neurotransmitters: Neurotransmitter[] = [
  {
    id: 'dopamine',
    name: 'Dopamine',
    class: 'Catecholamine / Monoamine',
    icon: 'zap',
    color: '#B9FF43',
    shortDescription: 'Incentive salience, motivation, anticipatory drive, wanting, and cue-conditioned learning.',
    primaryCircuit: 'Mesolimbic pathway: Ventral Tegmental Area (VTA) → Nucleus Accumbens (NAc) → Medial Prefrontal Cortex (mPFC)',
    mechanism:
      'Dopamine neurons in the VTA fire phasically in response to salient sexual cues, generating an intense neurochemical vector of "wanting" (incentive salience). Dopamine does not generate the hedonic pleasure of consummation itself; rather, it creates the irresistible gravitational pull to seek, pursuit, and prioritize immediate acquisition.',
    scientificNuance:
      'Dopamine is fundamentally NOT the "pleasure chemical." Decades of optogenetic and neurochemical research prove dopamine drives the tension of anticipation and pursuit. High dopamine during an urge makes the anticipated outcome seem overwhelmingly urgent and vital, regardless of whether the actual outcome delivers real peace.',
    clinicalCaveat:
      'Compulsive digital consumption continuously hijacks dopamine prediction errors with novel visual stimuli, establishing persistent learned associations that resist passive willpower unless interrupted by environmental changes.',
  },
  {
    id: 'serotonin',
    name: 'Serotonin (5-HT)',
    class: 'Indolamine / Monoamine',
    icon: 'waves',
    color: '#78D957',
    shortDescription: 'Modulates emotional mood, impulse control, satiety, and tonic inhibition of sexual reflexes.',
    primaryCircuit: 'Dorsal and median raphe nuclei projecting extensively throughout the forebrain, hypothalamus, and spinal cord',
    mechanism:
      'Serotonergic neurotransmission through specific receptor subtypes (principally 5-HT2A and 5-HT1A) acts as a homeostatic dampener on sexual arousal and ejaculation. Elevated serotonin signaling enhances prefrontal inhibitory control over subcortical impulsive drives.',
    scientificNuance:
      'The role of serotonin is modulatory and circuit-dependent rather than a blunt on/off switch. For example, Selective Serotonin Reuptake Inhibitors (SSRIs) frequently cause sexual side effects (delayed orgasm, blunted libido) precisely because elevated synaptic serotonin inhibits spinal and hypothalamic sexual response pathways.',
    clinicalCaveat:
      'Serotonin supports long-term emotional stability and impulse governance, but cannot be treated as an isolated lever without systemic psychiatric evaluation.',
  },
  {
    id: 'norepinephrine',
    name: 'Norepinephrine',
    class: 'Catecholamine / Monoamine',
    icon: 'activity',
    color: '#E5C07B',
    shortDescription: 'Attentional alerting, vigilance, physiological arousal, sympathetic tachycardia, and acute readiness.',
    primaryCircuit: 'Locus coeruleus projecting to the thalamus, cortex, limbic structures, and sympathetic autonomic ganglia',
    mechanism:
      'Synthesized from dopamine by dopamine beta-hydroxylase. Releases rapidly during the initial perception of an appetitive or sexually charged cue, triggering sympathetic nervous system activation: dilated pupils, accelerated heart rate, blood pressure shifts, and acute narrowing of perceptual focus onto the stimulus.',
    scientificNuance:
      'Norepinephrine provides the physiological "tunnel vision" and physical urgency that accompanies intense desire. It primes the body for immediate action by suppressing extraneous background cognitive processing.',
    clinicalCaveat:
      'Because norepinephrine heightens autonomic arousal, slowing down breathing (parasympathetic activation) is an immediate physiological countermeasure to dampen runaway acute impulses.',
  },
  {
    id: 'endogenous-opioids',
    name: 'Endogenous Opioids',
    class: 'Neuropeptide family (Endorphins, Enkephalins, Dynorphins)',
    icon: 'circle-dot',
    color: '#244B2D',
    shortDescription: 'Sensory pleasure, consummatory reward, analgesia, and post-orgasmic psychological contentment.',
    primaryCircuit: 'Mu (μ), delta (δ), and kappa (κ) opioid receptor networks in the Nucleus Accumbens shell and ventral pallidum',
    mechanism:
      'While dopamine drives the "wanting" (craving and pursuit), endogenous opioids mediate the hedonic "liking" (the genuine sensory pleasure experienced during physical gratification). Activation of mu-opioid receptors within hedonic hotspots in the nucleus accumbens creates sensations of warm contentment, pain relief, and subjective peace.',
    scientificNuance:
      'In compulsive behaviors, a severe dissociation frequently occurs between "wanting" (hyperactive dopamine response) and "liking" (blunted opioid hedonic response). The individual feels an agonizing urge to consume, but experiences little genuine joy when they do.',
    clinicalCaveat:
      'Understanding this distinction prevents people from chasing endless dopamine spikes under the false belief that more consumption will finally produce satisfying opioid contentment.',
  },
  {
    id: 'endocannabinoids',
    name: 'Endocannabinoids',
    class: 'Retrograde lipid neuromodulators (Anandamide & 2-AG)',
    icon: 'leaf',
    color: '#78D957',
    shortDescription: 'Retrograde synaptic modulation, sensory enhancement, stress buffering, and homeostatic plasticity.',
    primaryCircuit: 'CB1 receptors densely localized on presynaptic GABAergic and glutamatergic terminals across the brain',
    mechanism:
      'Lipid messengers synthesized on demand in postsynaptic neurons that travel backward across the synapse to activate presynaptic CB1 receptors, transiently dampening neurotransmitter release. They calibrate sensitivity to sensory stimuli, enhance tactile and auditory perception, and regulate reward valuation.',
    scientificNuance:
      'Endocannabinoids interact bidirectionally with both dopamine and opioid signaling. Moderate signaling facilitates relaxation and subjective sensory intimacy, while dysregulation can impair fear extinction and reinforce stress-induced craving patterns.',
    clinicalCaveat:
      'Endocannabinoid tone is profoundly shaped by baseline lifestyle factors: aerobic cardiovascular exercise, omega-3 fatty acid intake, and regular sleep rhythms.',
  },
]
