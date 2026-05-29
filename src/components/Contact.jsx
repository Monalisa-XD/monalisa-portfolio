// import {
//   FaGithub,
//   FaLinkedin,
//   FaInstagram,
//   FaEnvelope,
// } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <section className="relative py-32 bg-[#050816] overflow-hidden">

//       {/* Background Glow */}
//       <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ffb3]/10 blur-[120px] rounded-full" />

//       {/* Container */}
//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

//         {/* Heading */}
//         <div className="mb-20">

//           <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
//             Contact
//           </p>

//           <h2 className="text-5xl md:text-6xl font-black text-white">
//             Get In Touch
//           </h2>

//         </div>

//         {/* Main Grid */}
//         <div className="grid lg:grid-cols-2 gap-14">

//           {/* LEFT SIDE */}
//           <div>

//             <p className="text-gray-400 text-lg leading-9 mb-10">

//               I’m always open to discussing new opportunities,
//               collaborations, freelance projects, or creative ideas.

//             </p>

//             {/* Social Cards */}
//             <div className="space-y-6">

//               {/* Email */}
//               <a
//                 href="mailto:yourmail@gmail.com"
//                 className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-[#00ffb3]/30 transition-all duration-300"
//               >

//                 <div className="w-14 h-14 rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center text-[#00ffb3] text-2xl">

//                   <FaEnvelope />

//                 </div>

//                 <div>

//                   <h3 className="text-white font-bold text-lg">
//                     Email
//                   </h3>

//                   <p className="text-gray-400">
//                     yourmail@gmail.com
//                   </p>

//                 </div>

//               </a>

//               {/* LinkedIn */}
//               <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300"
//               >

//                 <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">

//                   <FaLinkedin />

//                 </div>

//                 <div>

//                   <h3 className="text-white font-bold text-lg">
//                     LinkedIn
//                   </h3>

//                   <p className="text-gray-400">
//                     Connect with me
//                   </p>

//                 </div>

//               </a>

//               {/* GitHub */}
//               <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-pink-400/30 transition-all duration-300"
//               >

//                 <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-2xl">

//                   <FaGithub />

//                 </div>

//                 <div>

//                   <h3 className="text-white font-bold text-lg">
//                     GitHub
//                   </h3>

//                   <p className="text-gray-400">
//                     View my repositories
//                   </p>

//                 </div>

//               </a>

//               {/* Instagram */}
//               <a
//                 href="#"
//                 target="_blank"
//                 className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-yellow-400/30 transition-all duration-300"
//               >

//                 <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-2xl">

//                   <FaInstagram />

//                 </div>

//                 <div>

//                   <h3 className="text-white font-bold text-lg">
//                     Instagram
//                   </h3>

//                   <p className="text-gray-400">
//                     Follow me
//                   </p>

//                 </div>

//               </a>

//             </div>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="bg-[#0B1224]/70 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,179,0.05)]">

//             <form className="space-y-8">

//               {/* Name */}
//               <div>

//                 <label className="block text-gray-300 mb-3">
//                   Your Name
//                 </label>

//                 <input
//                   type="text"
//                   placeholder="Enter your name"
//                   className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300"
//                 />

//               </div>

//               {/* Email */}
//               <div>

//                 <label className="block text-gray-300 mb-3">
//                   Your Email
//                 </label>

//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300"
//                 />

//               </div>

//               {/* Message */}
//               <div>

//                 <label className="block text-gray-300 mb-3">
//                   Message
//                 </label>

//                 <textarea
//                   rows="6"
//                   placeholder="Write your message..."
//                   className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300 resize-none"
//                 />

//               </div>

//               {/* Button */}
//               <button
//                 type="submit"
//                 className="w-full py-4 rounded-2xl bg-[#00ffb3] text-black font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,179,0.4)]"
//               >

//                 Send Message

//               </button>

//             </form>

//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 bg-[#050816] overflow-hidden"
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
            Get In Touch
          </h2>

          <p className="text-gray-400 text-lg mt-6 max-w-3xl mx-auto leading-8">
            Let's build something amazing together. Feel free to reach out for
            opportunities, collaborations, freelance projects, or simply to say
            hello.
          </p>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_30px_rgba(139,92,246,0.5)]" />
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Left Side */}
          <div>
            <p className="text-gray-300 text-lg leading-9 mb-10">
              I’m always open to discussing new opportunities,
              collaborations, freelance projects, or creative ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <a
                href="mailto:monalishaj975@gmail.com"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-red-400/40 hover:shadow-[0_20px_60px_rgba(239,68,68,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-400 text-2xl">
                  <FaEnvelope />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Email</h3>

                  <p className="text-gray-400 break-all">
                    monalishaj975@gmail.com
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">
                  <FaLinkedin />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">LinkedIn</h3>

                  <p className="text-gray-400">
                    Connect with me professionally
                  </p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-violet-400/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-violet-500/10 flex items-center justify-center text-violet-400 text-2xl">
                  <FaGithub />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">GitHub</h3>

                  <p className="text-gray-400">
                    View my projects & repositories
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="#"
                className="group flex items-center gap-5 bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-pink-400/40 hover:shadow-[0_20px_60px_rgba(236,72,153,0.2)] transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-2xl">
                  <FaInstagram />
                </div>

                <div>
                  <h3 className="text-white font-bold text-lg">Instagram</h3>

                  <p className="text-gray-400">
                    Follow my journey
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Right Side */}
          <div className="relative overflow-hidden bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-6 sm:p-10 shadow-[0_20px_80px_rgba(139,92,246,0.15)]">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 opacity-50" />

            <form className="relative z-10 space-y-8">
              <div>
                <label className="block text-gray-300 mb-3">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-3">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
                />
              </div>

              <div>
                <label className="block text-gray-300 mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none focus:border-cyan-400 focus:shadow-[0_0_25px_rgba(34,211,238,0.25)] transition-all duration-300"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl text-white font-bold text-lg bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_35px_rgba(139,92,246,0.35)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;