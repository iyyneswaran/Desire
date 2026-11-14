'use client'

import { ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-white/10 bg-[#050705] relative z-10">
      <div className="mx-auto max-w-[1320px] px-6 sm:px-12 py-16 space-y-12">
        
        {/* Top Row: Brand & Quick Navigation */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="space-y-3">
            <a href="#hero" className="flex items-center gap-2">
              <span className="font-sans text-2xl font-bold tracking-tight text-[#F2F5EF]">
                LUST<span className="text-[#B9FF43]">.</span>
              </span>
            </a>
            <p className="font-sans text-sm text-[#A0AAA0] max-w-md">
              The Science of Desire &amp; Self-Mastery. An interactive university exhibit exploring neurochemistry, executive control, and behavioral sovereignty.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-[#A0AAA0]">
            <a href="#understanding" className="hover:text-[#B9FF43] transition-colors">Taxonomy</a>
            <a href="#neurochemistry" className="hover:text-[#B9FF43] transition-colors">Neurochemistry</a>
            <a href="#brain" className="hover:text-[#B9FF43] transition-colors">Brain Model</a>
            <a href="#self-regulation" className="hover:text-[#B9FF43] transition-colors">Interventions</a>
            <a href="#references" className="hover:text-[#B9FF43] transition-colors">References</a>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 p-2 rounded-lg bg-[#101810] border border-white/10 text-[#F2F5EF] hover:border-[#B9FF43] transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Ethics Disclaimer & Copyright */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-[#687368]">
          <p>
            &copy; 2026 LUST. &middot; Designed for Academic &amp; Collegiate Awareness Seminars.
          </p>
          <p className="font-mono text-[11px]">
            &ldquo;You don&apos;t have to eliminate desire. You have to learn to govern it.&rdquo;
          </p>
        </div>

      </div>
    </footer>
  )
}
