import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="relative py-32 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00ffb3]/10 blur-[120px] rounded-full" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="mb-20">

          <p className="text-[#00ffb3] uppercase tracking-[6px] text-sm mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Get In Touch
          </h2>

        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-14">

          {/* LEFT SIDE */}
          <div>

            <p className="text-gray-400 text-lg leading-9 mb-10">

              I’m always open to discussing new opportunities,
              collaborations, freelance projects, or creative ideas.

            </p>

            {/* Social Cards */}
            <div className="space-y-6">

              {/* Email */}
              <a
                href="mailto:yourmail@gmail.com"
                className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-[#00ffb3]/30 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-[#00ffb3]/10 flex items-center justify-center text-[#00ffb3] text-2xl">

                  <FaEnvelope />

                </div>

                <div>

                  <h3 className="text-white font-bold text-lg">
                    Email
                  </h3>

                  <p className="text-gray-400">
                    yourmail@gmail.com
                  </p>

                </div>

              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-cyan-400/30 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">

                  <FaLinkedin />

                </div>

                <div>

                  <h3 className="text-white font-bold text-lg">
                    LinkedIn
                  </h3>

                  <p className="text-gray-400">
                    Connect with me
                  </p>

                </div>

              </a>

              {/* GitHub */}
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-pink-400/30 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-400 text-2xl">

                  <FaGithub />

                </div>

                <div>

                  <h3 className="text-white font-bold text-lg">
                    GitHub
                  </h3>

                  <p className="text-gray-400">
                    View my repositories
                  </p>

                </div>

              </a>

              {/* Instagram */}
              <a
                href="#"
                target="_blank"
                className="flex items-center gap-5 bg-[#0B1224]/70 border border-white/10 rounded-3xl p-6 hover:border-yellow-400/30 transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-yellow-500/10 flex items-center justify-center text-yellow-400 text-2xl">

                  <FaInstagram />

                </div>

                <div>

                  <h3 className="text-white font-bold text-lg">
                    Instagram
                  </h3>

                  <p className="text-gray-400">
                    Follow me
                  </p>

                </div>

              </a>

            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-[#0B1224]/70 border border-white/10 rounded-[35px] p-10 backdrop-blur-xl shadow-[0_0_40px_rgba(0,255,179,0.05)]">

            <form className="space-y-8">

              {/* Name */}
              <div>

                <label className="block text-gray-300 mb-3">
                  Your Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300"
                />

              </div>

              {/* Email */}
              <div>

                <label className="block text-gray-300 mb-3">
                  Your Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300"
                />

              </div>

              {/* Message */}
              <div>

                <label className="block text-gray-300 mb-3">
                  Message
                </label>

                <textarea
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full bg-[#050816] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-[#00ffb3] transition-all duration-300 resize-none"
                />

              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#00ffb3] text-black font-bold text-lg hover:scale-[1.02] transition-all duration-300 shadow-[0_0_25px_rgba(0,255,179,0.4)]"
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