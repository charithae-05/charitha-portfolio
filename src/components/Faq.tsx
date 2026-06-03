"use client";

import { useState } from "react";
import { faq } from "@/data/content";
import Reveal from "./Reveal";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal className="text-center max-w-[760px] mx-auto mb-[46px]">
          <h2 className="font-serif font-semibold tracking-[-0.01em] text-[clamp(32px,4.5vw,50px)]">
            Questions? Let&apos;s clear things up
          </h2>
          <p className="text-muted mt-3 text-[17px]">
            A few things people usually want to know before we work together.
          </p>
        </Reveal>

        <div className="max-w-[820px] mx-auto">
          {faq.map((item, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={item.q} className="border-b border-line">
                <button
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="w-full text-left py-6 px-1 text-[19px] font-medium text-ink flex justify-between items-center gap-5"
                >
                  {item.q}
                  <span
                    className={`flex-none text-2xl text-muted transition-transform ${open ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
                  style={{ maxHeight: open ? 240 : 0 }}
                >
                  <p className="px-1 pb-[26px] text-neutral-700 text-[16px] max-w-[680px]">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
