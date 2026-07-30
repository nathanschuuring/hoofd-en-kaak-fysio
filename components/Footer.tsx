import Link from "next/link";
import Image from "next/image";
import { site, netwerken } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-bark-deep text-paper">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image
              src="/logo-light.png"
              alt="De Hoofd & Kaak Fysio – Orofaciale fysiotherapie"
              width={180}
              height={117}
              className="h-auto w-40"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand-light">
              Specialistische orofaciale en manuele fysiotherapie voor complexe
              klachten in het hoofd-halsgebied.
            </p>
          </div>

          <div>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sand">
              Contact
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={site.phoneHref} className="hover:text-sand-light">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all hover:text-sand-light">
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sand-light"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sand">
              Netwerken
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {netwerken.map((n) => (
                <li key={n.naam}>
                  <a
                    href={n.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-sand-light"
                  >
                    {n.naam}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://www.keurmerkfysiotherapie.nl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sand-light"
                >
                  Keurmerk Fysiotherapie
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-sand">
              Registraties
            </h2>
            <ul className="mt-4 space-y-1.5 text-sm text-sand-light">
              <li>KvK {site.kvk}</li>
              <li>BTW {site.btw}</li>
              <li>BIG {site.big}</li>
              <li>AGB {site.agb}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-bark-dark pt-6 text-xs text-sand-light md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {site.name} &middot; {site.therapeut}
          </p>
          <p className="flex gap-5">
            <Link href="/privacyverklaring" className="hover:text-paper">
              Privacyverklaring
            </Link>
            <Link href="/klachtenregeling" className="hover:text-paper">
              Klachtenregeling
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
