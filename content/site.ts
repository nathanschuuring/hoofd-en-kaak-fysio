import { klachten1 } from "./klachten-1";
import { klachten2 } from "./klachten-2";
import type { Klacht } from "./types";

export const klachten: Klacht[] = [...klachten1, ...klachten2];

export function getKlacht(slug: string): Klacht | undefined {
  return klachten.find((k) => k.slug === slug);
}

export const site = {
  name: "De Hoofd & Kaak Fysio",
  tagline: "Orofaciale fysiotherapie",
  url: "https://hoofdenkaakfysio.nl",
  therapeut: "Lysanne Visscher",
  phone: "06 44 07 25 88",
  phoneHref: "tel:+31644072588",
  email: "fysiotherapeutvisscher@outlook.com",
  linkedin: "https://www.linkedin.com/in/lysanne-visscher-920939109/",
  kvk: "94629366",
  btw: "NL005099116B87",
  iban: "NL92KNAB0775713554",
  big: "59921537404",
  agb: "04851039",
};

export const locaties = [
  {
    naam: "Maatschap den Boon-Stefels",
    detail: "voorheen Slot-Keerssemeeckers",
    plaats: "Nunspeet",
    dagen: "Maandag",
  },
  {
    naam: "FysioSmile",
    detail: "locatie ZGT",
    plaats: "Almelo",
    dagen: "Dinsdag",
  },
  {
    naam: "FysioSmile",
    detail: "locatie Kaakchirurgie Oost-Nederland",
    plaats: "Hardenberg",
    dagen: "Woensdag",
  },
  {
    naam: "Fysio- en Manueel Therapie Van den Bosch",
    detail: "",
    plaats: "Hasselt",
    dagen: "Donderdag & vrijdag",
  },
];

export const behandelmethoden = [
  {
    titel: "Counseling & educatie",
    tekst:
      "Inzicht geven in de klachten, de mogelijke oorzaken en zelfmanagementstrategie\u00ebn, zodat u zelf grip krijgt op uw herstel.",
  },
  {
    titel: "Manuele technieken",
    tekst:
      "Mobilisaties en andere hands-on technieken gericht op het verbeteren van functie en het verminderen van pijn in het kaak-, hoofd-, nek- en schoudergebied.",
  },
  {
    titel: "Oefentherapie",
    tekst:
      "Gerichte oefeningen om spierfunctie, co\u00f6rdinatie en mobiliteit te verbeteren. Hieronder valt onder andere mime therapie bij een perifere aangezichtsverlamming (IPAV).",
  },
  {
    titel: "Ontspannings- & ademhalingsoefeningen",
    tekst:
      "Gericht op het verminderen van spanning en het verbeteren van de regulatie van het zenuwstelsel.",
  },
  {
    titel: "Specifieke technieken",
    tekst:
      "Zoals vestibulaire revalidatie, neuromusculaire re-educatie, dry needling en houdings- en bewegingsadviezen voor klachten rondom het hoofd-halsgebied.",
  },
];

export const netwerken = [
  {
    naam: "Duizeligheidsnet",
    tekst: "Landelijk netwerk van fysiotherapeuten gespecialiseerd in duizeligheid en vestibulaire revalidatie.",
    url: "https://www.kenniscentrumduizeligheid.nl/kenniscentrum-duizeligheid/Duizeligheidsnet",
  },
  {
    naam: "NA-netwerk Radboudumc",
    tekst: "Netwerk van therapeuten gericht op neuralgische amyotrofie, vanuit het expertisecentrum van het Radboudumc.",
    url: "https://www.radboudumc.nl/patientenzorg/behandelingen/neuralgische-amyotrofie",
  },
  {
    naam: "Oncologienetwerk Zwartewaterland",
    tekst: "Regionaal netwerk van zorgverleners voor mensen die leven met of na kanker.",
    url: "https://zwartewaterland.oncologiezorgnetwerken.nl/",
  },
  {
    naam: "NVOF",
    tekst: "Nederlandse Vereniging voor Orofaciale Fysiotherapie, de beroepsvereniging voor orofaciaal fysiotherapeuten.",
    url: "https://www.kngf.nl/bi/nvof/",
  },
];

export const faqAlgemeen = [
  {
    q: "Is een verwijzing van een arts nodig?",
    a: "Nee, fysiotherapie is vrij toegankelijk. Iedereen is welkom, ook zonder verwijzing. Uitzondering: voor behandeling op basis van een chronische indicatie (bijvoorbeeld bij hoofd-halsoncologie) is wel een verwijzing van een arts of specialist nodig.",
  },
  {
    q: "Welke behandelingen worden vergoed door de zorgverzekeraar?",
    a: "Fysiotherapie wordt vergoed vanuit de aanvullende verzekering. Check altijd uw verzekeringspolis voor de voorwaarden of neem contact op met uw zorgverzekeraar.",
  },
  {
    q: "Wat zijn de kosten van een behandeling?",
    a: "De tarieven worden bepaald door de praktijklocatie waar u wordt behandeld. Kijk voor actuele tarieven op de website van de betreffende praktijk, of neem contact met mij op voor meer informatie.",
  },
  {
    q: "Hoe lang duurt een intake of behandeling?",
    a: "Een intake (uw eerste afspraak) duurt 45 minuten. Een vervolgbehandeling duurt ongeveer 25 minuten.",
  },
  {
    q: "Wat moet ik meenemen naar de eerste afspraak?",
    a: "Een geldig identiteitsbewijs, eventuele relevante medische informatie (zoals een verwijsbrief, recent medicatieoverzicht, scanverslagen of een dagboek van de klachten) en een eigen handdoek (een grote en een kleine).",
  },
  {
    q: "Hoe kan ik een afspraak maken of wijzigen?",
    a: "Afspraken kunnen telefonisch of via de websites van de praktijklocaties worden gemaakt. Wilt u een afspraak verzetten of annuleren, doe dit dan minimaal 24 uur van tevoren. Afspraken die niet of te laat worden afgezegd, worden in rekening gebracht.",
  },
  {
    q: "Is een behandeling aan huis mogelijk?",
    a: "Ja, als u niet in staat bent om naar de praktijk te komen, is behandeling aan huis mogelijk. Neem hiervoor contact met mij op.",
  },
  {
    q: "Wat is een chronische indicatie?",
    a: "Bepaalde aandoeningen staan op de landelijke chronische lijst, waardoor u recht kunt hebben op langdurige vergoeding van fysiotherapie vanuit de basisverzekering. Kijk voor de volledige lijst op zorgvergoeding.com of overleg met uw zorgverzekeraar.",
  },
];

export const specialisatiesOverMij = [
  "MSc Orofaciale fysiotherapie (kaakklachten/TMD, aangezichtspijn, bruxisme, keel-, slik- en globusklachten, oncologie en trauma in het hoofd-halsgebied)",
  "MSc Manuele fysiotherapie",
  "Duizeligheidsklachten & vestibulaire revalidatie",
  "Somatosensorische en subjectieve tinnitus & oorpijn",
  "Hoofdpijnproblematiek",
  "Perifere aangezichtsverlamming / IPAV (mime therapie)",
  "Dry needling",
  "Neuralgische amyotrofie (NA)",
];
