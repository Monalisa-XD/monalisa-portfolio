import profileImg from "../assets/profile.png";
import resumePDF from "../assets/resume.pdf";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050816] overflow-hidden pt-32">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#00ffb3]/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full" />

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#00ffb3 1px, transparent 1px), linear-gradient(to right, #00ffb3 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex flex-col lg:flex-row items-center justify-between gap-20">
        {/* LEFT CONTENT */}
        <div className="flex-1">
          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {["Android (Java, Flutter)", "Full-Stack", "SQL"].map((item, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full border border-[#00ffb3]/30 text-[#00ffb3] text-sm bg-[#0B1224]/70 backdrop-blur-xl"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Heading */}
          <h2 className="text-5xl md:text-7xl font-black leading-tight text-white">
            Hi, I'm
            <span className="block mt-3 text-[#00ffb3] drop-shadow-[0_0_25px_rgba(0,255,179,0.7)]">
              Monalisa Jena
            </span>
          </h2>

          {/* Roles */}
          <div className="mt-8 space-y-3">
            <p className="text-pink-400 text-2xl font-semibold">
              ↗ Android Developer
            </p>

            <p className="text-yellow-400 text-2xl font-semibold">
              ↗ Fullstack Developer
            </p>

            <p className="text-cyan-400 text-2xl font-semibold">
              ↗ UI Designer
            </p>
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-2xl">
           Creative and detail-oriented 2026 MCA graduate with a passion for Android and Full Stack Development. Proficient in Java, Flutter, React, JavaScript, SQL, and modern frontend technologies, focused on building premium, responsive, and user-centric digital solutions.
          </p>

          {/* Status */}
          <div className="mt-8 flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#00ffb3] shadow-[0_0_15px_#00ffb3]" />

            <p className="text-[#00ffb3] text-lg">
              Available for internships & opportunities
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-5">
            <button className="px-8 py-4 rounded-full bg-[#00ffb3] text-black font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_35px_rgba(0,255,179,0.5)]">
              View Projects
            </button>

            <button className="px-8 py-4 rounded-full border border-[#00ffb3] text-[#00ffb3] font-bold hover:bg-[#00ffb3] hover:text-black transition-all duration-300">
              Download Resume
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Glow */}
            <div className="absolute inset-0 bg-[#00ffb3]/20 blur-[80px] rounded-full" />

            {/* Image Card */}
            <div className="relative w-[340px] md:w-[420px] rounded-[40px] overflow-hidden border border-[#00ffb3]/20 bg-[#0B1224]/70 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,179,0.15)]">
              <img
                src={profileImg}
                alt="profile"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Open To Work */}
            <div className="absolute bottom-5 right-0 bg-[#0B1224]/90 backdrop-blur-xl border border-[#00ffb3]/20 px-5 py-3 rounded-full flex items-center gap-3 shadow-[0_0_20px_rgba(0,255,179,0.1)]">
              <div className="w-3 h-3 rounded-full bg-[#00ffb3]" />

              <p className="text-[#00ffb3] font-medium">Open to Work</p>
            </div>

            {/* Stats */}
            <div className="flex gap-5 mt-8 justify-center">
              {[
                { number: "10+", label: "Projects" },
                { number: "5+", label: "Skills" },
                { number: "100%", label: "Passion" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="w-32 h-32 rounded-3xl bg-[#0B1224]/70 border border-white/10 backdrop-blur-xl flex flex-col items-center justify-center"
                >
                  <h3 className="text-4xl font-black text-[#00ffb3]">
                    {item.number}
                  </h3>

                  <p className="text-gray-400 mt-2">{item.label}</p>
                </div>
              ))}
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-5 mt-8">
              {[FaGithub, FaLinkedin, FaInstagram].map((Icon, index) => (
                <div
                  key={index}
                  className="w-14 h-14 rounded-2xl bg-[#0B1224]/80 border border-white/10 flex items-center justify-center text-white text-2xl hover:border-[#00ffb3] hover:text-[#00ffb3] transition-all duration-300 cursor-pointer"
                >
                  <Icon />
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
