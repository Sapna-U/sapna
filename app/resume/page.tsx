import Link from "next/link";

import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import SoftSkills from "@/components/SoftSkills";
import Contact from "@/components/Contact";

export default function ResumePage() {
  return (
    <main className="min-h-screen flex justify-center p-8 bg-slate-100 relative">

      {/* Home Button */}
      <Link
        href="/"
        className="fixed top-5 left-5 bg-blue-600 text-white px-5 py-2 rounded-xl shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 z-50"
      >
        🏠 Home
      </Link>

      {/* Container */}
      <div className="w-full max-w-4xl flex flex-col gap-8">

        <Hero />
        <Education />
        <Skills />
        <Projects />
        <SoftSkills />
        <Contact />

      </div>

    </main>
  );
}