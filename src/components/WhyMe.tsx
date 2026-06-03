import { whyMe } from "@/data/content";
import Reveal from "./Reveal";

export default function WhyMe() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal className="mb-10">
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium">
            Why Work With Me
          </p>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          {whyMe.map((c) => (
            <Reveal key={c.title}>
              <div className="group bg-card rounded-xl2 p-9 min-h-[240px] flex flex-col transition-all hover:-translate-y-1.5 hover:bg-accent-soft">
                <div className="w-[46px] h-[46px] rounded-xl bg-accent grid place-items-center text-[22px] mb-5">
                  {c.icon}
                </div>
                <h4 className="text-[21px] font-semibold mb-2.5">{c.title}</h4>
                <p className="text-muted text-[15.5px]">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
