export function TalentDatabaseCards() {
  const categories = [
    {
      title: "フロントエンド",
      count: "10,300",
      technologies: [
        "HTML/CSS",
        "JavaScript, TypeScript",
        { name: "React.js", isSubItem: true },
        { name: "Vue.js", isSubItem: true },
        { name: "Angular.js", isSubItem: true },
        { name: "Next.js", isSubItem: true },
      ],
    },
    {
      title: "バックエンド",
      count: "8,800",
      technologies: [
        "PHP, Java, Ruby, Go",
        "JavaScript, TypeScript",
        { name: "Node.js", isSubItem: true },
        { name: "Express.js", isSubItem: true },
        { name: "Nest.JS", isSubItem: true },
        { name: "Nuxt.js", isSubItem: true },
      ],
    },
    {
      title: "モバイル",
      count: "5,100",
      technologies: ["Swift, obj-C", "Kotlin, Java", "Flutter", "React native"],
    },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="rounded-2xl border-2 border-accent/30 bg-white p-6 md:p-8 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="mb-4 border-b-2 border-accent/20 pb-4 text-xl md:text-2xl font-bold text-foreground min-h-[4rem] flex items-center whitespace-nowrap">{category.title}</h3>
          <div className="mb-6 flex items-baseline flex-wrap">
            <span className="text-4xl md:text-5xl font-bold text-accent">{category.count}</span>
            <span className="ml-2 text-xl md:text-2xl text-foreground">人</span>
          </div>
          <ul className="space-y-2.5">
            {category.technologies.map((tech, techIndex) => {
              const isSubItem = typeof tech === "object" && tech.isSubItem
              const techName = typeof tech === "object" ? tech.name : tech
              return (
                <li key={techIndex} className={`flex items-start text-sm md:text-base text-foreground ${isSubItem ? "ml-6" : ""}`}>
                  <span className={`mr-2 flex-shrink-0 inline-block w-4 text-left leading-[1.6rem] ${isSubItem ? "text-accent" : "text-foreground"}`}>
                    {isSubItem ? "○" : "•"}
                  </span>
                  <span className="font-medium leading-[1.6rem] flex-1">{techName}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
