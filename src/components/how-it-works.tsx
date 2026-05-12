import { AnimateIn } from "@/components/animate-in"

const steps = [
  {
    title: "Discovery call",
    body: "Free, 20 minutes. We talk about your situation, confirm fit, and define scope. No pitch, just questions.",
  },
  {
    title: "Scope agreement",
    body: "I send a one-page brief and invoice. 50% deposit secures your slot. Clear deliverables, clear timeline.",
  },
  {
    title: "Research and writing",
    body: "I work through your questions with progress checkpoints along the way. No radio silence.",
  },
  {
    title: "Delivery",
    body: "You receive a polished PDF report and an editable Word version. Final 50% due on delivery.",
  },
  {
    title: "Follow-up",
    body: "One round of clarifying questions included free. I don't disappear after sending the invoice.",
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="max-w-3xl mb-16">
          <AnimateIn delay={0}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-4">
              How It Works
            </p>
          </AnimateIn>
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              From first call to delivered report.
            </h2>
          </AnimateIn>
        </div>

        <div className="max-w-4xl space-y-12 md:space-y-14">
          {steps.map((step, i) => (
            <AnimateIn key={step.title} delay={i * 0.1}>
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="text-5xl md:text-6xl font-bold text-emerald-500/20 leading-none tracking-tight w-24 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-base text-slate-600 leading-relaxed max-w-2xl">
                    {step.body}
                  </p>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  )
}
