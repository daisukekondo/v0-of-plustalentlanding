import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqSection() {
  const faqs = [
    {
      question: "どのような国の人材を採用できますか？",
      answer:
        "主にベトナム、フィリピン、インドネシアなどの東南アジア諸国の人材をご紹介しています。各国に拠点を持ち、現地の優秀なエンジニアとのネットワークを構築しています。",
    },
    {
      question: "日本語でのコミュニケーションは可能ですか？",
      answer:
        "はい、日本語が使えるエンジニアを多数データベースに登録しています。また、各拠点に日本人スタッフが常駐しており、コミュニケーションのサポートも行います。",
    },
    {
      question: "採用までの流れを教えてください。",
      answer:
        "まずはお客様のニーズをヒアリングし、データベースから最適な候補者を選定します。事前面談でスクリーニングを行った後、お客様との面接を設定します。最短3営業日で採用が可能です。",
    },
    {
      question: "契約形態はどうなりますか？",
      answer:
        "雇用代行サービスとして、当社が現地で人材を雇用し、お客様にご提供する形となります。月額固定料金で、採用コストや管理コストを大幅に削減できます。",
    },
    {
      question: "品質管理はどのように行われますか？",
      answer:
        "各拠点の日本人スタッフが定期的に対面でのマネジメントを行い、進捗確認や品質チェックを実施します。リモート環境でも安心してご利用いただけます。",
    },
    {
      question: "最低契約期間はありますか？",
      answer:
        "基本的には6ヶ月からの契約となります。プロジェクトの規模や内容に応じて、柔軟に対応させていただきますので、まずはご相談ください。",
    },
  ]

  return (
    <section id="faq" className="bg-white py-20 md:py-28 lg:py-32">
      <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-8">
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
