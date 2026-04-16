import ContactForm from "@/components/sections/contact-form";
import Container from "@/components/ui/container";
import SectionHeading from "@/components/ui/section-heading";

export default function ContactPage() {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Contact" subtitle="Send a message through the form below." />
        <ContactForm />
      </Container>
    </section>
  );
}
