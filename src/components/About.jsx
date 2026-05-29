import {
  FaMapMarkerAlt,
  FaUniversity,
  FaGraduationCap,
  FaRocket,
  FaGlobeAsia,
} from "react-icons/fa";

import {
  MdLocationCity,
} from "react-icons/md";

const About = () => {

  const educationData = [
    {
      course: "Master of Computer Applications (MCA)",
      institution: "NIST University",
      year: "2024 - 2026",

      status: "8.4 CGPA",

      // image: "/mca-college.jpg",

      icon: <FaGraduationCap />,

      gradient:
        "from-cyan-400 via-blue-500 to-violet-500",

      glow:
        "hover:shadow-[0_20px_70px_rgba(34,211,238,0.28)]",
    },

    {
      course: "Bachelor of Computer Applications (BCA)",
      institution: "Berhampur University",
      subInstitution: "Rajiv Memorial Institute of Technology",

      year: "2021 - 2024",

      status: "84%",

      // image: "/bca-college.jpg",

      icon: <FaUniversity />,

      gradient:
        "from-fuchsia-500 via-violet-500 to-cyan-500",

      glow:
        "hover:shadow-[0_20px_70px_rgba(217,70,239,0.28)]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-32">

      {/* MULTI COLOR BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[140px] rounded-full" />

      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] bg-fuchsia-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 left-[35%] w-[450px] h-[450px] bg-violet-500/20 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-500/20 blur-[140px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* MAIN */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-20">

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">

            About Me

          </h2>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]" />

        </div>

        {/* WHO I AM */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-10 lg:p-14 shadow-[0_25px_90px_rgba(139,92,246,0.18)] mb-16 group">

          {/* GLOW */}
          <div className="absolute inset-0 opacity-60 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10" />

          {/* SHINE */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1800ms] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10 grid lg:grid-cols-3 gap-10 items-start">

            {/* LEFT */}
            <div className="lg:col-span-2">

              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 mb-8">

                <FaGlobeAsia className="text-cyan-400" />

                <p className="text-cyan-300 text-sm uppercase tracking-[4px]">
                  Who I Am
                </p>

              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent mb-8">

                Passionate Developer <br />
                Building Android and Web applications.

              </h3>

              <p className="text-gray-300 text-base sm:text-lg leading-8 sm:leading-9">

                MCA graduate with a strong foundation in computer fundamentals and software development.

                <br /><br />

                I enjoy building responsive and visually attractive
                applications using React, Tailwind CSS, JavaScript,
                Flutter, SQL, and modern web technologies with smooth
                user experiences and modern aesthetics.

                <br /><br />

                My goal is to continuously improve my technical skills,
                work on impactful real-world projects, and become a
                skilled software developer building innovative products.

              </p>

            </div>

            {/* RIGHT LOCATION BOX */}
            <div className="relative">

              <div className="absolute inset-0 rounded-[35px] bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-fuchsia-500/20 blur-2xl opacity-70" />

              <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-[#0B1224]/80 backdrop-blur-2xl p-8 shadow-[0_0_50px_rgba(34,211,238,0.12)]">

                <div className="absolute inset-0 opacity-40 bg-gradient-to-br from-cyan-500/10 via-transparent to-violet-500/10" />

                <div className="relative z-10">

                  <div className="flex items-center gap-3 mb-8">

                    <div className="w-12 h-12 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-xl">

                      <FaMapMarkerAlt />

                    </div>

                    <div>
                      <h4 className="text-white text-2xl font-bold">
                        Location
                      </h4>

                      <p className="text-gray-400 text-sm">
                        Personal Information
                      </p>
                    </div>

                  </div>

                  <div className="space-y-5">

                    {[
                      {
                        label: "Country",
                        value: "India",
                        icon: <FaGlobeAsia />,
                      },

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
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 hover:border-cyan-400/30 transition-all duration-300"
                      >

                        <div className="w-11 h-11 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">

                          {item.icon}

                        </div>

                        <div>

                          <p className="text-gray-400 text-xs uppercase tracking-[3px]">
                            {item.label}
                          </p>

                          <h5 className="text-white font-semibold text-lg mt-1">
                            {item.value}
                          </h5>

                        </div>

                      </div>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* EDUCATION */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-10 lg:p-14 shadow-[0_25px_90px_rgba(139,92,246,0.18)] mb-16">

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 via-violet-500/10 to-cyan-500/10 opacity-50" />

          <div className="relative z-10">

            {/* TITLE */}
            <div className="flex items-center gap-4 mb-12">

              <div className="w-14 h-14 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400 text-2xl">

                <FaGraduationCap />

              </div>

              <div>

                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-fuchsia-500 via-violet-400 to-cyan-400 bg-clip-text text-transparent">

                  Education Details

                </h3>

                <p className="text-gray-400 mt-2">
                  Academic Journey & Qualifications
                </p>

              </div>

            </div>

            {/* EDUCATION CARDS */}
            <div className="space-y-8">

              {educationData.map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-[35px] border border-white/10 bg-[#0B1224]/70 backdrop-blur-2xl p-6 sm:p-8 transition-all duration-700 hover:-translate-y-2 ${item.glow}`}
                >

                  {/* CARD LIGHT */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r ${item.gradient}/10`}
                  />

                  {/* SHINE */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1600ms] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  {/* SIDE LIGHT */}
                  <div
                    className={`absolute left-0 top-0 h-full w-[6px] bg-gradient-to-b ${item.gradient}`}
                  />

                  <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">

                    {/* LEFT */}
                    <div className="flex items-start gap-5">

                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center text-white text-2xl shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
                      >

                        {item.icon}

                      </div>

                      <div>

                        <h4
                          className={`text-2xl sm:text-3xl font-black bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                        >

                          {item.course}

                        </h4>

                        <div className="mt-4">

                          <p className="text-white text-lg sm:text-xl font-semibold">
                            {item.institution}
                          </p>

                          <p className="text-gray-400 mt-2 text-sm sm:text-base">
                            {item.subInstitution}
                          </p>

                        </div>

                      </div>

                    </div>

                    {/* RIGHT */}
                    <div className="flex flex-col sm:flex-row gap-5">

                      {/* COLLEGE IMAGE BOX */}
                      <div className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-2 shadow-[0_0_40px_rgba(255,255,255,0.05)] w-[180px] h-[180px]">

                        {/* GLOW */}
                        <div
                          className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br ${item.gradient}/20`}
                        />

                        {/* IMAGE */}
                        <img
                          src={item.image}
                          alt="college"
                          className="relative z-10 w-full h-full object-cover rounded-[22px] group-hover:scale-105 transition-all duration-700"
                        />

                      </div>

                      {/* YEAR + RESULT BOX */}
                      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl px-7 py-6 min-w-[180px] shadow-[0_0_40px_rgba(255,255,255,0.05)]">

                        {/* LIGHT */}
                        <div
                          className={`absolute inset-0 opacity-20 bg-gradient-to-br ${item.gradient}`}
                        />

                        <div className="relative z-10">

                          {/* YEAR */}
                          <div className="mb-7">

                            <p className="text-cyan-400 text-xs uppercase tracking-[4px] font-semibold">
                              Passing Year
                            </p>

                            <h5 className="text-white text-xl font-bold mt-3">
                              {item.year}
                            </h5>

                          </div>

                          {/* DIVIDER */}
                          <div className="w-full h-[1px] bg-white/10 mb-6" />

                          {/* RESULT */}
                          <div>

                            <p className="text-fuchsia-400 text-xs uppercase tracking-[4px] font-semibold">
                              Result
                            </p>

                            <h5 className="text-white text-2xl font-black mt-3">
                              {item.status}
                            </h5>

                          </div>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* CAREER GOAL */}
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-10 lg:p-14 shadow-[0_25px_90px_rgba(34,211,238,0.15)] group">

          {/* GLOW */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-50" />

          {/* SHINE */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1800ms] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="relative z-10">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-violet-500 flex items-center justify-center text-white text-2xl shadow-[0_0_35px_rgba(34,211,238,0.25)]">

                <FaRocket />

              </div>

              <div>

                <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">

                  Career Goal

                </h3>

                <p className="text-gray-400 mt-2">
                  Vision & Future Aspirations
                </p>

              </div>

            </div>

            <p className="text-gray-300 text-base sm:text-lg leading-8 sm:leading-9 max-w-5xl">

              My goal is to become a professional software developer
              and build impactful digital products with premium user
              experiences and modern technologies. I aspire to work
              on innovative real-world projects, continuously improve
              my development skills, and contribute to scalable,
              futuristic, and visually attractive applications.

            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;