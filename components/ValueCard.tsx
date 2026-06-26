interface ValueCardProps {
  value: string;
  description: string;
}

export default function ValueCard({ value, description }: ValueCardProps) {
  return (
    <div className="group bg-warm-white rounded-2xl p-8 border border-navy/8 hover:border-gold/50 hover:shadow-md transition-all duration-300">
      <div className="w-10 h-0.5 bg-gold mb-6" />
      <h3 className="font-display text-2xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">{value}</h3>
      <p className="font-body text-sm text-slate leading-relaxed">{description}</p>
    </div>
  );
}
