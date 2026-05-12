"use client"
import { useEffect, useState } from "react"

const CALENDLY_URL = "https://calendly.com/worachit-seaentrylab/discovery-call"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className={`font-semibold text-lg tracking-tight transition-colors duration-300 ${
            scrolled ? "text-slate-900" : "text-white"
          }`}
        >
          SEA Entry Lab
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full font-medium text-sm transition-all duration-300 ${
            scrolled
              ? "bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 hover:shadow-md"
              : "border border-white/20 text-white hover:bg-white/10 px-5 py-2"
          }`}
        >
          Book a Call
        </a>
      </div>
    </header>
  )
}
