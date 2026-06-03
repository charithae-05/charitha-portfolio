import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="pt-[70px] pb-10">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal>
          <h1 className="font-serif font-semibold tracking-[-0.02em] leading-[0.92] mb-9 text-[clamp(58px,13vw,180px)]">
            {profile.name}
          </h1>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 items-start pt-2">
          <Reveal>
            <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal>
            <p className="text-[18px] text-neutral-800 max-w-[540px]">{profile.bio}</p>
            <div className="mt-6 flex gap-3.5 flex-wrap">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 bg-ink text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-transform"
              >
                Start a project
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2.5 border border-line px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-card transition-colors"
              >
                View my work
              </a>
            </div>
          </Reveal>
        </div>

        {/* Yellow stat band */}
        <Reveal>
          <div className="mt-14 rounded-xl2 bg-accent min-h-[360px] p-12 flex flex-col justify-between overflow-hidden">
            <p className="text-[12.5px] tracking-[0.18em] uppercase font-medium text-[#5a5535]">
              Shipping production web at scale
            </p>
            <div>
              <div className="font-serif font-semibold tracking-[-0.02em] leading-none text-[clamp(40px,7vw,96px)]">
                React &middot; Next.js &middot; AWS
              </div>
              <div className="mt-8 flex gap-[50px] flex-wrap">
                {profile.stats.map((s) => (
                  <div key={s.label}>
                    <div className="font-serif font-semibold tracking-[-0.02em] text-[clamp(30px,4vw,46px)]">
                      {s.value}
                    </div>
                    <div className="text-[14px] text-[#4a4a3a]">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
