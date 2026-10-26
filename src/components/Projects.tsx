
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-band relative overflow-hidden"
    >
      {/* Background Effects */}

      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#5483B3]/10 blur-[150px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#052659]/30 blur-[150px]"
      />

      <div
        aria-hidden
        className="animate-glow pointer-events-none absolute left-1/2 top-[35%] h-[350px] w-[600px] -translate-x-1/2 rounded-full bg-[#5483B3]/[0.06] blur-[130px]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-48 left-1/2 h-[450px] w-[700px] -translate-x-1/2 rounded-full bg-[#7DA0CA]/[0.07] blur-[150px]"
      />

      {/* Background Grid */}

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(#C1E8FF 1px, transparent 1px), linear-gradient(90deg, #C1E8FF 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Animated Particles */}

      <div
        aria-hidden
        className="absolute right-[15%] top-[18%] flex gap-3 opacity-40"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1 w-1 rounded-full bg-[#C1E8FF]"
            style={{
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div
        aria-hidden
        className="absolute bottom-[15%] left-[12%] flex gap-3 opacity-30"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <span
            key={i}
            className="animate-shimmer h-1 w-1 rounded-full bg-[#7DA0CA]"
            style={{
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      {/* Top Light Line */}

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#5483B3]/30 to-transparent"
      />

      {/* Main Content */}

      <div className="relative z-10 mx-auto max-w-6xl px-5 py-20 md:py-24">
        {/* Heading */}

        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading
            index="05"
            kicker="Projects"
            title="My Projects"
          />

          <a
            href="#projects"
            className="group mb-10 inline-flex items-center gap-2 text-sm font-medium text-navy-100 transition-colors hover:text-white lg:mb-12"
          >
            View All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        {/* Project Cards */}

        <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card-shell group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:border-[#7DA0CA]/50 hover:shadow-xl hover:shadow-[#5483B3]/10"
            >
              {/* Project Image */}

              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-800/40">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#021024]/50 via-transparent to-[#5483B3]/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Project Content */}

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-300">
                  {project.description}
                </p>

                {/* Technologies */}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-navy-300/25 bg-navy-800/40 px-3 py-1 text-xs text-navy-100 transition-colors duration-300 group-hover:border-navy-300/40"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* View Details */}

                <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-navy-300/30 px-4 py-2 text-sm font-medium text-navy-100 transition-all duration-300 group-hover:border-navy-100/60 group-hover:bg-navy-400/20">
                  View Details
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
