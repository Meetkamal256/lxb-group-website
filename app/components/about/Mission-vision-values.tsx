import { FiTarget, FiFlag, FiAward, FiCheck } from "react-icons/fi";
import { coreValues } from "@/app/data/data";

function ValueItem({ value }: { value: string }) {
  return (
    <li className="flex items-center gap-2.5">
      <FiCheck className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
      <span className="text-sm text-navy sm:text-base">{value}</span>
    </li>
  );
}

export default function MissionVisionValues() {
  return (
    <section className="bg-white">
      <div className="container-main py-10 sm:py-12">
        {/* Section Heading */}
        <div className="mb-5">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              Our Purpose
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Mission, Vision &amp; Values
          </h2>
        </div>

        {/* Mission, Vision and Core Values */}
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_1.1fr] lg:items-center lg:gap-5">
          {/* Mission */}
          <div className="rounded-xl bg-off-white p-6 sm:p-7 h-full">
            <div className="mb-3 flex items-center gap-3">
              <FiTarget
                className="h-10 w-10 shrink-0 text-gold"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold tracking-tight text-navy">
                Our Mission
              </h3>
            </div>

            <p className="max-w-sm text-base leading-6 text-navy">
              To deliver practical, high-quality solutions that create value for
              our clients, projects and communities.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-xl bg-off-white p-6 sm:p-7 h-full">
            <div className="mb-3 flex items-center gap-3">
              <FiFlag
                className="h-10 w-10 shrink-0 text-gold"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold tracking-tight text-navy">
                Our Vision
              </h3>
            </div>

            <p className="max-w-sm text-base leading-6 text-navy">
              To be a trusted partner for built and digital projects in Nigeria
              and beyond.
            </p>
          </div>

          {/* Core Values */}
          <div className="border-gray-200 pt-2 lg:border-l lg:py-2 lg:pl-8">
            <div className="mb-4 flex items-center gap-3">
              <FiAward
                className="h-10 w-10 shrink-0 text-gold"
                aria-hidden="true"
              />
              <h3 className="text-xl font-bold tracking-tight text-navy">
                Our Core Values
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-x-3 gap-y-3">
              {coreValues.map((value) => (
                <ValueItem key={value} value={value} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
