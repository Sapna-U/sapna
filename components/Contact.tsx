import { resume } from "@/data/resume";

export default function Contact() {
  return (
    <section className="bg-[#C57FF0] rounded-[28px] shadow-lg p-10">
      <h2 className="text-3xl font-bold mb-4">Contact</h2>

      <div className="space-y-3 text-lg">
        {/* Email */}
        <p>
          📧{" "}
          <a
            href={`mailto:${resume.email}`}
            className="text-blue-600 hover:underline"
          >
            {resume.email}
          </a>
        </p>

        {/* Phone */}
        <p>
          📱{" "}
          <a
            href={`tel:${resume.phone}`}
            className="text-blue-600 hover:underline"
          >
            {resume.phone}
          </a>
        </p>

        {/* Location */}
        <p>
          📍{" "}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              resume.location
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {resume.location}
          </a>
        </p>

        {/* LinkedIn */}
        <p>
          💼{" "}
          <a
            href={resume.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://www.linkedin.com/in/sapna-u-it
          </a>
        </p>
      </div>
    </section>
  );
}