// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Frontend",
//       color: "text-cyan-400",
//       skills: [
//         "React JS",
//         "JavaScript",
//         "HTML5",
//         "CSS3",
//         "Tailwind CSS",
//         "Responsive Design",
//       ],
//     },

//     {
//       title: "Backend & Database",
//       color: "text-green-400",
//       skills: [
//         "Firebase",
//         "SQL",
//         "MySQL",
//         "REST API",
//         "Authentication",
//       ],
//     },

//     {
//       title: "Tools & Platforms",
//       color: "text-pink-400",
//       skills: [
//         "GitHub",
//         "VS Code",
//         "Android Studio",
//         "Postman",
//         "Vercel",
//       ],
//     },

//     {
//       title: "Other Skills",
//       color: "text-yellow-400",
//       skills: [
//         "Problem Solving",
//         "UI/UX",
//         "Teamwork",
//         "Communication",
//         "Project Management",
//       ],
//     },
//   ];

//   return (
//     <section className="relative py-32 bg-[#050816] overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ffb3]/10 blur-[120px] rounded-full" />

//       {/* Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Section Header */}
//         <div className="mb-20">

//           <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
//             My Skills
//           </p>

//           <h2 className="text-5xl md:text-6xl font-black text-white">
//             Technical Arsenal
//           </h2>

//         </div>

//         {/* Skills Grid */}
//         <div className="grid md:grid-cols-2 gap-8">

//           {skillCategories.map((category, index) => (
//             <div
//               key={index}
//               className="bg-[#0B1224]/70 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:border-[#00ffb3]/30 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,179,0.04)]"
//             >

//               {/* Title */}
//               <h3
//                 className={`text-2xl font-bold mb-8 ${category.color}`}
//               >
//                 {category.title}
//               </h3>

//               {/* Skills */}
//               <div className="flex flex-wrap gap-4">

//                 {category.skills.map((skill, i) => (
//                   <span
//                     key={i}
//                     className="px-5 py-3 rounded-full bg-[#050816] border border-white/10 text-gray-300 hover:border-[#00ffb3]/40 hover:text-[#00ffb3] transition-all duration-300 cursor-pointer"
//                   >
//                     {skill}
//                   </span>
//                 ))}

//               </div>

//             </div>
//           ))}

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;



import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaFigma,
  FaGitAlt,
  FaDatabase,
  FaNodeJs,
  FaFire,
  FaUsers,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiPostman,
  SiVercel,
  SiVisualstudiocode,
  SiAndroidstudio,
} from "react-icons/si";

import {
  MdDesignServices,
  MdPsychology,
  MdRocketLaunch,
} from "react-icons/md";

import {
  HiChatBubbleLeftRight,
} from "react-icons/hi2";

const Skills = () => {

  const skillCategories = [
    {
      title: "Frontend Development",

      gradient:
        "from-cyan-400 via-blue-500 to-violet-500",

      glow:
        "hover:shadow-[0_20px_80px_rgba(34,211,238,0.25)]",

      skills: [
        {
          name: "React JS",
          icon: <FaReact />,
          color: "text-cyan-400",
        },

        {
          name: "JavaScript",
          icon: <FaJs />,
          color: "text-yellow-400",
        },

        {
          name: "HTML5",
          icon: <FaHtml5 />,
          color: "text-orange-500",
        },

        {
          name: "CSS3",
          icon: <FaCss3Alt />,
          color: "text-blue-400",
        },

        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          color: "text-cyan-300",
        },

        {
          name: "Responsive Design",
          icon: <MdDesignServices />,
          color: "text-pink-400",
        },
      ],
    },

    {
      title: "Backend & Database",

      gradient:
        "from-emerald-400 via-green-500 to-cyan-500",

      glow:
        "hover:shadow-[0_20px_80px_rgba(16,185,129,0.25)]",

      skills: [
        {
          name: "Firebase",
          icon: <SiFirebase />,
          color: "text-yellow-400",
        },

        {
          name: "SQL",
          icon: <FaDatabase />,
          color: "text-cyan-400",
        },

        {
          name: "MySQL",
          icon: <SiMysql />,
          color: "text-blue-400",
        },

        {
          name: "REST API",
          icon: <FaNodeJs />,
          color: "text-green-400",
        },

        {
          name: "Authentication",
          icon: <FaFire />,
          color: "text-orange-400",
        },
      ],
    },

    {
      title: "Tools & Platforms",

      gradient:
        "from-fuchsia-500 via-violet-500 to-pink-500",

      glow:
        "hover:shadow-[0_20px_80px_rgba(217,70,239,0.25)]",

      skills: [
        {
          name: "GitHub",
          icon: <FaGithub />,
          color: "text-white",
        },

        {
          name: "VS Code",
          icon: <SiVisualstudiocode />,
          color: "text-blue-400",
        },

        {
          name: "Android Studio",
          icon: <SiAndroidstudio />,
          color: "text-green-400",
        },

        {
          name: "Postman",
          icon: <SiPostman />,
          color: "text-orange-400",
        },

        {
          name: "Vercel",
          icon: <SiVercel />,
          color: "text-white",
        },

        {
          name: "Git",
          icon: <FaGitAlt />,
          color: "text-orange-500",
        },
      ],
    },

    {
      title: "Professional Skills",

      gradient:
        "from-yellow-400 via-orange-500 to-pink-500",

      glow:
        "hover:shadow-[0_20px_80px_rgba(251,191,36,0.25)]",

      skills: [
        {
          name: "Problem Solving",
          icon: <MdPsychology />,
          color: "text-yellow-300",
        },

        {
          name: "UI/UX Design",
          icon: <FaFigma />,
          color: "text-pink-400",
        },

        {
          name: "Teamwork",
          icon: <FaUsers />,
          color: "text-cyan-300",
        },

        {
          name: "Communication",
          icon: <HiChatBubbleLeftRight />,
          color: "text-violet-300",
        },

        {
          name: "Project Management",
          icon: <MdRocketLaunch />,
          color: "text-orange-300",
        },
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] py-24 sm:py-32">

      {/* BACKGROUND */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-[10%] right-0 w-[450px] h-[450px] bg-fuchsia-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 left-[35%] w-[450px] h-[450px] bg-violet-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.12) 1px, transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        {/* HEADING */}
        <div className="text-center mb-20">

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">

            Technical Arsenal

          </h2>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-8 transition-all duration-700 hover:-translate-y-3 ${category.glow}`}
            >

              <div
                className={`absolute top-0 left-0 h-[5px] w-full bg-gradient-to-r ${category.gradient}`}
              />

              <div className="relative z-10">

                <h3
                  className={`text-2xl sm:text-3xl font-black mb-10 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">

                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-4 rounded-2xl border border-white/10 bg-[#0B1224]/80 backdrop-blur-xl hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 cursor-pointer"
                    >

                      <div className={`text-2xl ${skill.color}`}>

                        {skill.icon}

                      </div>

                      <span className="text-gray-300 font-semibold text-sm sm:text-base">

                        {skill.name}

                      </span>

                    </div>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;