import { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const SummerTraining = lazy(() => import("./components/SummerTraining"));
const Experience = lazy(() => import("./components/Experience"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

const SectionLoader = () => (
  <div className="w-full min-h-[300px] flex items-center justify-center">
    <div className="relative">
      <div className="w-12 h-12 rounded-full border-t-2 border-b-2 border-cyan-400 animate-spin" />
      <div className="absolute inset-0 w-12 h-12 rounded-full border-l-2 border-r-2 border-violet-500 animate-pulse opacity-50" />
    </div>
  </div>
);

function App() {
  return (
    <div className="bg-[#050816] text-white overflow-x-hidden">

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">

        {/* Hero */}
        <section id="home" className="scroll-mt-20">
          <Hero />
        </section>

        <Suspense fallback={<SectionLoader />}>
          {/* About */}
          <section id="about" className="scroll-mt-20">
            <About />
          </section>

          {/* Skills */}
          <section id="skills" className="scroll-mt-20">
            <Skills />
          </section>

          {/* Summer Training */}
          <section id="training" className="scroll-mt-20">
            <SummerTraining />
          </section>

          {/* Experience */}
          <section id="experience" className="scroll-mt-20">
            <Experience />
          </section>

          {/* Projects */}
          <section id="projects" className="scroll-mt-20">
            <Projects />
          </section>

          {/* Contact */}
          <section id="contact" className="scroll-mt-20">
            <Contact />
          </section>
        </Suspense>

      </main>

      <Suspense fallback={null}>
        {/* Footer */}
        <Footer />
      </Suspense>

    </div>
  );
}

export default App;