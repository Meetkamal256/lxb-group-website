import { FiAward, FiLayers, FiUsers } from "react-icons/fi";

import { quantitySurveyingExpertise } from "@/app/data/data";

const expertiseIcons = [FiAward, FiLayers, FiUsers];

export default function QuantitySurveyingExpertise() {
  return (
    <section className="bg-off-white">
      <div className="container-main py-12 sm:py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.9fr] lg:items-center lg:gap-12">
          {/* Section Heading */}
          <div className="text-center lg:text-left">
            <div className="mb-3 flex items-center justify-center gap-3 lg:justify-start">
              <span className="h-1.5 w-10 rounded-full bg-gold" />
              <span className="text-sm font-bold uppercase tracking-wide text-gold">
                {quantitySurveyingExpertise.eyebrow}
              </span>
            </div>

            <h2 className="mx-auto max-w-md text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl lg:mx-0">
              {quantitySurveyingExpertise.title}
            </h2>
          </div>

          {/* Expertise Benefits */}
          <div className="grid gap-8 sm:grid-cols-3 lg:gap-6">
            {quantitySurveyingExpertise.benefits.map((benefit, index) => {
              const Icon = expertiseIcons[index];

              return (
                <article
                  key={benefit.title}
                  className="border-t border-gray-200 pt-6 text-center first:border-t-0 first:pt-0 sm:border-l sm:border-t-0 sm:pt-0 sm:pl-5 sm:first:border-l-0 sm:first:pl-0 lg:text-left"
                >
                  {Icon && (
                    <Icon
                      className="mx-auto mb-4 h-8 w-8 text-gold lg:mx-0"
                      aria-hidden="true"
                    />
                  )}

                  <h3 className="text-base font-bold text-navy">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
