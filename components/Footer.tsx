import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { href: "/our-mission", label: "Our Mission" },
  { href: "/what-we-do", label: "What We Do" },
  { href: "/our-team", label: "Our Team" },
  { href: "/impact-2025", label: "Impact 2025" },
  { href: "/our-process", label: "Admissions" },
  { href: "/children-we-serve", label: "Children We Serve" },
  { href: "/careers", label: "Careers" },
];

const programLinks = [
  { href: "/residential-living", label: "Residential Living" },
  { href: "/tbri-sama", label: "TBRI® & SAMA®" },
  { href: "/thrive-asd", label: "Thrive (ASD Group)" },
  { href: "/idd-support", label: "IDD Support" },
  { href: "/emotional-behavioral", label: "Emotional & Behavioral" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-warm-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4 hover:opacity-85 transition-opacity">
              <Image
                src="/images/logo-white.png"
                alt="The Brotherhood Academy"
                width={40}
                height={40}
                className="h-10 w-auto"
              />
              <span className="font-display text-lg text-warm-white leading-tight">
                The Brotherhood<br />
                <span className="text-gold">Academy</span>
              </span>
            </Link>
            <p className="font-body text-sm text-warm-white/70 leading-relaxed mb-4">
              Christ-centered residential care for young men in Salado, Texas. Built on structure, relationship, and long-term growth.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com/thebrotherhoodacademy_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100094207116848"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-white/60 hover:text-gold transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">About</h3>
            <ul className="space-y-2">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-warm-white/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Programs</h3>
            <ul className="space-y-2">
              {programLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="font-body text-sm text-warm-white/70 hover:text-gold transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-base font-semibold text-gold mb-4">Contact</h3>
            <address className="font-body text-sm text-warm-white/70 not-italic space-y-2">
              <p>394 Esperanza Way<br />Salado, TX 76571</p>
              <p>
                <a href="tel:+12547270548" className="hover:text-gold transition-colors">(254) 727-0548</a>
              </p>
              <p>
                <a href="mailto:info@thebrotherhoodacademy.org" className="hover:text-gold transition-colors">
                  info@thebrotherhoodacademy.org
                </a>
              </p>
              <p className="pt-1 text-warm-white/50 text-xs">Mon–Fri: 9AM–6PM</p>
            </address>
            <div className="mt-6">
              <a
                href="https://donorbox.org/brotherhood-academy-donations"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-body text-sm font-semibold bg-gold text-navy px-5 py-2 rounded-full hover:bg-gold-light transition-colors"
              >
                Donate Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gold/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-warm-white/40">
            © {new Date().getFullYear()} The Brotherhood Academy. Tax ID: 87-4749692
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="font-body text-xs text-warm-white/40 hover:text-gold transition-colors">Contact</Link>
            <Link href="/refer-a-child" className="font-body text-xs text-warm-white/40 hover:text-gold transition-colors">Refer a Child</Link>
            <Link href="/careers" className="font-body text-xs text-warm-white/40 hover:text-gold transition-colors">Careers</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
