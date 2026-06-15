import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_0.7fr_0.7fr]">
        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/35">
            Explore
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
            <Link href="/photography" className="hover:text-white">
              Photography
            </Link>
            <Link href="/photography/portraits" className="hover:text-white">
              Portraits
            </Link>
            <Link href="/photography/product" className="hover:text-white">
              Product
            </Link>
            <Link href="/films" className="hover:text-white">
              Films
            </Link>
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] font-bold uppercase tracking-[0.28em] text-white/35">
            Contact
          </p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/55">
            <a href="mailto:hello@anthonysaleh.ca" className="hover:text-white">
              hello@anthonysaleh.ca
            </a>
            <span>Toronto, Ontario and worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
