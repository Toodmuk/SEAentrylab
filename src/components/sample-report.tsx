import { AnimateIn } from "@/components/animate-in"

export function SampleReport() {
  return (
    <section
      id="sample"
      className="bg-slate-950 text-white py-24 md:py-32 scroll-mt-16"
    >
      <div className="max-w-3xl mx-auto px-6 md:px-8 text-center">
        <AnimateIn delay={0}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            See the work before you buy.
          </h2>
        </AnimateIn>
        <AnimateIn delay={0.1}>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto">
            Download a full 25-page Thailand Wellness Market Entry Report. Real
            market data, real regulatory analysis, real strategic
            recommendations. This is not a sales brochure.
          </p>
        </AnimateIn>
        <AnimateIn delay={0.2}>
          <a
            href="/Thailand_Wellness_Sample_Report.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-3.5 font-medium text-base transition-all duration-200 hover:scale-[1.02] hover:shadow-lg"
          >
            Download Sample Report
          </a>
        </AnimateIn>
        <AnimateIn delay={0.3}>
          <p className="text-sm text-slate-500 mt-6">
            No email required. No signup. Just the report.
          </p>
        </AnimateIn>
      </div>
    </section>
  )
}
