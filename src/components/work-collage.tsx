"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";
import { collageTiles } from "@/lib/site";
import { ease } from "@/components/motion-primitives";

const tones = {
  amber: "from-[#2a2118] to-[#151018]",
  navy: "from-[#121a2c] to-[#0b1020]",
  mist: "from-[#1a2230] to-[#10151f]",
} as const;

export function WorkCollage() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const drift = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? [0, 0] : [18, -18]
  );

  return (
    <motion.div
      ref={ref}
      aria-label="Grelha de trabalho reservado"
      style={{ y: drift }}
      className="grid min-w-0 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-3"
    >
      {collageTiles.map((tile, index) => (
        <motion.article
          key={tile.id}
          initial={reduce ? false : { opacity: 0, y: 22, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduce ? 0 : 0.65,
            delay: reduce ? 0 : 0.22 + index * 0.07,
            ease,
          }}
          whileHover={
            reduce
              ? undefined
              : { y: -8, transition: { type: "spring", stiffness: 320, damping: 20 } }
          }
          className={cn(
            "group relative min-h-[210px] max-h-[220px] min-w-0 overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br p-3 shadow-[0_20px_50px_-28px_rgba(0,0,0,0.7)]",
            "md:max-h-none md:min-h-44",
            index === 0 && "lg:min-h-64",
            tones[tile.tone]
          )}
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="size-1.5 rounded-full bg-white/25" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="size-1.5 rounded-full bg-white/15" />
            <span className="ml-2 h-1.5 flex-1 rounded-full bg-white/8" />
          </div>
          <motion.div
            className="flex flex-col gap-2"
            whileHover={reduce ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.45, ease }}
          >
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
            <div className="h-2 w-1/2 rounded-full bg-white/10" />
            <div className="mt-1 grid grid-cols-3 gap-1.5">
              <div className="aspect-4/3 rounded-lg bg-white/8 transition-transform duration-500 group-hover:scale-105" />
              <div className="aspect-4/3 rounded-lg bg-white/12 transition-transform duration-500 group-hover:scale-105" />
              <div className="aspect-4/3 rounded-lg bg-[color-mix(in_srgb,var(--amber)_35%,transparent)] transition-transform duration-500 group-hover:scale-110" />
            </div>
          </motion.div>
          <p className="absolute right-3 bottom-3 text-[0.65rem] tracking-[0.16em] text-white/55 uppercase">
            {tile.label}
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}
