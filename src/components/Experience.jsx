import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      role: "Application Developer Intern",
      company: "CANNCO Tech Private Limited",
      location: "Bhubaneswar, Odisha (Remote)",
      duration: "January 2026 - April 2026",
      badge: "Successfully Completed Internship",
      points: [
        "Developed a cross-platform mobile application using Flutter, implementing responsive UI and core app functionalities.",
        "Built a dynamic React.js website with reusable components and modern frontend development practices.",
        "Designed and implemented backend APIs, enabling seamless communication between frontend and server.",
        "Collaborated with development teams to deliver scalable and user-friendly solutions.",
        "Improved application performance and user experience through efficient coding practices.",
      ],
    },
    {
      role: "Android Developer Intern",
      company: "Digital Nexus AI",
      location: "Bengaluru, Karnataka (Remote)",
      duration: "May 2026 - Present",
      badge: "Currently Working",
      points: [
        "Developing scalable Flutter applications with clean architecture.",
        "Integrated REST APIs and Firebase Authentication.",
        "Built reusable widgets and responsive UI for Android and iOS.",
        "Collaborated with designers and backend developers to deliver production-ready features.",
        "Optimized app performance and fixed critical bugs for better user experience.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] bg-violet-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-[35%] w-[450px] h-[450px] bg-fuchsia-500/20 blur-[150px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <p className="mt-5 text-gray-400 text-lg">
            Internship • Development • Real World Projects
          </p>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 rounded-full" />

          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`relative ${index !== 0 ? "mt-16" : ""}`}
            >
              {/* Timeline Dot */}
              <div className="hidden md:flex absolute left-[18px] top-10 w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.6)]">
                <FaBriefcase className="text-black text-lg" />
              </div>

              {/* Card */}
              <div className="md:ml-24 group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-10 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_20px_80px_rgba(139,92,246,0.25)] transition-all duration-500">

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 transition-all duration-500" />

                {/* Shine */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1800ms] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                <div className="relative z-10">

                  {/* Role */}
                  <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
                    {experience.role}
                  </h3>

                  {/* Company / Location / Date */}
                  <div className="flex flex-wrap gap-4 mt-8">

                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <FaBuilding className="text-cyan-400" />
                      <span className="text-white font-medium">
                        {experience.company}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <FaMapMarkerAlt className="text-fuchsia-400" />
                      <span className="text-white font-medium">
                        {experience.location}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10">
                      <FaCalendarAlt className="text-violet-400" />
                      <span className="text-white font-medium">
                        {experience.duration}
                      </span>
                    </div>

                  </div>

                  {/* Responsibilities */}
                  <div className="mt-10 space-y-5">

                    {experience.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 rounded-2xl bg-[#0B1224]/50 border border-white/5 p-4"
                      >
                        <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                        <p className="text-gray-300 leading-7">
                          {point}
                        </p>

                      </div>
                    ))}

                  </div>

                  {/* Badge */}
                  <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 border border-cyan-400/20">

                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                    <span className="text-cyan-300 font-medium">
                      {experience.badge}
                    </span>

                  </div>

                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
