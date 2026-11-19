"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { FocusEvent } from "react";
import { navigationLinks, divisionLinks } from "@/app/data/data";

export default function Header() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const [desktopDivisionsOpen, setDesktopDivisionsOpen] = useState(false);

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

  const isDivisionsActive =
    pathname === "/divisions" || pathname.startsWith("/divisions/");

  const primaryLinks = navigationLinks.filter(
    (link) => link.href !== "/contact",
  );

  const contactLink = navigationLinks.find((link) => link.href === "/contact");

  const activeLinkClass =
    "after:absolute after:bottom-[-29px] after:left-0 after:h-[3px] after:w-full after:bg-gold";

  const inactiveLinkClass =
    "after:absolute after:bottom-[-29px] after:left-0 after:h-[3px] after:w-0 after:bg-gold after:transition-all after:duration-200 hover:after:w-full";

  const handleDesktopBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setDesktopDivisionsOpen(false);
    }
  };

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
              className={`relative text-sm font-semibold transition-colors hover:text-gold ${
                isActive(link.href)
                  ? `text-navy ${activeLinkClass}`
                  : `text-navy ${inactiveLinkClass}`
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Desktop Divisions Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopDivisionsOpen(true)}
            onMouseLeave={() => setDesktopDivisionsOpen(false)}
            onFocus={() => setDesktopDivisionsOpen(true)}
            onBlur={handleDesktopBlur}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={desktopDivisionsOpen}
              aria-controls="desktop-divisions-menu"
              onClick={() => setDesktopDivisionsOpen(!desktopDivisionsOpen)}
              className={`relative flex items-center gap-2 text-sm font-semibold transition-colors hover:text-gold ${
                isDivisionsActive
                  ? `text-navy ${activeLinkClass}`
                  : `text-navy ${inactiveLinkClass}`
              }`}
            >
              Our Divisions
              <svg
                aria-hidden="true"
                className={`h-4 w-4 transition-transform duration-200 ${
                  desktopDivisionsOpen ? "rotate-180" : ""
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

            {/* Desktop Dropdown Content */}
            <div
              id="desktop-divisions-menu"
              className={`absolute left-0 top-full z-50 w-80 pt-4 transition-all duration-200 ${
                desktopDivisionsOpen
                  ? "visible translate-y-0 opacity-100"
                  : "invisible translate-y-2 opacity-0"
              }`}
            >
              <div className="rounded-lg border border-gray-100 bg-white p-2 shadow-lg">
                {/* Divisions Overview */}
                <Link
                  href="/divisions"
                  aria-current={pathname === "/divisions" ? "page" : undefined}
                  onClick={() => setDesktopDivisionsOpen(false)}
                  className={`mb-1 block rounded-md px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === "/divisions"
                      ? "bg-off-white text-navy"
                      : "text-navy hover:bg-off-white hover:text-gold"
                  }`}
                >
                  Explore All Divisions
                </Link>

                <div className="my-1 border-t border-gray-100" />

                {/* Individual Division Links */}
                {divisionLinks.map((division) => (
                  <Link
                    key={division.href}
                    href={division.href}
                    aria-current={isActive(division.href) ? "page" : undefined}
                    onClick={() => setDesktopDivisionsOpen(false)}
                    className={`block rounded-md px-4 py-3 text-sm font-medium transition-colors ${
                      isActive(division.href)
                        ? "bg-off-white text-navy"
                        : "text-navy hover:bg-off-white hover:text-gold"
                    }`}
                  >
                    {division.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Link */}
          {contactLink && (
            <Link
              href={contactLink.href}
              aria-current={isActive(contactLink.href) ? "page" : undefined}
              className={`relative text-sm font-semibold transition-colors hover:text-gold ${
                isActive(contactLink.href)
                  ? `text-navy ${activeLinkClass}`
                  : `text-navy ${inactiveLinkClass}`
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
          className="flex h-10 w-10 items-center justify-center rounded-md text-navy transition-colors hover:bg-off-white lg:hidden"
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
                    ? "bg-off-white text-navy"
                    : "text-navy hover:bg-off-white"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Divisions Dropdown */}
            <button
              type="button"
              aria-expanded={divisionsOpen}
              aria-controls="mobile-divisions-menu"
              onClick={() => setDivisionsOpen(!divisionsOpen)}
              className={`flex items-center justify-between rounded-md px-3 py-3 text-left text-sm font-semibold text-navy hover:bg-off-white ${
                isDivisionsActive ? "bg-off-white" : ""
              }`}
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

            {/* Mobile Dropdown Content */}
            {divisionsOpen && (
              <div
                id="mobile-divisions-menu"
                className="ml-3 flex flex-col border-l-2 border-gold pl-3"
              >
                {/* Divisions Overview */}
                <Link
                  href="/divisions"
                  onClick={closeMobileMenu}
                  aria-current={pathname === "/divisions" ? "page" : undefined}
                  className={`rounded-md px-3 py-3 text-sm transition-colors ${
                    pathname === "/divisions"
                      ? "bg-off-white font-semibold text-navy"
                      : "font-semibold text-navy hover:bg-off-white"
                  }`}
                >
                  Explore All Divisions
                </Link>

                {/* Individual Division Links */}
                {divisionLinks.map((division) => (
                  <Link
                    key={division.href}
                    href={division.href}
                    onClick={closeMobileMenu}
                    aria-current={isActive(division.href) ? "page" : undefined}
                    className={`rounded-md px-3 py-3 text-sm transition-colors ${
                      isActive(division.href)
                        ? "bg-off-white font-semibold text-navy"
                        : "text-slate hover:bg-off-white hover:text-navy"
                    }`}
                  >
                    {division.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Contact Link */}
            {contactLink && (
              <Link
                href={contactLink.href}
                onClick={closeMobileMenu}
                aria-current={isActive(contactLink.href) ? "page" : undefined}
                className={`rounded-md px-3 py-3 text-sm font-semibold ${
                  isActive(contactLink.href)
                    ? "bg-off-white text-navy"
                    : "text-navy hover:bg-off-white"
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
