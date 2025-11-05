import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function MidCtaSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center justify-center">
          {/* Container for overlapping design */}
          <div className="relative flex flex-col items-center">
            {/* Yellow speech bubble - smaller size, positioned above button */}
            <div className="relative z-10 mb-[-20px] inline-block">
              <div className="rounded-xl bg-[#FFD700] px-5 py-2.5 text-sm font-bold text-gray-900 shadow-md md:text-base whitespace-nowrap">
                より詳しい内容を聞きたい場合はこちら
              </div>
              {/* Speech bubble tail pointing down */}
              <div className="absolute left-1/2 top-full -translate-x-1/2">
                <div className="h-0 w-0 border-l-[10px] border-r-[10px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#FFD700]"></div>
              </div>
            </div>

            {/* Orange download button */}
            <Button
              size="lg"
              className="h-auto w-full max-w-md rounded-full bg-[#FF8C5A] px-10 py-6 pt-10 text-lg font-bold text-white shadow-lg transition-all hover:bg-[#FF7A42] hover:shadow-xl"
            >
              資料をダウンロードする
              <Download className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
