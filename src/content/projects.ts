export type ProjectCategory = "Commercial" | "Motion" | "Photography" | "Events";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  summary: string;
  image: string;
  featured?: boolean;
};

export const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=2200&q=85",
    alt: "Camera and production setup in warm natural light",
  },
  {
    src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=2200&q=85",
    alt: "Photographer capturing a commercial scene outdoors",
  },
  {
    src: "https://images.unsplash.com/photo-1520390138845-fd2d229dd553?auto=format&fit=crop&w=2200&q=85",
    alt: "Editorial photography set with earthy tones",
  },
];

export const projects: Project[] = [
  {
    slug: "brand-storytelling",
    title: "Brand Storytelling",
    category: "Commercial",
    location: "Toronto, ON",
    year: "2025",
    summary:
      "Warm, polished campaign visuals for businesses that need their product, people, and atmosphere to feel considered.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1500&q=85",
    featured: true,
  },
  {
    slug: "hospitality-motion",
    title: "Hospitality Motion",
    category: "Motion",
    location: "Ontario",
    year: "2025",
    summary:
      "Short-form motion assets built for social, web, and launch campaigns with a grounded cinematic feel.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1500&q=85",
    featured: true,
  },
  {
    slug: "event-coverage",
    title: "Event Coverage",
    category: "Events",
    location: "GTA",
    year: "2024",
    summary:
      "Documentary-style coverage that captures the details, energy, and people behind live experiences.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1500&q=85",
    featured: true,
  },
  {
    slug: "editorial-product",
    title: "Editorial Product",
    category: "Photography",
    location: "Studio",
    year: "2024",
    summary:
      "Textured still-life and lifestyle imagery for brands looking for refined, natural product presentation.",
    image:
      "https://images.unsplash.com/photo-1525904097878-94fb15835963?auto=format&fit=crop&w=1500&q=85",
  },
  {
    slug: "local-business",
    title: "Local Business Profiles",
    category: "Commercial",
    location: "Toronto, ON",
    year: "2024",
    summary:
      "Portrait-led visual stories that help businesses show their craft, process, and team with clarity.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1500&q=85",
  },
  {
    slug: "outdoor-library",
    title: "Outdoor Stock Library",
    category: "Photography",
    location: "Canada",
    year: "2024",
    summary:
      "Earthy, atmospheric image sets created for licensing, campaigns, and brand storytelling libraries.",
    image:
      "https://images.unsplash.com/photo-1473773508845-188df298d2d1?auto=format&fit=crop&w=1500&q=85",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
