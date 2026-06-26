import Image from "next/image";
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
  },
  {
    href: "/tbri-sama",
    title: "TBRI® & SAMA®",
    description:
      "Trust-Based Relational Intervention and the Satori Alternatives to Managing Aggression — evidence-based frameworks woven into every aspect of daily life.",
  },
  {
    href: "/thrive-asd",
    title: "Thrive (ASD Group)",
    description:
      "Supporting autistic individuals with social skill development, communication confidence, and peer connection in a structured, licensed setting.",
  },
  {
    href: "/idd-support",
    title: "IDD Group Therapy",
    description:
      "Specialized group therapy for individuals with intellectual and developmental disabilities — building adaptive life skills, communication, and emotional regulation.",
  },
  {
    href: "/emotional-behavioral",
    title: "Emotional & Behavioral",
    description:
      "Licensed Social Worker-led group therapy emphasizing coping skills, emotional regulation, communication, and healthy problem-solving.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/what_we_do.png"
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
      <section className="relative py-20 px-6 overflow-hidden">
        <Image
          src="/images/pillars.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-navy/82" />
        <div className="relative z-10 max-w-7xl mx-auto">
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
              <div key={title} className="p-8 border-t border-gold/40">
                <h3 className="font-display text-xl font-semibold text-gold mb-3">{title}</h3>
                <p className="font-body text-sm text-warm-white/80 leading-relaxed">{body}</p>
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
