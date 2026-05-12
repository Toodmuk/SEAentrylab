import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Problem } from "@/components/problem"
import { Audience } from "@/components/audience"
import { Tiers } from "@/components/tiers"
import { WhyMe } from "@/components/why-me"
import { HowItWorks } from "@/components/how-it-works"
import { SampleReport } from "@/components/sample-report"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Audience />
      <Tiers />
      <WhyMe />
      <HowItWorks />
      <SampleReport />
      <FinalCTA />
      <Footer />
    </>
  )
}
