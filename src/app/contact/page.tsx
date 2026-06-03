import { ContactForm } from "@/components/ContactForm";

const representation = [
  {
    region: "Films in Canada",
    agency: "FreeSociety",
    email: "tony@freesociety.tv",
  },
  {
    region: "Films & Photography in the US",
    agency: "TheGarageTV",
    email: "hallie@the-garage.tv",
  },
  {
    region: "Films & Photography in Mexico",
    agency: "FFFFrameTV",
    email: "alvaro.guizar@ffframe.tv",
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen bg-white px-5 py-16 text-[13px] text-neutral-500 sm:px-8 md:px-0 md:py-20">
      <div className="mx-auto grid w-full max-w-[760px] gap-8 md:grid-cols-[1fr_1.08fr] md:gap-9">
        <div className="relative overflow-hidden rounded-br-[28px] rounded-tl-[28px] border border-neutral-200/80 bg-gradient-to-br from-white via-stone-50 to-neutral-100 px-6 py-7 text-right shadow-[0_24px_70px_rgba(0,0,0,0.07)]">
          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-[#d7a61f]/10 blur-2xl" />
          <div className="relative">
            <p className="font-serif text-xl text-neutral-700">Anthony Saleh</p>
            <div className="mt-5 leading-relaxed">
              <p>Toronto, Canada</p>
              <a
                href="mailto:hello@anthonysaleh.ca"
                className="underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-900"
              >
                hello@anthonysaleh.ca
              </a>
            </div>

            <p className="mt-9 text-neutral-400">Representations</p>
            <div className="mt-5 space-y-6 leading-relaxed">
              {representation.map((item) => (
                <div key={item.email}>
                  <p>{item.region} by</p>
                  <p>
                    <span className="text-neutral-600">{item.agency}</span>
                    <br />
                    <a
                      href={`mailto:${item.email}`}
                      className="underline decoration-neutral-300 underline-offset-4 transition hover:text-neutral-900"
                    >
                      {item.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-9 text-neutral-500">
              Photography in Canada, Self-representation
            </p>
          </div>
        </div>

        <div className="rounded-tl-[28px] rounded-br-[28px] border border-neutral-200 bg-white p-6 shadow-[0_24px_70px_rgba(0,0,0,0.06)]">
          <p className="font-serif text-[28px] leading-none text-neutral-700">
            getting in touch
          </p>
          <p className="mt-3 max-w-[22rem] leading-relaxed text-neutral-400">
            Send a note about the project, location, timing, and the kind of
            images or film you want to make.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
