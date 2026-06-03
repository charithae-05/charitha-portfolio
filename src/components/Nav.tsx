"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b transition-colors ${
        scrolled ? "border-line" : "border-transparent"
      }`}
    >
      <div className="mx-auto w-full max-w-content px-7 flex items-center justify-between h-[78px]">
        <a href="#top" className="flex items-center gap-3 font-semibold text-[19px] tracking-tight">
          <span className="grid place-items-center w-[38px] h-[38px] rounded-[11px] bg-ink text-white font-serif font-bold text-[19px]">
            C
          </span>
          {profile.name}
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] text-neutral-700 hover:text-black transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2.5 bg-ink text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-transform">
            Let&apos;s talk
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink mb-1.5" />
          <span className="block w-6 h-0.5 bg-ink" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden absolute left-0 right-0 top-[78px] bg-white border-b border-line px-7 py-6 flex flex-col gap-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[16px] text-neutral-800"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="inline-flex w-fit items-center gap-2.5 bg-ink text-white px-6 py-3.5 rounded-full text-[15px] font-medium"
          >
            Let&apos;s talk
          </a>
        </nav>
      )}
    </header>
  );
}
