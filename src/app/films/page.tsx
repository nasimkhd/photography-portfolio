import Image from "next/image";
import { motionProjects } from "@/content/projects";

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="grid gap-x-1 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
          {motionProjects.map((project) => (
            <a
              key={project.slug}
              id={project.slug}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              aria-label={`Watch ${project.title}`}
              className="group relative block aspect-video overflow-hidden bg-neutral-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover transition duration-300 group-hover:scale-[1.02]"
              />
              <span className="absolute left-1/2 top-1/2 flex size-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-neutral-900/35 text-white shadow-sm transition group-hover:bg-neutral-900/55">
                <span className="ml-0.5 h-0 w-0 border-y-[5px] border-l-[8px] border-y-transparent border-l-white" />
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
