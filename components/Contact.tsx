import { resume } from "@/data/resume";

export default function Contact() {
  return (
    <section className="bg-[#C57FF0] rounded-[28px] shadow-lg p-6 md:p-10">
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Contact
      </h2>

      <div className="space-y-5 text-base md:text-lg">

        <div className="flex items-start gap-3">
          <span>📧</span>
          <a
            href={`mailto:${resume.email}`}
            className="text-blue-700 break-all hover:underline"
          >
            {resume.email}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <span>📱</span>
          <a
            href={`tel:${resume.phone}`}
            className="text-blue-700 hover:underline"
          >
            {resume.phone}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <span>📍</span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              resume.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline break-words"
          >
            {resume.location}
          </a>
        </div>

        <div className="flex items-start gap-3">
          <span>💼</span>
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 break-all hover:underline"
          >
            LinkedIn Profile
          </a>
        </div>

      </div>
    </section>
  );
}