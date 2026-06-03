export type ProjectCategory = "Photography" | "Motion";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  location: string;
  year: string;
  summary: string;
  image: string;
  url?: string;
  featured?: boolean;
};

export const heroImages = [
  {
    src: "/images/photography/Automotive/Green-Lamborghini-Aventador-Wide-for-web.jpg.webp",
    alt: "Green Lamborghini photographed by Anthony Saleh",
  },
  {
    src: "/images/photography/Fashion/SKETCHEDUP-105_Web.jpg.webp",
    alt: "Fashion editorial photograph by Anthony Saleh",
  },
  {
    src: "/images/photography/Drone/05001.jpg.webp",
    alt: "Aerial photography by Anthony Saleh",
  },
];

export const projects: Project[] = [
  {
    slug: "portraits",
    title: "Portraits",
    category: "Photography",
    location: "Portraits",
    year: "Photography",
    summary:
      "Fashion and headshot imagery for founders, teams, artists, and working professionals.",
    image: "/images/photography/Headshots/Thy_Vo_Headshot_Web.jpg.webp",
    featured: true,
  },
  {
    slug: "interiors-exteriors",
    title: "Interiors and Exteriors",
    category: "Photography",
    location: "Spaces",
    year: "Photography",
    summary:
      "Interior, exterior, aerial, and location-led imagery for spaces and places.",
    image: "/images/photography/Drone/Molinaro+Web.jpg.webp",
    featured: true,
  },
  {
    slug: "bmw-z3",
    title: "BMW Z3",
    category: "Motion",
    location: "Brand Film",
    year: "Motion",
    summary:
      "A polished automotive motion piece with crisp pacing and cinematic atmosphere.",
    image: "/images/photography/Automotive/Mercedes+Benz+SLS.jpg.webp",
    url: "https://vimeo.com/1025170349?fl=pl&fe=sh",
  },
  {
    slug: "timelapse-sizzle-reel",
    title: "Timelapse",
    category: "Motion",
    location: "Sizzle Reel",
    year: "Motion",
    summary:
      "A high-energy timelapse reel that leads the motion section and quickly shows range.",
    image: "/images/photography/Drone/3417A.jpg.webp",
    url: "https://vimeo.com/267069364?fl=pl&fe=sh",
    featured: true,
  },
  {
    slug: "canada-life-742296871",
    title: "Canada Life",
    category: "Motion",
    location: "Client Film",
    year: "Motion",
    summary:
      "Clean commercial motion work shaped for a confident financial services brand.",
    image: "/images/photography/Interiors%26realstate/55_Lombard_Living_4.jpg.webp",
    url: "https://vimeo.com/742296871?fl=pl&fe=sh",
  },
  {
    slug: "canada-life-836324743",
    title: "Canada Life",
    category: "Motion",
    location: "Client Film",
    year: "Motion",
    summary:
      "A companion Canada Life film with a polished, campaign-ready finish.",
    image: "/images/photography/Interiors%26realstate/10BellAir.jpg.webp",
    url: "https://vimeo.com/836324743?fl=pl&fe=sh",
  },
  {
    slug: "new-horizon-development-group",
    title: "New Horizon Development Group",
    category: "Motion",
    location: "Development",
    year: "Motion",
    summary:
      "A refined development-focused film highlighting place, scale, and built form.",
    image: "/images/photography/Drone/Molinaro+Web.jpg.webp",
    url: "https://vimeo.com/545715529?fl=pl&fe=sh",
  },
  {
    slug: "smartspace",
    title: "SmartSpace",
    category: "Motion",
    location: "Client Film",
    year: "Motion",
    summary:
      "A concise brand film presenting space, service, and customer experience.",
    image: "/images/photography/Interiors%26realstate/Alimento.jpg.webp",
    url: "https://vimeo.com/374066075?fl=pl&fe=sh",
  },
  {
    slug: "reverence-timelapse-film",
    title: "Reverence",
    category: "Motion",
    location: "Timelapse Film",
    year: "Motion",
    summary:
      "An atmospheric timelapse film with patient movement and dramatic natural light.",
    image: "/images/photography/OutdoorAssets/2019_Spring_Glam_DHM175.jpg.webp",
    url: "https://vimeo.com/137951907?fl=pl&fe=sh",
  },
  {
    slug: "sunflare",
    title: "Sunflare",
    category: "Motion",
    location: "Film",
    year: "Motion",
    summary:
      "A bright, atmospheric motion piece hosted on YouTube.",
    image: "/images/photography/OutdoorAssets/YDS_1.jpg.webp",
    url: "https://www.youtube.com/watch?v=zmRRMO4iVP8",
  },
  {
    slug: "dubai-timelapse-film",
    title: "Dubai Timelapse Film",
    category: "Motion",
    location: "Dubai",
    year: "Motion",
    summary:
      "A city-scale timelapse film capturing architecture, movement, and evening light.",
    image: "/images/photography/Drone/DO90.jpg.webp",
    url: "https://vimeo.com/143907862?fl=pl&fe=sh",
  },
  {
    slug: "nightingale",
    title: "Nightingale",
    category: "Motion",
    location: "Film",
    year: "Motion",
    summary:
      "A focused motion project with a quiet, cinematic feel.",
    image: "/images/photography/EndangeredAnimals/red+panda+libnan.jpg.webp",
    url: "https://vimeo.com/171774985?fl=pl&fe=sh",
  },
  {
    slug: "product",
    title: "Product",
    category: "Photography",
    location: "Commercial",
    year: "Photography",
    summary:
      "Product, industrial, and automotive imagery for commercial portfolio review.",
    image: "/images/photography/Products/Alexander-Keiths-Beer-Glass.jpg.webp",
  },
  {
    slug: "industrial",
    title: "Industrial",
    category: "Photography",
    location: "Industrial",
    year: "Photography",
    summary:
      "Industrial imagery with strong environments, machinery, and publication-ready detail.",
    image: "/images/photography/Industrial/Matter+Magazine+Cover-095-Edit.jpg.webp",
  },
  {
    slug: "outdoor-library",
    title: "Outdoor Assets",
    category: "Photography",
    location: "Canada",
    year: "Photography",
    summary:
      "Earthy, atmospheric image sets created for licensing, campaigns, and brand storytelling libraries.",
    image: "/images/photography/OutdoorAssets/2019_Spring_Glam_DHM179.jpg.webp",
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const motionProjects = projects.filter(
  (project) => project.category === "Motion",
);
