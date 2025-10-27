"use client"

import Image from "next/image"

export function LogoSlider() {
  // 仮のロゴデータ
  const logos = [
    { name: "Company 1", src: "/abstract-tech-logo-1.png" },
    { name: "Company 2", src: "/abstract-tech-logo-2.png" },
    { name: "Company 3", src: "/tech-company-logo-abstract-network.png" },
    { name: "Company 4", src: "/tech-company-logo-abstract-network.png" },
    { name: "Company 5", src: "/tech-company-logo-abstract-network.png" },
    { name: "Company 6", src: "/tech-company-logo-abstract-hexagon.png" },
  ]

  // ロゴを2回繰り返してシームレスなスクロールを実現
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-12 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">多くの企業様にご利用いただいています</p>

        <div className="relative">
          {/* グラデーションオーバーレイ（左右のフェード効果） */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-50 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-50 to-transparent z-10" />

          {/* スクロールコンテナ */}
          <div className="flex animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 mx-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.name}
                  width={120}
                  height={60}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}
