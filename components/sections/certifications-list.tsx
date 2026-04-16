import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";
import type { Certification } from "@/lib/sanity/types";

export default function CertificationsList({ certifications }: { certifications: Certification[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Certifications" />
        <div className="space-y-4">
          {certifications.map((cert) => (
            <article key={cert.id} className="rounded-2xl border bg-card p-5">
              <h3 className="text-lg font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted">
                {cert.issuer} - {new Date(cert.issueDate).toLocaleDateString(undefined, { year: "numeric", month: "short" })}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
