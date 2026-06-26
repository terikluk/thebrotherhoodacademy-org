import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Emotional & Behavioral Support",
  description:
    "The Brotherhood Academy's Emotional & Behavioral Support Group builds emotional regulation, coping skills, and healthy connection through licensed Social Worker-led group therapy.",
};

export default function EmotionalBehavioralPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-06.jpg"
        eyebrow="Emotional & Behavioral Support"
        heading="Building Regulation, Coping Skills, and Healthy Connection"
        subheading="A supportive group environment where young people develop the emotional tools they need to navigate life's challenges with resilience and confidence."
        height="lg"
      />

      {/* Overview */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Program Overview</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Emotional & Behavioral Support Group</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              Our Emotional & Behavioral Support Group offers a safe, therapeutic environment for individuals managing emotional and behavioral challenges. Sessions are led by Licensed Social Workers and emphasize coping strategies, emotional regulation skills, communication, and healthy problem-solving.
            </p>
            <p>
              Through guided discussions, role-play, and structured group activities, participants develop resilience and learn adaptive responses to the stress and conflict they encounter in daily life.
            </p>
          </div>
        </div>
      </section>

      {/* Who It Helps / Skills Grid */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Who This Program Serves</h3>
            <ul className="space-y-3">
              {[
                "Individuals with emotional or behavioral difficulties",
                "Youth struggling with emotional control or outbursts",
                "Those experiencing ongoing stress or peer conflict",
                "Participants working to improve communication and relationships",
                "Young people seeking a safe therapeutic space to process emotions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 font-body text-sm text-slate">
                  <span className="w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-warm-white rounded-2xl p-10 border border-navy/8">
            <h3 className="font-display text-2xl font-bold text-navy mb-6">Skills We Build</h3>
            <ul className="space-y-3">
              {[
                "Emotional awareness and self-regulation",
                "Healthy coping strategies for stress and triggers",
                "Relationship and communication development",
                "Constructive problem-solving techniques",
                "Self-awareness and social confidence",
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

      {/* Program Structure */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Structure</p>
            <h2 className="font-display text-4xl font-bold text-warm-white">How Sessions Are Run</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Licensed Social Workers", desc: "Every session is facilitated by licensed clinicians with expertise in emotional and behavioral support." },
              { label: "Therapeutic Discussions", desc: "Open, guided conversation provides a space to process experiences and build insight." },
              { label: "Role-Play Exercises", desc: "Practical skill practice in real-world scenarios helps participants build confidence before they face challenges." },
              { label: "Peer Support", desc: "Small-group dynamics foster connection and the realization that participants are not alone in their struggles." },
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
        heading="Interested in This Program?"
        subtext="Contact us to learn about enrollment, scheduling, and how we can support the young person in your life."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/our-process"
        secondaryLabel="View Admissions"
      />
    </>
  );
}
