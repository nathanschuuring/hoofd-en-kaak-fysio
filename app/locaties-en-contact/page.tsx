import type { Metadata } from "next";
import { locaties, site } from "@/content/site";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Locaties & contact",
  description:
    "Behandellocaties in Nunspeet, Almelo, Hardenberg en Hasselt. Neem contact op via 06 44 07 25 88 of fysiotherapeutvisscher@outlook.com voor een afspraak.",
  alternates: { canonical: "/locaties-en-contact" },
};

export default function LocatiesContactPage() {
  return (
    <>
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <Eyebrow>Locaties &amp; contact</Eyebrow>
          <h1 className="display mt-3 max-w-3xl text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
            Waar kunt u terecht?
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Ik werk op vier praktijklocaties in de regio. Afspraken kunnen
            telefonisch of via de websites van de praktijklocaties worden gemaakt.
            Kunt u niet naar de praktijk komen? Behandeling aan huis is in overleg
            mogelijk.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8" aria-label="Praktijklocaties">
        <div className="grid gap-5 sm:grid-cols-2">
          {locaties.map((l) => (
            <div
              key={`${l.naam}-${l.plaats}`}
              className="rounded-2xl border border-paper-warm p-7"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand">
                {l.dagen}
              </p>
              <h2 className="display mt-2 text-xl font-semibold text-bark-dark">
                {l.plaats}
              </h2>
              <p className="mt-1 text-ink-soft">
                {l.naam}
                {l.detail ? ` (${l.detail})` : ""}
              </p>
            </div>
          ))}
        </div>

        <div
          id="afspraak"
          className="mt-12 scroll-mt-28 rounded-2xl bg-bark p-8 text-white lg:p-12"
        >
          <div className="max-w-2xl">
            <h2 className="display text-3xl font-semibold">Afspraak maken</h2>
            <p className="mt-4 leading-relaxed text-sand-light">
              Een afspraak maken kan telefonisch of via de website van de
              praktijklocatie waar u behandeld wilt worden. Een verwijzing van een
              arts is niet nodig; fysiotherapie is direct toegankelijk. Twijfelt u
              of uw klachten bij mijn specialisaties passen? Bel of mail gerust
              &mdash; ik denk graag met u mee.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="rounded-full bg-white px-6 py-3 font-semibold text-bark transition-colors hover:bg-paper"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-sand-light px-6 py-3 font-semibold text-white transition-colors hover:bg-bark-dark"
              >
                {site.email}
              </a>
            </div>
            <p className="mt-6 text-sm text-sand-light">
              Verzetten of annuleren? Doe dit minimaal 24 uur van tevoren. Niet of
              te laat afgezegde afspraken worden in rekening gebracht.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
