interface ProcessStepProps {
  stepNumber: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function ProcessStep({ stepNumber, title, description, isLast }: ProcessStepProps) {
  return (
    <li className="relative flex gap-6">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-gold/25" />
      )}
      {/* Step number */}
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy flex items-center justify-center">
        <span className="font-display text-sm font-bold text-gold">{stepNumber}</span>
      </div>
      <div className="pb-10">
        <h3 className="font-display text-xl font-semibold text-navy mb-2">{title}</h3>
        <p className="font-body text-sm text-slate leading-relaxed">{description}</p>
      </div>
    </li>
  );
}
