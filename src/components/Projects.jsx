const Projects = () => {
  const projects = [
    {
      title: "Portfolio",
      description:
         "Designed and developed a modern, responsive personal portfolio website to showcase projects, technical skills, certifications, and achievements. Built with React and Tailwind CSS, featuring a clean UI, smooth animations, and an intuitive user experience.",

      tech: ["React", "Tailwind", "JavaScript"],

      github: "https://github.com/Monalisa-XD/monalisa-portfolio.git",
    },

    {
      title: "Career-AI",
      description:
        "Built an AI-powered career guidance application featuring ATS Resume Analysis, AI Mock Interviews, Resume Builder, Career Roadmaps, AI Cover Letter Generator, Job Recommendations, and an interactive analytics dashboard with a responsive Flutter UI.",

      tech: ["Flutter", "Dart", "Firebase", "REST API Integration", "Glassmorphism UI"],

      github: "https://github.com/Monalisa-XD/career_ai.git",
    },
    
    {
      title: "Tiny-ML Powered Edge Fault Detection in Wireless Sensor Network",
      description:
        "Designed and implemented a machine learning solution for fault detection in Wireless Sensor Networks by analyzing sensor data, training predictive models, and visualizing performance metrics. Focused on accurate fault classification through data preprocessing and model evaluation.",

      tech: [ "Python",
    "Machine Learning",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "Model Training & Evaluation",
    "Data Visualization",  "Logistic Regression", "Decision Tree", "Random Forest", "Support Vector Machine (SVM)"],
      colab: "https://colab.research.google.com/drive/1-Eok2U5SwC_v8T8XcFYZFzoAv2Oh_y43?usp=sharing",
    },

    {
      title: "Student Placement Prediction",
      description:
        "Student Placement Prediction is a Machine Learning project that predicts whether a student is likely to be placed based on their academic performance, technical skills, aptitude scores, communication skills, internship experience, and other relevant factors. The system analyzes historical student data, trains a classification model, and provides placement predictions to help students identify areas for improvement and assist training and placement cells in making data-driven decisions. ",

      tech: ["Python", "ML", "Scikit-learn", "Data Analysis", "Pandas", "NumPy", "Matplotlib", "google Colab", "Student Placement Dataset (Kaggle)", "Logistic Regression", "Decision Tree", "Random Forest", "Support Vector Machine (SVM)"],
      colab: "https://colab.research.google.com/drive/1rBYLRpIPc0vmShpejIDJZokfi4fD8V5o?usp=sharing",
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

      tech: ["HTML", "CSS", "MySql", "Java"],

      github: "https://github.com/Monalisa-XD/student-faculty-management-backend.git",
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

   <div className="flex gap-5">
  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full border border-[#00ffb3] text-[#00ffb3] font-semibold hover:bg-[#00ffb3] hover:text-black transition-all duration-300"
    >
      GitHub
    </a>
  )}

  {project.colab && (
    <a
      href={project.colab}
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 rounded-full border border-blue-500 text-blue-400 font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
    >
      Google Colab
    </a>
  )}
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
