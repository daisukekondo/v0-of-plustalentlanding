export function EffectsSection() {
  return (
    <section className="bg-gray-50 py-12 md:py-16 lg:py-20">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <h2 className="font-sans text-2xl font-bold text-primary md:text-3xl">導入効果</h2>
        </div>

        <div className="grid items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {/* Effect 01: Cost Reduction */}
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg">
            {/* Top Section - White Background with Metrics */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <span className="text-sm font-medium text-muted-foreground">Case1 ｜</span>
                <span className="ml-2 text-lg font-bold text-primary md:text-xl">月次コスト削減</span>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base min-h-[48px]">
                SES1名分の予算で、PLUS TALENT 3名の体制構築が可能
              </p>

              {/* Visual Comparison */}
              <div className="flex items-center justify-center gap-4">
                {/* Before */}
                <div className="flex-1 text-center">
                  <div className="mb-3 rounded-lg border-2 border-gray-300 bg-gray-50 px-3 py-1.5">
                    <span className="text-xs text-muted-foreground">従来</span>
                  </div>
                  <div className="text-5xl font-bold text-gray-700 md:text-5xl">100</div>
                  <div className="mt-1 text-lg text-muted-foreground">万円/月</div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground">SES 1名</div>
                </div>

                {/* Arrow */}
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="rounded-full bg-[#FF6B35] px-3 py-2 text-xs font-bold text-white whitespace-nowrap">44万円削減</div>
                  <svg className="mt-2 h-8 w-8 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <div className="mb-3 rounded-lg border-2 border-[#FF6B35] bg-orange-50 px-3 py-1.5">
                    <span className="text-xs font-semibold text-[#FF6B35]">PLUS TALENT</span>
                  </div>
                  <div className="text-5xl font-bold text-[#FF6B35] md:text-5xl">56</div>
                  <div className="mt-1 text-lg text-[#FF6B35]">万円/月</div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground">3名体制</div>
                </div>
              </div>

              {/* Savings Highlight */}
              <div className="mt-8 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-4 text-center">
                <div className="text-sm font-medium text-muted-foreground">年間削減額</div>
                <div className="mt-1 text-3xl font-bold text-[#FF6B35] md:text-3xl">528万円</div>
              </div>
            </div>

            {/* Bottom Section - Dark Background with Explanation */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10">
              <h4 className="mb-4 text-lg font-bold text-white md:text-xl">コスト最適化</h4>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base min-h-[120px]">
                シニアエンジニア28万円、ミドルエンジニア14万円×2の3名体制で、従来のSES
                1名分（100万円）と比較して月額44万円、年間528万円のコスト削減を実現。優秀な新興国人材を活用することで、品質を維持しながら大幅なコスト削減が可能です。
              </p>
            </div>
          </div>

          {/* Effect 02: Rework Improvement */}
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg">
            {/* Top Section - White Background with Metrics */}
            <div className="p-8 md:p-10">
              <div className="mb-6">
                <span className="text-sm font-medium text-muted-foreground">Case2 ｜</span>
                <span className="ml-2 text-lg font-bold text-primary md:text-xl">手戻りの大幅改善</span>
              </div>

              <p className="mb-8 text-sm leading-relaxed text-foreground md:text-base min-h-[48px]">
                雇用代行でフルタイム人材を採用し、リアルタイムで確認擦り合わせができ開発スピードが大幅改善
              </p>

              {/* Visual Comparison */}
              <div className="flex items-center justify-center gap-4">
                {/* Before */}
                <div className="flex-1 text-center">
                  <div className="mb-3 rounded-lg border-2 border-gray-300 bg-gray-50 px-3 py-1.5">
                    <span className="text-xs text-muted-foreground">従来</span>
                  </div>
                  <div className="text-5xl font-bold text-gray-700 md:text-5xl">25</div>
                  <div className="mt-1 text-lg text-muted-foreground">%</div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground">手戻り発生率</div>
                </div>

                {/* Arrow with percentage */}
                <div className="flex flex-shrink-0 flex-col items-center">
                  <div className="rounded-full bg-[#FF6B35] px-3 py-2 text-xs font-bold text-white whitespace-nowrap">60%改善</div>
                  <svg className="mt-2 h-8 w-8 text-[#FF6B35]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>

                {/* After */}
                <div className="flex-1 text-center">
                  <div className="mb-3 rounded-lg border-2 border-[#FF6B35] bg-orange-50 px-3 py-1.5">
                    <span className="text-xs font-semibold text-[#FF6B35]">PLUS TALENT</span>
                  </div>
                  <div className="text-5xl font-bold text-[#FF6B35] md:text-5xl">10</div>
                  <div className="mt-1 text-lg text-[#FF6B35]">%</div>
                  <div className="mt-2 text-xs font-medium text-muted-foreground">手戻り発生率</div>
                </div>
              </div>

              {/* Response Time Comparison */}
              <div className="mt-8 rounded-lg bg-gradient-to-r from-orange-50 to-orange-100 p-4 text-center">
                <div className="text-sm font-medium text-muted-foreground">確認時間</div>
                <div className="mt-1 text-3xl font-bold text-[#FF6B35] md:text-3xl">リアルタイム</div>
              </div>
            </div>

            {/* Bottom Section - Dark Background with Explanation */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 md:p-10">
              <h4 className="mb-4 text-lg font-bold text-white md:text-xl">開発スピード向上</h4>
              <p className="text-sm leading-relaxed text-gray-300 md:text-base min-h-[120px]">
                従来のオフショア開発では仕様確認に2-3日かかり、手戻り発生率も20-30%と高い状況でした。PLUS
                TALENTの雇用代行により、フルタイム人材として直接コミュニケーションが可能になり、仕様確認はリアルタイム、手戻り発生率も10%以下に改善。開発効率が大幅に向上します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
