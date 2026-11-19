export default function DivisionsHero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      {/* Decorative Circular Lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-56 h-125 w-125 rounded-full border border-gold/50 sm:-right-32 sm:-top-64 sm:h-162.5 sm:w-162.5"
      >
        <div className="absolute inset-12 rounded-full border border-gold/40" />
        <div className="absolute inset-24 rounded-full border border-gold/30" />
      </div>

      <div className="container-main relative z-10">
        <div className="max-w-2xl py-12 sm:py-16 lg:py-20">
          {/* Section Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />

            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              Our Divisions
            </span>
          </div>

          {/* Heading */}
          <h1 className="max-w-xl text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-5xl">
            Three Complementary Areas of Expertise
          </h1>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-6 text-slate sm:text-base sm:leading-7">
            LXB Group operates through three specialist divisions, combining
            technical expertise, creative design and digital innovation to
            deliver integrated, high-quality solutions for our clients.
          </p>
        </div>
      </div>
    </section>
  );
}
