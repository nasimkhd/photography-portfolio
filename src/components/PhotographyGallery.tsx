import Image from "next/image";
import type { PhotographyCategory } from "@/content/photography";

type PhotographyGalleryProps = {
  category: PhotographyCategory;
};

const tileClasses = [
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-2 md:col-span-3 md:row-span-3",
  "col-span-6 row-span-3 md:col-span-3 md:row-span-4",
];

export function PhotographyGallery({ category }: PhotographyGalleryProps) {
  return (
    <div className="grid auto-rows-[78px] grid-cols-12 gap-[3px] md:auto-rows-[86px] lg:auto-rows-[103px]">
      {category.images.map((image, index) => (
        <figure
          key={image.src}
          className={`relative overflow-hidden bg-stone-100 ${
            tileClasses[index % tileClasses.length]
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={index < 6}
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
            className={category.slug === "product" ? "object-contain" : "object-cover"}
          />
        </figure>
      ))}
    </div>
  );
}
