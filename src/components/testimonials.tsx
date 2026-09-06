import { IconQuote } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";
import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Prova</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            O padrão de testemunhos — sem nomes inventados.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Cartões no sítio da prova social. Entram quando existirem e puderem
            ser mostrados.
          </p>
        </Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <Surface>
                <IconQuote className="text-foreground" />
                <Badge variant="outline">Reservado</Badge>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Surface>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
