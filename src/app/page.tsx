import { VimeoBackground } from "@/components/VimeoBackground";

export default function Home() {
  return (
    <section className="min-h-screen bg-white px-4 py-10 sm:px-8 md:px-0 md:py-[42px]">
      <div className="relative mx-auto aspect-video w-full max-w-[1120px] overflow-hidden rounded-br-[18px] bg-stone-200 md:mx-0">
        <VimeoBackground />
      </div>
    </section>
  );
}
