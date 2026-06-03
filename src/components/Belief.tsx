import { belief } from "@/data/content";
import Reveal from "./Reveal";

export default function Belief() {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal>
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium">
            I Believe
          </p>
          <p className="font-serif font-medium tracking-[-0.01em] leading-[1.25] max-w-[980px] mx-auto mt-4 text-[clamp(30px,5vw,56px)]">
            {belief}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
