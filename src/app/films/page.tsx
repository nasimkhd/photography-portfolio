import { ProjectGrid } from "@/components/ProjectGrid";
import { motionProjects } from "@/content/projects";

export default function FilmsPage() {
  return (
    <div className="bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-neutral-950/10 pb-12 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.42em] text-neutral-500">
              Films
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.05em] text-neutral-950 sm:text-8xl">
              Film work.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-neutral-600">
            A dedicated page for the videos Anthony shared, keeping the films
            separate from the photography menu just like the requested site
            structure.
          </p>
        </div>

        <div className="pt-16">
          <ProjectGrid projects={motionProjects} />
        </div>
      </section>
    </div>
  );
}
