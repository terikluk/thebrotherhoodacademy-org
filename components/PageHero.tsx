import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  imageAlt?: string;
  eyebrow?: string;
  heading: string;
  subheading?: string;
  height?: "sm" | "md" | "lg" | "xl";
  objectPosition?: string;
}

const heightMap = {
  sm: "min-h-[30vh]",
  md: "min-h-[45vh]",
  lg: "min-h-[60vh]",
  xl: "min-h-[75vh]",
};

export default function PageHero({
  imageSrc,
  imageAlt = "",
  eyebrow,
  heading,
  subheading,
  height = "md",
  objectPosition = "center",
}: PageHeroProps) {
  return (
    <section className={`relative flex items-center justify-center ${heightMap[height]} overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover"
        style={{ objectPosition }}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-navy/65" />
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 py-16">
        {eyebrow && (
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">{eyebrow}</p>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-4">
          {heading}
        </h1>
        {subheading && (
          <p className="font-body text-lg md:text-xl text-warm-white/80 max-w-2xl mx-auto leading-relaxed">
            {subheading}
          </p>
        )}
      </div>
    </section>
  );
}
