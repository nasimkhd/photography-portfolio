const services = [
  {
    title: "Headshots",
    description:
      "Professional portraits for individuals, teams, founders, creatives, and working professionals.",
  },
  {
    title: "Aerial Photography",
    description:
      "Drone and elevated imagery for real estate, development, landscapes, and location-led storytelling.",
  },
  {
    title: "Timelapse Films",
    description:
      "Motion work built around time, place, architecture, landscapes, and atmospheric visual sequences.",
  },
  {
    title: "Product & Industrial",
    description:
      "Image libraries for products, industrial environments, interiors, and brand use.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
          Services
        </p>
        <h1 className="mt-5 max-w-4xl font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
          Headshots, aerial imagery, timelapse, and commercial photography.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600">
          The service structure now follows Anthony&apos;s public positioning
          while still leaving room for his broader photography categories and
          motion projects.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-[2rem] border border-stone-900/10 bg-white p-8 shadow-sm"
            >
              <h2 className="font-serif text-3xl text-stone-950">
                {service.title}
              </h2>
              <p className="mt-4 leading-8 text-stone-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
