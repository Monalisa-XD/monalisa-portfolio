import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import SummerTraining from "./components/SummerTraining";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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

      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;