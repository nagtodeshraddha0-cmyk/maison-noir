"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

export default function Parallax({
  children,
  offset = 80,
  className,
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useSpring(
    useTransform(
      scrollYProgress,
      [0, 1],
      [offset, -offset]
    ),
    {
      stiffness: 120,
      damping: 24,
      mass: 0.4,
    }
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.97, 1, 0.97]
  );

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y,
        scale,
        willChange: "transform",
      }}
    >
      {children}
    </motion.div>
  );
}