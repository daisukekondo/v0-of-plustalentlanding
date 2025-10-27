"use client"

import Image from "next/image"

export function HiringProcessFlow() {
  const steps = [
    {
      title: "お打ち合わせ",
      description: "当社サービスのご紹介および貴社が希望する海外リモート人材の条件を伺います。",
    },
    {
      title: "人材のご提案",
      description: "当社人材データベース等を活用して貴社希望にマッチする人材をご紹介します。",
    },
    {
      title: "ご契約",
      description: "双方の条件がマッチした段階で、貴社⇔当社、当社⇔海外リモート人材間で契約を結びます。",
    },
    {
      title: "就労開始",
      description: "業務に必要なPC機材等の提供の後、海外リモート人材が就労を開始します。",
    },
  ]

  return (
    <div className="flex h-full flex-col space-y-12">
      <div className="relative h-full min-h-[400px] w-full flex-1 overflow-hidden rounded-2xl bg-white shadow-lg">
        <Image src="/hiring-process-flow.jpg" alt="採用プロセスフロー" fill className="object-contain p-4 md:p-6" />
      </div>

      {/* Process Steps Cards for Mobile */}
      <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
        {steps.map((step, index) => (
          <div
            key={index}
            className="rounded-xl border-2 border-accent/20 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-lg font-bold text-white">
                {index + 1}
              </span>
              <h4 className="text-xl font-bold text-accent">{step.title}</h4>
            </div>
            <p className="text-base leading-relaxed text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
