import Container from "../ui/container";
import SectionHeading from "../ui/section-heading";
import type { Skill } from "@/lib/hygraph/types";

export default function SkillsPreview({ skills }: { skills: Skill[] }) {
  return (
    <section className="py-16">
      <Container>
        <SectionHeading title="Skills" />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span key={skill.id} className="rounded-full border border-white/15 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 px-4 py-2 text-sm text-muted">
              {skill.name}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
