import PageHero from "@/components/PageHero";
import StatsCounter from "@/components/StatsCounter";

export const metadata = {
  title: "Ways to Give",
  description:
    "Support The Brotherhood Academy through donations, in-kind gifts, corporate partnerships, and more. Every gift changes the trajectory of a young man's life.",
};

const givingMethods = [
  {
    title: "Donate Online",
    desc: "Secure online giving through our trusted Donorbox portal. Your gift directly funds housing, food, education, and mentorship.",
    action: "Give Now",
    href: "https://donorbox.org/brotherhood-academy-donations",
    external: true,
    featured: true,
  },
  {
    title: "Monthly Giving",
    desc: "Become a recurring partner. Monthly gifts provide predictable support that allows us to plan programs and staffing with confidence.",
    action: "Set Up Monthly Giving",
    href: "https://donorbox.org/brotherhood-academy-donations",
    external: true,
    featured: false,
  },
  {
    title: "In-Kind Donations",
    desc: "We accept clothing, hygiene items, school supplies, sports equipment, and household goods. Contact us for our current needs list.",
    action: "Contact About In-Kind",
    href: "/contact",
    external: false,
    featured: false,
  },
  {
    title: "Corporate Partnerships",
    desc: "We welcome businesses that share our commitment to community. Sponsorships, employee giving programs, and event partnerships available.",
    action: "Explore Partnerships",
    href: "/contact",
    external: false,
    featured: false,
  },
  {
    title: "Fundraise for Us",
    desc: "Host a personal fundraiser through your network — birthday campaigns, community events, or workplace drives. We'll support your effort.",
    action: "Contact Us to Start",
    href: "/contact",
    external: false,
    featured: false,
  },
  {
    title: "Legacy Giving",
    desc: "Including The Brotherhood Academy in your estate plan is a profound way to ensure your values outlast your lifetime.",
    action: "Learn About Legacy Giving",
    href: "/contact",
    external: false,
    featured: false,
  },
  {
    title: "Fundraising Events",
    desc: "Join us at community-driven fundraising events and become a sponsor. Events bring our community together around a shared mission.",
    action: "Stay Informed",
    href: "/contact",
    external: false,
    featured: false,
  },
];

const stats = [
  { value: "100%", label: "Grade Level Pass Rate", description: "Your gift supports academic success" },
  { value: "70%", label: "Faith Commitments", description: "Spiritual transformation happens here" },
  { value: "50%+", label: "Stable Placements", description: "Long-term outcomes you can trust" },
  { value: "11%", label: "DFPS Permanency", description: "Reunification and adoption success" },
];

export default function WaysToGivePage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-02.jpg"
        eyebrow="Ways to Give"
        heading="Your Support Changes Lives"
        subheading="Providing safety, mentorship, and hope — one young man at a time. Every gift matters."
        height="lg"
      />

      {/* Impact Strip */}
      <section className="bg-navy py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <StatsCounter key={s.label} value={s.value} label={s.label} description={s.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Giving Methods */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-3">How You Can Help</p>
            <h2 className="font-display text-4xl font-bold text-navy">How You Can Get Involved</h2>
          </div>

          {/* Featured Card */}
          {givingMethods.filter(g => g.featured).map(({ title, desc, action, href }) => (
            <div key={title} className="bg-navy rounded-2xl p-10 mb-8 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <p className="font-body text-gold text-sm tracking-widest uppercase mb-2">Primary</p>
                <h3 className="font-display text-3xl font-bold text-warm-white mb-4">{title}</h3>
                <p className="font-body text-warm-white/75 leading-relaxed">{desc}</p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-body font-semibold text-lg bg-gold text-navy px-8 py-4 rounded-full hover:bg-gold-light transition-colors"
                >
                  {action}
                </a>
              </div>
            </div>
          ))}

          {/* Other Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {givingMethods.filter(g => !g.featured).map(({ title, desc, action, href, external }) => (
              <div key={title} className="bg-warm-white rounded-2xl p-8 border border-navy/8 flex flex-col">
                <h3 className="font-display text-xl font-semibold text-navy mb-3">{title}</h3>
                <p className="font-body text-sm text-slate leading-relaxed flex-1 mb-6">{desc}</p>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-body text-sm font-semibold text-gold border-2 border-gold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition-colors text-center"
                  >
                    {action}
                  </a>
                ) : (
                  <a
                    href={href}
                    className="inline-block font-body text-sm font-semibold text-gold border-2 border-gold px-5 py-2 rounded-full hover:bg-gold hover:text-navy transition-colors text-center"
                  >
                    {action}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl font-bold text-navy mb-4">Let's Work Together</h2>
          <p className="font-body text-slate leading-relaxed mb-6">
            Have a creative way you'd like to support us? We'd love to hear from you. Reach out to our team to discuss partnership, events, or any other way you want to get involved.
          </p>
          <a href="/contact" className="inline-block font-body font-semibold bg-navy text-warm-white px-8 py-3.5 rounded-full hover:bg-navy-light transition-colors">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
