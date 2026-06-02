import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects";

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => {
        const cardContent = (
          <>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-transparent to-transparent opacity-80" />
              <span className="absolute left-5 top-5 rounded-full bg-stone-50/90 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-stone-800">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
              <h3 className="mt-4 font-serif text-2xl text-stone-950">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-stone-600">
                {project.summary}
              </p>
              {project.url ? (
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-clay">
                  Watch film
                </p>
              ) : null}
            </div>
          </>
        );

        const className =
          "group overflow-hidden rounded-[2rem] border border-stone-900/10 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl";

        if (project.url) {
          return (
            <a
              key={project.slug}
              id={project.slug}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className={className}
            >
              {cardContent}
            </a>
          );
        }

        return (
          <Link
            key={project.slug}
            id={project.slug}
            href={`/work#${project.slug}`}
            className={className}
          >
            {cardContent}
          </Link>
        );
      })}
    </div>
  );
}
