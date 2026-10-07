export default function Experience() {
  return (
    <section className="bg-[#090a0d] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-14">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ccff00]">
            Journey
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Education & Experience.
          </h2>
        </div>

        <div className="relative border-l border-white/10 pl-8">
          
          <div className="relative pb-12">
            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#090a0d] bg-[#ccff00]" />

            <p className="text-sm text-[#ccff00]">2024 — Present</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              B.Sc. in Computer Science & Engineering
            </h3>

            <p className="mt-3 text-gray-500">
              Developing knowledge in programming, software engineering,
              databases, computer architecture and web development.
            </p>
          </div>

          <div className="relative">
            <span className="absolute -left-[37px] top-1 h-4 w-4 rounded-full border-4 border-[#090a0d] bg-white/30" />

            <p className="text-sm text-[#ccff00]">2026 — Present</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              Frontend Development
            </h3>

            <p className="mt-3 text-gray-500">
              Building projects using React, Next.js, TypeScript and Tailwind
              CSS while learning modern authentication and web development.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}