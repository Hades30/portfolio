export default function Experience() {
  const experiences = [
    {
      company: "Fampay Solutions",
      description: [
        "Created web views for Android and iOS users of the Fampay service, serving a user base of over 15 million users.",
        "Developed a goal-based savings app empowering users to save money and achieve their financial objectives.",
        "Managed and maintained a custom visa card ordering website with personalized name and card designs at scale, providing seamless user experience and convenience.",
        "Utilized Next.js and Tailwind CSS to create responsive layouts with optimized loading."
      ]
    },
    {
      company: "SupplyNote",
      description: [
        "Developed a bulk upload feature enabling efficient data management from Excel sheets, saving significant time in product discussions.",
        "Implemented notifications and backoff for order management, ensuring smooth operations."
      ]
    }
  ]

  return (
    <section className="py-20 bg-[#ff9999]">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">EXPERIENCE</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-black/10 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">{exp.company}</h3>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-sm">{desc}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
