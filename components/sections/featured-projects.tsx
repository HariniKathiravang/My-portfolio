import Image from "next/image";
import Link from "next/link";
import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";
import type { Project } from "@/lib/sanity/types";
import { urlFor } from "@/lib/sanity/image";

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Featured Projects" />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-2xl border bg-card">
              <div className="relative aspect-[16/10]">
                <Image src={urlFor(project.image).width(800).height(500).url()} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
        <Link href="/projects" className="mt-8 inline-block text-sm text-accent">
          View all projects →
        </Link>
      </Container>
    </section>
  );
}
