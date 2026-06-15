import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-950 flex items-center justify-center overflow-hidden">

      {/* Animated Background */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      {/* Main Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-[32px] p-12 w-[90%] max-w-6xl text-center">

        <h1 className="text-6xl font-extrabold text-white mb-4 tracking-wide">
          Welcome
        </h1>

        <p className="text-slate-300 text-lg mb-10">
          Explore My Projects
        </p>

        <div className="grid md:grid-cols-3 gap-6">

          {/* Resume */}
          <Link
            href="/resume"
            className="group bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-6xl mb-4 group-hover:rotate-6 transition">
              📄
            </div>

            <h2 className="text-2xl font-bold text-white">
              Resume
            </h2>

            <p className="text-slate-300 mt-2">
              View Portfolio
            </p>
          </Link>

          {/* Todo App */}
          <Link
            href="/todo"
            className="group bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-6xl mb-4 group-hover:rotate-6 transition">
              📝
            </div>

            <h2 className="text-2xl font-bold text-white">
              Todo App
            </h2>

            <p className="text-slate-300 mt-2">
              Manage Tasks
            </p>
          </Link>

          {/* Search Filter */}
          <Link
            href="/search"
            className="group bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-6xl mb-4 group-hover:rotate-6 transition">
              🔍
            </div>

            <h2 className="text-2xl font-bold text-white">
              Search Filter
            </h2>

            <p className="text-slate-300 mt-2">
              Search Data
            </p>
          </Link>

          {/* Counter App */}
          <Link
            href="/counter"
            className="group bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-6xl mb-4 group-hover:rotate-6 transition">
              🧮
            </div>

            <h2 className="text-2xl font-bold text-white">
              Counter App
            </h2>

            <p className="text-slate-300 mt-2">
              Count Operations
            </p>
          </Link>

          {/* Video Player */}
          <Link
            href="/video"
            className="group bg-white/10 border border-white/20 rounded-3xl p-8 hover:scale-105 hover:bg-white/20 transition-all duration-500"
          >
            <div className="text-6xl mb-4 group-hover:rotate-6 transition">
              🎥
            </div>

            <h2 className="text-2xl font-bold text-white">
              Video Player
            </h2>

            <p className="text-slate-300 mt-2">
              Play Videos
            </p>
          </Link>

        </div>

        <div className="mt-10">
          <p className="text-slate-400">
            Built with Next.js + Tailwind CSS
          </p>
        </div>

      </div>

    </main>
  );
}