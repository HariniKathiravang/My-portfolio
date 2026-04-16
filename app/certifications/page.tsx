import CertificationsList from "@/components/sections/certifications-list";
import { getClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { certificationsQuery } from "@/lib/sanity/queries";
import type { Certification } from "@/lib/sanity/types";

export default async function CertificationsPage() {
  const certifications = isSanityConfigured ? await getClient().fetch<Certification[]>(certificationsQuery) : [];
  return <CertificationsList certifications={certifications} />;
}
