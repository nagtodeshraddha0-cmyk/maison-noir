"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode } from "react";

export default function Magnetic({
  children,
}: {
  children: ReactNode;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 180,
    damping: 18,
  });

  const springY = useSpring(y, {
    stiffness: 180,
    damping: 18,
  });

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>
  ) {
    const rect = e.currentTarget.getBoundingClientRect();

    const moveX =
      e.clientX - rect.left - rect.width / 2;

    const moveY =
      e.clientY - rect.top - rect.height / 2;

    x.set(moveX * 0.18);
    y.set(moveY * 0.18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      className="inline-block pb-2"
      style={{
        x: springX,
        y: springY,
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </motion.div>
  );
}