import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  bio?: string;
  imageSrc: string;
  size?: "lg" | "sm";
}

export default function TeamCard({ name, role, bio, imageSrc, size = "sm" }: TeamCardProps) {
  return (
    <div className="bg-warm-white rounded-2xl overflow-hidden border border-navy/8 hover:shadow-lg transition-shadow duration-300">
      <div className={`relative w-full ${size === "lg" ? "h-80" : "h-60"}`}>
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top"
          sizes={size === "lg" ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
        />
      </div>
      <div className="p-6">
        <h3 className="font-display text-xl font-semibold text-navy mb-0.5">{name}</h3>
        <p className="font-body text-sm font-semibold text-gold uppercase tracking-wide mb-3">{role}</p>
        {bio && <p className="font-body text-sm text-slate leading-relaxed">{bio}</p>}
      </div>
    </div>
  );
}
