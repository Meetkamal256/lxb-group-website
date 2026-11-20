import {
  FiSearch,
  FiClipboard,
  FiSettings,
  FiCheckCircle,
  FiArrowRight,
} from "react-icons/fi";

import { quantitySurveyingApproach } from "@/app/data/data";

const approachIcons = [FiSearch, FiClipboard, FiSettings, FiCheckCircle];

export default function QuantitySurveyingApproach() {
  return (
    <section className="bg-white">
      <div className="container-main py-14 sm:py-16 lg:py-20">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              {quantitySurveyingApproach.eyebrow}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            {quantitySurveyingApproach.title}
          </h2>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {quantitySurveyingApproach.steps.map((step, index) => {
            const Icon = approachIcons[index];
            const isLast = index === quantitySurveyingApproach.steps.length - 1;

            return (
              <div key={step.number} className="relative">
                <article className="flex flex-col items-center text-center">
                  <div className="relative mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-gold/40 bg-off-white">
                    {Icon && (
                      <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    )}

                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-navy text-xs font-bold text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy">{step.title}</h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate">
                    {step.description}
                  </p>
                </article>

                {!isLast && (
                  <FiArrowRight
                    className="absolute -right-5 top-5 hidden h-5 w-5 text-gold lg:block"
                    aria-hidden="true"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
