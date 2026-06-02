import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-stone-900/10 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="font-serif text-3xl">Anthony Saleh</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-300">
            Commercial photography and motion for brands, events, and stories
            that need a grounded visual presence.
          </p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-300">
            <Link href="/work" className="hover:text-white">
              Work
            </Link>
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-stone-500">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-stone-300">
            <a href="mailto:hello@anthonysaleh.ca" className="hover:text-white">
              hello@anthonysaleh.ca
            </a>
            <span>Toronto and Ontario</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
