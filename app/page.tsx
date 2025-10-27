import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { LogoSlider } from "@/components/logo-slider"
import { ChallengesSection } from "@/components/challenges-section"
import { ServiceOverviewSection } from "@/components/service-overview-section"
import { ValuesSection } from "@/components/values-section"
import { EffectsSection } from "@/components/effects-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <LogoSlider />
        <ChallengesSection />
        <ServiceOverviewSection />
        <ValuesSection />
        <EffectsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}
