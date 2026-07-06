"use client";

import Parallax from "@/components/motion/Parallax";
import TiltCard from "@/components/motion/TiltCard";
import Magnetic from "@/components/motion/Magnetic";
import Reveal from "@/components/motion/Reveal";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-visible bg-[#F7F3EE] pt-28">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#E7D6C4]/40 blur-[140px]" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#DCC3A5]/30 blur-[160px]" />
      </div>

      {/* Background Typography */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <h1 className="text-[12vw] font-serif font-light text-black/[0.04]">
          MAISON NOIR
        </h1>
      </div>

      {/* Main Layout */}
      <div className="relative mx-auto grid min-h-screen w-full max-w-7xl grid-cols-1 items-center gap-16 overflow-hidden px-6 lg:grid-cols-2">
        {/* LEFT */}
        <Reveal>
          <div className="relative z-10">
            <p className="mb-6 text-xs uppercase tracking-[0.5em] text-[#A67C52]">
              Since 2026 • Crafted Without Compromise
            </p>

            <h1 className="font-serif text-6xl leading-[0.95] text-[#2C2A29] md:text-8xl xl:text-[7rem]">
              The World’s Finest,
              <br />
              Pour by Pour.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-[#5D564F]">
              A sanctuary where coffee becomes ritual, and every detail is
              designed with obsessive precision and timeless elegance.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">
              <Magnetic>
                <a
                  href="#reservation"
className="inline-flex items-center justify-center rounded-full bg-[#2C2A29] px-9 py-4 text-sm uppercase leading-none tracking-[0.2em] text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Reserve
                </a>
              </Magnetic>

              <Magnetic>
                <a
                  href="#story"
          className="inline-flex items-center justify-center rounded-full border border-[#A67C52] px-9 py-4 text-sm uppercase leading-none tracking-[0.2em] text-[#2C2A29] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A67C52] hover:text-white"
                >
                  Discover
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>

        {/* RIGHT */}
        
        <div className="relative flex items-center justify-center">
  <div className="relative h-[520px] w-full max-w-[430px] sm:h-[600px] lg:h-[650px] overflow-hidden rounded-[48px] shadow-[0_60px_160px_rgba(0,0,0,0.25)]">
    <Image
      src="/images/hero-coffee.png"
      alt="Coffee"
      fill
      priority
      className="object-cover"
    />
  </div>
</div>

        
      </div>

      {/* Scroll */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-[#A67C52]"
      >
        Scroll
      </motion.div>
    </section>
  );
}