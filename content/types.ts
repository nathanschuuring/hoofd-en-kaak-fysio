export type Block =
  | { type: "p"; text: string }
  | { type: "list"; items: string[] }
  | { type: "h3"; text: string };

export interface Faq {
  q: string;
  a: string;
}

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface Klacht {
  slug: string;
  name: string;
  shortName: string;
  category: "klacht" | "behandelvorm";
  seoTitle: string;
  metaDescription: string;
  lead: string;
  card: string;
  sections: Section[];
  faq: Faq[];
  closing: { title: string; paragraphs: string[] };
}
