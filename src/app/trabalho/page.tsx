import type { Metadata } from "next";
import { Cta } from "@/components/cta";
import { IconBooking, IconLanding, IconPages } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";
import { WorkCollage } from "@/components/work-collage";
import { pages } from "@/lib/site";

export const metadata: Metadata = {
  title: pages.trabalho.title,
  description: pages.trabalho.description,
};

const reserved = [
  {
    title: "Landing — oferta única",
    icon: IconLanding,
    note: "Espaço para uma página com oferta, prova e CTA. Quando existir um caso autorizado, entra aqui.",
  },
  {
    title: "Site — várias páginas",
    icon: IconPages,
    note: "Espaço para um site com navegação e, se fizer sentido, formulário.",
  },
  {
    title: "Marcações",
    icon: IconBooking,
    note: "Espaço para um fluxo de pedido e confirmação. O stub actual vive em Marcar call.",
  },
] as const;

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
            Ainda não há projectos públicos. A grelha abaixo é um padrão de
            collage — sem capturas de clientes fictícios.
          </p>
        </Reveal>
      </Section>
      <Section className="pb-12">
        <Reveal>
          <WorkCollage />
        </Reveal>
      </Section>
      <Section className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {reserved.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Surface>
                <item.icon className="text-foreground" />
                <Badge variant="outline">Por publicar</Badge>
                <h2 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </Surface>
            </Reveal>
          ))}
        </div>
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
