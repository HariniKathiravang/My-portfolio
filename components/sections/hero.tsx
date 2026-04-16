"use client";

import { motion } from "framer-motion";
import Container from "../ui/container";

export default function Hero({ name, role, intro }: { name: string; role: string; intro: string }) {
  return (
    <section className="py-24 md:py-32">
      <Container>
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
      </Container>
    </section>
  );
}
