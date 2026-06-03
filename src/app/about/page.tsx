import Image from "next/image";

const bioLines = [
  "Anthony Saleh is a director, photographer, and videographer based in Ontario, Canada.",
  "He thinks about light, timing, and small human moments every day.",
  "He is an expert in visualizing quiet details that slow you down and evoke big feelings.",
  "He is a meticulous, detail-oriented creator who stretches artistic boundaries to shape what each client needs.",
  "Anthony works alongside you in collaboration, because he appreciates what you have gone through to arrive at this moment, and wants to visualize your vision.",
];

export default function AboutPage() {
  return (
    <section className="min-h-screen overflow-hidden bg-white px-4 py-10 text-neutral-900 sm:px-8 md:px-0 md:py-[42px]">
      <div className="mx-auto grid w-full max-w-[1120px] gap-10 md:mx-0 md:grid-cols-[1fr_320px] md:items-start lg:grid-cols-[1fr_380px]">
        <div className="max-w-[610px] pt-10 text-[12px] leading-[2.2] md:ml-[105px] md:pt-[58px]">
          {bioLines.map((line) => (
            <p key={line} className="mb-3">
              {line}
            </p>
          ))}
        </div>

        <div className="relative md:mr-6 md:mt-[30px]">
          <div className="absolute -left-5 top-8 h-52 w-52 rounded-full bg-[#f4e8cb] blur-3xl" />
          <div className="absolute -bottom-6 right-4 h-40 w-40 rounded-full bg-[#d9e5dc] blur-3xl" />
          <div className="relative overflow-hidden rounded-tl-[42px] rounded-br-[42px] border border-neutral-200 bg-[#f6f0e4] p-3 shadow-[0_22px_70px_rgba(0,0,0,0.12)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-tl-[32px] rounded-br-[32px] bg-stone-200">
              <Image
                src="/images/about/image-asset.jpeg.webp"
                alt="Portrait of Anthony Saleh"
                fill
                priority
                sizes="(min-width: 1024px) 360px, 90vw"
                className="object-cover grayscale-[15%]"
              />
            </div>
            <p className="mt-3 text-right text-[10px] uppercase tracking-[0.28em] text-neutral-500">
              Anthony Saleh
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
