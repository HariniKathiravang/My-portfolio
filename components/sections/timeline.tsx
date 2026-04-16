type TimelineItem = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description?: string;
};

export default function Timeline({ items, title }: { items: TimelineItem[]; title: string }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-6 space-y-6">
        {items.map((item) => (
          <div key={item.id} className="rounded-2xl border bg-card p-5">
            <div className="flex flex-col justify-between gap-2 md:flex-row">
              <div>
                <h3 className="text-lg font-medium">{item.title}</h3>
                <p className="text-sm text-muted">{item.subtitle}</p>
              </div>
              <p className="text-sm text-muted">{item.date}</p>
            </div>
            {item.description ? <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p> : null}
          </div>
        ))}
      </div>
    </section>
  );
}
