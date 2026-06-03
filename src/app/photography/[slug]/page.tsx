import { notFound } from "next/navigation";
import { PhotographyGallery } from "@/components/PhotographyGallery";
import {
  getPhotographyCategory,
  photographyCategories,
} from "@/content/photography";

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

export default async function PhotographyCategoryPage({
  params,
}: PhotographyCategoryPageProps) {
  const { slug } = await params;
  const category = getPhotographyCategory(slug);

  if (!category) {
    notFound();
  }

  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-8 md:px-0 md:py-[42px]">
      <div className="mx-auto w-full max-w-[1120px] md:mx-0">
        <PhotographyGallery category={category} />
      </div>
    </section>
  );
}
