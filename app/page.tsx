import Image from "next/image";
import Link from "next/link";
import StatsCounter from "@/components/StatsCounter";
import ProgramCard from "@/components/ProgramCard";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "The Brotherhood Academy | Christ-Centered Care in Salado, TX",
  description:
    "The Brotherhood Academy is a faith-based residential care organization in Salado, TX serving young men ages 10–17 through TBRI® trauma-informed care, mentorship, and community.",
};

const programs = [
  {
    href: "/residential-living",
    title: "Residential Living",
    description:
      "A safe, structured, trauma-informed home for young men to heal, grow, and thrive in Salado, TX.",
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
      "Evidence-based, trauma-informed intervention and crisis prevention programs integrated into daily care.",
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
      "Social and communication skill-building in a structured, supportive group setting for individuals with Autism Spectrum Disorder.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    href: "/idd-support",
    title: "IDD Support",
    description:
      "Specialized group therapy addressing adaptive life skills, communication, and emotional regulation for individuals with intellectual disabilities.",
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
      "Group-based intervention building coping skills, emotional regulation, and healthy relationships for youth with emotional challenges.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "100%", label: "Grade Level Pass Rate", description: "of our youth passed their grade levels" },
  { value: "74%", label: "Medication Stability", description: "showed improved or stabilized outcomes" },
  { value: "70%", label: "Committed to Christ", description: "of young men made faith commitments" },
  { value: "50%+", label: "Stable Placements", description: "of placements remain stable & thriving" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero.jpg"
          alt="Young men at The Brotherhood Academy in Salado, TX"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/75 via-navy/60 to-navy/80" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-24">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">
            Salado, Texas · Est. 2023
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-warm-white mb-6 leading-tight">
            Transforming Lives Through<br />
            <span className="text-gold">Faith, Community & Care</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            A Christ-centered General Residential Operation in Salado, TX — providing structured, trauma-informed care for young men <span className="whitespace-nowrap">ages 10–17.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/refer-a-child"
              className="inline-block font-body font-semibold text-lg bg-gold text-navy px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
            >
              Refer a Child
            </Link>
            <Link
              href="/our-mission"
              className="inline-block font-body font-semibold text-lg border-2 border-warm-white text-warm-white px-8 py-4 rounded-full hover:bg-warm-white hover:text-navy transition-colors"
            >
              Our Mission
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-warm-white/40">
          <span className="font-body text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-warm-white/30" />
        </div>
      </section>

      {/* Impact Stats */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat) => (
              <StatsCounter key={stat.label} value={stat.value} label={stat.label} description={stat.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Our Purpose</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
            Nurturing Young Men in Christ for Lives of Purpose, Accountability, and Hope
          </h2>
          <p className="font-body text-lg text-slate leading-relaxed mb-8">
            We are a faith-based General Residential Operation (GRO) dedicated to empowering young men ages 10–17 who lack stable homes or parental support. Through evidence-based care, Christian principles, and genuine community, we guide young men toward healing and lasting independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/our-mission" className="inline-block font-body font-semibold text-navy border-2 border-navy px-7 py-3 rounded-full hover:bg-navy hover:text-warm-white transition-colors">
              Read Our Mission
            </Link>
            <Link href="/what-we-do" className="inline-block font-body font-semibold text-gold border-2 border-gold px-7 py-3 rounded-full hover:bg-gold hover:text-navy transition-colors">
              What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Our Programs</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">Building Futures, Strengthening Faith</h2>
            <p className="font-body text-lg text-slate max-w-2xl mx-auto">
              Every program we offer is rooted in trauma-informed care and Christ-centered values — designed to meet each young man where he is.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((p) => (
              <ProgramCard key={p.href} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Our Home</p>
            <h2 className="font-display text-4xl font-bold text-navy mb-5">
              A Place of Comfort, Stability, and Belonging
            </h2>
            <p className="font-body text-slate leading-relaxed mb-5">
              Step inside the heart of The Brotherhood Academy, where our young men find comfort, stability, and a true sense of belonging. Each space is more than a building — it's a nurturing sanctuary where lives are positively shaped and bright futures are crafted.
            </p>
            <p className="font-body text-slate leading-relaxed mb-8">
              Located in Salado, TX on a secure, gated property, our cottage-style home is designed to feel like a family residence rather than a traditional group facility.
            </p>
            <Link href="/our-home" className="inline-block font-body font-semibold text-lg bg-navy text-warm-white px-7 py-3 rounded-full hover:bg-navy-light transition-colors">
              See Our Home
            </Link>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/facility/facility-01.jpg"
              alt="Brotherhood Academy facility in Salado, TX"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-gold mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl italic text-warm-white mb-6 leading-relaxed">
            Our commitment doesn't end at graduation. We are actively expanding our transitional programs for young men ages 18–24 — because lasting change takes time, relationship, and community.
          </blockquote>
          <p className="font-body text-gold text-sm tracking-wide">The Brotherhood Academy</p>
        </div>
      </section>

      <CTASection
        heading="Support a Young Man Today"
        subtext="Your generosity funds housing, meals, education, mentorship, and the Christ-centered care that changes generations."
        primaryHref="/ways-to-give"
        primaryLabel="Ways to Give"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
