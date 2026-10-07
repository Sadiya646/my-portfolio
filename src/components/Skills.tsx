const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "Better Auth",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#090a0d] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ccff00]">
            Skills
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Technologies I work with.
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-[#ccff00] hover:text-[#ccff00]"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}