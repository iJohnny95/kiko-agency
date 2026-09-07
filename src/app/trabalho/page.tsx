import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";
import { WorkCollage } from "@/components/work-collage";
import { caseFramework, pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.trabalho.title,
  description: pages.trabalho.description,
};

export default function TrabalhoPage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Trabalho</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Trabalho da{" "}
            <span className="text-gradient">Kiko Agency</span>
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Tinta com direção. Sites que convertem. Ainda não há projectos
            públicos. A grelha e o quadro abaixo são o padrão do caso — sem
            capturas de clientes fictícios nem métricas inventadas.
          </p>
        </Reveal>
      </Section>
      <Section className="pb-12">
        <Reveal>
          <WorkCollage />
        </Reveal>
      </Section>
      <Section className="pb-16">
        <Reveal className="mb-8 flex max-w-2xl flex-col gap-3">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Quadro do caso
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Quando um cliente autorizar, o caso entra com formato, contexto e
            critério de sucesso. Até lá, o sítio fica reservado.
          </p>
        </Reveal>
        <Stagger className="grid gap-5 lg:grid-cols-3">
          {caseFramework.map((item) => (
            <StaggerItem key={item.format}>
              <Surface>
                <Badge variant="outline">{item.status}</Badge>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.format}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.context}
                </p>
                <p className="text-sm leading-relaxed">
                  <span className="text-muted-foreground">Sucesso: </span>
                  {item.success}
                </p>
              </Surface>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Cta href="/marcar-call">Marcar call</Cta>
          <Cta href="/contacto" variant="ctaOutline">
            Escrever
          </Cta>
        </Reveal>
      </Section>
    </>
  );
}
