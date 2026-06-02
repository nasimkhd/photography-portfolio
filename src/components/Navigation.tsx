import Link from "next/link";

const navItems = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone-900/10 bg-stone-50/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-[0.18em] text-stone-950">
            ANTHONY
          </span>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.36em] text-stone-500 transition group-hover:text-clay">
            Saleh Studio
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm font-medium text-stone-700 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-stone-950"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full border border-stone-950/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-stone-900 transition hover:border-stone-950 hover:bg-stone-950 hover:text-stone-50"
        >
          Inquire
        </Link>
      </nav>
    </header>
  );
}
