export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs uppercase tracking-[0.24em] text-accent">Portfolio Section</p>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      {subtitle ? <p className="mt-2 max-w-2xl text-sm text-muted">{subtitle}</p> : null}
    </div>
  );
}