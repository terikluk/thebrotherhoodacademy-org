import Link from "next/link";

interface ProgramCardProps {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ProgramCard({ href, icon, title, description }: ProgramCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-warm-white rounded-2xl p-8 border border-navy/8 hover:border-gold/60 hover:shadow-lg transition-all duration-300"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-navy/8 text-navy group-hover:bg-gold group-hover:text-warm-white transition-colors mb-5">
        {icon}
      </div>
      <h3 className="font-display text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
        {title}
      </h3>
      <p className="font-body text-sm text-slate leading-relaxed">{description}</p>
      <div className="mt-5 flex items-center gap-1 text-gold font-body text-sm font-semibold">
        Learn more
        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
