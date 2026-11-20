import {
  FiDollarSign,
  FiActivity,
  FiFileText,
  FiClipboard,
  FiTrendingUp,
  FiBriefcase,
} from "react-icons/fi";

import { quantitySurveyingServices } from "@/app/data/data";


const serviceIcons = [
  FiDollarSign,
  FiActivity,
  FiFileText,
  FiClipboard,
  FiTrendingUp,
  FiBriefcase,
];

export default function QuantitySurveyingServices() {
  return (
    <section className="bg-white">
      <div className="container-main py-14 sm:py-16 lg:py-20">
        {/* Section Heading */}
        <div className="mb-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              What We Offer
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Our Services
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            We provide professional quantity surveying and construction
            consultancy services to support informed decisions, effective cost
            management and successful project delivery.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {quantitySurveyingServices.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={service.title}
                className="rounded-xl border border-gray-200 bg-white p-6 transition-colors duration-300 hover:border-gold/60"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-off-white">
                  {Icon && (
                    <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy">{service.title}</h3>

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
