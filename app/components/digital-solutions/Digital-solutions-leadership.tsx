import Image from "next/image";
import { FiAward, FiCheckCircle } from "react-icons/fi";

import { digitalSolutionsLeader } from "@/app/data/data";

export default function DigitalSolutionsLeadership() {
  const leader = digitalSolutionsLeader;

  return (
    <section className="bg-off-white py-14 sm:py-16 lg:py-20">
      <div className="container-main">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-gold">
            {leader.eyebrow}
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-navy sm:text-3xl">
            Meet Our Team Member
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            Bringing together web development, technical integration and
            workflow automation experience.
          </p>
        </div>

        <article className="mx-auto grid max-w-5xl overflow-hidden rounded-xl border border-gray-200 bg-white md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-80 bg-gray-100 sm:min-h-100">
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-gold">
              {leader.role}
            </span>

            <h3 className="mt-2 text-2xl font-bold text-navy sm:text-3xl">
              {leader.name}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate">
              {leader.profession}
            </p>

            <p className="mt-5 text-sm leading-7 text-slate">
              {leader.biography}
            </p>
            
        
            
            <div className="mt-7 border-t border-gray-200 pt-6">
              <div className="mb-4 flex items-center gap-2">
                <FiAward className="h-5 w-5 text-gold" aria-hidden="true" />
                <h4 className="font-semibold text-navy">
                  Training & Certifications
                </h4>
              </div>
              
              <ul className="space-y-3">
                {leader.qualifications.map((qualification) => (
                  <li
                    key={qualification}
                    className="flex items-start gap-2 text-sm leading-6 text-slate"
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
        </article>
      </div>
    </section>
  );
}
