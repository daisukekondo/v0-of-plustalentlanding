import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function ServiceOverviewSection() {
  return (
    <section id="service" className="relative bg-background py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 opacity-100">
        <Image src="/world-map-bg.png" alt="" fill className="object-cover" />
      </div>

      <div className="container relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            What is PLUS TALENT ?
          </p>
          <h2 className="mb-4 font-sans text-2xl font-bold leading-tight text-[#FF6B35] md:text-3xl lg:text-4xl">
            エンジニア調達を変える。
            <br />
            月額14万円〜、最短3営業日で即戦力確保。
          </h2>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            <p>これまでのエンジニア調達は、高コストの「SES頼み」か不安の多い「オフショア開発」の二択でした。</p>
            <p>
              PLUS TALENTは 外注でも派遣でもない。
              雇用代行(EOR)を活用し、新興国の優秀な人材をフルタイム・フルコミットでアサイン可能。SESの1/4コストで、貴社メンバーの"一員"として直接連携できるため、オフショアにありがちな認識齟齬や出戻りを根本から抑えます。
            </p>

            <div className="pt-4">
              <Button size="lg" className="px-6 py-2.5 text-sm md:text-base">
                資料ダウンロードする
                <Download className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <Image
              src="/plus-talent-structure.png"
              alt="PLUS TALENT ビジネス構造図"
              width={900}
              height={675}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
