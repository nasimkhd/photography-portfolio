import Link from "next/link";
import { HeroSlideshow } from "@/components/HeroSlideshow";
import { ProjectGrid } from "@/components/ProjectGrid";
import { featuredProjects } from "@/content/projects";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden pt-28 text-stone-50">
        <HeroSlideshow />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-end px-5 pb-16 sm:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-sand">
              Headshots | Aerial | Timelapse
            </p>
            <h1 className="mt-6 font-serif text-6xl font-semibold leading-[0.9] tracking-tight text-balance sm:text-7xl lg:text-8xl">
              Photography and motion with a grounded point of view.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-stone-200">
              Anthony Saleh creates professional headshots, aerial imagery, and
              timelapse films for people, places, and stories that need a strong
              visual presence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/work#photography"
                className="rounded-full bg-stone-50 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-stone-950 transition hover:bg-sand"
              >
                View Photography
              </Link>
              <Link
                href="/work#motion"
                className="rounded-full border border-stone-50/50 px-6 py-3 text-center text-sm font-bold uppercase tracking-[0.18em] text-stone-50 transition hover:bg-stone-50 hover:text-stone-950"
              >
                View Motion
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
              Studio Direction
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none text-stone-950 sm:text-6xl">
              Built around Headshots, Aerial, and Timelapse.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-9 text-stone-600">
            The site now follows Anthony&apos;s current positioning from his
            existing homepage while giving the work a warmer, more professional
            editorial presentation. Photography and motion stay separate so
            visitors can understand his range quickly.
          </p>
        </div>
      </section>

      <section className="bg-sand/45 px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
                Core Work
              </p>
              <h2 className="mt-4 font-serif text-5xl text-stone-950">
                Headshots, Aerial, Timelapse
              </h2>
            </div>
            <Link
              href="/work"
              className="text-sm font-bold uppercase tracking-[0.22em] text-stone-700 hover:text-stone-950"
            >
              Explore Work
            </Link>
          </div>
          <ProjectGrid projects={featuredProjects} />
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-24 text-stone-50 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <h2 className="font-serif text-5xl leading-tight sm:text-6xl">
            A focused portfolio for portraits, aerial perspectives, and motion
            work.
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Headshots", "Aerial Photography", "Timelapse Films", "Product & Industrial"].map(
              (service) => (
                <div
                  key={service}
                  className="rounded-[1.5rem] border border-stone-50/10 bg-white/5 p-5"
                >
                  <p className="font-serif text-2xl">{service}</p>
                </div>
              ),
            )}
          </div>
        </div>
      </section>
    </>
  );
}
