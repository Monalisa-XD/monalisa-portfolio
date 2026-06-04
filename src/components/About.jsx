import {
  FaMapMarkerAlt,
  FaUniversity,
  FaGraduationCap,
  FaRocket,
  FaGlobeAsia,
  FaMedal,
  FaCalendarAlt,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";

const About = () => {
  const educationData = [
    {
      course: "Master of Computer Applications",
      short: "MCA",
      institution: "NIST University",
      year: "2024 – 2026",
      status: "8.4 CGPA",
      rank: "Ongoing",
      icon: <FaGraduationCap />,
      accent: "#22d3ee",
      gradient: "from-cyan-400 via-blue-500 to-violet-500",
      glow: "rgba(34,211,238,0.22)",
    },
    {
      course: "Bachelor of Computer Applications",
      short: "BCA",
      institution: "Berhampur University",
      subInstitution: "Rajiv Memorial Institute of Technology",
      year: "2021 – 2024",
      status: "84%",
      rank: "First Class",
      icon: <FaUniversity />,
      accent: "#d946ef",
      gradient: "from-fuchsia-500 via-violet-500 to-cyan-500",
      glow: "rgba(217,70,239,0.22)",
    },
  ];

  return (
    <section
      className="relative overflow-hidden bg-[#020617] py-28 sm:py-36"
      style={{ fontFamily: "'Syne', 'Inter', sans-serif" }}
    >
      {/* AURORA BACKGROUND */}
<div className="absolute inset-0 overflow-hidden pointer-events-none">

  <div className="absolute -top-[20%] -left-[10%] w-[900px] h-[900px] bg-cyan-500/15 rounded-full blur-[220px] animate-pulse" />

  <div className="absolute top-[20%] -right-[10%] w-[850px] h-[850px] bg-fuchsia-500/15 rounded-full blur-[220px] animate-pulse" />

  <div className="absolute bottom-[-15%] left-[20%] w-[900px] h-[900px] bg-violet-500/15 rounded-full blur-[220px] animate-pulse" />

</div>
      {/* ── AMBIENT ORBS ── */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[160px]" />
        <div className="absolute top-[30%] -right-40 w-[500px] h-[500px] rounded-full bg-fuchsia-500/10 blur-[160px]" />
        <div className="absolute bottom-0 left-[30%] w-[500px] h-[500px] rounded-full bg-violet-500/10 blur-[160px]" />
      </div>

      {/* ── DOT GRID ── */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* ── MAIN ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* HEADING */}
        <div className="text-center mb-24">
          <h2
  className="
  text-6xl
  sm:text-7xl
  lg:text-8xl
  font-black
  leading-none
  tracking-tight
  bg-gradient-to-r
  from-blue-400
  via-cyan-400
  to-fuchsia-500
  bg-clip-text
  text-transparent
  drop-shadow-[0_0_35px_rgba(34,211,238,0.35)]
  "
>
  About Me
</h2>
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-400/60" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
        </div>

        {/* ── WHO I AM ── */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-12 lg:p-16 mb-10 group">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[2000ms] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-5 gap-12 items-start">
            {/* TEXT — 3 cols */}
            <div className="lg:col-span-3">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 mb-8">
                <FaGlobeAsia className="text-cyan-400 text-xs" />
                <span className="text-cyan-300 text-[11px] uppercase tracking-[4px]">
                  Who I Am
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] text-white mb-8">
                Passionate Developer
                <br />
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Building Android &amp; Web
                </span>
              </h3>

              <div className="space-y-5 text-gray-400 text-base sm:text-[17px] leading-8">
                <p>
                  MCA graduate with a strong foundation in computer fundamentals
                  and software development.
                </p>
                <p>
                  I enjoy building responsive and visually attractive
                  applications using{" "}
                  <span className="text-white font-medium">
                    React, Tailwind CSS, JavaScript, Flutter, SQL
                  </span>
                  , and modern web technologies with smooth user experiences and
                  modern aesthetics.
                </p>
                <p>
                  My goal is to continuously improve my technical skills, work
                  on impactful real-world projects, and become a skilled
                  software developer building innovative products.
                </p>
              </div>
            </div>

            {/* LOCATION — 2 cols */}
            <div className="lg:col-span-2">
              <div className="rounded-[28px] border border-white/[0.07] bg-[#080f1f]/80 overflow-hidden">
                <div className="px-7 py-5 border-b border-white/[0.07] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                    <FaMapMarkerAlt className="text-sm" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-base">Location</p>
                    <p className="text-gray-500 text-xs">
                      Personal Information
                    </p>
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  {[
                    { label: "Country", value: "India", icon: <FaGlobeAsia /> },
                    {
                      label: "State",
                      value: "Odisha",
                      icon: <MdLocationCity />,
                    },
                    {
                      label: "District",
                      value: "Ganjam",
                      icon: <FaMapMarkerAlt />,
                    },
                    {
                      label: "Hometown",
                      value: "Berhampur",
                      icon: <FaMapMarkerAlt />,
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between px-5 py-4 rounded-2xl border border-white/[0.06] bg-white/[0.03] hover:border-cyan-400/20 hover:bg-cyan-400/[0.04] transition-all duration-300 group/row"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-cyan-400/60 group-hover/row:text-cyan-400 transition-colors text-sm">
                          {item.icon}
                        </span>
                        <p className="text-gray-500 text-xs uppercase tracking-[3px]">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-white font-semibold text-sm">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── EDUCATION ── */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.03] backdrop-blur-2xl p-8 sm:p-12 lg:p-16 mb-10">
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent" />

          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-14">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-xl">
                <FaGraduationCap />
              </div>
              <div>
                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Education
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Academic Journey &amp; Qualifications
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {educationData.map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-[28px] border border-white/[0.07] bg-[#080f1f]/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1"
                  style={{
                    boxShadow: `0 0 0 0 ${item.glow}`,
                    transition: "box-shadow 0.4s, transform 0.4s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow = `0 20px 60px ${item.glow}`)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow = `0 0 0 0 ${item.glow}`)
                  }
                >
                  <div
                    className={`absolute left-0 top-0 h-full w-1 bg-gradient-to-b ${item.gradient}`}
                  />
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1500ms] bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

                  <div className="relative z-10 p-7 sm:p-9 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    {/* LEFT */}
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white text-xl shadow-lg`}
                        >
                          {item.icon}
                        </div>
                        <div className="mt-3 text-center">
                          <span
                            className={`text-[11px] font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent tracking-[2px]`}
                          >
                            {item.short}
                          </span>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                          {item.course}
                        </h4>
                        <p className="text-gray-300 font-semibold mt-2 text-base">
                          {item.institution}
                        </p>
                        {item.subInstitution && (
                          <p className="text-gray-500 text-sm mt-1">
                            {item.subInstitution}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* RIGHT — stat tiles */}
                    <div className="flex gap-4 shrink-0">
                      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] px-6 py-5 min-w-[130px]">
                        <div className="flex items-center gap-2 mb-2">
                          <FaCalendarAlt className="text-cyan-400/70 text-xs" />
                          <p className="text-cyan-400 text-[10px] uppercase tracking-[3px] font-semibold">
                            Period
                          </p>
                        </div>
                        <p className="text-white text-base font-bold">
                          {item.year}
                        </p>
                      </div>

                      <div className="relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.04] px-6 py-5 min-w-[130px]">
                        <div className="flex items-center gap-2 mb-2">
                          <FaMedal className="text-fuchsia-400/70 text-xs" />
                          <p className="text-fuchsia-400 text-[10px] uppercase tracking-[3px] font-semibold">
                            Result
                          </p>
                        </div>
                        <p
                          className={`text-2xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                        >
                          {item.status}
                        </p>
                        <p className="text-gray-500 text-xs mt-1">
                          {item.rank}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CAREER GOAL ── */}
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-gradient-to-br
from-white/[0.08]
via-white/[0.04]
to-transparent backdrop-blur-2xl p-8 sm:p-12 lg:p-16 group">
          <div className="absolute top-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent" />
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[2000ms] bg-gradient-to-r from-transparent via-white/[0.03] to-transparent" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start gap-10">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center text-white text-2xl shadow-[0_0_40px_rgba(34,211,238,0.2)]">
                <FaRocket />
              </div>
            </div>

            <div>
              <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent mb-2">
                Career Goal
              </h3>
              <p className="text-gray-500 text-sm mb-7">
                Vision &amp; Future Aspirations
              </p>

              <p className="text-gray-300 text-base sm:text-[17px] leading-8 sm:leading-9 max-w-4xl">
                My goal is to become a professional software developer and build
                impactful digital products with{" "}
                <span className="text-white font-medium">
                  premium user experiences
                </span>{" "}
                and modern technologies. I aspire to work on innovative
                real-world projects, continuously improve my development skills,
                and contribute to scalable, futuristic, and visually attractive
                applications.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">
                {[
                  "Software Development",
                  "Modern UI/UX",
                  "Scalable Products",
                  "Innovation",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full text-xs border border-white/[0.08] bg-white/[0.04] text-gray-400 uppercase tracking-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
