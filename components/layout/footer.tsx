import Container from "../ui/container";
import type { SocialLink } from "@/lib/sanity/types";

export default function Footer({ socialLinks }: { socialLinks: SocialLink[] }) {
  return (
    <footer className="border-t py-8">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-sm text-muted">© {new Date().getFullYear()} All rights reserved.</p>
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-muted transition hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
    </footer>
  );
}
