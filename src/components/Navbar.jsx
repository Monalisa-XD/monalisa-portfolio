import { useState, useEffect } from "react";
import { HiBars3, HiXMark, HiMoon, HiSun } from "react-icons/hi2";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") !== "light",
  );

  const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Theme Toggle
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
      ${
        scrolled
          ? "bg-white/80 dark:bg-[#070B1A]/80 backdrop-blur-2xl border-b border-black/10 dark:border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center gap-3 cursor-pointer group">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 blur-md opacity-70 group-hover:opacity-100 transition duration-500" />

            <img
              src="/profile.jpg"
              alt="profile"
              className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-white/20"
            />
          </div>

          {/* Name */}
          <h1 className="text-base sm:text-lg font-bold tracking-wide text-black dark:text-white">
            Monalisa Jena
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <li
              key={index}
              onClick={() => setActive(link)}
              className={`relative text-sm font-medium cursor-pointer transition-all duration-300
              ${
                active === link
                  ? "text-violet-500"
                  : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              }`}
            >
              {link}

              {active === link && (
                <span className="absolute left-0 -bottom-2 w-full h-[2px] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              )}
            </li>
          ))}
        </ul>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">
          {/* Resume */}
          <a
            href="/resume.pdf"
            download
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-400 to-cyan-500 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.45)]"
          >
            Resume
          </a>

          {/* Theme Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#111827] flex items-center justify-center transition-all duration-300"
          >
            {darkMode ? (
              <HiSun className="text-xl text-yellow-400" />
            ) : (
              <HiMoon className="text-xl text-violet-600" />
            )}
          </button>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme Button Mobile */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full border border-black/10 dark:border-white/10 bg-white dark:bg-[#111827] flex items-center justify-center"
          >
            {darkMode ? (
              <HiSun className="text-yellow-400 text-lg" />
            ) : (
              <HiMoon className="text-violet-600 text-lg" />
            )}
          </button>

          {/* Menu Icon */}
          <div
            className="text-black dark:text-white text-3xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <HiXMark /> : <HiBars3 />}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500
        ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="mx-4 mb-4 rounded-3xl bg-white dark:bg-[#0B1224] backdrop-blur-2xl border border-black/10 dark:border-white/10 p-6 shadow-xl">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  setActive(link);
                  setMenuOpen(false);
                }}
                className={`text-base font-medium transition-all duration-300 cursor-pointer
                ${
                  active === link
                    ? "text-violet-500"
                    : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
                }`}
              >
                {link}
              </li>
            ))}
          </ul>

          {/* Mobile Resume */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-block w-full text-center px-5 py-3 rounded-full bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-400 text-white font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
