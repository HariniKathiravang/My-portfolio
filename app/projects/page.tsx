import ProjectsGrid from "@/components/sections/projects-grid";
import { fetchHygraphSafe } from "@/lib/hygraph/client";
import { allProjectsQuery } from "@/lib/hygraph/queries";
import type { Project } from "@/lib/hygraph/types";

export default async function ProjectsPage() {
  const projectsData = await fetchHygraphSafe<{ projects: Project[] }>(allProjectsQuery, { projects: [] });
  const projects = projectsData.projects || [];
  return <ProjectsGrid projects={projects} />;
}
