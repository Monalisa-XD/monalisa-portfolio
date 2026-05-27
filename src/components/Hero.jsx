import profileImg from "../assets/profile.png";
import resumePDF from "../assets/resume.pdf";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 bg-white dark:bg-[#050816] transition-colors duration-500">
      {/* PREMIUM BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-600/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.4) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN CONTAINER */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          {/* TAGS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
            {["Android (Java, Flutter)", "Full-Stack", "SQL"].map(
              (item, index) => (
                <span
                  key={index}
                  className="px-5 py-2 rounded-full border border-violet-500/20 bg-white/40 dark:bg-[#0B1224]/60 backdrop-blur-2xl text-violet-600 dark:text-violet-300 text-sm font-medium shadow-lg hover:scale-105 hover:border-violet-400 transition-all duration-300"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* HEADING */}
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tight text-black dark:text-white">
            Hi, I'm
            <span className="block mt-3 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.45)]">
              Monalisa Jena
            </span>
          </h2>

          {/* ROLES */}
          <div className="mt-8 space-y-3">
            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              ↗ Android Developer
            </p>

            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              ↗ Full Stack Developer
            </p>

            <p className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              ↗ UI Designer
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-8 max-w-2xl mx-auto lg:mx-0">
            Creative and detail-oriented 2026 MCA graduate with a passion for
            Android and Full Stack Development. Proficient in Java, Flutter,
            React, JavaScript, SQL, and modern frontend technologies, focused on
            building premium, responsive, and user-centric digital solutions.
          </p>

          {/* STATUS */}
          <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
            <div className="relative">
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <p className="text-emerald-500 dark:text-emerald-400 text-lg font-medium">
              Available for internships & opportunities
            </p>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap justify-center lg:justify-start gap-5">
            {/* PROJECT BUTTON */}
            <button className="group relative overflow-hidden px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 shadow-[0_0_35px_rgba(139,92,246,0.35)] hover:scale-105 transition-all duration-500">
              <span className="relative z-10">View Projects</span>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-all duration-500" />
            </button>

            {/* RESUME BUTTON */}
            <a
              href={resumePDF}
              download
              className="group px-8 py-4 rounded-full border border-violet-500/20 bg-white/50 dark:bg-[#0B1224]/70 backdrop-blur-2xl text-black dark:text-white font-semibold hover:border-violet-400 hover:shadow-[0_0_25px_rgba(139,92,246,0.25)] hover:-translate-y-1 transition-all duration-500"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* IMAGE GLOW */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-[100px] rounded-full" />

            {/* IMAGE CARD */}
            <div className="relative w-[280px] sm:w-[340px] md:w-[420px] rounded-[40px] overflow-hidden border border-white/10 bg-white/10 dark:bg-[#0B1224]/70 backdrop-blur-2xl shadow-[0_20px_80px_rgba(139,92,246,0.2)] hover:-translate-y-3 transition-all duration-700">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* OPEN TO WORK */}
            <div className="absolute bottom-5 right-0 bg-white/70 dark:bg-[#0B1224]/90 backdrop-blur-2xl border border-white/10 px-5 py-3 rounded-full flex items-center gap-3 shadow-xl">
              <div className="relative">
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
              </div>

              <p className="text-emerald-500 dark:text-emerald-400 font-medium">
                Open to Work
              </p>
            </div>

            {/* STATS */}
            <div className="flex gap-4 sm:gap-5 mt-8 justify-center flex-wrap">
              {[
                { number: "10+", label: "Projects" },
                { number: "5+", label: "Skills" },
                { number: "100%", label: "Passion" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white/50 dark:bg-[#0B1224]/70 border border-white/10 backdrop-blur-2xl flex flex-col items-center justify-center hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] transition-all duration-500"
                >
                  <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
                    {item.number}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center gap-5 mt-8">
              {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
                <div
                  key={index}
                  className="group w-14 h-14 rounded-2xl bg-white/50 dark:bg-[#0B1224]/80 border border-white/10 backdrop-blur-xl flex items-center justify-center text-black dark:text-white text-2xl hover:-translate-y-2 hover:border-violet-400 hover:shadow-[0_0_30px_rgba(139,92,246,0.25)] transition-all duration-500 cursor-pointer"
                >
                  <Icon className="group-hover:text-violet-400 transition-all duration-500" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
