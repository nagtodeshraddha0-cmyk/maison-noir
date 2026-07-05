"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef } from "react";

import Reveal from "@/components/motion/Reveal";
import TiltCard from "@/components/motion/TiltCard";
import Parallax from "@/components/motion/Parallax";

export default function Location() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -60]
  );

  const mapY = useSpring(
    useTransform(scrollYProgress, [0, 1], [120, -60]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="location"
      className="relative overflow-hidden bg-[#EFE6DA] py-52"
    >

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-15%] top-24 h-[650px] w-[650px] rounded-full bg-[#E7D6C4]/40 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[620px] w-[620px] rounded-full bg-[#D8BEA1]/35 blur-[180px]" />

      </div>

      {/* Background Word */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-black/[0.03]">

          Visit

        </h2>

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div style={{ y: titleY }}>

          <Reveal>

            <p className="text-center text-xs uppercase tracking-[0.55em] text-[#A67C52]">

              Visit Maison Noir

            </p>

          </Reveal>

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-[#2C2A29] md:text-[5.5rem] xl:text-[7rem]">

              Find Your

              <br />

              <span className="italic text-[#A67C52]">

                Quiet Corner.

              </span>

            </h2>

          </Reveal>

          <Reveal>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">

              A destination where architecture,
              craftsmanship and conversation come
              together in perfect harmony.

            </p>

          </Reveal>

        </motion.div>
                {/* Editorial Layout */}

                <div className="mt-32 grid items-center gap-24 lg:grid-cols-[.95fr_1.05fr]">

{/* Information */}

<Reveal>

  <div>

    <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

      Destination

    </p>

    <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

      Designed
      To Be
      Discovered.

    </h3>

    <p className="mt-10 text-[17px] leading-9 text-[#5D564F]">

      Hidden away from the city's rhythm,
      Maison Noir invites guests into an
      atmosphere where exceptional coffee,
      thoughtful architecture and timeless
      hospitality become one experience.

    </p>

    <div className="mt-14 space-y-8">

      {[
        {
          title: "Address",
          value: "128 Maison Street\nParis, France",
        },
        {
          title: "Opening Hours",
          value: "Monday – Sunday\n08:00 — 23:00",
        },
        {
          title: "Contact",
          value: "hello@maisonnoir.com",
        },
      ].map((item) => (

        <motion.div
          key={item.title}
          whileHover={{
            x: 8,
          }}
          className="border-b border-[#D8C8B7] pb-6"
        >

          <p className="text-[10px] uppercase tracking-[0.4em] text-[#A67C52]">

            {item.title}

          </p>

          <p className="mt-4 whitespace-pre-line text-xl leading-9 text-[#2C2A29]">

            {item.value}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</Reveal>

{/* Map Card */}

<Parallax offset={70}>

  <motion.div
    style={{
      y: mapY,
    }}
  >

    <TiltCard>

      <div className="group relative overflow-hidden rounded-[44px] border border-[#D8CCBE] bg-[#E7D6C4] shadow-[0_70px_180px_rgba(0,0,0,.12)]">

        <div className="flex h-[760px] items-center justify-center">

          <motion.div
            initial={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
            className="text-center"
          >
                                <p className="text-[10px] uppercase tracking-[0.45em] text-[#A67C52]">

Interactive Map

</p>

<h3 className="mt-6 font-serif text-5xl text-[#2C2A29]">

Paris,
France

</h3>

<p className="mx-auto mt-8 max-w-sm leading-8 text-[#5D564F]">

A custom interactive map will
live here, allowing guests to
explore Maison Noir and its
surrounding neighborhood.

</p>

</motion.div>

{/* Decorative Rings */}

<div className="pointer-events-none absolute inset-0 flex items-center justify-center">

<div className="h-[420px] w-[420px] rounded-full border border-[#A67C52]/20" />

<div className="absolute h-[280px] w-[280px] rounded-full border border-[#A67C52]/20" />

<motion.div
animate={{
  scale: [1, 1.08, 1],
}}
transition={{
  repeat: Infinity,
  duration: 4,
}}
className="absolute h-5 w-5 rounded-full bg-[#A67C52]"
/>

</div>

</div>

</div>

</TiltCard>

</motion.div>

</Parallax>

</div>

{/* Editorial Statement */}

<div className="mt-40 grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

<Reveal>

<div>

<p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

Location

</p>

<h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

Every Journey
Ends With
Great Coffee.

</h3>

</div>

</Reveal>

<Reveal>

<p className="text-[17px] leading-9 text-[#5D564F]">

Maison Noir isn't simply a café.
It's a destination designed for
slow mornings, meaningful
conversations and unforgettable
evenings.

</p>

</Reveal>

</div>
        {/* Feature Grid */}

        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "7",
              label: "Days Open",
            },
            {
              value: "08:00",
              label: "First Pour",
            },
            {
              value: "23:00",
              label: "Last Seating",
            },
            {
              value: "Paris",
              label: "Destination",
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
              className="rounded-[30px] border border-[#D8C8B7] bg-white/70 p-8 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,.06)]"
            >

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#A67C52]">

                {item.label}

              </p>

              <h4 className="mt-6 font-serif text-4xl text-[#2C2A29]">

                {item.value}

              </h4>

            </motion.div>

          ))}

        </div>

        {/* Divider */}

        <div className="mt-32 flex items-center justify-center gap-8">

          <div className="h-px w-28 bg-[#D8C8B7]" />

          <div className="h-2 w-2 rounded-full bg-[#A67C52]" />

          <div className="h-px w-28 bg-[#D8C8B7]" />

        </div>
                {/* Closing Editorial */}

                <Reveal>

<div className="mx-auto mt-24 max-w-5xl text-center">

  <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

    Maison Noir

  </p>

  <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">

    We Hope
    The Journey
    Is Worth It.

  </h3>

  <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5D564F]">

    Whether you're stopping for a quiet morning,
    celebrating a special evening or simply escaping
    the city's rhythm, Maison Noir is waiting with
    craftsmanship, warmth and timeless hospitality.

  </p>

  <motion.button
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="mt-14 rounded-full bg-[#2C2A29] px-12 py-5 text-xs uppercase tracking-[0.35em] text-white shadow-[0_30px_80px_rgba(0,0,0,.15)] transition-colors hover:bg-[#A67C52]"
  >
    Plan Your Visit
  </motion.button>

</div>

</Reveal>

</div>

{/* Bottom Glow */}

<div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#E8D6C5]/35 blur-[220px]" />

{/* Film Grain */}

<div
className="pointer-events-none absolute inset-0 opacity-[0.025]"
style={{
backgroundImage:
  "radial-gradient(circle, #000 1px, transparent 1px)",
backgroundSize: "18px 18px",
}}
/>

</section>
);
}