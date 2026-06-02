import { ContactForm } from "@/components/ContactForm";
import { InstagramFeed } from "@/components/InstagramFeed";

export default function ContactPage() {
  return (
    <div className="bg-background px-5 pb-24 pt-36 sm:px-8">
      <section className="mx-auto max-w-7xl">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
          Contact
        </p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h1 className="font-serif text-6xl leading-none text-stone-950 sm:text-7xl">
            Let&apos;s collaborate.
          </h1>
          <p className="max-w-2xl text-lg leading-9 text-stone-600">
            Tell Anthony about your project below and he&apos;ll respond shortly.
            Share the project type, timeline, location, and what you want the
            finished visuals to do.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-14 grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="flex h-full flex-col rounded-[2.5rem] border border-stone-900/10 bg-white/75 p-5 shadow-sm sm:p-6">
          <div className="mb-5">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-clay">
              Instagram
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none text-stone-950">
              Recent public posts.
            </h2>
          </div>
          <InstagramFeed />
        </div>

        <div className="rounded-[2.5rem] border border-stone-900/10 bg-white p-8 shadow-sm sm:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-stone-500">
            Tell Me About Your Project
          </p>
          <p className="mt-5 leading-8 text-stone-600">
            This opens your email app with the inquiry filled in so you can send
            the message directly.
          </p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
