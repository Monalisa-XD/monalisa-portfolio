const About = () => {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[100px] rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section Title */}
        <div className="mb-20">

          <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
            About Me
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Who I Am
          </h2>

        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}
          <div className="bg-[#0B1224]/70 backdrop-blur-xl border border-white/10 rounded-[35px] p-10 shadow-[0_0_40px_rgba(0,255,179,0.06)]">

            <p className="text-gray-300 leading-9 text-lg">

              I am currently pursuing MCA and passionate about frontend
              development, React.js, UI/UX design, and building modern
              premium web experiences.

              <br /><br />

              I enjoy creating responsive and futuristic user interfaces
              using React, Tailwind CSS, JavaScript, and modern frontend
              technologies.

              <br /><br />

              My goal is to become a skilled software developer and work
              on impactful real-world projects while continuously improving
              my development and problem-solving skills.

            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <button className="px-7 py-3 rounded-full bg-[#00ffb3] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,179,0.5)]">

                Hire Me

              </button>

              <button className="px-7 py-3 rounded-full border border-[#00ffb3] text-[#00ffb3] font-bold hover:bg-[#00ffb3] hover:text-black transition-all duration-300">

                Download CV

              </button>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* Card 1 */}
            <div className="bg-[#0B1224]/70 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:border-[#00ffb3]/30 transition-all duration-300">

              <h3 className="text-2xl font-bold text-white mb-3">
                Education
              </h3>

              <p className="text-[#00ffb3] text-lg font-medium">
                Master of Computer Applications (MCA)
              </p>

              <p className="text-gray-400 mt-3 leading-8">
                Currently pursuing MCA with focus on software development,
                frontend technologies, database management, and modern web
                application development.
              </p>

            </div>

            {/* Card 2 */}
            <div className="bg-[#0B1224]/70 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:border-cyan-400/30 transition-all duration-300">

              <h3 className="text-2xl font-bold text-white mb-3">
                Technical Skills
              </h3>

              <div className="flex flex-wrap gap-4 mt-5">

                {[
                  "React JS",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "SQL",
                  "GitHub",
                  "Firebase",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-[#050816] border border-white/10 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

            {/* Card 3 */}
            <div className="bg-[#0B1224]/70 border border-white/10 rounded-[30px] p-8 backdrop-blur-xl hover:border-pink-400/30 transition-all duration-300">

              <h3 className="text-2xl font-bold text-white mb-3">
                Career Goal
              </h3>

              <p className="text-gray-400 leading-8">

                My aim is to become a professional software developer,
                contribute to innovative projects, and build modern digital
                products with attractive and user-friendly interfaces.

              </p>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;