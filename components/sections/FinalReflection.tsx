'use client'

import { useState } from 'react'
import { ArrowUp, BookOpen } from 'lucide-react'

const philosophicalOptions: Record<string, { summary: string; analysis: string }> = {
  Impulse: {
    summary: 'Surrendering executive governance to subcortical dopamine spikes.',
    analysis:
      'Allowing temporary limbic surges to dictate action reduces you to a passive reflex machine. It sacrifices years of compound trust, deep work, and long-term self-respect for 90 seconds of fleeting tension relief.',
  },
  You: {
    summary: 'Exercising conscious prefrontal sovereignty through the pause.',
    analysis:
      'You acknowledge the raw biological drive without panicking or obeying it. You step into the urge-to-action gap, consult your deepest internalized values, and choose deliberately who you want to become.',
  },
}

export default function FinalReflection() {
  const [chosenAnswer, setChosenAnswer] = useState<string | null>('You')

  return (
    <section id="final-reflection" className="relative py-28 bg-[#050705] overflow-hidden">
      
      {/* Subtle atmospheric glow spotlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B9FF43]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1080px] px-6 sm:px-12 text-center space-y-16">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-[#101810]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#B9FF43] shadow-[0_0_8px_#B9FF43]" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A0AAA0]">
            15 &middot; Final Reflection
          </span>
        </div>

        {/* Closing Master Headline */}
        <div className="space-y-6">
          <h2 className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#F2F5EF] leading-[1.08]">
            Desire is powerful.{' '}
            <span className="block text-gradient-lime">
              But it does not have to be in control.
            </span>
          </h2>

          <p className="max-w-2xl mx-auto font-sans text-lg sm:text-xl text-[#A0AAA0] leading-relaxed">
            Awareness gives you a pause. Your values give that pause direction. Your actions shape the person you become.
          </p>
        </div>

        {/* Interactive Philosophical Culmination Card */}
        <div className="rounded-2xl border border-white/10 bg-[#101810]/80 backdrop-blur-xl p-8 sm:p-12 text-left space-y-8 shadow-2xl">
          <div className="text-center space-y-2">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B9FF43]">
              The Ultimate Question
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#F2F5EF]">
              When your next impulse appears, who will make the decision — the impulse or you?
            </h3>
          </div>

          {/* Choice Switcher */}
          <div className="flex justify-center gap-4">
            {['The Impulse', 'You'].map((opt) => {
              const isSelected = chosenAnswer === (opt === 'The Impulse' ? 'Impulse' : 'You')
              const key = opt === 'The Impulse' ? 'Impulse' : 'You'

              return (
                <button
                  key={opt}
                  onClick={() => setChosenAnswer(key)}
                  className={`font-sans text-sm sm:text-base font-medium px-8 py-4 rounded-xl border transition-all ${
                    isSelected
                      ? key === 'You'
                        ? 'border-[#B9FF43] bg-[#172019] text-[#B9FF43] shadow-[0_0_25px_-5px_rgba(185,255,67,0.3)]'
                        : 'border-[#FF5C5C] bg-[#201010] text-[#FF5C5C]'
                      : 'border-white/10 bg-[#050705] text-[#A0AAA0] hover:border-white/20'
                  }`}
                >
                  {opt}
                </button>
              )
            })}
          </div>

          {/* Dynamic Philosophical Reflection */}
          {chosenAnswer && (
            <div className="rounded-xl bg-[#050705] p-6 sm:p-8 border border-white/10 space-y-3">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#B9FF43]">
                  The Trajectory of Choosing {chosenAnswer === 'You' ? 'Self-Mastery' : 'Automatic Reaction'}
                </span>
              </div>
              <p className="font-sans text-lg font-semibold text-[#F2F5EF]">
                {philosophicalOptions[chosenAnswer].summary}
              </p>
              <p className="font-sans text-sm sm:text-base text-[#A0AAA0] leading-relaxed">
                {philosophicalOptions[chosenAnswer].analysis}
              </p>
            </div>
          )}
        </div>

        {/* Final Affirmation Callout Box */}
        <div className="border-l-4 border-[#B9FF43] bg-[#101810] py-6 px-8 rounded-r-xl text-left max-w-2xl mx-auto">
          <p className="font-sans text-xl sm:text-2xl text-[#F2F5EF] leading-relaxed font-normal">
            &ldquo;You don&apos;t have to eliminate desire. You have to learn to govern it.&rdquo;
          </p>
          <span className="mt-3 block font-mono text-xs text-[#A0AAA0] uppercase tracking-wider">
            LUST. &middot; The Science of Desire &amp; Self-Mastery
          </span>
        </div>

        {/* Bottom Fast Navigation Links */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#references"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-[#B9FF43]/50 bg-[#101810] text-[#F2F5EF] font-sans text-sm px-6 py-3 rounded-lg transition-all"
          >
            <BookOpen size={16} className="text-[#B9FF43]" />
            <span>Consult Scientific References</span>
          </a>
          <a
            href="#hero"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-white/30 bg-[#050705] text-[#A0AAA0] hover:text-white font-sans text-sm px-6 py-3 rounded-lg transition-all"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </a>
        </div>

      </div>
    </section>
  )
}
