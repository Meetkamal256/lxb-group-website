import Link from "next/link";
import {
  FiBriefcase,
  FiBox,
  FiCode,
  FiArrowUpRight,
  FiCheck,
} from "react-icons/fi";

import { divisions } from "@/app/data/data";

const divisionIcons = [FiBriefcase, FiBox, FiCode];

export default function DivisionCards() {
  return (
    <section className="bg-white">
      <div className="container-main py-12 sm:py-16">
        {/* Section Heading */}
        <div className="mb-10">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />

            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              What We Do
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Our Specialist Divisions
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base">
            Each division brings focused expertise and professional services
            tailored to different project and business needs.
          </p>
        </div>

        {/* Division Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {divisions.map((division, index) => {
            const Icon = divisionIcons[index];

            return (
              <article
                key={division.href}
                className="flex h-full flex-col rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-gold/60"
              >
                {/* Icon and Number */}
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-off-white">
                    {Icon && (
                      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                    )}
                  </div>

                  <span className="text-sm font-bold tracking-wider text-gold">
                    {division.number}
                  </span>
                </div>

                {/* Division Details */}
                <h3 className="text-lg font-bold leading-snug text-navy">
                  {division.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate">
                  {division.description}
                </p>

                {/* Services */}
                <div className="mt-6 border-t border-gray-100 pt-5">
                  <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-navy">
                    Key Services
                  </h4>

                  <ul className="space-y-3">
                    {division.services.map((service) => (
                      <li
                        key={service}
                        className="flex items-start gap-3 text-sm leading-5 text-slate"
                      >
                        <FiCheck
                          className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                          aria-hidden="true"
                        />

                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Link */}
                <Link
                  href={division.href}
                  className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-navy transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Explore Division
                  <FiArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
