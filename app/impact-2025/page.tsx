import PageHero from "@/components/PageHero";
import StatsCounter from "@/components/StatsCounter";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Impact 2025",
  description:
    "See the measurable impact of The Brotherhood Academy — from grade-level pass rates to faith commitments. Real change, real hope, real results.",
};

const stats = [
  { value: "100%", label: "Grade Level Pass Rate", description: "of our youth passed their grade levels" },
  { value: "74%", label: "Medication Stability", description: "showed improved or stabilized outcomes in medication management" },
  { value: "70%", label: "Faith Commitments", description: "of young men accepted Christ during their time with us" },
  { value: "50%+", label: "Stable Placements", description: "of placements remain stable and thriving" },
  { value: "11%", label: "DFPS Permanency", description: "of DFPS youth achieved permanency through reunification or adoption" },
];

export default function ImpactPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-05.jpg"
        eyebrow="Impact 2025"
        heading="Real Change. Real Hope. Real Results."
        subheading="Our impact goes beyond numbers — it's stability restored, relationships rebuilt, and young men taking meaningful steps toward healing and independence."
        height="lg"
      />

      {/* Stats */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">By the Numbers</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">Measuring What Matters</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {stats.map((s) => (
              <div key={s.label} className="bg-navy-light/40 rounded-2xl p-8 border border-gold/20 text-center">
                <StatsCounter value={s.value} label={s.label} description={s.description} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Narrative */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Beyond the Metrics</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            A Holistic Approach to Growth
          </h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              At The Brotherhood Academy, we believe that true impact cannot be fully captured in a spreadsheet. Yes, 100% of our youth passed their grade levels. Yes, 70% made decisions for Christ. But behind every statistic is a young man who arrived uncertain and left with hope.
            </p>
            <p>
              We measure impact across four domains: spiritual growth, academic achievement, emotional wellbeing, and life skills development. Each young man's journey is unique, and we celebrate every milestone — large and small.
            </p>
            <p>
              Our trauma-informed care model, grounded in TBRI® and supported by licensed clinical professionals, ensures that the growth we see is sustainable. We're not just changing outcomes — we're changing trajectories.
            </p>
          </div>
        </div>
      </section>

      {/* Growth Areas */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { area: "Spiritual", icon: "✝", desc: "Faith formation through daily devotion, church attendance, and mentorship." },
              { area: "Academic", icon: "📚", desc: "Grade-level mastery with individualized support through Salado ISD and UT Charter." },
              { area: "Emotional", icon: "🧠", desc: "Therapeutic programming addressing regulation, coping, and healthy relationships." },
              { area: "Life Skills", icon: "🛠", desc: "Vocational training, financial literacy, and job readiness for independent living." },
            ].map(({ area, icon, desc }) => (
              <div key={area} className="bg-warm-white rounded-2xl p-8 border border-navy/8 text-center">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-display text-xl font-semibold text-navy mb-3">{area}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Be Part of the Impact"
        subtext="Every donation, referral, and prayer contributes to young men stepping into their God-given potential."
        primaryHref="/ways-to-give"
        primaryLabel="Support the Mission"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
