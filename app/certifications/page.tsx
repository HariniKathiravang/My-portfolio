import CertificationsList from "@/components/sections/certifications-list";
import { fetchHygraphSafe } from "@/lib/hygraph/client";
import { certificationsQuery } from "@/lib/hygraph/queries";
import type { Certification } from "@/lib/hygraph/types";

export default async function CertificationsPage() {
  const certificationsData = await fetchHygraphSafe<{ certifications: Certification[] }>(certificationsQuery, {
    certifications: [],
  });
  const certifications = certificationsData.certifications || [];
  return <CertificationsList certifications={certifications} />;
}
