import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container-main grid gap-6 py-8 sm:gap-8 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-10 lg:py-14">
        {/* Section Heading */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-[#B99A5B]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A672B]">
              About LXB Group
            </p>
          </div>

          <h2 className="max-w-lg text-2xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-3xl">
            A Multidisciplinary Professional Services Company
          </h2>
        </div>

        {/* Introduction */}
        <div className="flex flex-col gap-5 border-gray-200 lg:border-l lg:pl-9">
          <p className="text-sm leading-7 text-[#64748B] sm:text-base">
            A Nigerian-based professional services company delivering integrated
            solutions in construction consultancy, architectural design and
            digital technology, driven by quality, efficiency and long-term
            value.
          </p>

          <Link
            href="/about"
            className="inline-flex w-fit items-center gap-3 text-sm font-semibold text-[#B58632] transition-colors hover:text-[#8A672B]"
          >
            Learn More
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
