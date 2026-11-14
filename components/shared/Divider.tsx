export default function Divider({ className = '' }: { className?: string }) {
  return (
    <div className={`mx-auto max-w-[1320px] px-6 sm:px-12 ${className}`}>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
  )
}
