"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "../ui/container";

export default function Hero({
  name,
  role,
  intro,
  profilePhoto,
}: {
  name: string;
  role: string;
  intro: string;
  profilePhoto?: string;
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.2),transparent_45%),radial-gradient(circle_at_10%_40%,rgba(6,182,212,0.18),transparent_35%)]" />
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-accent">{role}</p>
            <h1 className="text-4xl font-bold tracking-tight md:text-6xl">{name}</h1>
            <p className="mt-6 text-lg leading-8 text-muted md:text-xl">{intro}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="rounded-3xl border border-white/15 bg-card/70 p-4 shadow-xl">
              <div className="relative aspect-square overflow-hidden rounded-2xl">
                <Image src={profilePhoto || "/next.svg"} alt={`${name} profile`} fill className="object-cover" />
              </div>
              <p className="mt-4 text-sm text-muted">
                Add or update your profile picture in Hygraph: <strong>Profile → profilePhoto</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
