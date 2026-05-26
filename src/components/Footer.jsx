import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#050816] border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-[#00ffb3]/10 blur-[100px]" />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-14">

        {/* Top */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

          {/* Logo & Text */}
          <div>

            <h2 className="text-3xl font-black text-white">

              Monalisa
              <span className="text-[#00ffb3]">
                .
              </span>

            </h2>

            <p className="text-gray-400 mt-4 max-w-md leading-8">

              Passionate frontend developer focused on building
              futuristic, responsive, and premium digital experiences.

            </p>

          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap gap-8 text-gray-400 font-medium">

            {[
              "Home",
              "About",
              "Skills",
              "Projects",
              "Contact",
            ].map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase()}`}
                className="hover:text-[#00ffb3] transition-all duration-300"
              >
                {item}
              </a>
            ))}

          </div>

          {/* Social Icons */}
          <div className="flex gap-5">

            {[
              FaGithub,
              FaLinkedin,
              FaInstagram,
            ].map((Icon, index) => (
              <div
                key={index}
                className="w-14 h-14 rounded-2xl bg-[#0B1224]/80 border border-white/10 flex items-center justify-center text-white text-2xl hover:border-[#00ffb3] hover:text-[#00ffb3] transition-all duration-300 cursor-pointer"
              >

                <Icon />

              </div>
            ))}

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500 text-sm">

            © 2026 Monalisa Jena. All rights reserved.

          </p>

          <p className="text-gray-500 text-sm">

            Designed & Developed with ❤️ using React & Tailwind CSS

          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;