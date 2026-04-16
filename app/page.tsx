import AboutPreview from "@/components/sections/about-preview";
import FeaturedProjects from "@/components/sections/featured-projects";
import Hero from "@/components/sections/hero";
import SkillsPreview from "@/components/sections/skills-preview";
import { getClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { homePageQuery } from "@/lib/sanity/queries";
import type { HomePageData } from "@/lib/sanity/types";

export default async function HomePage() {
  const data = isSanityConfigured
    ? await getClient().fetch<HomePageData>(homePageQuery, {}, { next: { revalidate: 60 } })
    : { profile: null, featuredProjects: [], skills: [] };

  return (
    <>
      <Hero
        name={data.profile?.name || "Your Name"}
        role={data.profile?.role || "Your Role"}
        intro={data.profile?.shortIntro || "Add your intro from Sanity CMS."}
      />
      <AboutPreview text={data.profile?.shortIntro || ""} />
      <FeaturedProjects projects={data.featuredProjects || []} />
      <SkillsPreview skills={data.skills || []} />
    </>
  );
}
