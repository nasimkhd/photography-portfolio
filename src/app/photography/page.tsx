import Link from "next/link";
import Image from "next/image";
import { photographyCategories } from "@/content/photography";

export default function PhotographyPage() {
  return (
    <div className="bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-neutral-950/10 pb-12 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.42em] text-neutral-500">
              Photography
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.05em] text-neutral-950 sm:text-8xl">
              Selected stills.
            </h1>
          </div>
          <div className="max-w-2xl text-sm leading-7 text-neutral-600">
            <p>
              Portraits, interiors and exteriors, animals, and product work
              arranged to match Anthony&apos;s requested portfolio structure.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {photographyCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/photography/${category.slug}`}
                  className="text-[0.68rem] uppercase tracking-[0.32em] text-neutral-500 transition hover:text-neutral-950"
                >
                  {category.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="grid items-start gap-5 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {photographyCategories.map((category) => {
            const coverImage = category.images[0];

            return (
              <Link
                key={category.slug}
                href={`/photography/${category.slug}`}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={coverImage.src}
                    alt={coverImage.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-contain transition duration-500 group-hover:opacity-80"
                  />
                </div>
                <div className="mt-5">
                  <p className="text-[0.62rem] uppercase tracking-[0.34em] text-neutral-500">
                    View Album
                  </p>
                  <h2 className="mt-2 font-serif text-3xl leading-none text-neutral-950">
                    {category.title}
                  </h2>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
