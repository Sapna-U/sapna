"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Sapna Portfolio
        </h1>

        {/* Menu */}
        <div className="flex items-center gap-6">

          <a href="#education" className="hover:text-blue-600 transition">
            Education
          </a>

          <a href="#skills" className="hover:text-blue-600 transition">
            Skills
          </a>

          <a href="#projects" className="hover:text-blue-600 transition">
            Projects
          </a>

          <a href="#softskills" className="hover:text-blue-600 transition">
            Soft Skills
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

          {/* Login Button */}
          <Link
            href="/admin/login"
            className="px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
          >
            Login
          </Link>

          {/* Register Button */}
          <Link
            href="/admin/register"
            className="px-5 py-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl hover:scale-105 transition"
          >
            Register
          </Link>

        </div>
      </div>
    </nav>
  );
}