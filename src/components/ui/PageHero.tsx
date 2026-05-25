interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
}

export default function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-hero-gradient py-16 px-6 text-center relative overflow-hidden" aria-labelledby="page-hero-title">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0, #fff 1px, transparent 0, transparent 48px), repeating-linear-gradient(90deg, #fff 0, #fff 1px, transparent 0, transparent 48px)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto">
        <p className="section-label text-brand-sky mb-3">{label}</p>
        <h1 id="page-hero-title" className="font-display text-4xl md:text-5xl font-black text-white leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/65 text-base mt-4 leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
