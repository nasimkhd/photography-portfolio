import Link from "next/link";
import { photographyCategories } from "@/content/photography";

const navItems = [
  { href: "/films", label: "Films" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/35 text-white backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-[0.82]">
          <span className="text-2xl font-black uppercase tracking-[-0.08em] text-white sm:text-3xl">
            ANTHONY
          </span>
          <span className="text-2xl font-black uppercase tracking-[-0.08em] text-white sm:text-3xl">
            SALEH
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/65 md:flex">
          <div className="group relative py-3">
            <Link href="/photography" className="transition hover:text-white">
              Photography
            </Link>
            <div className="invisible absolute left-1/2 top-full min-w-72 -translate-x-1/2 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
              <div className="grid gap-3 border border-white/10 bg-black/90 p-5 shadow-2xl backdrop-blur-md">
                {photographyCategories.map((category) => (
                  <Link
                    key={category.slug}
                    href={`/photography/${category.slug}`}
                    className="whitespace-nowrap text-white/55 transition hover:text-white"
                  >
                    {category.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-white/70 md:hidden">
          <Link href="/photography" className="transition hover:text-white">
            Photo
          </Link>
          <Link href="/films" className="transition hover:text-white">
            Films
          </Link>
        </div>

        <Link
          href="/contact"
          className="border border-white/25 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/80 transition hover:border-white hover:bg-white hover:text-black"
        >
          Inquire
        </Link>
      </nav>
    </header>
  );
}
