import { resume } from "../data/resume";

export default function Skills() {
  return (
    <section className="bg-white rounded-3xl shadow p-8">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>

      <div className="space-y-4">
        {resume.skills.map((skill) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="w-full h-3 bg-gray-200 rounded-full">
              <div
                className="h-3 bg-[#C57FF0] rounded-full"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}