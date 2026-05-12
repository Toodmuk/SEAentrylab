import { AnimateIn } from "@/components/animate-in"

export function Problem() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <AnimateIn delay={0}>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
            The Problem
          </p>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Market entry research shouldn&apos;t cost $50,000 or take 3 months.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Most foreign brands either overpay for Big Three consulting firms,
            rely on fragmented Google searches, or skip research entirely and
            launch blind. None of those options set you up to win.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
