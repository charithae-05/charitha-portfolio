import { education, certifications } from "@/data/content";
import Reveal from "./Reveal";

export default function EducationCerts() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-content px-7 grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {/* Education (condensed) */}
        <Reveal>
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium mb-10">
            Education
          </p>
          <div className="border border-line rounded-2xl px-6 py-5 transition-colors hover:bg-card">
            <p className="text-[15px] text-neutral-700">{education}</p>
          </div>
        </Reveal>

        {/* Certifications */}
        <Reveal>
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium mb-10">
            Certifications
          </p>
          <div className="grid gap-4">
            {certifications.map((c) => (
              <div key={c} className="flex gap-3.5 items-start border border-line rounded-2xl px-6 py-5 transition-colors hover:bg-card">
                <span className="flex-none mt-1.5 w-[9px] h-[9px] rounded-full bg-accent border border-[#d9cf66]" />
                <p className="text-[15px] text-neutral-700">{c}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
