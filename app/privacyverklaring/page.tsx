import type { Metadata } from "next";
import { site } from "@/content/site";
import { Eyebrow } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-14 lg:px-8 lg:py-20">
      <Eyebrow>Privacyverklaring</Eyebrow>
      <h1 className="display mt-3 text-4xl font-semibold text-bark-deep">
        Privacyverklaring
      </h1>
      <div className="prose-blocks">
        <p>
          {site.name} ({site.therapeut}) gaat zorgvuldig om met uw
          persoonsgegevens en medische gegevens, conform de Algemene Verordening
          Gegevensbescherming (AVG) en de Wet op de geneeskundige
          behandelingsovereenkomst (WGBO).
        </p>
        <p>
          De volledige privacyverklaring wordt binnenkort op deze pagina
          gepubliceerd. Heeft u in de tussentijd vragen over hoe er met uw
          gegevens wordt omgegaan? Neem dan contact op via{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-bark underline underline-offset-2">
            {site.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
