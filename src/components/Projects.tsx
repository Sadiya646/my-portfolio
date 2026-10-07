import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d0f12] px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#ccff00]">
              My Work
            </p>

            <h2 className="text-4xl font-bold text-white md:text-5xl">
              Featured Projects.
            </h2>
          </div>

          <p className="max-w-md text-gray-500">
            A selection of projects I've built while learning and exploring
            modern web technologies.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/3 transition duration-500 hover:-translate-y-2 hover:border-[#ccff00]/40"
            >
              {/* Project Preview */}
              <div className="relative flex h-52 items-center justify-center overflow-hidden bg-[#090a0d]">
                <div className="absolute h-40 w-40 rounded-full bg-[#ccff00]/10 blur-3xl transition group-hover:bg-[#ccff00]/20" />

                <span className="relative text-6xl font-bold text-white/10 transition duration-500 group-hover:text-[#ccff00]/20">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex gap-5">
                  <a
                    href={project.live}
                    target="_blank"
                    className="text-sm font-medium text-[#ccff00] hover:underline"
                  >
                    Live Demo ↗
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="text-sm font-medium text-gray-400 hover:text-white"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}