"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type KikoSlot =
  | "hero"
  | "services"
  | "process"
  | "faq"
  | "submit"
  | "confirmation"
  | "trabalho";

export type KikoState =
  | "idle"
  | "three-quarter"
  | "aponta"
  | "pensa"
  | "celebra"
  | "faq";

type KikoProps = {
  slot: KikoSlot;
  state?: KikoState;
  className?: string;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "w-[5.5rem] md:w-24",
  md: "w-36 md:w-44",
  lg: "w-44 md:w-56",
} as const;

const poseSrc: Record<KikoState, { src: string; w: number; h: number }> = {
  idle: { src: "/kiko/idle.png", w: 631, h: 907 },
  "three-quarter": { src: "/kiko/three-quarter.png", w: 557, h: 904 },
  aponta: { src: "/kiko/aponta.png", w: 701, h: 904 },
  pensa: { src: "/kiko/pensa.png", w: 564, h: 910 },
  celebra: { src: "/kiko/celebra.png", w: 646, h: 899 },
  faq: { src: "/kiko/faq.png", w: 671, h: 895 },
};

const slotPose: Record<KikoSlot, KikoState> = {
  hero: "idle",
  services: "aponta",
  process: "three-quarter",
  faq: "faq",
  submit: "pensa",
  confirmation: "celebra",
  trabalho: "idle",
};

const altByState: Record<KikoState, string> = {
  idle: "Kiko, a mascote da Kiko Agency, em pose de boas-vindas",
  "three-quarter": "Kiko, a mascote da Kiko Agency, em três quartos",
  aponta: "Kiko, a mascote da Kiko Agency, a apontar",
  pensa: "Kiko, a mascote da Kiko Agency, a pensar",
  celebra: "Kiko, a mascote da Kiko Agency, a celebrar",
  faq: "Kiko, a mascote da Kiko Agency, com um ponto de interrogação",
};

/**
 * Kiko Evolution 3 — living ink-drop.
 * One pose per mapped slot. `data-kiko-slot` + `data-state` are the hooks.
 */
export function Kiko({
  slot,
  state,
  className,
  priority = false,
  size = "md",
}: KikoProps) {
  const reduce = useReducedMotion();
  const resolved = state ?? slotPose[slot];
  const pose = poseSrc[resolved];

  return (
    <div
      data-kiko-slot={slot}
      data-state={resolved}
      className={cn(
        "pointer-events-none relative select-none",
        sizeClass[size],
        className
      )}
    >
      <motion.div
        className="relative"
        animate={
          reduce
            ? { y: 0 }
            : resolved === "pensa"
              ? { y: [0, -5, 0] }
              : resolved === "celebra"
                ? { y: [0, -12, -4] }
                : { y: [0, -8, 0] }
        }
        transition={
          reduce
            ? { duration: 0 }
            : resolved === "celebra"
              ? { duration: 1.15, repeat: Infinity, ease: "easeInOut" }
              : {
                  duration: resolved === "pensa" ? 5 : 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
        }
      >
        <Image
          src={pose.src}
          alt={altByState[resolved]}
          width={pose.w}
          height={pose.h}
          priority={priority}
          unoptimized
          className="relative h-auto w-full bg-transparent"
        />
        {!reduce && resolved === "celebra" ? <Sparkles /> : null}
      </motion.div>
    </div>
  );
}

function Sparkles() {
  const dots = [
    { className: "top-[8%] left-[8%]", delay: 0 },
    { className: "top-[16%] right-[6%]", delay: 0.14 },
    { className: "bottom-[20%] left-[4%]", delay: 0.22 },
    { className: "bottom-[12%] right-[10%]", delay: 0.08 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((dot) => (
        <motion.span
          key={dot.className}
          className={cn(
            "absolute size-1.5 rounded-full bg-accent",
            dot.className
          )}
          initial={{ opacity: 0, scale: 0.4 }}
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.15, 0.2], y: [-4, -12] }}
          transition={{
            duration: 1.1,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: 0.45,
          }}
        />
      ))}
    </div>
  );
}
