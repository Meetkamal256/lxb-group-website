import Link from "next/link";
import { FiArrowRight, FiBriefcase } from "react-icons/fi";

import { quantitySurveyingHero } from "@/app/data/data";

export default function QuantitySurveyingHero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      <div className="container-main relative grid min-h-75 items-center gap-10 py-12 sm:py-14 lg:min-h-85 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1.5 w-9 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              {quantitySurveyingHero.eyebrow}
            </span>
          </div>
          
          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            {quantitySurveyingHero.title}
          </h1>
          
          <p className="mt-4 max-w-xl text-sm leading-7 text-slate sm:text-base">
            {quantitySurveyingHero.description}
          </p>
          
          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href={quantitySurveyingHero.primaryButton.href}
              className="inline-flex items-center text-white! justify-center gap-3 rounded-md bg-[#8A672B] px-5 py-3 text-xs font-semibold transition-colors hover:bg-[#765722] sm:px-7 sm:py-4 sm:text-sm"
            >
              {quantitySurveyingHero.primaryButton.label}
              <FiArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            
            <Link
              href={quantitySurveyingHero.secondaryButton.href}
              className="inline-flex items-center justify-center rounded-md border border-[#14243A]/20 px-5 py-3 text-xs font-semibold text-[#14243A] transition-colors hover:border-[#B99A5B] hover:bg-[#F5F3EE] sm:px-7 sm:py-4 sm:text-sm"
            >
              {quantitySurveyingHero.secondaryButton.label}
            </Link>
          </div>
        </div>
        
        {/* Decorative Illustration */}
        <div className="relative hidden h-67.5 items-center justify-center lg:flex">
          <div className="absolute h-95 w-95 rounded-full border border-gold/40" />
          <div className="absolute h-75 w-75 rounded-full border border-gold/30" />
          <div className="absolute h-55 w-55 rounded-full border border-gold/25" />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/70">
            <FiBriefcase
              className="h-24 w-24 text-gold"
              strokeWidth={1.3}
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
