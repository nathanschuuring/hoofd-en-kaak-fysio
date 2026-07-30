import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8">
      <h1 className="display text-4xl font-semibold text-bark-deep">
        Pagina niet gevonden
      </h1>
      <p className="mt-4 text-ink-soft">
        Deze pagina bestaat niet (meer). Ga terug naar de homepage of bekijk de
        specialisaties.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/"
          className="rounded-full bg-bark px-6 py-3 font-semibold text-white hover:bg-bark-dark"
        >
          Naar de homepage
        </Link>
        <Link
          href="/specialisaties"
          className="rounded-full border border-bark px-6 py-3 font-semibold text-bark hover:bg-paper-warm"
        >
          Specialisaties
        </Link>
      </div>
    </div>
  );
}
