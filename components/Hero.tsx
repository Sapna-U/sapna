import { resume } from "@/data/resume";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      rounded-[40px]
      p-12
      mb-8
      text-center

      bg-gradient-to-br
      from-indigo-900
      via-purple-800
      to-pink-700

      shadow-[0_20px_60px_rgba(0,0,0,0.4)]
      border-2 border-white/20
      backdrop-blur-lg

      animate-[heroFade_1.2s_ease]
      "
    >
      {/* Background Glow */}
      <div className="absolute w-80 h-80 bg-pink-500/30 rounded-full blur-3xl -top-20 -left-20 animate-pulse"></div>

      <div className="absolute w-80 h-80 bg-blue-500/30 rounded-full blur-3xl -bottom-20 -right-20 animate-pulse"></div>

      <div className="relative z-10">
        {/* Profile Image */}
        <div className="flex justify-center mb-8">
          <div
            className="
            p-2
            rounded-full

            bg-gradient-to-r
            from-yellow-400
            via-pink-500
            to-cyan-400

            animate-[glowPulse_3s_ease-in-out_infinite]
            shadow-[0_0_50px_rgba(255,255,255,0.8)]
            "
          >
            <img
              src="/sapna.jpeg"
              alt="Profile"
              className="
              w-40
              h-40
              rounded-full
              object-cover
              border-4
              border-white
              shadow-2xl

              animate-[zoomImage_4s_ease-in-out_infinite]
              "
            />
          </div>
        </div>

        {/* Name */}
        <h1
          className="
          text-7xl
          font-black
          uppercase
          tracking-widest

          bg-gradient-to-r
          from-yellow-300
          via-white
          to-cyan-300

          bg-clip-text
          text-transparent

          drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]

          animate-[zoomText_3s_ease-in-out_infinite]
          "
        >
          {resume.name}
        </h1>

        {/* Role */}
        <p
          className="
          mt-4
          text-2xl
          font-bold
          text-white
          tracking-[6px]
          uppercase

          animate-[fadeUp_1.5s_ease]
          "
        >
          {resume.role}
        </p>

        {/* Animated Line */}
        <div className="mt-8 w-full h-[20px] bg-white/20 rounded-full overflow-hidden">
          <div
            className="
            h-full
            rounded-full

            bg-gradient-to-r
            from-cyan-400
            via-pink-500
            to-yellow-400

            animate-[lineFill_2s_ease-out_forwards]
            "
          ></div>
        </div>

        {/* Summary */}
        <p
          className="
          mt-8
          text-lg
          leading-9
          text-white/90
          max-w-4xl
          mx-auto

          animate-[fadeUp_2s_ease]
          "
        >
          {resume.summary}
        </p>

        {/* Contact Cards */}
        <div
          className="
          mt-10
          grid
          md:grid-cols-2
          gap-6
          "
        >
          <div
            className="
            bg-white/10
            backdrop-blur-xl
            p-5
            rounded-2xl
            border
            border-white/20

            hover:-translate-y-2
            hover:scale-105
            hover:bg-white/20

            transition-all
            duration-500

            text-white
            shadow-lg
            "
          >
            📧 {resume.email}
          </div>

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            p-5
            rounded-2xl
            border
            border-white/20

            hover:-translate-y-2
            hover:scale-105
            hover:bg-white/20

            transition-all
            duration-500

            text-white
            shadow-lg
            "
          >
            📱 {resume.phone}
          </div>

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            p-5
            rounded-2xl
            border
            border-white/20

            hover:-translate-y-2
            hover:scale-105
            hover:bg-white/20

            transition-all
            duration-500

            text-white
            shadow-lg
            "
          >
            📍 {resume.location}
          </div>

          <div
            className="
            bg-white/10
            backdrop-blur-xl
            p-5
            rounded-2xl
            border
            border-white/20

            hover:-translate-y-2
            hover:scale-105
            hover:bg-white/20

            transition-all
            duration-500

            text-white
            shadow-lg
            "
          >
            🔗 {resume.linkedin}
          </div>
        </div>
      </div>
    </section>
  );
}