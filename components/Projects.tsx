import { resume } from "@/data/resume";

export default function Projects() {
  return (
    <section className="bg-white rounded-[28px] shadow-lg p-10 mb-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">
        Projects
      </h2>

      <div className="space-y-6">
        {resume.projects.map((project, index) => (
          <div
            key={index}
            className="bg-purple-100 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-3">
              {project.name}
            </h3>

            <p className="text-slate-600 leading-relaxed">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}