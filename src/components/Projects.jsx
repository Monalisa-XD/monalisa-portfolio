const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
        "Developed a dynamic personal portfolio website showcasing projects, technical skills, and achievements with a clean UI and responsive design.",

      tech: ["React", "Tailwind", "JavaScript"],

      github: "#",
    },

    {
      title: "Career-AI",
      description:
        "An Android learning application with authentication, internships, courses, and Firebase integration.",

      tech: ["Flutter", "Dart", "Kotlin"],

      github: "https://github.com/Monalisa-XD/career_ai.git",
    },
    
    {
      title: "Tiny-ML Powered Edge Fault Detection in Wireless Sensor Network",
      description:
        "Developed a machine learning-based fault detection system for sensor data analysis and prediction in wireless sensor networks. ",

      tech: ["Python", "ML", "Model Training & Testing", "Data Analysis", "Data Visualization", "Graph Analysis"],
    },


    {
      title: "ecommerce-website",
      description:
        "Built a responsive full-stack e-commerce website with a modern and user-friendly interface.",

      tech: ["HTML", "CSS", "JavaScript", "Bootstrap"],

      github: "https://github.com/Monalisa-XD/ecommerce-website.git",
    },

    {
      title: "Academix",
      description:
        "Developed a student and faculty management system to manage records, roles, and academic data through a secure and user-friendly platform. ",

      tech: ["HTML", "CSS", "SQLite", "Java"],

      github: "#",
    },
  ];

  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Heading */}
        <div className="mb-20">
          <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
            My Work
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Featured Projects
          </h2>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-[#0B1224]/70 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-[#00ffb3]/30 transition-all duration-500 hover:-translate-y-2 shadow-[0_0_30px_rgba(0,255,179,0.05)]"
            >
              {/* Top Glow Line */}
              <div className="w-20 h-1 bg-[#00ffb3] rounded-full mb-8 shadow-[0_0_15px_#00ffb3]" />

              {/* Project Title */}
              <h3 className="text-3xl font-bold text-white mb-5 group-hover:text-[#00ffb3] transition-all duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-8 mb-8">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-4 mb-10">
                {project.tech.map((item, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 rounded-full bg-[#050816] border border-white/10 text-gray-300 text-sm hover:border-[#00ffb3]/40 hover:text-[#00ffb3] transition-all duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-5">
                <a
                  href={project.github}
                  target="_blank"
                  className="px-6 py-3 rounded-full border border-[#00ffb3] text-[#00ffb3] font-semibold hover:bg-[#00ffb3] hover:text-black transition-all duration-300"
                >
                  GitHub
                </a>

                {/* <a
                  href={project.live}
                  target="_blank"
                  className="px-6 py-3 rounded-full bg-[#00ffb3] text-black font-semibold hover:scale-105 transition-all duration-300 shadow-[0_0_25px_rgba(0,255,179,0.4)]"
                >
                  Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
