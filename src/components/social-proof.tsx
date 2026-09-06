import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Eyebrow, Section } from "@/components/section";

const slots = [
  {
    title: "Depoimento",
    body: "Quando um cliente autorizar, o testemunho fica aqui — com nome, negócio e o que mudou no site. Até lá, este espaço fica vazio de propósito.",
  },
  {
    title: "Caso",
    body: "Um projecto publicado, com contexto e resultado observável. Sem percentagens inventadas nem «+300% de conversão».",
  },
  {
    title: "Logótipo",
    body: "Marcas com quem trabalhámos, só com autorização. Não há fila de logos fictícios nesta página.",
  },
] as const;

export function SocialProof() {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <div className="flex max-w-2xl flex-col gap-4">
          <Eyebrow>Prova social</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-4xl">
            Ainda sem casos públicos. Sem números de enfeite.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Este é um wireframe. Os blocos abaixo marcam o sítio da prova —
            depoimentos, projectos e marcas — quando existirem e puderem ser
            mostrados.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {slots.map((slot) => (
            <Card key={slot.title}>
              <CardHeader>
                <Badge variant="outline">Reservado</Badge>
                <CardTitle className="font-heading text-xl">
                  {slot.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {slot.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
