import { resume } from "@/data/resume";

export default function SoftSkills() {
  return (
    <section className="bg-gradient-to-br from-white to-purple-50 rounded-[28px] shadow-xl p-10 border border-purple-100">
      <h2 className="text-3xl font-bold text-slate-800 mb-3">
        Soft Skills
      </h2>

      <p className="text-slate-500 mb-6">
        Personal strengths and professional qualities.
      </p>

      <div className="flex flex-wrap gap-4">
        {resume.softSkills.map((skill) => (
          <span
            key={skill}
            className="
              px-5 py-3
              rounded-full
              bg-gradient-to-r from-purple-500 to-pink-500
              text-white
              font-semibold
              shadow-md
              hover:shadow-xl
              hover:scale-110
              transition-all
              duration-300
              cursor-default
            "
          >
            ✨ {skill}
          </span>
        ))}
      </div>
    </section>
  );
}