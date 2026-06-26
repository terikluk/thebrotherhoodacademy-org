import Image from "next/image";
import PageHero from "@/components/PageHero";
import ValueCard from "@/components/ValueCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Mission",
  description:
    "The Brotherhood Academy's faith-based mission: nurturing young men in Christ for lives of purpose, accountability, and hope. Learn about our 6 core values.",
};

const values = [
  {
    value: "Faith",
    description:
      "Christian principles are the foundation of everything we do. We believe that genuine healing and lasting change flow from a relationship with Jesus Christ.",
  },
  {
    value: "Love",
    description:
      "Every young man in our care is worthy of unconditional love. We create a nurturing environment where each resident knows he is seen, valued, and cared for.",
  },
  {
    value: "Compassion",
    description:
      "We lead with empathy. Understanding the trauma and challenges each young man carries allows us to provide care that is truly responsive to his needs.",
  },
  {
    value: "Community",
    description:
      "Belonging matters. We intentionally build a sense of family and brotherhood so that every young man experiences what it means to be part of a caring community.",
  },
  {
    value: "Empowerment",
    description:
      "We equip young men with the practical skills, education, and spiritual tools they need to build lives of purpose and lasting independence.",
  },
  {
    value: "Accountability",
    description:
      "We hold ourselves to the highest standards of transparency and integrity — in our finances, our care, and our commitment to every young man we serve.",
  },
];

export default function OurMissionPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/road.png"
        eyebrow="Our Mission"
        heading="Nurturing Young Men in Christ"
        subheading="For lives of purpose, accountability, and hope — grounded in faith, structure, and genuine relationship."
        height="lg"
        objectPosition="center 30%"
      />

      {/* Mission Body */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Who We Are</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            A Faith-Based General Residential Operation
          </h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              The Brotherhood Academy is a faith-based General Residential Operation (GRO) dedicated to empowering young men ages 10–17 who lack stable homes or parental support. We provide Christ-centered care that addresses the whole person — spiritually, academically, emotionally, and practically.
            </p>
            <p>
              Our transitional living program extends services to age 24, helping young men develop the independent living skills and vocational foundation they need to pursue education, employment, and meaningful relationships.
            </p>
            <p>
              Students at the Academy attend either Salado ISD or enroll in the UT Charter School online program, with individualized academic support provided every step of the way. We believe education is a pathway to empowerment — and every young man deserves access to it.
            </p>
            <p>
              Everything we do flows from a conviction that Christ transforms lives. We don't just provide shelter — we build brotherhood.
            </p>
          </div>
        </div>
      </section>

      {/* Prayer image break */}
      <div className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/prayer.png"
          alt="Community prayer at The Brotherhood Academy"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Core Values */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <ValueCard key={v.value} {...v} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Join Us in Changing Generations"
        subtext="Whether you give, refer, or volunteer — you are part of the mission."
        primaryHref="/ways-to-give"
        primaryLabel="Support the Mission"
        secondaryHref="/contact"
        secondaryLabel="Get in Touch"
      />
    </>
  );
}
