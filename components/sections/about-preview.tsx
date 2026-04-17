import Link from "next/link";
import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

export default function AboutPreview({ text }: { text: string }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="About" />
        <div className="max-w-3xl rounded-3xl border border-white/15 bg-card/60 p-6 md:p-8">
          <p className="leading-8 text-muted">{text || "Add your about summary from Hygraph."}</p>
          <Link href="/about" className="mt-6 inline-block text-sm font-medium text-accent">
            Read full bio →
          </Link>
        </div>
      </Container>
    </section>
  );
}
