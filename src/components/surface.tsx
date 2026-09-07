"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function Surface({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "flex h-full flex-col gap-5 rounded-3xl border border-cream/12 bg-card/80 p-6 shadow-[0_24px_60px_-36px_rgba(0,0,0,0.65)] backdrop-blur-md transition-shadow duration-500 md:p-8",
        "hover:shadow-[0_0_48px_-12px_rgba(224,138,77,0.42)]",
        className
      )}
      whileHover={
        reduce
          ? undefined
          : {
              y: -6,
              borderColor: "rgba(244,239,230,0.22)",
              transition: { type: "spring", stiffness: 320, damping: 22 },
            }
      }
    >
      {children}
    </motion.div>
  );
}
