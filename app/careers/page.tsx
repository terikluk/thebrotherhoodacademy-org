import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Career Opportunities",
  description:
    "Join the team at The Brotherhood Academy in Salado, TX. We're looking for passionate individuals committed to transforming the lives of young men through faith-based, trauma-informed care.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-03.jpg"
        eyebrow="Careers"
        heading="Join the Mission"
        subheading="If you believe every young man deserves a chance, we want you on our team."
        height="md"
      />

      {/* Why Work Here */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Why the Academy</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Work That Matters</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              At The Brotherhood Academy, you won't just have a job — you'll have a calling. Every staff member plays a direct role in shaping the lives of young men who need caring, consistent adults they can trust.
            </p>
            <p>
              We are a Christ-centered organization committed to TBRI®-informed care, professional development, and a supportive team culture. If you're passionate about making a difference in the lives of at-risk youth, we'd love to connect.
            </p>
          </div>
        </div>
      </section>

      {/* What We Look For */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy">What We Look For</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { quality: "Faith-Driven", desc: "We are a Christian organization and look for team members whose values align with our mission." },
              { quality: "Trauma-Informed", desc: "Experience with or willingness to be trained in TBRI® and trauma-sensitive approaches." },
              { quality: "Relationship-Focused", desc: "A genuine commitment to building trust and long-term relationships with young men." },
              { quality: "Dependable", desc: "Consistency and reliability are foundational — our residents thrive on structure and predictable adults." },
            ].map(({ quality, desc }) => (
              <div key={quality} className="bg-warm-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display text-lg font-semibold text-navy mb-3">{quality}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions / Contact */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Open Positions</p>
          <h2 className="font-display text-4xl font-bold text-warm-white mb-6">Current Opportunities</h2>
          <p className="font-body text-warm-white/75 leading-relaxed mb-8">
            We are always looking for qualified individuals to join our residential staff, clinical team, and administrative support. Reach out even if no specific posting is listed — the right person is always welcome here.
          </p>
          <a
            href="mailto:info@thebrotherhoodacademy.org?subject=Career Opportunity"
            className="inline-block font-body font-semibold bg-gold text-navy px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
          >
            Send Your Resume
          </a>
        </div>
      </section>

      <CTASection
        heading="Questions About Working Here?"
        subtext="We'd love to tell you more about our culture, benefits, and what life at the Academy looks like."
        primaryHref="/contact"
        primaryLabel="Contact Us"
        secondaryHref="/our-mission"
        secondaryLabel="Our Mission"
      />
    </>
  );
}
