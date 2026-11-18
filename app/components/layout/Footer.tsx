import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Divisions", href: "/divisions" },
  { label: "Projects", href: "/#featured-projects" },
  { label: "Contact Us", href: "/contact" },
];

const divisionLinks = [
  {
    label: "Quantity Surveying & Construction Consultancy",
    href: "/divisions/quantity-surveying",
  },
  {
    label: "Architecture & 3D Visualization",
    href: "/divisions/architecture",
  },
  {
    label: "Digital Solutions & Automation",
    href: "/divisions/digital-solutions",
  },
];

const footerLinkStyles =
  "inline-flex text-sm text-[#64748B] transition-colors duration-200 hover:text-[#B58632] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58632]";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container-main grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1.3fr_1fr] lg:gap-8 lg:py-14">
        {/* Company Identity */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Link
            href="/"
            aria-label="LXB Group homepage"
            className="rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58632]"
          >
            <Image
              src="/logo/Logo.png"
              alt="LXB Group"
              width={160}
              height={54}
              className="h-auto w-32"
            />
          </Link>

          <div className="mt-5 border-l border-gray-300 pl-4">
            <h3 className="text-sm font-bold text-[#14243A]">LXB Group</h3>
            <p className="mt-2 max-w-55 text-xs leading-6 text-[#64748B]">
              A Multidisciplinary Professional Services Company
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="border-gray-200 text-center sm:border-l sm:pl-6 lg:text-left">
          <h3 className="mb-4 text-sm font-bold text-[#14243A]">Quick Links</h3>

          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className={footerLinkStyles}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions */}
        <div className="border-gray-200 text-center sm:border-l sm:pl-6 lg:text-left">
          <h3 className="mb-4 text-sm font-bold text-[#14243A]">
            Our Divisions
          </h3>

          <ul className="space-y-3">
            {divisionLinks.map((division) => (
              <li key={division.href}>
                <Link href={division.href} className={footerLinkStyles}>
                  {division.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div className="border-gray-200 text-center sm:border-l sm:pl-6 lg:text-left">
          <h3 className="mb-4 text-sm font-bold text-[#14243A]">
            Get in Touch
          </h3>

          <ul className="space-y-4 text-sm text-[#64748B]">
            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span aria-hidden="true" className="font-semibold text-[#14243A]">
                ⌖
              </span>
              <span>Abuja, Nigeria</span>
            </li>

            <li className="flex items-center justify-center gap-3 lg:justify-start">
              <span aria-hidden="true" className="font-semibold text-[#14243A]">
                ✉
              </span>
              <a
                href="mailto:info@lxbgroup.com"
                className="transition-colors duration-200 hover:text-[#B58632] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58632]"
              >
                info@lxbgroup.com
              </a>
            </li>

            <li className="flex justify-center lg:justify-start">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-semibold text-[#B58632] transition-colors duration-200 hover:text-[#8A672B] hover:underline hover:underline-offset-4 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58632]"
              >
                Contact our team
                <span aria-hidden="true">→</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-200">
        <div className="container-main flex flex-col items-center justify-between gap-3 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-[#64748B]">
            © 2026 LXB Group. All rights reserved.
          </p>

          <p className="text-xs text-[#64748B]">
            Professional Solutions. Built Around Your Ambition.
          </p>
        </div>
      </div>
    </footer>
  );
}
