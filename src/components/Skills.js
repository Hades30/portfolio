export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["JavaScript", "TypeScript"]
    },
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "React"]
    },
    {
      title: "Modern CSS",
      skills: ["Tailwind CSS", "Styled Components"]
    },
    {
      title: "State Management",
      skills: ["Redux", "Context"]
    },
    {
      title: "Testing",
      skills: ["Jest/RTL"]
    },
    {
      title: "Tracking",
      skills: ["Sentry"]
    }
  ]

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">MY FRONTEND SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="border border-gray-700 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-full h-6">
                    <div className="text-sm px-3 py-1">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
