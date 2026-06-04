import Image from "next/image";

const bioLines = [
  "Anthony is a seasoned commercial photographer and videographer from Ontario, Canada. His extensive career has taken him to 350 cities across 54 countries, allowing him to bring a unique global perspective to every project. Along his journey, Anthony self-taught himself Mandarin, further deepening his understanding of different cultures and enhancing his ability to connect with clients and subjects worldwide.",
  "Anthony is known not just for his technical expertise but for his natural ability to make people feel comfortable in front of the camera. Whether he's working with CEOs, actors, or everyday people, Anthony creates an environment that encourages authenticity, resulting in more engaging and impactful visuals.",
  "His creative journey began in the mid-2000s with a focus on panoramic photography, where he captured 360-degree images across Toronto in a project that explored the relationship between space and culture. This early work led him to Humber College, where he earned the prestigious Photographic Excellence Award and collaborated with the Vice President of Academics on time-lapse photography projects that elevated the school's marketing efforts.",
  "Since then, Anthony has worked with a wide range of high-profile clients, including Air Canada, TD Bank, McMaster University, and Tourism Dubai. His work spans various industries, from finance and education to travel and hospitality, where he consistently delivers captivating visuals. He is particularly known for his expertise in time-lapse photography, a skill that has allowed him to work on major projects with brands like Black Diamond Group and Outfront Media Inc.",
  "In addition to his commercial work, Anthony has also taught photography to Fortune 500 CEOs and individuals from diverse backgrounds across the globe. His ability to translate complex concepts into accessible teaching moments has made him a sought-after instructor. Today, Anthony continues to push the boundaries of photography and video, creating work that reflects his global experiences, technical mastery, and passion for storytelling.",
];

const clients = [
  "Air Canada",
  "TD Bank",
  "McMaster University",
  "Tourism Dubai",
  "Black Diamond Group",
  "Outfront Media Inc.",
  "Humber College",
];

export default function AboutPage() {
  return (
    <section className="min-h-screen overflow-hidden bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <div className="mx-auto grid w-full max-w-[1440px] gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.42em] text-neutral-500">
            About
          </p>
          <h1 className="mt-5 max-w-3xl font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-neutral-950 sm:text-8xl">
            Anthony Saleh.
          </h1>
          <div className="mt-10 max-w-2xl space-y-5 border-l border-neutral-950/15 pl-6 text-sm leading-8 text-neutral-700">
            {bioLines.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-12 max-w-2xl border-t border-neutral-950/10 pt-8">
            <p className="text-sm font-semibold text-neutral-950">
              Select clients
            </p>
            <p className="mt-2 text-sm leading-7 text-neutral-500">
              A few of the brands, institutions, and organizations Anthony has
              worked with.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {clients.map((client) => (
                <span
                  key={client}
                  className="rounded-full bg-white px-4 py-2 text-sm text-neutral-700 shadow-sm ring-1 ring-neutral-950/10"
                >
                  {client}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-8 top-12 h-56 w-56 rounded-full bg-neutral-200 blur-3xl" />
          <div className="absolute -bottom-10 right-0 h-48 w-48 rounded-full bg-white blur-3xl" />
          <div className="relative border border-neutral-950/10 bg-white p-3 shadow-[0_28px_90px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900">
              <Image
                src="/images/about/image-asset.jpeg.webp"
                alt="Portrait of Anthony Saleh"
                fill
                priority
                sizes="(min-width: 1024px) 48vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 flex items-center justify-between text-[0.65rem] uppercase tracking-[0.32em] text-neutral-500">
              <span>Toronto, Canada</span>
              <span>Photo / Film</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
