import Link from "next/link";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link
            href="/"
            className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            🏠 Home
          </Link>

          <div className="flex flex-wrap gap-5 text-sm md:text-base font-medium">

            <a href="#education" className="hover:text-blue-600">
              Education
            </a>

            <a href="#skills" className="hover:text-blue-600">
              Skills
            </a>

            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>

            <a href="#softskills" className="hover:text-blue-600">
              Soft Skills
            </a>

            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>

            <Link
              href="/admin/login"
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              Login
            </Link>

            <Link
              href="/admin/register"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg"
            >
              Register
            </Link>

          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex justify-center p-8">
        <div className="w-full max-w-4xl flex flex-col gap-8">

          <Hero />

          <section id="education">
            <Education />
          </section>

          <section id="skills">
            <Skills />
          </section>

          <section id="projects">
            <Projects />
          </section>

          <section id="softskills">
            <SoftSkills />
          </section>

          <section id="contact">
            <Contact />
          </section>

        </div>
      </div>

    </main>
  );
}