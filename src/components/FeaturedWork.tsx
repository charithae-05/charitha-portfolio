import { projects } from "@/data/content";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function FeaturedWork() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto w-full max-w-content px-7">
        <Reveal className="mb-10">
          <p className="text-[12.5px] tracking-[0.18em] uppercase text-muted font-medium">
            Featured Work
          </p>
        </Reveal>
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
