import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "IDD Support",
  description:
    "IDD Group Therapy at The Brotherhood Academy — specialized support for individuals with intellectual and developmental disabilities, focusing on life skills, communication, and emotional regulation.",
};

export default function IddSupportPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-05.jpg"
        eyebrow="IDD Support"
        heading="Specialized Support for Intellectual & Developmental Disabilities"
        subheading="Building adaptive life skills, communication, and emotional regulation in a compassionate group setting led by licensed professionals."
        height="lg"
      />

      {/* Overview */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Program Overview</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">IDD Group Therapy</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              Our IDD Group Therapy program provides specialized support for individuals with intellectual and developmental disabilities. Led by licensed clinical professionals, sessions focus on building the practical skills needed for daily life, meaningful communication, and healthy emotional expression.
            </p>
            <p>
              In a small, structured group setting, participants engage in evidence-based activities designed to strengthen independence and build confidence — at their own pace, with compassionate support throughout.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy">What We Focus On</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Adaptive Life Skills", desc: "Practical skills for everyday independence — personal care, routines, safety, and self-management." },
              { title: "Communication Development", desc: "Building verbal and non-verbal communication skills for expressing needs, preferences, and emotions." },
              { title: "Emotional Regulation", desc: "Strategies for identifying and managing emotions in healthy, adaptive ways." },
              { title: "Social Skills", desc: "Navigating peer relationships, turn-taking, conversation, and cooperative activities." },
              { title: "Self-Advocacy", desc: "Empowering participants to understand and communicate their own needs with confidence." },
              { title: "Problem-Solving", desc: "Guided practice in working through everyday challenges with support and encouragement." },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-warm-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display text-lg font-semibold text-navy mb-3">{title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Our Approach</p>
          <h2 className="font-display text-4xl font-bold text-warm-white mb-6">Compassion. Structure. Progress.</h2>
          <p className="font-body text-lg text-warm-white/75 leading-relaxed">
            Every participant in our IDD program is met with dignity and respect. We celebrate progress — no matter how small — because every step toward independence matters. Our licensed facilitators use evidence-based techniques in a small-group setting that provides both structure and warmth.
          </p>
        </div>
      </section>

      <CTASection
        heading="Learn More About This Program"
        subtext="We'd love to discuss whether this program is the right fit and how to get started."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/our-process"
        secondaryLabel="Admissions Process"
      />
    </>
  );
}
