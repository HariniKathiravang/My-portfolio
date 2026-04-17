import AboutPreview from "@/components/sections/about-preview";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import SkillsPreview from "@/components/sections/skills-preview";
import { fetchHygraphSafe } from "@/lib/hygraph/client";
import { homePageQuery } from "@/lib/hygraph/queries";
import type { HomePageData, Profile, Project, Skill } from "@/lib/hygraph/types";

export default async function HomePage() {
  const data = await fetchHygraphSafe<{ profiles: Profile[]; projects: Project[]; skills: Skill[] }>(homePageQuery, {
    profiles: [],
    projects: [],
    skills: [],
  });

  const normalized: HomePageData = {
    profile: data.profiles[0] || null,
    featuredProjects: data.projects || [],
    skills: data.skills || [],
  };

  return (
    <>
      <Hero
        name={normalized.profile?.name || "Your Name"}
        role={normalized.profile?.role || "Your Role"}
        intro={normalized.profile?.shortIntro || "Add your intro from Hygraph CMS."}
        profilePhoto={normalized.profile?.profilePhoto?.url}
      />
      <AboutPreview text={normalized.profile?.shortIntro || ""} />
      <FeaturedProjects projects={normalized.featuredProjects || []} />
      <SkillsPreview skills={normalized.skills || []} />
    </>
  );
}
