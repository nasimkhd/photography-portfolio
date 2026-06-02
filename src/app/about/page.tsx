import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
            About Anthony
          </p>
          <h1 className="mt-5 font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            A calm visual partner for brands, events, and stories.
          </h1>
          <p className="mt-6 text-lg leading-9 text-stone-600">
            Anthony&apos;s site should feel confident without overexplaining.
            This page gives visitors a sense of craft, professionalism, and
            location while keeping the focus on the visuals.
          </p>
          <p className="mt-5 leading-8 text-stone-600">
            When final bio details are ready, this copy can be replaced with
            Anthony&apos;s background, approach, selected clients, and the kind
            of projects he wants more of.
          </p>
        </div>

        <div className="relative min-h-[520px] overflow-hidden rounded-[2.5rem]">
          <Image
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85"
            alt="Earth-toned outdoor landscape"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </section>
    </div>
  );
}
