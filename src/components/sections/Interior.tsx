"use client";

import Image from "next/image";
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

const gallery = [
  {
    title: "Main Lounge",
    image: "/images/interior-1.jpg",
    tag: "Arrival",
  },
  {
    title: "Coffee Bar",
    image: "/images/interior-2.jpg",
    tag: "Craft",
  },
  {
    title: "Private Corner",
    image: "/images/interior-3.jpg",
    tag: "Silence",
  },
  {
    title: "Dessert Counter",
    image: "/images/interior-4.jpg",
    tag: "Pâtisserie",
  },
  {
    title: "Outdoor Seating",
    image: "/images/interior-5.jpg",
    tag: "Garden",
  },
  {
    title: "Chef's Table",
    image: "/images/interior-6.jpg",
    tag: "Experience",
  },
];

export default function Interior() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [120, -120]
  );

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -240]
  );

  const galleryY = useSpring(
    useTransform(scrollYProgress, [0, 1], [140, -50]),
    {
      stiffness: 120,
      damping: 22,
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

        <div className="absolute left-[-15%] top-24 h-[700px] w-[700px] rounded-full bg-[#E8D6C5]/40 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[650px] w-[650px] rounded-full bg-[#D9C1A6]/30 blur-[180px]" />

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

        <motion.div
          style={{
            y: titleY,
          }}
        >

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

          <p className="mx-auto mt-25 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">

            Every wall, texture, material and ray of light
            exists for one purpose —
            to slow the world down.

          </p>

        </Reveal>
                {/* Editorial Gallery */}

                <motion.div
          style={{
            y: galleryY,
          }}
          className="mt-32 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 auto-rows-[260px]"
        >

          {gallery.map((item, index) => (

            <Parallax
              key={item.title}
              offset={60}
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.08,
                }}
                className={`${
                  index === 0
                    ? "lg:col-span-7 lg:row-span-2"
                    : index === 1
                    ? "lg:col-span-5"
                    : index === 2
                    ? "lg:col-span-5"
                    : index === 3
                    ? "lg:col-span-4"
                    : index === 4
                    ? "lg:col-span-4"
                    : "lg:col-span-4"
                }`}
              >

                <TiltCard>

                  <div className="group relative h-full overflow-hidden rounded-[42px] shadow-[0_60px_150px_rgba(0,0,0,.15)]">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                    />

                    {/* Cinematic Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />

                    {/* Shine */}

                    <motion.div
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "220%" }}
                      transition={{ duration: 1.5 }}
                      className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-2xl"
                    />

                    {/* Floating Tag */}

                    <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

                      <p className="text-[10px] uppercase tracking-[0.45em] text-white">

                        {item.tag}

                      </p>

                    </div>
                                        {/* Vertical Branding */}

                                        <div className="absolute right-7 top-8">

<p
  style={{
    writingMode: "vertical-rl",
  }}
  className="text-[10px] uppercase tracking-[0.45em] text-white/40"
>

  Maison Noir

</p>

</div>

{/* Bottom Content */}

<div className="absolute inset-x-0 bottom-0 p-8">

<p className="text-[10px] uppercase tracking-[0.4em] text-[#E8D6C5]">

  Curated Space

</p>

<h3 className="mt-3 font-serif text-4xl leading-none text-white">

  {item.title}

</h3>

</div>

</div>

</TiltCard>

</motion.div>

</Parallax>

))}

</motion.div>

{/* Editorial Statement */}

<div className="mt-40 grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

<Reveal>

<div>

<p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

Spatial Design

</p>

<h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

Luxury
Lives In
Quiet Details.

</h3>

</div>

</Reveal>

<Reveal>

<p className="text-[17px] leading-9 text-[#5D564F]">

Inspired by European cafés and modern
minimalism, Maison Noir balances natural
light, handcrafted materials and generous
negative space to create an atmosphere
where conversation slows and every visit
feels intentional.

</p>

</Reveal>

</div>
        {/* Feature Grid */}

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

    Maison Noir Experience

  </p>

  <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">

    Designed
    For Quiet
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