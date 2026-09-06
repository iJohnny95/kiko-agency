"use client";

import { Cta } from "@/components/cta";
import { FeaturedStrip } from "@/components/featured-strip";
import { Reveal } from "@/components/motion-primitives";
import { Section } from "@/components/section";
import { WorkCollage } from "@/components/work-collage";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <Section className="relative flex flex-col justify-center pt-6 pb-10 md:min-h-[calc(100svh-4.5rem)] md:pt-16 md:pb-24">
      <TopoMark />
      <div className="relative grid min-w-0 items-center gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex min-w-0 flex-col gap-4 md:gap-5">
          <Reveal when="mount" delay={0.02}>
            <p className="inline-flex w-fit items-center gap-2 rounded-full border border-accent/45 px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] text-foreground/85 uppercase">
              <PinIcon />
              Estúdio em Portugal
            </p>
          </Reveal>
          <Reveal when="mount" delay={0.1}>
            <h1 className="max-w-xl text-[2rem] leading-[1.12] font-semibold tracking-tight text-white sm:text-[2.25rem] md:text-5xl md:leading-[1.06] lg:text-[4.15rem] lg:leading-[1.02] xl:text-[4.6rem]">
              Sites <span className="text-gradient">high-end</span> para
              negócios em Portugal
            </h1>
          </Reveal>
          <Reveal when="mount" delay={0.2}>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="text-foreground">{site.tagline}</span>
              {` `}
              Landing pages, sites multi-página e agendamento.
            </p>
          </Reveal>
          <Reveal when="mount" delay={0.3}>
            <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
              <Cta href="/marcar-call" arrow className="min-h-12 w-full md:w-auto">
                Marcar call
              </Cta>
              <Cta
                href="/servicos"
                variant="ctaOutline"
                className="min-h-12 w-full md:w-auto"
              >
                Ver serviços
              </Cta>
            </div>
          </Reveal>
        </div>
        <div className="hidden min-w-0 lg:block">
          <WorkCollage />
        </div>
      </div>
      <div className="relative mt-8 lg:hidden">
        <FeaturedStrip />
      </div>
    </Section>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 12 12" className="size-3 text-accent" aria-hidden>
      <path
        d="M6 1.4c1.8 0 3.2 1.5 3.2 3.3C9.2 7.2 6 10.6 6 10.6S2.8 7.2 2.8 4.7C2.8 2.9 4.2 1.4 6 1.4Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <circle cx="6" cy="4.7" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TopoMark() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute -bottom-8 -left-8 h-56 w-72 text-white/8 md:h-72 md:w-96"
      viewBox="0 0 360 220"
      fill="none"
    >
      <path
        d="M8 180c40-28 70-70 118-70s70 54 124 46 78-62 102-90"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M4 198c46-24 78-58 126-58s74 44 128 36 76-52 98-78"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        d="M12 162c38-30 66-78 112-78s72 58 126 50 80-66 106-96"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}
