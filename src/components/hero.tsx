"use client"
import { motion } from "framer-motion"
import { FloatingPaths } from "@/components/ui/background-paths"

const CALENDLY_URL = "https://calendly.com/worachit-seaentrylab/discovery-call"
const HEADLINE = "Know the market before you commit the capital."

export function Hero() {
  const words = HEADLINE.split(" ")
  const totalLettersBefore = (wordIndex: number) =>
    words.slice(0, wordIndex).reduce((sum, w) => sum + w.length, 0)

  return (
    <section
      id="top"
      className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-950 text-white"
    >
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-32 md:py-40 w-full">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400 mb-6"
        >
          Thailand &amp; Southeast Asia
        </motion.p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6 max-w-4xl">
          {words.map((word, wordIndex) => (
            <span
              key={wordIndex}
              className="inline-block mr-3 md:mr-4 last:mr-0"
            >
              {word.split("").map((letter, letterIndex) => (
                <motion.span
                  key={`${wordIndex}-${letterIndex}`}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay:
                      0.15 +
                      (totalLettersBefore(wordIndex) + letterIndex) * 0.025,
                    type: "spring",
                    stiffness: 150,
                    damping: 22,
                  }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70"
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10"
        >
          Strategic research reports for foreign brands and investors entering
          Southeast Asia. Built on the ground in Thailand. Delivered in days,
          not months.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1.05,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <div
            className="inline-block group relative bg-gradient-to-b from-white/15 to-white/5 p-px rounded-full backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full sm:w-auto"
          >
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full px-8 py-3.5 font-medium text-base transition-all duration-300 group-hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span>Book a Discovery Call</span>
              <span className="ml-2 opacity-80 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
                →
              </span>
            </a>
          </div>

          <a
            href="#sample"
            className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-3.5 font-medium text-base transition-all duration-200 w-full sm:w-auto"
          >
            See sample report
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
          className="text-sm text-slate-500 mt-10"
        >
          Trusted by brand founders, consulting firms, and investors
        </motion.p>
      </div>
    </section>
  )
}
