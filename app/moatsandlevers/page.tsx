"use client";

import { useState } from "react";
import { DM_Serif_Display, Source_Serif_4, IBM_Plex_Sans, Anton } from "next/font/google";
import Link from "next/link";
import { levers } from "./levers";

// ── Fonts ───────────────────────────────────────────────────────────────────
const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-serif",
});

const sourceSerif = Source_Serif_4({
  weight: ["400", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-serif",
});

const plex = IBM_Plex_Sans({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

// ── Page ────────────────────────────────────────────────────────────────────
export default function MoatsAndLeversPage() {
  const [active, setActive] = useState(0);
  const lever = levers[active];

  return (
    <main
      className={`${dmSerif.variable} ${sourceSerif.variable} ${plex.variable} ${anton.variable} min-h-screen bg-[#111111] text-[#F5F2EC] flex flex-col`}
      style={{ fontFamily: "var(--font-plex), system-ui, sans-serif" }}
    >
      {/* Hub logo — clicks back to root */}
      <header className="px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Stergarian — home"
          className="inline-flex items-center justify-center w-9 h-9 rounded-[3px] bg-[#F5F2EC] text-[#111111] font-bold text-lg leading-none hover:opacity-90 transition-opacity"
          style={{ fontFamily: "var(--font-anton), sans-serif", letterSpacing: "0.02em" }}
        >
          S
        </Link>
        <span className="text-[10px] uppercase opacity-50" style={{ letterSpacing: "0.25em" }}>
          Resource · No. 02
        </span>
      </header>

      {/* Title block */}
      <section className="px-6 md:px-10 pt-12 md:pt-16 pb-8 max-w-[1200px] mx-auto w-full">
        <p className="text-[11px] uppercase opacity-50 mb-5" style={{ letterSpacing: "0.25em" }}>
          A positioning framework
        </p>
        <h1
          className="text-[#F5F2EC] text-[48px] md:text-[96px] leading-[0.9] uppercase"
          style={{ fontFamily: "var(--font-anton), sans-serif", letterSpacing: "0.005em" }}
        >
          Moats &amp;<br />
          <span style={{ color: lever.color, transition: "color 0.4s ease" }}>Levers</span>
        </h1>
        <p
          className="mt-7 max-w-2xl text-[16px] md:text-[18px] leading-relaxed opacity-80"
          style={{ fontFamily: "var(--font-source-serif), serif" }}
        >
          Five ways brands carve out ownable space in the minds of an audience. Each lever
          builds a moat — a structural reason competitors can&apos;t easily follow. They run
          from the rational to the emotional.
        </p>
      </section>

      {/* Spectrum / lever selector */}
      <section className="px-6 md:px-10 max-w-[1200px] mx-auto w-full">
        <div className="flex items-center gap-3 mb-3 text-[10px] uppercase opacity-50" style={{ letterSpacing: "0.2em" }}>
          <span>Rational</span>
          <span
            className="flex-1 h-px"
            style={{
              background:
                "linear-gradient(to right, #28A0D4, #2A6B3C, #F4E020, #D94E18, #E83B1F)",
              opacity: 0.6,
            }}
          />
          <span>Emotional</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {levers.map((l, i) => {
            const on = i === active;
            return (
              <button
                key={l.id}
                onClick={() => setActive(i)}
                className="text-left p-4 transition-all duration-200 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#F5F2EC]"
                style={{
                  background: on ? "rgba(245,242,236,0.05)" : "rgba(245,242,236,0.015)",
                  border: `1px solid ${on ? "rgba(245,242,236,0.22)" : "rgba(245,242,236,0.08)"}`,
                  borderTop: `2px solid ${l.color}`,
                  opacity: on ? 1 : 0.62,
                }}
              >
                <span className="block text-[9px] opacity-50 mb-1.5" style={{ letterSpacing: "0.1em" }}>
                  {l.id}_
                </span>
                <span
                  className="block text-[14px] uppercase mb-1 leading-none"
                  style={{ fontFamily: "var(--font-anton), sans-serif", letterSpacing: "0.03em", color: l.color }}
                >
                  {l.name}
                </span>
                <span className="block text-[11px] italic opacity-60" style={{ fontFamily: "var(--font-source-serif), serif" }}>
                  {l.tagline}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Active lever panel */}
      <section className="px-6 md:px-10 pt-2 pb-12 max-w-[1200px] mx-auto w-full flex-1">
        <div
          key={lever.id}
          className="border bg-[rgba(245,242,236,0.02)] p-6 md:p-9"
          style={{ borderColor: "rgba(245,242,236,0.18)", animation: "fadeUp 0.3s ease" }}
        >
          {/* Strategic question — the hero line */}
          <div className="pb-7 mb-7 border-b" style={{ borderColor: "rgba(245,242,236,0.1)" }}>
            <p className="text-[9px] uppercase opacity-45 mb-3" style={{ letterSpacing: "0.25em" }}>
              {lever.moatType} — the strategic question
            </p>
            <p
              className="text-[26px] md:text-[40px] leading-[1.1]"
              style={{ fontFamily: "var(--font-dm-serif), serif", color: lever.color }}
            >
              {lever.question}
            </p>
            <p className="mt-4 text-[15px] opacity-70 max-w-2xl" style={{ fontFamily: "var(--font-source-serif), serif" }}>
              {lever.moatDesc}
            </p>
          </div>

          {/* Building / Defensibility */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-9">
            <div>
              <p className="text-[9px] uppercase opacity-45 mb-3" style={{ letterSpacing: "0.2em" }}>
                What you&apos;re building
              </p>
              <div className="flex flex-wrap gap-2">
                {lever.building.map((b) => (
                  <span
                    key={b}
                    className="text-[12px] px-3 py-1.5"
                    style={{
                      fontFamily: "var(--font-source-serif), serif",
                      border: `1px solid ${lever.color}55`,
                      color: lever.color,
                      borderRadius: 2,
                    }}
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[9px] uppercase opacity-45 mb-3" style={{ letterSpacing: "0.2em" }}>
                Defensibility in
              </p>
              <div className="flex flex-wrap gap-2">
                {lever.defensibility.map((d) => (
                  <span
                    key={d}
                    className="text-[10px] uppercase px-2.5 py-1.5"
                    style={{
                      letterSpacing: "0.1em",
                      background: "rgba(245,242,236,0.05)",
                      border: "1px solid rgba(245,242,236,0.12)",
                      borderRadius: 2,
                      opacity: 0.75,
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Moat cards */}
          <p className="text-[9px] uppercase opacity-45 mb-4" style={{ letterSpacing: "0.2em" }}>
            Moves &amp; examples
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {lever.moats.map((m) => (
              <div
                key={m.title}
                className="p-4 transition-colors duration-150 bg-[rgba(245,242,236,0.015)]"
                style={{ border: "1px solid rgba(245,242,236,0.1)" }}
              >
                <div
                  className="text-[12px] uppercase font-semibold mb-0.5"
                  style={{ letterSpacing: "0.04em", color: lever.color }}
                >
                  {m.title}
                </div>
                <div className="text-[11px] italic opacity-60 mb-3" style={{ fontFamily: "var(--font-source-serif), serif" }}>
                  {m.sub}
                </div>
                <ul className="space-y-1">
                  {m.examples.map((ex) => (
                    <li
                      key={ex}
                      className="text-[12px] opacity-70 pb-1"
                      style={{
                        fontFamily: "var(--font-source-serif), serif",
                        borderBottom: "1px solid rgba(245,242,236,0.07)",
                      }}
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer — publisher's imprint */}
      <footer className="px-6 md:px-10 py-8 mt-auto border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] opacity-60">
        <span style={{ letterSpacing: "0.15em" }} className="uppercase">
          Stergarian © {new Date().getFullYear()}
        </span>
        <span className="flex gap-5">
          <Link href="/" className="hover:opacity-100 uppercase" style={{ letterSpacing: "0.15em" }}>
            Index
          </Link>
          <a href="mailto:hello@stergarian.com" className="hover:opacity-100 uppercase" style={{ letterSpacing: "0.15em" }}>
            Contact
          </a>
        </span>
      </footer>

      <style jsx global>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </main>
  );
}
