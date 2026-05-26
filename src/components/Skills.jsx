const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "text-cyan-400",
      skills: [
        "React JS",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Responsive Design",
      ],
    },

    {
      title: "Backend & Database",
      color: "text-green-400",
      skills: [
        "Firebase",
        "SQL",
        "MySQL",
        "REST API",
        "Authentication",
      ],
    },

    {
      title: "Tools & Platforms",
      color: "text-pink-400",
      skills: [
        "GitHub",
        "VS Code",
        "Android Studio",
        "Postman",
        "Vercel",
      ],
    },

    {
      title: "Other Skills",
      color: "text-yellow-400",
      skills: [
        "Problem Solving",
        "UI/UX",
        "Teamwork",
        "Communication",
        "Project Management",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ffb3]/10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Header */}
        <div className="mb-20">

          <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
            My Skills
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Technical Arsenal
          </h2>

        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-[#0B1224]/70 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-[#00ffb3]/30 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,179,0.04)]"
            >

              {/* Title */}
              <h3
                className={`text-2xl font-bold mb-8 ${category.color}`}
              >
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-4">

                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-5 py-3 rounded-full bg-[#050816] border border-white/10 text-gray-300 hover:border-[#00ffb3]/40 hover:text-[#00ffb3] transition-all duration-300 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;