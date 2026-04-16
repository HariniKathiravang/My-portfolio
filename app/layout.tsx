import type { Metadata } from "next";
import "./globals.css";
import Providers from "./providers";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { getClient } from "@/lib/sanity/client";
import { isSanityConfigured } from "@/lib/sanity/env";
import { profileQuery } from "@/lib/sanity/queries";
import type { Profile } from "@/lib/sanity/types";

export async function generateMetadata(): Promise<Metadata> {
  const profile = isSanityConfigured ? await getClient().fetch<Profile | null>(profileQuery) : null;

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
  const profile = isSanityConfigured ? await getClient().fetch<Profile | null>(profileQuery) : null;

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
