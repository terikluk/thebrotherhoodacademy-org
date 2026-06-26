"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const primaryLinks = [
  { href: "/our-mission", label: "Our Mission" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-team", label: "Our Team" },
  { href: "/impact-2025", label: "Impact" },
  { href: "/ways-to-give", label: "Give" },
  { href: "/contact", label: "Contact" },
];

const programLinks = [
  { href: "/residential-living", label: "Residential Living" },
  { href: "/tbri-sama", label: "TBRI® & SAMA®" },
  { href: "/thrive-asd", label: "Thrive (ASD Group)" },
  { href: "/idd-support", label: "IDD Support" },
  { href: "/emotional-behavioral", label: "Emotional & Behavioral" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy/97 backdrop-blur-sm border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-85 transition-opacity">
          <Image
            src="/images/logo-white.png"
            alt="The Brotherhood Academy"
            width={40}
            height={40}
            className="h-10 w-auto"
            priority
          />
          <span className="font-display text-lg text-warm-white leading-tight hidden sm:block">
            The Brotherhood<br />
            <span className="text-gold">Academy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {primaryLinks.map(({ href, label }) => {
            if (label === "What We Do") {
              return (
                <div key={href} className="relative group">
                  <Link
                    href={href}
                    className={[
                      "font-body text-sm tracking-wide transition-colors hover:text-gold",
                      pathname === href || pathname.startsWith("/residential") || pathname.startsWith("/tbri") || pathname.startsWith("/thrive") || pathname.startsWith("/idd") || pathname.startsWith("/emotional")
                        ? "text-gold border-b-2 border-gold pb-0.5"
                        : "text-warm-white/90",
                    ].join(" ")}
                  >
                    {label}
                  </Link>
                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 hidden group-hover:block">
                    <div className="bg-navy border border-gold/20 rounded-lg shadow-xl py-2 min-w-48">
                      {programLinks.map(({ href: ph, label: pl }) => (
                        <Link
                          key={ph}
                          href={ph}
                          className="block px-4 py-2 text-sm text-warm-white/85 hover:text-gold hover:bg-navy-light transition-colors"
                        >
                          {pl}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            }
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={[
                  "font-body text-sm tracking-wide transition-colors hover:text-gold",
                  active ? "text-gold border-b-2 border-gold pb-0.5" : "text-warm-white/90",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/refer-a-child"
            className="font-body text-sm font-semibold tracking-wide bg-gold text-navy px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
          >
            Refer a Child
          </Link>
          <a
            href="https://donorbox.org/brotherhood-academy-donations"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-sm font-semibold tracking-wide border border-gold text-gold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition-colors"
          >
            Donate
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span className={`block h-0.5 w-6 bg-warm-white transition-transform duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-warm-white transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-warm-white transition-transform duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="lg:hidden bg-navy border-t border-gold/20 px-6 py-4 flex flex-col gap-3">
          {primaryLinks.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={[
                  "font-body text-base text-warm-white/90 hover:text-gold transition-colors py-1",
                  active ? "text-gold font-semibold" : "",
                ].join(" ")}
              >
                {label}
              </Link>
            );
          })}

          <button
            className="font-body text-base text-warm-white/90 hover:text-gold transition-colors py-1 text-left flex items-center gap-2"
            onClick={() => setProgramsOpen((p) => !p)}
          >
            Our Programs
            <span className={`text-xs transition-transform ${programsOpen ? "rotate-180" : ""}`}>▼</span>
          </button>
          {programsOpen && (
            <div className="pl-4 flex flex-col gap-2">
              {programLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="font-body text-sm text-warm-white/75 hover:text-gold transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          )}

          <div className="pt-2 flex flex-col gap-3">
            <Link
              href="/refer-a-child"
              onClick={() => setMenuOpen(false)}
              className="font-body text-base font-semibold bg-gold text-navy px-5 py-2.5 rounded-full text-center hover:bg-gold-light transition-colors"
            >
              Refer a Child
            </Link>
            <a
              href="https://donorbox.org/brotherhood-academy-donations"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-base font-semibold border border-gold text-gold px-5 py-2.5 rounded-full text-center hover:bg-gold hover:text-navy transition-colors"
            >
              Donate
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
