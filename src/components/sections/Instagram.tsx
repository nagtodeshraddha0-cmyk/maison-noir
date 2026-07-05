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

const posts = [
  {
    image: "/images/instagram-1.jpg",
    title: "Morning Ritual",
  },
  {
    image: "/images/instagram-2.jpg",
    title: "Barista Craft",
  },
  {
    image: "/images/instagram-3.jpg",
    title: "Quiet Luxury",
  },
  {
    image: "/images/instagram-4.jpg",
    title: "Maison Moments",
  },
];

export default function Instagram() {
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

  const galleryY = useSpring(
    useTransform(scrollYProgress, [0, 1], [120, -40]),
    {
      stiffness: 120,
      damping: 22,
    }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F7F3EE] py-52"
    >

      {/* Ambient Glow */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[-12%] top-32 h-[650px] w-[650px] rounded-full bg-[#E8D6C5]/40 blur-[180px]" />

        <div className="absolute right-[-10%] bottom-0 h-[600px] w-[600px] rounded-full bg-[#D8BEA1]/30 blur-[180px]" />

      </div>

      {/* Background Word */}

      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">

        <h2 className="select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-black/[0.03]">

          Journal

        </h2>

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <motion.div style={{ y: titleY }}>

          <Reveal>

            <p className="text-center text-xs uppercase tracking-[0.55em] text-[#A67C52]">

              Follow Our Journey

            </p>

          </Reveal>

          <Reveal>

            <h2 className="mx-auto mt-10 max-w-5xl text-center font-serif text-[3.8rem] leading-[0.95] text-[#2C2A29] md:text-[5.5rem] xl:text-[7rem]">

              Moments Worth

              <br />

              <span className="italic text-[#A67C52]">

                Remembering.

              </span>

            </h2>

          </Reveal>

          <Reveal>

            <p className="mx-auto mt-10 max-w-3xl text-center text-lg leading-9 text-[#5D564F]">

              A curated visual journal documenting
              craftsmanship, atmosphere and timeless
              hospitality.

            </p>

          </Reveal>

        </motion.div>
      ```
              {/* Editorial Gallery */}

              <motion.div
          style={{
            y: galleryY,
          }}
          className="mt-32 grid auto-rows-[280px] grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12"
        >

          {posts.map((post, index) => (

            <Parallax
              key={post.title}
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
                    : "lg:col-span-7"
                }`}
              >

                <TiltCard>

                  <div className="group relative h-full overflow-hidden rounded-[42px] shadow-[0_60px_150px_rgba(0,0,0,.15)]">

                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-[1800ms] group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    <motion.div
                      initial={{ x: "-120%" }}
                      whileHover={{ x: "220%" }}
                      transition={{ duration: 1.5 }}
                      className="absolute inset-y-0 w-24 rotate-12 bg-white/20 blur-2xl"
                    />

                    <div className="absolute left-7 top-7 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

                      <p className="text-[10px] uppercase tracking-[0.45em] text-white">

                        Instagram

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

  @MaisonNoir

</p>

</div>

{/* Bottom Content */}

<div className="absolute inset-x-0 bottom-0 p-8">

<p className="text-[10px] uppercase tracking-[0.4em] text-[#E8D6C5]">

  Editorial Journal

</p>

<h3 className="mt-3 font-serif text-4xl leading-none text-white">

  {post.title}

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

Daily Inspiration

</p>

<h3 className="mt-8 font-serif text-5xl leading-[1.05] text-[#2C2A29] xl:text-6xl">

Every Frame
Tells A
Different Story.

</h3>

</div>

</Reveal>

<Reveal>

<p className="text-[17px] leading-9 text-[#5D564F]">

From the first espresso of the morning
to the final candlelit conversations,
our journal captures the atmosphere,
craftsmanship and quiet beauty that
define Maison Noir.

</p>

</Reveal>

</div>
        {/* Feature Cards */}

        <div className="mt-28 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {[
            {
              value: "50K+",
              label: "Community",
            },
            {
              value: "Daily",
              label: "Stories",
            },
            {
              value: "4K",
              label: "Photography",
            },
            {
              value: "100%",
              label: "Authentic",
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

    Maison Noir Journal

  </p>

  <h3 className="mt-10 font-serif text-5xl leading-[1.15] text-[#2C2A29] md:text-6xl xl:text-7xl">

    Follow The
    Ritual Beyond
    The Café.

  </h3>

  <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-[#5D564F]">

    Discover the people, craftsmanship and
    quiet moments that shape Maison Noir,
    shared through our editorial journal.

  </p>

  <motion.a
    href="#"
    whileHover={{
      scale: 1.05,
      y: -4,
    }}
    whileTap={{
      scale: 0.98,
    }}
    className="mt-14 inline-flex rounded-full bg-[#2C2A29] px-12 py-5 text-xs uppercase tracking-[0.35em] text-white shadow-[0_30px_80px_rgba(0,0,0,.15)] transition-colors hover:bg-[#A67C52]"
  >
    @MaisonNoir
  </motion.a>

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