import { FiLayers, FiUsers, FiTarget } from "react-icons/fi";

import { integratedExpertise } from "@/app/data/data";

const benefitIcons = [FiLayers, FiUsers, FiTarget];

export default function IntegratedExpertise() {
  return (
    <section className="bg-off-white">
      <div className="container-main py-14 sm:py-16 lg:py-20">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              One Group, Shared Purpose
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Integrated Expertise, Greater Value
          </h2>
          
          <p className="mt-4 text-sm leading-7 text-slate sm:text-base">
            By bringing together three complementary areas of expertise, LXB
            Group offers a coordinated approach to different project and
            business needs.
          </p>
        </div>
        
        {/* Benefits */}
        <div className="grid gap-8 md:grid-cols-3">
          {integratedExpertise.map((benefit, index) => {
            const Icon = benefitIcons[index];
            
            return (
              <article
                key={benefit.number}
                className="border-t-2 border-gold/70 pt-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white">
                    {Icon && (
                      <Icon className="h-6 w-6 text-gold" aria-hidden="true" />
                    )}
                  </div>
                  
                  <span className="text-sm font-bold tracking-wider text-gold">
                    {benefit.number}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-navy">{benefit.title}</h3>
                
                <p className="mt-3 text-sm leading-7 text-slate">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
