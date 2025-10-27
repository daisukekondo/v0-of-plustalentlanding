import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6">
            <h1 className="font-sans text-3xl font-bold leading-tight tracking-tight text-primary text-balance md:text-4xl lg:text-5xl">
              新興国の優秀な人材を<span className="text-accent">"雇用代行"</span>で<br />
              採用しませんか？
            </h1>

            <p className="text-base leading-relaxed text-muted-foreground text-pretty md:text-lg">
              月額14万円〜、最短3営業日で即戦力確保。
              <br />
              SESの1/4コストでありながら、オフショア開発の品質・コミュニケーション課題も解決。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <Button
                size="lg"
                className="bg-accent px-6 py-3 text-base font-semibold text-white shadow-lg hover:bg-accent/90 hover:shadow-xl transition-all"
              >
                資料をダウンロード
                <Download className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right column - Hero image */}
          <div className="relative flex items-center justify-center">
            <img
              src="/hero-hand.png"
              alt="Global talent connection"
              className="w-full max-w-2xl h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
