import type { Metadata } from "next";
import Link from "next/link";
import { klachten } from "@/content/site";
import { CtaBand, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Specialisaties",
  description:
    "Overzicht van klachten in het hoofd-halsgebied die ik behandel: kaakklachten (TMD), duizeligheid, hoofdpijn, aangezichtspijn, tinnitus, aangezichtsverlamming en meer.",
  alternates: { canonical: "/specialisaties" },
};

export default function SpecialisatiesPage() {
  const klachtenList = klachten.filter((k) => k.category === "klacht");
  const behandelvormen = klachten.filter((k) => k.category === "behandelvorm");

  return (
    <>
      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
          <Eyebrow>Specialisaties</Eyebrow>
          <h1 className="display mt-3 max-w-3xl text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
            Klachten in het hoofd-halsgebied
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Van veelvoorkomende kaak- en hoofdpijnklachten tot zeldzame en complexe
            aandoeningen: ik richt mij volledig op het hoofd-halsgebied. Klik op een
            klacht voor uitgebreide informatie over symptomen, oorzaken en
            behandeling.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8" aria-label="Overzicht specialisaties">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {klachtenList.map((k) => (
            <Link
              key={k.slug}
              href={`/${k.slug}`}
              className="group flex flex-col rounded-2xl border border-paper-warm bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sand hover:shadow-[0_12px_32px_-16px_rgba(124,77,39,0.35)]"
            >
              <h2 className="display text-lg font-semibold text-bark-dark">{k.name}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{k.card}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bark">
                Lees meer
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2 7h10m0 0L8 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <h2 className="display mt-14 text-2xl font-semibold text-bark-deep">
          Behandelvormen
        </h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {behandelvormen.map((k) => (
            <Link
              key={k.slug}
              href={`/${k.slug}`}
              className="group flex flex-col rounded-2xl border border-paper-warm bg-paper p-6 transition-all hover:-translate-y-0.5 hover:border-sand"
            >
              <h3 className="display text-lg font-semibold text-bark-dark">{k.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">{k.card}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bark">
                Lees meer
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2 7h10m0 0L8 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-14 max-w-3xl rounded-2xl bg-paper-warm p-8">
          <h2 className="display text-xl font-semibold text-bark-deep">
            Ook voor nek-, slik- en chronische klachten
          </h2>
          <p className="mt-3 leading-relaxed text-ink-soft">
            Daarnaast kunt u bij mij terecht met nekklachten, slikklachten,
            oorpijn of drukklachten aan het oor zonder aanwezige pathologie, en
            aanhoudende lichamelijke klachten (ALK). Twijfelt u of uw klacht hier
            past? Neem gerust contact op &mdash; dan kijken we samen of ik u kan
            helpen, of ik u kan doorverwijzen naar de juiste specialist.
          </p>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
