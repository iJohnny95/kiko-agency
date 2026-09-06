import { ProcessIcon } from "@/components/icons";
import { Reveal } from "@/components/motion-primitives";
import { Eyebrow, Section } from "@/components/section";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-14">
        <Reveal className="flex max-w-xl flex-col gap-5">
          <Eyebrow>Processo</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-5xl">
            Brief → Proposta → Entrega
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Três passos, sem teatro. O objectivo é um site que um visitante
            percebe — e no qual sabe o que fazer a seguir.
          </p>
        </Reveal>
        <ol className="relative grid gap-8 md:grid-cols-3 md:gap-6">
          <span className="pointer-events-none absolute top-10 right-8 left-8 hidden h-px bg-linear-to-r from-transparent via-accent/70 to-transparent md:block" />
          {processSteps.map((step, index) => (
            <li key={step.n}>
              <Reveal delay={index * 0.08}>
                <div className="relative flex flex-col gap-5 rounded-2xl border border-foreground/8 bg-card/50 p-6 backdrop-blur-sm md:p-7">
                  <div className="flex items-center justify-between">
                    <ProcessIcon name={step.icon} className="text-foreground" />
                    <span className="font-heading text-sm tracking-[0.2em] text-accent">
                      {step.n}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
