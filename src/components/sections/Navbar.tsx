"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import Magnetic from "@/components/motion/Magnetic";

const navLinks = [
  { name: "Story", href: "#story" },
  { name: "Coffee", href: "#signature-coffee" },
  { name: "Desserts", href: "#desserts" },
  { name: "Interior", href: "#interior" },
  { name: "Reservation", href: "#reservation" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [hidden, setHidden] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    setScrolled(latest > 60);

    if (latest > previous && latest > 250) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{
          y: -120,
        }}
        animate={{
          y: hidden ? -130 : 0,
        }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-[100]"
      >
              <div
          className={`mx-auto mt-5 flex h-20 items-center justify-between px-8 transition-all duration-700 ${
            scrolled
              ? "w-[94%] max-w-7xl rounded-full border border-white/20 bg-white/55 shadow-[0_25px_80px_rgba(0,0,0,.08)] backdrop-blur-3xl"
              : "w-full max-w-[92rem]"
          }`}
        >

          {/* Logo */}

          <Magnetic>

            <Link
              href="/"
              className="group relative font-serif text-[1.55rem] tracking-[0.35em] text-[#2C2A29]"
            >

              <span className="transition duration-500 group-hover:text-[#A67C52]">

                MAISON NOIR

              </span>

            </Link>

          </Magnetic>

          {/* Desktop Navigation */}

          <nav className="hidden items-center gap-12 lg:flex">

            {navLinks.map((link) => (

              <Magnetic key={link.name}>

                <a
                  href={link.href}
                  className="group relative text-[12px] uppercase tracking-[0.28em] text-[#5D564F]"
                >

                  {link.name}

                  <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#A67C52] transition-all duration-500 group-hover:w-full" />

                </a>

              </Magnetic>

            ))}

          </nav>

          {/* CTA */}

          <div className="hidden lg:block">

            <Magnetic>

              <motion.a
                href="#reservation"
                whileHover={{
                  y: -3,
                  scale: 1.04,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="rounded-full bg-[#2C2A29] px-7 py-3 text-xs uppercase tracking-[0.25em] text-white shadow-[0_12px_40px_rgba(0,0,0,.15)] transition hover:bg-[#A67C52]"
              >

                Reserve

              </motion.a>

            </Magnetic>

          </div>
                    {/* Mobile Toggle */}

                    <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/60 backdrop-blur-xl lg:hidden"
          >
            <Menu className="h-5 w-5 text-[#2C2A29]" />
          </button>

        </div>

      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>

        {mobileOpen && (

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="fixed inset-0 z-[90] bg-black/20 backdrop-blur-xl lg:hidden"
          >

            <motion.div
              initial={{
                y: -60,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{
                y: -40,
                opacity: 0,
              }}
              transition={{
                duration: 0.45,
              }}
              className="mx-5 mt-28 overflow-hidden rounded-[36px] border border-white/20 bg-white/75 p-10 shadow-[0_40px_120px_rgba(0,0,0,.15)] backdrop-blur-3xl"
            >

              <nav className="flex flex-col gap-8">

                {navLinks.map((link) => (

                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    whileHover={{
                      x: 8,
                    }}
                    className="border-b border-black/5 pb-5 text-lg uppercase tracking-[0.25em] text-[#2C2A29]"
                  >

                    {link.name}

                  </motion.a>

                ))}
                                <motion.a
                  href="#reservation"
                  onClick={() => setMobileOpen(false)}
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="mt-4 flex items-center justify-center rounded-full bg-[#2C2A29] px-8 py-4 text-sm uppercase tracking-[0.25em] text-white shadow-[0_20px_60px_rgba(0,0,0,.18)] transition hover:bg-[#A67C52]"
                >
                  Reserve
                </motion.a>

              </nav>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}