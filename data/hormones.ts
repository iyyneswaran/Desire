export interface Hormone {
  id: string
  name: string
  scientificName: string
  icon: string
  color: string
  role: string[]
  productionSite: string
  relationToDesire: string
  scientificClarification: string
  clinicalLimitations: string
}

export const hormones: Hormone[] = [
  {
    id: 'testosterone',
    name: 'Testosterone',
    scientificName: 'Androgen steroid hormone',
    icon: 'flame',
    color: '#B9FF43',
    role: [
      'Principal modulator of sexual motivation, libido, and sexual receptivity in both men and women',
      'Acts directly on androgen receptors in the medial preoptic area (mPOA) and hypothalamus',
      'Upregulates central dopamine synthesis and receptor sensitivity in reward circuitry',
      'Modulates physical stamina, muscle synthesis, and assertive behavioural tendencies',
    ],
    productionSite: 'Leydig cells of testes (primary male), ovaries (female), and adrenal cortex (both)',
    relationToDesire: 'Establishes the biological baseline tone for sexual appetite and incentive responsiveness.',
    scientificClarification:
      'While low testosterone reliably blunts libido, abnormally high testosterone within physiological ranges does not automatically eliminate impulse control or compel antisocial behaviour. Desire is modulated by complex multi-receptor systems, not a linear single-hormone rheostat.',
    clinicalLimitations:
      'Attempting to self-suppress testosterone to eliminate unwanted lust is clinically dangerous, causing depression, osteoporosis, cognitive deficits, and metabolic collapse. Self-mastery is psychological and behavioral, not chemical self-castration.',
  },
  {
    id: 'estrogen',
    name: 'Estradiol (Estrogen)',
    scientificName: '17β-Estradiol steroid hormone',
    icon: 'sparkles',
    color: '#78D957',
    role: [
      'Modulates vaginal lubrication, tissue trophism, and sexual receptivity in females',
      'Crucial in males for libido regulation, erectile function, and testicular feedback loops',
      'Aromatized locally in the male brain from circulating testosterone to trigger sexual behaviors',
      'Enhances mood, neuroprotection, and serotonergic receptor density',
    ],
    productionSite: 'Ovarian follicles and corpus luteum; in males, converted from testosterone via aromatase in adipose tissue and brain',
    relationToDesire: 'Synergizes with androgens; in females, mid-cycle peaks correlate with heightened subjective sexual interest.',
    scientificClarification:
      'Estradiol is not exclusively a "female hormone." In the male brain, local conversion of testosterone to estradiol by aromatase is indispensable for normal sexual motivation and executive cognitive functioning.',
    clinicalLimitations:
      'Hormone levels fluctuate cyclically and contextually; artificial manipulation of estrogen outside supervised medical endocrinology produces severe mood instability and vascular risk.',
  },
  {
    id: 'prolactin',
    name: 'Prolactin',
    scientificName: 'Pituitary peptide hormone',
    icon: 'droplets',
    color: '#244B2D',
    role: [
      'Synthesized and secreted by lactotroph cells in the anterior pituitary gland',
      'Surges acutely following orgasm, contributing to immediate post-coital satiety and sedation',
      'Involved in the male refractory period (the post-ejaculatory recovery interval)',
      'Exerts negative feedback on the hypothalamic release of gonadotropin-releasing hormone (GnRH)',
    ],
    productionSite: 'Lactotroph cells of the anterior pituitary; secondary production in decidual tissue and immune cells',
    relationToDesire: 'Acts as an acute brake on sexual appetite following climax; chronic elevations induce profound hypoactive desire.',
    scientificClarification:
      'Prolactin functions as a physiological indicator of sexual satiety. However, its post-orgasmic spike is transient. Chronically elevated prolactin (hyperprolactinemia) is a medical pathology requiring diagnostic evaluation, not a lifestyle target.',
    clinicalLimitations:
      'Prolactin cannot be safely or reliably used as an intervention to suppress sexual desire; pathologically high levels cause hypogonadism, galactorrhea, bone loss, and sexual dysfunction.',
  },
  {
    id: 'oxytocin',
    name: 'Oxytocin',
    scientificName: 'Hypothalamic nonapeptide neurohormone',
    icon: 'heart-handshake',
    color: '#E5C07B',
    role: [
      'Synthesized in paraventricular and supraoptic nuclei of the hypothalamus',
      'Released into systemic circulation via the posterior pituitary during skin-to-skin touch and orgasm',
      'Fosters emotional bonding, social recognition, pair-bond consolidation, and interpersonal trust',
      'Modulates empathy, maternal behaviour, and smooth muscle contractions during reproductive acts',
    ],
    productionSite: 'Paraventricular and supraoptic nuclei of the hypothalamus; released by posterior pituitary gland',
    relationToDesire: 'Shifts sexual drive from raw anatomical urge toward emotional bonding, mutual vulnerability, and pair-bonding.',
    scientificClarification:
      'Often pop-psychologized as the "cuddle hormone," oxytocin actually displays complex context-dependent valence. In high-conflict or non-bonded environments, oxytocin can amplify in-group favoritism, out-group defensiveness, and interpersonal distress.',
    clinicalLimitations:
      'Oxytocin does not automatically create healthy relationships. Real-world trust depends on boundary recognition, reciprocal values, and consistent character over time.',
  },
  {
    id: 'cortisol',
    name: 'Cortisol',
    scientificName: 'Glucocorticoid steroid hormone',
    icon: 'alert-circle',
    color: '#FF5C5C',
    role: [
      'Primary effector hormone of the hypothalamic-pituitary-adrenal (HPA) stress axis',
      'Mobilizes glucose, sharpens acute focus, and suppresses non-essential metabolic processes in crisis',
      'Exerts reciprocal inhibitory cross-talk with the hypothalamic-pituitary-gonadal (HPG) reproductive axis',
      'Influences sleep-wake cycles, circadian alertness, and immune inflammatory balance',
    ],
    productionSite: 'Zona fasciculata of the adrenal cortex under stimulation by pituitary ACTH',
    relationToDesire: 'Chronic stress-induced cortisol suppresses baseline libido, yet acute anxiety often drives compulsive escapist sexual urges as temporary self-soothing.',
    scientificClarification:
      'The relationship between stress and sexual desire is bi-directional and nuanced. While physiological stress downregulates biological reproductive vigor, psychological tension frequently drives compulsive urges as a coping mechanism to self-medicate uncomfortable emotional states.',
    clinicalLimitations:
      'Managing cortisol requires lifestyle stabilization — restorative sleep, physical exercise, and psychological boundary-setting — rather than isolated hormonal interventions.',
  },
]
