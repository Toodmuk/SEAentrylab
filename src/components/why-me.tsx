import { AnimateIn } from "@/components/animate-in"

const reasons = [
  {
    title: "On the ground in Thailand",
    body: "I read Thai-language sources, walk Bangkok pharmacy aisles, and understand local regulatory practice. Desk researchers in London or New York cannot do this.",
  },
  {
    title: "Days, not months",
    body: "Boutique research firms quote 6-10 weeks. McKinsey-style engagements run months. I deliver in 5-15 business days with a tight, focused process.",
  },
  {
    title: "A fraction of the cost",
    body: "Comparable depth from a boutique firm runs $8,000-25,000. From Big Three, $50,000+. My pricing reflects a solo operation with modern tools, not corporate overhead.",
  },
  {
    title: "Honest answers only",
    body: "If a market is bad, I say so. If a competitor is too entrenched to displace, I tell you. I would rather lose a project than sell a report that leads to a bad decision.",
  },
]

export function WhyMe() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <AnimateIn delay={0}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
              Why This Works
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Built different from traditional consulting.
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {reasons.map((r, i) => (
            <AnimateIn key={r.title} delay={i * 0.12}>
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {r.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed max-w-md">
                  {r.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
