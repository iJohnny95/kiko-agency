import { ProcessIcon } from "@/components/icons";
import { Reveal, Stagger, StaggerItem } from "@/components/motion-primitives";
import { Surface } from "@/components/surface";
import { Eyebrow, Section } from "@/components/section";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <Section className="section-y">
      <div className="flex flex-col gap-14">
        <Reveal className="flex max-w-xl flex-col gap-5">
          <Eyebrow>Sistema</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Brief → Proposta →{" "}
            <span className="text-gradient">Entrega</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Três passos, sem teatro. O objectivo é um site que um visitante
            percebe — e no qual sabe o que fazer a seguir.
          </p>
        </Reveal>
        <Stagger className="grid gap-4 md:grid-cols-3">
          {processSteps.map((step) => (
            <StaggerItem key={step.n} className="h-full">
              <Surface>
                <div className="flex items-center justify-between">
                  <ProcessIcon name={step.icon} className="text-foreground" />
                  <span className="text-gradient text-sm font-semibold tracking-[0.2em]">
                    {step.n}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </Surface>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
