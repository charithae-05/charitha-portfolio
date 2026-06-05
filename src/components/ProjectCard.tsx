import type { Project } from "@/data/content";
import Reveal from "./Reveal";

const frameTheme: Record<Project["theme"], string> = {
  dark: "bg-[#0d0d0d]",
  forest: "bg-forest",
  sand: "bg-[#ece8df]",
  yellow: "bg-accent",
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Reveal className="mb-[90px] last:mb-0">
      {/* Themed frame holding a browser-style mockup */}
      <div
        className={`rounded-xl2 overflow-hidden min-h-[460px] grid place-items-center p-12 ${frameTheme[project.theme]}`}
      >
        <div className="bg-white rounded-[14px] w-full max-w-[640px] shadow-[0_30px_70px_rgba(0,0,0,0.25)] overflow-hidden">
          <div className="flex gap-[7px] px-4 py-3.5 border-b border-neutral-100">
            <i className="w-[11px] h-[11px] rounded-full bg-neutral-200" />
            <i className="w-[11px] h-[11px] rounded-full bg-neutral-200" />
            <i className="w-[11px] h-[11px] rounded-full bg-neutral-200" />
          </div>
          <div className="p-[30px]">
            <h4 className="font-serif text-[30px] font-semibold mb-2">{project.mock.title}</h4>
            <p className="text-muted text-[14px]">{project.mock.sub}</p>
            <div className="mt-[22px] grid gap-2.5">
              <span className="block h-[11px] rounded-md bg-neutral-100" />
              <span className="block h-[11px] rounded-md bg-neutral-100 w-4/5" />
              <span className="block h-[11px] rounded-md bg-neutral-100 w-[55%]" />
            </div>
            <div className="mt-[22px] flex gap-2 flex-wrap">
              {project.mock.chips.map((c) => (
                <b key={c} className="text-[11px] font-medium px-3 py-1.5 rounded-full bg-accent-soft text-neutral-600">
                  {c}
                </b>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project info */}
      <div className="mt-[30px] grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-[30px] md:items-end">
        <h3 className="font-serif font-semibold tracking-[-0.01em] text-[clamp(34px,5vw,52px)]">
          {project.title}
        </h3>
        <div>
          <p className="text-neutral-700 text-[17px] max-w-[560px]">{project.blurb}</p>
          <div className="mt-3.5 flex gap-2 flex-wrap">
            {project.tags.map((t) => (
              <b key={t} className="text-[12.5px] font-medium text-neutral-600 border border-line px-3.5 py-1.5 rounded-full">
                {t}
              </b>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-[15px] font-medium text-ink underline underline-offset-4 decoration-neutral-300 hover:decoration-ink transition-colors"
            >
              View live
              <span aria-hidden>↗</span>
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}
