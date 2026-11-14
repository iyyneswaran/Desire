export interface MythFact {
  id: number
  myth: string
  fact: string
  explanation: string
  source: string
  category: string
}

export const myths: MythFact[] = [
  {
    id: 1,
    myth: 'Dopamine is simply the "pleasure chemical" of the brain.',
    fact: 'Dopamine primarily encodes wanting, motivation, and anticipation — not hedonic pleasure.',
    explanation:
      'Pioneering neuroscience by Berridge, Robinson, and Schultz demonstrated that dopamine mediates incentive salience ("wanting") and reward prediction error. Endogenous opioids and endocannabinoids mediate the actual sensory enjoyment ("liking"). When you experience intense desire, dopamine fuels the relentless urge to seek and acquire, even if the subsequent reward produces little genuine satisfaction.',
    source: 'Berridge & Robinson (2016), American Psychologist; Schultz (2015), Physiological Reviews',
    category: 'Neuroscience',
  },
  {
    id: 2,
    myth: 'All sexual desire is lust, and desire is inherently destructive.',
    fact: 'Desire is an evolutionary survival drive; lust becomes problematic only when it overrides autonomy and values.',
    explanation:
      'Human sexual desire is a healthy biological drive coordinated by neuroendocrine circuits that motivate intimacy, reproduction, and emotional bonding. It becomes harmful or compulsive when it reduces other people to instruments of gratification (objectification), bypasses informed consent, or persists compulsively despite significant damage to one’s life, relationships, and self-respect.',
    source: 'World Health Organization (ICD-11, 2022); Bancroft (2009), Human Sexuality and Its Problems',
    category: 'Psychology',
  },
  {
    id: 3,
    myth: 'Physical exercise completely eliminates sexual desire.',
    fact: 'Moderate exercise optimizes endocrine health; it channels physical energy and reduces stress, but does not shut off libido.',
    explanation:
      'Regular physical activity modulates cortisol, enhances circulation, and improves mood regulation through endorphin and neurotrophin release. While extreme athletic overtraining can suppress the hypothalamic-pituitary-gonadal axis, healthy exercise supports normal endocrine balance. Its value in self-mastery lies in healthy energy redirection and stress reduction, not physiological castration.',
    source: 'British Journal of Sports Medicine; Hackney (2017), Journal of Endocrinology',
    category: 'Physiology',
  },
  {
    id: 4,
    myth: 'Masturbation permanently depletes testosterone and ruins focus forever.',
    fact: 'Ejaculation causes short-lived hormonal fluctuations that normalize rapidly; there is no permanent depletion.',
    explanation:
      'Clinical studies show that testosterone levels fluctuate temporarily around sexual activity and return to baseline within hours or days. Claims promoted in certain online communities that ejaculation causes permanent physical depletion or hormonal ruin are scientifically unfounded. The genuine risk of compulsive habits is psychological conditioning and time displacement, not endocrine destruction.',
    source: 'Endocrine Reviews; Exton et al. (2001), World Journal of Urology',
    category: 'Endocrinology',
  },
  {
    id: 5,
    myth: 'Having frequent sexual thoughts automatically means you have an addiction.',
    fact: 'Thought frequency alone is not a disorder; clinical impairment requires loss of control and functional harm.',
    explanation:
      'Under the WHO ICD-11 diagnostic criteria for Compulsive Sexual Behaviour Disorder (6C72), diagnosis requires persistent failure to control intense sexual impulses resulting in repetitive sexual behaviour that causes marked distress or impairment in personal, family, social, educational, or occupational areas over 6+ months. Distress related solely to moral judgment or religious guilt is explicitly excluded.',
    source: 'World Health Organization (ICD-11, 2022); Kraus et al. (2018), World Psychiatry',
    category: 'Clinical Diagnosis',
  },
]
