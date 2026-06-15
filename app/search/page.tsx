"use client";

import Link from "next/link";
import { useState } from "react";

export default function SearchFilter() {
  const [search, setSearch] = useState("");

  const products = [
    "🍎 Apple",
    "🍌 Banana",
    "🍊 Orange",
    "🥭 Mango",
    "🍇 Grapes",
    "🍍 Pineapple",
    "🍉 Watermelon",
  ];

  const filteredProducts = products.filter((item) =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-slate-950 flex items-center justify-center p-5 overflow-hidden">

      {/* Home Button */}
      <Link
        href="/"
        className="absolute top-5 left-5 bg-cyan-500/20 text-white px-5 py-2 rounded-xl border border-cyan-400/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 backdrop-blur-md z-50"
      >
        🏠 Home
      </Link>

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse top-10 left-10"></div>
      <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse bottom-10 right-10"></div>

      <div className="relative w-full max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-[32px] shadow-2xl p-8">

        <h1 className="text-5xl font-extrabold text-center text-white mb-3">
          🔍 Search Filter
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Search your favorite fruits instantly
        </p>

        <input
          type="text"
          placeholder="Type to search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-slate-300 border border-white/20 outline-none focus:ring-4 focus:ring-cyan-400/50 transition"
        />

        <div className="mt-4 text-slate-300">
          Results Found: {filteredProducts.length}
        </div>

        <div className="mt-6 space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item, index) => (
              <div
                key={index}
                className="bg-white/10 border border-white/20 rounded-2xl p-4 text-white text-lg hover:scale-105 hover:bg-white/20 transition-all duration-300 cursor-pointer"
              >
                {item}
              </div>
            ))
          ) : (
            <div className="text-center text-red-300 text-lg mt-6">
              ❌ No Results Found
            </div>
          )}
        </div>

      </div>
    </div>
  );
}