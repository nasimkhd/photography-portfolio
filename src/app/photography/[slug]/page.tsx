import Link from "next/link";
import { notFound } from "next/navigation";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import { photographyCategories } from "@/content/photography";

type PhotographyCategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return photographyCategories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: PhotographyCategoryPageProps) {
  const { slug } = await params;
  const category = photographyCategories.find((item) => item.slug === slug);

  if (!category) {
    return {
      title: "Photography | Anthony Saleh",
    };
  }

  return {
    title: `${category.title} Photography | Anthony Saleh`,
    description: category.description,
  };
}

export default async function PhotographyCategoryPage({
  params,
}: PhotographyCategoryPageProps) {
  const { slug } = await params;
  const category = photographyCategories.find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <section className="mx-auto max-w-[1440px]">
        <div className="grid gap-10 border-b border-neutral-950/10 pb-12 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.42em] text-neutral-500">
              Photography
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.05em] text-neutral-950 sm:text-8xl">
              {category.title}
            </h1>
          </div>
          <div className="max-w-2xl text-sm leading-7 text-neutral-600">
            <p>{category.description}</p>
            <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {photographyCategories.map((item) => (
                <Link
                  key={item.slug}
                  href={`/photography/${item.slug}`}
                  className={`text-[0.68rem] uppercase tracking-[0.32em] transition ${
                    item.slug === category.slug
                      ? "text-neutral-950"
                      : "text-neutral-500 hover:text-neutral-950"
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-16">
          <PhotographyGallery categories={[category]} />
        </div>
      </section>
    </div>
  );
}
