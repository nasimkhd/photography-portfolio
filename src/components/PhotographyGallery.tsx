import Image from "next/image";
import { photographyCategories } from "@/content/photography";

export function PhotographyGallery() {
  return (
    <div className="space-y-20">
      {photographyCategories.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className="scroll-mt-28"
        >
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
                Photography
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-none text-stone-950 sm:text-5xl">
                {category.title}
              </h2>
            </div>
            <p className="max-w-2xl leading-8 text-stone-600">
              {category.description}
            </p>
          </div>

          <div className="grid auto-rows-[240px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {category.images.map((image, index) => (
              <figure
                key={image.src}
                className={`group relative overflow-hidden rounded-[1.5rem] bg-stone-200 shadow-sm ${
                  index === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes={
                    index === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  }
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
