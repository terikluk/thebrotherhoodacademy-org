import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Refer a Child",
  description:
    "Refer a young man to The Brotherhood Academy. We accept referrals for boys ages 10–17 who need safe, structured, Christ-centered residential care in Salado, TX.",
};

export default function ReferAChildPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-01.jpg"
        eyebrow="Referrals"
        heading="Refer a Child"
        subheading="If you know a young man who needs a safe, structured home and Christ-centered care, we want to help. Here's how to get started."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">How to Refer</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Who We Accept Referrals For</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              The Brotherhood Academy accepts referrals for young men ages 10–17 who lack stable housing or consistent parental/guardian support. Referrals come from families, caseworkers, DFPS, schools, churches, and community organizations.
            </p>
            <p>
              Our admissions process is clear and compassionate. We work quickly to evaluate each referral and communicate our decision with transparency and care.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Refer */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-navy">Who Can Make a Referral</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { who: "Families & Guardians", desc: "Parents or guardians who are seeking placement for a young man in their care are welcome to reach out directly." },
              { who: "DFPS Caseworkers", desc: "We work closely with the Texas Department of Family and Protective Services on behalf of youth in state care." },
              { who: "Schools & Counselors", desc: "Educators and school counselors who identify at-risk students may refer directly to our admissions team." },
              { who: "Churches & Ministries", desc: "Faith communities that connect us with young men in need are a vital part of our referral network." },
              { who: "Courts & Probation", desc: "Court-ordered referrals and probation officers may contact our team to discuss placement options." },
              { who: "Community Organizations", desc: "Nonprofits, shelters, and social service agencies are all welcome to refer young men they serve." },
            ].map(({ who, desc }) => (
              <div key={who} className="bg-warm-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display text-lg font-semibold text-navy mb-3">{who}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 px-6 bg-navy">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Next Steps</p>
          <h2 className="font-display text-4xl font-bold text-warm-white mb-6">How to Get Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-10">
            {[
              { step: "1", label: "Contact Us", desc: "Call (254) 727-0548 or email julietarver@thebrotherhoodacademy.org to begin the referral." },
              { step: "2", label: "Initial Screening", desc: "Our team will gather basic information and assess whether we're the right fit for the young man's needs." },
              { step: "3", label: "Full Admissions Process", desc: "If there's a potential match, we move into our 10-step admissions process with care and transparency." },
            ].map(({ step, label, desc }) => (
              <div key={step} className="bg-navy-light/40 rounded-2xl p-6 border border-gold/20">
                <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center mb-4">
                  <span className="font-display text-sm font-bold text-navy">{step}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-gold mb-2">{label}</h3>
                <p className="font-body text-sm text-warm-white/70 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact info */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Contact Admissions</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-6">Ready to Make a Referral?</h2>
          <div className="space-y-3 font-body text-slate text-lg">
            <p><span className="font-semibold text-navy">Phone:</span> <a href="tel:+12547270548" className="text-gold hover:underline">(254) 727-0548</a></p>
            <p><span className="font-semibold text-navy">Email:</span> <a href="mailto:julietarver@thebrotherhoodacademy.org" className="text-gold hover:underline">julietarver@thebrotherhoodacademy.org</a></p>
            <p><span className="font-semibold text-navy">Address:</span> 394 Esperanza Way, Salado, TX 76571</p>
            <p className="text-sm text-slate/60">Mon–Fri: 9AM–6PM · Onsite visits by appointment only</p>
          </div>
          <div className="mt-8">
            <a href="/contact" className="inline-block font-body font-semibold bg-navy text-warm-white px-8 py-3.5 rounded-full hover:bg-navy-light transition-colors">
              Send a Message
            </a>
          </div>
        </div>
      </section>

      <CTASection
        heading="View Our Full Admissions Process"
        subtext="Learn about every step — from initial screening to move-in day."
        primaryHref="/our-process"
        primaryLabel="View Our Process"
        secondaryHref="/what-we-do"
        secondaryLabel="Our Programs"
      />
    </>
  );
}
