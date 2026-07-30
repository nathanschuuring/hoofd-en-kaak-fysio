import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { klachten, getKlacht, site } from "@/content/site";
import { Blocks, Eyebrow, FaqItem } from "@/components/ui";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return klachten.map((k) => ({ slug: k.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const klacht = getKlacht(slug);
  if (!klacht) return {};
  return {
    title: { absolute: klacht.seoTitle },
    description: klacht.metaDescription,
    alternates: { canonical: `/${klacht.slug}` },
    openGraph: {
      title: klacht.seoTitle,
      description: klacht.metaDescription,
      url: `/${klacht.slug}`,
    },
  };
}

export default async function KlachtPage({ params }: Props) {
  const { slug } = await params;
  const klacht = getKlacht(slug);
  if (!klacht) notFound();

  const related = klachten.filter((k) => k.slug !== klacht.slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: klacht.seoTitle,
    description: klacht.metaDescription,
    url: `${site.url}/${klacht.slug}`,
    inLanguage: "nl",
    about: { "@type": "MedicalCondition", name: klacht.name },
    mainEntity: {
      "@type": "FAQPage",
      mainEntity: klacht.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="bg-paper">
        <div className="mx-auto max-w-6xl px-5 pb-12 pt-12 lg:px-8 lg:pt-16">
          <nav aria-label="Kruimelpad" className="text-sm text-ink-soft">
            <Link href="/specialisaties" className="hover:text-bark">
              Specialisaties
            </Link>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-bark">{klacht.shortName}</span>
          </nav>
          <Eyebrow>
            {klacht.category === "behandelvorm" ? "Behandelvorm" : "Specialisatie"}
          </Eyebrow>
          <h1 className="display mt-3 max-w-3xl text-4xl font-semibold leading-[1.12] text-bark-deep sm:text-5xl">
            {klacht.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {klacht.lead}
          </p>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-12 lg:grid-cols-[240px_1fr] lg:px-8 lg:py-16">
        <aside className="hidden lg:block">
          <nav
            aria-label="Op deze pagina"
            className="sticky top-28 rounded-2xl border border-paper-warm p-6"
          >
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-sand">
              Op deze pagina
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {klacht.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-ink-soft transition-colors hover:text-bark">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#veelgestelde-vragen" className="text-ink-soft transition-colors hover:text-bark">
                  Veelgestelde vragen
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        <article className="max-w-3xl">
          {klacht.sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className={i === 0 ? "" : "mt-14 border-t border-paper-warm pt-12"}
              aria-labelledby={`${section.id}-h`}
            >
              <h2
                id={`${section.id}-h`}
                className="display text-2xl font-semibold leading-snug text-bark-deep sm:text-[1.7rem]"
              >
                {section.title}
              </h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}

          <section
            id="veelgestelde-vragen"
            className="mt-14 border-t border-paper-warm pt-12"
            aria-labelledby="faq-h"
          >
            <h2 id="faq-h" className="display text-2xl font-semibold text-bark-deep sm:text-[1.7rem]">
              Veelgestelde vragen over {klacht.shortName.toLowerCase()}
            </h2>
            <div className="mt-4">
              {klacht.faq.map((f) => (
                <FaqItem key={f.q} faq={f} />
              ))}
            </div>
          </section>

          <section className="mt-14 rounded-2xl bg-paper p-8 lg:p-10">
            <h2 className="display text-2xl font-semibold text-bark-deep">
              {klacht.closing.title}
            </h2>
            {klacht.closing.paragraphs.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 leading-relaxed text-ink-soft">
                {p}
              </p>
            ))}
            <div className="mt-7 flex flex-wrap gap-4">
              <a
                href={site.phoneHref}
                className="rounded-full bg-bark px-6 py-3 font-semibold text-white transition-colors hover:bg-bark-dark"
              >
                Bel {site.phone}
              </a>
              <Link
                href="/locaties-en-contact#afspraak"
                className="rounded-full border border-bark px-6 py-3 font-semibold text-bark transition-colors hover:bg-paper-warm"
              >
                Afspraak maken
              </Link>
            </div>
          </section>
        </article>
      </div>

      <section className="bg-paper" aria-labelledby="gerelateerd">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <h2 id="gerelateerd" className="display text-2xl font-semibold text-bark-deep">
            Andere specialisaties
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-3">
            {related.map((k) => (
              <Link
                key={k.slug}
                href={`/${k.slug}`}
                className="group rounded-2xl bg-white p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_32px_-16px_rgba(124,77,39,0.35)]"
              >
                <h3 className="display text-lg font-semibold text-bark-dark">{k.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{k.card}</p>
              </Link>
            ))}
          </div>
          <Link
            href="/specialisaties"
            className="mt-8 inline-flex items-center gap-1.5 font-semibold text-bark hover:text-bark-dark"
          >
            Bekijk alle specialisaties
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10m0 0L8 3m4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
