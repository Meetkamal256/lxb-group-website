import Image from "next/image";
import Link from "next/link";
import { projects } from "@/app/data/data";

export default function FeaturedProjects() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container-main grid gap-8 py-10 sm:py-12 lg:grid-cols-[0.85fr_2.15fr] lg:items-center lg:gap-8 lg:py-16">
        {/* Section Introduction */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-[#B99A5B]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A672B]">
              Featured Projects
            </p>
          </div>
          
          <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-3xl">
            Selected Architectural Projects
          </h2>
          
          <p className="mt-4 max-w-sm text-sm leading-7 text-[#64748B] sm:text-base">
            A showcase of architectural design and visualization concepts.
          </p>
          
          <Link
            href="/divisions/architecture"
            className="mt-6 inline-flex items-center gap-3 text-sm font-semibold text-[#B58632] transition-colors hover:text-[#8A672B]"
          >
            Explore Architecture
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        
        {/* Project Cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:border-l lg:border-gray-200 lg:pl-8">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-4/3 w-full bg-[#F5F3EE]">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <div className="p-4">
                <h3 className="text-base font-bold text-[#14243A] sm:text-lg">
                  {project.name}
                </h3>

                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-[#64748B]">
                  <span>{project.category}</span>
                  <span className="text-[#B99A5B]">|</span>
                  <span>{project.service}</span>
                </div>

                <p className="mt-3 text-sm leading-6 text-[#64748B]">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
