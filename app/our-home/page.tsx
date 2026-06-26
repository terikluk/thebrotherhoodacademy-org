import PageHero from "@/components/PageHero";
import GalleryGrid from "@/components/GalleryGrid";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Our Home",
  description:
    "Step inside The Brotherhood Academy's home in Salado, TX — a safe, structured, nurturing environment where young men find comfort, stability, and belonging.",
};

const facilityPhotos = [
  { src: "/images/facility/facility-01.jpg", alt: "Brotherhood Academy facility exterior" },
  { src: "/images/facility/facility-02.jpg", alt: "Brotherhood Academy living spaces" },
  { src: "/images/facility/facility-03.jpg", alt: "Brotherhood Academy community area" },
  { src: "/images/facility/facility-04.jpg", alt: "Brotherhood Academy grounds" },
  { src: "/images/facility/facility-05.jpg", alt: "Brotherhood Academy educational spaces" },
  { src: "/images/facility/facility-06.jpg", alt: "Brotherhood Academy residential areas" },
  { src: "/images/hero.jpg", alt: "Young men at The Brotherhood Academy" },
];

export default function OurHomePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-02.jpg"
        eyebrow="Our Home"
        heading="Welcome Home"
        subheading="A place of comfort, stability, and belonging — where lives are positively shaped and bright futures are crafted."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Our Facility</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">
            A Sanctuary of Love and Growth
          </h2>
          <div className="space-y-5 font-body text-slate leading-relaxed text-lg">
            <p>
              Step inside the heart of The Brotherhood Academy, where our young men find comfort, stability, and a true sense of belonging. Our home in Salado, Texas is more than a building — it's a nurturing sanctuary where lives are positively shaped and bright futures are crafted.
            </p>
            <p>
              Located at 394 Esperanza Way on a secure, gated property, our cottage-style residence is intentionally designed to feel like a family home rather than a traditional group facility. Residents share meals together, attend church on Sundays, and enjoy enrichment activities in an environment built on trust and structure.
            </p>
            <p>
              Every space in our home reflects our commitment to creating an environment where healing can happen — warm, welcoming, and full of hope.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="pb-16 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Secure, Gated Property", desc: "A safe environment where young men can focus on healing." },
              { label: "Hot Meals & Healthy Snacks", desc: "Unlimited access to nutritious food prepared with care." },
              { label: "Sunday Church Services", desc: "Faith development integrated into weekly life." },
              { label: "Salado, TX Location", desc: "A peaceful small-town setting that supports stability." },
            ].map(({ label, desc }) => (
              <div key={label} className="bg-warm-white rounded-xl p-6 border border-navy/8">
                <div className="w-8 h-8 rounded-full bg-gold/15 flex items-center justify-center mb-3">
                  <div className="w-2 h-2 rounded-full bg-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{label}</h3>
                <p className="font-body text-sm text-slate">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">Gallery</p>
            <h2 className="font-display text-4xl font-bold text-navy">See Where They Call Home</h2>
          </div>
          <GalleryGrid photos={facilityPhotos} />
        </div>
      </section>

      <CTASection
        heading="Want to Learn More?"
        subtext="Onsite visits are by appointment only. Reach out to schedule a time to see the Academy in person."
        primaryHref="/contact"
        primaryLabel="Schedule a Visit"
        secondaryHref="/refer-a-child"
        secondaryLabel="Refer a Child"
      />
    </>
  );
}
