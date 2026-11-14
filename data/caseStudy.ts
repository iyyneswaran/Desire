export interface TimelineEvent {
  date: string
  title: string
  description: string
  sourceType: 'confirmed' | 'corporate' | 'reported' | 'unverified' | 'analysis'
  sourceLabel: string
}

export interface DiscussionQuestion {
  id: number
  question: string
  context: string
}

export interface CaseStudyData {
  background: string[]
  timeline: TimelineEvent[]
  questions: DiscussionQuestion[]
  takeaway: string
  accuracyNote: string
}

export const caseStudy: CaseStudyData = {
  background: [
    'NVIDIA was founded in 1993 by Jensen Huang, Chris Malachowsky and Curtis Priem.',
    'Huang served as NVIDIA\'s longtime CEO, leading the company for over three decades.',
    'He played a central role in transforming NVIDIA into a major GPU and AI-computing company.',
    'NVIDIA\'s CUDA platform and investment in accelerated computing became important parts of that transformation.',
    'By 2026, NVIDIA had become one of the most valuable companies in the world, central to the global AI infrastructure.',
  ],
  timeline: [
    {
      date: 'November 8, 2026',
      title: 'Public acknowledgment',
      description:
        'Huang issued a message apologising to his family and NVIDIA employees, acknowledging that he had been unfaithful to his wife. NVIDIA\'s board announced an independent investigation following reporting about a potential foreign intelligence effort. The board stated that it had no reason to believe NVIDIA secrets or national security had been compromised at that time.',
      sourceType: 'confirmed',
      sourceLabel: 'NVIDIA official statement',
    },
    {
      date: 'November 10, 2026',
      title: 'Independent counsel retained',
      description:
        'NVIDIA\'s independent directors announced that outside legal counsel had been retained to conduct the investigation into the matter.',
      sourceType: 'corporate',
      sourceLabel: 'NVIDIA board announcement',
    },
    {
      date: 'November 11–12, 2026',
      title: 'CEO resignation',
      description:
        'NVIDIA accepted and announced Huang\'s resignation as President, CEO and board member, effective immediately. CFO Colette Kress was appointed interim CEO.',
      sourceType: 'corporate',
      sourceLabel: 'NVIDIA press release / SEC Form 8-K',
    },
    {
      date: 'November 14, 2026',
      title: 'Reuters investigation published',
      description:
        'Reuters reported, citing sources and internal correspondence it reviewed, that Huang had misled company leaders about the nature of his relationship with businesswoman Alice Huang. Reuters noted it could not independently verify intelligence-related allegations.',
      sourceType: 'reported',
      sourceLabel: 'Reuters reporting',
    },
  ],
  questions: [
    {
      id: 1,
      question: 'Can someone be exceptionally disciplined professionally but irresponsible personally?',
      context:
        'Huang built NVIDIA into one of the most important technology companies in the world over 30 years. His professional discipline was extraordinary. Yet personal decisions led to his departure.',
    },
    {
      id: 2,
      question: 'Does professional success guarantee personal wisdom?',
      context:
        'Exceptional ability in one domain does not necessarily transfer to judgment in personal or relational matters.',
    },
    {
      id: 3,
      question: 'How can personal relationships create conflicts of interest in a corporation?',
      context:
        'When a CEO\'s personal relationships intersect with business interests, governance, trust and institutional integrity can all be affected.',
    },
    {
      id: 4,
      question: 'Why does leadership require trust and accountability?',
      context:
        'Leaders represent not just themselves but employees, shareholders and stakeholders who depend on their judgment.',
    },
    {
      id: 5,
      question: 'Can a person\'s personal choices affect employees, families and shareholders?',
      context:
        'NVIDIA\'s stock, employee morale and public reputation were all affected by events triggered by personal conduct.',
    },
    {
      id: 6,
      question: 'Does losing a professional position erase decades of technological achievements?',
      context:
        'Huang\'s contributions to GPU computing and AI remain significant regardless of personal events. But the consequences of personal decisions exist alongside those achievements.',
    },
  ],
  takeaway:
    'Building an empire requires extraordinary ability. Protecting that empire requires extraordinary judgment.',
  accuracyNote:
    'This case study distinguishes between confirmed public statements, official corporate announcements, allegations reported by journalists and our interpretive analysis. Alice Huang has not been definitively proven to be a foreign intelligence operative — Reuters reported it could not independently verify that allegation. NVIDIA\'s board stated it had no reason to believe secrets or national security were compromised. We do not claim that lust alone caused Huang\'s resignation; the case involves multiple dimensions including acknowledged infidelity, reported workplace relationships, possible governance conflicts and national-security scrutiny.',
}
