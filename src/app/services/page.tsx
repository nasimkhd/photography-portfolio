const services = [
  {
    title: "Commercial Photography",
    description:
      "Campaign, lifestyle, product, and business imagery shaped for web, social, and brand systems.",
  },
  {
    title: "Motion Assets",
    description:
      "Short-form brand films, launch clips, social edits, and atmospheric motion for digital campaigns.",
  },
  {
    title: "Event Coverage",
    description:
      "Clean documentary coverage for conferences, launches, private events, and community experiences.",
  },
  {
    title: "Stock and Licensing",
    description:
      "Curated image and footage libraries for brands that need natural, location-rich visual assets.",
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
          Visual content for brands that need to look established.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-9 text-stone-600">
          The service structure keeps the site business-focused while still
          letting the work lead. Each offering can grow into a deeper page once
          Anthony has final packages, pricing, or process details.
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
