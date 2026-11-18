"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigationLinks, divisionLinks } from "@/app/data/data";

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setDivisionsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const primaryLinks = navigationLinks.filter(
    (link) => link.href !== "/contact",
  );

  const contactLink = navigationLinks.find((link) => link.href === "/contact");

  const activeDivision = divisionLinks.some((division) =>
    isActive(division.href),
  );
  
  const activeLinkClass =
    "after:absolute after:bottom-[-29px] after:left-0 after:h-[3px] after:w-full after:bg-[#B99A5B]";

  const inactiveLinkClass =
    "after:absolute after:bottom-[-29px] after:left-0 after:h-[3px] after:w-0 after:bg-[#B99A5B] after:transition-all after:duration-200 hover:after:w-full";

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-20 container-max items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Logo */}
        <Link
          href="/"
          aria-label="LXB Group homepage"
          onClick={closeMobileMenu}
          className="shrink-0"
        >
          <Image
            src="/logo/Logo.png"
            alt="LXB Group"
            width={200}
            height={67}
            priority
            className="h-auto w-36.25 sm:w-45"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {primaryLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? "page" : undefined}
              className={`relative text-sm font-semibold transition-colors hover:text-[#B99A5B] ${
                isActive(link.href)
                  ? `text-[#14243A] ${activeLinkClass}`
                  : `text-[#14243A] ${inactiveLinkClass}`
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Divisions Dropdown */}
          <div className="group relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={activeDivision}
              className={`relative flex items-center gap-2 text-sm font-semibold transition-colors hover:text-[#B99A5B] ${
                activeDivision
                  ? `text-[#14243A] ${activeLinkClass}`
                  : `text-[#14243A] ${inactiveLinkClass}`
              }`}
            >
              Our Divisions
              <svg
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="invisible absolute left-0 top-full z-50 w-80 translate-y-2 pt-4 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
              <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                {divisionLinks.map((division) => (
                  <Link
                    key={division.href}
                    href={division.href}
                    aria-current={isActive(division.href) ? "page" : undefined}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(division.href)
                        ? "bg-[#F5F3EE] text-[#14243A]"
                        : "text-[#14243A] hover:bg-[#F5F3EE] hover:text-[#B99A5B]"
                    }`}
                  >
                    {division.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {contactLink && (
            <Link
              href={contactLink.href}
              aria-current={isActive(contactLink.href) ? "page" : undefined}
              className={`relative text-sm font-semibold transition-colors hover:text-[#B99A5B] ${
                isActive(contactLink.href)
                  ? `text-[#14243A] ${activeLinkClass}`
                  : `text-[#14243A] ${inactiveLinkClass}`
              }`}
            >
              {contactLink.label}
            </Link>
          )}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden items-center gap-2 rounded-md bg-[#8A672B] px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-[#765722] lg:inline-flex"
        >
          Discuss a Project
          <span aria-hidden="true">→</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#14243A] transition-colors hover:bg-[#F5F3EE] lg:hidden"
        >
          {mobileMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg lg:hidden"
        >
          <div className="flex flex-col gap-1">
            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                aria-current={isActive(link.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(link.href)
                    ? "bg-[#F5F3EE] text-[#14243A]"
                    : "text-[#14243A] hover:bg-[#F5F3EE]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Divisions Dropdown */}
            <button
              type="button"
              aria-expanded={divisionsOpen}
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className="flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-[#14243A] hover:bg-[#F5F3EE]"
            >
              Our Divisions
              <svg
                aria-hidden="true"
                className={`h-4 w-4 transition-transform ${
                  divisionsOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {divisionsOpen && (
              <div className="ml-3 flex flex-col border-l-2 border-[#B99A5B] pl-3">
                {divisionLinks.map((division) => (
                  <Link
                    key={division.href}
                    href={division.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive(division.href) ? "page" : undefined}
                    className={`rounded-md px-3 py-3 text-sm transition-colors ${
                      isActive(division.href)
                        ? "bg-[#F5F3EE] font-semibold text-[#14243A]"
                        : "text-[#64748B] hover:bg-[#F5F3EE] hover:text-[#14243A]"
                    }`}
                  >
                    {division.label}
                  </Link>
                ))}
              </div>
            )}

            {contactLink && (
              <Link
                href={contactLink.href}
                onClick={closeMobileMenu}
                aria-current={isActive(contactLink.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(contactLink.href)
                    ? "bg-[#F5F3EE] text-[#14243A]"
                    : "text-[#14243A] hover:bg-[#F5F3EE]"
                }`}
              >
                {contactLink.label}
              </Link>
            )}

            {/* Mobile CTA */}
            <Link
              href="/contact"
              onClick={closeMobileMenu}
              className="mt-3 flex items-center justify-center gap-2 rounded-md bg-[#8A672B] px-5 py-3 text-sm font-semibold text-white! transition-colors hover:bg-[#765722]"
            >
              Discuss a Project
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
