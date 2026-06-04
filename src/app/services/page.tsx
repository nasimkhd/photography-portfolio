const services = [
  {
    title: "Portraits",
    description:
      "Fashion, headshots, and character-led portraits for individuals, teams, artists, and brands.",
  },
  {
    title: "Interiors and Exteriors",
    description:
      "Interior, architecture, real estate, drone, and exterior imagery for built environments and locations.",
  },
  {
    title: "Animals",
    description:
      "Expressive animal portraits and wildlife imagery with warmth, texture, and presence.",
  },
  {
    title: "Product",
    description:
      "Product, industrial, and automotive images for commercial portfolios, campaigns, and brand use.",
  },
  {
    title: "Films",
    description:
      "Standalone video work, including timelapse, brand films, and motion projects.",
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
          Photography & films arranged around the new portfolio structure.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600">
          Portraits, interiors and exteriors, animals, product work, and films
          are separated so visitors can move through the portfolio quickly.
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
