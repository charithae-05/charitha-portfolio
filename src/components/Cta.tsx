import { profile } from "@/data/content";
import Reveal from "./Reveal";

export default function Cta() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal>
          <div className="bg-accent rounded-xl3 text-center px-8 py-[86px]">
            <p className="text-[12.5px] tracking-[0.18em] uppercase font-medium text-[#5a5535]">
              Let&apos;s build something great
            </p>
            <h2 className="font-serif font-semibold leading-[1.05] tracking-[-0.02em] max-w-[880px] mx-auto mt-3 mb-4 text-[clamp(34px,5.5vw,68px)]">
              Have a project or role in mind? Let&apos;s talk.
            </h2>
            <p className="text-[18px] text-[#3a3a30] max-w-[560px] mx-auto mb-7">
              Whether it&apos;s a fast marketing site, a React app, or a front-end role on your team — I&apos;d love to hear about it.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2.5 bg-ink text-white px-6 py-3.5 rounded-full text-[15px] font-medium hover:-translate-y-0.5 transition-transform"
              >
                Email me
              </a>
              <a
                href={profile.phoneHref}
                className="inline-flex items-center gap-2.5 border border-[#d8cf7a] px-6 py-3.5 rounded-full text-[15px] font-medium hover:bg-accent-soft transition-colors"
              >
                {profile.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
