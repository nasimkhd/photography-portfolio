import Image from "next/image";
import { motionProjects } from "@/content/projects";

export default function FilmsPage() {
  return (
    <div className="min-h-screen bg-white px-4 pb-14 pt-20 sm:px-8 md:px-0 md:py-[67px]">
      <section className="mx-auto grid w-full max-w-[706px] gap-11 md:mx-auto md:grid-cols-2 md:gap-x-2 md:gap-y-11">
        {motionProjects.map((film, index) => (
          <a
            key={film.slug}
            id={film.slug}
            href={film.url}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch ${film.title}`}
            className="group relative block aspect-video overflow-hidden bg-neutral-200"
          >
            <Image
              src={film.image}
              alt={film.title}
              fill
              priority={index < 2}
              sizes="(min-width: 768px) 349px, calc(100vw - 32px)"
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/5 transition group-hover:bg-black/0" />
            <span
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/75 shadow-sm ring-1 ring-black/10 transition group-hover:bg-white"
            >
              <span className="ml-0.5 h-0 w-0 border-y-[7px] border-l-[11px] border-y-transparent border-l-neutral-700" />
            </span>
          </a>
        ))}
      </section>
    </div>
  );
}
