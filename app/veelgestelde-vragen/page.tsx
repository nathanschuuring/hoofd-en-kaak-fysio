import type { Metadata } from "next";
import { faqAlgemeen, site } from "@/content/site";
import { CtaBand, Eyebrow, FaqItem } from "@/components/ui";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over vergoeding, tarieven, verwijzing, de eerste afspraak, behandeling aan huis en het annuleren van afspraken.",
  alternates: { canonical: "/veelgestelde-vragen" },
};

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqAlgemeen.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <Eyebrow>Veelgestelde vragen</Eyebrow>
          <h1 className="display mt-3 max-w-3xl text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
            Praktische informatie
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Antwoorden op de meest gestelde vragen over vergoeding, afspraken en de
            gang van zaken rondom een behandeling. Staat uw vraag er niet tussen?
            Neem gerust contact op via {site.phone}.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-3xl px-5 py-14 lg:px-8" aria-label="Veelgestelde vragen">
        {faqAlgemeen.map((f) => (
          <FaqItem key={f.q} faq={f} />
        ))}
        <p className="mt-8 text-sm leading-relaxed text-ink-soft">
          Meer weten over de chronische lijst van aandoeningen? Bekijk de volledige
          lijst op{" "}
          <a
            href="https://zorgvergoeding.com/page/86/chronische-lijst-van-aandoeningen"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-bark underline underline-offset-2 hover:text-bark-dark"
          >
            zorgvergoeding.com
          </a>{" "}
          of overleg met uw zorgverzekeraar.
        </p>
      </section>

      <CtaBand />
    </>
  );
}
