import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { Band, Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { pages, processSteps, site, studio, values } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.sobre.title,
  description: pages.sobre.description,
};

export default function SobrePage() {
  return (
    <>
      <Band flush>
        <Section className="pt-16 pb-10 md:pt-24">
          <Reveal className="flex max-w-2xl flex-col gap-5">
            <Eyebrow>Sobre</Eyebrow>
            <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
              Sobre a <span className="text-gradient">Kiko Agency</span>
            </h1>
            <p className="text-base leading-relaxed text-muted-foreground">
              <span className="text-foreground">{site.tagline}</span>{" "}
              {studio.lead}
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              {studio.body}
            </p>
          </Reveal>
        </Section>
      </Band>
      <Band tone="alt">
        <Section className="section-y">
          <Reveal className="mb-8 max-w-xl">
            <h2 className="text-3xl leading-tight md:text-4xl">Método</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Brief → proposta → entrega. Call sem compromisso. Em regra 2–4
              semanas; o calendário exacto fica na proposta.
            </p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-3">
            {processSteps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.08}>
                <Surface>
                  <p className="text-gradient text-sm font-semibold tracking-[0.18em]">
                    {step.n}
                  </p>
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </Surface>
              </Reveal>
            ))}
          </div>
        </Section>
      </Band>
      <Band>
        <Section className="section-y">
          <Reveal className="mb-8 max-w-xl">
            <h2 className="text-3xl leading-tight md:text-4xl">Valores</h2>
          </Reveal>
          <Stagger className="grid gap-4 md:grid-cols-2">
            {values.map((item) => (
              <StaggerItem key={item.title}>
                <Surface>
                  <h3 className="text-xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </Surface>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row">
            <Cta href="/marcar-call">Marcar call</Cta>
            <Cta href="/servicos" variant="ctaOutline">
              Ver serviços
            </Cta>
          </Reveal>
        </Section>
      </Band>
    </>
  );
}
