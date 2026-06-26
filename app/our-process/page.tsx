import PageHero from "@/components/PageHero";
import ProcessStep from "@/components/ProcessStep";
import CTASection from "@/components/CTASection";

export const metadata = {
  title: "Admissions Process",
  description:
    "Learn about The Brotherhood Academy's clear and compassionate 10-step admissions process for young men ages 10–17.",
};

const steps = [
  {
    title: "Initial Screening",
    description:
      "Our team collects basic candidate information — age, gender, and grade level — and may request specific forms to begin the evaluation process.",
  },
  {
    title: "Pre-Admission Questionnaire",
    description:
      "Candidates complete a questionnaire that includes a suicide risk assessment to help us evaluate compatibility with our current residents and programming.",
  },
  {
    title: "Supervisor Review",
    description:
      "Our leadership team carefully evaluates whether we can provide the necessary level of care and structure for each prospective resident.",
  },
  {
    title: "Family Communication",
    description:
      "We maintain consistent contact with the family or caseworker throughout the process, sharing our resident handbook and answering questions.",
  },
  {
    title: "In-Person Interviews",
    description:
      "We conduct separate interviews with the parent or conservator and the child, covering family history, clinical considerations, and behavioral background.",
  },
  {
    title: "Documentation & Timeline",
    description:
      "Required documents include birth certificates, medical records, and signed consent forms. Our goal is to complete documentation within two weeks.",
  },
  {
    title: "Reunification Agreement",
    description:
      "The family receives a full explanation of our reunification terms and what continued involvement looks like during the placement period.",
  },
  {
    title: "Review & Decision",
    description:
      "Our admissions team evaluates all gathered information and notifies the family of the acceptance decision with care and transparency.",
  },
  {
    title: "Final Documentation",
    description:
      "All relevant information is recorded in the child's file and entered into our Extended Reach case management software.",
  },
  {
    title: "External Information Request",
    description:
      "We request records and materials from current or recent placements to ensure continuity of care and a smooth transition.",
  },
];

export default function OurProcessPage() {
  return (
    <>
      <PageHero
        imageSrc="/images/facility/facility-06.jpg"
        eyebrow="Admissions"
        heading="A Clear and Compassionate Process"
        subheading="We walk every family through our admissions process with transparency, care, and respect — because every young man deserves the right start."
        height="lg"
      />

      {/* Intro */}
      <section className="py-20 px-6 bg-offwhite">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">How It Works</p>
          <h2 className="font-display text-4xl font-bold text-navy mb-6">Our 10-Step Admissions Process</h2>
          <p className="font-body text-lg text-slate leading-relaxed mb-12">
            From initial contact to move-in day, we are with you every step of the way. Our process is designed to ensure the best possible match between each young man's needs and our ability to provide the care he deserves.
          </p>
          <ol className="relative">
            {steps.map((step, i) => (
              <ProcessStep
                key={step.title}
                stepNumber={i + 1}
                title={step.title}
                description={step.description}
                isLast={i === steps.length - 1}
              />
            ))}
          </ol>
        </div>
      </section>

      {/* Exclusion Criteria */}
      <section className="py-20 px-6 bg-warm-white">
        <div className="max-w-3xl mx-auto">
          <p className="font-body text-gold text-sm tracking-widest uppercase mb-4">Admission Criteria</p>
          <h2 className="font-display text-3xl font-bold text-navy mb-4">What We Are Not Able to Serve</h2>
          <p className="font-body text-slate leading-relaxed mb-6">
            We are committed to providing the safest possible environment for all residents. At this time, we are unable to admit youth who have demonstrated persistent patterns (within the past 12 months) of:
          </p>
          <ul className="space-y-3">
            {[
              "Persistent violence or physical aggression toward others",
              "Sexual aggression or reactive sexual behavior",
              "Animal cruelty",
              "Habitual runaway behavior",
              "Fire setting or property destruction by fire",
              "Active suicidal ideation or self-harm requiring clinical-level intervention",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 font-body text-sm text-slate">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/15 text-gold flex items-center justify-center text-xs mt-0.5">✕</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="font-body text-sm text-slate/60 mt-6">
            These criteria exist to protect both prospective residents and our current community. If you have questions about eligibility, please contact us — we are happy to discuss whether the Academy is the right fit.
          </p>
        </div>
      </section>

      <CTASection
        heading="Ready to Begin the Process?"
        subtext="Our admissions team is compassionate, responsive, and ready to guide you through every step."
        primaryHref="/refer-a-child"
        primaryLabel="Refer a Child"
        secondaryHref="/contact"
        secondaryLabel="Ask a Question"
      />
    </>
  );
}
