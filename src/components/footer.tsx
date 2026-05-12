export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
          <div>
            <div className="text-lg font-semibold text-white mb-2">
              SEA Entry Lab
            </div>
            <div className="text-sm text-slate-400">
              Thailand &amp; Southeast Asia Market Research
            </div>
          </div>
          <div>
            <a
              href="mailto:worachit@seaentrylab.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              worachit@seaentrylab.com
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 mt-8 flex flex-col md:flex-row md:justify-between gap-2">
          <p className="text-sm text-slate-500">Based in Thailand</p>
          <p className="text-sm text-slate-500">
            © {year} SEA Entry Lab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
