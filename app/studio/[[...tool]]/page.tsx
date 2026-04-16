import { NextStudio } from "next-sanity/studio";
import config from "@/sanity/config";
import { isSanityConfigured } from "@/lib/sanity/env";

export const dynamic = "force-static";

export default function StudioPage() {
  if (!isSanityConfigured) {
    return <div className="p-6">Set NEXT_PUBLIC_SANITY_PROJECT_ID to enable Sanity Studio.</div>;
  }

  return <NextStudio config={config} />;
}
