import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { Badge } from "@/components/ui/badge";
import { featuredCase } from "@/lib/site";

export function FeaturedCase() {
  return (
    <Section className="section-y">
      <Reveal className="mb-8 flex max-w-2xl flex-col gap-5">
        <Eyebrow>{featuredCase.eyebrow}</Eyebrow>
        <h2 className="text-3xl leading-tight md:text-5xl">
          Um projecto em destaque —{" "}
          <span className="text-gradient">quando existir</span>.
        </h2>
      </Reveal>
      <Reveal delay={0.06}>
        <Surface className="gap-6">
          <Badge variant="outline">{featuredCase.status}</Badge>
          <p className="text-[0.7rem] tracking-[0.16em] text-muted-foreground uppercase">
            {featuredCase.client}
          </p>
          <h3 className="text-2xl font-semibold tracking-tight md:text-4xl">
            {featuredCase.title}
          </h3>
          <p className="text-sm text-foreground/80">{featuredCase.format}</p>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            {featuredCase.context}
          </p>
          <p className="max-w-2xl text-sm leading-relaxed">
            <span className="text-muted-foreground">Sucesso: </span>
            {featuredCase.success}
          </p>
        </Surface>
      </Reveal>
    </Section>
  );
}
