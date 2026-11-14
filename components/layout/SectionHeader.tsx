interface SectionHeaderProps {
  number: string
  category: string
  title: string
  subtitle?: string
  id?: string
  accent?: string
  className?: string
}

export default function SectionHeader({
  number,
  category,
  title,
  subtitle,
  id,
  accent = '#B9FF43',
  className = '',
}: SectionHeaderProps) {
  return (
    <header id={id} className={`mx-auto max-w-[1320px] px-6 sm:px-12 pt-28 pb-12 ${className}`}>
      <div className="mb-6 flex items-center gap-3">
        <span
          className="inline-flex items-center justify-center font-mono text-xs font-semibold px-2 py-0.5 rounded border border-white/10 bg-[#101810]"
          style={{ color: accent }}
        >
          {number}
        </span>
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#A0AAA0]">
          {category}
        </span>
        <div className="h-px flex-1 bg-white/10 max-w-[120px]" />
      </div>
      <h2 className="max-w-4xl font-sans text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-[#F2F5EF] leading-[1.15]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 max-w-3xl font-sans text-lg sm:text-xl text-[#A0AAA0] leading-relaxed">
          {subtitle}
        </p>
      )}
    </header>
  )
}
