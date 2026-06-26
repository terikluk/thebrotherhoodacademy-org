import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Thrive (ASD Group)",
  description:
    "Thrive on the Spectrum — ASD Group Therapy at The Brotherhood Academy. Supporting social growth through connection and confidence in a structured, licensed setting.",
};

export default function ThriveAsdPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-03.jpg"
        eyebrow="Thrive (ASD Group)"
        heading="Supporting Social Growth Through Connection and Confidence"
        subheading="A warm, structured, supportive environment where autistic individuals can practice social interactions, build confidence, and feel genuinely accepted."
        height="lg"
      />

      {/* Overview */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Program Overview</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Thrive on the Spectrum</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              Thrive is an ASD Group Therapy program led by Licensed Social Workers, designed for individuals with Autism Spectrum Disorder who benefit from structured routines and supported social practice.
            </p>
            <p>
              Through role-playing, social stories, cooperative games, and peer interaction, participants practice real-world communication skills in a safe and supportive environment — building the confidence to use those skills beyond our walls.
            </p>
          </div>
        </div>
      </section>

      {/* Who & What */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Who This Program Helps</h3>
            <ul className="space-y-3">
              {[
                "Individuals with an Autism Spectrum Disorder diagnosis",
                "Those who benefit from structured routines and predictable group settings",
                "Youth needing support with conversation and peer interaction",
                "Participants seeking a positive, consistent social group experience",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-slate">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">What Participants Learn</h3>
            <ul className="space-y-3">
              {[
                "Social and communication competencies",
                "Confidence in real-world interactions",
                "How to recognize and respond to social cues",
                "Emotional self-awareness and self-regulation",
                "Collaborative play and peer relationship skills",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-slate">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* How Sessions Work */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Session Structure</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">How Sessions Work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Small Groups", desc: "Intimate group sizes ensure every participant receives personalized attention and support." },
              { label: "Licensed Facilitators", desc: "Sessions are led by Licensed Social Workers with expertise in ASD and social-skill development." },
              { label: "Consistent Structure", desc: "Predictable routines help participants feel safe and focus on skill practice." },
              { label: "Positive Reinforcement", desc: "Evidence-based interactive techniques reward growth and encourage continued engagement." },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-navy-light/40 rounded-2xl p-6 border border-gold/20 text-center">
                <h3 className="font-display text-lg font-semibold text-gold mb-3">{label}</h3>
                <p className="font-body text-sm text-warm-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading="Interested in Enrolling?"
        subtext="Contact us to learn about current availability and how to schedule an enrollment consultation."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/our-process"
        secondaryLabel="View Admissions Process"
      />
    </>
  );
}
