"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export type KikoSlot = "hero" | "submit" | "confirmation";
export type KikoState = "idle" | "point" | "think" | "celebrate";

export type KikoMotionHook = {
  kind: "rive" | "lottie";
  src: string;
};

type KikoProps = {
  slot: KikoSlot;
  state?: KikoState;
  className?: string;
  /** Reserved for a later Rive/Lottie runtime. */
  motion?: KikoMotionHook;
  priority?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizeClass = {
  sm: "w-[7.5rem]",
  md: "w-44",
  lg: "w-[16.5rem] sm:w-80 lg:w-[22rem]",
} as const;

const poses = {
  idle: { y: 0, x: 0, rotate: 0, scale: 1 },
  point: { y: -6, x: 10, rotate: -8, scale: 1.03 },
  think: { y: -2, x: -6, rotate: 7, scale: 1 },
  celebrate: { y: -14, x: 0, rotate: 0, scale: 1.08 },
} as const;

/**
 * Kiko — living ink-drop.
 * Transparent PNG + SVG mark. `data-kiko-slot` and `data-state`
 * (idle / point / think / celebrate) are the motion hooks.
 */
export function Kiko({
  slot,
  state = "idle",
  className,
  motion: motionHook,
  priority = false,
  size = "md",
}: KikoProps) {
  const reduce = useReducedMotion();
  const resolved: KikoState =
    slot === "confirmation" && state === "idle" ? "celebrate" : state;

  return (
    <div
      data-kiko-slot={slot}
      data-state={resolved}
      data-kiko-motion={
        motionHook ? `${motionHook.kind}:${motionHook.src}` : "css-framer"
      }
      className={cn(
        "relative mx-auto select-none",
        sizeClass[size],
        className
      )}
    >
      <div className="pointer-events-none absolute inset-[-18%] rounded-full bg-[radial-gradient(circle_at_50%_45%,color-mix(in_srgb,var(--amber)_38%,transparent),transparent_64%)] blur-2xl" />
      <motion.div
        className="relative"
        animate={
          reduce
            ? poses[resolved]
            : {
                ...poses[resolved],
                y:
                  resolved === "idle"
                    ? [0, -9, 0]
                    : resolved === "think"
                      ? [0, -5, 0]
                      : resolved === "celebrate"
                        ? [0, -16, -6]
                        : poses.point.y,
              }
        }
        transition={
          reduce
            ? { duration: 0 }
            : resolved === "idle" || resolved === "think"
              ? {
                  duration: resolved === "think" ? 5.2 : 4.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : { type: "spring", stiffness: 220, damping: 16 }
        }
      >
        <Image
          src="/kiko.png"
          alt="Kiko, a mascote da Kiko Agency — uma gota de tinta viva"
          width={411}
          height={569}
          priority={priority}
          unoptimized
          className="relative h-auto w-full bg-transparent"
        />
        {!reduce && resolved === "celebrate" ? <Sparkles /> : null}
      </motion.div>
    </div>
  );
}

function Sparkles() {
  const dots = [
    { className: "top-[8%] left-[6%]", delay: 0 },
    { className: "top-[18%] right-[4%]", delay: 0.12 },
    { className: "bottom-[22%] left-[2%]", delay: 0.2 },
    { className: "bottom-[12%] right-[8%]", delay: 0.08 },
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
          animate={{ opacity: [0, 1, 0], scale: [0.4, 1.2, 0.2], y: [-4, -14] }}
          transition={{
            duration: 1.1,
            delay: dot.delay,
            repeat: Infinity,
            repeatDelay: 0.4,
          }}
        />
      ))}
    </div>
  );
}

export function KikoMark({ className }: { className?: string }) {
  return (
    <Image
      src="/kiko.svg"
      alt=""
      width={28}
      height={36}
      unoptimized
      className={cn("h-8 w-auto", className)}
    />
  );
}
