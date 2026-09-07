import { Reveal } from "@/components/motion-primitives";
import { Surface } from "@/components/surface";
import { nextSteps } from "@/lib/site";

export function NextSteps({
  variant,
}: {
  variant: "contacto" | "call";
}) {
  return (
    <Reveal className="flex flex-col gap-5">
      <Surface>
        <h2 className="text-xl font-semibold tracking-tight">
          O que acontece a seguir
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {variant === "contacto"
            ? nextSteps.afterContact
            : nextSteps.afterCall}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {nextSteps.response}
        </p>
      </Surface>
      <Surface>
        <h2 className="text-xl font-semibold tracking-tight">
          O que preparar para o brief
        </h2>
        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {nextSteps.prepare.map((item) => (
            <li key={item} className="border-l-2 border-accent pl-3">
              {item}
            </li>
          ))}
        </ul>
      </Surface>
    </Reveal>
  );
}
