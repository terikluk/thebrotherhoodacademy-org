import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Residential Living",
  description:
    "The Brotherhood Academy's residential program provides safe, structured, trauma-informed housing for young men ages 10–17 in Salado, TX.",
};

export default function ResidentialLivingPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/hero.jpg"
        eyebrow="Residential Living"
        heading="A Safe, Structured, Supportive Home"
        subheading="Where young men heal, grow, and thrive — in a Christ-centered environment built on relationship and trust."
        height="lg"
      />

      {/* Overview */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Program Overview</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            More Than Housing — It's Home
          </h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              The Brotherhood Academy's Residential Living program provides a stable, structured home environment grounded in trauma-informed care and relationship-based practices. Located in Salado, TX, our cottage-style residence is designed to feel like a home — not a facility.
            </p>
            <p>
              We serve young men ages 10–17 who need safe housing, consistent structure, and the kind of adult presence that builds trust over time. Every resident receives an individualized service plan tailored to their unique needs, strengths, and goals.
            </p>
          </div>
        </div>
      </section>

      {/* What Residents Receive */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy">What Residents Receive</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Individualized Service Plans", desc: "Each resident's care is shaped around his specific background, clinical needs, and long-term goals." },
              { title: "Hot, Balanced Meals", desc: "Three hot meals daily, plus unlimited access to healthy snacks — because nourishment is foundational to healing." },
              { title: "Educational Support", desc: "Residents attend Salado ISD or the UT Charter School, with individualized academic support throughout." },
              { title: "Therapeutic Programming", desc: "Licensed professionals provide group and individual therapy grounded in TBRI® principles." },
              { title: "Enrichment & Activities", desc: "We encourage involvement in extracurricular activities, sports, arts, and community events." },
              { title: "Sunday Church Services", desc: "Faith development is central — residents attend church weekly as part of our structured community life." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-warm-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display text-lg font-semibold text-navy mb-3">{title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Family & Community */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Family Involvement</p>
          <h2 className="font-display text-4xl font-bold text-warm-white mb-6">Family Is Part of the Healing</h2>
          <p className="font-body text-lg text-warm-white/75 leading-relaxed">
            We believe healing happens in community. Family involvement is central to our program — families have access to TBRI® classes, consistent communication with our team, and clear reunification terms from day one. We don't just serve young men; we walk alongside their families.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ready to Begin?"
        subtext="Our admissions process is clear, compassionate, and designed to find the right fit for every young man."
        primaryHref="/our-process"
        primaryLabel="View Admissions Process"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
