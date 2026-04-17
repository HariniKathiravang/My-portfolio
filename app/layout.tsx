import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { fetchHygraphSafe } from "@/lib/hygraph/client";
import { profileQuery } from "@/lib/hygraph/queries";
import type { Profile } from "@/lib/hygraph/types";

export async function generateMetadata(): Promise<Metadata> {
  const profileData = await fetchHygraphSafe<{ profiles: Profile[] }>(profileQuery, { profiles: [] });
  const profile = profileData.profiles[0] || null;

  return {
    title: profile?.name ? `${profile.name} | Portfolio` : "Portfolio",
    description: profile?.shortIntro || "Personal portfolio website",
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const profileData = await fetchHygraphSafe<{ profiles: Profile[] }>(profileQuery, { profiles: [] });
  const profile = profileData.profiles[0] || null;

  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="min-h-screen bg-background text-foreground">
            <Header name={profile?.name || "Portfolio"} />
            <main>{children}</main>
            <Footer socialLinks={profile?.socialLinks || []} />
          </div>
        </Providers>
      </body>
    </html>
  );
}
