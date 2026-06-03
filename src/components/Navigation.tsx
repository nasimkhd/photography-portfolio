"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { photographyCategories } from "@/content/photography";

export function Navigation() {
  const pathname = usePathname();
  const isFilmsPage = pathname === "/films";
  const isPhotographyPage = pathname.startsWith("/photography");
  const sectionLink =
    "flex items-center gap-1.5 transition duration-200 hover:translate-x-0.5 hover:text-black";
  const childLink =
    "transition duration-200 hover:translate-x-0.5 hover:text-black";
  const activeLink = "text-[#d7a61f]";

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-[13px] leading-[1.15] text-neutral-700 md:inset-y-0 md:right-auto md:w-36">
      <nav className="flex items-center justify-between gap-4 px-4 py-3 md:h-full md:flex-col md:items-start md:justify-center md:px-2 md:py-0">
        <Link href="/" className="transition hover:text-black md:hidden">
          Home
        </Link>

        <div className="hidden w-full flex-col items-start md:flex">
          <Link
            href="/films"
            className={`${sectionLink} ${isFilmsPage ? activeLink : ""}`}
          >
            {isFilmsPage ? <span aria-hidden="true">›</span> : null}
            <span>Films</span>
          </Link>
          <Link
            href={`/photography/${photographyCategories[0].slug}`}
            className={`mt-1.5 ${sectionLink} ${
              isPhotographyPage ? activeLink : ""
            }`}
          >
            {isPhotographyPage ? <span aria-hidden="true">›</span> : null}
            <span>Photography</span>
          </Link>
          {isPhotographyPage ? (
            <div className="ml-1.5 mt-1.5 flex flex-col gap-0.5 border-l border-neutral-200 pl-3 text-[12px] text-neutral-500">
              {photographyCategories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/photography/${category.slug}`}
                  className={`${childLink} ${
                    pathname === `/photography/${category.slug}`
                      ? activeLink
                      : ""
                  }`}
                >
                  {category.title}
                </Link>
              ))}
            </div>
          ) : null}
          <Link
            href="/about"
            className={`mt-6 ${sectionLink} ${
              pathname === "/about" ? activeLink : ""
            }`}
          >
            Bio
          </Link>
          <Link
            href="/contact"
            className={`mt-1 ${sectionLink} ${
              pathname === "/contact" ? activeLink : ""
            }`}
          >
            Contact
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 md:hidden">
          <Link
            href="/films"
            className={`transition hover:text-black ${
              pathname === "/films" ? "text-[#d7a61f]" : ""
            }`}
          >
            Films
          </Link>
          <Link
            href={`/photography/${photographyCategories[0].slug}`}
            className={`transition hover:text-black ${
              isPhotographyPage ? "text-[#d7a61f]" : ""
            }`}
          >
            Photography
          </Link>
          <Link
            href="/about"
            className={`transition hover:text-black ${
              pathname === "/about" ? "text-[#d7a61f]" : ""
            }`}
          >
            Bio
          </Link>
          <Link
            href="/contact"
            className={`transition hover:text-black ${
              pathname === "/contact" ? "text-[#d7a61f]" : ""
            }`}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
