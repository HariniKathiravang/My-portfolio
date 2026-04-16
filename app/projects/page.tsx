import ProjectsGrid from "@/components/sections/projects-grid";
import { getClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { allProjectsQuery } from "@/lib/sanity/queries";
import type { Project } from "@/lib/sanity/types";

export default async function ProjectsPage() {
  const projects = isSanityConfigured ? await getClient().fetch<Project[]>(allProjectsQuery) : [];
  return <ProjectsGrid projects={projects} />;
}
