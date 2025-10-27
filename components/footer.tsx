import Link from "next/link"
import { Facebook, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary py-12 text-white md:py-16">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                <span className="font-sans text-xl font-bold text-white">P</span>
              </div>
              <span className="font-sans text-xl font-bold text-white">PLUS TALENT</span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              企業の成長を加速する
              <br />
              タレントマネジメントサービス
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Link href="#" className="text-white/70 transition-colors hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white/70 transition-colors hover:text-white">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white/70 transition-colors hover:text-white">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold text-white">サービス一覧</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  機能一覧
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  料金プラン
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  導入事例
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  セキュリティ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  ヘルプセンター
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-sans text-sm font-semibold text-white">会社情報・お問い合わせ</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  会社概要
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  採用情報
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  お問い合わせ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-white/70 transition-colors hover:text-white">
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-center text-sm text-white/70">© 2025 PLUS TALENT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
