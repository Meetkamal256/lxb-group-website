import Link from "next/link";
import { FiArrowRight, FiMonitor } from "react-icons/fi";
import PageActions from "../shared/Page-actions";

export default function DigitalSolutionsHero() {
  return (
    <section className="relative overflow-hidden bg-off-white">
      <div className="container-main relative grid min-h-75 items-center gap-10 py-12 sm:py-14 lg:min-h-85 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1.5 w-9 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              Our Divisions
            </span>
          </div>

          <h1 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Web Development & Automation
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-7 text-slate sm:text-base">
            Website development, web applications and practical automation
            solutions that help businesses build their online presence,
            streamline workflows and operate more efficiently.
          </p>

          {/* Action Buttons */}
          <PageActions
            primaryLabel="Discuss a Project"
            primaryHref="/contact"
            secondaryLabel="View All Divisions"
            secondaryHref="/divisions"
          />
        </div>
        
        {/* Decorative Laptop Illustration */}
        <div className="relative hidden h-67.5 items-center justify-center lg:flex">
          <div className="absolute h-95 w-95 rounded-full border border-gold/40" />
          <div className="absolute h-75 w-75 rounded-full border border-gold/30" />
          <div className="absolute h-55 w-55 rounded-full border border-gold/25" />

          <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-white/70">
            <FiMonitor
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
