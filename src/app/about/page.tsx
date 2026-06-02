import Image from "next/image";

const highlights = [
  "350 cities",
  "54 countries",
  "Ontario, Canada",
  "Headshots | Aerial | Timelapse",
];

const clients = [
  "Air Canada",
  "TD Bank",
  "McMaster University",
  "Tourism Dubai",
  "Black Diamond Group",
  "Outfront Media Inc.",
];

const socialLinks = [
  {
    href: "https://www.instagram.com/portraitsoncourse",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M7.75 2h8.5A5.76 5.76 0 0 1 22 7.75v8.5A5.76 5.76 0 0 1 16.25 22h-8.5A5.76 5.76 0 0 1 2 16.25v-8.5A5.76 5.76 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 7.2A4.8 4.8 0 1 1 12 16.8 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Zm5.05-2.45a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z"
        />
      </svg>
    ),
  },
  {
    href: "https://vimeo.com/anthonysaleh",
    label: "Vimeo",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
        <path
          fill="currentColor"
          d="M21.62 7.1c-.09 1.96-1.46 4.65-4.12 8.06-2.75 3.56-5.08 5.34-7 5.34-1.19 0-2.19-1.1-3-3.29-.54-2.01-1.09-4.02-1.63-6.03-.6-2.19-1.24-3.29-1.93-3.29-.15 0-.67.31-1.56.94L1.45 7.6c.98-.86 1.95-1.73 2.91-2.59 1.31-1.13 2.3-1.73 2.96-1.79 1.56-.15 2.52.92 2.89 3.2.4 2.47.68 4 .84 4.59.47 2.02.99 3.03 1.56 3.03.44 0 1.1-.7 1.98-2.09.88-1.39 1.35-2.45 1.41-3.18.13-1.21-.34-1.82-1.41-1.82-.5 0-1.02.12-1.55.35 1.03-3.37 3-5.01 5.91-4.92 2.16.06 3.05 1.64 2.67 4.72Z"
        />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
            Hi There, I&apos;m Anthony
          </p>
          <h1 className="mt-5 font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            Commercial photographer and videographer with a global point of
            view.
          </h1>
          <p className="mt-6 text-lg leading-9 text-stone-600">
            Anthony Saleh is a seasoned commercial photographer and videographer
            from Ontario, Canada. His career has taken him to 350 cities across
            54 countries, shaping a visual style grounded in technical craft,
            cultural curiosity, and human connection.
          </p>
          <p className="mt-5 leading-8 text-stone-600">
            Known for making people feel comfortable in front of the camera,
            Anthony works with CEOs, actors, teams, and everyday people to
            create visuals that feel authentic, confident, and useful.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-stone-900/10 bg-white/70 p-4 text-sm font-semibold text-stone-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
            <Image
              src="/images/about/image-asset.jpeg.webp"
              alt="Portrait of Anthony Saleh"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="mt-5 flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-stone-900/15 bg-white/70 text-stone-800 shadow-sm transition hover:border-clay hover:bg-clay hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
            Background
          </p>
          <h2 className="mt-4 font-serif text-5xl leading-none text-stone-950">
            From panoramic Toronto work to international commercial projects.
          </h2>
        </div>
        <div className="space-y-6 text-lg leading-9 text-stone-600">
          <p>
            Anthony&apos;s creative journey began in the mid-2000s with
            panoramic photography, including 360-degree image projects across
            Toronto that explored the relationship between space and culture.
            That early work led him to Humber College, where he earned the
            Photographic Excellence Award.
          </p>
          <p>
            He later collaborated with the Vice President of Academics on
            time-lapse photography projects that elevated the school&apos;s
            marketing efforts. Time-lapse remains a key part of his motion
            practice today.
          </p>
          <p>
            Alongside his commercial work, Anthony has taught photography to
            Fortune 500 CEOs and people from diverse backgrounds around the
            world, translating complex creative and technical ideas into clear,
            accessible teaching moments.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-7xl rounded-[2.5rem] bg-stone-950 p-8 text-stone-50 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand">
              Selected Clients
            </p>
            <h2 className="mt-4 font-serif text-5xl leading-none">
              Trusted across finance, education, travel, hospitality, and media.
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {clients.map((client) => (
              <div
                key={client}
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-stone-200"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
