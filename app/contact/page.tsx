import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Brotherhood Academy in Salado, TX. Contact us about admissions, referrals, donations, or any questions about our programs.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-06.jpg"
        eyebrow="Contact"
        heading="Call or Reach Out"
        subheading="We'd love to hear from you. Our team responds within one business day."
        height="md"
      />

      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Our Information</p>
            <h2 className="font-display text-4xl font-bold text-navy mb-8">Let's Connect</h2>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">Address</h3>
                  <address className="font-body text-slate not-italic">
                    394 Esperanza Way<br />Salado, TX 76571
                  </address>
                  <p className="font-body text-xs text-slate/60 mt-1">Onsite visits by appointment only</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">Phone</h3>
                  <a href="tel:+12547270548" className="font-body text-slate hover:text-gold transition-colors">
                    (254) 727-0548
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">Email</h3>
                  <a href="mailto:info@thebrotherhoodacademy.org" className="font-body text-slate hover:text-gold transition-colors">
                    info@thebrotherhoodacademy.org
                  </a>
                  <br />
                  <a href="mailto:julietarver@thebrotherhoodacademy.org" className="font-body text-sm text-slate/70 hover:text-gold transition-colors">
                    julietarver@thebrotherhoodacademy.org
                  </a>
                  <p className="font-body text-xs text-slate/50 mt-0.5">(Admissions)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-navy flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy mb-1">Hours</h3>
                  <p className="font-body text-slate">Monday–Friday: 9AM–6PM</p>
                  <p className="font-body text-sm text-slate/70">Saturday & Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick notes */}
            <div className="mt-10 bg-warm-white rounded-2xl p-6 border border-gold/20">
              <h3 className="font-display text-lg font-semibold text-navy mb-3">Good to Know</h3>
              <ul className="space-y-2">
                {[
                  "For in-kind donations, mention it in your message and we'll share our current needs list.",
                  "For corporate partnerships, include your organization name and area of interest.",
                  "Referrals: contact our admissions team directly at julietarver@thebrotherhoodacademy.org.",
                ].map((note) => (
                  <li key={note} className="flex items-start gap-2 font-body text-sm text-slate">
                    <span className="text-gold mt-1 flex-shrink-0">→</span>
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Send a Message</p>
            <h2 className="font-display text-4xl font-bold text-navy mb-8">We'll Be in Touch</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
