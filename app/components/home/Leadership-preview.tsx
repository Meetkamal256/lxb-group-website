import Link from "next/link";
import { teamMembers } from "@/app/data/data";

export default function LeadershipPreview() {
  return (
    <section className="border-b border-gray-200 bg-white">
      <div className="container-main grid gap-8 py-10 sm:py-12 lg:grid-cols-[0.9fr_2.1fr] lg:items-center lg:gap-10 lg:py-14">
        {/* Section Introduction */}
        <div className="flex flex-col items-start">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-1 w-8 rounded-full bg-[#B99A5B]" />
            <p className="text-xs font-semibold uppercase tracking-wider text-[#8A672B]">
              Leadership & Expertise
            </p>
          </div>

          <h2 className="max-w-sm text-2xl font-bold leading-tight tracking-tight text-[#14243A] sm:text-3xl">
            The People Behind LXB Group
          </h2>

          <p className="mt-3 max-w-sm text-sm leading-6 text-[#64748B]">
            A team bringing together complementary professional expertise across
            construction, architecture and digital technology.
          </p>

          <Link
            href="/about#leadership"
            className="mt-5 inline-flex items-center gap-3 rounded-md border border-[#B99A5B] px-5 py-2.5 text-sm font-semibold text-[#14243A] transition-colors hover:bg-[#F5F3EE]"
          >
            Meet the Team
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-4 lg:border-l lg:border-gray-200 lg:pl-8">
          {teamMembers.map((member) => (
            <div
              key={member.initials}
              className="flex flex-col items-center text-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#E9EAF0] text-2xl font-bold text-[#14243A] sm:h-16 sm:w-16 sm:text-xl lg:h-20 lg:w-20 lg:text-2xl">
                {member.initials}
              </div>

              <h3 className="mt-4 text-sm font-bold text-[#14243A]">
                {member.name}
              </h3>

              <p className="mt-1 text-xs font-semibold leading-5 text-[#B58632]">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
