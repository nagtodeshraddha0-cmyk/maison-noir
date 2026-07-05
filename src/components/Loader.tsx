"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto";
    }, 2000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.9,
            ease: [0.76, 0, 0.24, 1],
          }}
          className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-[#1F1D1C]"
        >
          {/* Ambient Glow */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#A67C52]/10 blur-[180px]"
          />

          {/* Background Brand */}

          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 0.04,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
            }}
            className="absolute select-none font-serif text-[18vw] uppercase tracking-[0.08em] text-white"
          >
            MAISON
          </motion.h1>

          <div className="relative text-center">

            <motion.p
              initial={{
                opacity: 0,
                y: 24,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
              }}
              className="text-[11px] uppercase tracking-[0.7em] text-[#CDA67B]"
            >
              MAISON NOIR
            </motion.p>

            <motion.h2
              initial={{
                opacity: 0,
                y: 36,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.15,
                duration: 1,
              }}
              className="mt-8 font-serif text-6xl leading-[0.95] text-white md:text-8xl"
            >
              Crafted

              <br />

              <span className="italic text-[#CDA67B]">
                Without Compromise.
              </span>
            </motion.h2>

            <motion.div
              initial={{
                scaleX: 0,
                opacity: 0,
              }}
              animate={{
                scaleX: 1,
                opacity: 1,
              }}
              transition={{
                delay: 0.6,
                duration: 1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mx-auto mt-14 h-px w-52 origin-left bg-[#CDA67B]"
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}