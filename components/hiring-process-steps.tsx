import { Users, Presentation, FileCheck, UserCheck } from "lucide-react"

export function HiringProcessSteps() {
  const steps = [
    {
      icon: Users,
      title: "お打ち合わせ",
    },
    {
      icon: Presentation,
      title: "人材のご提案",
    },
    {
      icon: FileCheck,
      title: "ご契約",
    },
    {
      icon: UserCheck,
      title: "就労開始",
    },
  ]

  return (
    <div className="flex h-full flex-col justify-center">
      {/* Desktop: Horizontal Timeline */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-0 right-0 top-12 h-1 bg-gradient-to-r from-accent/20 via-accent to-accent/20" />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Icon Circle */}
                <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-accent/20">
                  <step.icon className="h-12 w-12 text-accent" />
                </div>

                {/* Step Number */}
                <div className="mb-3 text-center">
                  <span className="inline-block rounded-full bg-accent px-4 py-1 font-mono text-sm font-bold text-white">
                    STEP {index + 1}
                  </span>
                </div>

                {/* Content Card */}
                <div className="rounded-xl border-2 border-accent/20 bg-white p-6 shadow-sm transition-all hover:border-accent/40 hover:shadow-md">
                  <h4 className="text-center font-sans text-xl font-bold text-primary">{step.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile/Tablet: Vertical Timeline */}
      <div className="lg:hidden">
        <div className="relative space-y-8">
          {/* Vertical Connection Line */}
          <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-accent/20 via-accent to-accent/20" />

          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Icon Circle */}
              <div className="relative z-10 flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-white shadow-lg ring-4 ring-accent/20">
                <step.icon className="h-10 w-10 text-accent" />
              </div>

              {/* Content */}
              <div className="flex-1 pt-2">
                <div className="mb-2">
                  <span className="inline-block rounded-full bg-accent px-3 py-1 font-mono text-xs font-bold text-white">
                    STEP {index + 1}
                  </span>
                </div>
                <div className="rounded-xl border-2 border-accent/20 bg-white p-5 shadow-sm">
                  <h4 className="font-sans text-lg font-bold text-primary">{step.title}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
