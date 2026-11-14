interface QuoteBlockProps {
  quote: string
  attribution?: string
  accent?: string
  className?: string
}

export default function QuoteBlock({
  quote,
  attribution,
  accent = '#B9FF43',
  className = '',
}: QuoteBlockProps) {
  return (
    <blockquote
      className={`my-14 rounded-lg border-l-2 bg-[#101810]/70 backdrop-blur-sm p-6 sm:p-8 transition-colors ${className}`}
      style={{ borderLeftColor: accent }}
    >
      <p className="font-sans text-xl sm:text-2xl leading-relaxed text-[#F2F5EF] font-normal">
        &ldquo;{quote}&rdquo;
      </p>
      {attribution && (
        <cite className="mt-4 block font-mono text-xs not-italic uppercase tracking-wider text-[#A0AAA0]">
          — {attribution}
        </cite>
      )}
    </blockquote>
  )
}
