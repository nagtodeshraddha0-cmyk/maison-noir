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

const coffees = [
  {
    name: "Ethiopian Velvet",
    origin: "Ethiopia",
    roast: "Light",
    note: "Floral • Citrus • Honey",
    image: "/images/coffee-1.jpg",
    year: "2026",
  },
  {
    name: "Colombian Noir",
    origin: "Colombia",
    roast: "Medium",
    note: "Cocoa • Nutty • Smooth",
    image: "/images/coffee-2.jpg",
    year: "Reserve",
  },
  {
    name: "Brazilian Gold",
    origin: "Brazil",
    roast: "Dark",
    note: "Chocolate • Bold • Caramel",
    image: "/images/coffee-3.jpg",
    year: "Signature",
  },
];

export default function SignatureCoffee() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [100, -120]
  );

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -250]
  );

  const cardsY = useTransform(
    scrollYProgress,
    [0, 1],
    [180, -60]
  );

  const smoothCards = useSpring(cardsY, {
    stiffness: 120,
    damping: 22,
  });

  return (
    <section
      ref={sectionRef}
      id="signature-coffee"
      className="relative overflow-hidden bg-[#F7F3EE] py-52"
    >

      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-15%] top-20 h-[700px] w-[700px] rounded-full bg-[#E8D7C7]/40 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[700px] w-[700px] rounded-full bg-[#D9BFA3]/30 blur-[180px]" />

      </div>

      {/* Huge Background Text */}

      <motion.div
        style={{ y: bgY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >

        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.1em] text-black/[0.03]">

          Coffee

        </h2>

      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <Reveal>

          <p className="text-center text-xs uppercase tracking-[0.55em] text-[#A67C52]">

            Signature Collection

          </p>

        </Reveal>

        <motion.div
          style={{
            y: titleY,
          }}
        >

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-[#2C2A29] md:text-[5.5rem] xl:text-[7rem]">

              Coffee,

              <br />

              Curated

              <span className="italic text-[#A67C52]">
                {" "}
                Like Art.
              </span>

            </h2>

          </Reveal>

        </motion.div>

        <Reveal>

          <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">

            Three extraordinary coffees.
            Sourced across continents.
            Roasted with precision.
            Served as unforgettable rituals.

          </p>

        </Reveal>
                {/* Cards */}

                <motion.div
          style={{
            y: smoothCards,
          }}
          className="mt-32 grid gap-10 lg:grid-cols-3"
        >

          {coffees.map((coffee, index) => (

            <Parallax
              key={coffee.name}
              offset={50 + index * 20}
            >

              <motion.div
                initial={{
                  opacity: 0,
                  y: 120,
                  rotateY: index === 1 ? 0 : index === 0 ? -10 : 10,
                  scale: 0.9,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  rotateY: 0,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                  amount: 0.3,
                }}
                transition={{
                  duration: 1,
                  delay: index * 0.18,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <TiltCard>

                  <div className="group relative h-[720px] overflow-hidden rounded-[42px] shadow-[0_60px_160px_rgba(0,0,0,.15)]">

                    {/* Image */}

                    <Image
                      src={coffee.image}
                      alt={coffee.name}
                      fill
                      className="object-cover transition-transform duration-[1600ms] group-hover:scale-110"
                    />

                    {/* Dark Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/20 to-black/75" />

                    {/* Shine */}

                    <motion.div
                      initial={{
                        x: "-120%",
                      }}
                      whileHover={{
                        x: "220%",
                      }}
                      transition={{
                        duration: 1.4,
                      }}
                      className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-2xl"
                    />

                    {/* Top Label */}

                    <div className="absolute left-8 top-8 flex items-center gap-3">

                      <div className="h-2 w-2 rounded-full bg-[#D8B37D]" />

                      <p className="text-[10px] uppercase tracking-[0.45em] text-white/80">

                        {coffee.year}

                      </p>

                    </div>

                    {/* Vertical Text */}

                    <div className="absolute right-6 top-10">

                      <p
                        className="text-[10px] uppercase tracking-[0.5em] text-white/40"
                        style={{
                          writingMode: "vertical-rl",
                        }}
                      >

                        Maison Noir

                      </p>

                    </div>
                                        {/* Bottom Content */}

                                        <div className="absolute bottom-0 left-0 right-0 p-8">

<motion.div
  whileHover={{
    y: -8,
  }}
  transition={{
    type: "spring",
    stiffness: 220,
    damping: 18,
  }}
  className="rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-2xl"
>

  <p className="text-[10px] uppercase tracking-[0.45em] text-[#E6D5C4]">

    {coffee.origin} • {coffee.roast}

  </p>

  <h3 className="mt-4 font-serif text-4xl leading-tight text-white">

    {coffee.name}

  </h3>

  <p className="mt-5 text-sm leading-7 text-white/80">

    {coffee.note}

  </p>

  <div className="mt-8 flex items-center justify-between">

    <button className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-[11px] uppercase tracking-[0.35em] text-white transition-all duration-500 hover:bg-white hover:text-black">

      Explore

    </button>

    <motion.div
      whileHover={{
        rotate: 45,
        scale: 1.15,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
      }}
      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl"
    >

      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7 17L17 7"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />

        <path
          d="M9 7H17V15"
          stroke="white"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>

    </motion.div>

  </div>

</motion.div>

</div>

{/* Decorative Border */}

<div className="pointer-events-none absolute inset-0 rounded-[42px] border border-white/10" />

</div>

</TiltCard>

</motion.div>

</Parallax>

))}

</motion.div>
        {/* Editorial Statement */}

        <div className="mt-44 grid items-center gap-20 lg:grid-cols-[0.8fr_1.2fr]">

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

                The Collection

              </p>

              <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

                Every Blend
                <br />

                Tells A Story.

              </h3>

            </div>

          </Reveal>

          <Reveal>

            <div className="space-y-8">

              <p className="max-w-2xl text-[17px] leading-9 text-[#5D564F]">

                Every origin has been selected for a
                distinct personality rather than a trend.
                The result is a collection that rewards
                slow appreciation and repeated discovery.

              </p>

              <div className="flex flex-wrap gap-5">

                <motion.div
                  whileHover={{ y: -8 }}
                  className="rounded-full border border-[#D9C9B6] bg-white/70 px-8 py-4 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#A67C52]">
                    Single Origin
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="rounded-full border border-[#D9C9B6] bg-white/70 px-8 py-4 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#A67C52]">
                    Small Batch
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -8 }}
                  className="rounded-full border border-[#D9C9B6] bg-white/70 px-8 py-4 backdrop-blur-xl"
                >
                  <p className="text-xs uppercase tracking-[0.35em] text-[#A67C52]">
                    Hand Roasted
                  </p>
                </motion.div>

              </div>

            </div>

          </Reveal>

        </div>

        {/* Divider */}

        <div className="mt-32 flex items-center justify-center gap-8">

          <div className="h-px w-28 bg-[#DCCAB7]" />

          <div className="h-2 w-2 rounded-full bg-[#A67C52]" />

          <div className="h-px w-28 bg-[#DCCAB7]" />

        </div>
                {/* Closing Quote */}

                <Reveal>

<div className="mx-auto mt-24 max-w-5xl text-center">

  <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

    Maison Noir Philosophy

  </p>

  <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">

    Coffee should never
    simply be consumed.

    <br />

    It should be
    experienced.

  </h3>

  <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5D564F]">

    Every cup is composed with the same discipline as a
    timeless work of design—balanced, intentional and
    quietly unforgettable.

  </p>

  <motion.button
    whileHover={{
      scale: 1.06,
      y: -4,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="mt-14 rounded-full bg-[#2C2A29] px-10 py-5 text-xs uppercase tracking-[0.35em] text-white shadow-[0_25px_60px_rgba(0,0,0,.18)] transition-colors hover:bg-[#A67C52]"
  >
    View Full Collection
  </motion.button>

</div>

</Reveal>

</div>

{/* Bottom Ambient Glow */}

<div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#E7D6C4]/35 blur-[220px]" />

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