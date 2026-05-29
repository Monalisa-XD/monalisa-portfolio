
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaAddressBook,
} from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "Home", icon: <FaHome />, href: "#home" },
    { name: "About", icon: <FaUser />, href: "#about" },
    { name: "Skills", icon: <FaCode />, href: "#skills" },
    { name: "Projects", icon: <FaProjectDiagram />, href: "#projects" },
    { name: "Contact", icon: <FaAddressBook />, href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "YOUR_GITHUB",
    },
    {
      icon: <FaLinkedin />,
      link: "YOUR_LINKEDIN",
    },
    {
      icon: <FaInstagram />,
      link: "YOUR_INSTAGRAM",
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050816] border-t border-white/10">

      {/* Neon Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-fuchsia-500/20 blur-[150px] rounded-full" />

      <div className="absolute top-[40%] left-[40%] w-[350px] h-[350px] bg-violet-500/20 blur-[150px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Top Gradient Border */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* LEFT */}
          <div>

            <div className="flex items-center gap-5">

              <div className="relative">

                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 blur-xl opacity-80" />

                {/* Profile Placeholder */}
<div className="relative w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 flex items-center justify-center text-black text-3xl font-black border-4 border-white/10">

  MJ

</div>

              </div>

              <div>

                <h2 className="text-3xl font-black text-white">
                  Monalisa Jena
                </h2>

                <p className="text-cyan-100 font-small">
                  Android & Full Stack Developer
                </p>

                <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20">

                  <div className="w-2 h-2 rounded-full bg-green-400" />

                  <span className="text-green-400 text-xs">
                    Open To Work
                  </span>

                </div>

              </div>

            </div>

            <p className="text-gray-400 leading-8 mt-8">

              Passionate MCA student focused on creating modern,
              responsive and premium digital experiences using
              React, JavaScript, Tailwind CSS, Flutter, SQL
              and modern technologies.

            </p>

          </div>

          {/* CENTER */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Quick Links
            </h3>

            <div className="space-y-4">

              {quickLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center gap-4 text-gray-400 hover:text-cyan-400 transition-all duration-300"
                >
                  <span className="group-hover:scale-110 transition-all duration-300">
                    {item.icon}
                  </span>

                  {item.name}
                </a>
              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-8">
              Contact & Socials
            </h3>

            <div className="space-y-5">

              <div className="flex items-center gap-4 text-gray-300">
                <FaEnvelope className="text-red-500 text-xl" />

                <span>monalishaj975@gmail.com</span>

              </div>

              <div className="flex items-center gap-4 text-gray-300">

                <FaPhoneAlt className="text-cyan-400" />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex items-center gap-4 text-gray-300">

                <FaMapMarkerAlt className="text-red-400 text-xl" />

                <span>Berhampur, Odisha, India</span>

              </div>

            </div>

            <div className="flex gap-4 mt-8">

              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center text-white text-xl hover:border-cyan-400 hover:scale-110 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]"
                >
                  <span className="group-hover:text-cyan-400 transition-all duration-300">
                    {item.icon}
                  </span>
                </a>
              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10">

          <div className="flex flex-col md:flex-row items-center justify-between gap-5">

            <p className="text-gray-500 text-sm text-center">

              © 2026 Monalisa Jena. All Rights Reserved.

            </p>

            <p className="text-gray-500 text-sm text-center">

              Designed & Developed with ❤️ using React & Tailwind CSS

            </p>

            <a
              href="#home"
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 flex items-center justify-center text-black hover:scale-110 transition-all duration-300 shadow-[0_0_25px_rgba(139,92,246,0.4)]"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;