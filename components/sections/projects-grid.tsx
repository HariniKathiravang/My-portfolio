import Image from "next/image";
import type { Project } from "@/lib/hygraph/types";
import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Projects" subtitle="All projects are loaded dynamically from Hygraph CMS." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="group overflow-hidden rounded-2xl border border-white/15 bg-card/80 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image?.url || "/globe.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((item) => (
                    <span key={`${project.id}-${item}`} className="rounded-full border border-white/15 px-3 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      Live Demo
                    </a>
                  ) : null}
                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
                      Source
                    </a>
                  ) : null}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
