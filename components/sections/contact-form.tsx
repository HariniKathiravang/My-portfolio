"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    setLoading(true);
    setStatus(null);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setStatus(data.message);
    setLoading(false);
  }

  return (
    <form action={handleSubmit} className="mx-auto max-w-2xl space-y-4 rounded-2xl border bg-card p-6">
      <input name="name" placeholder="Your name" className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none" required />
      <input name="email" type="email" placeholder="Your email" className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none" required />
      <textarea
        name="message"
        placeholder="Your message"
        rows={6}
        className="w-full rounded-xl border bg-transparent px-4 py-3 outline-none"
        required
      />
      <button type="submit" disabled={loading} className="rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white disabled:opacity-60">
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status ? <p className="text-sm text-muted">{status}</p> : null}
    </form>
  );
}
