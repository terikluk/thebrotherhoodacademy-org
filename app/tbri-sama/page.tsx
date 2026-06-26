import Image from "next/image";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "TBRI® & SAMA®",
  description:
    "Learn how The Brotherhood Academy uses Trust-Based Relational Intervention (TBRI®) and SAMA® crisis prevention to provide trauma-informed care for young men.",
};

export default function TbriSamaPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-04.jpg"
        eyebrow="Our Approach"
        heading="Trauma-Informed Care Rooted in Safety and Connection"
        subheading="TBRI® and SAMA® are woven into every aspect of daily life at The Brotherhood Academy — from meals to mentorship to crisis moments."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Evidence-Based Care</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Supporting the Whole Child</h2>
          <p className="font-body text-lg text-slate leading-relaxed">
            Both TBRI® and SAMA® are integrated into our daily routines, therapeutic interventions, and educational programming. Together they form the clinical backbone of our holistic approach to care — addressing the root causes of challenging behavior rather than just its symptoms.
          </p>
        </div>
      </section>

      {/* TBRI & SAMA Cards */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {/* TBRI */}
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-4">TBRI® — Trust-Based Relational Intervention</h3>
            <p className="font-body text-slate leading-relaxed mb-4">
              TBRI® is a research-based, trauma-informed intervention model developed at the TCU Institute of Child Development. It addresses the complex needs of children who have experienced adversity, trauma, and attachment disruptions.
            </p>
            <p className="font-body text-slate leading-relaxed mb-4">
              At The Brotherhood Academy, we use TBRI® to build trust, create a sense of security, and promote healing. Our staff are trained to respond to each young man's underlying needs — recognizing that behavior is communication.
            </p>
            <div className="mt-6 space-y-2">
              {["Empowering Principles", "Connecting Principles", "Correcting Principles"].map((p) => (
                <div key={p} className="flex items-center gap-2 font-body text-sm text-navy">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>

          {/* SAMA */}
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="font-display text-2xl font-bold text-navy mb-4">SAMA® — Satori Alternatives to Managing Aggression</h3>
            <p className="font-body text-slate leading-relaxed mb-4">
              SAMA® is a crisis intervention and prevention program designed to ensure safety for all individuals during moments of crisis. Our staff are trained to de-escalate potentially volatile situations while maintaining the dignity and wellbeing of every person involved.
            </p>
            <p className="font-body text-slate leading-relaxed mb-4">
              SAMA® gives our team the tools to respond with calm, care, and competence — prioritizing relationship even in the most difficult moments.
            </p>
            <div className="mt-6 space-y-2">
              {["De-escalation Techniques", "Safety Planning", "Crisis Prevention"].map((p) => (
                <div key={p} className="flex items-center gap-2 font-body text-sm text-navy">
                  <span className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                  {p}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Daily Integration</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">Woven Into Everything We Do</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { area: "Daily Routines", desc: "TBRI® principles guide how we structure meals, chores, transitions, and free time — creating predictability and safety." },
              { area: "Therapeutic Programming", desc: "Our therapeutic interventions draw on TBRI® to address attachment, sensory needs, and behavioral patterns with compassion." },
              { area: "Educational Settings", desc: "Both TBRI® and SAMA® inform how we support young men in academic environments — responding to stress with empathy, not punishment." },
            ].map(({ area, desc }) => (
              <div key={area} className="bg-navy-light/40 rounded-2xl p-8 border border-gold/20">
                <h3 className="font-display text-xl font-semibold text-gold mb-3">{area}</h3>
                <p className="font-body text-sm text-warm-white/75 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Questions About Our Approach?"
        subtext="Our team is happy to discuss how TBRI® and SAMA® shape the care we provide."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
