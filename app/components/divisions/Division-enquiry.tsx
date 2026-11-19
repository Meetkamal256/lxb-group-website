import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

import { divisionEnquiry } from "@/app/data/data";

export default function DivisionEnquiry() {
  return (
    <section className="bg-white">
      <div className="container-main py-10 sm:py-14">
        <div className="relative overflow-hidden rounded-xl bg-navy px-6 py-10 sm:px-10 sm:py-12 lg:px-14">
          {/* Decorative Accent */}
          <div
            className="absolute -right-16 -top-24 h-64 w-64 rounded-full border border-gold/20 sm:-right-10"
            aria-hidden="true"
          />
          <div
            className="absolute -right-8 -top-16 h-48 w-48 rounded-full border border-gold/20"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-gold">
                {divisionEnquiry.eyebrow}
              </p>

              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {divisionEnquiry.title}
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 sm:text-base">
                {divisionEnquiry.description}
              </p>
            </div>

            <Link
              href={divisionEnquiry.href}
              className="inline-flex shrink-0 items-center gap-3 rounded-md bg-gold px-6 py-3 text-sm font-bold text-navy transition-colors duration-200 hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
            >
              {divisionEnquiry.buttonText}
              <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
