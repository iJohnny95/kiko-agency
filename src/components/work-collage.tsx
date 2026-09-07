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

const layouts = [
  "min-h-[236px] lg:col-span-7 lg:row-span-2 lg:min-h-[308px]",
  "min-h-[148px] lg:col-span-5 lg:mt-16 lg:min-h-[164px]",
  "min-h-[188px] lg:col-span-5 lg:-mt-1 lg:min-h-[208px]",
  "min-h-[172px] lg:col-span-6 lg:mt-12 lg:min-h-[186px]",
  "min-h-[140px] lg:col-span-6 lg:mt-3 lg:translate-x-2 lg:min-h-[152px]",
  "min-h-[220px] lg:col-span-8 lg:col-start-4 lg:-mt-8 lg:translate-x-3 lg:min-h-[248px]",
];

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
    reduce ? [0, 0] : [16, -16]
  );

  return (
    <motion.div
      ref={ref}
      aria-label="Grelha de trabalho reservado"
      style={{ y: drift }}
      className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2 md:items-start lg:grid-cols-12"
    >
      {collageTiles.map((tile, index) => (
        <motion.article
          key={tile.id}
          initial={reduce ? false : { opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: reduce ? 0 : 0.7,
            delay: reduce ? 0 : 0.18 + index * 0.07,
            ease,
          }}
          whileHover={
            reduce
              ? undefined
              : { y: -8, transition: { type: "spring", stiffness: 320, damping: 20 } }
          }
          className={cn(
            "group relative min-w-0 overflow-hidden rounded-2xl border border-cream/12 bg-navy-alt/80 p-4 transition-shadow duration-500",
            layouts[index],
            tile.glow &&
              "shadow-[0_0_48px_-12px_rgba(224,138,77,0.45)]",
            "hover:shadow-[0_0_56px_-10px_rgba(224,138,77,0.55)]"
          )}
        >
          {tile.glow ? (
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-10 size-36 rounded-full bg-[#e08a4d]/25 blur-3xl"
            />
          ) : null}
          <TileMotif motif={tile.motif} />
          <div className="relative flex items-center justify-between gap-3">
            <span className="flex size-7 items-center justify-center rounded-full border border-cream/12 text-[0.65rem] font-semibold tracking-wide">
              {tile.mark}
            </span>
            <span className="h-px flex-1 bg-cream/10" />
            <span className="flex gap-1" aria-hidden>
              <span className="h-1 w-4 rounded-full bg-cream/20" />
              <span className="h-1 w-3 rounded-full bg-cream/10" />
              <span className="h-1 w-3 rounded-full bg-cream/10" />
            </span>
          </div>
          <div className="relative mt-8 flex flex-col gap-2">
            <h3 className="text-[1.05rem] leading-tight font-semibold tracking-tight text-white">
              {tile.title}
            </h3>
            <p className="text-xs text-white/45">{tile.line}</p>
          </div>
          <p className="relative mt-6 text-[0.7rem] tracking-wide text-white/55">
            Ver projecto →
          </p>
        </motion.article>
      ))}
    </motion.div>
  );
}

function TileMotif({ motif }: { motif: (typeof collageTiles)[number]["motif"] }) {
  const common = "pointer-events-none absolute inset-0 text-white/10";

  if (motif === "wire") {
    return (
      <svg viewBox="0 0 200 160" className={common} aria-hidden>
        <path d="M20 140 L70 40 L110 90 L160 20" stroke="currentColor" fill="none" />
        <path d="M40 140 L90 50 L140 110" stroke="currentColor" fill="none" />
      </svg>
    );
  }

  if (motif === "wave") {
    return (
      <svg viewBox="0 0 200 160" className={common} aria-hidden>
        <path
          d="M20 90c20-18 30-18 50 0s30 18 50 0 30-18 50 0"
          stroke="currentColor"
          fill="none"
        />
        <path
          d="M20 110c20-18 30-18 50 0s30 18 50 0 30-18 50 0"
          stroke="currentColor"
          fill="none"
        />
      </svg>
    );
  }

  if (motif === "orb") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-8 size-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(224,138,77,0.45),transparent_62%)]"
      />
    );
  }

  if (motif === "leaf") {
    return (
      <svg viewBox="0 0 200 160" className={cn(common, "text-white/16")} aria-hidden>
        <path
          d="M150 20c-40 10-70 48-70 88 28 0 62-22 78-62 6-14 4-20-8-26Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-6 rounded-xl border border-cream/10"
    />
  );
}
