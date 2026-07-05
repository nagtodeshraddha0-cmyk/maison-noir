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

const desserts = [
  {
    name: "Vanilla Gold Mille-Feuille",
    subtitle: "French Classic",
    description:
      "Delicate layers of caramelized puff pastry, Madagascar vanilla cream and edible gold leaf.",
    image: "/images/dessert-1.jpg",
    accent: "Gold Leaf",
  },
  {
    name: "Dark Noir Tiramisu",
    subtitle: "Chef's Signature",
    description:
      "Espresso-soaked sponge layered with mascarpone and finished with premium cocoa.",
    image: "/images/dessert-2.jpg",
    accent: "Espresso",
  },
  {
    name: "Pistachio Cloud Tart",
    subtitle: "Seasonal Selection",
    description:
      "Sicilian pistachio cream, fresh berries and crisp butter pastry finished by hand.",
    image: "/images/dessert-3.jpg",
    accent: "Seasonal",
  },
];

export default function Desserts() {
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

  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -220]
  );

  const cardsY = useSpring(
    useTransform(scrollYProgress, [0, 1], [150, -40]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  return (
    <section
      ref={sectionRef}
      id="desserts"
      className="relative overflow-hidden bg-[#F3ECE4] py-52"
    >

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-12%] top-32 h-[650px] w-[650px] rounded-full bg-[#E8D5BF]/40 blur-[170px]" />

        <div className="absolute right-[-12%] bottom-0 h-[650px] w-[650px] rounded-full bg-[#DABEA0]/30 blur-[180px]" />

      </div>

      {/* Background Typography */}

      <motion.div
        style={{ y: backgroundY }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >

        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-black/[0.03]">

          Dessert

        </h2>

      </motion.div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <Reveal>

          <p className="text-center text-xs uppercase tracking-[0.55em] text-[#A67C52]">

            Artisan Desserts

          </p>

        </Reveal>

        <motion.div
          style={{
            y: titleY,
          }}
        >

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-[#2C2A29] md:text-[5.5rem] xl:text-[7rem]">

              Crafted Like

              <br />

              <span className="mt-4 block italic text-[#A67C52]">

                Fine Art.

              </span>

            </h2>

          </Reveal>

        </motion.div>

        <Reveal>

          <p className="mx-auto mt-25 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">

            Small batches. European techniques.
            Extraordinary ingredients.
            Desserts designed to be remembered,
            not merely served.

          </p>

        </Reveal>
                {/* Editorial Cards */}

                <motion.div
          style={{
            y: cardsY,
          }}
          className="mt-32 space-y-36"
        >

          {desserts.map((dessert, index) => (

            <Parallax
              key={dessert.name}
              offset={70}
            >

              <div
                className={`grid items-center gap-16 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >

                {/* Image */}

                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -120 : 120,
                    rotate: index % 2 === 0 ? -4 : 4,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    rotate: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >

                  <TiltCard>

                    <div className="group relative overflow-hidden rounded-[44px] shadow-[0_60px_160px_rgba(0,0,0,.16)]">

                      <div className="relative h-[720px]">

                        <Image
                          src={dessert.image}
                          alt={dessert.name}
                          fill
                          className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                        {/* Shine */}

                        <motion.div
                          initial={{
                            x: "-120%",
                          }}
                          whileHover={{
                            x: "220%",
                          }}
                          transition={{
                            duration: 1.5,
                          }}
                          className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-2xl"
                        />

                        {/* Tag */}

                        <div className="absolute left-8 top-8 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

                          <p className="text-[10px] uppercase tracking-[0.45em] text-white">

                            {dessert.subtitle}

                          </p>

                        </div>

                        {/* Vertical Text */}

                        <div className="absolute right-7 top-10">

                          <p
                            style={{
                              writingMode: "vertical-rl",
                            }}
                            className="text-[10px] uppercase tracking-[0.45em] text-white/40"
                          >

                            Maison Noir

                          </p>

                        </div>

                      </div>

                    </div>

                  </TiltCard>

                </motion.div>
                                {/* Editorial Content */}

                                <motion.div
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
                    amount: 0.35,
                  }}
                  transition={{
                    duration: 0.9,
                    delay: 0.15,
                  }}
                  className="relative"
                >

                  <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

                    {dessert.accent}

                  </p>

                  <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

                    {dessert.name}

                  </h3>

                  <div className="mt-8 h-px w-20 bg-[#A67C52]" />

                  <p className="mt-10 max-w-xl text-[17px] leading-9 text-[#5D564F]">

                    {dessert.description}

                  </p>

                  {/* Feature Pills */}

                  <div className="mt-12 flex flex-wrap gap-4">

                    {[
                      "Hand Crafted",
                      "Fresh Daily",
                      "European Recipe",
                    ].map((item) => (

                      <motion.div
                        key={item}
                        whileHover={{
                          y: -6,
                        }}
                        className="rounded-full border border-[#D8C8B7] bg-white/70 px-6 py-3 backdrop-blur-xl"
                      >

                        <p className="text-[11px] uppercase tracking-[0.35em] text-[#A67C52]">

                          {item}

                        </p>

                      </motion.div>

                    ))}

                  </div>

                  {/* CTA */}

                  <motion.button
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                    }}
                    whileTap={{
                      scale: 0.98,
                    }}
                    className="mt-14 rounded-full bg-[#2C2A29] px-9 py-5 text-xs uppercase tracking-[0.35em] text-white shadow-[0_25px_60px_rgba(0,0,0,.16)] transition-colors hover:bg-[#A67C52]"
                  >

                    Discover

                  </motion.button>

                </motion.div>

              </div>

            </Parallax>

          ))}

        </motion.div>
                {/* Editorial Statement */}

                <div className="mt-44 grid items-center gap-20 lg:grid-cols-[1fr_.9fr]">

<Reveal>

  <div>

    <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

      Pastry Atelier

    </p>

    <h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

      Desserts
      <br />

      Worth Slowing
      <br />

      Down For.

    </h3>

  </div>

</Reveal>

<Reveal>

  <div className="space-y-8">

    <p className="max-w-2xl text-[17px] leading-9 text-[#5D564F]">

      Every pastry leaves the kitchen only
      when texture, balance and presentation
      meet the standards of Maison Noir.
      Nothing is rushed. Nothing is accidental.

    </p>

    <div className="grid grid-cols-2 gap-5">

      {[
        "Butter Imported",
        "Fresh Cream",
        "Daily Baked",
        "Limited Batch",
      ].map((item) => (

        <motion.div
          key={item}
          whileHover={{
            y: -8,
          }}
          className="rounded-[24px] border border-[#D9C8B7] bg-white/70 p-6 backdrop-blur-xl"
        >

          <p className="text-xs uppercase tracking-[0.35em] text-[#A67C52]">

            {item}

          </p>

        </motion.div>

      ))}

    </div>

  </div>

</Reveal>

</div>

{/* Divider */}

<div className="mt-32 flex items-center justify-center gap-8">

<div className="h-px w-28 bg-[#D8C8B7]" />

<div className="h-2 w-2 rounded-full bg-[#A67C52]" />

<div className="h-px w-28 bg-[#D8C8B7]" />

</div>
        {/* Closing Quote */}

        <Reveal>

          <div className="mx-auto mt-24 max-w-5xl text-center">

            <p className="text-xs uppercase tracking-[0.45em] text-[#A67C52]">

              Maison Noir Pâtisserie

            </p>

            <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">

              Every dessert
              begins with craft
              and ends with
              emotion.

            </h3>

            <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5D564F]">

              Layer by layer, every creation reflects the
              same philosophy that defines Maison Noir—
              timeless ingredients, meticulous execution
              and uncompromising elegance.

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
              Explore Desserts
            </motion.button>

          </div>

        </Reveal>

      </div>

      {/* Bottom Ambient Glow */}

      <div className="pointer-events-none absolute bottom-[-260px] left-1/2 h-[760px] w-[760px] -translate-x-1/2 rounded-full bg-[#E8D5BF]/35 blur-[220px]" />

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