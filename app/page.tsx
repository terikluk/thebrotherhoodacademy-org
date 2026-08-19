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

const stats = [
  { value: "100%", label: "Grade-Level Progress", description: "All of our youth passed their grade levels while receiving academic support within the structured environment of Brotherhood Academy." },
  { value: "74%", label: "Medication Outcomes", description: "Showed improved or stabilized outcomes in medication management, with many no longer requiring psychotropic medications." },
  { value: "70%", label: "Professions of Faith", description: "Young men made professions of faith within the Christ-centered environment and community of Brotherhood Academy." },
  { value: "50%+", label: "Stable Placements", description: "More than half of placements remain stable and thriving, demonstrating continued stability among the young men served by Brotherhood Academy." },
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
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/50 to-navy/65" />
        <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-24 md:translate-y-[5vh]">
          <p className="font-body text-gold text-sm tracking-[0.2em] uppercase mb-6">
            Salado, Texas · Est. 2023
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-[4.15rem] font-bold text-warm-white mb-6 leading-tight">
            Transforming Lives Through<br />
            <span className="text-gold">Faith, Community & Care</span>
          </h1>
          <p className="font-body text-xl md:text-2xl text-warm-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            A Christ-centered residential community in Salado, Texas, providing structured, trauma-informed care for young men <span className="whitespace-nowrap">ages 10–17.</span>
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
      </section>

      {/* Impact Stats */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-x-8">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                label={stat.label}
                description={stat.description}
                descriptionMaxWidth="max-w-64"
              />
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
            We are a faith-based residential community dedicated to empowering young men ages 10–17 who lack stable homes or parental support. Through evidence-based care, Christian principles, and genuine community, we guide young men toward healing, growth, and greater independence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/our-mission" className="inline-block font-body font-semibold text-navy border-2 border-navy px-7 py-3 rounded-full hover:bg-navy hover:text-warm-white transition-colors">
              Read Our Mission
            </Link>
            <Link href="/what-we-do" className="inline-block font-body font-semibold text-gold border-2 border-gold px-7 py-3 rounded-full hover:bg-gold hover:text-navy transition-colors">
              Programs
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

      {/* Feature Section */}
      <section className="relative bg-navy overflow-hidden">
        {/* Desktop / large tablet: image emerges from the right, fading into the navy background */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%] xl:w-[58%]">
          <Image
            src="/images/hero.jpg"
            alt="The Brotherhood Academy home in Salado, TX"
            fill
            className="object-cover object-[62%_40%] [mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.06)_18%,rgba(0,0,0,0.22)_38%,rgba(0,0,0,0.5)_58%,rgba(0,0,0,0.82)_78%,black_96%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,rgba(0,0,0,0.06)_18%,rgba(0,0,0,0.22)_38%,rgba(0,0,0,0.5)_58%,rgba(0,0,0,0.82)_78%,black_96%)]"
            sizes="60vw"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 lg:min-h-[620px] lg:flex lg:items-center">
          <div className="max-w-lg">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Our Home</p>
            <h2 className="font-display text-4xl font-bold text-warm-white mb-5">
              A Place of Comfort, Stability, and Belonging
            </h2>
            <p className="font-body text-warm-white/75 leading-relaxed mb-5">
              Step inside the heart of The Brotherhood Academy, where our young men find comfort, stability, and a true sense of belonging. Each space is more than a building — it's a nurturing sanctuary where lives are positively shaped and bright futures are crafted.
            </p>
            <p className="font-body text-warm-white/75 leading-relaxed mb-8">
              Located in Salado, TX on a secure, gated property, our cottage-style home is designed to feel like a family residence rather than a traditional group facility.
            </p>
            <Link href="/our-home" className="inline-block font-body font-semibold text-lg bg-gold text-navy px-7 py-3 rounded-full hover:bg-gold-light transition-colors">
              See Our Home
            </Link>
          </div>
        </div>

        {/* Mobile / tablet: image settles below the text, softly fading in from the top */}
        <div className="lg:hidden relative h-72 sm:h-96">
          <Image
            src="/images/hero.jpg"
            alt="The Brotherhood Academy home in Salado, TX"
            fill
            className="object-cover object-[58%_38%] [mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.06)_14%,rgba(0,0,0,0.22)_30%,rgba(0,0,0,0.5)_48%,rgba(0,0,0,0.82)_66%,black_85%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.06)_14%,rgba(0,0,0,0.22)_30%,rgba(0,0,0,0.5)_48%,rgba(0,0,0,0.82)_66%,black_85%)]"
            sizes="100vw"
          />
        </div>
      </section>

      {/* Quote — photo background with dark overlay */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="/images/hill_country.png"
          alt=""
          fill
          className="object-cover object-[70%_60%]"
          sizes="100vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-navy/65" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-gold mx-auto mb-6 opacity-70" fill="currentColor" viewBox="0 0 32 32">
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
        variant="offwhite"
      />
    </>
  );
}
