import { ProjectGrid } from "@/components/ProjectGrid";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import { photographyCategories } from "@/content/photography";
import { motionProjects } from "@/content/projects";

export default function WorkPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
          Portfolio
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            Photography and motion, clearly separated.
          </h1>
          <p className="max-w-2xl text-lg leading-9 text-stone-600">
            Anthony&apos;s current work is organized around the same focus as
            his existing site: Headshots, Aerial, and Timelapse. Photography
            categories live together below, followed by a separate Motion
            section for video work.
          </p>
        </div>

        <div className="my-12 flex flex-wrap gap-3">
          <a
            href="#photography"
            className="rounded-full bg-stone-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-50"
          >
            Photography
          </a>
          <a
            href="#motion"
            className="rounded-full bg-stone-950 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-50"
          >
            Motion
          </a>
          {photographyCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-stone-900/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-700"
            >
              {category.title}
            </a>
          ))}
        </div>

        <section id="photography" className="scroll-mt-28">
          <PhotographyGallery />
        </section>

        <section
          id="motion"
          className="mt-24 scroll-mt-28 border-t border-stone-900/10 pt-16"
        >
          <div className="mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
              Motion
            </p>
            <h2 className="mt-3 font-serif text-5xl text-stone-950">
              Timelapse and Video Work
            </h2>
            <p className="mt-4 max-w-2xl leading-8 text-stone-600">
              Video projects are kept separate from photography so Anthony&apos;s
              motion work is easy to review on its own.
            </p>
          </div>
          <ProjectGrid projects={motionProjects} />
        </section>
      </section>
    </div>
  );
}
