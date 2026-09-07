import Link from "next/link";
import { Cta } from "@/components/cta";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";
import { featuredCase } from "@/lib/site";

export function CaseTeaser() {
  return (
    <Section className="section-y">
      <Reveal className="mb-10 flex max-w-2xl flex-col gap-5">
        <Eyebrow>Trabalho</Eyebrow>
        <h2 className="text-3xl leading-tight md:text-5xl">
          Um caso, quando houver{" "}
          <span className="text-gradient">autorização</span>.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Sem métricas inventadas. O destaque descreve formato, contexto e o
          que o visitante passou a conseguir fazer — ou fica reservado.
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <Surface className="lg:flex-row lg:items-end lg:justify-between">
          <div className="flex max-w-xl flex-col gap-4">
            <Badge variant="outline">{featuredCase.status}</Badge>
            <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
              {featuredCase.title}
            </h3>
            <p className="text-sm text-muted-foreground">{featuredCase.format}</p>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {featuredCase.context}
            </p>
          </div>
          <Link
            href="/trabalho"
            className="text-sm text-foreground underline decoration-accent/60 underline-offset-3 hover:decoration-accent"
          >
            Ver o quadro do caso →
          </Link>
        </Surface>
      </Reveal>
      <Reveal className="mt-8">
        <Cta href="/marcar-call" variant="ctaOutline">
          Marcar call
        </Cta>
      </Reveal>
    </Section>
  );
}
