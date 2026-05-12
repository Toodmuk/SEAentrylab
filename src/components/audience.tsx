import { AnimateIn } from "@/components/animate-in"

const audiences = [
  {
    title: "Brand Founders & Commercial Directors",
    body: "Evaluating Thailand or SEA entry for the first time. You need real data, not a 200-slide deck. You need to know if this market is worth your capital.",
  },
  {
    title: "Boutique Consulting Firms",
    body: "Your client asked about Southeast Asia and you need a research partner on the ground. White-label ready. Your branding, my research.",
  },
  {
    title: "Investors & Analysts",
    body: "Sizing SEA opportunities for due diligence, investment committee papers, or portfolio company support. Fast turnaround, credible sourcing.",
  },
  {
    title: "Agencies & Distributors",
    body: "Your clients keep asking about Thailand. Instead of guessing, hand them a professional market assessment from someone who actually lives here.",
  },
]

export function Audience() {
  return (
    <section className="bg-slate-50 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <AnimateIn delay={0}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
              Who This Is For
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Built for people making real market entry decisions.
            </h2>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {audiences.map((item, i) => (
            <AnimateIn key={item.title} delay={i * 0.12}>
              <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-xl hover:border-emerald-500/50 transition-all duration-300 h-full">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
