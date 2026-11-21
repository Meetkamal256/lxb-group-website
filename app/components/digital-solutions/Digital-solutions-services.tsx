import { FiGlobe, FiLayout, FiLink, FiZap, FiCpu } from "react-icons/fi";

import { digitalSolutionsServices } from "@/app/data/data";

const serviceIcons = [FiGlobe, FiLayout, FiLink, FiZap, FiCpu];

export default function DigitalSolutionsServices() {
  return (
    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            What We Do
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Our Services
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            We provide practical digital services that help businesses build,
            connect and improve their digital operations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {digitalSolutionsServices.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className={`rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-gold/60 ${
                  index < 3 ? "lg:col-span-2" : "lg:col-span-3"
                }`}
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-off-white">
                  {Icon && (
                    <Icon
                      className="h-6 w-6 text-gold"
                      strokeWidth={1.6}
                      aria-hidden="true"
                    />
                  )}
                </div>

                <h3 className="text-lg font-semibold text-navy">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
