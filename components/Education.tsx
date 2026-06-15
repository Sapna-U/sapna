import { resume } from "@/data/resume";

export default function Education() {
  return (
    <section className="bg-white rounded-[28px] shadow-lg p-10 mb-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-8">
        Education
      </h2>

      <div className="space-y-6">
        {resume.education.map((item, index) => (
          <div
            key={index}
            className="bg-purple-100 border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-bold text-purple-700 mb-2">
              🎓 {item.degree}
            </h3>

            <a
              href={item.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-medium hover:underline"
            >
              {item.institution}
            </a>

            <p className="text-slate-600 mt-2">
              📊 CGPA: {item.cgpa}
            </p>

            <p className="text-slate-500">
              📅 {item.period}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}