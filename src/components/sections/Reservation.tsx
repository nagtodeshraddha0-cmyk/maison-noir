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

export default function Reservation() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useSpring(
    useTransform(scrollYProgress, [0, 1], [120, -80]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  const titleY = useTransform(
    scrollYProgress,
    [0, 1],
    [90, -60]
  );

  return (
    <section
      ref={sectionRef}
      id="reservation"
      className="relative overflow-hidden bg-[#1F1D1C] py-52 text-white"
    >

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-1/2 top-[-15%] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#A67C52]/15 blur-[220px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] rounded-full bg-[#7D5A3C]/15 blur-[200px]" />

      </div>

      {/* Background Word */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-white/[0.025]">

          Reserve

        </h2>

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <motion.div
          style={{
            y: titleY,
          }}
        >

          <Reveal>

            <p className="text-center text-xs uppercase tracking-[0.55em] text-[#CDA67B]">

              Reservation

            </p>

          </Reveal>

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-white md:text-[5.5rem] xl:text-[7rem]">

              Reserve

              <br />

              <span className="italic text-[#CDA67B]">

                An Evening.

              </span>

            </h2>

          </Reveal>

          <Reveal>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-white/70">

              Every reservation is prepared long before
              you arrive. Lighting, music and atmosphere
              are orchestrated to create an unforgettable
              experience.

            </p>

          </Reveal>

        </motion.div>
                {/* Editorial Layout */}

                <div className="mt-32 grid items-center gap-24 lg:grid-cols-[1.1fr_.9fr]">

{/* Image */}

<Parallax offset={80}>

  <motion.div
    style={{
      y: imageY,
    }}
  >

    <TiltCard>

      <div className="group relative overflow-hidden rounded-[44px] shadow-[0_70px_180px_rgba(0,0,0,.35)]">

        <div className="relative h-[760px]">

          <Image
            src="/images/reservation.jpg"
            alt="Maison Noir Reservation"
            fill
            className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          {/* Shine */}

          <motion.div
            initial={{ x: "-120%" }}
            whileHover={{ x: "220%" }}
            transition={{ duration: 1.5 }}
            className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-2xl"
          />

          {/* Floating Badge */}

          <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

            <p className="text-[10px] uppercase tracking-[0.45em] text-white">

              Maison Noir

            </p>

          </div>

          {/* Bottom Text */}

          <div className="absolute bottom-8 left-8">

            <p className="text-[10px] uppercase tracking-[0.45em] text-[#E8D6C5]">

              Private Dining Experience

            </p>

            <h3 className="mt-3 font-serif text-4xl text-white">

              Crafted Evenings.

            </h3>

          </div>

        </div>

      </div>

    </TiltCard>

  </motion.div>

</Parallax>
          {/* Content */}

          <Reveal>

            <div>

              <p className="text-xs uppercase tracking-[0.45em] text-[#CDA67B]">

                Curated Hospitality

              </p>

              <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-white xl:text-6xl">

                We Prepare
                The Moment
                Before You Arrive.

              </h3>

              <p className="mt-10 text-[17px] leading-9 text-white/70">

                Every table is thoughtfully prepared with
                carefully balanced lighting, handcrafted
                table settings and a calm atmosphere that
                transforms a simple reservation into a
                memorable experience.

              </p>

              {/* Details */}

              <div className="mt-14 space-y-6">

                {[
                  ["Opening Hours", "08:00 — 23:00"],
                  ["Dress Code", "Smart Casual"],
                  ["Reservations", "Highly Recommended"],
                  ["Private Dining", "Available"],
                ].map(([title, value]) => (

                  <motion.div
                    key={title}
                    whileHover={{
                      x: 8,
                    }}
                    className="flex items-center justify-between border-b border-white/10 pb-5"
                  >

                    <p className="text-[11px] uppercase tracking-[0.35em] text-white/50">

                      {title}

                    </p>

                    <p className="text-white">

                      {value}

                    </p>

                  </motion.div>

                ))}

              </div>
                            {/* Feature Cards */}

                            <div className="mt-14 grid grid-cols-2 gap-5">

{[
  {
    value: "24",
    label: "Seats Only",
  },
  {
    value: "Daily",
    label: "Fresh Menu",
  },
  {
    value: "5★",
    label: "Experience",
  },
  {
    value: "100%",
    label: "Reservation",
  },
].map((item) => (

  <motion.div
    key={item.label}
    whileHover={{
      y: -8,
    }}
    transition={{
      duration: 0.3,
    }}
    className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
  >

    <h4 className="font-serif text-4xl text-[#CDA67B]">

      {item.value}

    </h4>

    <p className="mt-3 text-[10px] uppercase tracking-[0.4em] text-white/60">

      {item.label}

    </p>

  </motion.div>

))}

</div>

</div>

</Reveal>
</div>

{/* Divider */}

<div className="mt-36 flex items-center justify-center gap-8">

  <div className="h-px w-28 bg-white/15" />

  <div className="h-2 w-2 rounded-full bg-[#CDA67B]" />

  <div className="h-px w-28 bg-white/15" />

</div>

{/* Closing Editorial */}

<Reveal>

  <div className="mx-auto mt-24 max-w-5xl text-center">

    <p className="text-xs uppercase tracking-[0.45em] text-[#CDA67B]">

      Maison Noir Hospitality

    </p>

    <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-white md:text-6xl xl:text-7xl">

      Luxury Begins
      Before The
      First Pour.

    </h3>

    <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-white/70">

      Reserve your place and allow us to prepare an
      evening where architecture, coffee and service
      come together in perfect harmony.

    </p>

    <motion.button
      whileHover={{
        scale: 1.05,
        y: -4,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="mt-14 rounded-full bg-white px-12 py-5 text-xs uppercase tracking-[0.35em] text-[#1F1D1C] shadow-[0_30px_80px_rgba(255,255,255,.12)] transition-colors hover:bg-[#CDA67B] hover:text-white"
    >
      Reserve Your Experience
    </motion.button>

  </div>

</Reveal>

</div>

{/* Bottom Glow */}

<div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#A67C52]/10 blur-[220px]" />

{/* Film Grain */}

<div
className="pointer-events-none absolute inset-0 opacity-[0.02]"
style={{
  backgroundImage:
    "radial-gradient(circle, #ffffff 1px, transparent 1px)",
  backgroundSize: "18px 18px",
}}
/>

</section>
);
}