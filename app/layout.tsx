import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/figtree";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "De Hoofd & Kaak Fysio | Specialistische fysiotherapie voor hoofd-halsklachten",
    template: "%s | De Hoofd & Kaak Fysio",
  },
  description:
    "Gespecialiseerde orofaciale en manuele fysiotherapie voor complexe klachten in het hoofd-halsgebied: kaakklachten, duizeligheid, hoofdpijn, aangezichtspijn en meer.",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: site.name,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Physiotherapy",
  name: site.name,
  url: site.url,
  telephone: "+31644072588",
  email: site.email,
  founder: { "@type": "Person", name: site.therapeut },
  medicalSpecialty: "Physiotherapy",
  description:
    "Specialistische orofaciale en manuele fysiotherapie voor klachten in het hoofd-halsgebied.",
  areaServed: ["Nunspeet", "Almelo", "Hardenberg", "Hasselt"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
