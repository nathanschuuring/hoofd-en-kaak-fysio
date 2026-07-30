import Link from "next/link";
import { site } from "@/content/site";
import type { Block, Faq } from "@/content/types";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose-blocks">
      {blocks.map((b, i) => {
        if (b.type === "p") return <p key={i}>{b.text}</p>;
        if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
        return (
          <ul key={i}>
            {b.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        );
      })}
    </div>
  );
}

export function FaqItem({ faq }: { faq: Faq }) {
  return (
    <details className="faq group border-b border-paper-warm">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-left">
        <span className="display text-[1.05rem] font-semibold text-bark-dark">
          {faq.q}
        </span>
        <span
          className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sand text-sand"
          aria-hidden="true"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </summary>
      <p className="pb-6 pr-10 leading-relaxed text-ink-soft">{faq.a}</p>
    </details>
  );
}

export function CtaBand({
  title = "Vragen over uw klachten of een afspraak maken?",
  text = "Neem gerust contact op voor advies of het maken van een afspraak. Samen kijken we naar de oorzaak van uw klachten en naar een behandeling die past bij uw situatie.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-bark text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="display text-3xl font-semibold leading-snug">{title}</h2>
          <p className="mt-4 leading-relaxed text-sand-light">{text}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={site.phoneHref}
              className="rounded-full bg-white px-6 py-3 font-semibold text-bark transition-colors hover:bg-paper"
            >
              Bel {site.phone}
            </a>
            <Link
              href="/locaties-en-contact#afspraak"
              className="rounded-full border border-sand-light px-6 py-3 font-semibold text-white transition-colors hover:bg-bark-dark"
            >
              Afspraak maken
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
