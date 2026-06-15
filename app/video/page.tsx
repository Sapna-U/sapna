"use client";

import Link from "next/link";

export default function VideoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-slate-950 flex items-center justify-center p-5">

      <Link
        href="/"
        className="absolute top-5 left-5 bg-cyan-500/20 text-white px-5 py-2 rounded-xl border border-cyan-400/30"
      >
        🏠 Home
      </Link>

      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-xl p-8 rounded-3xl">

        <h1 className="text-5xl text-center font-bold text-white mb-6">
          🎥 Video Player
        </h1>

        <video
          className="w-full rounded-2xl"
          controls
        >
          <source
            src="/videos/demo.mp4"
            type="video/mp4"
          />
          Your browser does not support video.
        </video>

      </div>
    </div>
  );
}