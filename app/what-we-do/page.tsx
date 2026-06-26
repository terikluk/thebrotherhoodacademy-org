import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "What We Do",
  description:
    "The Brotherhood Academy offers residential living, education, mentorship, and transitional support for young men ages 10–24 in Salado, TX.",
};

const programs = [
  {
    href: "/residential-living",
    title: "Residential Living",
    description:
      "A safe, structured home for young men ages 10–17. Trauma-informed care in a cottage-style setting designed to feel like a true home.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: "/tbri-sama",
    title: "TBRI® & SAMA®",
    description:
      "Trust-Based Relational Intervention and the Satori Alternatives to Managing Aggression — evidence-based frameworks woven into every aspect of daily life.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    href: "/thrive-asd",
    title: "Thrive (ASD Group)",
    description:
      "Supporting autistic individuals with social skill development, communication confidence, and peer connection in a structured, licensed setting.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/idd-support",
    title: "IDD Group Therapy",
    description:
      "Specialized group therapy for individuals with intellectual and developmental disabilities — building adaptive life skills, communication, and emotional regulation.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    href: "/emotional-behavioral",
    title: "Emotional & Behavioral",
    description:
      "Licensed Social Worker-led group therapy emphasizing coping skills, emotional regulation, communication, and healthy problem-solving.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-04.jpg"
        eyebrow="What We Do"
        heading="Building Futures, Strengthening Faith"
        subheading="From residential care to specialized therapy, every program we offer is designed to meet young men where they are and guide them toward lasting independence."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Our Approach</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            Whole-Person Care, From Day One
          </h2>
          <p className="font-body text-lg text-slate leading-relaxed">
            We provide a safe, stable, and Christ-centered home for young men ages 10–17, focusing on healing and character development. Our commitment doesn't end at 18 — we actively expand transitional programs for young men up to age 24, equipping them with life skills and job readiness for lasting independence.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <ProgramCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* 3 Pillars */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">The Foundation</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">Three Pillars of Care</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Living",
                body: "Young men ages 10–17 receive hot meals, safe housing, individualized service plans, and enrichment activities in a structured home environment.",
              },
              {
                title: "Education & Mentorship",
                body: "Residents attend Salado ISD or UT Charter School with individualized academic support and one-on-one mentorship to discover their God-given purpose.",
              },
              {
                title: "Transitional Support",
                body: "For ages 18–24, we provide life skills, job readiness, and continued community support — because the transition to independence takes time and relationship.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-navy-light/40 rounded-2xl p-8 border border-gold/20">
                <h3 className="font-display text-xl font-semibold text-gold mb-3">{title}</h3>
                <p className="font-body text-sm text-warm-white/75 leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Ready to Refer a Young Man?"
        subtext="Our admissions team is ready to walk you through a compassionate and clear process."
        primaryHref="/refer-a-child"
        primaryLabel="Refer a Child"
        secondaryHref="/our-process"
        secondaryLabel="View Our Process"
      />
    </>
  );
}
