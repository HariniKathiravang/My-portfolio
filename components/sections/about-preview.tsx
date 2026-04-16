import Link from "next/link";
import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";

export default function AboutPreview({ text }: { text: string }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="About" />
        <div className="max-w-3xl">
          <p className="leading-8 text-muted">{text}</p>
          <Link href="/about" className="mt-6 inline-block text-sm font-medium text-accent">
            Read full bio →
          </Link>
        </div>
      </Container>
    </section>
  );
}
