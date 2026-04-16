import Container from "@/components/ui/container";
import PortableTextRenderer from "@/components/portable-text";
import Timeline from "@/components/sections/timeline";
import { getClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { educationQuery, experienceQuery, profileQuery } from "@/lib/sanity/queries";
import type { Education, Experience, Profile } from "@/lib/sanity/types";

function formatRange(start: string, end?: string) {
  const startYear = new Date(start).getFullYear();
  const endYear = end ? new Date(end).getFullYear() : "Present";
  return `${startYear} - ${endYear}`;
}

export default async function AboutPage() {
  if (!isSanityConfigured) {
    return (
      <Container className="py-16">
        <h1 className="text-4xl font-bold tracking-tight">About</h1>
        <p className="mt-6 text-muted">Add your Sanity environment variables to load profile, experience, and education.</p>
      </Container>
    );
  }

  const [profile, experience, education] = await Promise.all([
    getClient().fetch<Profile | null>(profileQuery),
    getClient().fetch<Experience[]>(experienceQuery),
    getClient().fetch<Education[]>(educationQuery),
  ]);

  const experienceItems = experience.map((item) => ({
    id: item.id,
    title: item.role,
    subtitle: item.company,
    date: formatRange(item.startDate, item.current ? undefined : item.endDate),
    description: item.description,
  }));

  const educationItems = education.map((item) => ({
    id: item.id,
    title: item.degree,
    subtitle: `${item.institution}${item.field ? ` - ${item.field}` : ""}`,
    date: formatRange(item.startDate, item.endDate),
    description: item.description,
  }));

  return (
    <Container className="py-16">
      <h1 className="text-4xl font-bold tracking-tight">About</h1>
      <div className="mt-8 max-w-3xl">
        <PortableTextRenderer value={profile?.bio || []} />
      </div>
      <Timeline title="Experience" items={experienceItems} />
      <Timeline title="Education" items={educationItems} />
    </Container>
  );
}
