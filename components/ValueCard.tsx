interface ValueCardProps {
  value: string;
  description: string;
  icon?: React.ReactNode;
}

export default function ValueCard({ value, description, icon }: ValueCardProps) {
  return (
    <div className="bg-warm-white rounded-2xl p-8 border border-navy/8 hover:border-gold/50 hover:shadow-md transition-all duration-300">
      {icon && (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gold/15 text-gold mb-4">
          {icon}
        </div>
      )}
      <h3 className="font-display text-2xl font-semibold text-navy mb-3">{value}</h3>
      <p className="font-body text-sm text-slate leading-relaxed">{description}</p>
    </div>
  );
}
