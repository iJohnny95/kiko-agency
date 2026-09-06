"use client";

import { Cta } from "@/components/cta";
import { Kiko } from "@/components/kiko";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { WorkCollage } from "@/components/work-collage";
import { site } from "@/lib/site";

export function HomeHero() {
  return (
    <Section className="relative flex flex-col justify-center pt-10 pb-16 md:min-h-[calc(100svh-4.5rem)] md:pt-16 md:pb-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <Reveal className="flex flex-col gap-7">
          <Eyebrow>{site.domain}</Eyebrow>
          <h1 className="max-w-xl text-[2.4rem] leading-[1.05] font-semibold tracking-tight sm:text-5xl lg:text-[4rem]">
            Sites <span className="text-gradient">high-end</span> para negócios
            em Portugal
          </h1>
          <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
            <span className="text-foreground">{site.tagline}</span>
            {` `}
            Landing pages, sites multi-página e agendamento. Direção editorial
            — o visitante percebe a oferta e sabe o que fazer a seguir.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Cta href="/marcar-call" className="w-full sm:w-auto">
              Marcar call
            </Cta>
            <Cta
              href="/servicos"
              variant="ctaOutline"
              className="w-full sm:w-auto"
            >
              Ver serviços
            </Cta>
          </div>
          <Kiko
            slot="hero"
            state="idle"
            size="sm"
            priority
            className="self-start lg:hidden"
          />
        </Reveal>
        <Reveal delay={0.1} className="relative lg:pt-2">
          <WorkCollage />
          <Kiko
            slot="hero"
            state="idle"
            size="md"
            priority
            className="absolute -bottom-3 -left-4 hidden drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] lg:block"
          />
        </Reveal>
      </div>
    </Section>
  );
}
