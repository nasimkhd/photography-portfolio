import { ProjectGrid } from "@/components/ProjectGrid";
import { projects } from "@/content/projects";

const categories = ["All", "Commercial", "Motion", "Photography", "Events"];

export default function WorkPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
          Portfolio
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            Commercial work with atmosphere and intent.
          </h1>
          <p className="max-w-2xl text-lg leading-9 text-stone-600">
            A curated overview of photography, motion, events, and brand
            storytelling. Replace these placeholders with Anthony&apos;s
            strongest projects as assets are collected.
          </p>
        </div>

        <div className="my-12 flex flex-wrap gap-3">
          {categories.map((category) => (
            <span
              key={category}
              className="rounded-full border border-stone-900/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-700"
            >
              {category}
            </span>
          ))}
        </div>

        <ProjectGrid projects={projects} />
      </section>
    </div>
  );
}
