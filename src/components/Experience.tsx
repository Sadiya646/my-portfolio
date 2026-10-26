import SectionHeading from "./SectionHeading";

const items = [
  {
    icon: "💻",
    date: "2024 — Present",
    who: "Self Learning & Personal Projects",
    role: "Full Stack Developer (Learning)",
    text: "Building real-world projects, exploring modern technologies, and improving my skills in frontend, backend, and system design.",
  },
  {
    icon: "</>",
    date: "2024 — Present",
    who: "Academic Projects",
    role: "Coursework & Web Projects",
    text: "Worked on university projects, including a course registration system, web applications and various CSE assignments.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-band">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            index="04"
            kicker="Experience"
            title="Work Experience"
          />
          <span className="mb-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-navy-300/25 bg-navy-800/40 px-4 py-2 text-sm text-navy-100 lg:mb-12">
            <span className="animate-blink h-2 w-2 rounded-full bg-emerald-400" />
            Open to opportunities
          </span>
        </div>

        <div className="relative ml-3 space-y-8 border-l border-navy-300/20 pl-8">
          {items.map((item) => (
            <div key={item.who} className="relative">
              <span className="absolute left-[-2.42rem] top-4 h-3 w-3 rounded-full border-2 border-navy-950 bg-navy-100 ring-2 ring-navy-300/40" />

              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="card-shell flex h-12 w-full max-w-14 shrink-0 items-center justify-center rounded-lg font-mono text-sm text-navy-100">
                  {item.icon}
                </div>
                <div>
                  <p className="text-sm text-navy-300">
                    <span className="font-semibold text-navy-100">
                      {item.date}
                    </span>{" "}
                    · {item.who}
                  </p>
                  <h3 className="mt-1 font-semibold text-white">{item.role}</h3>
                  <p className="mt-1 max-w-2xl text-sm leading-relaxed text-navy-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
