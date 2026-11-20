import Image from "next/image";
import { FiAward, FiCheckCircle } from "react-icons/fi";

import { quantitySurveyingLeader } from "@/app/data/data";

export default function QuantitySurveyingLeadership() {
  return (
    <section className="bg-off-white">
      <div className="container-main py-14 sm:py-16 lg:py-20">
        {/* Section Heading */}
        <div className="mb-10 text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              {quantitySurveyingLeader.eyebrow}
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Meet Our Division Lead
          </h2>
        </div>

        {/* Leadership Profile */}
        <div className="mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white md:grid-cols-[0.85fr_1.15fr]">
          {/* Portrait */}
          <div className="relative min-h-80 bg-gray-100 sm:min-h-105">
            <Image
              src={quantitySurveyingLeader.image}
              alt={quantitySurveyingLeader.name}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-top"
            />
          </div>

          {/* Profile Details */}
          <div className="p-6 sm:p-8 lg:p-10">
            <p className="text-sm font-bold uppercase tracking-wide text-gold">
              {quantitySurveyingLeader.role}
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-navy sm:text-3xl">
              {quantitySurveyingLeader.name}
            </h3>

            <p className="mt-2 text-sm font-semibold text-slate">
              {quantitySurveyingLeader.profession}
            </p>

            <p className="mt-6 text-sm leading-7 text-slate">
              {quantitySurveyingLeader.biography}
            </p>

            {/* Qualifications */}
            <div className="mt-7 border-t border-gray-200 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <FiAward className="h-5 w-5 text-gold" aria-hidden="true" />
                <h4 className="text-sm font-bold text-navy">
                  Qualifications & Professional Memberships
                </h4>
              </div>

              <ul className="space-y-3">
                {quantitySurveyingLeader.qualifications.map((qualification) => (
                  <li
                    key={qualification}
                    className="flex items-start gap-3 text-sm leading-6 text-slate"
                  >
                    <FiCheckCircle
                      className="mt-1 h-4 w-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
