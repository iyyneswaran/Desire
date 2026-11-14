'use client'

import { useState } from 'react'
import { useActiveSection } from '@/hooks/useActiveSection'

const navLinks = [
  { label: 'Explore', href: '#understanding' },
  { label: 'The Brain', href: '#brain' },
  { label: 'Consequences', href: '#consequences' },
  { label: 'Self-Mastery', href: '#self-mastery' },
  { label: 'References', href: '#references' },
]

export default function Navbar() {
  const active = useActiveSection(['hero', 'understanding', 'neurochemistry', 'brain', 'consequences', 'case-study', 'self-regulation', 'self-mastery', 'references'])
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#050705]/85 backdrop-blur-md transition-all">
      <div className="mx-auto flex max-w-[1320px] items-center justify-between px-6 sm:px-12 py-3.5">
        {/* Brand Wordmark */}
        <a href="#hero" className="flex items-center gap-2 group">
          <span className="font-sans text-xl font-bold tracking-tight text-[#F2F5EF] group-hover:text-white transition-colors">
            LUST<span className="text-[#B9FF43]">.</span>
          </span>
          <span className="hidden lg:inline-block font-mono text-[10px] uppercase tracking-widest text-[#687368] border-l border-white/10 pl-3">
            Science of Desire
          </span>
        </a>

        {/* Center Navigation Links */}
        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = active === sectionId
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-sans text-xs tracking-wide transition-colors py-1 ${
                  isActive
                    ? 'text-[#B9FF43] font-medium border-b border-[#B9FF43]'
                    : 'text-[#A0AAA0] hover:text-[#F2F5EF]'
                }`}
              >
                {link.label}
              </a>
            )
          })}
        </div>

        {/* Status Indicator & Right CTA */}
        <div className="flex items-center gap-4">
          <div className="hidden xl:flex items-center gap-2 font-mono text-[11px] text-[#A0AAA0] bg-[#101810] px-3 py-1.5 rounded border border-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] shadow-[0_0_8px_#B9FF43]" />
            <span>INTERACTIVE EXHIBIT</span>
          </div>

          <a
            href="#neurochemistry"
            className="inline-flex items-center justify-center bg-[#B9FF43] hover:bg-[#a6ec34] text-[#050705] font-sans font-medium text-xs px-4 py-2 rounded transition-colors shadow-[0_0_20px_-5px_rgba(185,255,67,0.4)]"
          >
            Explore Science
          </a>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#A0AAA0] hover:text-[#F2F5EF] p-1"
            aria-label="Toggle navigation"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0A100B] px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-sans text-sm text-[#A0AAA0] hover:text-[#B9FF43] py-1"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
