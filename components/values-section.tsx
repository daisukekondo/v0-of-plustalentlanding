import { Database, Clock, Users } from "lucide-react"
import Image from "next/image"
import { OfficeSlider } from "./office-slider"
import { TalentDatabaseCards } from "./talent-database-cards"
import { HiringProcessSteps } from "./hiring-process-steps"

export function ValuesSection() {
  const values = [
    {
      number: "01",
      icon: Database,
      title: "新興国20,000名以上のDBへのアクセス",
      description: [
        "独自の20,000名以上のDBより貴社に最適な人材へアクセスができます。",
        "日本語が使えるエンジニアや多様な技術スタックに対応したフルスタックエンジニアなど今必要な人材が見つかります。",
        "また、AI開発のエンジニアに関しても紹介実績が多数あります。",
      ],
      useCards: true,
    },
    {
      number: "02",
      icon: Clock,
      title: "最短3営業日での採用",
      description: [
        "各拠点専属のHRスタッフにより迅速に面接設定します。",
        "実際の面接前に、事前面談を行いスクリーニングをすることで、ミスマッチの削減した状態で面接を行っていただけます。",
        "納得して採用いただくために、コーディングテストや複数回に渡り面接していただけます。",
      ],
      useProcessSteps: true,
    },
    {
      number: "03",
      icon: Users,
      title: "各拠点の日本人スタッフによる万全サポート",
      description: [
        "リモート環境下でも各拠点にいる日本人スタッフによる対面でのマネジメントサポートを行います。",
        "現場での定期的な1 on 1の実施や、日々のコミュニケーションなどを貴社に変わり、現場で我々が対応します。",
      ],
      useSlider: true,
    },
  ]

  return (
    <section id="values" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-24 max-w-3xl text-center md:mb-28 lg:mb-36">
          <h2 className="whitespace-nowrap font-sans text-2xl font-bold text-primary md:text-3xl lg:text-4xl">
            PLUS TALENTが提供する3つの価値。
          </h2>
          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            新興国の優秀な人材を活用し、コストを抑えながら高品質な開発を実現します。
          </p>
        </div>

        <div className="space-y-28 md:space-y-36 lg:space-y-44">
          {values.map((value, index) => (
            <div
              key={index}
              className={`grid items-stretch gap-8 lg:grid-cols-[45%_55%] lg:gap-12 ${index % 2 === 1 ? "lg:grid-flow-dense" : ""}`}
            >
              <div className={`flex flex-col ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                <div className="mb-6 flex items-center gap-4">
                  <span className="font-mono text-5xl font-bold text-accent md:text-6xl lg:text-7xl">
                    {value.number}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10">
                    <value.icon className="h-7 w-7 text-accent" />
                  </div>
                </div>
                <h3 className="mb-4 border-l-4 border-accent pl-4 font-sans text-xl font-bold leading-tight text-primary md:text-2xl lg:text-3xl">
                  {value.title}
                </h3>
                <div className="space-y-3 pl-4">
                  {value.description.map((paragraph, i) => (
                    <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base lg:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                {value.useCards ? (
                  <TalentDatabaseCards />
                ) : value.useProcessSteps ? (
                  <HiringProcessSteps />
                ) : value.useSlider ? (
                  <OfficeSlider />
                ) : (
                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                    <Image
                      src={value.image || "/placeholder.svg"}
                      alt={value.title}
                      fill
                      className="object-contain p-8"
                      priority={index === 0}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
