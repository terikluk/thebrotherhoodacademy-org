import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "navy" | "gold";
}

export default function CTASection({
  heading,
  subtext,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "navy",
}: CTASectionProps) {
  const isNavy = variant === "navy";

  return (
    <section className={`py-20 px-6 ${isNavy ? "bg-navy" : "bg-gold"}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${isNavy ? "text-warm-white" : "text-navy"}`}>
          {heading}
        </h2>
        {subtext && (
          <p className={`font-body text-lg mb-8 max-w-2xl mx-auto ${isNavy ? "text-warm-white/75" : "text-navy/80"}`}>
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-block font-body font-semibold px-8 py-3.5 rounded-full transition-colors ${
              isNavy
                ? "bg-gold text-navy hover:bg-gold-light"
                : "bg-navy text-warm-white hover:bg-navy-light"
            }`}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={`inline-block font-body font-semibold px-8 py-3.5 rounded-full border-2 transition-colors ${
                isNavy
                  ? "border-gold text-gold hover:bg-gold hover:text-navy"
                  : "border-navy text-navy hover:bg-navy hover:text-warm-white"
              }`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
