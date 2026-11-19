"use client";

import Image from "next/image";
import { useState } from "react";

const teamMembers = [
  {
    name: "Hafiz Muhammad",
    role: "Founder & Group Director",
    biography:
      "Hafiz brings over a decade of experience in the Nigerian construction industry, with expertise in quantity surveying, construction cost management, contract administration and project supervision.",
    image: "/mubarak.jpg",
  },
  {
    name: "Mubarak Muhammad",
    role: "Architecture & 3D Visualization",
    biography:
      "Mubarak focuses on architectural design and visualization, developing building concepts and detailed visual representations for residential, commercial and institutional projects.",
    image: "/mubarak.jpg",
  },
  {
    name: "Kamaluddeen Muhammad",
    role: "Web Development & Digital Solutions",
    biography:
      "Kamaluddeen is a software developer with experience in web development, API integrations and workflow automation. He enjoys building practical digital solutions, developing web applications and connecting different tools to help businesses work more efficiently.",
    image: "/mubarak.jpg",
  },
];

export default function Leadership() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  return (
    <section className="bg-white">
      <div className="container-main py-12 sm:py-16">
        {/* Section Heading */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-3">
            <span className="h-1.5 w-10 rounded-full bg-gold" />
            <span className="text-sm font-bold uppercase tracking-wide text-gold">
              The People Behind LXB
            </span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-navy sm:text-3xl">
            Our Leadership
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate sm:text-base">
            Bringing together complementary expertise and a shared commitment to
            delivering professional solutions across different industries.
          </p>
        </div>

        {/* Leadership Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                key={member.name}
                type="button"
                onClick={() => setActiveIndex(isActive ? null : index)}
                onBlur={() => setActiveIndex(null)}
                aria-expanded={isActive}
                aria-label={`${member.name}, ${member.role}. ${
                  isActive ? "Hide" : "View"
                } biography`}
                className="group relative block aspect-4/5 w-full overflow-hidden rounded-xl bg-off-white text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
              >
                {/* Portrait */}
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}`}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Default Name and Role */}
                <div className="absolute inset-x-0 bottom-0 bg-navy p-5 text-white transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="mt-1 text-sm text-gold">{member.role}</p>
                </div>

                {/* Biography Overlay */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end bg-navy/95 p-5 text-white transition-opacity duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100"
                  }`}
                >
                  <span className="mb-3 text-xs font-bold uppercase tracking-widest text-gold">
                    {member.role}
                  </span>

                  <h3 className="text-xl font-bold">{member.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-white/85">
                    {member.biography}
                  </p>

                  <span className="mt-5 text-xs font-semibold text-gold">
                    {isActive ? "Tap to close" : "Discover more"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
