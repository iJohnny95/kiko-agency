import { Cta } from "@/components/cta";
import { Section } from "@/components/section";

export default function NotFound() {
  return (
    <Section className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
        Página em falta
      </h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        Este endereço não existe neste site. Volte ao início ou aos serviços.
      </p>
      <div className="mt-8 flex w-full max-w-sm flex-col gap-3 sm:max-w-none sm:flex-row sm:justify-center">
        <Cta href="/">Início</Cta>
        <Cta href="/servicos" variant="ctaOutline">
          Serviços
        </Cta>
      </div>
    </Section>
  );
}
