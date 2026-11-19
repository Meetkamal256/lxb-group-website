import {
  FiMessageSquare,
  FiClipboard,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";

import { workSteps } from "@/app/data/data";

const stepIcons = [FiMessageSquare, FiClipboard, FiLayers, FiCheckCircle];

export default function HowWeWork() {
  return (
    <section className="bg-off-white">
      <div className="container-main py-10 sm:py-12">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              Our Approach
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            How We Work
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base">
            We follow a straightforward approach to understand your needs, plan
            effectively and deliver solutions that create value.
          </p>
        </div>

        {/* Work Process */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {workSteps.map(({ number, title, description }, index) => {
            const Icon = stepIcons[index];

            return (
              <div key={number} className="relative">
                {/* Step Icon and Number */}
                <div className="mb-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
                    {Icon && (
                      <Icon className="h-7 w-7 text-gold" aria-hidden="true" />
                    )}
                  </div>

                  <span className="text-sm font-bold tracking-wider text-gold">
                    STEP {number}
                  </span>
                </div>

                {/* Step Details */}
                <h3 className="mb-2 text-lg font-bold text-navy">{title}</h3>

                <p className="max-w-sm text-sm leading-6 text-slate">
                  {description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
