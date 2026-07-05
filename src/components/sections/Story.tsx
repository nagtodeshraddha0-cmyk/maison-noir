"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Story() {
  return (
    <section id="story" className="relative bg-[#F7F3EE] py-40 overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#E7D6C4]/40 blur-[140px]" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-24 px-6 lg:grid-cols-2 lg:px-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-[#A67C52]">
            Our Story
          </p>

          <h2 className="font-serif text-5xl leading-[1.05] text-[#2C2A29] md:text-6xl lg:text-7xl">
            Where Authenticity
            <br />
            Becomes Ritual.
          </h2>

          <div className="mt-10 space-y-7 text-[17px] leading-9 text-[#5D564F]">
            <p>
              Maison Noir was created from obsession — not with coffee, but with perfection itself.
              Every detail exists to slow time and elevate the everyday into ritual.
            </p>

            <p>
              From carefully sourced beans to architectural interiors inspired by European cafés,
              everything is designed to remove noise and amplify experience.
            </p>

            <p>
              We don’t serve coffee. We design moments that happen to taste like coffee.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-14 flex gap-14">
            <div>
              <h3 className="font-serif text-5xl text-[#A67C52]">100%</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#5D564F]">
                Ethical Sourcing
              </p>
            </div>

            <div>
              <h3 className="font-serif text-5xl text-[#A67C52]">2026</h3>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[#5D564F]">
                Founded
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative"
        >
          {/* Glow */}
          <div className="absolute -inset-8 rounded-[50px] bg-[#E7D6C4] blur-[120px] opacity-60" />

          {/* Image */}
          <div className="relative h-[650px] w-full overflow-hidden rounded-[40px] shadow-[0_60px_140px_rgba(0,0,0,0.2)]">
            <Image
              src="/images/story.jpg"
              alt="Maison Noir Story"
              fill
              className="object-cover"
            />
          </div>

          {/* Floating Philosophy Card */}
          <div className="absolute -bottom-10 -left-10 rounded-3xl border border-white/40 bg-white/70 p-8 backdrop-blur-xl shadow-xl">

            <p className="text-xs uppercase tracking-[0.3em] text-[#A67C52]">
              Philosophy
            </p>

            <h4 className="mt-3 font-serif text-2xl text-[#2C2A29]">
              Luxury is
              <br />
              silence made visible.
            </h4>

          </div>

        </motion.div>

      </div>
    </section>
  );
}