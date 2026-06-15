import Link from "next/link";
import { VimeoBackground } from "@/components/VimeoBackground";
import { photographyCategories } from "@/content/photography";

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-black text-white">
        <VimeoBackground />
        <div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-10 pt-32 sm:px-8 md:pb-14">
          <div className="mx-auto grid w-full max-w-[1440px] gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <h1 className="mt-5 font-serif text-[clamp(2.9rem,10vw,6.8rem)] leading-[0.86] tracking-[-0.065em] text-white drop-shadow-[0_18px_44px_rgba(0,0,0,0.72)]">
                <span className="block whitespace-nowrap">Photographer</span>
                <span className="mt-5 block whitespace-nowrap pl-[0.18em] italic tracking-[-0.08em] text-white/90 sm:mt-7">
                  &amp; filmmaker
                </span>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
