import { AnimateIn } from "@/components/animate-in"

const CALENDLY_URL = "https://calendly.com/worachit-seaentrylab/discovery-call"

export function FinalCTA() {
  return (
    <section className="bg-white py-32 md:py-40">
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <AnimateIn delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
            Ready to make a confident market entry decision?
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            Tell me about your situation in one sentence. I will respond within
            24 hours.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-3.5 font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            Book a Discovery Call
          </a>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <p className="text-sm text-slate-500 mt-6">
            or email{" "}
            <a
              href="mailto:worachit@seaentrylab.com"
              className="text-slate-700 hover:text-emerald-600 underline-offset-4 hover:underline transition-colors"
            >
              worachit@seaentrylab.com
            </a>
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
