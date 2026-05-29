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
  FaWindows,
  FaLinux,
  FaJava,
  FaPython,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from "react-icons/fa";

import {
  SiC,
  SiCplusplus,
  SiDart,
  SiMysql,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiFlutter,
  SiAndroidstudio,
  SiEclipseide,
  SiGooglecolab,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      skills: [
        { name: "Windows", icon: <FaWindows /> },
        { name: "Linux", icon: <FaLinux /> },
      ],
    },

    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <SiC /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "SQL", icon: <SiMysql /> },
        { name: "Dart", icon: <SiDart /> },
      ],
    },

    {
      title: "Web Technologies",
      
      skills: [
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "XML", icon: "📄" },
      ],
    },

    {
      title: "Frameworks & Libraries",
      
      skills: [
        { name: "React.js", icon: <SiReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "Bootstrap", icon: <SiBootstrap /> },
        { name: "Flutter", icon: <SiFlutter /> },
      ],
    },

    {
      title: "Tools & IDEs",
    
      skills: [
      { name: "VS Code", icon: "💻" },
        { name: "Android Studio", icon: "📱" },
        { name: "Eclipse", icon: "🌙" },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "Google Colab", icon:  "☁️" },
        { name: "MS Excel", icon: "📊" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 bg-[#050816] overflow-hidden"
    >
      {/* Neon Background */}
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
            Technical Skills
          </h2>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-3xl p-8 hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-[0_20px_80px_rgba(139,92,246,0.25)] transition-all duration-500"
            >
              {/* Glow Layer */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 transition-all duration-500" />

              <div className="relative z-10">
                <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-3">
                  <span className="text-3xl">{category.icon}</span>
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-4">
                  {category.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#050816] border border-white/10 text-gray-300 hover:border-cyan-400/40 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
                    >
                      <span className="text-lg">{skill.icon}</span>
                      <span>{skill.name}</span>
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

