import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Children We Serve",
  description:
    "The Brotherhood Academy serves remarkable young men ages 10–24 who lack stable homes or parental support. Learn who we serve and how we help.",
};

export default function ChildrenWeServePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-01.jpg"
        eyebrow="Children We Serve"
        heading="More Than Statistics. More Than Stories."
        subheading="Every young man we serve is a person of immense worth and potential — not a case number."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Who We Help</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Our Young Men</h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              The Brotherhood Academy serves remarkable young men, aged 10 to 24, who face some of life's most significant challenges. Many have experienced instability, trauma, and the absence of consistent parental or guardian support. They attend school, they dream, they struggle — and they deserve a lifeline.
            </p>
            <p>
              We serve young men who need more than a roof over their heads. They need mentors who will stay. They need structure they can trust. They need to know that someone believes in who they are becoming.
            </p>
            <p>
              These are not statistics or case files. They are brothers, sons, and young men with God-given potential waiting to be unlocked through relationship, faith, and the right environment.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve Grid */}
      <section className="pb-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Ages 10–17",
                desc: "Our primary residential program serves young men in their formative years who need safe, stable housing and trauma-informed care.",
              },
              {
                title: "Ages 18–24",
                desc: "Our transitional program extends support for older young men as they develop independence, life skills, and vocational readiness.",
              },
              {
                title: "Youth Without Stable Homes",
                desc: "Many residents have experienced foster care, family instability, or lack consistent parental support.",
              },
              {
                title: "Young Men with Trauma Histories",
                desc: "Our TBRI®-trained staff provides specialized trauma-informed care for residents with complex backgrounds.",
              },
              {
                title: "Youth with Special Needs",
                desc: "We serve young men with ASD, IDD, and emotional/behavioral challenges through dedicated programs.",
              },
              {
                title: "DFPS-Referred Youth",
                desc: "We work with the Texas Department of Family and Protective Services to serve youth in the state's care.",
              },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-warm-white rounded-2xl p-8 border border-navy/8">
                <h3 className="font-display text-xl font-semibold text-navy mb-3">{title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stories pull quote */}
      <section className="bg-navy py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <svg className="w-10 h-10 text-gold mx-auto mb-6 opacity-60" fill="currentColor" viewBox="0 0 32 32">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <blockquote className="font-display text-2xl md:text-3xl italic text-warm-white mb-6 leading-relaxed">
            Your support matters — not just as a donation, but as a declaration that these young men are worth investing in.
          </blockquote>
        </div>
      </section>

      <CTASection
        heading="Join Us in Making a Difference"
        subtext="Every young man who walks through our doors deserves a chance. You can help give it to them."
        primaryHref="/ways-to-give"
        primaryLabel="Support the Mission"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
