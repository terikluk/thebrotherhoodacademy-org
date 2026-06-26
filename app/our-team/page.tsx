import PageHero from "@/components/PageHero";
import TeamCard from "@/components/TeamCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Team",
  description:
    "Meet the founders and board members of The Brotherhood Academy — a team dedicated to guiding, equipping, and uplifting the young men in their care.",
};

const founders = [
  {
    name: "Dr. Scott Law",
    role: "Founder & Board Member",
    bio: "Dr. Scott Law brings deep expertise in mental and cognitive support, shaping the Academy's clinical foundations and therapeutic philosophy.",
    imageSrc: "/images/team/scott-jessica-law.jpg",
    size: "lg" as const,
  },
  {
    name: "Jessica Law",
    role: "Founder & Board Member",
    bio: "Jessica Law leads program development and communications, ensuring the Academy's message and services reach the families and communities who need them most.",
    imageSrc: "/images/team/scott-jessica-law.jpg",
    size: "lg" as const,
  },
];

const board = [
  {
    name: "Julie Tarver",
    role: "Co-Founder & Licensed Child Care Administrator",
    bio: "TBRI® Practitioner and SAMA® Facilitator. Julie brings specialized training in trauma-informed care to every aspect of the Academy's programming.",
    imageSrc: "/images/team/julie-tarver.jpg",
    size: "sm" as const,
  },
  {
    name: "Marlon Reed",
    role: "Board Member",
    bio: "An 11-year Army veteran with 20 years in the Temple Police Department. Marlon brings discipline, integrity, and a deep commitment to youth.",
    imageSrc: "/images/team/marlon-reed.jpg",
    size: "sm" as const,
  },
  {
    name: "Shanda Gatewood",
    role: "Board Member",
    bio: "Shanda serves the Academy's governance with dedication and brings community perspective to strategic decision-making.",
    imageSrc: "/images/team/shanda-gatewood.png",
    size: "sm" as const,
  },
  {
    name: "Paul Schoenrock",
    role: "Board Member",
    bio: "A real estate and land consultant, Paul provides financial and property stewardship expertise to support the Academy's growth.",
    imageSrc: "/images/team/paul-schoenrock.jpg",
    size: "sm" as const,
  },
  {
    name: "Chris Bazar",
    role: "Board Member",
    bio: "Deputy Constable and youth mentor. Chris combines law enforcement experience with a passion for guiding the next generation.",
    imageSrc: "/images/team/chris-bazar.jpg",
    size: "sm" as const,
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/team/team-hero.jpg"
        eyebrow="Our Team"
        heading="Dedicated to Every Young Man in Our Care"
        subheading="Our founders, administrators, and board members share one mission: to guide, equip, and uplift the young men entrusted to us."
        height="lg"
      />

      {/* Founders */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Leadership</p>
            <h2 className="font-display text-4xl font-bold text-navy">Our Founders</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {founders.map((f) => (
              <TeamCard key={f.name} {...f} />
            ))}
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Governance</p>
            <h2 className="font-display text-4xl font-bold text-navy">Board of Directors</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {board.map((m) => (
              <TeamCard key={m.name} {...m} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join the Team"
        subtext="We're always looking for passionate individuals who share our commitment to transforming young lives."
        primaryHref="/careers"
        primaryLabel="View Career Opportunities"
        secondaryHref="/contact"
        secondaryLabel="Contact Us"
      />
    </>
  );
}
