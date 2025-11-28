import { useEffect } from "react";
import Sidebar from "./components/layout/Sidebar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/AboutSection";
import Projects from "./components/sections/ProjectCard";
import Contact from "./components/sections/ContactForm";

export default function App() {
  // Optional: smooth scrolling polyfill for older browsers
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="ml-20 md:ml-64 w-full min-h-screen bg-[#030712] text-white">
        {/* Home Section */}
        <section id="home" className="min-h-screen flex items-center px-10">
          <Hero />
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center px-10 py-20"
        >
          <About />
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-10 py-20">
          <Projects />
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center px-10 py-20"
        >
          <Contact />
        </section>
      </main>
    </div>
  );
}
