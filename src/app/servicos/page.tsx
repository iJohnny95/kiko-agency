import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Landing pages, sites multi-página com ou sem formulário, e agendamento.",
};

export default function ServicosPage() {
  return (
    <>
      <Section className="pt-16 pb-10 md:pt-24">
        <div className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Serviços</Eyebrow>
          <h1 className="text-4xl leading-tight md:text-5xl">
            Páginas com uma oferta e um próximo passo.
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground">
            Três formatos. O detalhe de cada projecto — páginas, copy, prazo —
            fica na proposta, depois do brief. Aqui está o que pedimos e o que
            entregamos, sem lista de extras inventados.
          </p>
        </div>
      </Section>
      <Section className="pb-24">
        <div className="grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.slug} className="h-full">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4">
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
              </CardContent>
              <CardFooter className="mt-auto">
                <Button
                  render={<Link href="/marcar-call" />}
                  nativeButton={false}
                  variant="outline"
                  className="h-10 px-4"
                >
                  Pedir proposta
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
