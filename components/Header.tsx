"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/specialisaties", label: "Specialisaties" },
  { href: "/over-mij", label: "Over mij" },
  { href: "/locaties-en-contact", label: "Locaties & contact" },
  { href: "/veelgestelde-vragen", label: "Veelgestelde vragen" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-paper-warm bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <Image
            src="/beeldmerk.png"
            alt=""
            width={26}
            height={66}
            className="h-11 w-auto"
            priority
          />
          <span className="leading-tight">
            <span className="display block text-[1.05rem] font-semibold tracking-wide text-bark">
              De Hoofd &amp; Kaak Fysio
            </span>
            <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-sand">
              Orofaciale fysiotherapie
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hoofdnavigatie">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[0.92rem] font-medium transition-colors hover:text-bark ${
                pathname.startsWith(item.href) ? "text-bark" : "text-ink-soft"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/locaties-en-contact#afspraak"
            className="rounded-full bg-bark px-5 py-2.5 text-[0.92rem] font-semibold text-white transition-colors hover:bg-bark-dark"
          >
            Afspraak maken
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-md text-bark lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Menu sluiten" : "Menu openen"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-paper-warm bg-white px-5 pb-6 pt-2 lg:hidden" aria-label="Mobiele navigatie">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-paper-warm py-3.5 text-[1rem] font-medium text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/locaties-en-contact#afspraak"
            className="mt-5 block rounded-full bg-bark px-5 py-3 text-center font-semibold text-white"
            onClick={() => setOpen(false)}
          >
            Afspraak maken
          </Link>
        </nav>
      )}
    </header>
  );
}
