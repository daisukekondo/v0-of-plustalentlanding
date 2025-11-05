import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CtaSection() {
  return (
    <section className="bg-primary py-20 text-white md:py-28 lg:py-32">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-sans text-3xl font-bold text-white text-balance md:text-4xl lg:text-5xl">
            今すぐPLUS TALENTで
            <br />
            人材管理を始めましょう
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-white/90 text-pretty">
            14日間の無料トライアルで、すべての機能をお試しいただけます。
            <br className="hidden md:block" />
            クレジットカードの登録は不要です。
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="w-full bg-accent px-6 py-3 font-medium text-white hover:bg-accent/90 sm:w-auto"
            >
              無料トライアルを始める
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-white/30 bg-transparent px-6 py-3 font-medium text-white hover:bg-white/10 hover:text-white sm:w-auto"
            >
              デモを予約する
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
