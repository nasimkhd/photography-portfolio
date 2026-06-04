import Image from "next/image";
import {
  PhotographyCategory,
  photographyCategories,
} from "@/content/photography";

type PhotographyGalleryProps = {
  categories?: PhotographyCategory[];
  tone?: "light" | "dark";
};

export function PhotographyGallery({
  categories = photographyCategories,
  tone = "light",
}: PhotographyGalleryProps) {
  const isDark = tone === "dark";

  return (
    <div className="space-y-20">
      {categories.map((category) => (
        <section
          key={category.slug}
          id={category.slug}
          className="scroll-mt-28 border-b border-current/10 pb-20 last:border-b-0 last:pb-0"
        >
          <div className="mb-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p
                className={`text-[0.65rem] uppercase tracking-[0.34em] ${
                  isDark ? "text-white/35" : "text-neutral-500"
                }`}
              >
                Photography
              </p>
              <h2
                className={`mt-3 font-serif text-4xl leading-none sm:text-5xl ${
                  isDark ? "text-white" : "text-stone-950"
                }`}
              >
                {category.title}
              </h2>
            </div>
            <p
              className={`max-w-2xl leading-8 ${
                isDark ? "text-white/55" : "text-stone-600"
              }`}
            >
              {category.description}
            </p>
          </div>

          <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
            {category.images.map((image) => (
              <figure
                key={image.src}
                className="group mb-4 break-inside-avoid overflow-hidden"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1800}
                  height={1200}
                  sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="h-auto w-full transition duration-700 group-hover:scale-[1.02]"
                />
              </figure>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
