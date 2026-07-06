"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

import Reveal from "@/components/motion/Reveal";

const gallery = [
  {
    title: "Main Lounge",
    image: "/images/interior-1.jpg",
    tag: "Arrival",
    span: "lg:col-span-7 lg:row-span-2",
  },
  {
    title: "Coffee Bar",
    image: "/images/interior-2.jpg",
    tag: "Craft",
    span: "lg:col-span-5",
  },
  {
    title: "Private Corner",
    image: "/images/interior-3.jpg",
    tag: "Silence",
    span: "lg:col-span-5",
  },
  {
    title: "Dessert Counter",
    image: "/images/interior-4.jpg",
    tag: "Pâtisserie",
    span: "lg:col-span-4",
  },
  {
    title: "Outdoor Seating",
    image: "/images/interior-5.jpg",
    tag: "Garden",
    span: "lg:col-span-4",
  },
  {
    title: "Chef's Table",
    image: "/images/interior-6.jpg",
    tag: "Experience",
    span: "lg:col-span-4",
  },
];

export default function Interior() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -220]);

  const titleY = useSpring(
    useTransform(scrollYProgress, [0, 1], [80, -80]),
    {
      stiffness: 120,
      damping: 24,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="interior"
      className="relative overflow-hidden bg-[#F7F3EE] py-52"
    >
      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-20 h-[650px] w-[650px] rounded-full bg-[#E8D6C5]/40 blur-[180px]" />

        <div className="absolute right-[-12%] bottom-0 h-[620px] w-[620px] rounded-full bg-[#DCC3A5]/30 blur-[180px]" />
      </div>

      {/* Background Typography */}

      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-black/[0.03]">
          Interior
        </h2>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <Reveal>
          <p className="text-center text-xs uppercase tracking-[0.55em] text-[#A67C52]">
            Interior
          </p>
        </Reveal>

        <motion.div style={{ y: titleY }}>
          <Reveal>
            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-[#2C2A29] md:text-[5.5rem] xl:text-[7rem]">
              Architecture
              <br />
              <span className="italic text-[#A67C52]">
                of Calm.
              </span>
            </h2>
          </Reveal>
        </motion.div>

        <Reveal>
          <p className="mx-auto mt-16 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">
            Every wall, texture, material and ray of light exists for one
            purpose — to slow the world down.
          </p>
        </Reveal>

        {/* Masonry Gallery */}

        <div className="mt-28 grid auto-rows-[260px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12">

          {gallery.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                y: 80,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}
              className={item.span}
            >
              <div className="group relative h-full overflow-hidden rounded-[42px] shadow-[0_45px_120px_rgba(0,0,0,.16)]">

                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1600ms] group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-white">
                    {item.tag}
                  </p>
                </div>

                <div className="absolute right-7 top-8">
                  <p
                    style={{ writingMode: "vertical-rl" }}
                    className="text-[10px] uppercase tracking-[0.45em] text-white/40"
                  >
                    Maison Noir
                  </p>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#E8D6C5]">
                    Curated Space
                  </p>

                  <h3 className="mt-3 font-serif text-4xl leading-none text-white">
                    {item.title}
                  </h3>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
                {/* Editorial Statement */}

                <div className="mt-40 grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

<Reveal>
  <div>

    <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">
      Spatial Design
    </p>

    <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">
      Luxury
      <br />
      Lives In
      <br />
      Quiet Details.
    </h3>

  </div>
</Reveal>

<Reveal>

  <p className="text-[17px] leading-9 text-[#5D564F]">

    Inspired by European cafés and modern minimalism,
    Maison Noir balances natural light, handcrafted
    materials and generous negative space to create an
    atmosphere where conversation slows and every visit
    feels intentional.

  </p>

</Reveal>

</div>

{/* Feature Cards */}

<div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

{[
  {
    value: "Natural",
    label: "Lighting",
  },
  {
    value: "Italian",
    label: "Stone",
  },
  {
    value: "Handmade",
    label: "Furniture",
  },
  {
    value: "Acoustic",
    label: "Comfort",
  },
].map((item) => (

  <motion.div
    key={item.label}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    transition={{
      duration: 0.25,
    }}
    className="rounded-[30px] border border-[#D8C8B7] bg-white/70 p-8 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,.08)]"
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
    Maison Noir Experience
  </p>

  <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">
    Designed
    <br />
    For Quiet
    <br />
    Conversations.
  </h3>

  <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5D564F]">

    Architecture is more than a backdrop.
    It shapes the rhythm of every visit,
    allowing coffee, conversation and
    craftsmanship to become the focus.

  </p>

  <motion.button
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="mt-14 rounded-full bg-[#2C2A29] px-10 py-5 text-xs uppercase tracking-[0.35em] text-white shadow-[0_25px_60px_rgba(0,0,0,.18)] transition-colors hover:bg-[#A67C52]"
  >
    Explore Maison Noir
  </motion.button>

</div>

</Reveal>
</div>

{/* Bottom Ambient Glow */}

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