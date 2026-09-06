"use client";

import { useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { Cta } from "@/components/cta";
import { Kiko, type KikoState } from "@/components/kiko";
import { StaggerWords } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { pages, site } from "@/lib/site";

export function HomeHero() {
  const [state, setState] = useState<KikoState>("idle");
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 72]);
  const textY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, 28]);

  return (
    <Section
      ref={ref}
      className="relative flex min-h-[100svh] flex-col justify-center overflow-x-clip pt-8 pb-16 md:pt-4 md:pb-24"
    >
      <div className="pointer-events-none absolute top-[12%] -left-24 size-72 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--amber)_22%,transparent),transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 bottom-[18%] size-80 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--navy)_10%,transparent),transparent_70%)] blur-3xl" />

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-8">
        <motion.div style={{ y: textY }} className="flex flex-col gap-7">
          <Eyebrow>{site.domain}</Eyebrow>
          <StaggerWords
            text={pages.home.h1}
            className="max-w-xl text-[2.35rem] leading-[1.08] tracking-tight sm:text-5xl lg:text-[4.15rem]"
          />
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="text-foreground">{site.tagline}</span>
            {` `}
            Landing pages, sites multi-página e agendamento. Direção editorial
            — o visitante percebe a oferta e sabe o que fazer a seguir.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Cta
              href="/marcar-call"
              className="w-full sm:w-auto"
              onHoverChange={(hovered) => setState(hovered ? "point" : "idle")}
            >
              Marcar call
            </Cta>
            <Cta
              href="/servicos"
              variant="ctaOutline"
              className="w-full sm:w-auto"
              onHoverChange={(hovered) => setState(hovered ? "point" : "idle")}
            >
              Ver serviços
            </Cta>
          </div>
        </motion.div>
        <motion.div
          style={{ y }}
          className="flex justify-center lg:justify-end"
        >
          <Kiko slot="hero" state={state} size="lg" priority />
        </motion.div>
      </div>
    </Section>
  );
}
