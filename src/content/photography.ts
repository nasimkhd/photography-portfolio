export type PhotographyImage = {
  src: string;
  alt: string;
};

export type PhotographyCategory = {
  slug: string;
  title: string;
  description: string;
  images: PhotographyImage[];
};

const imagePath = (folder: string, file: string) =>
  `/images/photography/${encodeURIComponent(folder)}/${encodeURIComponent(file)}`;

const toImages = (folder: string, files: string[], label: string) =>
  files.map((file, index) => ({
    src: imagePath(folder, file),
    alt: `${label} photography ${index + 1}`,
  }));

export const photographyCategories: PhotographyCategory[] = [
  {
    slug: "animals",
    title: "Animals",
    description:
      "Warm, expressive animal portraits and documentary-style shelter imagery.",
    images: toImages(
      "Animals",
      [
        "ExportSPCA_AES0757.jpg.webp",
        "ExportSPCA_AES0779+1.jpg.webp",
        "ExportSPCA_AES0961.jpg.webp",
        "ExportSPCA_AES0969.jpg.webp",
        "SPCA_AES0864+2.jpg.webp",
      ],
      "Animals",
    ),
  },
  {
    slug: "automotive",
    title: "Automotive",
    description:
      "Detail-led automotive photography with a polished commercial finish.",
    images: toImages(
      "Automotive",
      [
        "AnthonySalehPortfolio_Lamborghini+Rim-.jpg.webp",
        "Green-Lamborghini-Aventador-Wide-for-web.jpg.webp",
        "GreenLambo+Bonnet.jpg.webp",
        "GreenLambo+Engine-011.jpg.webp",
        "GreenLambo+Engine_Rear.jpg.webp",
        "Lamborghini+Interior.jpg.webp",
        "Mercedes+Benz+SLS.jpg.webp",
      ],
      "Automotive",
    ),
  },
  {
    slug: "aerial",
    title: "Aerial",
    description:
      "Aerial perspectives for real estate, development, hospitality, and environmental stories.",
    images: toImages(
      "Drone",
      [
        "05001.jpg.webp",
        "1187,+1188,+3236+&+1192+-+Blue+Hour.jpg.webp",
        "1187,+1188,+3236+&+1192+-+Golden+Hour.jpg.webp",
        "1191.jpg.webp",
        "3236+&+1192.jpg.webp",
        "3417A.jpg.webp",
        "Copy+of+2019_Spring_Glam_DHM179.jpg.webp",
        "DO87.jpg.webp",
        "DO89.jpg.webp",
        "DO90.jpg.webp",
        "Molinaro+Web.jpg.webp",
      ],
      "Aerial",
    ),
  },
  {
    slug: "endangered-animals",
    title: "Endangered Animals",
    description:
      "Atmospheric wildlife imagery focused on texture, presence, and conservation storytelling.",
    images: toImages(
      "EndangeredAnimals",
      [
        "Rhino+in+Morocco.jpg.webp",
        "_DSC7473-Edit.jpg.webp",
        "red+panda+in+painting.jpg.webp",
        "red+panda+libnan.jpg.webp",
      ],
      "Endangered animals",
    ),
  },
  {
    slug: "fashion",
    title: "Fashion",
    description:
      "Editorial fashion imagery with strong styling, shape, and natural confidence.",
    images: toImages(
      "Fashion",
      [
        "SKETCHEDUP-105_Web.jpg.webp",
        "SKETCHEDUP-154_Web.jpg.webp",
        "SKETCHEDUP-386.jpg.webp",
        "_AES2531+copy.jpg.webp",
        "_AES2547+copy.jpg.webp",
        "_AES2565.jpg.webp",
        "_AES8571.jpg.webp",
        "_AES8722.jpg.webp",
        "_AES8993.jpg.webp",
      ],
      "Fashion",
    ),
  },
  {
    slug: "headshots",
    title: "Headshots",
    description:
      "Clean, approachable portraits for founders, teams, artists, and working professionals.",
    images: toImages(
      "Headshots",
      [
        "Andrew.jpeg.webp",
        "Bailey's+Headshot-204-Edit.jpg.webp",
        "Christophe+Frappiere-hudon-Branded.jpg.webp",
        "DSC0368.jpeg.webp",
        "Dee+Lennon-White.jpg.webp",
        "Feaven+Abera_Headshot.jpg.webp",
        "H-18-Edit.jpeg.webp",
        "Kyle+Arbuthnott+Headshot-034-Edit.jpg.webp",
        "Lisa+Headshot_Crop.jpg.webp",
        "R80-Edit.jpg.webp",
        "Steve.jpeg.webp",
        "Thy_Vo_Headshot_Web.jpg.webp",
        "_AES2928-Edit.jpg.webp",
        "_AES4231.jpg.webp",
        "_DSC0391.jpeg.webp",
        "image-asset.jpeg.webp",
      ],
      "Headshots",
    ),
  },
  {
    slug: "industrial",
    title: "Industrial",
    description:
      "Industrial imagery with strong environments, machinery, and publication-ready detail.",
    images: toImages(
      "Industrial",
      ["Matter+Magazine+Cover-095-Edit.jpg.webp"],
      "Industrial",
    ),
  },
  {
    slug: "interiors-real-estate",
    title: "Interiors & Real Estate",
    description:
      "Interior, architecture, and real estate imagery with clean lines and warm spaces.",
    images: toImages(
      "Interiors&realstate",
      [
        "10+Bellair_2.jpg.webp",
        "10BellAir.jpg.webp",
        "55_Lombard_Living_4.jpg.webp",
        "Alimento.jpg.webp",
        "_DSC6961-HDR.jpg.webp",
        "_DSC6979-HDR.jpg.webp",
        "_DSC7129-HDR.jpg.webp",
      ],
      "Interiors and real estate",
    ),
  },
  {
    slug: "outdoor-assets",
    title: "Outdoor Assets",
    description:
      "Natural, outdoor-focused image sets for campaigns, lifestyle brands, and stock libraries.",
    images: toImages(
      "OutdoorAssets",
      [
        "2019_Spring_Glam_DHM175.jpg.webp",
        "2019_Spring_Glam_DHM179.jpg.webp",
        "2019_Spring_Glam_DHM182.jpg.webp",
        "DHM175.jpg.webp",
        "DHM179.jpg.webp",
        "DHM182.jpg.webp",
        "YDS_1.jpg.webp",
        "yds_4.jpg.webp",
      ],
      "Outdoor assets",
    ),
  },
  {
    slug: "products",
    title: "Products",
    description:
      "Product photography for beverages, packaging, lifestyle goods, and campaign assets.",
    images: toImages(
      "Products",
      [
        "Alexander-Keiths-Beer-Glass.jpg.webp",
        "Banana.jpg.webp",
        "Bottle-Cap.jpg.webp",
        "CR+Hex+Bar.jpg.webp",
        "Christian-LouBoutin.jpg.webp",
        "Coffee-Scoop.jpg.webp",
        "EGL-TTC28-06-2.jpg.webp",
        "Green-Living_Anthony-Saleh.jpg.webp",
        "Heineken-Stem-Shot.jpg.webp",
        "Mar-14-2014-LucasYoung-Bottle-a-la-carte_Web.jpg.webp",
        "Powerade_Humber-College-Foto-250+for+web.jpg.webp",
        "Sports+Shot+Edit.jpg.webp",
        "Wine-Pour.jpg.webp",
        "_AES5884.jpg.webp",
        "_AES6040.jpg.webp",
        "_AES7635.jpg.webp",
        "image-asset.jpeg-2.webp",
        "image-asset.jpeg-3.webp",
        "image-asset.jpeg-4.webp",
      ],
      "Products",
    ),
  },
];
