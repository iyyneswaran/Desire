export interface Reference {
  id: number
  category: string
  title: string
  authors: string
  journal: string
  year: string
  doi: string
  url: string
  note: string
}

export const references: Reference[] = [
  {
    id: 1,
    category: 'Neuroscience and Reward',
    title: 'Liking, Wanting, and the Incentive-Sensitization Theory of Addiction',
    authors: 'Berridge KC, Robinson TE',
    journal: 'American Psychologist',
    year: '2016',
    doi: '10.1037/amp0000059',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26879507/',
    note: '',
  },
  {
    id: 2,
    category: 'Neuroscience and Reward',
    title: 'Drugs, Brains, and Behavior: The Science of Addiction',
    authors: 'National Institute on Drug Abuse',
    journal: 'NIDA Publication',
    year: '2020',
    doi: '',
    url: 'https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction',
    note: '',
  },
  {
    id: 3,
    category: 'Sexual Behaviour and Compulsivity',
    title: 'Compulsive Sexual Behaviour Disorder (6C72)',
    authors: 'World Health Organization',
    journal: 'ICD-11',
    year: '2022',
    doi: '',
    url: 'https://icd.who.int/browse/2024-01/mms/en#1630268048',
    note: '',
  },
  {
    id: 4,
    category: 'Sexual Behaviour and Compulsivity',
    title: 'Compulsive sexual behaviour disorder in the ICD-11',
    authors: 'Kraus SW, Krueger RB, Briken P, et al.',
    journal: 'World Psychiatry',
    year: '2018',
    doi: '10.1002/wps.20499',
    url: 'https://pubmed.ncbi.nlm.nih.gov/29352554/',
    note: '',
  },
  {
    id: 5,
    category: 'Hormones and Sexual Desire',
    title: 'Testosterone and Sexual Desire in Healthy Women and Men',
    authors: 'Roney JR, Simmons ZL',
    journal: 'Hormones and Behavior',
    year: '2013',
    doi: '',
    url: 'https://pubmed.ncbi.nlm.nih.gov/',
    note: 'Multiple studies explore testosterone-desire relationships; this represents a body of research rather than a single definitive study.',
  },
  {
    id: 6,
    category: 'Hormones and Sexual Desire',
    title: 'The role of estradiol in male reproductive function',
    authors: 'Schulster M, Bernie AM, Ramasamy R',
    journal: 'Asian Journal of Andrology',
    year: '2016',
    doi: '10.4103/1008-682X.173932',
    url: 'https://pubmed.ncbi.nlm.nih.gov/26908066/',
    note: '',
  },
  {
    id: 7,
    category: 'Self-Regulation and Therapy',
    title: 'Mindfulness-Based Relapse Prevention for Addictive Behaviors',
    authors: 'Bowen S, Chawla N, Marlatt GA',
    journal: 'Guilford Press',
    year: '2011',
    doi: '',
    url: 'https://www.guilford.com/books/Mindfulness-Based-Relapse-Prevention/Bowen-Chawla-Marlatt/9781462545537',
    note: 'While focused on substance use, principles of mindfulness-based approaches have been adapted for behavioural regulation.',
  },
  {
    id: 8,
    category: 'Self-Regulation and Therapy',
    title: 'Acceptance and Commitment Therapy: Model, processes and outcomes',
    authors: 'Hayes SC, Luoma JB, Bond FW, et al.',
    journal: 'Behaviour Research and Therapy',
    year: '2006',
    doi: '10.1016/j.brat.2005.06.006',
    url: 'https://pubmed.ncbi.nlm.nih.gov/16300724/',
    note: '',
  },
  {
    id: 9,
    category: 'Jensen Huang Case Study',
    title: 'Jensen Huang\'s message to family and NVIDIA employees',
    authors: 'NVIDIA Corporation',
    journal: 'Corporate Communication',
    year: '2026',
    doi: '',
    url: 'https://nvidianews.nvidia.com/',
    note: 'Official public statement acknowledging personal conduct.',
  },
  {
    id: 10,
    category: 'Jensen Huang Case Study',
    title: 'NVIDIA Board announces independent investigation',
    authors: 'NVIDIA Corporation',
    journal: 'Press Release',
    year: '2026',
    doi: '',
    url: 'https://nvidianews.nvidia.com/',
    note: 'Board stated no reason to believe NVIDIA secrets or national security were compromised at that time.',
  },
  {
    id: 11,
    category: 'Jensen Huang Case Study',
    title: 'NVIDIA CEO transition announcement',
    authors: 'NVIDIA Corporation',
    journal: 'Press Release / SEC Form 8-K',
    year: '2026',
    doi: '',
    url: 'https://www.sec.gov/cgi-bin/browse-edgar?action=getcompany&CIK=1045810',
    note: 'Huang\'s resignation accepted; Colette Kress appointed interim CEO.',
  },
  {
    id: 12,
    category: 'Jensen Huang Case Study',
    title: 'Reuters reporting on Jensen Huang\'s conduct',
    authors: 'Reuters',
    journal: 'News Report',
    year: '2026',
    doi: '',
    url: 'https://www.reuters.com/',
    note: 'Reported, citing sources and internal correspondence, that Huang misled company leaders. Reuters noted it could not independently verify all intelligence-related allegations.',
  },
]

export interface ReferenceCategory {
  name: string
  references: Reference[]
}

export const referencesByCategory: ReferenceCategory[] = [
  ...references
    .reduce((acc, ref) => {
      const existing = acc.find((c) => c.name === ref.category)
      if (existing) {
        existing.references.push(ref)
      } else {
        acc.push({ name: ref.category, references: [ref] })
      }
      return acc
    }, [] as ReferenceCategory[]),
]
