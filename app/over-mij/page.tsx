import type { Metadata } from "next";
import Image from "next/image";
import { netwerken, specialisatiesOverMij } from "@/content/site";
import { CtaBand, Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Over mij – Lysanne Visscher",
  description:
    "Lysanne Visscher is gespecialiseerd orofaciaal en manueel therapeut (MSc) met focus op complexe klachten in het hoofd-halsgebied. Lees over haar achtergrond, missie en visie.",
  alternates: { canonical: "/over-mij" },
};

export default function OverMijPage() {
  return (
    <>
      <div className="bg-paper">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 lg:grid-cols-[1.3fr_0.7fr] lg:px-8 lg:py-20">
          <div>
            <Eyebrow>Over mij</Eyebrow>
            <h1 className="display mt-3 text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
              Lysanne Visscher
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Gespecialiseerd orofaciaal en manueel therapeut met een sterke focus
              op complexe klachten in het hoofd-halsgebied.
            </p>
          </div>
          <div className="hidden justify-center lg:flex">
            <Image src="/beeldmerk.png" alt="" width={140} height={354} className="h-72 w-auto" />
          </div>
        </div>
      </div>

      <section className="mx-auto max-w-6xl px-5 py-14 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px]">
          <article className="max-w-3xl">
            <h2 className="display text-2xl font-semibold text-bark-deep sm:text-[1.7rem]">
              Achtergrond
            </h2>
            <div className="prose-blocks">
              <p>
                Mijn naam is Lysanne Visscher en ik ben een gespecialiseerde
                orofaciaal en manueel therapeut met een sterke focus op complexe
                klachten in het hoofd-halsgebied. Sinds en tijdens mijn afstuderen
                als MSc Orofaciaal en Manueel therapeut heb ik mij verder verdiept
                in de behandeling van onder andere duizeligheidsklachten, perifere
                aangezichtsverlamming, dystonie, chronische aspecifieke
                aangezichtspijn, schouder- en nekklachten tijdens of na
                neuralgische amyotrofie (NA), hoofdpijn, somatosensorische tinnitus
                en oorpijn.
              </p>
              <p>
                Mijn werk geeft mij energie, vooral omdat ik merk dat een
                specialistische aanpak pati&euml;nten echt verder helpt. Hoe
                specifieker mijn werkgebied, hoe meer voldoening ik eruit haal.
                Mijn aanpak is analytisch, doelgericht en altijd met oog voor de
                mens achter de klacht.
              </p>
              <p>
                Wat mij kenmerkt als therapeut is mijn toewijding aan kwaliteit en
                samenwerking. Ik geloof niet in werken vanuit eilandjes, maar in
                een netwerk waarin specialisten elkaar opzoeken en versterken. Mijn
                doel is niet om zoveel mogelijk pati&euml;nten binnen te houden,
                maar om hen op de juiste plek te krijgen &mdash; of dat nu bij mij
                is of bij een collega met een andere expertise. Dit betekent dat ik
                niet alleen behandel, maar ook vaak samenwerk met andere
                zorgverleners om de beste zorg te garanderen.
              </p>
              <p>
                Naast mijn werk ben ik betrokken bij de ontwikkeling van ons
                vakgebied. Ik neem deel aan een klankbordgroep van net
                afgestudeerde orofaciaal fysiotherapeuten, waar we input geven aan
                de NVOF over de minimale bekwaamheidseisen voor masteropleidingen.
                Deze rol sluit perfect aan bij mijn overtuiging dat een sterke
                basis en voortdurende specialisatie essentieel zijn voor
                kwalitatieve zorg.
              </p>
              <p>
                Wat mij als persoon drijft, is niet de ambitie om een grote
                praktijk te hebben. Ik wil vooral plezier in mijn werk houden en
                blijven groeien in mijn expertise. Mijn kracht ligt in het
                combineren van een analytische blik met een persoonlijke en
                eerlijke benadering. Ik hou ervan om samen met mijn pati&euml;nten
                en collega&rsquo;s te zoeken naar de beste oplossing en om
                &eacute;cht iets te betekenen binnen mijn vakgebied.
              </p>
            </div>

            <h2 className="display mt-12 border-t border-paper-warm pt-10 text-2xl font-semibold text-bark-deep sm:text-[1.7rem]">
              Missie
            </h2>
            <div className="prose-blocks">
              <p>
                Als fysiotherapeut geloof ik sterk in de kracht van samenwerking en
                specialisatie binnen ons vakgebied. Mijn missie is om
                pati&euml;nten op de juiste plek te krijgen voor de best mogelijke
                zorg &mdash; of dat nu bij mij is of bij een collega-specialist. Ik
                werk graag specialistisch en specifiek, omdat ik merk dat dit niet
                alleen mijn werkplezier vergroot, maar ook de kwaliteit van zorg
                verbetert. Ik streef ernaar om laagdrempelige multidisciplinaire
                samenwerking binnen de eerstelijnszorg te bevorderen, zodat
                zorgverleners elkaar gemakkelijk kunnen vinden en gezamenlijk de
                beste behandeling voor de pati&euml;nt kunnen realiseren.
              </p>
            </div>

            <h2 className="display mt-12 border-t border-paper-warm pt-10 text-2xl font-semibold text-bark-deep sm:text-[1.7rem]">
              Visie
            </h2>
            <div className="prose-blocks">
              <p>
                Fysiotherapie is een prachtig, breed vak waarin samenwerking
                essentieel is om optimale zorg te bieden. Door te specialiseren en
                mijn expertise steeds verder te verdiepen, kan ik pati&euml;nten
                gerichter en effectiever helpen. Mijn visie is dat kwaliteit boven
                kwantiteit gaat: ik wil geen grote praktijk, maar w&eacute;l een
                praktijk waar hoogwaardige, gespecialiseerde zorg centraal staat.
                Dit betekent dat ik altijd kijk naar wat een pati&euml;nt
                &eacute;cht nodig heeft, zonder commercieel belang. Door
                samenwerking en doorverwijzing zet ik mij in voor de best mogelijke
                zorg, zodat iedere pati&euml;nt op de juiste plek terechtkomt.
              </p>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="rounded-2xl bg-paper p-7">
              <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand">
                Specialisaties &amp; opleiding
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-soft">
                {specialisatiesOverMij.map((s) => (
                  <li key={s} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand" aria-hidden="true" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-paper-warm p-7">
              <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand">
                Netwerken
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                {netwerken.map((n) => (
                  <li key={n.naam}>
                    <a
                      href={n.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-bark hover:text-bark-dark"
                    >
                      {n.naam}
                    </a>
                    <p className="mt-1 leading-relaxed text-ink-soft">{n.tekst}</p>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
