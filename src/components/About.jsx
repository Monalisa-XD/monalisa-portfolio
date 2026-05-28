


const About = () => {
  const educationData = [
    {
      course: "Master of Computer Applications (MCA)",
      institution: "NIST University",
      year: "2025 - Present",
      percentage: "Pursuing",
      description:
        "Focused on software development, modern web technologies, and application development.",
      gradient: "from-fuchsia-500 via-violet-500 to-cyan-500",
      shadow: "hover:shadow-[0_20px_60px_rgba(217,70,239,0.25)]",
    },

    {
      course: "Bachelor of Computer Applications (BCA)",
      institution: "NIST University",
      year: "2022 - 2025",
      percentage: "8.5 CGPA",
      description:
        "Built strong foundation in programming, databases, and frontend development.",
      gradient: "from-cyan-400 via-blue-500 to-violet-500",
      shadow: "hover:shadow-[0_20px_60px_rgba(34,211,238,0.25)]",
    },

    {
      course: "Intermediate",
      institution: "XYZ Higher Secondary School",
      year: "2020 - 2022",
      percentage: "78%",
      description:
        "Completed higher secondary education with focus on analytical subjects.",
      gradient: "from-pink-500 via-rose-500 to-orange-400",
      shadow: "hover:shadow-[0_20px_60px_rgba(244,114,182,0.25)]",
    },

    {
      course: "School",
      institution: "XYZ School",
      year: "2019 - 2020",
      percentage: "82%",
      description:
        "Completed school education while developing interest in technology.",
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
      shadow: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.25)]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-32">
      {/* PREMIUM BACKGROUND */}
      <div className="absolute top-0 left-0 w-[420px] h-[420px] bg-violet-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="absolute top-[35%] left-[40%] w-[280px] h-[280px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.25) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.25) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* MAIN HEADING */}
        <div className="text-center mb-20">
          <p className="uppercase tracking-[6px] text-sm text-cyan-400 mb-4 font-medium">
            Portfolio
          </p>

          <h2 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="w-28 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500" />
        </div>

        {/* WHO I AM BOX */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_80px_rgba(139,92,246,0.15)] hover:shadow-[0_25px_90px_rgba(139,92,246,0.25)] transition-all duration-700 mb-14">
          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-violet-500/10 opacity-40" />

          {/* SHINE */}
          <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
              Who I Am
            </h3>

            <p className="text-gray-300 text-sm sm:text-lg leading-8 sm:leading-9 max-w-5xl">
              I am currently pursuing MCA and passionate about Android
              Development, Full Stack Development, and building futuristic
              digital experiences with premium user interfaces. I enjoy working
              with React, Tailwind CSS, JavaScript, Java, Flutter, SQL, and
              modern frontend technologies to create responsive and innovative
              applications with modern design and smooth user experience.
            </p>
          </div>
        </div>

        {/* EDUCATION LARGE BOX */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-10 shadow-[0_20px_80px_rgba(139,92,246,0.15)] mb-14">
          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-transparent to-cyan-500/10 opacity-40" />

          <div className="relative z-10">
            {/* HEADING */}
            <h3 className="text-3xl sm:text-4xl font-black mb-10 bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Education Details
            </h3>

            {/* EDUCATION GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0B1224]/70 backdrop-blur-2xl p-6 sm:p-8 transition-all duration-700 hover:-translate-y-2 ${item.shadow}`}
                >
                  {/* CARD GLOW */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r ${item.gradient}/10`}
                  />

                  {/* SHINE */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
                    {/* LEFT */}
                    <div className="flex-1">
                      {/* COURSE */}
                      <h4
                        className={`text-xl sm:text-2xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent leading-snug`}
                      >
                        {item.course}
                      </h4>

                      {/* INSTITUTION */}
                      <p className="mt-4 text-lg sm:text-xl font-bold text-white tracking-wide">
                        {item.institution}
                      </p>

                      {/* DESCRIPTION */}
                      <p className="mt-4 text-gray-400 text-sm sm:text-base leading-7">
                        {item.description}
                      </p>
                    </div>

                    {/* RIGHT */}
                    <div className="sm:min-w-[140px]">
                      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                        {/* YEAR */}
                        <p className="text-cyan-400 font-bold text-sm sm:text-base">
                          {item.year}
                        </p>

                        {/* PERCENTAGE */}
                        <p className="mt-3 text-fuchsia-400 text-xl sm:text-2xl font-black">
                          {item.percentage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAREER GOAL BOX */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 sm:p-12 shadow-[0_20px_80px_rgba(139,92,246,0.15)] hover:shadow-[0_25px_90px_rgba(139,92,246,0.25)] transition-all duration-700">
          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-40" />

          {/* SHINE */}
          <div className="absolute inset-0 -translate-x-full hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10">
            <h3 className="text-3xl sm:text-4xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
              Career Goal
            </h3>

            <p className="text-gray-300 text-sm sm:text-lg leading-8 sm:leading-9 max-w-5xl">
              My goal is to become a professional software developer and build
              impactful digital products with modern UI, premium user
              experiences, and scalable solutions. I aspire to continuously
              improve my technical skills, work on innovative real-world
              projects, and contribute to the development of advanced web and
              mobile applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;