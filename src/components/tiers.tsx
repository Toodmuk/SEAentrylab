"use client"
import { Check } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

const CALENDLY_URL = "https://calendly.com/worachit-seaentrylab/discovery-call"

interface Tier {
  name: string
  price: string
  timeline: string
  deliverable: string
  bullets: string[]
  featured?: boolean
  ctaStyle: "outline" | "solid"
}

const tiers: Tier[] = [
  {
    name: "Market Scan",
    price: "$1,200",
    timeline: "5 business days",
    deliverable: "12-15 page report",
    bullets: [
      "Market size, growth, and segmentation",
      "Top 5-7 competitors with positioning",
      "Consumer demand drivers",
      "Regulatory overview (high-level)",
      "Distribution channel landscape",
      "One-page strategic recommendation",
    ],
    ctaStyle: "outline",
  },
  {
    name: "Market Entry Report",
    price: "$2,800",
    timeline: "10 business days",
    deliverable: "25-35 page report",
    bullets: [
      "Everything in Market Scan, plus:",
      "Detailed regulatory pathway with timelines",
      "Pricing benchmarks across all tiers",
      "Competitive whitespace analysis",
      "Three entry options compared",
      "12-month launch roadmap",
      "Investment summary with cost ranges",
      "Risk assessment with mitigations",
    ],
    featured: true,
    ctaStyle: "solid",
  },
  {
    name: "Deep Dive + Advisory",
    price: "$4,500",
    timeline: "15 business days",
    deliverable: "40+ pages + 2 strategy calls",
    bullets: [
      "Everything in Entry Report, plus:",
      "8-12 potential local partners shortlisted",
      "Competitor deep-dives on up to 3 players",
      "Two 60-minute strategy calls",
      "30 days of follow-up email support",
    ],
    ctaStyle: "outline",
  },
]

export function Tiers() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimateIn delay={0}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
              Services
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Three tiers. Clear scope. Fixed price.
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.2}>
            <p className="text-lg text-slate-500 leading-relaxed">
              No hourly billing. No scope creep. You know exactly what you get
              before you pay.
            </p>
          </AnimateIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 pt-6">
          {tiers.map((tier, i) => (
            <AnimateIn key={tier.name} delay={i * 0.12}>
              <div
                className={`relative rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
                  tier.featured
                    ? "ring-2 ring-emerald-500 bg-emerald-50/30 shadow-xl md:scale-[1.02]"
                    : "bg-white border border-slate-200 hover:shadow-xl hover:border-emerald-500/50"
                }`}
              >
                {tier.featured && (
                  <span className="bg-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap">
                    Most Popular
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    {tier.name}
                  </h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">
                    {tier.price}
                  </div>
                  <div className="text-sm text-slate-500">
                    {tier.timeline} · {tier.deliverable}
                  </div>
                </div>

                <div className="h-px bg-slate-200 mb-6" />

                <ul className="space-y-3 mb-8 flex-1">
                  {tier.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <Check
                        className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0"
                        strokeWidth={2.5}
                      />
                      <span className="text-base text-slate-600 leading-relaxed">
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center rounded-full px-8 py-3.5 font-medium text-base transition-all duration-200 ${
                    tier.ctaStyle === "solid"
                      ? "bg-emerald-500 hover:bg-emerald-600 text-white hover:shadow-lg"
                      : "border border-slate-300 text-slate-900 hover:border-emerald-500 hover:text-emerald-600"
                  }`}
                >
                  Book a call
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
