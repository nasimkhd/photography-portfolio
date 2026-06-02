import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
            Contact
          </p>
          <h1 className="mt-5 font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            Let&apos;s shape the next visual story.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-stone-600">
            For now this page uses a direct email CTA. A form can be added later
            with a small server action or email service, still without needing a
            database.
          </p>
        </div>

        <div className="rounded-[2.5rem] border border-stone-900/10 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">
            Project Inquiries
          </p>
          <a
            href="mailto:hello@anthonysaleh.ca?subject=Project%20Inquiry"
            className="mt-5 block font-serif text-4xl text-stone-950 transition hover:text-clay"
          >
            hello@anthonysaleh.ca
          </a>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl bg-sand/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                Based In
              </p>
              <p className="mt-3 text-lg text-stone-900">Ontario, Canada</p>
            </div>
            <div className="rounded-3xl bg-sand/60 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-stone-500">
                Focus
              </p>
              <p className="mt-3 text-lg text-stone-900">Photo and Motion</p>
            </div>
          </div>
          <Link
            href="/work"
            className="mt-10 inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-stone-50 transition hover:bg-clay"
          >
            View Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
}
