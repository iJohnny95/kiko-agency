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
      className="-mx-1 flex min-w-0 snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2 [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden"
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
            "group relative min-h-[200px] w-[78%] min-w-[78%] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-[#121212] p-4 md:w-auto md:min-w-0 md:min-h-[168px] lg:min-h-[176px]",
            index % 2 === 1 && "md:translate-y-6",
            tile.glow &&
              "shadow-[0_0_48px_-12px_rgba(240,138,58,0.55)]"
          )}
        >
          {tile.glow ? (
            <span
              aria-hidden
              className="pointer-events-none absolute -right-8 -bottom-10 size-36 rounded-full bg-[#f08a3a]/25 blur-3xl"
            />
          ) : null}
          <TileMotif motif={tile.motif} />
          <div className="relative flex items-center justify-between gap-3">
            <span className="flex size-7 items-center justify-center rounded-full border border-white/14 text-[0.65rem] font-semibold tracking-wide">
              {tile.mark}
            </span>
            <span className="h-px flex-1 bg-white/10" />
            <span className="flex gap-1" aria-hidden>
              <span className="h-1 w-4 rounded-full bg-white/20" />
              <span className="h-1 w-3 rounded-full bg-white/10" />
              <span className="h-1 w-3 rounded-full bg-white/10" />
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
        className="pointer-events-none absolute -right-6 top-8 size-28 rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(240,138,58,0.45),transparent_62%)]"
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

  if (motif === "mesh") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.35) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-6 rounded-xl border border-white/8"
    />
  );
}
