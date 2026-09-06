import Link from "next/link";
import { Kiko } from "@/components/kiko";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Section className="flex flex-1 flex-col items-center justify-center py-24 text-center">
      <Kiko slot="hero" size="sm" />
      <h1 className="mt-6 text-4xl">Página em falta</h1>
      <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
        Este endereço não existe neste wireframe. Volte ao início ou aos
        serviços.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button render={<Link href="/" />} nativeButton={false} className="h-11 px-5">
          Início
        </Button>
        <Button
          render={<Link href="/servicos" />}
          nativeButton={false}
          variant="outline"
          className="h-11 px-5"
        >
          Serviços
        </Button>
      </div>
    </Section>
  );
}
