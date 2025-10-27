export function ChallengesSection() {
  const challenges = [
    {
      category: "正社員採用",
      description: "採用に時間とコストが\nかかりすぎる",
      illustration: "/full-time-hiring-cost-time-illustration.jpg",
    },
    {
      category: "SES",
      description: "多重下請け構造による高額なSES費用や長期的なリソース確保ができない",
      illustration: "/ses-subcontracting-structure-illustration.jpg",
    },
    {
      category: "オフショア",
      description: "仕様齟齬により出戻りが多発し管理負荷が重い",
      illustration: "/offshore-communication-issues-illustration.jpg",
    },
  ]

  return (
    <section className="bg-[#f8f9fa] py-16 md:py-20 lg:py-24">
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 font-sans text-sm font-medium uppercase tracking-wider text-accent">Problem</p>
          <h2 className="mb-4 font-sans text-2xl font-semibold text-primary md:text-3xl lg:text-4xl">
            こんな課題はありませんか？
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="group relative flex flex-col items-center rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-xl"
              >
                <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rotate-45 bg-white"></div>

                <div className="mb-6 text-center">
                  <h3 className="mb-4 font-sans text-base font-medium text-accent md:text-lg">{challenge.category}</h3>
                  <p className="whitespace-pre-line text-base font-semibold leading-relaxed text-primary md:text-lg">
                    {challenge.description}
                  </p>
                </div>

                <div className="flex h-40 w-full items-center justify-center">
                  <img
                    src={challenge.illustration || "/placeholder.svg"}
                    alt={`${challenge.category}のイラスト`}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
