"use client";

import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion-primitives";
import { Section } from "@/components/section";
import { WorkCollage } from "@/components/work-collage";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <Section className="relative flex flex-col justify-center pt-8 pb-16 md:min-h-[calc(100svh-4.5rem)] md:pt-16 md:pb-24">
      <div className="grid min-w-0 items-center gap-4 md:grid-cols-2 md:gap-8 lg:gap-14">
        <div className="flex min-w-0 flex-col gap-4">
          <Reveal when="mount" delay={0.02}>
            <p className="inline-flex w-fit items-center rounded-full border border-white/12 bg-white/4 px-3 py-1 text-[0.7rem] font-medium tracking-[0.16em] text-muted-foreground uppercase">
              Estúdio em Portugal
            </p>
          </Reveal>
          <Reveal when="mount" delay={0.1}>
            <h1 className="max-w-xl text-[2rem] leading-[1.15] font-semibold tracking-tight sm:text-[2.25rem] md:text-5xl md:leading-[1.08] lg:text-[3.75rem] lg:leading-[1.05]">
              Sites <span className="text-gradient">high-end</span> para
              negócios em Portugal
            </h1>
          </Reveal>
          <Reveal when="mount" delay={0.2}>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              <span className="text-foreground">{site.tagline}</span>
              {` `}
              Landing pages, sites multi-página e agendamento. Direção
              editorial — o visitante percebe a oferta e sabe o que fazer a
              seguir.
            </p>
          </Reveal>
          <Reveal when="mount" delay={0.3}>
            <div className="flex w-full flex-col gap-4 md:w-auto md:flex-row">
              <Cta href="/marcar-call" className="min-h-11 w-full md:w-auto">
                Marcar call
              </Cta>
              <Cta
                href="/servicos"
                variant="ctaOutline"
                className="min-h-11 w-full md:w-auto"
              >
                Ver serviços
              </Cta>
            </div>
          </Reveal>
        </div>
        <WorkCollage />
      </div>
    </Section>
  );
}
