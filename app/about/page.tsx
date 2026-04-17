import Container from "@/components/ui/container";
import Timeline from "@/components/sections/timeline";
import { fetchHygraphSafe } from "@/lib/hygraph/client";
import { educationQuery, experienceQuery, profileQuery } from "@/lib/hygraph/queries";
import type { Education, Experience, Profile } from "@/lib/hygraph/types";

function formatRange(start: string, end?: string) {
  const startYear = new Date(start).getFullYear();
  const endYear = end ? new Date(end).getFullYear() : "Present";
  return `${startYear} - ${endYear}`;
}

export default async function AboutPage() {
  const [profileData, experienceData, educationData] = await Promise.all([
    fetchHygraphSafe<{ profiles: Profile[] }>(profileQuery, { profiles: [] }),
    fetchHygraphSafe<{ experiences: Experience[] }>(experienceQuery, { experiences: [] }),
    fetchHygraphSafe<{ educations: Education[] }>(educationQuery, { educations: [] }),
  ]);
  const profile = profileData.profiles[0] || null;
  const experience = experienceData.experiences || [];
  const education = educationData.educations || [];

  const experienceItems = experience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    date: formatRange(item.startDate, item.current ? undefined : item.endDate || undefined),
    description: item.description || undefined,
  }));

  const educationItems = education.map((item) => ({
    id: item.id,
    title: item.degree,
    subtitle: `${item.institution}${item.field ? ` - ${item.field}` : ""}`,
    date: formatRange(item.startDate, item.endDate || undefined),
    description: item.description || undefined,
  }));

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <div className="mt-8 max-w-3xl">
        {(profile?.bio || "")
          .split("\n")
          .filter(Boolean)
          .map((paragraph) => (
            <p key={paragraph} className="mb-4 leading-8 text-muted">
              {paragraph}
            </p>
          ))}
      </div>
      <Timeline title="Experience" items={experienceItems} />
      <Timeline title="Education" items={educationItems} />
    </Container>
  );
}
