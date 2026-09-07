import { IconCase, IconMark, IconQuote } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Section, Eyebrow } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";

const slots = [
  {
    title: "Depoimento",
    icon: IconQuote,
    body: "Quando um cliente autorizar, o testemunho fica aqui — com nome, negócio e o que mudou no site. Até lá, este espaço fica vazio de propósito.",
  },
  {
    title: "Caso",
    icon: IconCase,
    body: "Um projecto publicado, com contexto e resultado observável. Sem percentagens inventadas nem «+300% de conversão».",
  },
  {
    title: "Logótipo",
    icon: IconMark,
    body: "Marcas com quem trabalhámos, só com autorização. Não há fila de logos fictícios nesta página.",
  },
] as const;

export function SocialProof() {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Ainda sem casos públicos. Sem números de enfeite.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Os blocos abaixo marcam o sítio da prova — depoimentos, projectos e
            marcas — quando existirem e puderem ser mostrados.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {slots.map((slot, index) => (
            <Reveal key={slot.title} delay={index * 0.08}>
              <Surface>
                <slot.icon className="text-foreground" />
                <Badge variant="outline">Reservado</Badge>
                <h3 className="font-heading text-2xl">{slot.title}</h3>
                <p className="leading-relaxed text-muted-foreground">
                  {slot.body}
                </p>
              </Surface>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
