import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";
import type { Certification } from "@/lib/hygraph/types";

export default function CertificationsList({ certifications }: { certifications: Certification[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Certifications" />
        <div className="space-y-4">
          {certifications.map((cert) => (
            <article key={cert.id} className="rounded-2xl border border-white/15 bg-card/70 p-5 shadow-sm">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} - {new Date(cert.issueDate).toLocaleDateString(undefined, { year: "numeric", month: "short" })}
              </p>
              {cert.credentialUrl ? (
                <a className="mt-3 inline-block text-sm text-accent hover:underline" href={cert.credentialUrl} target="_blank" rel="noreferrer">
                  View Credential
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
