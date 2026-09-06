import Link from "next/link";
import { Kiko } from "@/components/kiko";
import { ProcessSection } from "@/components/process-section";
import { Eyebrow, Section } from "@/components/section";
import { SocialProof } from "@/components/social-proof";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Section className="flex min-h-[calc(100svh-4.25rem)] flex-col justify-center py-16 md:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16">
          <div className="flex flex-col gap-8">
            <Eyebrow>{site.domain}</Eyebrow>
            <h1 className="max-w-xl text-4xl leading-[1.1] sm:text-5xl md:text-6xl">
              {site.tagline}
            </h1>
            <p className="max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Landing pages, sites multi-página (com ou sem formulário) e
              agendamento. Direção editorial, não decoração. O visitante deve
              perceber a oferta e saber o próximo passo.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                render={<Link href="/marcar-call" />}
                nativeButton={false}
                className="h-12 px-6 text-sm"
              >
                Marcar call
              </Button>
              <Button
                render={<Link href="/servicos" />}
                nativeButton={false}
                variant="outline"
                className="h-12 px-6 text-sm"
              >
                Ver serviços
              </Button>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Kiko slot="hero" size="lg" priority />
          </div>
        </div>
      </Section>

      <div className="border-y border-border bg-card/60">
        <SocialProof />
      </div>

      <Section className="py-20 md:py-28">
        <div className="flex flex-col gap-12">
          <div className="flex max-w-xl flex-col gap-4">
            <Eyebrow>O que fazemos</Eyebrow>
            <h2 className="text-3xl leading-tight md:text-4xl">
              Três formatos, um critério: clareza que converte.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {services.map((service) => (
              <Card key={service.slug}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.summary}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div>
            <Button
              render={<Link href="/servicos" />}
              nativeButton={false}
              variant="outline"
              className="h-11 px-5"
            >
              Ver serviços
            </Button>
          </div>
        </div>
      </Section>

      <div className="border-t border-border">
        <ProcessSection />
      </div>

      <div className="border-t border-border bg-primary text-primary-foreground">
        <Section className="py-20 md:py-24">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="flex max-w-xl flex-col gap-3">
              <h2 className="text-3xl leading-tight md:text-4xl">
                Uma call. Sem pitch longo.
              </h2>
              <p className="text-sm leading-relaxed text-primary-foreground/75">
                Pedido de marcação — ainda um stub. Serve para ensaiar o
                caminho até à conversa.
              </p>
            </div>
            <Button
              render={<Link href="/marcar-call" />}
              nativeButton={false}
              variant="secondary"
              className="h-12 px-6"
            >
              Marcar call
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
}
