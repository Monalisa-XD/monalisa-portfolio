

import { useState } from "react";

import profileImg from "../assets/profile.png.jpeg";
import resumePDF from "../assets/resume.pdf";

import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaBriefcase,
  FaDownload,
  FaAndroid,
  FaCode,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("professional");

  const roles = [
    {
      title: "Android Developer",
      icon: <FaAndroid />,
      gradient: "from-pink-500 via-violet-500 to-purple-600",
    },
    {
      title: "Full Stack Developer",
      icon: <FaCode />,
      gradient: "from-cyan-400 via-blue-500 to-violet-600",
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-screen bg-[#050816] pt-24 pb-10">
      {/* PREMIUM BACKGROUND LIGHTS */}
      <div className="absolute top-[-120px] left-[-100px] w-[420px] h-[420px] bg-violet-600/30 blur-[160px] rounded-full animate-pulse" />

      <div className="absolute bottom-[-120px] right-[-100px] w-[420px] h-[420px] bg-cyan-500/20 blur-[160px] rounded-full animate-pulse" />

      <div className="absolute top-[40%] left-[40%] w-[250px] h-[250px] bg-fuchsia-500/10 blur-[120px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(139,92,246,0.2) 1px, transparent 1px), linear-gradient(to right, rgba(139,92,246,0.2) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 min-h-screen flex items-center">
        <div className="w-full">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-14 lg:gap-10">
            {/* LEFT SECTION */}
            <div className="w-full lg:w-[58%] text-center lg:text-left">
              {/* STATUS */}
              {/* <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 backdrop-blur-2xl shadow-[0_0_35px_rgba(16,185,129,0.15)] mb-7 hover:scale-105 transition-all duration-500"> */}
              <div className="inline-flex items-center gap-3 px-4 py-3 rounded-full bg-emerald-400/10 backdrop-blur-2xl shadow-[0_0_35px_rgba(16,185,129,0.15)] mb-7 hover:scale-105 transition-all duration-500">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />

                  <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping" />
                </div>

                <p className="text-emerald-300 text-xs sm:text-sm md:text-base font-medium tracking-wide">
                  Available for internships & full-time roles
                </p>
              </div>

              {/* HEADING */}
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
                Hi, I'm
                <span className="block mt-3 bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(139,92,246,0.5)]">
                  Monalisa Jena
                </span>
              </h2>

              {/* DESCRIPTION */}
              <p className="mt-7 text-gray-300 text-sm sm:text-base md:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">
                Creative and passionate MCA graduate focused on building modern
                Android and Full Stack applications with premium UI, smooth user
                experience, and scalable solutions. Skilled in Java, Flutter,
                React, JavaScript, SQL, and responsive web technologies with a
                strong interest in innovative and futuristic digital
                experiences.
              </p>

              {/* ROLES */}
              <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                {roles.map((role, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden px-6 py-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:-translate-y-3 hover:rotate-1 hover:shadow-[0_25px_60px_rgba(139,92,246,0.3)] transition-all duration-700"
                    style={{
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* GRADIENT */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r ${role.gradient}`}
                    />

                    {/* SHINE */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* GLOW */}
                    <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-violet-500/20 to-cyan-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                    <div className="relative z-10 flex items-center gap-4 text-white">
                      <div className="text-2xl sm:text-3xl">{role.icon}</div>

                      <p className="text-sm sm:text-xl font-semibold tracking-wide">
                        {role.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* STATS */}
              <div className="mt-10 flex gap-5 flex-wrap justify-center lg:justify-start">
                {[
                  {
                    number: "5+",
                    label: "Projects",
                    color: "from-emerald-200 to-cyan-100",
                  },
                  {
                    number: "2",
                    label: "Internships",
                    color: "from-emerald-200 to-cyan-100",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden w-28 h-28 sm:w-32 sm:h-32 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl flex flex-col items-center justify-center hover:-translate-y-3 hover:rotate-2 hover:shadow-[0_20px_60px_rgba(139,92,246,0.25)] transition-all duration-700"
                  >
                    {/* LIGHT */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-violet-500/20 to-cyan-500/20" />

                    <h3
                      className={`relative z-10 text-3xl sm:text-4xl font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}
                    >
                      {item.number}
                    </h3>

                    <p className="relative z-10 text-gray-300 text-xs sm:text-sm mt-2 tracking-wide">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                {/* PROJECT BUTTON */}
                <button className="group relative overflow-hidden px-6 sm:px-8 py-4 rounded-full text-sm sm:text-base font-semibold text-white bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 shadow-[0_0_45px_rgba(139,92,246,0.35)] hover:scale-105 hover:-translate-y-1 transition-all duration-500 flex items-center gap-3">
                  <FaBriefcase />

                  <span className="relative z-10">My Projects</span>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>

                {/* CONNECT */}
                <button className="group relative overflow-hidden px-6 sm:px-8 py-4 rounded-full border border-violet-500/20 bg-white/10 backdrop-blur-2xl text-sm sm:text-base text-white font-semibold hover:scale-105 hover:-translate-y-1 hover:border-violet-400 transition-all duration-500 flex items-center gap-3">
                  <FaUser />

                  <span className="relative z-10">Let's Connect</span>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
                </button>

                {/* DOWNLOAD */}
                <a
                  href={resumePDF}
                  download
                  className="group relative overflow-hidden px-6 sm:px-8 py-4 rounded-full border border-violet-500/20 bg-white/10 backdrop-blur-2xl text-sm sm:text-base text-white font-semibold hover:scale-105 hover:-translate-y-1 hover:border-violet-400 transition-all duration-500 flex items-center gap-3"
                >
                  <FaDownload />

                  <span className="relative z-10">Download CV</span>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-500" />
                </a>
              </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="w-full lg:w-[42%] flex flex-col items-center">
              {/* IMAGE */}
              <div className="relative group">
                {/* OUTER GLOW */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-[120px] rounded-full animate-pulse" />

                {/* ROTATING RING */}
                <div className="absolute inset-[-15px] rounded-full border border-violet-500/20 animate-spin [animation-duration:12s]" />

                <div className="relative w-[220px] sm:w-[320px] lg:w-[430px] aspect-square rounded-full overflow-hidden border-[6px] border-violet-500/30 bg-white/10 backdrop-blur-2xl shadow-[0_25px_90px_rgba(139,92,246,0.35)] group-hover:scale-105 group-hover:-translate-y-3 transition-all duration-700">
                  <img
                    src={profileImg}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* SOCIAL ICONS */}
              <div className="flex justify-center gap-4 mt-8 flex-wrap">
                {/* GITHUB */}
                <a
                  href="#"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-[#f5f5f5] text-xl hover:-translate-y-3 hover:rotate-6 hover:shadow-[0_0_35px_rgba(255,255,255,0.25)] transition-all duration-500"
                >
                  <FaGithub />
                </a>

                {/* LINKEDIN */}
                <a
                  href="#"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-[#0A66C2] text-xl hover:-translate-y-3 hover:rotate-6 hover:shadow-[0_0_35px_rgba(10,102,194,0.45)] transition-all duration-500"
                >
                  <FaLinkedin />
                </a>

                {/* EMAIL */}
                <a
                  href="#"
                  className="group w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center hover:-translate-y-3 hover:rotate-6 hover:shadow-[0_0_35px_rgba(234,67,53,0.4)] transition-all duration-500"
                >
                  <MdEmail className="text-[#EA4335] text-xl" />
                </a>
              </div>

              {/* TOGGLE */}
              <div className="mt-10 w-full flex justify-center">
                <div className="flex items-center p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_35px_rgba(139,92,246,0.15)]">
                  <button
                    onClick={() => setActiveTab("personal")}
                    className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
                      activeTab === "personal"
                        ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                        : "text-gray-400"
                    }`}
                  >
                    <FaUser />
                    Personal
                  </button>

                  <button
                    onClick={() => setActiveTab("professional")}
                    className={`px-5 sm:px-8 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-500 flex items-center gap-2 ${
                      activeTab === "professional"
                        ? "bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 text-white shadow-[0_0_30px_rgba(139,92,246,0.4)]"
                        : "text-gray-400"
                    }`}
                  >
                    <FaBriefcase />
                    Professional
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
