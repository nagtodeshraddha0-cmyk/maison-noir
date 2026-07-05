"use client";

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

import Reveal from "@/components/motion/Reveal";
import Magnetic from "@/components/motion/Magnetic";

const links = [
  {
    title: "Story",
    href: "#story",
  },
  {
    title: "Coffee",
    href: "#signature-coffee",
  },
  {
    title: "Desserts",
    href: "#desserts",
  },
  {
    title: "Interior",
    href: "#interior",
  },
  {
    title: "Reservation",
    href: "#reservation",
  },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, 0]
  );

  return (
    <footer
      ref={footerRef}
      className="relative overflow-hidden bg-[#1F1D1C] py-44 text-white"
    >

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-25%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#A67C52]/15 blur-[220px]" />

      </div>

      {/* Background Typography */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <h2 className="select-none font-serif text-[20vw] uppercase tracking-[0.08em] text-white/[0.025]">

          Maison

        </h2>

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div
          style={{
            y: titleY,
          }}
        >

          <Reveal>

            <p className="text-center text-xs uppercase tracking-[0.55em] text-[#CDA67B]">

              Maison Noir

            </p>

          </Reveal>

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[4rem] leading-[0.95] text-white md:text-[6rem] xl:text-[8rem]">

              Coffee.

              <br />

              <span className="italic text-[#CDA67B]">

                Crafted.

              </span>

            </h2>

          </Reveal>

          <Reveal>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-white/70">

              Where coffee becomes ritual,
              and every detail is designed
              without compromise.

            </p>

          </Reveal>

        </motion.div>
                {/* Navigation */}

                <div className="mt-28 flex flex-wrap justify-center gap-x-12 gap-y-8">

{links.map((link) => (

  <Magnetic key={link.title}>

    <motion.a
      href={link.href}
      whileHover={{
        y: -6,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group relative text-sm uppercase tracking-[0.35em] text-white/60 transition-colors hover:text-white"
    >

      {link.title}

      <span className="absolute -bottom-3 left-0 h-px w-0 bg-[#CDA67B] transition-all duration-500 group-hover:w-full" />

    </motion.a>

  </Magnetic>

))}

</div>

{/* Divider */}

<div className="mt-28 flex items-center justify-center gap-8">

<div className="h-px w-28 bg-white/10" />

<div className="h-2 w-2 rounded-full bg-[#CDA67B]" />

<div className="h-px w-28 bg-white/10" />

</div>

{/* Editorial Statement */}

<div className="mt-28 grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

<Reveal>

  <div>

    <p className="text-xs uppercase tracking-[0.45em] text-[#CDA67B]">

      Final Thought

    </p>

    <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-white xl:text-6xl">

      Luxury Lives
      In The
      Details.

    </h3>

  </div>

</Reveal>

<Reveal>

  <p className="text-[17px] leading-9 text-white/70">

    Every visit to Maison Noir is built on
    thoughtful craftsmanship, timeless
    design and genuine hospitality—
    creating moments that linger long
    after the final cup.

  </p>

</Reveal>

</div>
        {/* Feature Cards */}

        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "2026",
              label: "Founded",
            },
            {
              value: "100%",
              label: "Ethical",
            },
            {
              value: "Paris",
              label: "Home",
            },
            {
              value: "∞",
              label: "Craft",
            },
          ].map((item) => (

            <motion.div
              key={item.label}
              whileHover={{
                y: -10,
              }}
              transition={{
                duration: 0.3,
              }}
              className="rounded-[30px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#CDA67B]">

                {item.label}

              </p>

              <h4 className="mt-6 font-serif text-5xl text-white">

                {item.value}

              </h4>

            </motion.div>

          ))}

        </div>

        {/* Signature */}

        <Reveal>

          <div className="mx-auto mt-36 max-w-4xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-[#CDA67B]">

              Maison Noir Signature

            </p>

            <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-white md:text-6xl">

              Thank You
              For Visiting
              Maison Noir.

            </h3>

          </div>

        </Reveal>
                {/* CTA */}

                <Reveal>

<div className="mt-24 flex justify-center">

  <Magnetic>

    <motion.a
      href="#reservation"
      whileHover={{
        scale: 1.05,
        y: -5,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="inline-flex items-center rounded-full bg-white px-12 py-5 text-xs uppercase tracking-[0.35em] text-[#1F1D1C] shadow-[0_30px_80px_rgba(255,255,255,.12)] transition-colors hover:bg-[#CDA67B] hover:text-white"
    >
      Reserve Your Experience
    </motion.a>

  </Magnetic>

</div>

</Reveal>

{/* Divider */}

<div className="mt-28 h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />

{/* Bottom Bar */}

<div className="mt-12 flex flex-col items-center justify-between gap-8 text-center lg:flex-row">

<p className="text-xs uppercase tracking-[0.3em] text-white/35">

  Crafted Without Compromise

</p>

<p className="text-xs uppercase tracking-[0.3em] text-white/35">

  Paris • France

</p>

<p className="text-xs uppercase tracking-[0.3em] text-white/35">

  Since 2026

</p>

</div>
        {/* Copyright */}

        <div className="mt-20 flex flex-col items-center gap-6">

          <div className="h-px w-40 bg-white/10" />

          <p className="text-center text-xs uppercase tracking-[0.35em] text-white/25">

            © {new Date().getFullYear()} Maison Noir.
            All Rights Reserved.

          </p>

        </div>

      </div>

      {/* Bottom Glow */}

      <div className="pointer-events-none absolute bottom-[-280px] left-1/2 h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-[#A67C52]/10 blur-[240px]" />

      {/* Film Grain */}

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

    </footer>
  );
}