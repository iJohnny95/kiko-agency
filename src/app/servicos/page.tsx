import type { Metadata } from "next";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { ServicesTabs } from "@/components/services-tabs";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.servicos.title,
  description: pages.servicos.description,
};

export default function ServicosPage() {
  return (
    <>
      <Section className="pt-16 pb-4 md:pt-24">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Serviços</Eyebrow>
          <h1 className="text-4xl leading-[1.08] font-semibold tracking-tight md:text-6xl">
            Landing pages, sites{" "}
            <span className="text-gradient">multi-página</span> e marcações
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Três formatos. O detalhe de cada projecto — páginas, copy, prazo —
            fica na proposta, depois do brief. Sem lista de extras inventados.
          </p>
        </Reveal>
      </Section>
      <ServicesTabs heading={false} />
    </>
  );
}
