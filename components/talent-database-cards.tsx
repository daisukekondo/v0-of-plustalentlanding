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
    <div className="grid gap-8 md:grid-cols-3">
      {categories.map((category, index) => (
        <div
          key={index}
          className="rounded-2xl border-2 border-accent/30 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
        >
          <h3 className="mb-4 border-b-2 border-accent/20 pb-4 text-2xl font-bold text-foreground">{category.title}</h3>
          <div className="mb-6">
            <span className="text-5xl font-bold text-accent">{category.count}</span>
            <span className="ml-2 text-2xl text-foreground">人</span>
          </div>
          <ul className="space-y-2">
            {category.technologies.map((tech, techIndex) => {
              const isSubItem = typeof tech === "object" && tech.isSubItem
              const techName = typeof tech === "object" ? tech.name : tech
              return (
                <li key={techIndex} className={`flex items-start text-base text-foreground ${isSubItem ? "ml-6" : ""}`}>
                  <span className={`mr-2 mt-1.5 ${isSubItem ? "text-accent" : "text-foreground"}`}>
                    {isSubItem ? "○" : "•"}
                  </span>
                  <span className="font-medium">{techName}</span>
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </div>
  )
}
