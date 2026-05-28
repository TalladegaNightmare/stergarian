"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Alfa_Slab_One, Anton, IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import { strategies } from "./strategies";
import { palettes, type Palette } from "./palettes";

// ── Fonts ───────────────────────────────────────────────────────────────────
const alfaSlab = Alfa_Slab_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-alfa",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
});

const plex = IBM_Plex_Sans({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-plex",
});

// ── Utilities ───────────────────────────────────────────────────────────────
function pickIndex(length: number, last: number): number {
  if (length <= 1) return 0;
  let next = last;
  while (next === last) {
    next = Math.floor(Math.random() * length);
  }
  return next;
}

// ── Page ────────────────────────────────────────────────────────────────────
export default function StrangerThinkingPage() {
  const [stratIdx, setStratIdx] = useState(0);
  const [paletteIdx, setPaletteIdx] = useState(0);
  const [fading, setFading] = useState(false);
  const [ready, setReady] = useState(false);

  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lastStrat = useRef(-1);
  const lastPalette = useRef(-1);

  // Initial randomization — client-only to avoid hydration mismatch
  useEffect(() => {
    const s = Math.floor(Math.random() * strategies.length);
    const p = Math.floor(Math.random() * palettes.length);
    lastStrat.current = s;
    lastPalette.current = p;
    setStratIdx(s);
    setPaletteIdx(p);
    setReady(true);
  }, []);

  // Auto-fit text within the card bounds
  const fitText = useCallback(() => {
    const card = cardRef.current;
    const el = textRef.current;
    if (!card || !el) return;

    // Use getBoundingClientRect so the padding-top % trick resolves correctly
    const rect = card.getBoundingClientRect();
    const maxW = rect.width * 0.82;
    const maxH = rect.height * 0.78;

    // Start from a generous size and shrink down
    let size = Math.min(maxW / 2.5, maxH * 0.9, 160);
    el.style.fontSize = `${size}px`;
    el.style.whiteSpace = "normal";
    el.style.wordBreak = "break-word";

    let iter = 0;
    while (iter < 300) {
      const elRect = el.getBoundingClientRect();
      if (elRect.width <= maxW && elRect.height <= maxH) break;
      size = Math.max(size - 1, 10);
      el.style.fontSize = `${size}px`;
      if (size <= 10) break;
      iter++;
    }
  }, []);

  // Re-fit on strategy change & on resize
  useEffect(() => {
    if (!ready) return;
    // double-rAF to ensure layout has settled
    requestAnimationFrame(() => requestAnimationFrame(fitText));
  }, [stratIdx, ready, fitText]);

  useEffect(() => {
    const onResize = () => fitText();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [fitText]);

  const draw = useCallback(() => {
    setFading(true);
    window.setTimeout(() => {
      const nextS = pickIndex(strategies.length, lastStrat.current);
      const nextP = pickIndex(palettes.length, lastPalette.current);
      lastStrat.current = nextS;
      lastPalette.current = nextP;
      setStratIdx(nextS);
      setPaletteIdx(nextP);
      setFading(false);
    }, 170);
  }, []);

  // Keyboard: space or enter to draw
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        draw();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [draw]);

  const palette: Palette = palettes[paletteIdx];

  return (
    <main
      className={`${alfaSlab.variable} ${anton.variable} ${plex.variable} min-h-screen bg-[#111111] text-[#F5F2EC] flex flex-col`}
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
        <span
          className="text-[10px] uppercase opacity-50"
          style={{ letterSpacing: "0.25em" }}
        >
          Tool · No. 01
        </span>
      </header>

      {/* Page label / eyebrow — off the card, per direction */}
      <section className="px-6 md:px-10 pt-12 md:pt-20 pb-8 md:pb-10 max-w-[1400px] mx-auto w-full">
        <h1
          className="text-[#F5F2EC] text-[44px] md:text-[88px] leading-[0.95] uppercase"
          style={{
            fontFamily: "var(--font-anton), sans-serif",
            letterSpacing: "0.005em",
          }}
        >
          Stranger
          <br />
          Thinking
        </h1>
        <p
          className="mt-6 md:mt-8 max-w-xl text-[14px] md:text-[15px] leading-relaxed opacity-70"
          style={{ fontFamily: "var(--font-plex), sans-serif" }}
        >
          Stranger Thinking: Useful Distortions for Routine-Weary Minds. A deck
          of provocations drawn from Eno&apos;s Oblique Strategies, then bent.
          Tap the card to draw another.
        </p>
      </section>

      {/* The card */}
      <section className="px-6 md:px-10 pb-10 max-w-[1400px] mx-auto w-full flex-1">
        <button
          type="button"
          onClick={draw}
          aria-label="Draw another"
          className="block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F5F2EC] focus-visible:ring-offset-4 focus-visible:ring-offset-[#111111] rounded-[2px] group"
        >
          <div
            ref={cardRef}
            className="relative w-full overflow-hidden transition-colors duration-300"
            style={{
              paddingTop: "41.84%", // 2.39:1 cinematic
              backgroundColor: palette.bg,
              color: palette.text,
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center px-[6%]">
              <div
                ref={textRef}
                className={`transition-opacity duration-150 text-center uppercase ${
                  fading ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  fontFamily: "var(--font-alfa), serif",
                  lineHeight: 1.08,
                  letterSpacing: "0.02em",
                  fontSize: 24, // overwritten by fitText
                  visibility: ready ? "visible" : "hidden",
                }}
              >
                {strategies[stratIdx]}
              </div>
            </div>
          </div>
        </button>

        {/* Caption row beneath card */}
        <div className="mt-4 flex items-center justify-between text-[10px] uppercase opacity-60">
          <span style={{ letterSpacing: "0.28em", fontFamily: "var(--font-anton), sans-serif" }}>
            Tap to draw
          </span>
          <span style={{ letterSpacing: "0.2em" }}>
            {String(stratIdx + 1).padStart(3, "0")} / {String(strategies.length).padStart(3, "0")}
          </span>
        </div>
      </section>

      {/* Footer — publisher's imprint, consistent across hub pages */}
      <footer className="px-6 md:px-10 py-8 mt-auto border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-[11px] opacity-60">
        <span style={{ letterSpacing: "0.15em" }} className="uppercase">
          Stergarian © {new Date().getFullYear()}
        </span>
        <span className="flex gap-5">
          <Link href="/" className="hover:opacity-100 uppercase" style={{ letterSpacing: "0.15em" }}>
            Index
          </Link>
          <a
            href="mailto:hello@stergarian.com"
            className="hover:opacity-100 uppercase"
            style={{ letterSpacing: "0.15em" }}
          >
            Contact
          </a>
        </span>
      </footer>
    </main>
  );
}
