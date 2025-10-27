import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-primary backdrop-blur supports-[backdrop-filter]:bg-primary/95">
      <div className="container flex h-20 max-w-7xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
            <span className="font-sans text-xl font-bold text-white">P</span>
          </div>
          <span className="font-sans text-xl font-bold text-white">PLUS TALENT</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link href="#service" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
            サービス
          </Link>
          <Link href="#values" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
            特徴
          </Link>
          <Link href="#faq" className="text-sm font-medium text-white/70 transition-colors hover:text-white">
            よくある質問
          </Link>
        </nav>

        <Button size="default" className="bg-accent px-6 py-3 font-medium text-white hover:bg-accent/90">
          お問い合わせ
        </Button>
      </div>
    </header>
  )
}
