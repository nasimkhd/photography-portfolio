import { redirect } from "next/navigation";
import { photographyCategories } from "@/content/photography";

export default function PhotographyPage() {
  redirect(`/photography/${photographyCategories[0].slug}`);
}
