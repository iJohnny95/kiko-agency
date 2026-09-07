"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ease } from "@/components/motion-primitives";

export default function Template({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={
        reduce
          ? false
          : { opacity: 0, y: 22, filter: "blur(10px)" }
      }
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: reduce ? 0 : 0.55, ease }}
    >
      {children}
    </motion.div>
  );
}
