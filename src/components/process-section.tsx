import { Eyebrow, Section } from "@/components/section";
import { processSteps } from "@/lib/site";

export function ProcessSection() {
  return (
    <Section className="py-20 md:py-28">
      <div className="flex flex-col gap-12">
        <div className="flex max-w-xl flex-col gap-4">
          <Eyebrow>Processo</Eyebrow>
          <h2 className="text-3xl leading-tight md:text-4xl">
            Brief → Proposta → Entrega
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">
            Três passos, sem teatro. O objectivo é chegar a um site que um
            visitante percebe — e no qual sabe o que fazer a seguir.
          </p>
        </div>
        <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
          {processSteps.map((step) => (
            <li key={step.n} className="flex flex-col gap-4 border-t border-border pt-6">
              <span className="text-xs tracking-[0.2em] text-accent-foreground/80">
                {step.n}
              </span>
              <h3 className="text-2xl">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
