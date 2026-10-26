import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="section-band">
      <div className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <SectionHeading index="05" kicker="Projects" title="My Projects" />
          <a
            href="#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-navy-100 transition-colors hover:text-white lg:mb-12"
          >
            View All Projects{" "}
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>

        <div className="stagger grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="card-shell group flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-navy-800/40">
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-navy-300/25 bg-navy-800/40 px-3 py-1 text-xs text-navy-100"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="mt-5 inline-flex items-center gap-2 self-start rounded-full border border-navy-300/30 px-4 py-2 text-sm font-medium text-navy-100 transition-colors group-hover:border-navy-100/60 group-hover:bg-navy-400/20">
                  View Details
                  <span className="transition-transform group-hover:translate-x-1">
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
