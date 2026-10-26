
import SectionHeading from "./SectionHeading";
import { profile } from "@/data/portfolio";

const stats = [
  { icon: "📂", value: "20+", label: "Projects Completed" },
  { icon: "🎓", value: "1+", label: "Years Learning" },
  { icon: "⭐", value: "100%", label: "Motivation To Grow" },
  { icon: "∞", value: "∞", label: "Dreams To Achieve" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-band relative overflow-hidden"
    >
      {/* ================= BACKGROUND EFFECTS ================= */}

      {/* Large top-right glow */}
      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#5483B3]/15 blur-[100px]"
      />

      {/* Large bottom-left glow */}
      <div
        aria-hidden
        className="animate-drift pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[#7DA0CA]/15 blur-[100px]"
      />

      {/* Floating circle - right */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -right-16 top-1/2 h-40 w-40 rounded-full border border-[#5483B3]/20 bg-[#052659]/20 blur-[1px]"
      />

      {/* Floating circle - left */}
      <div
        aria-hidden
        className="animate-float pointer-events-none absolute -left-20 top-20 h-32 w-32 rounded-full bg-[#5483B3]/10 blur-2xl"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Small glowing dots - right */}
      <div
        aria-hidden
        className="absolute right-[8%] top-20 grid grid-cols-4 gap-2 opacity-50"
      >
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#7DA0CA]"
            style={{
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>

      {/* Small glowing dots - bottom left */}
      <div
        aria-hidden
        className="absolute bottom-16 left-[6%] grid grid-cols-3 gap-2 opacity-40"
      >
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1.5 w-1.5 rounded-full bg-[#C1E8FF]"
            style={{
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:py-24">
        <SectionHeading
          index="01"
          kicker="About Me"
          title="Get to know me"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* About text */}
          <div>
            <p className="max-w-xl text-sm leading-relaxed text-navy-300 md:text-base">
              I&apos;m {profile.shortName}, a Computer Science student with a
              strong interest in web development, especially in building full
              stack applications. I love learning new technologies, solving
              problems, and creating useful and user-friendly products.
            </p>

            <p className="mt-4 max-w-xl text-sm leading-relaxed text-navy-300 md:text-base">
              I&apos;m always open to new opportunities, collaborations, and
              challenges that help me grow as a developer and as a person.
            </p>

            <a
              href="#contact"
              className="group mt-7 inline-flex items-center gap-2 rounded-full border border-navy-300/30 px-5 py-2.5 text-sm font-medium text-navy-100 transition-all duration-300 hover:-translate-y-1 hover:border-navy-100/60 hover:bg-navy-800/40 hover:shadow-lg hover:shadow-[#5483B3]/20"
            >
              More About Me
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Stats */}
          <div className="stagger grid grid-cols-2 gap-4 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="card-shell group flex min-h-36 flex-col justify-between p-4 transition-all duration-300 hover:-translate-y-2 hover:border-[#7DA0CA]/50 hover:shadow-xl hover:shadow-[#5483B3]/10"
              >
                <div className="h-7 text-lg opacity-80 transition-transform duration-300 group-hover:scale-110">
                  {s.icon}
                </div>

                <div>
                  <div className="text-2xl font-bold text-white">
                    {s.value}
                  </div>

                  <div className="mt-1 text-xs text-navy-300">
                    {s.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
