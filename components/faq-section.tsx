import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "どのような国の人材を採用できますか？",
      answer:
        "主にミャンマー、ベトナム、バングラデシュの人材を中心にご紹介しています。各国に拠点を持ち、現地の優秀なエンジニアとのネットワークを構築しています。また、どこの国の人材がどのような特徴を持っているか気になる場合は、是非お気軽にご相談ください。",
    },
    {
      question: "日本語でのコミュニケーションは可能ですか？",
      answer:
        "日本語でのコミュニケーションが可能な人材をご紹介可能です。また、翻訳ツールなどを駆使し日本語能力が乏しい人材も活躍されている事例もございます。",
    },
    {
      question: "採用までの流れを教えてください。",
      answer:
        "まずは貴社のニーズをヒアリングし、データベースから最適な候補者を選定します。事前面談でスクリーニングを行った後、貴社との面接を設定します。最短3営業日で採用が可能です。",
    },
    {
      question: "契約形態はどうなりますか？",
      answer:
        "雇用代行サービスとして、貴社に代わり、当社が現地で人材を雇用し、貴社で勤務いただく形になります。そのため、貴社は雇用に関するリスク無く、フルタイム人材の雇用が実現できます。",
    },
    {
      question: "外国籍人材の雇用は初めてです。何かアドバイスはありますか？",
      answer:
        "外国籍人材の採用に関しては、オンボーディングが重要です。各地に駐在している日本人スタッフより、立ち上げの支援をいたします。",
    },
    {
      question: "最低契約期間はありますか？",
      answer:
        "最低契約期間は3ヶ月となります。プロジェクトの規模や内容に応じて、柔軟に対応させていただきますので、まずはご相談ください。",
    },
  ]

  return (
    <section id="faq" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-sans text-3xl font-semibold text-primary md:text-4xl">よくある質問</h2>
            <p className="text-lg text-muted-foreground">お客様からよくいただくご質問にお答えします。</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-sans text-base font-medium text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
