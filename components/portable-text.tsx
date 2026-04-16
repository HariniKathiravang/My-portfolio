import { PortableText } from "@portabletext/react";

export default function PortableTextRenderer({ value }: { value: any[] }) {
  return (
    <div className="prose-custom">
      <PortableText value={value} />
    </div>
  );
}
