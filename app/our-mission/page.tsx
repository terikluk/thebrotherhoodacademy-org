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
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
      </svg>
    ),
  },
  {
    value: "Love",
    description:
      "Every young man in our care is worthy of unconditional love. We create a nurturing environment where each resident knows he is seen, valued, and cared for.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    value: "Compassion",
    description:
      "We lead with empathy. Understanding the trauma and challenges each young man carries allows us to provide care that is truly responsive to his needs.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    value: "Community",
    description:
      "Belonging matters. We intentionally build a sense of family and brotherhood so that every young man experiences what it means to be part of a caring community.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
  {
    value: "Empowerment",
    description:
      "We equip young men with the practical skills, education, and spiritual tools they need to build lives of purpose and lasting independence.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    value: "Accountability",
    description:
      "We hold ourselves to the highest standards of transparency and integrity — in our finances, our care, and our commitment to every young man we serve.",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function OurMissionPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-03.jpg"
        eyebrow="Our Mission"
        heading="Nurturing Young Men in Christ"
        subheading="For lives of purpose, accountability, and hope — grounded in faith, structure, and genuine relationship."
        height="lg"
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
