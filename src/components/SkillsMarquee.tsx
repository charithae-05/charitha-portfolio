import { skills } from "@/data/content";

export default function SkillsMarquee() {
  // Duplicate the list so the marquee loops seamlessly.
  const loop = [...skills, ...skills];

  return (
    <div className="py-6 border-y border-line overflow-hidden" aria-label="Skills">
      <div className="flex gap-3.5 w-max animate-marquee hover:[animation-play-state:paused]">
        {loop.map((s, i) => (
          <span
            key={`${s.label}-${i}`}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-[15px] border ${
              s.highlight
                ? "bg-accent border-accent text-[#1a1a1a]"
                : "bg-white border-line text-neutral-700"
            }`}
          >
            {s.label}
          </span>
        ))}
      </div>
    </div>
  );
}
