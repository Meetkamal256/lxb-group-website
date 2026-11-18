import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="container-main grid items-stretch gap-8 py-16 sm:py-20 lg:grid-cols-2 lg:gap-8 lg:py-24">
        {/* Hero Content */}
        <div className="flex min-w-0 flex-col items-start justify-center">
          <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-[#8A672B] sm:text-sm">
            Construction Consultancy · Architecture · Digital Solutions
          </p>
          
          <h1 className="text-2xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-4xl lg:text-6xl">
            Professional Solutions. 
            <span className="text-[#B99A5B]"><br/>Built Around Your Ambition.</span>
          </h1>
          
          <p className="mt-6 max-w-xl text-sm leading-7 text-[#64748B] sm:text-base sm:leading-8">
            LXB Group brings together expertise in construction consultancy,
            architecture and digital technology to deliver professional
            solutions for individuals and organizations.
          </p>
          
          {/* Hero Actions */}
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex items-center text-white! justify-center gap-3 rounded-md bg-[#8A672B] px-5 py-3 text-xs font-semibold transition-colors hover:bg-[#765722] sm:px-7 sm:py-4 sm:text-sm"
            >
              Discuss a Project
              <span aria-hidden="true">→</span>
            </Link>
            
            <Link
              href="/divisions"
              className="inline-flex items-center justify-center rounded-md border border-[#14243A]/20 px-5 py-3 text-xs font-semibold text-[#14243A] transition-colors hover:border-[#B99A5B] hover:bg-[#F5F3EE] sm:px-7 sm:py-4 sm:text-sm"
            >
              Explore Our Divisions
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative h-full min-h-64 overflow-hidden rounded-xl bg-[#F5F3EE] sm:min-h-80 lg:min-h-130">
          <Image
            src="/lxb-hero.png"
            alt="A professional multidisciplinary workspace representing construction consultancy, architecture and digital solutions"
            fill
            priority
            sizes="(max-width: 1024px) 50vw, 50vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
