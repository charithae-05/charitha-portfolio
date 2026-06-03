import { education, languages, certifications } from "@/data/content";
import Reveal from "./Reveal";

export default function EducationCerts() {
  return (
    <section className="py-20">
      <div className="mx-auto w-full max-w-content px-7 grid grid-cols-1 md:grid-cols-2 gap-[60px]">
        {/* Education + Languages */}
        <Reveal>
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium mb-10">
            Education
          </p>
          <div className="grid gap-4">
            {education.map((e) => (
              <div key={e.degree} className="border border-line rounded-2xl px-6 py-5 transition-colors hover:bg-card">
                <h4 className="text-[18px] font-semibold">{e.degree}</h4>
                <div className="text-muted text-[14px] mt-1">{e.sub}</div>
              </div>
            ))}
          </div>

          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium mt-10 mb-4">
            Languages
          </p>
          <div className="flex gap-2 flex-wrap">
            {languages.map((l) => (
              <span key={l} className="text-[13px] font-medium text-neutral-600 border border-line px-3.5 py-1.5 rounded-full">
                {l}
              </span>
            ))}
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
