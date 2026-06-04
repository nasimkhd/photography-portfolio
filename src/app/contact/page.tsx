import { ContactForm } from "@/components/ContactForm";
import { InstagramFeed } from "@/components/InstagramFeed";

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-stone-50 px-5 pb-24 pt-32 text-neutral-950 sm:px-8">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="grid gap-10 border-b border-neutral-950/10 pb-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-[0.65rem] uppercase tracking-[0.42em] text-neutral-500">
              Contact
            </p>
            <h1 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.055em] text-neutral-950 sm:text-8xl">
              Let&apos;s make the next image.
            </h1>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-neutral-600">
            Send a note about the project, location, timing, and whether the
            work is photography, film, or both.
          </p>
        </div>

        <div className="grid items-start gap-8 pt-12 lg:grid-cols-[1fr_0.88fr]">
          <div className="border border-neutral-950/10 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.07)]">
            <p className="font-serif text-4xl leading-none tracking-[-0.04em] text-neutral-950">
              Getting in touch
            </p>
            <p className="mt-4 max-w-[28rem] text-sm leading-7 text-neutral-600">
              Include the project type, timing, location, and the kind of images
              or film you want to make.
            </p>
            <ContactForm />
          </div>

          <div className="border border-neutral-950/10 bg-white p-4 shadow-[0_24px_70px_rgba(0,0,0,0.07)]">
            <div className="mb-4 flex items-center justify-between gap-4">
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-neutral-500">
                Instagram
              </p>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="text-[0.65rem] uppercase tracking-[0.24em] text-neutral-500 transition hover:text-neutral-950"
              >
                Live Posts
              </a>
            </div>
            <InstagramFeed />
          </div>
        </div>
      </div>
    </section>
  );
}
