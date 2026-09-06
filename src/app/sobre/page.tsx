import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { pages, processSteps, site } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.sobre.title,
  description: pages.sobre.description,
};

export default function SobrePage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Sobre</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Sobre a <span className="text-gradient">Kiko Agency</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            A {site.name} faz sites high-end para negócios em Portugal — para
            serem percebidos, não para parecer ocupados. {site.domain} é o
            domínio previsto.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            Os textos são provisórios. Não há biografia inflada nem «equipa de
            40 pessoas».
          </p>
        </Reveal>
      </Section>
      <Section className="pb-24">
        <div className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <Reveal key={step.n} delay={index * 0.08}>
              <Surface>
                <p className="text-gradient text-sm font-semibold tracking-[0.18em]">
                  {step.n}
                </p>
                <h2 className="text-2xl font-semibold tracking-tight">
                  {step.title}
                </h2>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Surface>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12">
          <Cta href="/marcar-call">Marcar call</Cta>
        </Reveal>
      </Section>
    </>
  );
}
