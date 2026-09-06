import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Eyebrow, Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Trabalho",
  description: "Portefólio em construção. Sem casos inventados.",
};

const reserved = [
  {
    title: "Landing — oferta única",
    note: "Espaço para uma página com oferta, prova e CTA. Quando existir um caso autorizado, entra aqui.",
  },
  {
    title: "Site — várias páginas",
    note: "Espaço para um site com navegação e, se fizer sentido, formulário. Sem mockups de clientes fictícios.",
  },
  {
    title: "Marcações",
    note: "Espaço para um fluxo de pedido e confirmação. O stub actual vive em Marcar call.",
  },
] as const;

export default function TrabalhoPage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <div className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Trabalho</Eyebrow>
          <h1 className="text-4xl leading-tight md:text-5xl">
            Portefólio em aberto.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Ainda não há projectos públicos nesta página. Preferimos o vazio
            honesto a capturas e métricas que não existem. Os cartões abaixo
            são reservas de espaço.
          </p>
        </div>
      </Section>
      <Section className="pb-24">
        <div className="grid gap-5 md:grid-cols-3">
          {reserved.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <Badge variant="outline">Por publicar</Badge>
                <CardTitle className="font-heading text-xl">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mb-4 aspect-[4/3] rounded-lg bg-secondary" />
                <p className="leading-relaxed text-muted-foreground">
                  {item.note}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button
            render={<Link href="/marcar-call" />}
            nativeButton={false}
            className="h-11 px-5"
          >
            Marcar call
          </Button>
          <Button
            render={<Link href="/contacto" />}
            nativeButton={false}
            variant="outline"
            className="h-11 px-5"
          >
            Escrever
          </Button>
        </div>
      </Section>
    </>
  );
}
