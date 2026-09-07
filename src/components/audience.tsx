import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { Surface } from "@/components/surface";
import { audience } from "@/lib/site";

export function Audience() {
  return (
    <Section className="section-y">
      <div className="flex flex-col gap-12">
        <Reveal className="flex max-w-2xl flex-col gap-5">
          <Eyebrow>Para quem</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Para negócios que precisam de ser{" "}
            <span className="text-gradient">percebidos</span>.
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Não é uma agência de anúncios nem de loja de prateleira. É um
            estúdio de sites — landing, multi-página, marcações — para quem
            tem uma oferta e um visitante real.
          </p>
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {audience.map((item) => (
            <StaggerItem key={item.title}>
              <Surface>
                <h3 className="text-xl font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </Surface>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
