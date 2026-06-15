"use client";

import Link from "next/link";
import { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-slate-950 flex items-center justify-center p-5 overflow-hidden">

      {/* Home Button */}
      <Link
        href="/"
        className="absolute top-5 left-5 bg-cyan-500/20 text-white px-5 py-2 rounded-xl border border-cyan-400/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-md"
      >
        🏠 Home
      </Link>

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      {/* Counter Card */}
      <div className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl p-10 text-center">

        <h1 className="text-5xl font-extrabold text-white mb-4">
          🧮 Counter App
        </h1>

        <p className="text-slate-300 mb-8">
          Increase, Decrease and Reset Counter
        </p>

        <div className="text-8xl font-bold text-cyan-400 mb-10">
          {count}
        </div>

        <div className="flex justify-center gap-4 flex-wrap">

          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110"
          >
            ➕
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110"
          >
            ➖
          </button>

          <button
            onClick={() => setCount(0)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl text-xl font-bold transition-all duration-300 hover:scale-110"
          >
            🔄 Reset
          </button>

        </div>

      </div>
    </div>
  );
}