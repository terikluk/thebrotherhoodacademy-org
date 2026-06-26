import Link from "next/link";

interface CTASectionProps {
  heading: string;
  subtext?: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
  variant?: "navy" | "gold" | "offwhite";
}

export default function CTASection({
  heading,
  subtext,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  variant = "offwhite",
}: CTASectionProps) {
  const bg =
    variant === "navy" ? "bg-navy" :
    variant === "gold" ? "bg-gold" :
    "bg-offwhite";

  const headingColor =
    variant === "navy" ? "text-warm-white" : "text-navy";

  const subtextColor =
    variant === "navy" ? "text-warm-white/75" : "text-slate";

  const primaryClass =
    variant === "navy"
      ? "bg-gold text-navy hover:bg-gold-light"
      : "bg-navy text-warm-white hover:bg-navy-light";

  const secondaryClass =
    variant === "navy"
      ? "border-gold text-gold hover:bg-gold hover:text-navy"
      : "border-navy text-navy hover:bg-navy hover:text-warm-white";

  return (
    <section className={`py-20 px-6 ${bg}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`font-display text-3xl md:text-4xl font-bold mb-4 ${headingColor}`}>
          {heading}
        </h2>
        {subtext && (
          <p className={`font-body text-lg mb-8 max-w-2xl mx-auto ${subtextColor}`}>
            {subtext}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={primaryHref}
            className={`inline-block font-body font-semibold px-8 py-3.5 rounded-full transition-colors ${primaryClass}`}
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel && (
            <Link
              href={secondaryHref}
              className={`inline-block font-body font-semibold px-8 py-3.5 rounded-full border-2 transition-colors ${secondaryClass}`}
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
