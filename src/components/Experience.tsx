import { experience } from "@/data/content";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal className="mb-10">
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium">
            Experience
          </p>
        </Reveal>

        <div className="border-t border-line">
          {experience.map((item) => (
            <Reveal key={item.title + item.when}>
              <div className="grid grid-cols-1 md:grid-cols-[230px_1fr] gap-[30px] py-[34px] border-b border-line">
                <div className="text-muted text-[14px]">{item.when}</div>
                <div>
                  <h4 className="text-[22px] font-semibold">{item.title}</h4>
                  <div className="text-neutral-700 text-[15px] mt-1 mb-3.5">{item.org}</div>
                  <ul className="grid gap-2">
                    {item.points.map((p, i) => (
                      <li key={i} className="relative pl-5 text-neutral-700 text-[15px]">
                        <span className="absolute left-0 top-[10px] w-[7px] h-[7px] rounded-full bg-accent border border-[#d9cf66]" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
