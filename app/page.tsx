import Link from "next/link";
import Image from "next/image";
import { klachten, behandelmethoden, locaties, netwerken, site } from "@/content/site";
import { CtaBand, Eyebrow } from "@/components/ui";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-14 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:pb-24 lg:pt-20">
          <div>
            <Eyebrow>Orofaciale &amp; manuele fysiotherapie</Eyebrow>
            <h1 className="display mt-4 text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
              Specialistische fysiotherapie voor het hoofd-halsgebied
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
              Kaakklachten, duizeligheid, hoofdpijn, aangezichtspijn of tinnitus:
              complexe klachten vragen om specialistische zorg. Als gespecialiseerd
              orofaciaal en manueel therapeut help ik u met een analytische,
              persoonlijke en doelgerichte aanpak &mdash; en zorg ik dat u op de
              juiste plek terechtkomt, ook als dat bij een collega-specialist is.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/specialisaties"
                className="rounded-full bg-bark px-6 py-3 font-semibold text-white transition-colors hover:bg-bark-dark"
              >
                Bekijk de specialisaties
              </Link>
              <Link
                href="/locaties-en-contact#afspraak"
                className="rounded-full border border-bark px-6 py-3 font-semibold text-bark transition-colors hover:bg-paper-warm"
              >
                Afspraak maken
              </Link>
            </div>
            <p className="mt-8 text-sm text-ink-soft">
              Behandellocaties in Nunspeet, Almelo, Hardenberg en Hasselt
            </p>
          </div>
          <div className="relative hidden justify-center lg:flex">
            <Image
              src="/beeldmerk.png"
              alt=""
              width={202}
              height={510}
              priority
              className="h-[26rem] w-auto drop-shadow-sm"
            />
          </div>
        </div>
      </section>

      {/* Specialisaties */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="specialisaties">
        <div className="max-w-2xl">
          <Eyebrow>Specialisaties</Eyebrow>
          <h2 id="specialisaties" className="display mt-3 text-3xl font-semibold text-bark-deep sm:text-4xl">
            Waarmee kan ik u helpen?
          </h2>
          <p className="mt-4 leading-relaxed text-ink-soft">
            Hoe specifieker het werkgebied, hoe beter de zorg. Ik richt mij
            volledig op klachten in het hoofd-halsgebied &mdash; van veelvoorkomend
            tot zeldzaam en complex.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {klachten.map((k) => (
            <Link
              key={k.slug}
              href={`/${k.slug}`}
              className="group flex flex-col rounded-2xl border border-paper-warm bg-white p-6 transition-all hover:-translate-y-0.5 hover:border-sand hover:shadow-[0_12px_32px_-16px_rgba(124,77,39,0.35)]"
            >
              <h3 className="display text-lg font-semibold text-bark-dark">
                {k.name}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-soft">
                {k.card}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-bark">
                Lees meer
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M2 7h10m0 0L8 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Behandelmethoden */}
      <section className="bg-paper" aria-labelledby="behandelmethoden">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <Eyebrow>Behandelmethoden</Eyebrow>
            <h2 id="behandelmethoden" className="display mt-3 text-3xl font-semibold text-bark-deep sm:text-4xl">
              De behandeling die past bij uw situatie
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Mijn behandelmethoden zijn gebaseerd op wetenschappelijk onderzoek,
              klinische expertise en praktijkervaring. De keuze voor een behandeling
              maak ik altijd samen met u, volgens het principe van shared decision
              making.
            </p>
          </div>
          <div className="mt-10 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {behandelmethoden.map((m) => (
              <div key={m.titel} className="border-t-2 border-sand pt-5">
                <h3 className="display text-lg font-semibold text-bark-dark">{m.titel}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{m.tekst}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-relaxed text-ink-soft">
            Waar nodig werk ik samen met andere specialisten, zoals logopedisten,
            psychosomatisch fysiotherapeuten, KNO-artsen, neurologen, kaakchirurgen,
            tandartsen, POH en huisartsen. Bij evenwichtsstoornissen en tinnitus
            schakel ik zo nodig een vestibuloloog of audioloog in, bij complexe
            revalidatietrajecten een revalidatiearts en bij oncologische zorg de
            specialisten binnen het Oncologienetwerk Zwartewaterland.
          </p>
        </div>
      </section>

      {/* Over mij teaser */}
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24" aria-labelledby="over-mij">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Eyebrow>Over mij</Eyebrow>
            <h2 id="over-mij" className="display mt-3 text-3xl font-semibold text-bark-deep sm:text-4xl">
              Lysanne Visscher
            </h2>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Gespecialiseerd orofaciaal en manueel therapeut (MSc) met een sterke
              focus op complexe klachten in het hoofd-halsgebied. Mijn aanpak is
              analytisch, doelgericht en altijd met oog voor de mens achter de
              klacht.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Ik geloof niet in werken vanuit eilandjes, maar in een netwerk waarin
              specialisten elkaar opzoeken en versterken. Mijn doel is niet om
              zoveel mogelijk pati&euml;nten binnen te houden, maar om hen op de
              juiste plek te krijgen &mdash; of dat nu bij mij is of bij een collega
              met een andere expertise.
            </p>
            <Link
              href="/over-mij"
              className="mt-6 inline-flex items-center gap-1.5 font-semibold text-bark hover:text-bark-dark"
            >
              Meer over mijn achtergrond en werkwijze
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10m0 0L8 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
          <div className="rounded-2xl bg-paper-warm p-8 lg:p-10">
            <p className="display text-xl font-medium leading-relaxed text-bark-dark">
              &ldquo;Kwaliteit gaat boven kwantiteit. Ik kijk altijd naar wat een
              pati&euml;nt &eacute;cht nodig heeft, zonder commercieel belang.&rdquo;
            </p>
            <ul className="mt-8 space-y-3 text-sm text-ink-soft">
              {netwerken.slice(0, 3).map((n) => (
                <li key={n.naam} className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-ink">{n.naam}</strong> &mdash; {n.tekst}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Locaties */}
      <section className="bg-paper" aria-labelledby="locaties">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Eyebrow>Locaties</Eyebrow>
              <h2 id="locaties" className="display mt-3 text-3xl font-semibold text-bark-deep sm:text-4xl">
                Waar kunt u terecht?
              </h2>
              <p className="mt-4 leading-relaxed text-ink-soft">
                Ik werk op vier praktijklocaties in de regio. Afspraken kunnen
                telefonisch of via de website van de betreffende praktijk worden
                gemaakt.
              </p>
            </div>
            <Link
              href="/locaties-en-contact"
              className="rounded-full border border-bark px-6 py-3 font-semibold text-bark transition-colors hover:bg-paper-warm"
            >
              Alle locatie-informatie
            </Link>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locaties.map((l) => (
              <div key={`${l.naam}-${l.plaats}`} className="rounded-2xl bg-white p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand">
                  {l.dagen}
                </p>
                <h3 className="display mt-2 text-lg font-semibold leading-snug text-bark-dark">
                  {l.plaats}
                </h3>
                <p className="mt-1 text-sm text-ink-soft">
                  {l.naam}
                  {l.detail ? ` (${l.detail})` : ""}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Twijfelt u of uw klachten hier passen?"
        text={`Neem gerust contact op. Samen kijken we of orofaciale fysiotherapie iets voor u kan betekenen — en zo niet, dan denk ik graag mee over de juiste plek voor uw zorg. Bellen kan op ${site.phone}.`}
      />
    </>
  );
}
