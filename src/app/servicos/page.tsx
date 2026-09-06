import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { ServiceIcon } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { pages, services } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.servicos.title,
  description: pages.servicos.description,
};

export default function ServicosPage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
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
      <Section className="pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 0.08}>
              <Surface className="h-full">
                <ServiceIcon name={service.icon} className="text-foreground" />
                <h2 className="text-2xl font-semibold tracking-tight">
                  {service.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {service.summary}
                </p>
                <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                  {service.includes.map((item) => (
                    <li
                      key={item}
                      className="border-l-2 border-accent pl-3 leading-relaxed"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-2">
                  <Cta href="/marcar-call" variant="ctaOutline">
                    Pedir proposta
                  </Cta>
                </div>
              </Surface>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
