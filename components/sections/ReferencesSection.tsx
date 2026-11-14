'use client'

import { useState } from 'react'
import SectionHeader from '@/components/layout/SectionHeader'
import { referencesByCategory, references } from '@/data/references'
import { ExternalLink, ShieldCheck, Search } from 'lucide-react'

export default function ReferencesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState<string>('')

  const categories = ['All', ...referencesByCategory.map((c) => c.name)]

  const filteredReferences = references.filter((ref) => {
    const matchesCategory = selectedCategory === 'All' || ref.category === selectedCategory
    const matchesSearch =
      ref.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.authors.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ref.journal.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="references" className="relative py-20 bg-[#050705]">
      <SectionHeader
        number="16"
        category="Scholarly Bibliography"
        title="Scientific references &amp; citations."
        subtitle="Every physiological and neurobiological claim in this educational project is grounded in peer-reviewed literature, clinical diagnostic manuals, or verified institutional statements."
      />

      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 space-y-12">
        
        {/* Verification & Methodological Distinction Notice */}
        <div className="rounded-xl border border-white/10 bg-[#101810]/70 p-6 flex items-start gap-4">
          <div className="p-2.5 rounded bg-[#B9FF43]/10 text-[#B9FF43] shrink-0 mt-0.5">
            <ShieldCheck size={20} />
          </div>
          <div className="space-y-1 text-sm sm:text-base font-sans">
            <h4 className="font-semibold text-[#F2F5EF]">
              Distinguishing Empirical Evidence from Educational Synthesis
            </h4>
            <p className="text-[#A0AAA0] leading-relaxed">
              We clearly distinguish between established empirical facts (such as the WHO ICD-11 diagnostic criteria or Berridge&apos;s incentive salience theory) and simplified educational analogies designed for university presentations. All citations cite verified academic sources or primary public records.
            </p>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-xs px-3.5 py-1.5 rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'border-[#B9FF43] bg-[#172019] text-[#B9FF43]'
                    : 'border-white/10 bg-[#101810] text-[#A0AAA0] hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#687368]" />
            <input
              type="text"
              placeholder="Search references..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#101810] border border-white/10 rounded-lg pl-9 pr-3 py-2 font-mono text-xs text-[#F2F5EF] placeholder:text-[#687368] focus:border-[#B9FF43] focus:outline-none"
            />
          </div>
        </div>

        {/* References List */}
        <div className="space-y-4">
          {filteredReferences.map((ref) => (
            <div
              key={ref.id}
              className="rounded-xl border border-white/10 bg-[#101810] p-6 sm:p-8 space-y-3 hover:border-white/20 transition-all"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#B9FF43] bg-[#050705] px-2 py-1 rounded border border-white/10">
                    [{ref.id < 10 ? `0${ref.id}` : ref.id}]
                  </span>
                  <span className="font-mono text-xs text-[#78D957]">
                    {ref.category}
                  </span>
                </div>
                <span className="font-mono text-xs text-[#687368]">
                  {ref.year}
                </span>
              </div>

              <div>
                <h4 className="font-sans text-base sm:text-lg font-semibold text-[#F2F5EF]">
                  {ref.title}
                </h4>
                <p className="font-sans text-sm text-[#A0AAA0] mt-1">
                  {ref.authors} &middot; <em className="text-[#F2F5EF]/80">{ref.journal}</em>
                </p>
              </div>

              {ref.note && (
                <p className="font-sans text-xs text-[#A0AAA0] leading-relaxed bg-[#050705] p-3 rounded border border-white/5">
                  <strong className="text-[#E5C07B] font-mono">Scholarly Note: </strong>
                  {ref.note}
                </p>
              )}

              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono">
                {ref.doi && (
                  <a
                    href={`https://doi.org/${ref.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#B9FF43] hover:underline"
                  >
                    <span>DOI: {ref.doi}</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#A0AAA0] hover:text-[#F2F5EF] hover:underline"
                  >
                    <span>Source Repository</span>
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}

          {filteredReferences.length === 0 && (
            <div className="text-center py-12 text-[#687368] font-mono text-sm">
              No references matched your search criteria.
            </div>
          )}
        </div>

        {/* Ethical Footer Notice */}
        <div className="pt-8 border-t border-white/10 text-xs font-sans text-[#687368] space-y-2 leading-relaxed">
          <p>
            This website is strictly an educational digital exhibit created for collegiate seminars on neuroscience, behavioral psychology, and self-mastery. 
            It does not constitute formal medical diagnosis or psychiatric therapy.
          </p>
          <p>
            If you or someone you know is experiencing clinical distress related to compulsive sexual behaviors or mood dysregulation, please reach out to licensed mental health professionals or university psychological services.
          </p>
        </div>

      </div>
    </section>
  )
}
