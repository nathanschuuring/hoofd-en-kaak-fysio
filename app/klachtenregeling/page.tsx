import type { Metadata } from "next";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Klachtenregeling",
  robots: { index: false },
};

export default function KlachtenregelingPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
      <Eyebrow>Klachtenregeling</Eyebrow>
      <h1 className="display mt-3 text-4xl font-semibold text-bark-deep">
        Klachtenregeling
      </h1>
      <div className="prose-blocks">
        <p>
          Bent u niet tevreden over uw behandeling of de gang van zaken? Bespreek
          dit dan in eerste instantie met mij; samen komen we er vaak uit. Komt u
          er met mij niet uit, dan kunt u gebruikmaken van de klachtenregeling
          conform de Wet kwaliteit, klachten en geschillen zorg (Wkkgz).
        </p>
        <p>
          De volledige klachtenregeling wordt binnenkort op deze pagina
          gepubliceerd. In de tussentijd kunt u contact opnemen via{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-bark underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
