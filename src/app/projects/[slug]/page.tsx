import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, projectBySlug } from "@/data/portfolio";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Sadiya Tasnim`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32 md:pt-36">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-navy-300 transition-colors hover:text-navy-100"
        >
          ← Back to projects
        </Link>

        <div className="mt-6">
          <h1 className="text-4xl font-extrabold text-white md:text-5xl">
            {project.title}
          </h1>
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
        </div>

        <div className="card-shell relative mt-8 aspect-[16/8] w-full overflow-hidden">
          <Image
            src={project.image}
            alt={`Preview of ${project.title}`}
            fill
            priority
            className="object-cover"
          />
        </div>

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-navy-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-navy-400 to-navy-800 px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-navy-400/30 transition-all hover:brightness-110"
          >
            Live Project <span aria-hidden>↗</span>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-navy-300/30 px-5 py-2.5 text-sm font-medium text-navy-100 transition-colors hover:border-navy-100/60 hover:bg-navy-800/40"
          >
            GitHub Client <span aria-hidden>↗</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="card-shell p-6">
            <h2 className="text-lg font-semibold text-white">Challenges</h2>
            <ul className="mt-4 space-y-2">
              {project.challenges.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-navy-300">
                  <span className="text-navy-400">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-shell p-6">
            <h2 className="text-lg font-semibold text-white">
              Future Improvements
            </h2>
            <ul className="mt-4 space-y-2">
              {project.improvements.map((c) => (
                <li key={c} className="flex gap-2 text-sm text-navy-300">
                  <span className="text-navy-400">•</span> {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
