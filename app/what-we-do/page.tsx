import Image from "next/image";
import PageHero from "@/components/PageHero";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Programs",
  description:
    "The Brotherhood Academy offers residential living, education, mentorship, and developing transitional support for young men ages 10–24 in Salado, TX.",
};

const programs = [
  {
    href: "/residential-living",
    title: "Residential Living",
    description:
      "A stable, structured home environment for young men who need consistency, guidance, and support. Grounded in trauma-informed, relationship-based care, the program promotes healing, responsibility, life skills, and a lasting sense of belonging.",
  },
  {
    href: "/tbri-sama",
    title: "TBRI® & SAMA®",
    description:
      "Evidence-based approaches that help our team build trust, promote healing, and maintain safety. TBRI® supports connection, empowerment, and healthy relationships, while SAMA® equips staff with proactive strategies for crisis prevention and de-escalation.",
  },
  {
    href: "/thrive-asd",
    title: "Thrive on the Spectrum",
    description:
      "A warm, structured group for individuals on the autism spectrum to strengthen social and communication skills. Through evidence-based activities, role-playing, social stories, and peer interaction, participants practice real-life skills in a safe and encouraging environment.",
  },
  {
    href: "/idd-support",
    title: "IDD Group Therapy",
    description:
      "A supportive group focused on social, communication, and adaptive life skills for individuals with intellectual and developmental disabilities. Structured routines, visual supports, hands-on activities, and peer modeling help participants build skills at an individualized pace.",
  },
  {
    href: "/emotional-behavioral",
    title: "Emotional & Behavioral Support Group",
    description:
      "A safe, nurturing group for individuals who need additional support managing emotions and behavior. Through guided discussion, role-play, and structured activities, participants develop coping strategies, emotional regulation, communication, and healthy problem-solving skills.",
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/what_we_do.png"
        eyebrow="Our Programs"
        heading="Building Futures, Strengthening Faith"
        subheading="From residential care to specialized therapy, every program we offer is designed to meet young men where they are and support them in building greater independence."
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
            We provide a safe, stable, and Christ-centered home for young men ages 10–17, focusing on healing and character development. Our commitment doesn't end at 18 — we are developing transitional support for young men ages 18–24, with a focus on life skills and job readiness.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {programs.map((p, i) => (
              <ProgramCard
                key={p.href}
                {...p}
                fillHeight
                className={
                  i === 3 ? "lg:col-span-2 lg:col-start-2" :
                  i === 4 ? "lg:col-span-2 lg:col-start-4" :
                  "lg:col-span-2"
                }
              />
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
                body: "For ages 18–24, we are developing support focused on life skills, job readiness, and continued community — because the transition to independence takes time and relationship.",
              },
            ].map(({ title, body }) => (
              <div key={title} className="p-8">
                <div className="w-10 h-0.5 bg-gold mb-5 opacity-80" />
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
