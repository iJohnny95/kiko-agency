"use client";

import { useRef } from "react";
import { useReducedMotion } from "motion/react";
import { Reveal } from "@/components/motion-primitives";
import { cn } from "@/lib/utils";

const slots = [
  { id: "one", label: "Landing" },
  { id: "two", label: "Multi-página" },
  { id: "three", label: "Marcações" },
] as const;

export function FeaturedStrip() {
  const scroller = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const scrollByCard = (dir: -1 | 1) => {
    const node = scroller.current;
    if (!node) return;
    const card = node.querySelector("article");
    const width = card ? card.getBoundingClientRect().width + 12 : 260;
    node.scrollBy({
      left: dir * width,
      behavior: reduce ? "auto" : "smooth",
    });
  };

  return (
    <Reveal className="flex flex-col gap-4 md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.68rem] font-medium tracking-[0.2em] text-muted-foreground uppercase">
          Projectos em destaque
        </p>
        <div className="flex gap-2">
          <StripButton label="Anterior" onClick={() => scrollByCard(-1)}>
            ‹
          </StripButton>
          <StripButton label="Seguinte" onClick={() => scrollByCard(1)}>
            ›
          </StripButton>
        </div>
      </div>
      <div
        ref={scroller}
        className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slots.map((slot) => (
          <article
            key={slot.id}
            className="flex min-h-[148px] w-[82%] min-w-[82%] shrink-0 snap-start flex-col items-center justify-center gap-3 rounded-2xl border border-white/10 bg-[#121212]"
          >
            <span
              aria-hidden
              className="size-10 rounded-md border border-white/16 bg-[repeating-linear-gradient(135deg,rgba(255,255,255,0.12)_0_1px,transparent_1px_10px)]"
            />
            <p className="text-[0.7rem] tracking-[0.16em] text-white/45 uppercase">
              Espaço para projecto
            </p>
            <p className="text-[0.65rem] text-white/30">{slot.label}</p>
          </article>
        ))}
      </div>
    </Reveal>
  );
}

function StripButton({
  children,
  label,
  onClick,
}: {
  children: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex size-9 items-center justify-center rounded-full border border-white/16 text-lg leading-none text-foreground"
      )}
    >
      {children}
    </button>
  );
}
