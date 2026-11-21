import { FiTarget, FiSettings, FiTrendingUp } from "react-icons/fi";

import { digitalSolutionsValues } from "@/app/data/data";

const valueIcons = [FiTarget, FiSettings, FiTrendingUp];

export default function DigitalSolutionsValues() {
  return (
    <section className="bg-off-white py-14 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            Why Work With Us
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Our Value
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            Our approach combines technical knowledge with an understanding of
            practical business needs to deliver useful digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {digitalSolutionsValues.map((value, index) => {
            const Icon = valueIcons[index];

            return (
              <article
                key={value.title}
                className="flex h-full flex-col items-center rounded-xl border border-gray-200 bg-white p-7 text-center transition-colors duration-200 hover:border-gold/60 sm:p-8"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-off-white">
                  {Icon && (
                    <Icon
                      className="h-7 w-7 text-gold"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-navy">
                  {value.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate">
                  {value.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
